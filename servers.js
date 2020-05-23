var app= require('express')();
var server = require('http').Server(app);
var io= require('socket.io')(server);
var redis= require('redis');
//var redis= require('redis');


server.listen(6998);

io.on('connection', function (socket) {
    console.log('start');
    
      socket.on('sendmsg', (data) => {
		console.log(data);
		io.emit('receivemsg',data);
	});

        socket.on('msgtyping', (data) => {
	      console.log(data);
	         io.emit('starttyping', data)
	      
    });

        socket.on('stopTyping', (data)=>{
	      console.log(data);
	         io.emit('stoptyping', data)
	      
    });

 socket.on('sendgroupmsg', (data) => {
		console.log(data);
		io.emit('receivegroupmsg',data);
	});
    socket.on('disconnect', function() {
        
        console.log('disconnect');
    });
    
});