const PARTICIPANT_MAIN_CLASS = 'participant main';
const PARTICIPANT_CLASS = 'participant grid-item';

/**
 * Creates a video element for a new participant
 *
 * @param {String} name - the name of the new participant, to be used as tag
 *                        name of the video element.
 *                        The tag of the new element will be 'video<name>'
 * @return
 */
var totalElements = 0;

function Participant(name, incomingId, isAdmin, statuscall) {
//	console.log("statuscall:> ", statuscall);
	totalElements++;
	let setGridSpan = false;
	this.name = name;
	var container = document.createElement('div');
	var myControlsDiv = document.createElement('div');
	myControlsDiv.id = "my-controls";
	myControlsDiv.className = "my-controls-style";
	var participantsDiv = document.getElementById('participants');
	var participantsRoom = document.getElementById('room');

	container.className = PARTICIPANT_CLASS;
	container.id = name;
	var span = document.createElement('p');
	span.className = "participantName";
	var video = document.createElement('video');
	video.className = "participantVideo-height";  // Needs recheck
	// video.poster = "/img/audioCallImg.png";

	// var imgOverlay = document.createElement('img');
	// imgOverlay.className = "participantImg-height";
	// imgOverlay.id = 'vidImgOverlay-' + incomingId;
	// imgOverlay.src = "/img/audioCallImg.png";

	// if (statuscall == "audio") {
	// 	imgOverlay.className = "showOverlayImg";
	// 	video.className = "hideVideo";
	// }
	// else if (window.statuscall == "audio"){
	// 	 imgOverlay.className = "showOverlayImg";
	// 	video.className = "hideVideo";
	// }
	
	//------------------ Switch Screen Button ---------------------
	// var switchBtnEnv;
	// var switchBtnUser;

	// switchBtnEnv = document.createElement('button');
	// switchBtnEnv.innerHTML = '<img src="img/ic_camera_switch.png" height="50px" width="50px">';
	// switchBtnEnv.innerHTML = "env";
	// switchBtnEnv.id = 'switchBtnEnv';
	// switchBtnEnv.onclick = function() {
	// document.getElementById('switchBtnEnv').style.display = 'none';
	// document.getElementById('switchBtnUser').style.display = 'block';
	// capture("environment");
	// };

	// switchBtnUser = document.createElement('button');
	// switchBtnUser.innerHTML = "user";
	// switchBtnUser.innerHTML = '<img src="img/ic_camera_switch.png" height="50px" width="50px">';
	// switchBtnUser.id = 'switchBtnUser';
	// switchBtnUser.onclick = function() {
	// document.getElementById('switchBtnEnv').style.display = 'block';
	// document.getElementById('switchBtnUser').style.display = 'none';
	// capture("user");
	// };

	// switchBtnEnv.addEventListener('click', async function(){
	//     console.log("environment mode: ", incomingId);
	//     let stream;
	// 	const options = {
	// 		audio: false,
	// 		video: {
	// 			facingMode: "environment",
	// 		},
	// 	};

	// 	try {
	// 		if (stream) {
	// 			const tracks = stream.getTracks();
	// 			tracks.forEach(track => track.stop());
	// 		}
	// 		stream = await navigator.mediaDevices.getUserMedia(options);
	// 	} catch (e) {
	// 		alert(e);
	// 		return;
	// 	}
	// //	document.getElementById('switchBtnEnv').style.display = 'none';
	// //	document.getElementById('switchBtnUser').style.display = 'block';

	// //	const videoStream = document.getElementById('video-'+ incomingId).srcObject;
	// // videoStream.srcObject = stream;
	// 	//this.rtcPeer.getVideoTracks()[0].stop();
	// 	//camVideoTrack = this.rtcPeer.getVideoTracks()[0];
	// 	// console.log(this.rtcPeer);
	// 	//var videoSender = peerConnection.addTrack(camVideoTrack, stream);

	// });

	// switchBtnUser.addEventListener('click',function(){
	//   console.log("user mode");
	//   let stream;
	//   const options = {
	// 	audio: false,
	// 	video: {
	// 		facingMode: "user",
	// 	},
	// };

	// try {
	// 	if (stream) {
	// 		const tracks = stream.getTracks();
	// 		tracks.forEach(track => track.stop());
	// 	}
	// 	stream =  navigator.mediaDevices.getUserMedia(options);
	// } catch (e) {
	// 	alert(e);
	// 	return;
	// }

	//  document.getElementById('switchBtnEnv').style.display = 'block';
	//  document.getElementById('switchBtnUser').style.display = 'none';

	// 	const videoStream = document.getElementById('video-'+ incomingId).srcObject;
	// 	videoStream.srcObject = stream;
	// });

	// ---------------------------- VIDEO AUDIO BUTTONS ------------------------------
	var stopVideoBtn;
	var startVideoBtn;

	//stopVideoBtn = document.createElement('button');
	var stopVideoBtn = document.createElement("img");
	stopVideoBtn.setAttribute("src", "/img/videoOn.png");
	stopVideoBtn.innerHTML = "stopVideo";
	stopVideoBtn.id = 'vidStopbtn-' + incomingId;
	stopVideoBtn.className = "video_Btn-style";

	//startVideoBtn = document.createElement('button');
	var startVideoBtn = document.createElement("img");
	startVideoBtn.setAttribute("src", "/img/videoOff.png");
	startVideoBtn.innerHTML = "startVideo";
	startVideoBtn.id = 'vidStartbtn-' + incomingId;
	startVideoBtn.className = "video_Btn-style";

	stopVideoBtn.addEventListener('click', function () {
		var data = {
			id: "updateMemberStatus",
			sender: name,
			socketId: incomingId,
			mySocketId: mySocketId,
			roomName: document.getElementById('roomName').value,
			videoStatus: false,
			isAdmin: isAdmin,
			myAdminStatus: amIAdmin,
			audio: 0
		};

		if (amIAdmin && incomingId != mySocketId) {
			sendMessage(data);
			document.getElementById('vidStartbtn-' + incomingId).style.display = 'block';
			document.getElementById('vidStopbtn-' + incomingId).style.display = 'none';
		}
		else if (amIAdmin && incomingId == mySocketId) {
			document.getElementById('vidStartbtn-' + incomingId).style.display = 'block';
			document.getElementById('vidStopbtn-' + incomingId).style.display = 'none';
			const vidEle = document.getElementById('video-' + incomingId);
			const stream = vidEle.srcObject;
			stream.getVideoTracks()[0].enabled = !(stream.getVideoTracks()[0].enabled);
			
			// const overlayEle = document.getElementById('vidImgOverlay-' + incomingId);
			// overlayEle.classList.add("showOverlayImg");
			// vidEle.classList.add("hideVideo");
		}
		else if (!amIAdmin && !isAdmin && incomingId == mySocketId) {
			document.getElementById('vidStartbtn-' + incomingId).style.display = 'block';
			document.getElementById('vidStopbtn-' + incomingId).style.display = 'none';
			const vidEle = document.getElementById('video-' + incomingId);
			const stream = vidEle.srcObject;
			stream.getVideoTracks()[0].enabled = !(stream.getVideoTracks()[0].enabled);
			
			// const overlayEle = document.getElementById('vidImgOverlay-' + incomingId);
			// overlayEle.classList.add("showOverlayImg");
			// vidEle.classList.add("hideVideo");
		}
	});

	startVideoBtn.addEventListener('click', function () {
		//	alert("videoON");
		var data = {
			id: "updateMemberStatus",
			sender: name,
			socketId: incomingId,
			mySocketId: mySocketId,
			roomName: document.getElementById('roomName').value,
			videoStatus: true,
			isAdmin: isAdmin,
			myAdminStatus: amIAdmin,
			audio: 0
		};
	
		if (amIAdmin && incomingId != mySocketId) {
			sendMessage(data);
			document.getElementById('vidStartbtn-' + incomingId).style.display = 'none';
			document.getElementById('vidStopbtn-' + incomingId).style.display = 'block';

		}
		else if (amIAdmin && incomingId == mySocketId) {
			document.getElementById('vidStartbtn-' + incomingId).style.display = 'none';
			document.getElementById('vidStopbtn-' + incomingId).style.display = 'block';
			const vidEle = document.getElementById('video-' + incomingId);
			const stream = vidEle.srcObject;
			stream.getVideoTracks()[0].enabled = !(stream.getVideoTracks()[0].enabled);

			// const overlayEle = document.getElementById('vidImgOverlay-' + incomingId);
			// overlayEle.classList.remove("showOverlayImg");
			// vidEle.classList.remove("hideVideo");
		}
		else if (!amIAdmin && !isAdmin && incomingId == mySocketId) {
			document.getElementById('vidStartbtn-' + incomingId).style.display = 'none';
			document.getElementById('vidStopbtn-' + incomingId).style.display = 'block';
			const vidEle = document.getElementById('video-' + incomingId);
			const stream = vidEle.srcObject;
			stream.getVideoTracks()[0].enabled = !(stream.getVideoTracks()[0].enabled);
			
			// const overlayEle = document.getElementById('vidImgOverlay-' + incomingId);
			// overlayEle.classList.remove("showOverlayImg");
			// vidEle.classList.remove("hideVideo");
		}

	});


	// ------------------------------ AUDIO BUTTONS --------------------------------
	var stopAudioBtn;
	var startAudioBtn;

	//stopAudioBtn = document.createElement('button');
	var stopAudioBtn = document.createElement("img");
	stopAudioBtn.setAttribute("src", "/img/audioOn.png");
	stopAudioBtn.innerHTML = "stopAudio";
	stopAudioBtn.id = 'audStopbtn-' + incomingId;
	stopAudioBtn.className = "audio_Btn-style";

	//startAudioBtn = document.createElement('button');
	var startAudioBtn = document.createElement("img");
	startAudioBtn.setAttribute("src", "/img/audioOff.png");
	startAudioBtn.innerHTML = "startAudio";
	startAudioBtn.id = 'audStartbtn-' + incomingId;
	startAudioBtn.className = "audio_Btn-style";

	stopAudioBtn.addEventListener('click', function () {
		//	alert("audioOFF");
		var data = {
			id: "updateMemberStatus",
			sender: name,
			socketId: incomingId,
			mySocketId: mySocketId,
			roomName: myroomName,
			videoStatus: false,
			isAdmin: isAdmin,
			myAdminStatus: amIAdmin,
			audio: 1
		};

		if (amIAdmin && incomingId != mySocketId) {
			sendMessage(data);
			document.getElementById('audStartbtn-' + incomingId).style.display = 'block';
			document.getElementById('audStopbtn-' + incomingId).style.display = 'none';
		}
		else if (amIAdmin && incomingId == mySocketId) {
			document.getElementById('audStartbtn-' + incomingId).style.display = 'block';
			document.getElementById('audStopbtn-' + incomingId).style.display = 'none';
			const stream = document.getElementById('video-' + incomingId).srcObject;
			stream.getAudioTracks()[0].enabled = !(stream.getAudioTracks()[0].enabled);
		}
		else if (!amIAdmin && !isAdmin && incomingId == mySocketId) {
			document.getElementById('audStartbtn-' + incomingId).style.display = 'block';
			document.getElementById('audStopbtn-' + incomingId).style.display = 'none';
			const stream = document.getElementById('video-' + incomingId).srcObject;
			stream.getAudioTracks()[0].enabled = !(stream.getAudioTracks()[0].enabled);
		}
	});
	startAudioBtn.addEventListener('click', function () {
		//	alert("audioON");
		var data = {
			id: "updateMemberStatus",
			sender: name,
			socketId: incomingId,
			mySocketId: mySocketId,
			roomName: myroomName,
			videoStatus: true,
			isAdmin: isAdmin,
			myAdminStatus: amIAdmin,
			audio: 1
		};

		if (amIAdmin && incomingId != mySocketId) {
			sendMessage(data);
			document.getElementById('audStartbtn-' + incomingId).style.display = 'none';
			document.getElementById('audStopbtn-' + incomingId).style.display = 'block';
		}
		else if (amIAdmin && incomingId == mySocketId) {
			document.getElementById('audStartbtn-' + incomingId).style.display = 'none';
			document.getElementById('audStopbtn-' + incomingId).style.display = 'block';
			const stream = document.getElementById('video-' + incomingId).srcObject;
			stream.getAudioTracks()[0].enabled = !(stream.getAudioTracks()[0].enabled);
		}
		else if (!amIAdmin && !isAdmin && incomingId == mySocketId) {
			document.getElementById('audStartbtn-' + incomingId).style.display = 'none';
			document.getElementById('audStopbtn-' + incomingId).style.display = 'block';
			const stream = document.getElementById('video-' + incomingId).srcObject;
			stream.getAudioTracks()[0].enabled = !(stream.getAudioTracks()[0].enabled);
		}
	});
	// ------------------------------ *** AUDIO BUTTONS ENDS *** --------------------------------

	var rtcPeer;

	if (totalElements > 2) {
		if (totalElements % 2 === 0)
			setGridSpan = false;

		else if (totalElements % 2 !== 0)
			setGridSpan = true;
	}
	else setGridSpan = true;

	console.log("totalElements: ", totalElements);

	if (totalElements == 1) {
		container.classList.add('full-video');
		document.getElementsByTagName("BODY")[0].style.margin = '0';
	}
	if (totalElements == 2) {
		if (incomingId == mySocketId) {
			container.classList.add('sender-video');
		}

		if (incomingId != mySocketId) {
			document.getElementById("participants").children[0].classList.remove("full-video");

			document.getElementById("participants").children[0].classList.add("sender-video");
			container.classList.add('full-video');
		}

		document.getElementsByTagName("BODY")[0].style.margin = '0';
	}

	if (totalElements !== 1 && totalElements !== 2) {
		if (document.getElementById("participants"))
			document.getElementById("participants").lastElementChild.style.gridColumnStart = 'span 1';
		document.getElementById("participants").style.display = 'grid';
	}
	if (totalElements === 3) {
		if (document.getElementById("participants"))
			document.getElementById("participants").firstElementChild.style.gridColumnStart = 'span 1';
		document.getElementById("participants").style.display = 'grid';
	}

	if (setGridSpan)
		container.style.gridColumnStart = 'span 2';

	//	alert("111");	
	container.appendChild(video);
	// container.appendChild(imgOverlay);

	if (amIAdmin && incomingId != mySocketId) {

		myControlsDiv.appendChild(stopVideoBtn);
		myControlsDiv.appendChild(startVideoBtn);
		myControlsDiv.appendChild(stopAudioBtn);
		myControlsDiv.appendChild(startAudioBtn);

		setTimeout(() => {
			document.getElementById('vidStopbtn-' + incomingId).style.display = 'block';
			document.getElementById('vidStartbtn-' + incomingId).style.display = 'none';
			document.getElementById('audStopbtn-' + incomingId).style.display = 'block';
			document.getElementById('audStartbtn-' + incomingId).style.display = 'none';
		}, 500);
	}
	else if (amIAdmin && incomingId == mySocketId) {

		participantsRoom.appendChild(myControlsDiv);

		myControlsDiv.appendChild(stopVideoBtn);
		myControlsDiv.appendChild(startVideoBtn);
		myControlsDiv.appendChild(stopAudioBtn);
		myControlsDiv.appendChild(startAudioBtn);

		setTimeout(() => {
			document.getElementById('vidStopbtn-' + incomingId).style.display = 'block';
			document.getElementById('vidStartbtn-' + incomingId).style.display = 'none';
			document.getElementById('audStopbtn-' + incomingId).style.display = 'block';
			document.getElementById('audStartbtn-' + incomingId).style.display = 'none';
		}, 500);
	}
	else if (!amIAdmin && !isAdmin && incomingId == mySocketId) {
		participantsRoom.appendChild(myControlsDiv);

		myControlsDiv.appendChild(stopVideoBtn);
		myControlsDiv.appendChild(startVideoBtn);
		myControlsDiv.appendChild(stopAudioBtn);
		myControlsDiv.appendChild(startAudioBtn);

		setTimeout(() => {
			document.getElementById('vidStopbtn-' + incomingId).style.display = 'block';
			document.getElementById('vidStartbtn-' + incomingId).style.display = 'none';
			document.getElementById('audStopbtn-' + incomingId).style.display = 'block';
			document.getElementById('audStartbtn-' + incomingId).style.display = 'none';
		}, 500);
	}

	// container.appendChild(stopAudioBtn);
	// container.appendChild(startAudioBtn);
	//alert("222");
	container.appendChild(span);
	document.getElementById('participants').appendChild(container);
	span.appendChild(document.createTextNode(name));

	video.id = 'video-' + incomingId;
	var att_isAdmin = document.createAttribute("isAdmin");
	var att_playsinline = document.createAttribute("playsinline");

	att_isAdmin.value = isAdmin;
	video.setAttributeNode(att_isAdmin);
	video.setAttributeNode(att_playsinline);
	video.autoplay = true;
	video.controls = false;
	video.width = 100;

	// remove o2o styles to reset groupcall UI
	if (totalElements > 2) {
		document.getElementById("participants").firstElementChild.classList.remove("full-video");
		document.getElementById("participants").children[1].classList.remove("sender-video");

		document.getElementById("participants").children[0].classList.remove("sender-video");
		document.getElementById("participants").children[1].classList.remove("full-video");
		document.getElementsByTagName("BODY")[0].style.margin = '8px';
	}
	// alert("333");

	this.getElement = function () {
		return container;
	}

	this.getVideoElement = function () {
		return video;
	}

	this.offerToReceiveVideo = function (error, offerSdp, wp) {
		if (error) return console.error("sdp offer error")
		// console.log('Invoking SDP offer callback function', name, '== id: ', mySocketId);
		var msg = {
			id: "receiveVideoFrom",
			sender: name,
			socketId: mySocketId,//localStorage.getItem('socketId'),
			sdpOffer: offerSdp
		};
		sendMessage(msg);
	}


	this.onIceCandidate = function (candidate, wp) {
		var message = {
			id: 'onIceCandidate',
			socketId: mySocketId,//localStorage.getItem('socketId'),
			candidate: candidate,
			sender: name
		};
		sendMessage(message);
	}

	Object.defineProperty(this, 'rtcPeer', { writable: true });

	this.dispose = function () {
		if (this.rtcPeer.videoEnabled) this.rtcPeer.dispose();
		if (container.parentNode) container.parentNode.removeChild(container);
	};

}