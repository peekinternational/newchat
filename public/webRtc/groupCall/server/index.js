
import path from 'path';
import url from 'url';
import https from 'https';
import http from 'http';
import fs from 'fs';

import express from 'express';
import kurento from 'kurento-client';
// import socketIO from 'socket.io';
import socketIO from 'ws';

import minimst from 'minimist';
import Session from './lib/session.js';
import Register from './lib/register.js';
import mongoose from 'mongoose';

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

let userRegister = new Register();
let rooms = {};
// let roomsUserCount = [];

const argv = minimst(process.argv.slice(2), {
    default: {
        as_uri: 'https://peekvideochat.com:3000',
        ws_uri: 'ws://localhost:8888/kurento'
    }
});

/////////////////////////// https ///////////////////////////////
const options = {
    key: fs.readFileSync('./keys/server.key'),
    cert: fs.readFileSync('./keys/server.crt')
};

let app = express();
var idCounter = 0;

let asUrl = url.parse(argv.as_uri);
let port = asUrl.port;
let server = https.createServer(options, app).listen(port, () => {
    console.log('Kurento Group Call started');
    console.log('Open %s with a WebRTC capable brower.', url.format(asUrl));
});

/////////////////////////// websocket ///////////////////////////////
var socketObj = null;
var io = new socketIO.Server({
    server: server,
    path: '/groupcall'
});

socketConnect();
function socketConnect(){
    io.on('connection', socket => {
        console.log('Connected ...');
        socketObj = socket;
        socket.channels = {};
    
        // error handle
        socket.on('error', error => {
            console.error(`Connection: %s error : %s`, socket.id, error);
          //  socketConnect();
        });
    
        socket.on('disconnect', data => {
            // delete sockets[sessionId];
            console.log(`Connection: %s disconnect`, data);
           // socketConnect();
        });

        socket.on('close', data => {
            // delete sockets[sessionId];
            console.log(`Connection: %s closed`, data);
            // socketConnect();
        });
    
        socket.on('message', _message => {
            var message = JSON.parse(_message);
      
          //   console.log(`Connection: %s receive message`, message.id);
    
            switch (message.id) {
                case 'updateMemberStatus':  // against IO, needs recheck ...
                var data = {
                    'id': "_updateVideoStatus",
                    'sender': message.sender,
                    'socketId': message.socketId,
                    'mySocketId': message.mySocketId,
                    'roomName': message.roomName,
                    'videoStatus': message.videoStatus,
                    'isAdmin': message.isAdmin,
                    'myAdminStatus': message.myAdminStatus,
                    'audio': message.audio
                };

                var userSession = userRegister.getById(message.socketId);
                var room = rooms[userSession.roomName];
                var usersInRoom = room.participants;
                for (var i in usersInRoom) {
                  //  console.log(usersInRoom[i]);
                    usersInRoom[i].socket.send(JSON.stringify(data));
                }

                break;
                
                case 'joinRoom':
                    joinRoom(socket, message, err => {
                        if (err) {
                            console.error(`join Room error ${err}`);
                        }
                    });
                    break;
                case 'receiveVideoFrom':
                    // console.log('receiveVideoFrom= ', message);
                    receiveVideoFrom(socket, message.sender, message.socketId, message.sdpOffer, (error) => {
                        if (error) {
                            console.error(error);
                        }
                    });
                    break;
                case 'leaveRoom':
                    leaveRoom(socket, message.socketId, (error) => {
                        if (error) {
                            console.error(error);
                        }
                    });
                    break;
                case 'onIceCandidate':
                    addIceCandidate(socket, message, (error) => {
                        if (error) {
                            console.error(error);
                        }
                    });
                    break;
                default:
                    socket.send(JSON.stringify({
                        id: 'error',
                        message: 'Invalid message ' + message
                    }));
                    break;
            }
        });
    });
}


/**
 * 
 * @param {*} socket 
 * @param {*} message 
 * @param {*} callback 
 */
function joinRoom(socket, message, callback) {
    console.log("JOIN ROOM", message);
    getRoom(message.roomName, (error, room) => {
        if (error) {
            callback(error);
            return;
        }

        // join user to room
        join(socket, room, message.name, message.socketId, message.statuscall, (err, user) => {
            console.log(`join success : ${user.name}`);
            if (err) {
                callback(err);
                return;
            }
            callback();
        });
    });
}

/**
 * Get room. Creates room if room does not exists
 * 
 * @param {string} roomName 
 * @param {function} callback 
 */
function getRoom(roomName, callback) {
    let room = rooms[roomName];

    if (room == null) {
     //   console.log(`create new room : ${roomName}`);
        getKurentoClient((error, kurentoClient) => {
            if (error) {
                return callback(error);
            }

            kurentoClient.create('MediaPipeline', (error, pipeline) => {
                if (error) {
                    return callback(error);
                }
                room = {
                    name: roomName,
                    pipeline: pipeline,
                    participants: {},
                    kurentoClient: kurentoClient
                };

                rooms[roomName] = room;
                callback(null, room);
            });
        });
    } else {
       // console.log(`get existing room : ${roomName}`);
        callback(null, room);
    }
}


/**
 * join call room
 * 
 * @param {*} socket 
 * @param {*} room 
 * @param {*} userName 
 * @param {*} callback 
 */
// var mysession = null;
// var userRegsiter = null;

function join(socket, room, userName, socketId, statuscall, callback) {
    console.log("... statuscall...", statuscall);
    let userSession = new Session(socket, userName, room.name, socketId);   // add user to session
    userRegister.register(userSession);

    room.pipeline.create('WebRtcEndpoint', (error, outgoingMedia) => {
        if (error) {
            console.error('no participant in room');
            if (Object.keys(room.participants).length === 0) {
                room.pipeline.release();
            }
            return callback(error);
        }

        outgoingMedia.setMaxVideoRecvBandwidth(2000);
        outgoingMedia.setMinVideoRecvBandwidth(100);
        userSession.setOutgoingMedia(outgoingMedia);

        // add ice candidate the get sent before endpoint is established
        // socket.id : room iceCandidate Queue
        let iceCandidateQueue = userSession.iceCandidateQueue[userSession.name];
        if (iceCandidateQueue) {
            while (iceCandidateQueue.length) {
                let message = iceCandidateQueue.shift();
            //    console.error(`user: ${userSession.id} collect candidate for outgoing media`);
                userSession.outgoingMedia.addIceCandidate(message.candidate);
            }
        }

        // ICE listener
        userSession.outgoingMedia.on('OnIceCandidate', event => {
           
            let candidate = kurento.register.complexTypes.IceCandidate(event.candidate);

            let jsonMessage = JSON.stringify({
                id: 'iceCandidate',
                name: userSession.name,
                candidate: candidate,
                sockid: socketId
            });

            userSession.sendMessage(jsonMessage);
        });

        let usersInRoom = room.participants;
        let existingUsers = [];

          for (let i in usersInRoom) {
            if (usersInRoom[i].name != userSession.name) {
                 let jsonMessage = JSON.stringify({
                    "id": 'newParticipantArrived',
                    "name": userSession.name,
                    "sockid": socketId,
                    "isAdmin": false, // new change 5-11-2020
                    "statuscall": statuscall
                });
                 usersInRoom[i].sendMessage(jsonMessage);
            }
        }


        // send list of current user in the room to current participant
        for (let i in usersInRoom) {
            if (usersInRoom[i].name != userSession.name) {
                 existingUsers.push({'username': usersInRoom[i].name, 'sockId': usersInRoom[i].id, 'roomName': usersInRoom[i].roomName, 'isAdmin': false});
            }
        }
       
      let isAdmin = false;
        let jsonMessage = JSON.stringify({
            "id": 'existingParticipants',
            "data": existingUsers,
            "roomName": room.name,
            "sockid": socketId,
            "isAdmin": isAdmin,
            "statuscall": statuscall
        });
     
        //console.log("existingParticipants: ", jsonMessage);
        userSession.sendMessage(jsonMessage);

        // register user to room
        room.participants[userSession.name] = userSession;

        callback(null, userSession);
    });
}

/**
 * receive video from sender
 * 
 * @param {*} socket 
 * @param {*} senderName 
 * @param {*} sdpOffer 
 * @param {*} callback 
 */
function receiveVideoFrom(socket, senderName, socketId, sdpOffer, callback) {
    //let userSession = userRegister.getById(socket.id);
  //  console.log("sender: ", senderName);
    let userSession = userRegister.getById(socketId);
    let sender = userRegister.getByName(senderName);

    // if (!userSession) userSession = mysession;
    // console.log("receiveVideoFrom: ", userSession);
  //   console.log("receiveVideoFrom: ", sender);

    getEndpointForUser(userSession, sender, (error, endpoint) => {
        if (error) {
            console.error(error);
            callback(error);
        }
        //console.log("^^^^endpoint^^^^");
        //  console.log(endpoint);
        endpoint.processOffer(sdpOffer, (error, sdpAnswer) => {
        //    console.log(`process offer from ${sender.name} to ${userSession.name}`);
            if (error) {
                return callback(error);
            }
            let data = {
                id: 'receiveVideoAnswer',
                name: sender.name,
                sockid: socketId,
                sdpAnswer: sdpAnswer
            };
            let jsonMessage = JSON.stringify({
                id: 'receiveVideoAnswer',
                name: sender.name,
                sockid: socketId,
                sdpAnswer: sdpAnswer
            });

            userSession.sendMessage(jsonMessage);
            // userSession.sendMessage(data);

            endpoint.gatherCandidates(error => {
                if (error) {
                    return callback(error);
                }
            });

            return callback(null, sdpAnswer);
        });
    });
}


/**
 * 
 */
function leaveRoom(socket, socketId, callback) {
   
    var userSession = userRegister.getById(socketId);
    if (!userSession) {
        return;
    }
  
    var room = rooms[userSession.roomName];
    if (!room) {
        return;
    }

 ///   console.log('notify all user that ' + userSession.name + ' is leaving the room ' + room.name);
    var usersInRoom = room.participants;
    delete usersInRoom[userSession.name];

    // delete socket.channels[channel];
    // delete channels[channel][sessionId];
 
    // for (let r in roomsUserCount) {
    //     if (roomsUserCount[r].roomName == room.name && roomsUserCount[r].totalParticipants > 0) {
    //         roomsUserCount[r].totalParticipants--;
    //         // for(let u in roomsUserCount[r].usersList){
    //         //     if (userSession.id == roomsUserCount[r].usersList[u].sockId){
    //         //         roomsUserCount[r].usersList.splice(u,1);
    //         //         console.log("leaveRoom:> ", roomsUserCount[r]);
    //         //         if (roomsUserCount[r].usersList.length == 0) roomsUserCount.splice(r,1);
    //         //         break;
    //         //     }
    //         // }
    //         break;
    //     }
    // }

    userSession.outgoingMedia.release();
  
    // release incoming media for the leaving user
    for (var i in userSession.incomingMedia) {
        userSession.incomingMedia[i].release();
        delete userSession.incomingMedia[i];
    }

    var data = {
        id: 'participantLeft',
        name: userSession.name
    };
    var jsongMessage = JSON.stringify({
        id: 'participantLeft',
        name: userSession.name
    });
   
    for (var i in usersInRoom) {
        var user = usersInRoom[i];
        // release viewer from this
        user.incomingMedia[userSession.name].release();
        delete user.incomingMedia[userSession.name];
        // notify all user in the room
        user.sendMessage(jsongMessage);
        // user.sendMessage(data);
    }

    // Release pipeline and delete room when room is empty
    if (Object.keys(room.participants).length == 0) {
        room.pipeline.release();
        delete rooms[userSession.roomName];
    }

    delete userSession.roomName;
}


/**
 * getKurento Client
 * 
 * @param {function} callback 
 */
function getKurentoClient(callback) {
    kurento(argv.ws_uri, (error, kurentoClient) => {
        if (error) {
            let message = `Could not find media server at address ${argv.ws_uri}`;
            return callback(`${message} . Exiting with error ${error}`);
        }
        callback(null, kurentoClient);
    });
}

/**
 *  Add ICE candidate, required for WebRTC calls
 * 
 * @param {*} socket 
 * @param {*} message 
 * @param {*} callback 
 */
function addIceCandidate(socket, message, callback) {
    // console.log('AddIceCandidate: .....' , message.socketId);
    let user = userRegister.getById(message.socketId);
    // console.log('AddIceCandidate: .....' , user);
    if (user != null) {
        // assign type to IceCandidate
        let candidate = kurento.register.complexTypes.IceCandidate(message.candidate);
        user.addIceCandidate(message, candidate);
        callback();
    } else {
       // console.error(`ice candidate with no user receive : ${message.sender}`);
        callback(new Error("addIceCandidate failed"));
    }
}


/**
 * 
 * @param {*} userSession 
 * @param {*} sender 
 * @param {*} callback 
 */
function getEndpointForUser(userSession, sender, callback) {
//    console.log('...getEndpointForUser...', sender);
        // console.log("(((sender)))");  
        //  console.log(sender);
    if (userSession && userSession.name === sender.name) {
        return callback(null, userSession.outgoingMedia);
    }

    let incoming = userSession.incomingMedia[sender.name];
    // console.log(incoming);
    if (incoming == null) {
        // console.log(userSession);
      //  console.log(`user : ${userSession.id} create endpoint to receive video from : ${sender.id}`);
        getRoom(userSession.roomName, (error, room) => {
            if (error) {
                console.error(error);
                callback(error);
                return;
            }
            room.pipeline.create('WebRtcEndpoint', (error, incoming) => {
                if (error) {
                    if (Object.keys(room.participants).length === 0) {
                        room.pipeline.release();
                    }
                    console.error('error: ' + error);
                    callback(error);
                    return;
                }

              //  console.log(`user: ${userSession.name} successfully create pipeline`);
                incoming.setMaxVideoRecvBandwidth(2000);
                incoming.setMinVideoRecvBandwidth(100);
                userSession.incomingMedia[sender.name] = incoming;


                // add ice candidate the get sent before endpoints is establlished
                let iceCandidateQueue = userSession.iceCandidateQueue[sender.name];
                if (iceCandidateQueue) {
                    while (iceCandidateQueue.length) {
                        let message = iceCandidateQueue.shift();
                      //  console.log(`user: ${userSession.name} collect candidate for ${message.data.sender}`);
                        incoming.addIceCandidate(message.candidate);
                    }
                }

                incoming.on('OnIceCandidate', event => {
                    // ka ka ka ka ka
                    // console.log(`generate incoming media candidate: ${userSession.id} from ${sender.id}`);
                    let candidate = kurento.register.complexTypes.IceCandidate(event.candidate);
                    let jsongMessage = JSON.stringify({
                        id: 'iceCandidate',
                        name: sender.name,
                        candidate: candidate,
                        sockid: sender.id
                    });
                    userSession.sendMessage(jsongMessage);

                    // userSession.sendMessage({
                    //     id: 'iceCandidate',
                    //     name: sender.name,
                    //     candidate: candidate
                    // });
                });

                sender.outgoingMedia.connect(incoming, error => {
                    if (error) {
                        console.log(error);
                        callback(error);
                        return;
                    }
                    callback(null, incoming);
                });
            });
        })
    } else {
   //     console.log(`user: ${userSession.name} get existing endpoint to receive video from: ${sender.name}`);
        sender.outgoingMedia.connect(incoming, error => {
            if (error) {
                callback(error);
            }
            callback(null, incoming);
        });
    }
}


app.use(express.static(path.join('/var/www/demos/peekVueChat/public/webRtc/groupCall/server', 'static')));
