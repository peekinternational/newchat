/*
 * author  => Peek International
 * designBy => Peek International
 */
const userModel = require("../model/users-model");
const friendModel = require("../model/friendModel");
const chatModel = require("../model/chatModel");
const groupsModel = require("../model/groupsModel");
const groupCall = require("../model/groupCall");
const notifiModel = require("../model/notificationModel");
const projectModel = require("../model/projectModel");
const helpers = require("../helperfunctions/helpers");
const isImage = require("is-image");
const broadModel = require("../model/broadcast");
const auth = require('../auth');
var path = require("path");

const passport = require('passport');
const LocalStrategy = require('passport-local');

passport.use(new LocalStrategy({
  usernameField: 'name',
  passwordField: 'password',
}, (name, password, done) => {
  console.log('passport name: '+ name);
  userModel.findOne({ name })
    .then((user) => {
      console.log("passport: 1");
      console.log(user);
	  userModel.update({
		'_id': user._id
	}, {
		'onlineStatus': 1
	}).exec();
     
        return done(null, user);
      
    }).catch(done);
}));


module.exports = function (io, saveUser) {
  var User;
  /*custom helper functions */
  var helper = new helpers(io);
  /*main router object which contain all function*/
  var router = {};


  router.getProjectData = function (req, res) {
    projectModel
      .findOne({ status: 1 })
      .lean()
      .exec(function (err, projData) {
        res.send(projData);
      });
  };

  router.groupChat = function (req, res) {
    var chatType = req.body.chatType;
    console.log("chatType: "+ req.body.groupId);
    if (chatType == 0) {
      newMessage = new chatModel({
        groupId: req.body.groupId,
        senderId: req.body.senderId,
        message: req.body.message,
        isGroup: 1
      });
    } else {
      newMessage = new chatModel({
        commentId: req.body.commentId,
        chatType: chatType,
        groupId: req.body.groupId,
        senderId: req.body.senderId,
        message: req.body.message,
        isGroup: 1
      });
    }

    newMessage.save(function (err, data) {
      if (err) throw err;

      if (chatType == 0) {
        chatModel
          .findOne({ groupId: req.body.groupId, senderId: req.body.senderId })
          .populate("senderId")
          .sort({ updatedAt: -1 })
          .exec(function (err, data) {
            helper.addNewMessage(data);
            if (err) throw err;
            res.json(data);
          });
      } else {
        chatModel
          .findOne({
            commentId: req.body.commentId,
            groupId: req.body.groupId,
            senderId: req.body.senderId
          })
          .populate("commentId")
          .populate("senderId", { _id: true, name: true })
          .sort({ updatedAt: -1 })
          .exec(function (err, data) {
            helper.addNewMessage(data);
            res.json(data);
          });
      }
    });
  };

  router.getUsers = async function (req, res) {
    if (req.params.allList == 0) {
      var friendIdData = await friendModel.find({
        $or: [
          { userId: req.params.userId },
          { friendId: req.params.userId }
        ]
      })
        .populate({ path: 'friendId', select: '_id status seenStatus pStatus onlineStatus name chatWithRefId email country phone user_image userId projectId updatedByMsg createdAt UpdatedAt', match: { status: 1 } })
        .populate({ path: 'userId', select: '_id status seenStatus pStatus onlineStatus name chatWithRefId email country phone user_image userId projectId updatedByMsg createdAt UpdatedAt', match: { status: 1 } })
        .lean()
        .exec();

      friendData = [];
      for (let i = 0; i < friendIdData.length; i++) {
        if (friendIdData[i].friendId._id != req.params.userId)
          friendData.push(friendIdData[i].friendId);
        else if (friendIdData[i].userId._id != req.params.userId)
          friendData.push(friendIdData[i].userId);

        var unreadMsgCount = await chatModel.find({ senderId: friendData[i]._id, receiverId: req.params.userId, isSeen: 0 }).count().lean().exec();
        friendData[i]["usCount"] = unreadMsgCount;

        var latestMsg = await chatModel.findOne({
          $or: [
            { senderId: friendData[i]._id, receiverId: req.params.userId },
            { senderId: req.params.userId, receiverId: friendData[i]._id }
          ]
        }, {}, { sort: { 'createdAt': -1 } }).lean().exec();

        friendData[i]["latestMsg"] = latestMsg;
         if (i == friendIdData.length - 1) {
          var myselfData = await userModel.findOne({'_id': req.params.userId }, {password: false}).lean().exec();
          friendData.push(myselfData);
          res.json({ 'usersList': friendData });
        }  
      }
    } else {
      userModel.find({
        _id: { $ne: req.params.userId },
        isAdmin: { $ne: 1 },
        status: 1,
        projectId: req.params.projectId
      }, {}, { sort: "-updatedAt" })
        .lean()
        .exec(function (err, data) {
          chatModelFunc(data);
        });
    }
  };

  router.addGroup = function (req, res) {
    var members = req.body.members;
    var obj = [];
    members.forEach(function (mem) {
      obj.push({ id: mem._id, name: mem.name, isseen: false });
    });
    var group = new groupsModel({
      members: obj,
      name: req.body.groupName
    });
    group.save(function (err, data) {
      res.json(data);
      helper.RTGU();
    });
  };

  router.getGroups = function (req, res) {
    groupsModel
      .find({ members: { $elemMatch: { id: req.params.userId } }, status: 1 })
      .lean()
      .then(function (data) {
        res.json(data);
      });
  };

  router.chat = function (req, res) {

    var chatType = req.body.msgData.chatType;
    var sender = req.body.msgData.senderId;
    var name = req.body.msgData.senderName;
    var recevier = req.body.msgData.receiverId;
    var message = req.body.msgData.message;
    var senderImage = req.body.msgData.senderImage;
    var receiverImage = req.body.msgData.receiverImage;
    var isSeen = req.body.msgData.isSeen;

    console.log('chatType: '+ chatType);
    console.log(req.body);
    if (chatType == 0) {
      newMessage = new chatModel({
        senderId: sender,
        senderName: name,
        receiverId: recevier,
        message: message,
        isSeen: isSeen,
        senderImage: senderImage,
        receiverImage: receiverImage
      });
    } else if (chatType == 1) {
      newMessage = new chatModel({
        commentId: req.body.msgData.commentId,
        senderId: req.body.msgData.senderId,
        receiverId: req.body.msgData.receiverId,
        senderName: req.body.msgData.senderName,
        chatType: chatType,
        message: req.body.msgData.message
      });
    }
    else if (chatType == 2) {
      newMessage = new chatModel({
        senderId: req.body.msgData.senderId,
        receiverId: req.body.msgData.receiverId,
        senderName: req.body.msgData.senderName,
        chatType: chatType,
        message: req.body.msgData.message
      });
    }
    else if (chatType == 3) {
      newMessage = new chatModel({
        chatType: 3,
        senderId: sender,
        senderName: name,
        receiverId: recevier,
        message: message,
        messageType:  3,
        isSeen: isSeen,
        senderImage: senderImage,
        receiverImage: receiverImage
      });
    }

    newMessage.save(function (err, data) {
      if (err) throw err;

      if (chatType != 2 && req.body.selectedUserData) {
		  console.log(req.body.selectedUserData);
console.log(chatType);
        let date_ob = new Date();
		console.log(date_ob);
        userModel.updateOne(
          { _id: req.body.selectedUserData },
          { $set: { updatedByMsg: date_ob } }
        )
          .exec();
      }

      if (chatType == 0) {
        chatModel
          .findOne({ senderId: sender, receiverId: recevier })
          .populate("senderId", { _id: true, name: true })
          .populate("receiverId", { _id: true, name: true })
          .sort({ updatedAt: -1 })
          .exec(function (err, data) {
            helper.addNewMessage(data);
            res.json(data);
          });
      } else {
        chatModel
          .findOne({
            commentId: req.body.msgData.commentId,
            senderId: sender,
            receiverId: recevier
          })
          .populate("commentId")
          .populate("senderId", { _id: true, name: true })
          .populate("receiverId", { _id: true, name: true })
          .sort({ updatedAt: -1 })
          .exec(function (err, data) {
            helper.addNewMessage(data);
            res.json(data);
          });
      }
    });

    /* add notification to notification table*/
    newNotification = new notifiModel({
      senderId: sender,
      senderName: name,
      receiverId: recevier,
      message: message
    });
    newNotification.save(function (err, data) {
      if (err) throw err;
    });
  };

  router.getNotification = (req, res) => {
    var userId = req.params.userId;
    notifiModel.find({ receiverId: userId }, function (err, data) {
      if (err) throw err;
      notifiModel.count({ receiverId: userId, isseen: false }, function (
        err,
        count
      ) {
        res.json({ count: count, noti: data });
      });
    });
  };

  router.chatWithId = function (req, res) {
    var sender = req.params._id;
	console.log(sender+'reffffffffffffffffffffffffffffffffffffffffff');
    userModel.updateOne({ _id: sender }, { $set: { chatWithRefId: "" } }).exec();
	res.json({ status: true});
  };

  // router.getgroupchat = function (req, res) {
  //   var id = req.body.id;
  //   groupsModel
  //     .find({ _id: id, status: 1, isGroup: 1 })
  //     .lean()
  //     .then(function (data) {
  //       res.json(data);
  //     });
  // };


  router.getGroupChat = function (req, res) {
    var id = req.params.groupId;
    let msgCountLimit = parseInt(req.params.limit);

    chatModel
      .find({ groupId: id })
      .populate("commentId")
      .populate("senderId", { _id: true, name: true })
      .sort({ createdAt: -1 })
      .limit(msgCountLimit)
      .exec(function (err, data) {
        data.reverse();
        res.json(data);
      });
  };

  router.getChat = function (req, res) {
    var sender = req.params.senderId;
    var receiver = req.params.receiverId;
    var msgCountLimit = parseInt(req.params.limit);

    chatModel
      .updateMany(
        { senderId: receiver, receiverId: sender, isSeen: 0 },
        { $set: { isSeen: 1 } }
      )
      .exec(function (err, data) {
        chatModel
          .find({
            $or: [
              { senderId: sender, receiverId: receiver },
              { senderId: receiver, receiverId: sender }
            ]
          })
          .populate("receiverId", { _id: true, name: true })
          .populate("senderId", { _id: true, name: true })
          .sort({ createdAt: -1 })
          .limit(msgCountLimit)
          .populate("commentId")
          .lean()
          .exec(function (err, data) {
			  console.log(data);
            if (err) throw err;
            data.reverse();
            userModel
              .updateOne({ _id: sender }, { $set: { chatWithRefId: receiver } })
              .exec();
  console.log(data);
            res.json(data);
          });
      });
  };

  router.getMoreGroupChat = function (req, res){
    var id = req.params.groupId;
    var msgCountLimit = parseInt(req.params.limit);
    var chatTime = req.params.chatTime;
   // console.log("GroupId: "+ id);
    chatModel
      .find({ createdAt: { $lt: chatTime }, groupId: id})
      .populate("receiverId", { _id: true, name: true })
      .populate("senderId", { _id: true, name: true })
      .sort({ createdAt: -1 })
      .limit(msgCountLimit)
      .populate("commentId")
      .lean()
      .exec(function (err, data) {
        if (err) throw err;
        res.json(data);
      });
  }

  router.getMoreChat = function (req, res) {
    var sender = req.params.senderId;
    var receiver = req.params.receiverId;
    var msgCountLimit = parseInt(req.params.limit);
    var chatTime = req.params.chatTime;

    chatModel
      .find({
        createdAt: { $lt: chatTime },
        $or: [
          { senderId: sender, receiverId: receiver },
          { senderId: receiver, receiverId: sender }
        ]
      })

      .populate("receiverId", { _id: true, name: true })
      .populate("senderId", { _id: true, name: true })
      .sort({ createdAt: -1 })
      .limit(msgCountLimit)
      .populate("commentId")
      .lean()
      .exec(function (err, data) {
        if (err) throw err;
        res.json(data);
      });
  };


  router.getLastGroupMsg = function (req, res) {
    var id = req.body.id;
    var sid = req.body.senderId;

    chatModel
      .find({ groupId: id, senderId: sid })
      .populate("senderId")
      .lean()
      .then(function (data) {
        res.json(data);
      });
  };

  router.logout = function (req, res) {
  };

  router.downloadFile = function (req, res) {
    var filename = req.params.filename;
    filepath = path.join(__dirname, "../images/chatImages") + "/" + filename;
    res.download(filepath);
  };

  router.updateUser = function (req, res) {
    var userId = req.body.id;
    var name = req.body.name;
    var image = req.body.imageName;
    var skill = req.body.skill;

    userModel
      .update(
        { userId: userId },
        { $set: { name: name, user_image: image, userTitle: skill } }
      )
      .exec(function (err, result) {
        if (err) res.json(false);
        else {
          res.json(true);
        }
      });
  };

  router.checkSession = function (req, res, next) {
    userModel.findById(req.body)
      .then((user) => {
        if(!user) {
          return res.sendStatus(400);
        }
  
        return res.json({ user: user.toAuthJSON() });
      });
  };


  router.login = function (req, res, next) { 
  console.log(req.body);
    if (!req.body.name) {
      return res.status(422).json({
        errors: {
          name: 'is required',
        },
      });
    }
    
    return passport.authenticate('local', { session: false }, (err, passportUser, info) => {
      if (err) {
        return next(err);
      }
	  userModel.update({
		'_id': req.params.userId
	}, {
		'onlineStatus': 1
	}).exec();
      if (passportUser) {
		  
        const user = passportUser;
        user.token = passportUser.generateJWT();
        return res.json({ user: user.toAuthJSON() });
      }
      return res.json(info);
    })(req, res, next);
  }

  router.deleteMsg = function (req, res) {
    var msgId = req.params.msgId;
    var type = req.params.type;
    chatModel.findByIdAndUpdate(msgId, { isDeleted: 1 }, function (err, data) {
      if (err) throw err;
      res.json(data);
    });
  };


  router.updateChat = function (req, res) {
    var chatId = req.params.id;
    var message = req.body.msgData.message;
	console.log(req.body.message + ' '+ req.params.id);
    chatModel.findByIdAndUpdate(
      chatId,
      { message: message },
      { new: true },
      function (err, data) {
        if (err) throw err;
        helper.addNewMessage(data);
        res.json(data);
      }
    );
  };

  router.updateGroupChat = function (req, res) {
    var id = req.params._id;
    var message = req.body.message;
    var groupId = req.body.groupId;

    chatModel.findByIdAndUpdate(id, { message: message }, function (err, data) {
      if (err) throw err;
      chatModel
        .find({ groupId: groupId, isGroup: 1 })
        .populate("senderId")
        .exec(function (err, groupMsgs) {
          if (err) throw err;
          res.json(groupMsgs);
        });
    });
  };

  router.notificationseen = (req, res) => {
    userId = req.body.userId;
    notifiModel.update(
      { receiverId: userId },
      { isseen: true },
      { multi: true },
      function (err, data) {
        if (err) throw err;
        res.json(data);
      }
    );
  };

  router.deleteGroupMsg = function (req, res) {
    var msgId = req.params.msgId;
    var type = req.params.type;
    var groupId = req.params.groupId;

    chatModel.findByIdAndUpdate(msgId, { isDeleted: 1 }, function (err, data) {
      if (err) throw err;
      chatModel
        .find({ groupId: groupId, isGroup: 1 })
        .populate("senderId")
        .exec(function (err, groupMsgs) {
          res.json(groupMsgs);
        });
    });
  };

  router.addfiles = function (req, res, next) {
	 
	 let isFileImage = 1;

    for (var i = 0; i < req.files.length; i++) {
      if (isImage("./images/chatImages/" + req.files[i].originalname)) {
        isFileImage = 1;
      } else {
        isFileImage = 2;
      }

      if (req.body.isGroup == 0){
		  console.log('one to one');
        var newchat = new chatModel({
          senderId: req.body.senderId,
          receiverId: req.body.friendId,
          message: req.files[i].originalname,
          messageType: isFileImage
        });
      }
      else{
		  console.log('group');
        var newchat = new chatModel({
          groupId: req.body.groupId,
          senderId: req.body.senderId,
          isGroup: 1,
          message: req.files[i].originalname,
          messageType: isFileImage
        });
      }

      newchat.save(function (err, data) {
        if (err) throw err;
        res.json({ 'file': req.files, 'data': data });
      });
    }
   // res.send(req.files);
  };

  router.groupFilesShare = function (req, res, next) {
    let isFileImage = 1;

    for (var i = 0; i < req.files.length; i++) {
      if (isImage("./images/chatImages/" + req.files[i].originalname)) {
        isFileImage = 1;
      } else {
        isFileImage = 2;
      }

      var newchat = new chatModel({
        groupId: req.body._id,
        senderId: req.body.senderId,
        isGroup: 1,
        message: req.files[i].originalname,
        messageType: isFileImage
      });

      newchat.save(function (err, data) {
        if (err) throw err;

        chatModel
          .find({
            _id: data._id,
            groupId: req.body.id,
            senderId: req.body.senderId
          })
          .populate("senderId")
          .lean()
          .then(function (data) {
            res.json(data);
          });
      });
    }
  };

  router.getcurrentgroupchat = function (req, res) {
    var id = req.body.id;
    var _senderId = req.body.senderId;
    groupsModel.find({ groupId: id, senderId: _senderId }, function (err, data) {
      res.json(data);
    });
  };

  // router.saveUserDataToSession = (req, res) => {
  //   userModel.find({ email: req.body.user_email }, (err, data) => {
  //     if (err) throw err;
  //     if (data.length > 0) {
  //       //do some thing if user exsist
  //     } else {
  //       var user = new userModel({
  //         userId: req.body.user_Id,
  //         name: req.body.user_firstname + req.body.user_lastname,
  //         email: req.body.user_email,
  //         user_image: req.body.user_image,
  //         phone: req.body.user_mobileNumber,
  //         address: req.body.address,
  //         status: 1
  //       });
  //       user.save(function (err, data) {
  //         if (err) console.log(err);
  //       });
  //     }

  //     res.json(1);
  //   });
  // };

  router.removeUser = (req, res) => {
  };

  router.updateUserImage = (req, res) => {
    userModel.findOneAndUpdate(
      { userId: req.body.id },
      { user_image: req.body.image },
      function (err, data) {
        if (err) throw err;
        res.json(req.body.id);
      }
    );
  };

  router.setPerStatus = (req, res) => {
      userModel.findOneAndUpdate(
        { _id: req.body.userId },
        { pStatus: req.body.pStatus },
        function (err, data) {
          if (err) throw err;
          res.json({ status: true, id: req.body.id });
        }
      );
  };

  // Broadcast functions start =====
  router.startPresenter = (req, res) => {
      var broad = new broadModel({
        "presenterId": req.body.userId,
        "password": req.body.password,
      });
      broad.save(function (err, data) {
        if (err) console.log(err);
        broadModel.findOne({ 'presenterId': req.body.userId, 'endDate': null }).sort({ _id: -1 }).limit(1).lean().exec(function (err, result) {
          res.json({ status: true, message: 'Saved successfully', 'broadcastRefId': result });
        })
      });
  }

  router.getBroadcastId = (req, res) => {
    broadModel.findOne({ 'presenterId': req.params.presenterId, 'endData': null }).sort({ _id: -1 }).limit(1).exec(function (err, result) {
      res.json({ status: true, message: 'Saved successfully', 'broadcastRefId': result });
    })
  }

  router.joinViewer = (req, res) => {
    let userBroadcastingId = req.body.preId;
    let broadcastRefId = req.body.broadcastId;

      broadModel.find({ 'presenterId': req.body.preId }).sort({ _id: -1 }).limit(1).exec(updateAllFound);
      function updateAllFound(err, preData) {
        var ids = preData.map(function (item) {
          return item._id;
        });

        if (ids.length > 0) {
          broadModel.findOneAndUpdate({ _id: ids[0] }, { $push: { 'viewers': { viewerId: req.body.userData } } }, function (err, data) {
            if (err) throw err;
            let newMessage = new chatModel(req.body.joinMsg);
            newMessage.save();

            broadModel.findOne({ '_id': broadcastRefId, 'presenterId': userBroadcastingId, 'endData': null }).sort({ _id: -1 }).limit(1).exec(function (err, result) {
              if (result) {
                chatModel.find({ 'chatType': 2, 'receiverId': broadcastRefId }).populate('senderId').lean().exec(function (err, data) {
                  if (err) throw err;
                  res.json(data);
                });
              }
            });
          })
        }
        else
          res.json({ status: false, message: 'Update failed' });
      }
  }

  router.stopPresenter = (req, res) => {
      broadModel.find({ 'presenterId': req.params.userId }).sort({ _id: -1 }).limit(1).exec(updateAllFound);
      function updateAllFound(err, preData) {
        var ids = preData.map(function (item) {
          return item._id;
        });
        if (ids.length > 0)
          broadModel.findOneAndUpdate({ _id: ids[0] }, { endDate: new Date() }, function (err, data) {
            if (err) throw err;
            res.json({ status: true, message: 'Date updated successfully' });
          })
        else
          res.json({ status: false, message: 'Update failed' });
      }
  }
router.getSingleUser = async function (req, res){
    var userData = await userModel.findById(req.params.userId, {password: false});
    res.json(userData);
  }
  router.stopViewer = (req, res) => {

      let newMessage = new chatModel(req.body.leftMsg);
      newMessage.save();

      broadModel
        .find({ presenterId: req.body.preId })
        .sort({ _id: -1 })
        .limit(1)
        .exec(updateAllFound);
      function updateAllFound(err, preData) {
        var ids = preData.map(function (item) {
          return item._id;
        });
        if (ids.length > 0) {

          broadModel.findOneAndUpdate(
            { _id: ids[0], "viewers.viewerId": req.body.userData },
            {
              $set: {
                "viewers.$.endDate": new Date()
              }
            },
            {
              sort: { "viewers.$._id": -1 } // Imp Needed: Need to update his last id
            },
            function (err, data) {
              if (err) throw err;
              res.json({ status: true, message: "Date updated successfully" });
            }
          );
        }
        else res.json({ status: false, message: "Update failed" });
      }
  };
  router.getGroup_Users = async function (req, res) {
    var friendIdData = await friendModel.find({
      $or: [
        { userId: req.params.userId },
        { friendId: req.params.userId }
      ]
    })
      .populate({ path: 'friendId', select: '_id status seenStatus pStatus onlineStatus name chatWithRefId email country phone user_image userId projectId updatedByMsg createdAt UpdatedAt', match: { status: 1 } })
      .populate({ path: 'userId', select: '_id status seenStatus pStatus onlineStatus name chatWithRefId email country phone user_image userId projectId updatedByMsg createdAt UpdatedAt', match: { status: 1 } })
      .lean()
      .exec();

    friendData = [];
    for (let i = 0; i < friendIdData.length; i++) {
      if (friendIdData[i].friendId._id != req.params.userId)
        friendData.push(friendIdData[i].friendId);
      else if (friendIdData[i].userId._id != req.params.userId)
        friendData.push(friendIdData[i].userId);

      var unreadMsgCount = await chatModel.find({ senderId: friendData[i]._id, receiverId: req.params.userId, isSeen: 0 }).count().lean().exec();
      friendData[i]["usCount"] = unreadMsgCount;

      var latestMsg = await chatModel.findOne({
        $or: [
          { senderId: friendData[i]._id, receiverId: req.params.userId },
          { senderId: req.params.userId, receiverId: friendData[i]._id }
        ]
      }, {}, { sort: { 'createdAt': -1 } }).lean().exec();

      friendData[i]["latestMsg"] = latestMsg;
      if (i == friendIdData.length - 1) {
        var myselfData = await userModel.findOne({ '_id': req.params.userId }, { password: false }).lean().exec();
        friendData.push(myselfData);

        // -------------- GROUPS GET ------------------------
        var groups = await groupsModel.find({ status: 1, projectId: req.params.projectId, "members": req.params.userId })
          .populate("members").lean().exec();

        console.log("senderId: " + req.params.userId);
        for (var g = 0; g < groups.length; g++) {
          var unreadMsgCount = await chatModel.find({ groupId: groups[g], isSeen: 0, senderId: { $ne: req.params.userId } }).count().lean().exec();
          groups[g]["usCount"] = unreadMsgCount;
          var latestMsg = await chatModel.findOne({ groupId: groups[g] }, {}, { sort: { 'createdAt': -1 } }).lean().exec();
          groups[g]["latestMsg"] = latestMsg;
         // ------------------------------------------------
          if (g == groups.length - 1) {
            res.json({ 'usersList': friendData, 'groupList': groups });
          }
        }
      //  res.json({ 'usersList': friendData });
      }
    }
  };
  // Broadcast function end ======
  return router;
};
