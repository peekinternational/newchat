var socket;// = new WebSocket('wss://' + location.host + '/groupcall');
var participants = {};
var name;
var amIAdmin = false;
var myroomName = '';
var mySocketId = 0;
var socketIO = io('https://peekvideochat.com:22000');
var callType = '';


socketIO.on('_leaveAndroidUser', (data) => {
	if (data.callType == "o2o") {
		if (data.roomName == myroomName)
			leaveAndroidRoom(data);
	}
	else if (data.callType == "group") {
		if (data.roomName == myroomName && data.name == this.name)// && data.name == name && data.userId == mySocketId) 
			leaveAndroidRoom(data);
	}
	else if (data.callType == "room"){
		//alert(data.roomName +"=="+ myroomName +" && "+ data.name +"=="+ name + "   rand: "+ data.userId);
		if (data.roomName == myroomName && data.name == this.name)
			leaveAndroidRoom(data);
	}
});

socketIO.on('_updateControlStatus', (data) => {
	if (data.audio == 0) {
		if ((myroomName === '' || data.roomName === myroomName) && data.socketId === mySocketId) {
			if (data.myAdminStatus) {
				if (data.videoStatus) {
					let myobj = document.getElementById('videoMsg-' + data.socketId);
					myobj.remove();
					document.getElementById('vidStopbtn-' + data.socketId).disabled = false;
				}
				else {
					let messageEle = document.createElement('p');
					messageEle.id = "videoMsg-" + data.socketId;
					messageEle.innerText = 'stopped by Admin';
					document.getElementById(data.sender).appendChild(messageEle);
					document.getElementById('vidStopbtn-' + data.socketId).disabled = true;
				}
			}

			const stream = document.getElementById('video-' + data.socketId).srcObject;
			stream.getVideoTracks()[0].enabled = !(stream.getVideoTracks()[0].enabled);
		}
	}
	else {
		if ((myroomName === '' || data.roomName === myroomName) && data.socketId === mySocketId) {
			if (data.myAdminStatus) {
				if (data.videoStatus) {
					let myobj = document.getElementById('videoMsg-' + data.socketId);
					myobj.remove();
					document.getElementById('audStopbtn-' + data.socketId).disabled = false;
				}
				else {
					let messageEle = document.createElement('p');
					messageEle.id = "videoMsg-" + data.socketId;
					messageEle.innerText = 'stopped by Admin';
					document.getElementById(data.sender).appendChild(messageEle);
					document.getElementById('audStopbtn-' + data.socketId).disabled = true;
				}
			}

			const stream = document.getElementById('video-' + data.socketId).srcObject;
			stream.getAudioTracks()[0].enabled = !(stream.getAudioTracks()[0].enabled);
		}
	}
});

window.onbeforeunload = function () {
	leaveRoom();
	socket.close();
};

const supports = navigator.mediaDevices.getSupportedConstraints();
const devices = navigator.mediaDevices.enumerateDevices();
if (!supports['facingMode']) {
	alert('This browser does not support facingMode!');
}

socketConnect();
function socketConnect() {
	socket = new WebSocket('wss://' + location.host + '/groupcall');

	socket.onopen = function () {
		console.log('SOCKET IS OPEN');
	}
	socket.onclose = function () {
		console.log('SOCKET IS CLOSING');
	}
	socket.onerror = function () {
		console.log('>>>> SOMETHING WENT WRONG <<<<');
	}

	socket.onmessage = function (message) {
		var parsedMessage = JSON.parse(message.data);
		//	console.info('Received message: ', parsedMessage.id);

		switch (parsedMessage.id) {
			case "_updateVideoStatus":

				if (parsedMessage.audio == 0) {
					if ((myroomName === '' || parsedMessage.roomName === myroomName) && parsedMessage.socketId === mySocketId) {
						if (parsedMessage.myAdminStatus) {
							if (parsedMessage.videoStatus) {
								let myobj = document.getElementById('videoMsg-' + parsedMessage.socketId);
								myobj.remove();
								// console.log(document.getElementById('vidStopbtn-' + parsedMessage.socketId));
								document.getElementById('vidStopbtn-' + parsedMessage.socketId).disabled = false;
							}
							else {
								let messageEle = document.createElement('p');
								messageEle.id = "videoMsg-" + parsedMessage.socketId;
								messageEle.innerText = 'stopped by Admin';
								document.getElementById(parsedMessage.sender).appendChild(messageEle);
								document.getElementById('vidStopbtn-' + parsedMessage.socketId).disabled = true;
							}
						}

						const stream = document.getElementById('video-' + parsedMessage.socketId).srcObject;
						stream.getVideoTracks()[0].enabled = !(stream.getVideoTracks()[0].enabled);
					}
				}
				else {
					if ((myroomName === '' || parsedMessage.roomName === myroomName) && parsedMessage.socketId === mySocketId) {
						if (parsedMessage.myAdminStatus) {
							if (parsedMessage.videoStatus) {
								let myobj = document.getElementById('videoMsg-' + parsedMessage.socketId);
								myobj.remove();
								//   console.log(document.getElementById('vidStopbtn-' + parsedMessage.socketId));
								document.getElementById('audStopbtn-' + parsedMessage.socketId).disabled = false;
							}
							else {
								let messageEle = document.createElement('p');
								messageEle.id = "videoMsg-" + parsedMessage.socketId;
								messageEle.innerText = 'stopped by Admin';
								document.getElementById(parsedMessage.sender).appendChild(messageEle);
								document.getElementById('audStopbtn-' + parsedMessage.socketId).disabled = true;
							}
						}

						const stream = document.getElementById('video-' + parsedMessage.socketId).srcObject;
						stream.getAudioTracks()[0].enabled = !(stream.getAudioTracks()[0].enabled);
					}
				}

				break;
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
				//console.log("iceCandidate: ",  parsedMessage);
				participants[parsedMessage.name].rtcPeer.addIceCandidate(parsedMessage.candidate, function (error) {
					if (error) {
						console.error("Error adding candidate: " + error);
						return;
					}
				});

				console.log("participants: ",  participants);
				break;
			default:
				console.error('Unrecognized message', parsedMessage);
		}
	}
}

function nextUniqueId() {
	mySocketId = Math.floor(Math.random() * Math.floor(9000));
	//	localStorage.setItem('socketId', mySocketId); //temporarily using localStorage, otherwise not a good approach
}

//  //////////////////////// for iframe case ////////////////////////////////////
function joinCallRoom(_name, room, socketId, groupData, userData = null) {
	mySocketId = socketId;
	this.name = _name;
	var roomName = room;

	document.getElementById('join').style.display = 'none';
	document.getElementById('room').style.display = 'block';

	var message = {};

	if (groupData) {
		
		let _groupData = JSON.parse(groupData);
		if (!_groupData)  _groupData = groupData;

		window.statuscall = _groupData.statuscall;
		callType = _groupData.callType; //needs recheck
		
		if(_groupData.callType == "group"){
			message = {
				"id": 'joinRoom',
				"name": this.name,
				"roomName": _groupData.groupName,
				"socketId": mySocketId,
				"statuscall": _groupData.statuscall
			};
		}
		else if(_groupData.callType == "room"){
			message = {
				"id": 'joinRoom',
				"name": this.name,
				"roomName": _groupData.roomName,
				"socketId": mySocketId,
				"statuscall": _groupData.statuscall
			};
		}

		if (_groupData.callType == "group") {
			var gData = {
				"groupId": _groupData.groupId,
				"groupName": _groupData.groupName,
				"userId": _groupData.userId,
				"groupCallid": '',
				"callType": _groupData.callType
			};
			
			socketIO.emit('sendGroupdetail', gData);
		}
		else if (_groupData.callType == "room"){
			let gData = {
			    "groupId": _groupData.roomId,
			    "groupName": _groupData.roomName,
			    "userId": _groupData.userId,
				"groupCallid": '',
				"callType": _groupData.callType
			};

			socketIO.emit('sendGroupdetail', gData);
		}
		else {
			roomName = _groupData.userId;

			message = {
				"id": 'joinRoom',
				"name": this.name,
				"roomName": roomName,
				"socketId": mySocketId,
				"statuscall": _groupData.statuscall,
			};

			var gData = {
				"userId": _groupData.userId,
				"userName": _groupData.userName,
				"friendId": _groupData.friendId,
				"status": 1,
				"statuscall": _groupData.statuscall,
				"callType": _groupData.callType		
			};

			socketIO.emit('updateCallStatus', gData);
		}
	}
	else {
		let _userData = JSON.parse(userData);
		window.statuscall = _userData.statuscall;

		message = {
			"id": 'joinRoom',
			"name": this.name,
			"roomName": roomName,
			"socketId": mySocketId,
			"statuscall": _userData.statuscall
		};
		callType = _userData.callType; // needs recheck

		var o2oobg = {
			reciverid: _userData.userId,
			friendId: _userData.friendId,
			statuscall: _userData.statuscall
		}
		socketIO.emit('O2OstarTimer', o2oobg);
	}

	sendMessage(message);
}

function leaveAndroidRoom(userData) {
	totalElements = 0;
	// console.log(userData);
	sendMessage({
		'id': 'leaveRoom',
		socketId: userData.userId
	});

	try {
		for (var key in participants) {
			participants[key].dispose();
		}
	}
	catch (err) {
		console.log("stream dispose error catched");
	}

	document.getElementById('join').style.display = 'block';
	document.getElementById('room').style.display = 'none';

	if (userData.callType == "o2o") {
		myroomName = "";
		sendMessage({
			'id': 'leaveRoom',
			socketId: mySocketId
		});

		try {
			for (var key in participants) {
				participants[key].dispose();
			}
		}
		catch (err) {
			console.log("stream dispose error catched");
		}
	}
}
// //////////////////////////////////////////////////////


function register(type) {
	nextUniqueId();
	this.name = document.getElementById('name').value;
	var roomName = document.getElementById('roomName').value;
	callType = type;

	document.getElementById('join').style.display = 'none';
	document.getElementById('room').style.display = 'block';

	var message = {
		"id": 'joinRoom',
		"name": this.name,
		"roomName": roomName,
		"socketId": mySocketId,
		"statuscall": "video"
	}
	sendMessage(message);
}

function onNewParticipant(request) {
//	console.log(request);
	receiveVideo(request.name, request.sockid, request.isAdmin, request.statuscall);
}

function receiveVideoResponse(result) {
	participants[result.name].rtcPeer.processAnswer(result.sdpAnswer, function (error) {
		if (error) return console.error(error);
	});
}

function callResponse(message) {
	if (message.response != 'accepted') {
		console.info('Call not accepted by peer. Closing call');
		stop();
	} else {
		webRtcPeer.processAnswer(message.sdpAnswer, function (error) {
			if (error) return console.error(error);
		});
	}
}

// ================================================= SWITCH ==========================================================
let stream;
//const capture = async facingMode => {
async function capture(mode) {
	// alert(mode);
	const constraints = {
		audio: true,
		video: {
			facingMode: "user"
		}
	};

	try {
		const stream = document.getElementById('video-' + mySocketId).srcObject;

		const streamTracks = stream.getTracks();
		if (streamTracks) {
			streamTracks.forEach(track => track.stop());
		}
	} catch (e) {
		alert(e);
		return;
	}

	let newStream = await navigator.mediaDevices.getUserMedia(constraints);

	document.getElementById("participants").firstElementChild.childNodes[0].srcObject = newStream;
	document.getElementById("participants").firstElementChild.childNodes[0].play;
	
	for (const track of newStream.getTracks()) {
		participants[this.name].rtcPeer.peerConnection.addTrack(track, newStream);
	}

	let myVideoEle = document.getElementById('video-' + mySocketId);//.srcObject;
	// if(statuscall == "audio"){ myVideoEle = null;}
	let newOfferoptions = {
		localVideo: myVideoEle,
		mediaConstraints: constraints,
		onicecandidate: participants[this.name].onIceCandidate.bind(participants[this.name])
	}

	participants[this.name].rtcPeer = new kurentoUtils.WebRtcPeer.WebRtcPeerSendonly(newOfferoptions,
		function (error) {
			if (error) return console.error(error);
			//participants[name].rtcPeer.generateOffer(participants[name].offerToReceiveVideo.bind(participants[name]));
		 	this.generateOffer(participants[this.name].offerToReceiveVideo.bind(participants[this.name]));
		});
}
// ========================================================================================================================

function onExistingParticipants(msg) {
	console.log(msg);

	var constraints = {
		audio: true,
		video: {
			facingMode: "user"
		}
	};
	amIAdmin = msg.isAdmin;
	myroomName = msg.roomName;

	var participant = new Participant(this.name, msg.sockid, msg.isAdmin, msg.statuscall);
	participants[this.name] = participant;
	var video = participant.getVideoElement();

	console.log("video ::> ", video);
	
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

			// const stream = video.srcObject;
			// stream.getVideoTracks()[0].enabled = false;
		
		});

	for (var exUser of msg.data) {
		receiveVideo(exUser.username, exUser.sockId, exUser.isAdmin, msg.statuscall);
	}
}


function leaveRoom() {
	totalElements = 0;

	sendMessage({
		'id': 'leaveRoom',
		socketId: mySocketId
	});

	try {
		for (var key in participants) {
			participants[key].dispose();
		}
	}
	catch (err) {
		console.log("stream dispose error catched");
	}

	document.getElementById('join').style.display = 'block';
	document.getElementById('room').style.display = 'none';
}

function receiveVideo(senderName, senderSockid, isAdmin, statuscall) {
	console.log("senderName ::> ", senderName, ": sockId-> ", senderSockid);

	var participant = new Participant(senderName, senderSockid, isAdmin, statuscall);
	participants[senderName] = participant;
	var video = participant.getVideoElement();
    
	console.log("video ::> ", video);
	var constraints = {
		audio: true,
		video: {
			facingMode: "user"
		}
	};

	var options = {
		remoteVideo: video,
		mediaConstraints: constraints,
		onicecandidate: participant.onIceCandidate.bind(participant)
	}
	console.log("participant ::> ", participant);
	participant.rtcPeer = new kurentoUtils.WebRtcPeer.WebRtcPeerRecvonly(options,
		function (error) {
			if (error) {
				return console.error(error);
			}
			this.generateOffer(participant.offerToReceiveVideo.bind(participant));
			// const stream = video.srcObject;
			// stream.getVideoTracks()[0].enabled = false;
		}
	);
}

function onParticipantLeft(request) {
	totalElements--;
	var participant = participants[request.name];
	participant.dispose();
	delete participants[request.name];

	let setGridSpan = 0;
	if (totalElements > 2) {
		if (totalElements % 2 === 0)
			setGridSpan = 0;

		else if (totalElements % 2 !== 0)
			setGridSpan = 1;
	}
	else setGridSpan = 2;

	let participantEle = document.getElementById("participants");
	if (!participantEle) return;
	else {
		let participantChildEle = document.getElementById("participants").lastElementChild;
		if (!participantChildEle) return;
	}

	if (setGridSpan == 1)
		document.getElementById("participants").lastElementChild.style.gridColumnStart = 'span 2';
	else if (setGridSpan == 0)
		document.getElementById("participants").lastElementChild.style.gridColumnStart = 'span 1';
	else if (setGridSpan == 2) {
		document.getElementById("participants").firstElementChild.style.gridColumnStart = 'span 2';
		document.getElementById("participants").lastElementChild.style.gridColumnStart = 'span 2';
	}

	if (totalElements == 2) {
		// document.getElementById("participants").children[0].classList.add('full-video');
		// document.getElementById("participants").children[1].classList.add('sender-video');

		let remoteVid_Div = document.getElementById("participants").children[0];
		let remoteVid = remoteVid_Div.children[0].id;
		let remoteVidId = remoteVid.split('-');
		// console.log(remoteVidId[1] + " <::> " + mySocketId);

		if (remoteVidId[1] == mySocketId) {
			document.getElementById("participants").children[0].classList.add('sender-video');
			document.getElementById("participants").children[1].classList.add("full-video");
		}
		else {
			document.getElementById("participants").children[0].classList.add('full-video');
			document.getElementById("participants").children[1].classList.add("sender-video");
		}
	}

	else if (totalElements == 1){
		document.getElementById("participants").children[0].classList.remove("sender-video");
		document.getElementById("participants").children[0].classList.add('full-video');
	}

}


function changeStream(){
	console.log(participants[this.name].rtcPeer);
	if (stream) {
			const tracks = stream.getTracks();
			tracks.forEach(track => track.stop());
	}
}

function sendMessage(message) {
	var jsonMessage = JSON.stringify(message);
	socket.send(jsonMessage);
}