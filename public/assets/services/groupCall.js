var groupUser = '';
var groupRoomName = '';
var name;
var socket = io('https://' + "peekvideochat.com:3000");
var participants = {};
const PARTICIPANT_MAIN_CLASS = 'participant main';
const PARTICIPANT_CLASS = 'participant';
console.log(socket);
window.onbeforeunload = function () {
        socket.disconnect();
};

socket.on('connect', () => {
     console.log('ws connect success');
});

socket.on('message', parsedMessage => {
        console.info('Received message: ' + parsedMessage.id);

        switch (parsedMessage.id) {
            case 'existingParticipants':
                onExistingParticipants(parsedMessage);
                break;
            case 'newParticipantArrived':
                onNewParticipant(parsedMessage);
                break;
            case 'participantLeft':
                onParticipantLeft(parsedMessage);
                break;
            case 'receiveVideoAnswer':
                receiveVideoResponse(parsedMessage);
                break;
            case 'iceCandidate':
                participants[parsedMessage.name].rtcPeer.addIceCandidate(parsedMessage.candidate, function (error) {
                    if (error) {
                        console.error("Error adding candidate: " + error);
                        return;
                    }
                });
                break;
            default:
                console.error('Unrecognized message', parsedMessage);
        }
    });


  function onNewParticipant(request) {
        receiveVideo(request.name);
    }

    function receiveVideoResponse(result) {
        participants[result.name].rtcPeer.processAnswer(result.sdpAnswer, function (error) {
            if (error) return console.error(error);
        });
    }

  // Call this function from HTML button click
  function register(groupData, userData) {
        socket.connect();
        name = userData; // document.getElementById('name').value;
        var roomName = groupData; // document.getElementById('roomName').value;

        console.log("name: " + name);
        console.log("roomName: " + roomName);
        document.getElementById('room-header').innerText = 'Meeting Id ' + roomName;
        document.getElementById('join').style.display = 'none';
        document.getElementById('room').style.display = 'block';

        var message = {
            id: 'joinRoom',
            name: name,
            roomName: roomName,
        }
        sendMessage(message);
    }

    function callResponse(message) {
        if (message.response != 'accepted') {
            console.info('Call not accepted by peer. Closing call');
            stop();
        } else {
            webRtcPeer.processAnswer(message.sdpAnswer, function (error) {
                if (error) return console.error (error);
            });
        }
    }

  function onExistingParticipants(msg) {
        var constraints = {
            audio: true,
            video: {
                mandatory: {
                    maxWidth: 320,
                    maxFrameRate: 15,
                    minFrameRate: 15
                }
            }
        };

        var participant = new Participant(groupUser);
        participants[groupUser] = participant;
        var video = participant.getVideoElement();

        console.log(video);

        var options = {
            localVideo: video,
            mediaConstraints: constraints,
            onicecandidate: participant.onIceCandidate.bind(participant)
        }
        participant.rtcPeer = new kurentoUtils.WebRtcPeer.WebRtcPeerSendonly(options,
            function (error) {
                if (error) {
                    return console.error(error);
                }
                this.generateOffer(participant.offerToReceiveVideo.bind(participant));
            });

        msg.data.forEach(receiveVideo);
    }

//Call this function from HTML button click, if user leaves a group-call
  function leaveRoom(userData = null, status = 2) {
        sendMessage({
            'id': 'leaveRoom'
        });

        for (var key in participants) {
            participants[key].dispose();
        }

        document.getElementById('join').style.display = 'block';
        document.getElementById('room').style.display = 'none';

        socket.close();
    }

   function receiveVideo(sender) {
        var participant = new Participant(sender);
        participants[sender] = participant;
        var video = participant.getVideoElement();
    
        var options = {
            remoteVideo: video,
            onicecandidate: participant.onIceCandidate.bind(participant)
        }

        participant.rtcPeer = new kurentoUtils.WebRtcPeer.WebRtcPeerRecvonly(options,
            function (error) {
                if (error) {
                    return console.error(error);
                }
                this.generateOffer(participant.offerToReceiveVideo.bind(participant));
            }
        );
    }

    function onParticipantLeft(request) {
        console.log('Participant ' + request.name + ' left');
        var participant = participants[request.name];
        participant.dispose();
        delete participants[request.name];
    }

    function sendMessage(message) {
        console.log('Senging message: ' + message.id);
        socket.emit('message', message);
    }



function Participant(name) {
        console.log("Participant name: " + name);
       
        this.name = name;
        var container = document.createElement('div');
        container.className = isPresentMainParticipant() ? PARTICIPANT_CLASS : PARTICIPANT_MAIN_CLASS;
        container.id = name;
        var span = document.createElement('span');
        var video = document.createElement('video');
        var rtcPeer;

        container.appendChild(video);
        container.appendChild(span);
        container.onclick = switchContainerClass;
        document.getElementById('participants').appendChild(container);

        span.appendChild(document.createTextNode(name));

        video.id = 'video-' + name;
        video.autoplay = true;
        video.controls = false;


        this.getElement = function () {
            return container;
        }

        this.getVideoElement = function () {
            return video;
        }

        function switchContainerClass() {
            if (container.className === PARTICIPANT_CLASS) {
                var elements = Array.prototype.slice.call(document.getElementsByClassName(PARTICIPANT_MAIN_CLASS));
                elements.forEach(function (item) {
                    item.className = PARTICIPANT_CLASS;
                });
                container.className = PARTICIPANT_MAIN_CLASS;
            } else {
                container.className = PARTICIPANT_CLASS;
            }
        }

        function isPresentMainParticipant() {
            return ((document.getElementsByClassName(PARTICIPANT_MAIN_CLASS)).length != 0);
        }

        this.offerToReceiveVideo = function (error, offerSdp, wp) {
            if (error) return console.error("sdp offer error")
            console.log('Invoking SDP offer callback function: ' + name);
            var msg = {
                id: "receiveVideoFrom",
                sender: name,
                sdpOffer: offerSdp
            };
            sendMessage(msg);
        }


        this.onIceCandidate = function (candidate, wp) {
            console.log("Local candidate" + candidate);

            var message = {
                id: 'onIceCandidate',
                candidate: candidate,
                sender: name
            };
            sendMessage(message);
        }

        Object.defineProperty(this, 'rtcPeer', { writable: true });

        this.dispose = function () {
            console.log('Disposing participant ' + this.name);
            this.rtcPeer.dispose();
            container.parentNode.removeChild(container);
        };
    }