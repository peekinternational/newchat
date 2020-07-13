
        const NO_CALL = 0;
        const PROCESSING_CALL = 1;
        const IN_CALL = 2;
        var callState = 0
        var O2OSoc;
        var o2oReqUrl = 'wss://' + "peekvideochat.com" + ':8443/one2one';
        var O2O_ws = new WebSocket(o2oReqUrl);
        var o2oSocConEst = false;
        var userBusy = false;
        var showVideo = true;
        var openVoice = true; 
        var webRtcO2OPeer = null;
        var callerId = 0;
        var friendId = 0;
        var callType = 0;
        var inComCallData = 0;
       var c_userData= JSON.parse(localStorage.getItem('userData'));
 // console.log(c_userData);
       // o2oSocConnec();

        window.onbeforeunload = function () {
            O2O_ws.close();
        }

        O2O_ws.onopen = function (message) {
			//console.log(c_userData._id +' user register');
            sendKMessage({
                id: 'register',
                name: c_userData._id  //set loggedIn userId here
            });

            setCallState(NO_CALL);
        }

        O2O_ws.onmessage = function (message) {
            var parsedMessage = JSON.parse(message.data);
            console.info('Received message: ' + message.data);
            o2oSocConEst = true;

            switch (parsedMessage.id) {
                case 'registerResponse':
                   // resgisterResponse(parsedMessage);
                    break;
                case 'callResponse':
                    callResponse(parsedMessage);
                    break;
                case 'incomingCall':
                    incomingCall(parsedMessage);
                    break;
                case 'startCommunication':
                    startCommunication(parsedMessage);
                    break;
                case 'stopCommunication':
                    console.info("Communication ended by remote peer");
                    stopK(true);
                    break;
                case 'iceCandidate':
                    webRtcO2OPeer.addIceCandidate(parsedMessage.candidate)
                    break;
                default:
                    console.error('Unrecognized message', parsedMessage);
            }
        }
        
        O2O_ws.onclose = function () {
           // o2oSocConnec();
        }

        O2O_ws.onerror = function () {
           // o2oSocConnec();
        }

        function setCallState(nextState) {
            switch (nextState) {
                case NO_CALL:
                    $('#videoCall').attr('disabled', false);  //related to VideoCall icon
                   // $('#terminate').attr('disabled', true);
                    break; 
                case PROCESSING_CALL:
                    $('#videoCall').attr('disabled', true); 
                  //  $('#terminate').attr('disabled', true);
                    break;
                case IN_CALL:
                    $('#videoCall').attr('disabled', true);
                  //  $('#terminate').attr('disabled', false);
                    break;
                default:
                    return;
            }
           
            callState = nextState;
        }

        function onIceCandidate(candidate) { 
            var message = {
                id : 'onIceCandidate',
                candidate : candidate,
                to:(c_userData._id==friendId)?callerId:friendId,  //set userIds
                from:c_userData._id 
            }
            sendKMessage(message);
        }

        function sendKMessage(message) {
            var jsonMessage = JSON.stringify(message);
            console.log('Sending message: ' + jsonMessage);
            O2O_ws.send(jsonMessage);
        }
     
        function callResponse(message) {
            console.log(message);
            if (message.response != 'accepted') {
                // if (message.message != 'user declined'){
                //     $.toaster({
                //         priority: 'danger',
                //         title: 'Call Status',
                //         message: 'User is offline'
                //     });
                // }
                // else{
                //     $.toaster({
                //         priority: 'danger',
                //         title: 'Call Status',
                //         message: 'Call rejected by user'
                //     });
                // }
                console.info('Call not accepted by peer. Closing call');
                var errorMessage = message.message ? message.message
                        : 'Unknown reason for call rejection.';
                // updateCallerUI();
                stopK(true);
            } else {
                setCallState(IN_CALL);
                webRtcO2OPeer.processAnswer(message.sdpAnswer);
            }
        }
    
        function stopK(message,friendId=0) {
            setCallState(NO_CALL); 
            if (webRtcO2OPeer) {
                webRtcO2OPeer.dispose();
                webRtcO2OPeer = null; 
                userBusy = false;
          
                sendKMessage({ 
                    id : 'stop',
                    to:(c_userData._id==friendId)?callerId:friendId,   //set userIds
                    from:c_userData._id 
                }); 
            } 
            disconnect(friendId);
        };
		function stopKCall(){
            //console.log('stopCall');
            let response = {
                id : 'incomingCallResponse',
                from : inComCallData.from,
                to: c_userData._id, 
                callResponse : 'reject',
                message : 'user declined'
            };
            sendKMessage(response);
            stopK(true);
        }



          /*disconnect the call from user side who hit the disconnect button*/
          function disconnect (friendId) {
            setCallState(NO_CALL);
            //leaveRoom();
            if (friendId) socket.emit('calldisconnect', {friendId: friendId});
          }
    
        function incomingCall(message) {  
            if (callState != NO_CALL) {
                var response = {
                    id : 'incomingCallResponse',
                    from : message.from,   //callerId
                    to: c_userData._id, //set userId here
                    callResponse : 'reject',
                    message : 'bussy'
        
                };

                if (userBusy){
                    // SHOW TOASTER MESSAGE HERE
                    // $.toaster({
                    //     priority: 'danger',
                    //     title: 'Incoming Call',
                    //     message: 'Another user is calling you ...'
                    // });
                    socket.emit('userBusy', { 'callerId': c_userData._id }); //set userId here
                }

                console.log("*********** BUSY *************");
                return sendKMessage(response);
            }
            
            showVideo=true;
            openVoice=true; 
            setCallState(PROCESSING_CALL); 
    
            callerId = message.userData.callerId;
            friendId = message.userData.friendId;
            callType = message.userData.callType; 
        
            checkCallerUser(message.userData); 
            $('#incommingCall').show(); // show incomingCall Modal here
            //document.getElementById('callerName').innerHTML = message.userData.callerName; //set callerName in html
            inComCallData=message;
             
        }
    
        function startCall(){
            let localAsset=document.getElementById('local-video');
            let remoteAsset= document.getElementById('videoOutput'); 
            let medConst={};
            
            if(callType==1){
                localAsset=document.getElementById('audioInput');
                remoteAsset= document.getElementById('audioOutput'); 
                medConst={mediaConstraints: {
                    audio: true,
                    video: false
                }}; 
            }
            let options = {
                localVideo : localAsset,
                remoteVideo : remoteAsset,
                onicecandidate : onIceCandidate,medConst
            }  
            webRtcO2OPeer = kurentoUtils.WebRtcPeer.WebRtcPeerSendrecv(options,
            function(error) {
                if (error) setCallState(NO_CALL);
                
                this.generateOffer(function(error, offerSdp) {
                    if (error) setCallState(NO_CALL);
                     
                    let response = {
                        id : 'incomingCallResponse',
                        from : inComCallData.from, //caller Id
                        to: c_userData._id, //set userId here
                        callResponse : 'accept',
                        sdpOffer:offerSdp
                    }; 

                    userBusy = true;
                    sendKMessage(response);
                });
            });
        }
		
		function videoKCall(from,to,userData,isAudio){
			
            setCallState(PROCESSING_CALL); 
            let localAsset=document.getElementById('local-video');
            let remoteAsset= document.getElementById('videoOutput'); 
            let medConst={};
            
            if(isAudio==1){
                localAsset=document.getElementById('audioInput');
                remoteAsset= document.getElementById('audioOutput'); 
                medConst={mediaConstraints: {
                    audio: true,
                    video: false
                }}; 
            }
            let options = {
                localVideo : localAsset,
                remoteVideo : remoteAsset,
                onicecandidate : onIceCandidate,medConst
            } 
               
            $rootScope.webRtcO2OPeer = kurentoUtils.WebRtcPeer.WebRtcPeerSendrecv(options, function(error) {
                if (error) setCallState(NO_CALL);
                 
                this.generateOffer(function(error, offerSdp) {
                    if (error) setCallState(NO_CALL);
                     
                    let message = {
                        id : 'call',
                        from : from,
                        to : to, 
                        userData:userData,
                        sdpOffer:offerSdp
                    };  
                    $rootScope.userBusy = true;
                    sendKMessage(message);
                });
            });
        }
    
        function stopCall(){
            //console.log('stopCall');
            let response = {
                id : 'incomingCallResponse',
                from : inComCallData.from,
                to: c_userData._id, // set userId here
                callResponse : 'reject',
                message : 'user declined'
            };
            sendKMessage(response);
            stopK(true);
        }
    
        function videoKCall(from,to,userData,isAudio){
            setCallState(PROCESSING_CALL); 
            let localAsset=document.getElementById('local-video');
            let remoteAsset= document.getElementById('videoOutput'); 
            let medConst={};
            
            if(isAudio==1){
                localAsset=document.getElementById('audioInput');
                remoteAsset= document.getElementById('audioOutput'); 
                medConst={ mediaConstraints: {
                    audio: true,
                    video: false
                }}; 
            }
            let options = {
                localVideo : localAsset,
                remoteVideo : remoteAsset,
                onicecandidate : onIceCandidate,medConst
            } 
               
            webRtcO2OPeer = kurentoUtils.WebRtcPeer.WebRtcPeerSendrecv(options, function(error) {
                if (error) setCallState(NO_CALL);
                 
                this.generateOffer(function(error, offerSdp) {
                    if (error) setCallState(NO_CALL);
                     
                    let message = {
                        id : 'call',
                        from : from,
                        to : to, 
                        userData: userData,
                        sdpOffer: offerSdp
                    };  
                    userBusy = true;
                    sendKMessage(message);
                });
            });
        }

        function startCommunication(message) {
            setCallState(IN_CALL);
            webRtcO2OPeer.processAnswer(message.sdpAnswer);
        }
