/*
* author  => Peek International
* designBy => Peek International
*/
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const meetingSchema = new Schema({
	userId:{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users'
    },
    meetingId:String,          
	password:String,
	passReq: {
		type: Number,
		default: 1      //0=No, 1=Yes
	}
}, { timestamps: true });
module.exports = mongoose.model('meeting',meetingSchema);