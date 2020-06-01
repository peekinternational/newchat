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

    socket.on('disconnect', function() {
        
        console.log('disconnect');
    });
    
});