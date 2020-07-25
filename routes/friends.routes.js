const express = require('express');
const friendsRouter = express.Router();

let userModel = require('../model/users-model');
let friendModel = require('../model/friendModel');
const testModel = require("../model/test");

friendsRouter.route('/createfriend').post(function (req, res) {
    console.log(req.body);
    userModel.findOne({ '_id': req.body.userId, 'projectId': req.body.projectId }, { password: false })
        .lean().exec(function (err, userResult) {
            console.log(userResult);
        if (!userResult) res.send({ 'message': 'User Id doesnt exist', 'status': false }); 
        else {
            // check friendId and projectId exist in userTable or not
            userModel.findOne({ '_id': req.body.friendId, 'projectId': req.body.projectId }, { password: false })
            .lean().exec(function (err, friendResult) { 
                if (!friendResult) res.send({ 'message': 'FriendId doesnt exist', 'status': false });
                else {

//      { 'userId': userResult._id, 'friendId': friendResult._id}
                    // does userId and friendId already exist in friend table or not
                    friendModel.findOne(
                        { 
                           // $and: [
                          //  { 
                                $or: [{ 'userId': userResult._id, 'friendId': friendResult._id},
                                { 'userId': friendResult._id, 'friendId': userResult._id}], 
                                'projectId': req.body.projectId 
                    //    },
                            // { $or: [{ 'userId': friendResult._id, 'friendId': userResult._id}] }
                       // ]
                        }
                        ).exec(function (err, result) { 
                            console.log("result");
                            console.log(result);
                        if (result){
                            console.log("if create friend");
                            result.status=1;
                            //result.save();
                            userModel.update({ '_id': req.body.userId, 'projectId': req.body.projectId }, { $set: { 'chatWithRefId': friendResult._id } }).exec();
                            res.send({ 'message': 'We are already friends brother', 'status': true });
                        } 
                        else {
                            console.log("else create friend");
                            // get reference ids of both iserId and friendId 
                            let newFriendModel = new friendModel({ 'userId': userResult._id, 'friendId': friendResult._id, 'projectId': req.body.projectId });
                            newFriendModel.save().then(reslt => { // save both ref-Ids in friend table
                                userModel.update({ '_id': req.body.userId, 'projectId': req.body.projectId }, { $set: { 'chatWithRefId': friendResult._id } }).exec();
                                res.send({ 'message': 'Success', 'status': true });
                            })
                        }
                    })
                }
            })
        }
    })
})


friendsRouter.route('/unfriend').post(function (req, res) {

    userModel.findOne({ 'userId':req.body.userId, 'projectId': req.body.projectId }, { password: false })
    .lean().exec(function (err, userResult) { 
        if (!userResult) res.send({ 'message': 'User Id doesnt exist', 'status': false }); 
        else {
            userModel.findOne({ 'userId': req.body.friendId, 'projectId': req.body.projectId }, { password: false })
            .lean().exec(function (err, friendResult) { 
                if (!friendResult) res.send({ 'message': 'Friend does not exist', 'status': false });
                else {
                    friendModel.update({ 'userId': userResult._id, 'friendId': friendResult._id }, { 'status': 0 })
                    .lean().exec(function (err, result) {
                        if (err) res.send(err);
                        res.send({ 'message': 'unfriended', status: true })
                    })
                }
            })
        }
    })
})

friendsRouter.route('/getfriends').post(function (req, res) {
    var userId = req.body.userId;
    friendModel.find({ 'userId': userId, 'status': 1 }).populate({ path: 'userId', select: { 'password': false } }).populate({ path: 'friendId', select: { 'password': false } }).exec(function (err, result) {
        if (err) res.send(err);
        res.send(result);
    })
})

friendsRouter.route('/resetChatRefId').post(function (req, res) {
    var userId = req.body.userId;
    userModel.update({ 'userId': userId }, { $set: { 'chatWithRefId': '' } }).exec();
    res.send(true);
})

// performs additional functionality including creating friend, i.e. if friend's exist then registers it 
friendsRouter.route('/create_register_friend').post(function (req, res) {
   console.log('create_register_friend');
   console.log(req.body);
   var userResult = null;
    userModel.findOne({ 'userId': req.body.userId, 'projectId': req.body.projectId }, { password: false })
        .lean().exec(function (err, _userResult) {
            userResult = _userResult;
          //  console.log("userResult");
           // console.log(userResult);
        if (!userResult) res.send({ 'message': 'UserId or ProjectId doesnt exist', 'status': false }); 
        else {
            // check friendId and projectId exist in userTable or not
            userModel.findOne({ 'userId': req.body.friendId, 'projectId': req.body.projectId }, { password: false })
            .lean().exec(function (err, friendResult) { 
                 console.log("1");
                // console.log(userResult);
               //  console.log(req.body.friendData);
                if (!friendResult) {
                    let _friendData = {
                        userId: req.body.friendData.userId,
                        name: req.body.friendData.name,
                        email: req.body.friendData.email,
                        password: "asdzxc",
                        phone: "",
                        projectId: req.body.friendData.projectId,
                    }
                //   var friendData = req.body._friendData;
                  let newUserModel = new userModel(_friendData);
                  console.log("2");
                //  console.log(userResult);
                 // console.log(req.body.friendId);
                  newUserModel.save().then(reslt => {
                    console.log("3");
                  // console.log(userResult);
                  //  console.log(reslt);
                    userModel.findOne({ 'userId': req.body.friendId, 'projectId': req.body.projectId }, { password: false })
                    .lean().exec(function (err, _friendResult) { 
                        console.log("4");
                        console.log(_friendResult._id);
                        console.log(userResult._id);
                      friendModel.findOne({ 
                          $or: [{ 'userId': userResult._id, 'friendId': _friendResult._id},
                          { 'userId': _friendResult._id, 'friendId': userResult._id}] 
                        }).exec(function (err, result) { 
                            console.log(result);
                            if(err) console.log(err);
                        if (result){
                            result.status=1;
                            //result.save();
                            userModel.update({ 'userId': req.body.userId }, { $set: { 'chatWithRefId': _friendResult._id } }).exec();
                            res.send({ 'message': 'Already Friends - Success', 'status': true });
                        } 
                        else {
                            // get reference ids of both iserId and friendId 
                            let newFriendModel = new friendModel({ 'userId': userResult._id, 'friendId': _friendResult._id });
                            newFriendModel.save().then(reslt => { // save both ref-Ids in friend table
                                userModel.update({ 'userId': req.body.userId }, { $set: { 'chatWithRefId': _friendResult._id } }).exec();
                                res.send({ 'message': 'Friend Created - Success', 'status': true });
                            })
                        }
                    }) //--- FriendModel query ends ----
                    }) //--- Friend userModel query ends ----
                  });
                 
                }
                else{
                    friendModel.findOne({ 
                        $or: [{ 'userId': userResult._id, 'friendId': friendResult._id},
                        { 'userId': friendResult._id, 'friendId': userResult._id}] 
                      }).exec(function (err, result) { 
                          console.log(result);
                      if (result){
                          result.status=1;
                          //result.save();
                          userModel.update({ 'userId': req.body.userId }, { $set: { 'chatWithRefId': friendResult._id } }).exec();
                          res.send({ 'message': 'Already Friends - Success', 'status': true });
                      } 
                      else {
                          // get reference ids of both iserId and friendId 
                          let newFriendModel = new friendModel({ 'userId': userResult._id, 'friendId': friendResult._id });
                          newFriendModel.save().then(reslt => { // save both ref-Ids in friend table
                              userModel.update({ 'userId': req.body.userId }, { $set: { 'chatWithRefId': friendResult._id } }).exec();
                              res.send({ 'message': 'Friend Created - Success', 'status': true });
                          })
                      }
                  }) //--- FriendModel query ends ----
                }//--- else ends ----
            })
        }
    })
})

friendsRouter.route('/searchFriend').post(async function (req, res) {
    console.log(req.body);
    console.log("------------------------");
    // const searchResult = await testModel.find({_id: { $lt: req.body.nextId } , $text: { $search: req.body.name } }).limit(7).exec();
    var searchResult;

    if (!req.body.lastUserTime){
        searchResult = await userModel.aggregate(
            [
                { $match: { name: { $regex: req.body.name, '$options': 'i' } } },
                { $sort: { highest : -1 } },
                { $limit : 5 }
            ]
        );
    }
    else{
        searchResult = await userModel.aggregate(
            [
                { $match: { name: { $regex: req.body.name, '$options': 'i' } } },
                { $sort: { highest : -1 } },
                { $lt: [ "createdAt", req.body.lastUserTime ] },
                { $limit : 5 }
            ]
        );
    }
    

    for (let i = 0; i < searchResult.length; i++) {
        var friendIdData = await friendModel.findOne({
            $or: [
                {
                    $and: [{ userId: req.body.userId }, { friendId: searchResult[i]._id }]
                },
                {
                    $and: [{ userId: searchResult[i]._id }, { friendId: req.body.userId }]
                }
            ]
        });

        if (friendIdData) {
            console.log(friendIdData);
            searchResult[i].friendStatus = friendIdData.status;
        }
        else searchResult[i].friendStatus = 0;
    }

    res.json(searchResult);
})


friendsRouter.route('/sendFriendRequest').post(async function (req, res) {
    console.log(req.body);
    let _friendData = {
        userId: req.body.userId,
        friendId: req.body.friendId,
        projectId: req.body.projectId,
        status: 2
    }

    let newFriendModel = new friendModel(_friendData);
    let saveRes = await newFriendModel.save();
    await saveRes.populate('userId').execPopulate();
    await saveRes.populate('friendId').execPopulate();

    res.json(saveRes);
})

friendsRouter.route('/updateFriendRequest').post(async function (req, res) {
  console.log(req.body);
  let updateResult = await friendModel.update({ '_id': req.body._id }, { $set: { 'status': req.body.status } }).exec();
  res.json(updateResult);
})


module.exports = friendsRouter;
