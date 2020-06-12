var app= require('express')();
var server = require('http').Server(app);
var io= require('socket.io')(server);
var redis= require('redis');
//var redis= require('redis');


server.listen(6998);

io.on('connection', function (socket) {
    console.log('start');
 //////// send and receive msg //////////   
      socket.on('sendmsg', (data) => {
		console.log(data);
		io.emit('receivemsg',data);
	});

//////// send and receive chatmsgid //////////   
      socket.on('lastchatobj_send', (data) => {
		console.log(data);
		io.emit('lastchatobj_receive',data);
	});

	//////// send and receive chatmsgid //////////   
      socket.on('sendid', (data) => {
		console.log(data);
		io.emit('receiveid',data);
	});

socket.on('updateUserSelection', (data) => {
	console.log(data);
		io.emit('receiverUserStatus', data);
	});
//////// update chatmsg //////////   
      socket.on('updatechatmsg', (data) => {
		console.log(data);
		io.emit('receiveupdatechatmsg',data);
	});


//////Delete chat //////////
 socket.on('senderdeletemsg', (data) => {
		console.log(data);
		io.emit('reciverdeletemsg',data);
	});
 
///////start typing/////////
        socket.on('msgtyping', (data) => {
	      console.log(data);
	         io.emit('starttyping', data)
	      
    });

//////// stop typing/////////
        socket.on('stopTyping', (data)=>{
	      console.log(data);
	         io.emit('stoptyping', data)
	      
    });

//////////group chat /////////
 socket.on('sendgroupmsg', (data) => {
		console.log(data);
		io.emit('receivegroupmsg',data);
	});

//////// send and receive groupchatmsgid //////////   
      socket.on('groupsendid', (data) => {
		console.log(data);
		io.emit('groupreceiveid',data);
	});

 //////// LOGIN AND LOUT ////////// 
	
 socket.on('login', (data) => {
		console.log(data);
		io.emit('changestatuslogin',data);
	});
	
socket.on('logout', (data) => {
		console.log(data);
		io.emit('changestatuslogout',data);
	});

    socket.on('disconnect', function() {
        
        console.log('disconnect');
    });
    
});