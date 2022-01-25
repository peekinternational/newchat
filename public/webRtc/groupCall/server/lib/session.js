'use strict';

/**
 *  User session 
 */
export default class Session {

    /**
     * constructor method
     * 
     * @param {object} socket    Socket
     */
    constructor(socket, userName, roomName, id) {
        this.id = id;
        // this.id = socket.id;
        this.socket = socket;
        this.name = userName;
        this.roomName = roomName;
        this.outgoingMedia = null;
        this.incomingMedia = {};
        this.iceCandidateQueue = {};
    }

    /**
     * ice candidate for this user
     * @param {object} data 
     * @param {object} candidate 
     */
    addIceCandidate(data, candidate) {
        // self
        if (data.sender === this.name) {
            // have outgoing media.
            if (this.outgoingMedia) {
               // console.log(` add candidate to self : %s`, data.sender);
                this.outgoingMedia.addIceCandidate(candidate);
            } else {
                // save candidate to ice queue.
               // console.log(` still does not have outgoing endpoint for ${data.sender}`);
                this.iceCandidateQueue[data.sender].push({
                    data: data,
                    candidate: candidate
                });
            }
        } else {
            // others
            let webRtc = this.incomingMedia[data.sender];
            if (webRtc) {
              //  console.log(`%s add candidate to from %s`, this.name, data.sender);
                webRtc.addIceCandidate(candidate);
            } else {
              //  console.log(`${this.name} still does not have endpoint for ${data.sender}`);
                if (!this.iceCandidateQueue[data.sender]) {
                    this.iceCandidateQueue[data.sender] = [];
                }
                this.iceCandidateQueue[data.sender].push({
                    data: data,
                    candidate: candidate
                });
            }
        }
    }

    /**
     * 
     * @param {*} data 
     */
    sendMessage(data) {
        // console.log(this.name , ' <:> ');
        if (this.socket) {
            try {
                // console.log(this.socket);
                this.socket.send(data);
            } catch (err) {
              // console.log(socket);
                console.log("Socket error catched ---> ", err);
            }
        } else {
            console.error('socket is null');
        }
    }


    setOutgoingMedia(outgoingMedia) {
        this.outgoingMedia = outgoingMedia;
    }

    /**
     * 
     * @param {*} roomName 
     */
    setRoomName(roomName) {
        this.roomName = roomName;
    }


    /**
     * 
     * @param {*} userName 
     */
    setUserName(userName) {
        this.name = userName;
    }

}