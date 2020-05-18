/*
* author  => Peek International
* designBy => Peek International
*/
const mongoose = require('mongoose');

const chatSchema = mongoose.Schema({
	"senderId": {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users'
	},
	"receiverId": {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users'
	},
	"commentId":{
	   type: mongoose.Schema.Types.ObjectId,
	   ref: 'chat'
	},
	"groupId": {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'groups'            //If isGroup is 1 then there will be groupId and no receiver id          
	},
	"message": String,
	"messageType": {
		type: Number,    // 0- Normal , 1- Image, 2- Text, PDF etc.., 3- Call
		default: 0
	},
	"chatType":{
	 type: Number,     // 0- Comment, 1- Reply, 2- Broadcast Chat
	 default: 0
	},

	"status": {
		type: Number,
		default: 1        //1=Active, 0=Deleted
	},
	"isSeen": {
		type: Number,
		default: 0        //0=No, 1=Yes
	},
	"isDeleted": {
		type: Number,
		default: 0
	},
	"isGroup": {
		type: Number,
		default: 0        //0=No, 1=Yes
	}
}, { timestamps: true });

module.exports = mongoose.model('chat', chatSchema)