<template>
  <div class="hello">
    <div class="chitchat-loader">
      <div>
        <img src="../assets/images/logo/logo_big.png" alt="" />
        <h3>Simple, secure messaging for fast connect to world..!</h3>
      </div>
    </div>
    <div class="chitchat-container sidebar-toggle">

      <nav class="main-nav on custom-scroll" id="mainnav">

        <div class="logo-warpper" style="border: 0;">
          <div class="navlogo">
            <a href=""><img src="../assets/images/logo/logo.png" alt="logo" style="border-radius: 0px;height:auto" /></a>
          </div>
          <div style="margin-top: 17px;padding-right: 10px;">
            <span><img class="" src="../assets/images/nav/bars.png" alt="Avatar" style="height: auto;border-radius: 0;" /></span>
            <span style="margin-left: 12px; margin-right: 12px;" v-if="current_User.onlineStatus == 1" class="navprofile" v-bind:class="{ online: current_User.pStatus == 0, unreachable : current_User.pStatus == 1, busy: current_User.pStatus == 2, offline: current_User.pStatus == 3, offline: current_User.pStatus == 4 }">
              <img class="bg-img"  v-if="userImageName" :src="hostname+'images/chatImages/'+userImageName" alt="Avatar" style="border-radius: 30px;max-width: 42px;" />
              <img  v-else class="bg-img" src="../assets/images/contact/1.jpg" alt="Avatar" style="border-radius: 30px;" />
            </span>
            <span><img class="" src="../assets/images/nav/dots.png" alt="Avatar" style="height: auto;" /></span>
          </div>
        </div>
        <div class="sidebar-main">
          <ul class="sidebar-top">
            <li @click="chatNav()" class="active" style="display: flex;">
              
                <span class="activefile1" style="vertical-align: text-bottom;"><img class="" src="../assets/images/nav/chaticon.png" alt="Avatar" style="height: auto;" /></span>
              
              <span class="activefile" style="padding-left: 18px;">Chat</span>
            </li>
            <li @click="meetingNav()">
              <span class="activecss1" style="vertical-align: text-bottom;"><img class="" src="../assets/images/nav/meetings.png" alt="Avatar" style="height: auto;" /></span>
              <span class="activecss" style="padding-left: 16px;">Meetings</span>
            </li>
            <li @click="roomNav()">
              <span class="activecss1" style="vertical-align: text-bottom;"><img class="" src="../assets/images/nav/rooms.png" alt="Avatar" style="height: auto;" /></span>
              <span class="activecss" style="padding-left: 20px;">Rooms</span>
            </li>
            <li data-toggle="modal" data-target="#showPresenter" data-keyboard="false" data-backdrop="static">
              <span  style="vertical-align: text-bottom;" class="activecss1" v-bind:class="{'dot-btn dot-danger grow' : presentersData.length > 0 }"><img class="" src="../assets/images/nav/live.png" alt="Avatar" style="height: auto;" /></span>
              <span class="activelive" style="padding-left: 17px;">Live</span>
            </li>
            <li @click="contact()">
              <span class="activecss1" style="vertical-align: text-bottom;"><img class="" src="../assets/images/nav/contacts.png" alt="Avatar" style="height: auto;" /></span>
              <span class="activecss" style="padding-left: 16px;">Contacts</span>
            </li>
            <li>
              <span class="activecss1" style="vertical-align: text-bottom;"><img class="" src="../assets/images/nav/schedule.png" alt="Avatar" style="height: auto;" /></span>
              <span class="activecss"  style="padding-left: 22px;">Schedule</span>
            </li>
            <li @click="favourite()">
              <span class="activecss1" style="vertical-align: text-bottom;"><img class="" src="../assets/images/nav/todo.png" alt="Avatar" style="height: auto;" /></span>
              <span class="activetodo" style="padding-left: 20px;">To-Do</span>
            </li>
            <li>
              <span class="activecss1" style="vertical-align: text-bottom;"><img class="" src="../assets/images/nav/projects.png" alt="Avatar" style="height: auto;" /></span>
              <span class="activecss" style="padding-left: 17px;">Projects</span>
            </li>
            <li @click="document()">
              <span class="activecss1" style="vertical-align: text-bottom;"><img class="" src="../assets/images/nav/documents.png" alt="Avatar" style="height: auto;" /></span>
              <span class="activecss" style="padding-left: 17px;">Documents</span>
            </li>
            <li @click="status()" style="display: flex;">

                <span class="activefile1" style="vertical-align: text-bottom;"><img class="" src="../assets/images/nav/files.png" alt="Avatar" style="height: auto;" /></span>
              
              <span class="activefile" style="padding-left: 19px;">Files</span>
            </li>
            <li class="records">
              <span class="activecss1" style="vertical-align: text-bottom;"><img class="" src="../assets/images/nav/records.png" alt="Avatar" style="height: auto;" /></span>
              <span style="padding-left: 24px;">Records</span>
              <span  style="margin-left: 16px;" class="active_class badge badge-danger sm">2</span>
            </li>
            <li class="minutes" style="    margin-bottom: 66px !important;">
              <span class="activecss1" style="vertical-align: text-bottom;"><img class="" src="../assets/images/nav/minutes.png" alt="Avatar" style="height: auto;" /></span>
              <span class="activecss" style="padding-left: 22px;">Minutes</span>
            </li>

            <!--<li>
                  <a class="icon-btn btn-light button-effect" href="javascript:void(0);" @click="favourite()" id="Fav">
                    <i class="fa fa-star"> </i>
                  </a>
                </li>
                
                <li>
                  <a class="icon-btn btn-light button-effect" href="javascript:void(0);" @click="contact()">
                    <i class="fa fa-users"> </i>
                  </a>
                </li>
                <li>
                  <div class="dot-btn dot-danger grow">
                    <a class="icon-btn btn-light button-effect" href="javascript:void(0);" @click="notification()">
                      <i class="fa fa-bell"></i>
                    </a>
                  </div>
                </li>
                <li>
                  <a class="icon-btn btn-light button-effect" href="javascript:void(0);" @click="setting()" >
                    <i class="fa fa-cog"></i>
                  </a>
                </li>-->
          </ul>
          <ul class="sidebar-bottom">
            <!--<li>
                  <a class="icon-btn btn-light button-effect mode" data-tippy-content="Theme Mode" >
                    <i class="fa fa-moon-o"></i>
                  </a>
                </li>
                <li>
                  <button v-on:click="logout()" class="icon-btn btn-light">
                    <i class="fa fa-power-off"> </i>
                  </button>
                </li>-->
          </ul>

        </div>

      </nav>
      <div class="logoutDiv">
        <span @click="notification()" class="dot-btn dot-danger grow" style="padding-left: 3px;"><img class="" src="../assets/images/nav/notification.png" alt="Avatar" style="height: auto;" /></span>
        <span @click="setting()" style="padding-left: 5px;padding-right: 5px;"><img class="" src="../assets/images/nav/setting.png" alt="Avatar" style="height: auto;" /></span>
        <span v-on:click="logout()"><img class="" src="../assets/images/nav/logout.png" alt="Avatar" style="height: auto;" /></span>
      </div>
      <aside class="chitchat-left-sidebar left-disp" id="mainSidebar" >
        <div class="recent-default dynemic-sidebar active" id="recent">
          <div class="recent">
            <div class="theme-title">
              <div class="media">
                <!--<audio-recorder
      					upload-url="YOUR_API_URL"
      					:attempts="3"
      					:time="2"
      					:headers="headers"
      					:before-recording="callback"
      					:pause-recording="callback"
      					:after-recording="callback"
      					:select-record="callback"
      					:before-upload="callback"
      					:successful-upload="callback"
      					:failed-upload="callback"/>
      					
                <audio-player src="https://peekvideochat.com/incomming.mp3"/> -->

                <div v-if="c_user" style="display: contents;">
                  <audio id="messagetone" muted>
                    <source src="https://peekvideochat.com/bell.mp3" type="audio/ogg">
                    <source src="https://peekvideochat.com/bell.mp3" type="audio/mpeg">
                  </audio>

                  <audio id="outgoingcall" muted>
                    <source src="https://peekvideochat.com/incomming.mp3" type="audio/ogg">
                    <source src="https://peekvideochat.com/incomming.mp3" type="audio/mpeg">
                  </audio>
                  <audio id="incommingcall" muted>
                    <source src="https://peekvideochat.com/outgoing_ringtone.mp3" type="audio/ogg">
                    <source src="https://peekvideochat.com/outgoing_ringtone.mp3" type="audio/mpeg">

                  </audio>
                  <p style="display:none">{{checkcallTime}}</p>

                  <div style="border: 1px #BAC5E9 solid;padding: 1px;border-radius: 26px;width: 62px !important;height: 62px !important;" v-if="c_user.onlineStatus == 1" class="profile">
                    
                    <img class="bg-img" v-if="userImageName" :src="hostname+'images/chatImages/'+userImageName" alt="Avatar" style="border-radius: 30px;width: 57px;min-height: 57px;" />
                    <img class="bg-img" v-else  src="../assets/images/contact/1.jpg" alt="Avatar" style="border-radius: 30px;width: 57px;" />
                    <label for="imageInput" style="position: absolute;right: 0; top: 37px;"><camera-icon size="1.5x"  class="custom-class"></camera-icon></label>
                    <input type="file" id="imageInput" ref="userImage" @change="userUploadfile($event)" style="display:none"/> 
                  </div>
                  <div style="padding-left: 12px; margin-top: 5px;">
                    <h5 style="font-size:16px;margin-bottom: 10px;"> {{c_user.name}} </h5>

                    <div v-if="c_user.pStatus == 0" class="badge badge-success">Online</div>
                    <div v-else-if="c_user.pStatus == 1" class="badge badge-warning">Away</div>
                    <div v-else-if="c_user.pStatus == 2" class="badge badge-danger">Busy</div>
                    <div v-else-if="c_user.pStatus == 3" class="badge badge-light">Offline</div>
                  </div>
                </div>
                <div class="media-body">
                  <a class="icon-btn btn-outline-light button-effect pull-right mobile-back">
                    <i class="ti-angle-right"></i>
                  </a>
                  <a class="icon-btn button-effect pull-right mainnav" style="margin-top: 19px;">
                    <img class="" src="../assets/images/nav/dots.png" alt="Avatar" style="height: auto;" />
                  </a>
                </div>
              </div>
            </div>

            <!-- <carousel :nav="false" :dots="false">
                      <div style="padding: 13px;">
                    <div class="dot-btn dot-danger grow"></div>
                    <img src="https://placeimg.com/200/200/any?1">
                      </div>

                      <div style="padding: 13px;">
                      <div class="dot-btn dot-success grow"></div>
                    <img src="https://placeimg.com/200/200/any?2">
                  </div>

                  <div style="padding: 13px;">
                    <div class="dot-btn dot-danger grow"></div>
                    <img src="https://placeimg.com/200/200/any?3">
                  </div>
                  <div style="padding: 13px;">
                    <div class="dot-btn dot-danger grow"></div>
                    <img src="https://placeimg.com/200/200/any?4">
                  </div>
      			
                </carousel> -->
            <!-- <div class="recent-slider recent-chat owl-carousel owl-theme">
                      <div class="item">
                        <div class="recent-box">
                          <div class="dot-btn dot-danger grow"></div>
                          <div class="recent-profile"><img class="bg-img" src="../assets/images/avtar/1.jpg" alt="Avatar"/>
                            <h6> John deo</h6>
                          </div>
                        </div>
                      </div>
                      <div class="item">
                        <div class="recent-box">
                          <div class="dot-btn dot-success grow"></div>
                          <div class="recent-profile online"><img class="bg-img" src="../assets/images/avtar/big/audiocall.jpg" alt="Avatar"/>
                            <h6> John </h6>
                          </div>
                        </div>
                      </div>
                      <div class="item">
                        <div class="recent-box">
                          <div class="dot-btn dot-warning grow"></div>
                          <div class="recent-profile"><img class="bg-img" src="../assets/images/avtar/2.jpg" alt="Avatar"/>
                            <h6> Jpny</h6>
                          </div>
                        </div>
                      </div>
                    </div> -->
          </div>
          <div class="chat custom-scroll" style="margin-top: 18px;">
            <ul class="chat-cont-setting" style="padding: 7px;margin-left: 14px;margin-bottom:-15px;box-shadow: 0px 0px 0px 1px #0000000f;">
              <li>

                <a href="#" data-toggle="modal" data-target="#msgchatModal" data-keyboard="false" data-backdrop="static">
                  <div style="margin-right: 11px;">
                    <img class="" src="../assets/images/nav/newchat.png" alt="Avatar" style="height: auto;border-radius: 0;" />
                    </i>
                  </div>
                  <span style="padding-right: 10px;">new chat</span>

                </a>
              </li>
              <li>
                <a href="#" data-toggle="modal" data-target="#msgcallModal" data-keyboard="false" data-backdrop="static">
                  <div style="margin-right: 11px;">
                    <img class="" src="../assets/images/nav/newcall.png" alt="Avatar" style="height: auto;border-radius: 0;" />
                  </div>
                  <span style="padding-right: 14px;">new call</span>

                </a>
              </li>
              <li>
                <a href="#" @click="creategroupPanle" data-toggle="modal" data-target="#exampleModalCenter" data-keyboard="false" data-backdrop="static">
                  <div style="margin-right: 11px;">
                    <img class="" src="../assets/images/nav/groupUsers.png" alt="Avatar" style="height: auto;border-radius: 0;" />
                  </div>
                  <span style="padding-right: 0px;">new Group</span>

                </a>
              </li>
            </ul>
            <div class="theme-title">
              <div class="media">
                <div>
                  <h2>Chat</h2>
                  <h4></h4>
                </div>
                <div class="media-body text-right">
                  <a class="icon-btn btn-outline-light btn-sm search contact-search" href="#">
                    <search-icon size="1.5x" class="custom-class"></search-icon>
                  </a>
                  <form class="form-inline search-form">
                    <div class="form-group">
                      <input class="form-control-plaintext" type="search" placeholder="Search.." />
                      <div class="icon-close close-search"> </div>
                    </div>
                  </form>
                  <a class="icon-btn btn-primary btn-fix chat-cont-toggle outside" href="#">
                    <plus-icon size="1.5x" class="custom-class"></plus-icon>
                  </a>
                </div>
              </div>
            </div>
            <div class="theme-tab tab-sm chat-tabs" style="padding:0px;margin-top: 0px;">

              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" data-to="chat-content">
                  <a class="nav-link button-effect active" id="chat-tab" data-toggle="tab" @click="chatTab()" href="#chat" role="tab" aria-controls="chat" aria-selected="true">
                    <message-circle-icon size="2x" class="custom-class"></message-circle-icon>Chat</a>
                </li>
                <li class="nav-item" data-to="call-content">
                  <a class="nav-link button-effect" id="call-tab" data-toggle="tab" href="#call" role="tab" aria-controls="call" aria-selected="false">
                    <phone-icon size="2x" class="custom-class"></phone-icon>Call</a>
                </li>
                <li class="nav-item" data-to="contact-content">
                  <a class="nav-link button-effect" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">
                    <monitor-icon size="2x" class="custom-class"></monitor-icon> Room</a>
                </li>
              </ul>
              <div class="tab-content" id="myTabContent" style="">
                <div class="tab-pane fade show active" id="chat" role="tabpanel" aria-labelledby="chat-tab">
                  <div class="theme-tab">
                    <ul class="nav nav-tabs" id="myTab1" role="tablist" style="border: 1px solid rgb(234 238 248 / 67%);">
                      <li class="nav-item" style="margin: 0px 0px;">
                        <a class="nav-link button-effect active" @click="usertab()" id="direct-tab" data-toggle="tab" href="#direct" role="tab" aria-controls="direct" aria-selected="false" data-to="chating">Direct</a>
                      </li>
                      <span style="border-right: 1px #bac5e947 solid;border-width: 1px;padding: 15px 0;"></span>
                      <li class="nav-item" style="margin: 0px 0px;">
                        <a class="nav-link button-effect" @click="getgroups()" id="group-tab" data-toggle="tab" href="#group" role="tab" aria-controls="group" aria-selected="true" data-to="group_chat">Group</a>
                      </li>
                      <span style="border-right: 1px #bac5e947 solid;border-width: 1px;padding: 15px 0;"></span>
                      <li class="nav-item" style="margin: 0px 0px;">
                        <a class="nav-link button-effect" id="meeting-tab" data-toggle="tab" href="#meeting" role="tab" aria-controls="meeting" aria-selected="true" data-to="meeting_chat">Meeting</a>
                      </li>
                    </ul>
                    <div class="tab-content" id="myTabContent1">
                      <div class="tab-pane fade show active" id="direct" role="tabpanel" aria-labelledby="direct-tab">
                        <div class="search2" id="mainsearch" style="padding: 0px;border-top: none;margin-bottom: 6px;">
                          <div>
                            <div class="input-group">

                              <input class="form-control" v-model="searchFriend" type="text" placeholder="Search ..." />
                              <div class="input-group-append">
                                <span class="input-group-text">
                                  <i class="fa fa-search"></i>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="showCallMin" style="display:none">
                          <h5>Incomming call</h5>
                          <ul class="chat-main">
                            <li data-to="blank" class="inits active" style="">
                              <a href="#" data-toggle="modal" data-target="#o2ovideocall" data-keyboard="false" data-backdrop="static" class="" style="font-size: 16px;line-height: 2;">
                                {{ oncallFriend.name }} </a>
                              <span style="margin-left: 44px;">{{formattedElapsedTime}}</span>
                              <a class="icon-btn btn-danger button-effect btn-xl is-animating cancelcall" href="#" @click="o2ostopKCall()" data-dismiss="modal" style="float: right;width: 30px;height: 30px;">
                                <i class="fa fa-phone" aria-hidden="true"></i>
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div id="audioshowCallMin" style="display:none">
                          <h5>Incomming call</h5>
                          <ul class="chat-main">
                            <li data-to="blank" class="inits active" style="">
                              <a href="#" data-toggle="modal" data-target="#o2oaudiocall" data-keyboard="false" data-backdrop="static" class="" style="font-size: 16px;line-height: 2;">
                                {{ oncallFriend.name }} </a>
                              <span style="margin-left: 44px;">{{formattedElapsedTime}}</span>
                              <a class="icon-btn btn-danger button-effect btn-xl is-animating cancelcall" href="#" @click="o2ostopKCall()" data-dismiss="modal" style="float: right;width: 30px;height: 30px;">
                                <i class="fa fa-phone" aria-hidden="true"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div v-if="showUsers">
                          <ul v-for="friends in orderedUsers" v-if="friends._id != c_user._id" class="chat-main" :id="'showcallModel'+friends._id">
                            <li v-if="friends.friendReqStatus == 1" class="init" @click="startchat(friends)" :id="'friend'+friends._id" data-to="blank" style="cursor: pointer;">
                              <div class="chat-box">
                                <div v-if="friends.onlineStatus == 1" class="profile" v-bind:class="{ online: friends.pStatus == 0, unreachable : friends.pStatus == 1, busy: friends.pStatus == 2, offline: friends.pStatus == 3, offline: friends.pStatus == 4 }">
                                  <img class="bg-img" style="min-height: 49px;"  v-if="friends.user_image" :src="hostname+'images/chatImages/'+friends.user_image" alt="Avatar" />
                                  <img class="bg-img" v-else src="../assets/images/contact/1.jpg" alt="Avatar" /></div>
                                <div v-else class="profile offline">
                                 <img class="bg-img" style="min-height: 49px;"  v-if="friends.user_image" :src="hostname+'images/chatImages/'+friends.user_image" alt="Avatar" />
                                  <img class="bg-img" v-else src="../assets/images/contact/1.jpg" alt="Avatar" />
                                </div>

                                <div class="details" style="padding-left: 73px;">
                                  <h5>{{friends.name}}</h5>
                                  <h6 :id="'f_typing'+friends._id" v-if="friends.latestMsg">{{ friends.latestMsg.message }}</h6>
                                  <h6 :id="'f_typing'+friends._id" v-else>Start Chat</h6>
                                </div>

                                <div class="date-status">
                                  <h6 class="todayDate">{{isToday(friends.updatedByMsg)}}</h6>
                                  <div v-if="friends.usCount != 0" class="badge badge-primary sm">{{friends.usCount}}</div>
                                  <h6 class="font-success status" v-else-if="friends.seenStatus == 1 "> Seen</h6>
                                </div>
                              </div>
                            </li>
                            <li v-else-if="friends.friendReqStatus == 2" class="init" :id="'friend'+friends._id" data-to="blank">
                              <div class="chat-box">
                                <div v-if="friends.onlineStatus == 1" class="profile" v-bind:class="{ online: friends.pStatus == 0, unreachable : friends.pStatus == 1, busy: friends.pStatus == 2, offline: friends.pStatus == 3, offline: friends.pStatus == 4 }">
                                 <img class="bg-img" style="min-height: 49px;"  v-if="friends.user_image" :src="hostname+'images/chatImages/'+friends.user_image" alt="Avatar" />
                                  <img class="bg-img" v-else src="../assets/images/contact/1.jpg" alt="Avatar" /></div>
                                <div v-else class="profile offline">
                                <img class="bg-img" style="min-height: 49px;"  v-if="friends.user_image" :src="hostname+'images/chatImages/'+friends.user_image" alt="Avatar" />
                                  <img class="bg-img" v-else src="../assets/images/contact/1.jpg" alt="Avatar" />
                                </div>
                                <div v-if="friends.friendReqSenderId == friends._id">
                                  <div class="details" style="padding-left: 73px;">
                                    <h5>{{friends.name}}</h5>
                                    <br>
                                    <p style="margin: 0;">
                                      <span style="cursor: pointer;color:green;padding-right: 25px;" @click="friendRequestupdate(friends,1)">Accept</span>
                                      <span style="cursor: pointer;color:red" @click="friendRequestupdate(friends,3)">Reject</span>
                                    </p>
                                  </div>
                                </div>

                                <div v-else>
                                  <div class="details" style="padding-left: 73px;">
                                    <h5>{{friends.name}}</h5>
                                    <br>
                                    <p style="margin: 0;">
                                      <span style="cursor: pointer;color:green;padding-right: 20px;">Pending</span>
                                      <span style="cursor: pointer;color:red" @click="friendRequestupdate(friends,3)">Cancel</span>
                                    </p>
                                  </div>
                                </div>

                              </div>
                            </li>
                          </ul>
                        </div>
                        <div v-if="showSearchfriends">
                          <div v-if="searchUsers.length > 0">
                            <ul v-for="friends in searchUsers" v-if="friends._id != c_user._id" class="chat-main" :id="'showcallModel'+friends._id">

                              <li v-if="friends.friendReqStatus == 1" class="init" @click="startchat(friends)" :id="'friend'+friends._id" data-to="blank" style="cursor: pointer;">
                                <div class="chat-box">
                                  <div v-if="friends.onlineStatus == 1" class="profile" v-bind:class="{ online: friends.pStatus == 0, unreachable : friends.pStatus == 1, busy: friends.pStatus == 2, offline: friends.pStatus == 3, offline: friends.pStatus == 4 }">
                                   <img class="bg-img" style="min-height: 49px;"  v-if="friends.user_image" :src="hostname+'images/chatImages/'+friends.user_image" alt="Avatar" />
                                  <img class="bg-img" v-else src="../assets/images/contact/1.jpg" alt="Avatar" /></div>
                                  <div v-else class="profile offline">
                                   <img class="bg-img" style="min-height: 49px;"  v-if="friends.user_image" :src="hostname+'images/chatImages/'+friends.user_image" alt="Avatar" />
                                  <img class="bg-img" v-else src="../assets/images/contact/1.jpg" alt="Avatar" />
                                  </div>

                                  <div class="details" style="padding-left: 73px;">
                                    <h5>{{friends.name}}</h5>
                                    <h6 :id="'f_typing'+friends._id" v-if="friends.latestMsg">{{ friends.latestMsg.message }}</h6>
                                    <h6 v-else>Start Chat</h6>
                                  </div>

                                  <div class="date-status">
                                    <h6 class="todayDate">{{isToday(friends.updatedByMsg)}}</h6>
                                    <div v-if="friends.usCount != 0" class="badge badge-primary sm">{{friends.usCount}}</div>
                                    <h6 class="font-success status" v-else> Seen</h6>
                                  </div>

                                </div>

                              </li>

                              <li v-else-if="friends.friendReqStatus == 2" class="init" :id="'friend'+friends._id" data-to="blank">
                                <div class="chat-box">
                                  <div v-if="friends.onlineStatus == 1" class="profile" v-bind:class="{ online: friends.pStatus == 0, unreachable : friends.pStatus == 1, busy: friends.pStatus == 2, offline: friends.pStatus == 3, offline: friends.pStatus == 4 }">
                                    <img class="bg-img" style="min-height: 49px;"  v-if="friends.user_image" :src="hostname+'images/chatImages/'+friends.user_image" alt="Avatar" />
                                  <img class="bg-img" v-else src="../assets/images/contact/1.jpg" alt="Avatar" /></div>
                                  <div v-else class="profile offline">
                                    <img class="bg-img" style="min-height: 49px;"  v-if="friends.user_image" :src="hostname+'images/chatImages/'+friends.user_image" alt="Avatar" />
                                  <img class="bg-img" v-else src="../assets/images/contact/1.jpg" alt="Avatar" />
                                  </div>
                                  <div v-if="friends.friendReqSenderId == friends._id">
                                    <div class="details" style="padding-left: 73px;">
                                      <h5>{{friends.name}}</h5>
                                      <br>
                                      <p style="margin: 0;">
                                        <span style="cursor: pointer;color:green;padding-right: 25px;" @click="friendRequestupdate(friends,1)">Accept</span>
                                        <span style="cursor: pointer;color:red" @click="friendRequestupdate(friends.friendReqId,3)">Reject</span>
                                      </p>
                                    </div>
                                  </div>

                                  <div v-else>
                                    <div class="details" style="padding-left: 73px;">
                                      <h5>{{friends.name}}</h5>
                                      <br>
                                      <p style="margin: 0;">
                                        <span style="cursor: pointer;color:green;padding-right: 20px;">Pending</span>
                                        <span style="cursor: pointer;color:red" @click="friendRequestupdate(friends,3)">Cancel</span>
                                      </p>
                                    </div>
                                  </div>

                                </div>

                              </li>

                              <li v-else :id="'friend'+friends._id" data-to="blank" style="">
                                <div class="chat-box">
                                  <div v-if="friends.onlineStatus == 1" class="profile" v-bind:class="{ online: friends.pStatus == 0, unreachable : friends.pStatus == 1, busy: friends.pStatus == 2, offline: friends.pStatus == 3, offline: friends.pStatus == 4 }">
                                    <img class="bg-img" style="min-height: 49px;"  v-if="friends.user_image" :src="hostname+'images/chatImages/'+friends.user_image" alt="Avatar" />
                                  <img class="bg-img" v-else src="../assets/images/contact/1.jpg" alt="Avatar" /></div>
                                  <div v-else class="profile offline">
                                    <img class="bg-img" style="min-height: 49px;"  v-if="friends.user_image" :src="hostname+'images/chatImages/'+friends.user_image" alt="Avatar" />
                                  <img class="bg-img" v-else src="../assets/images/contact/1.jpg" alt="Avatar" />
                                  </div>

                                  <div class="details" style="padding-left: 73px;">
                                    <h5>{{friends.name}}</h5>
                                    <br>
                                    <button type="button" @click="addfriends(friends)" class="btn btn-sm btn-default" style="cursor:pointer"> Add Friend </button>
                                  </div>

                                </div>

                              </li>

                            </ul>
                          </div>
                          <div v-else>
                            <p style="text-align: center;"> No Record Found</p>
                          </div>

                        </div>

                      </div>
                      <div class="tab-pane fade" id="group" role="tabpanel" aria-labelledby="group-tab">
                        <div class="search2">
                          <div>
                            <div class="input-group">

                              <input class="form-control" type="text" v-model="groupSearch" placeholder="Search Group" />
                              <div class="input-group-append">
                                <span class="input-group-text">
                                  <i class="fa fa-search"></i>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <content-loader v-if="groupLoader" :width="230" :height="160" :speed="2" primaryColor="#dad7d7" secondaryColor="#ecebeb">
                          <rect x="66" y="17" rx="3" ry="3" width="139" height="5" />
                          <rect x="65" y="35" rx="3" ry="3" width="130" height="5" />
                          <rect x="66" y="55" rx="3" ry="3" width="142" height="5" />
                          <circle cx="2" cy="2" r="2" />
                          <rect x="7" y="14" rx="8" ry="8" width="49" height="49" />
                          <rect x="15" y="39" rx="0" ry="0" width="0" height="1" />
                          <circle cx="341" cy="18" r="8" />
                          <circle cx="218" cy="30" r="7" />
                        </content-loader>

                        <div v-if="groupData">
                          <ul class="group-main" v-for="(group,index) in orderedGroups">
                            <li class="group_chat" :id="'group_data'+group._id" data-to="group_chat" @click="startgroupchat(group,index)" style="cursor: pointer;">
                              <div class="group-box">
                                <div class="profile"><img class="bg-img" src="../assets/images/avtar/teq.jpg" alt="Avatar" /></div>
                                <div class="details" style="padding-left: 66px;padding-top: 0px;">
                                  <h5>{{ group.name }}</h5>
                                  <h6>Lorem Ipsum is simply dummy text the printing and typesetting industry.</h6>
                                </div>
                                <div class="date-status">
                                  <ul class="grop-icon">
                                    <li>
                                      <a class="group-tp" href="#" data-tippy-content=""> ({{group.members.length }})</a>
                                    </li>

                                  </ul>

                                </div>
                              </div>
                            </li>

                          </ul>

                        </div>

                        <div v-if="groupSearching">

                          <ul class="group-main" v-for="(group,index) in filteredGrouplist">
                            <li class="group_chat" :id="'group_data'+group._id" data-to="group_chat" @click="startgroupchat(group,index)" style="cursor: pointer;">
                              <div class="group-box">
                                <div class="profile"><img class="bg-img" src="../assets/images/avtar/teq.jpg" alt="Avatar" /></div>
                                <div class="details" style="padding-left: 66px;padding-top: 0px;">
                                  <h5>{{ group.name }}</h5>
                                  <h6>Lorem Ipsum is simply dummy text the printing and typesetting industry.</h6>
                                </div>
                                <div class="date-status">
                                  <ul class="grop-icon">
                                    <li>
                                      <a class="group-tp" href="#" data-tippy-content=""> ({{group.members.length }})</a>
                                    </li>

                                  </ul>

                                </div>
                              </div>
                            </li>

                          </ul>

                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="call" role="tabpanel" aria-labelledby="call-tab">
                  <div class="theme-tab tab-icon">
                    <ul class="nav nav-tabs" id="contactTab" role="tablist">
                      <li class="nav-item">
                        <a class="nav-link active" id="con1-tab" data-toggle="tab" href="#con1" role="tab" aria-controls="con1" aria-selected="true">All</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" id="con3-tab" data-toggle="tab" href="#con3" role="tab" aria-controls="con3" aria-selected="false">
                          <phone-incoming-icon size="1.5x" class="custom-class"></phone-incoming-icon>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" id="con4-tab" data-toggle="tab" href="#con4" role="tab" aria-controls="con4" aria-selected="false">
                          <phone-outgoing-icon size="1.5x" class="custom-class"></phone-outgoing-icon>
                        </a>
                      </li>

                    </ul>
                    <div class="tab-content" id="contactTabContent">
                      <div class="tab-pane fade show active" id="con1" role="tabpanel" aria-labelledby="con1-tab">
                        <ul class="call-log-main">
                          <li class="active">
                            <div class="call-box">
                              <div class="profile offline"><img class="bg-img" src="../assets/images/contact/2.jpg" alt="Avatar" /></div>
                              <div class="details">
                                <h5>Jony Lynetin</h5>
                                <h6>
                                  <i data-feather="arrow-down-left"></i>3:30 pm</h6>
                              </div>
                              <div class="call-status">
                                <div class="icon-btn btn-outline-success button-effect btn-sm">
                                  <phone-icon size="1.5x" class="custom-class"></phone-icon>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="call-box">
                              <div class="profile online"><img class="bg-img" src="../assets/images/contact/1.jpg" alt="Avatar" /></div>
                              <div class="details">
                                <h5>Jony Lynetin</h5>
                                <h6>
                                  <i data-feather="arrow-down-right"></i>3:10 pm</h6>
                              </div>
                              <div class="call-status">
                                <div class="icon-btn btn-outline-success button-effect btn-sm">
                                  <video-icon size="1.5x" class="custom-class"></video-icon>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="call-box">
                              <div class="profile offline"><img class="bg-img" src="../assets/images/contact/2.jpg" alt="Avatar" /></div>
                              <div class="details">
                                <h5>Jony Lynetin</h5>
                                <h6>
                                  <i class="missed" data-feather="corner-left-down"></i>3:00 pm</h6>
                              </div>
                              <div class="call-status">
                                <div class="icon-btn btn-outline-danger button-effect btn-sm">
                                  <phone-icon size="1.5x" class="custom-class"></phone-icon>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="call-box">
                              <div class="profile online"><img class="bg-img" src="../assets/images/contact/1.jpg" alt="Avatar" /></div>
                              <div class="details">
                                <h5>Jony Lynetin</h5>
                                <h6>
                                  <i data-feather="arrow-down-right"></i>3:00 pm</h6>
                              </div>
                              <div class="call-status">
                                <div class="icon-btn btn-outline-success button-effect btn-sm">
                                  <video-icon size="1.5x" class="custom-class"></video-icon>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="call-box">
                              <div class="profile offline"><img class="bg-img" src="../assets/images/contact/2.jpg" alt="Avatar" /></div>
                              <div class="details">
                                <h5>Jony Lynetin</h5>
                                <h6>
                                  <i data-feather="arrow-down-right"></i>3:00 pm</h6>
                              </div>
                              <div class="call-status">
                                <div class="icon-btn btn-outline-success button-effect btn-sm">
                                  <phone-icon size="1.5x" class="custom-class"></phone-icon>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="call-box">
                              <div class="profile online"><img class="bg-img" src="../assets/images/contact/1.jpg" alt="Avatar" /></div>
                              <div class="details">
                                <h5>Jony Lynetin</h5>
                                <h6>
                                  <i data-feather="arrow-down-right"></i>3:00 pm</h6>
                              </div>
                              <div class="call-status">
                                <div class="icon-btn btn-outline-success button-effect btn-sm">
                                  <video-icon size="1.5x" class="custom-class"></video-icon>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div class="tab-pane fade" id="con2" role="tabpanel" aria-labelledby="con2-tab">
                        <ul class="call-log-main">
                          <li class="active">
                            <div class="call-box">
                              <div class="profile offline"><img class="bg-img" src="../assets/images/contact/2.jpg" alt="Avatar" /></div>
                              <div class="details">
                                <h5>Jony Lynetin</h5>
                                <h6>
                                  <i class="missed" data-feather="corner-left-down"></i>3:30 pm</h6>
                              </div>
                              <div class="call-status">
                                <div class="icon-btn btn-outline-danger button-effect btn-sm">
                                  <phone-icon size="1.5x" class="custom-class"></phone-icon>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="call-box">
                              <div class="profile online"><img class="bg-img" src="../assets/images/contact/1.jpg" alt="Avatar" /></div>
                              <div class="details">
                                <h5>Jony Lynetin</h5>
                                <h6>
                                  <i class="missed" data-feather="corner-left-down"></i>3:10 pm</h6>
                              </div>
                              <div class="call-status">
                                <div class="icon-btn btn-outline-danger button-effect btn-sm">
                                  <video-icon size="1.5x" class="custom-class"></video-icon>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="call-box">
                              <div class="profile offline"><img class="bg-img" src="../assets/images/contact/2.jpg" alt="Avatar" /></div>
                              <div class="details">
                                <h5>Jony Lynetin</h5>
                                <h6>
                                  <i class="missed" data-feather="corner-left-down"></i>3:00 pm</h6>
                              </div>
                              <div class="call-status">
                                <div class="icon-btn btn-outline-danger button-effect btn-sm">
                                  <phone-icon size="1.5x" class="custom-class"></phone-icon>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="call-box">
                              <div class="profile online"><img class="bg-img" src="../assets/images/contact/1.jpg" alt="Avatar" /></div>
                              <div class="details">
                                <h5>Jony Lynetin</h5>
                                <h6>
                                  <i class="missed" data-feather="corner-left-down"></i>3:00 pm</h6>
                              </div>
                              <div class="call-status">
                                <div class="icon-btn btn-outline-danger button-effect btn-sm">
                                  <video-icon size="1.5x" class="custom-class"></video-icon>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="call-box">
                              <div class="profile offline"><img class="bg-img" src="../assets/images/contact/2.jpg" alt="Avatar" /></div>
                              <div class="details">
                                <h5>Jony Lynetin</h5>
                                <h6>
                                  <i class="missed" data-feather="corner-left-down"></i>3:00 pm</h6>
                              </div>
                              <div class="call-status">
                                <div class="icon-btn btn-outline-danger button-effect btn-sm">
                                  <phone-icon size="1.5x" class="custom-class"></phone-icon>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="call-box">
                              <div class="profile online"><img class="bg-img" src="../assets/images/contact/1.jpg" alt="Avatar" /></div>
                              <div class="details">
                                <h5>Jony Lynetin</h5>
                                <h6>
                                  <i class="missed" data-feather="corner-left-down"></i>3:00 pm</h6>
                              </div>
                              <div class="call-status">
                                <div class="icon-btn btn-outline-danger button-effect btn-sm">
                                  <video-icon size="1.5x" class="custom-class"></video-icon>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div class="tab-pane fade" id="con3" role="tabpanel" aria-labelledby="con3-tab">
                        <ul class="call-log-main">
                          <li>
                            <div class="call-box">
                              <div class="profile online"><img class="bg-img" src="../assets/images/contact/1.jpg" alt="Avatar" /></div>
                              <div class="details">
                                <h5>Jony Lynetin</h5>
                                <h6>
                                  <i data-feather="arrow-down-right"></i>3:10 pm</h6>
                              </div>
                              <div class="call-status">
                                <div class="icon-btn btn-outline-success button-effect btn-sm">
                                  <video-icon size="1.5x" class="custom-class"></video-icon>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="call-box">
                              <div class="profile offline"><img class="bg-img" src="../assets/images/contact/2.jpg" alt="Avatar" /></div>
                              <div class="details">
                                <h5>Jony Lynetin</h5>
                                <h6>
                                  <i data-feather="arrow-down-right"></i>3:00 pm</h6>
                              </div>
                              <div class="call-status">
                                <div class="icon-btn btn-outline-success button-effect btn-sm">
                                  <phone-icon size="1.5x" class="custom-class"></phone-icon>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="call-box">
                              <div class="profile online"><img class="bg-img" src="../assets/images/contact/1.jpg" alt="Avatar" /></div>
                              <div class="details">
                                <h5>Jony Lynetin</h5>
                                <h6>
                                  <i data-feather="arrow-down-right"></i>3:00 pm</h6>
                              </div>
                              <div class="call-status">
                                <div class="icon-btn btn-outline-success button-effect btn-sm">
                                  <video-icon size="1.5x" class="custom-class"></video-icon>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="call-box">
                              <div class="profile offline"><img class="bg-img" src="../assets/images/contact/2.jpg" alt="Avatar" /></div>
                              <div class="details">
                                <h5>Jony Lynetin</h5>
                                <h6>
                                  <i data-feather="arrow-down-right"></i>3:00 pm</h6>
                              </div>
                              <div class="call-status">
                                <div class="icon-btn btn-outline-success button-effect btn-sm">
                                  <phone-icon size="1.5x" class="custom-class"></phone-icon>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="call-box">
                              <div class="profile online"><img class="bg-img" src="../assets/images/contact/1.jpg" alt="Avatar" /></div>
                              <div class="details">
                                <h5>Jony Lynetin</h5>
                                <h6>
                                  <i data-feather="arrow-down-right"></i>3:00 pm</h6>
                              </div>
                              <div class="call-status">
                                <div class="icon-btn btn-outline-success button-effect btn-sm">
                                  <video-icon size="1.5x" class="custom-class"></video-icon>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div class="tab-pane fade" id="con4" role="tabpanel" aria-labelledby="con4-tab">
                        <ul class="call-log-main">
                          <li>
                            <div class="call-box">
                              <div class="profile online"><img class="bg-img" src="../assets/images/contact/1.jpg" alt="Avatar" /></div>
                              <div class="details">
                                <h5>Jony Lynetin</h5>
                                <h6>
                                  <i data-feather="arrow-up-right"></i>3:10 pm</h6>
                              </div>
                              <div class="call-status">
                                <div class="icon-btn btn-outline-success button-effect btn-sm">
                                  <video-icon size="1.5x" class="custom-class"></video-icon>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="call-box">
                              <div class="profile offline"><img class="bg-img" src="../assets/images/contact/2.jpg" alt="Avatar" /></div>
                              <div class="details">
                                <h5>Jony Lynetin</h5>
                                <h6>
                                  <i data-feather="arrow-up-right"></i>3:00 pm</h6>
                              </div>
                              <div class="call-status">
                                <div class="icon-btn btn-outline-success button-effect btn-sm">
                                  <phone-icon size="1.5x" class="custom-class"></phone-icon>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="call-box">
                              <div class="profile online"><img class="bg-img" src="../assets/images/contact/1.jpg" alt="Avatar" /></div>
                              <div class="details">
                                <h5>Jony Lynetin</h5>
                                <h6>
                                  <i data-feather="arrow-up-right"></i>3:00 pm</h6>
                              </div>
                              <div class="call-status">
                                <div class="icon-btn btn-outline-success button-effect btn-sm">
                                  <video-icon size="1.5x" class="custom-class"></video-icon>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="call-box">
                              <div class="profile offline"><img class="bg-img" src="../assets/images/contact/2.jpg" alt="Avatar" /></div>
                              <div class="details">
                                <h5>Jony Lynetin</h5>
                                <h6>
                                  <i data-feather="arrow-up-right"></i>3:00 pm</h6>
                              </div>
                              <div class="call-status">
                                <div class="icon-btn btn-outline-success button-effect btn-sm">
                                  <phone-icon size="1.5x" class="custom-class"></phone-icon>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="call-box">
                              <div class="profile online"><img class="bg-img" src="../assets/images/contact/1.jpg" alt="Avatar" /></div>
                              <div class="details">
                                <h5>Jony Lynetin</h5>
                                <h6>
                                  <i data-feather="arrow-up-right"></i>3:00 pm</h6>
                              </div>
                              <div class="call-status">
                                <div class="icon-btn btn-outline-success button-effect btn-sm">
                                  <video-icon size="1.5x" class="custom-class"></video-icon>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                  <ul class="contact-log-main">
                    <li>
                      <div class="contact-box">
                        <div class="profile offline"><img class="bg-img" src="../assets/images/contact/2.jpg" alt="Avatar" /></div>
                        <div class="details">
                          <h5>Jony Lynetin</h5>
                          <h6>+21 3523 25544 </h6>
                        </div>
                        <div class="contact-action">
                          <div class="icon-btn btn-outline-primary btn-sm button-effect">
                            <phone-icon size="1.5x" class="custom-class"></phone-icon>
                          </div>
                          <div class="icon-btn btn-outline-success btn-sm button-effect">
                            <video-icon size="1.5x" class="custom-class"></video-icon>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="active">
                      <div class="contact-box">
                        <div class="profile online"><img class="bg-img" src="../assets/images/contact/1.jpg" alt="Avatar" /></div>
                        <div class="details">
                          <h5>Jony Lynetin</h5>
                          <h6>+54 541447 255 </h6>
                        </div>
                        <div class="contact-action">
                          <div class="icon-btn btn-outline-primary btn-sm button-effect">
                            <phone-icon size="1.5x" class="custom-class"></phone-icon>
                          </div>
                          <div class="icon-btn btn-outline-success btn-sm button-effect">
                            <video-icon size="1.5x" class="custom-class"></video-icon>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="contact-box">
                        <div class="profile busy"><img class="bg-img" src="../assets/images/contact/3.jpg" alt="Avatar" /></div>
                        <div class="details">
                          <h5>Jony Lynetin</h5>
                          <h6>+58 2564 02554</h6>
                        </div>
                        <div class="contact-action">
                          <div class="icon-btn btn-outline-primary btn-sm button-effect">
                            <phone-icon size="1.5x" class="custom-class"></phone-icon>
                          </div>
                          <div class="icon-btn btn-outline-success btn-sm button-effect">
                            <video-icon size="1.5x" class="custom-class"></video-icon>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="contact-box">
                        <div class="profile unreachable"><img class="bg-img" src="../assets/images/contact/4.jpg" alt="Avatar" /></div>
                        <div class="details">
                          <h5>Jony Lynetin</h5>
                          <h6>+44 55124 2524</h6>
                        </div>
                        <div class="contact-action">
                          <div class="icon-btn btn-outline-primary btn-sm button-effect">
                            <phone-icon size="1.5x" class="custom-class"></phone-icon>
                          </div>
                          <div class="icon-btn btn-outline-success btn-sm button-effect">
                            <video-icon size="1.5x" class="custom-class"></video-icon>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="contact-box">
                        <div class="profile online"><img class="bg-img" src="../assets/images/contact/4.jpg" alt="Avatar" /></div>
                        <div class="details">
                          <h5>Jony Lynetin</h5>
                          <h6>+54 541447 255 </h6>
                        </div>
                        <div class="contact-action">
                          <div class="icon-btn btn-outline-primary btn-sm button-effect">
                            <phone-icon size="1.5x" class="custom-class"></phone-icon>
                          </div>
                          <div class="icon-btn btn-outline-success btn-sm button-effect">
                            <video-icon size="1.5x" class="custom-class"></video-icon>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="fevorite-tab dynemic-sidebar" id="favourite">
           <div class="todo-main">
                <div class="theme-title">
                  <div class="media">
                    <div>
                      <h2>Todo</h2>
                      <h4>to create your task</h4>
                    </div>
                    <div class="media-body media-body text-right">
                      <a class="icon-btn btn-sm btn-outline-light close-panel" href="javascript:void(0);">
                        <x-icon size="1.5x" class="custom-class"></x-icon>
                      </a>
                    </div>
                  </div>
                </div>
              
                <div class="todo-tab theme-tab custom-scroll">
                  <ul class="nav nav-tabs">
                    <li class="nav-item">
                      <a class="buttoneffect active show" data-toggle="pill" href="#todo1" @click="getTodo">All</a>
                    </li>
                    <li class="nav-item">
                      <a class="buttoneffect button-effect" data-toggle="pill" href="#todo2" @click="getMytodo">My to-dos</a>
                    </li>
                    <li>
                      <a class="icon-btn btn-light button-effect btn-sm" data-toggle="modal" data-target="#createtodoModal" data-keyboard="false" data-backdrop="static">
                        <plus-icon size="1.5x" class="custom-class"></plus-icon>
                      </a>
                    </li>
                  </ul>
                  <div class="tab-content">
                    <div class="tab-pane active show" id="todo1">
                     <div v-if="TodoList.length > 0">
                             <div class="tab-card text-left">
                        <div class="todo-task" >
                         <template v-for="todoData in TodoList">
                          <div class="todo-main-content" >
                            <div class="input-text" style="margin-bottom: 12px;font-weight: 700;">
                              {{todoData.todo}}
                            </div>
                             <div style="float:left">
                            <p >Assign by</p>
                             <p >  Assign Date</p>
                               <p >  Due Date </p>
                             </div>
                               <div style="float:right">  
                            <p style="color: #223645;">{{todoData.assignTo}}</p>
                           <p style="color: #223645;"> {{isToday(todoData.createdAt)}}</p> 
                            <p style="color: #223645;">{{isToday(todoData.assignDate)}}</p>
                          </div>
                          </div>
                         
                          <div class="todo-list" style="padding-bottom: 28px;border-bottom: 1px solid #eff1f2; margin-bottom: 36px;">
                            <div class="element" id="div_1">
                              <p class="add add-to-do" style="float:left">Status</p>
                             
                              <span class="add add-to-do" style="float:right">
                                  <select class="custom-scroll" name=""   @change="todoStatusUpdate($event)">
                                <option :selected="todoData.status == 0 ?true : false" :value="'0,'+todoData._id" >Pending</option>
                                <option :selected="todoData.status == 1 ?true : false" :value="'1,'+todoData._id" >In Progress</option>
                                <option :selected="todoData.status == 2 ?true : false" :value="'2,'+todoData._id" >Complete</option>
                              </select>
                              </span>
                            </div>
                          </div>
                          </template>
                        </div>
                          </div>

                      </div>
                       <div v-else> No task in list</div>
                    </div>
                    <div class="tab-pane fade" id="todo2">
                      <div v-if="myTodoList.length > 0">
                             <div class="tab-card text-left">
                        <div class="todo-task" >
                         <template v-for="mytodo in myTodoList">
                          <div class="todo-main-content" >
                            <div class="input-text" style="margin-bottom: 12px;font-weight: 700;">
                              {{mytodo.todo}}
                            </div>
                             <div style="float:left">
                            <p >Assign to</p>
                             <p >  Assign Date</p>
                               <p >  Due Date </p>
                             </div>
                               <div style="float:right">  
                            <p style="color: #223645;">{{mytodo.assignTo}}</p>
                           <p style="color: #223645;"> {{isToday(mytodo.createdAt)}}</p> 
                            <p style="color: #223645;">{{isToday(mytodo.assignDate)}}</p>
                          </div>
                          </div>
                          <div class="todo-list" style="padding-bottom: 28px;border-bottom: 1px solid #eff1f2; margin-bottom: 36px;">
                            <div class="element" id="div_1">
                              <p class="add add-to-do" style="float:left">Status</p>
                              <p class="add add-to-do" style="float:right"><span class="badge badge-dark" v-if="mytodo.status == 0">Pending</span> <span class="badge badge-primary" v-else-if="mytodo.status == 1">In Progress</span>
                                <span class="badge badge-success" v-else>Complete</span></p>
                            </div>
                          </div>
                          </template>
                        </div>
                          </div>
                      </div>
                      <div v-else class="converstaion-docs tab-card">
                        <i class="fa fa-sticky-note-o"></i>
                        <h5 class="mb-3">No Open To-Dos Here </h5>
                        <a class="btn btn-primary btn-sm" data-toggle="modal" data-target="#createtodoModal">Create A To-Do</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </div>
        <div class="document-tab dynemic-sidebar" id="document">
          <div class="theme-title">
            <div class="media">
              <div>
                <h2>Document</h2>
                <h4>List of document</h4>
              </div>
              <div class="media-body text-right">
                <a class="icon-btn btn-outline-light btn-sm m-r-15 search" href="#">
                  <search-icon size="1.5x" class="custom-class"></search-icon>
                </a>
                <form class="form-inline search-form">
                  <div class="form-group">
                    <input class="form-control-plaintext" type="search" placeholder="Search.." />
                    <div class="icon-close close-search"> </div>
                  </div>
                </form>
                <a class="icon-btn btn-outline-light btn-sm close-panel">
                  <x-icon size="1.5x" class="custom-class"></x-icon>
                </a>
              </div>
            </div>
          </div>
          <ul class="chat-main">
            <li v-for="document in allDocument">
              <div class="chat-box">
                <div class="media">
                  <div class="profile">
                    <a class="icon-btn btn-outline-danger btn-xl pull-right rouded15" href="#">
                      <i class="fa fa-file-code-o"></i>
                    </a>
                  </div>
                  <div class="details">
                    <h5>{{document.message}}</h5>
                    <h6>{{docToday(document.createdAt)}}</h6>
                  </div>
                  <div class="media-body">
                    <a class="icon-btn btn-outline-light btn-sm pull-right" :href="hostname+'images/chatImages/'+document.message" target="_blank">
                      <download-icon size="1.5x" class="custom-class"></download-icon>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            
          </ul>
        </div>
        <div class="contact-list-tab dynemic-sidebar custom-scroll" id="contact-list">
          <div class="theme-title">
            <div class="media">
              <div>
                <h2>Contact</h2>
                <h4>Start talking now</h4>
              </div>
              <div class="media-body text-right">
                <a class="icon-btn btn-outline-light btn-sm m-r-15 search" href="#">
                  <search-icon size="1.5x" class="custom-class"></search-icon>
                </a>
                <form class="form-inline search-form">
                  <div class="form-group">
                    <input class="form-control-plaintext" type="search" placeholder="Search.." />
                    <div class="icon-close close-search"> </div>
                  </div>
                </form>
                <a class="icon-btn btn-outline-light btn-sm close-panel">
                  <x-icon size="1.5x" class="custom-class"></x-icon>
                </a>
              </div>
            </div>
          </div>
           <ul class="chat-main custom-scroll">
                <li v-for="friends in orderedUsers" v-if="friends._id != c_user._id || friends.friendReqStatus == 1" class="init" @click="startchat(friends)" :id="'friend'+friends._id" data-to="blank" data-dismiss="modal" style="cursor: pointer;width: 100%;    padding-left: 0px;padding-right: 5px;">
                  <div class="chat-box">
                    <div v-if="friends.onlineStatus == 1" class="profile" v-bind:class="{ online: friends.pStatus == 0, unreachable : friends.pStatus == 1, busy: friends.pStatus == 2, offline: friends.pStatus == 3, offline: friends.pStatus == 4 }">
                     <img class="bg-img" v-if="friends.user_image"  :src="hostname+'images/chatImages/'+friends.user_image" alt="Avatar" /> 

                       <img class="bg-img" v-else  src="../assets/images/contact/2.jpg"alt="Avatar" /></div>
                    <div v-else class="profile offline">
                      <img class="bg-img" v-if="friends.user_image"  :src="hostname+'images/chatImages/'+friends.user_image" alt="Avatar" /> 

                       <img class="bg-img" v-else  src="../assets/images/contact/2.jpg"alt="Avatar" />
                    </div>

                    <div class="details" style="padding-left: 73px;">
                      <h5>{{friends.name}}</h5>
                      <h6 :id="'f_typing'+friends._id" v-if="friends.latestMsg">{{ friends.latestMsg.message }}</h6>
                      <h6 v-else>Start Chat</h6>
                    </div>

                    <div class="date-status">
                      <h6 class="todayDate">{{isToday(friends.updatedByMsg)}}</h6>
                      <div v-if="friends.usCount != 0" class="badge badge-primary sm">{{friends.usCount}}</div>
                      <h6 class="font-success status" v-else-if="friends.seenStatus == 1 "> Seen</h6>
                    </div>
                  </div>
                </li>
              </ul>
        </div>
        <div class="notification-tab dynemic-sidebar custom-scroll" id="notification">
          <div class="theme-title">
            <div class="media">
              <div>
                <h2>Notification</h2>
                <h4>List of notification</h4>
              </div>
              <div class="media-body text-right">
                <a class="icon-btn btn-outline-light btn-sm close-panel">
                  <x-icon size="1.5x" class="custom-class"></x-icon>
                </a>
              </div>
            </div>
          </div>
          <ul class="chat-main">
            <li>
              <div class="chat-box notification">
                <div class="profile offline"><img class="bg-img" src="../assets/images/contact/1.jpg" alt="Avatar" /></div>
                <div class="details">
                  <span>Josephin water</span>
                  <h5>Upload New Photos</h5>
                  <p>Lorem Ipsum is simply dummy text of the printing.</p>
                </div>
                <div class="date-status">
                  <h6>Now</h6>
                </div>
              </div>
            </li>
            <li>
              <div class="chat-box notification">
                <div class="profile bg-success offline">
                  <span>J</span>
                </div>
                <div class="details">
                  <span>Jony Today Birthday</span>
                  <h5>Upload New Photos</h5>
                  <p>Lorem Ipsum is simply dummy text of the printing.</p>
                </div>
                <div class="date-status">
                  <h6>1 hour ago</h6>
                </div>
              </div>
            </li>
            <li>
              <div class="chat-box notification">
                <div class="profile offline"><img class="bg-img" src="../assets/images/contact/2.jpg" alt="Avatar" /></div>
                <div class="details">
                  <span>Sufiya Elija</span>
                  <h5>Comment On your Photo</h5>
                  <p>Lorem Ipsum is simply dummy text of the printing.</p>
                </div>
                <div class="date-status">
                  <h6>5 hour ago</h6>
                </div>
              </div>
            </li>
            <li>
              <div class="chat-box notification">
                <div class="profile unreachable"><img class="bg-img" src="../assets/images/contact/3.jpg" alt="Avatar" /></div>
                <div class="details">
                  <span>Pabelo Mukrani</span>
                  <h5>Invite Your New Friend</h5>
                  <p>Lorem Ipsum is simply dummy text of the printing.</p>
                </div>
                <div class="date-status">
                  <h6>6 hour ago</h6>
                </div>
              </div>
            </li>
            <li>
              <div class="chat-box notification">
                <div class="profile bg-success offline">
                  <span>PM</span>
                </div>
                <div class="details">
                  <span>Pabelo Mukrani</span>
                  <h5>Update Profile Picture</h5>
                  <p>Lorem Ipsum is simply dummy text of the printing.</p>
                </div>
                <div class="date-status">
                  <h6>6 hour ago</h6>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="settings-tab dynemic-sidebar custom-scroll" id="settings">
          <div class="theme-title">
            <div class="media">
              <div>
                <h2>Settings</h2>
                <h4>Change your app setting.</h4>
              </div>
              <div class="media-body text-right">
                <a class="icon-btn btn-outline-light btn-sm close-panel">
                  <x-icon size="1.5x" class="custom-class"></x-icon>
                </a>
              </div>
            </div>
            <div class="profile-box">
              <div class="media">
                <div class="profile"><img class="bg-img" src="../assets/images/contact/2.jpg" alt="Avatar" /></div>
                <div class="details">
                  <h5>Josephin water</h5>
                  <h6>Alabma , USA</h6>
                </div>
                <div class="details edit">
                  <form class="form-radious form-sm">
                    <div class="form-group mb-2">
                      <input class="form-control" type="text" name="username" value="Josephin water" />
                    </div>
                    <div class="form-group mb-0">
                      <input class="form-control" type="text" name="address" value="Alabma , USA" />
                    </div>
                  </form>
                </div>
                <div class="media-body">
                  <a class="icon-btn btn-outline-light btn-sm pull-right edit-btn" href="#">
                    <i data-feather="edit"> </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="setting-block">
            <div class="block">
              <div class="media">
                <div class="media-body">
                  <h3>Account</h3>
                </div>
                <div class="media-right">
                  <a class="icon-btn btn-outline-light btn-sm pull-right previous" href="#">
                    <arrow-left-icon size="1.5x" class="custom-class"></arrow-left-icon>
                  </a>
                </div>
              </div>
              <div class="theme-according" id="accordion">

                <div class="card">
                  <div class="card-header" id="headingFour" role="heading" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    <a>Change Number
                      <i class="fa fa-angle-down"></i>
                    </a>
                  </div>
                  <div class="collapse" id="collapseFour" aria-labelledby="headingFour" data-parent="#accordion">
                    <div class="card-body change-number">
                      <h5>Your old country code & phone number</h5>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text form-control m-0">+</span>
                        </div>
                        <input class="form-control country-code" type="number" placeholder="01" />
                        <input class="form-control" type="number" placeholder="1234567895" />
                      </div>
                      <h5>Your new country code & phone number</h5>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text form-control m-0">+</span>
                        </div>
                        <input class="form-control country-code" type="number" placeholder="01" />
                        <input class="form-control" type="number" placeholder="" />
                      </div>
                      <div class="text-right">
                        <a class="btn btn-outline-primary button-effect btn-sm" href="#">confirm</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card">
                  <div class="card-header" id="headingSix" role="heading" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                    <a>Delete My account
                      <i class="fa fa-angle-down"></i>
                    </a>
                  </div>
                  <div class="collapse" id="collapseSix" aria-labelledby="headingSix" data-parent="#accordion">
                    <div class="card-body">
                      <a class="p-0 req-info font-danger" href="#">Delete Account </a>
                      <p>
                        <b>Note :</b>Deleting your account will delete your account info, profile photo, all groups & chat history.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="media">
              <div class="media-body">
                <h3>Account</h3>
                <h4>Update Your Account Details</h4>
              </div>
              <div class="media-right">
                <a class="icon-btn btn-outline-light btn-sm pull-right next" href="#">
                  <i data-feather="chevron-right"> </i>
                </a>
              </div>
            </div>
          </div>

          <div class="setting-block">
            <div class="block">
              <div class="media">
                <div class="media-body">
                  <h3>Help</h3>
                </div>
                <div class="media-right">
                  <a class="icon-btn btn-outline-light btn-sm pull-right previous" href="#">
                    <arrow-left-icon size="1.5x" class="custom-class"></arrow-left-icon>
                  </a>
                </div>
              </div>
              <ul class="help">
                <li>
                  <h5>
                    <a href="#">FAQ</a>
                  </h5>
                </li>
                <li>
                  <h5>
                    <a href="#"> Contact Us</a>
                  </h5>
                </li>
                <li>
                  <h5>
                    <a href="#">Terms and Privacy Policy</a>
                  </h5>
                </li>
                <li>
                  <h5>
                    <a href="#">Licenses</a>
                  </h5>
                </li>
                <li>
                  <h5>
                    <a href="#">2019 - 20 Powered by Pixelstrap</a>
                  </h5>
                </li>
              </ul>
            </div>
            <div class="media">
              <div class="media-body">
                <h3>Help</h3>
                <h4>You are Confusion, Tell me</h4>
              </div>
              <div class="media-right">
                <a class="icon-btn btn-outline-light btn-sm pull-right next" href="#">
                  <i data-feather="chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="status-tab custom-scroll dynemic-sidebar" id="status">

          <div class="theme-title">
            <div class="media">
              <div>
                <h2>Files</h2>
                <h4>Shared Media</h4>
              </div>
              <div class="media-body media-body text-right">
                <a class="icon-btn btn-sm btn-outline-light close-panel" href="javascript:void(0);">
                  <x-icon size="1.5x" class="custom-class"></x-icon>
                </a>
              </div>
            </div>
          </div>
          <div class="theme-tab">
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a class="buttoneffect active" data-toggle="pill" href="#tab1">Media</a>
              </li>
              <li class="nav-item">
                <a class="buttoneffect" data-toggle="pill" href="#tab2">Link</a>
              </li>
              <li class="nav-item">
                <a class="buttoneffect" data-toggle="pill" href="#tab3">Docs</a>
              </li>
            </ul>
          </div>
          <div class="file-tab">
            <div class="tab-content custom-scroll">
              <div class="tab-pane active" id="tab1">
                <div class="media-gallery portfolio-section grid-portfolio">
                  <div class="collapse-block open">
                    <h5 class="block-title">12/12/2019
                      <label class="badge badge-primary sm ml-2">8</label>
                    </h5>
                    <div class="block-content">
                      <div class="row share-media zoom-gallery">
                        <!--<div class="col-4 isotopeSelector filter">
                          <div class="media-big">
                            <div class="overlay">
                              <div class="border-portfolio">
                                <a href="../assets/images/gallery/1.jpg">
                                  <div class="overlay-background">
                                    <i class="ti-plus" aria-hidden="true"></i>
                                  </div><img class="img-fluid bg-img" src="../assets/images/gallery/1.jpg" alt="portfolio-image" /></a>
                              </div>
                            </div>
                          </div>
                        </div>-->
                        <div class="col-4" v-for="media in allMedia">
                          <div class="media-small isotopeSelector filter">
                            <div class="overlay">
                              <div class="border-portfolio">
                                <a :href="hostname+'images/chatImages/'+media.message" target="_blank">
                                  <div class="overlay-background">
                                    <i class="ti-plus" aria-hidden="true"></i>
                                  </div><img class="img-fluid bg-img" :src="hostname+'images/chatImages/'+media.message" alt="portfolio-image" /></a>
                              </div>
                            </div>
                          </div>
                         
                        </div>
                     
                      </div>
                    </div>
                    <h5 class="block-title">10/01/2020
                      <label class="badge badge-primary sm ml-2">5</label>
                    </h5>
                    <div class="block-content">
                      <div class="row share-media zoom-gallery">
                        <div class="col-4 isotopeSelector filter">
                          <div class="media-big">
                            <div class="overlay">
                              <div class="border-portfolio">
                                <a href="../assets/images/gallery/1.jpg">
                                  <div class="overlay-background">
                                    <i class="ti-plus" aria-hidden="true"></i>
                                  </div><img class="img-fluid bg-img" src="../assets/images/gallery/1.jpg" alt="portfolio-image" /></a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="media-small isotopeSelector filter">
                            <div class="overlay">
                              <div class="border-portfolio">
                                <a href="../assets/images/gallery/2.jpg">
                                  <div class="overlay-background">
                                    <i class="ti-plus" aria-hidden="true"></i>
                                  </div><img class="img-fluid bg-img" src="../assets/images/gallery/2.jpg" alt="portfolio-image" /></a>
                              </div>
                            </div>
                          </div>
                          <div class="media-small isotopeSelector filter">
                            <div class="overlay">
                              <div class="border-portfolio">
                                <a href="../assets/images/gallery/3.jpg">
                                  <div class="overlay-background">
                                    <i class="ti-plus" aria-hidden="true"></i>
                                  </div><img class="img-fluid bg-img" src="../assets/images/gallery/3.jpg" alt="portfolio-image" /></a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="media-small isotopeSelector filter">
                            <div class="overlay">
                              <div class="border-portfolio">
                                <a href="../assets/images/gallery/4.jpg">
                                  <div class="overlay-background">
                                    <i class="ti-plus" aria-hidden="true"></i>
                                  </div><img class="img-fluid bg-img" src="../assets/images/gallery/4.jpg" alt="portfolio-image" /></a>
                              </div>
                            </div>
                          </div>
                          <div class="media-small isotopeSelector filter fashion">
                            <div class="overlay">
                              <div class="border-portfolio">
                                <a href="../assets/images/gallery/5.jpg">
                                  <div class="overlay-background">
                                    <i class="ti-plus" aria-hidden="true"></i>
                                  </div><img class="img-fluid bg-img" src="../assets/images/gallery/5.jpg" alt="portfolio-image" /></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h5 class="block-title">30/04/2020
                      <label class="badge badge-primary sm ml-2">2</label>
                    </h5>
                    <div class="block-content">
                      <div class="row share-media zoom-gallery">
                        <div class="col-4 isotopeSelector filter">
                          <div class="media-big">
                            <div class="overlay">
                              <div class="border-portfolio">
                                <a href="../assets/images/gallery/1.jpg">
                                  <div class="overlay-background">
                                    <i class="ti-plus" aria-hidden="true"></i>
                                  </div><img class="img-fluid bg-img" src="../assets/images/gallery/1.jpg" alt="portfolio-image" /></a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="media-small isotopeSelector filter">
                            <div class="overlay">
                              <div class="border-portfolio">
                                <a href="../assets/images/gallery/2.jpg">
                                  <div class="overlay-background">
                                    <i class="ti-plus" aria-hidden="true"></i>
                                  </div><img class="img-fluid bg-img" src="../assets/images/gallery/2.jpg" alt="portfolio-image" /></a>
                              </div>
                            </div>
                          </div>
                          <div class="media-small isotopeSelector filter">
                            <div class="overlay">
                              <div class="border-portfolio">
                                <a href="../assets/images/gallery/3.jpg">
                                  <div class="overlay-background">
                                    <i class="ti-plus" aria-hidden="true"></i>
                                  </div><img class="img-fluid bg-img" src="../assets/images/gallery/3.jpg" alt="portfolio-image" /></a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="media-small isotopeSelector filter">
                            <div class="overlay">
                              <div class="border-portfolio">
                                <a href="../assets/images/gallery/4.jpg">
                                  <div class="overlay-background">
                                    <i class="ti-plus" aria-hidden="true"></i>
                                  </div><img class="img-fluid bg-img" src="../assets/images/gallery/4.jpg" alt="portfolio-image" /></a>
                              </div>
                            </div>
                          </div>
                          <div class="media-small isotopeSelector filter fashion">
                            <div class="overlay">
                              <div class="border-portfolio">
                                <a href="../assets/images/gallery/5.jpg">
                                  <div class="overlay-background">
                                    <i class="ti-plus" aria-hidden="true"></i>
                                  </div><img class="img-fluid bg-img" src="../assets/images/gallery/5.jpg" alt="portfolio-image" /></a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="media-small isotopeSelector filter">
                            <div class="overlay">
                              <div class="border-portfolio">
                                <a href="../assets/images/gallery/2.jpg">
                                  <div class="overlay-background">
                                    <i class="ti-plus" aria-hidden="true"></i>
                                  </div><img class="img-fluid bg-img" src="../assets/images/gallery/2.jpg" alt="portfolio-image" /></a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="media-small isotopeSelector filter">
                            <div class="overlay">
                              <div class="border-portfolio">
                                <a href="../assets/images/gallery/3.jpg">
                                  <div class="overlay-background">
                                    <i class="ti-plus" aria-hidden="true"></i>
                                  </div><img class="img-fluid bg-img" src="../assets/images/gallery/3.jpg" alt="portfolio-image" /></a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="media-small isotopeSelector filter">
                            <div class="overlay">
                              <div class="border-portfolio">
                                <a href="../assets/images/gallery/4.jpg">
                                  <div class="overlay-background">
                                    <i class="ti-plus" aria-hidden="true"></i>
                                  </div><img class="img-fluid bg-img" src="../assets/images/gallery/4.jpg" alt="portfolio-image" /></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h5 class="block-title">10/01/2020
                      <label class="badge badge-primary sm ml-2">2</label>
                    </h5>
                    <div class="block-content">
                      <div class="row share-media zoom-gallery">
                        <div class="col-4 isotopeSelector filter">
                          <div class="media-big">
                            <div class="overlay">
                              <div class="border-portfolio">
                                <a href="../assets/images/gallery/1.jpg">
                                  <div class="overlay-background">
                                    <i class="ti-plus" aria-hidden="true"></i>
                                  </div><img class="img-fluid bg-img" src="../assets/images/gallery/1.jpg" alt="portfolio-image" /></a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="media-small isotopeSelector filter">
                            <div class="overlay">
                              <div class="border-portfolio">
                                <a href="../assets/images/gallery/2.jpg">
                                  <div class="overlay-background">
                                    <i class="ti-plus" aria-hidden="true"></i>
                                  </div><img class="img-fluid bg-img" src="../assets/images/gallery/2.jpg" alt="portfolio-image" /></a>
                              </div>
                            </div>
                          </div>
                          <div class="media-small isotopeSelector filter">
                            <div class="overlay">
                              <div class="border-portfolio">
                                <a href="../assets/images/gallery/3.jpg">
                                  <div class="overlay-background">
                                    <i class="ti-plus" aria-hidden="true"></i>
                                  </div><img class="img-fluid bg-img" src="../assets/images/gallery/3.jpg" alt="portfolio-image" /></a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="media-small isotopeSelector filter">
                            <div class="overlay">
                              <div class="border-portfolio">
                                <a href="../assets/images/gallery/4.jpg">
                                  <div class="overlay-background">
                                    <i class="ti-plus" aria-hidden="true"></i>
                                  </div><img class="img-fluid bg-img" src="../assets/images/gallery/4.jpg" alt="portfolio-image" /></a>
                              </div>
                            </div>
                          </div>
                          <div class="media-small isotopeSelector filter fashion">
                            <div class="overlay">
                              <div class="border-portfolio">
                                <a href="../assets/images/gallery/5.jpg">
                                  <div class="overlay-background">
                                    <i class="ti-plus" aria-hidden="true"></i>
                                  </div><img class="img-fluid bg-img" src="../assets/images/gallery/5.jpg" alt="portfolio-image" /></a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="media-small isotopeSelector filter">
                            <div class="overlay">
                              <div class="border-portfolio">
                                <a href="../assets/images/gallery/2.jpg">
                                  <div class="overlay-background">
                                    <i class="ti-plus" aria-hidden="true"></i>
                                  </div><img class="img-fluid bg-img" src="../assets/images/gallery/2.jpg" alt="portfolio-image" /></a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="media-small isotopeSelector filter">
                            <div class="overlay">
                              <div class="border-portfolio">
                                <a href="../assets/images/gallery/3.jpg">
                                  <div class="overlay-background">
                                    <i class="ti-plus" aria-hidden="true"></i>
                                  </div><img class="img-fluid bg-img" src="../assets/images/gallery/3.jpg" alt="portfolio-image" /></a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="media-small isotopeSelector filter">
                            <div class="overlay">
                              <div class="border-portfolio">
                                <a href="../assets/images/gallery/4.jpg">
                                  <div class="overlay-background">
                                    <i class="ti-plus" aria-hidden="true"></i>
                                  </div><img class="img-fluid bg-img" src="../assets/images/gallery/4.jpg" alt="portfolio-image" /></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="tab2">
                <div class="link-group">
                  <div class="media">
                    <i data-feather="link"></i>
                    <div class="media-body">
                      <h5 class="mt-0">Jquery Template</h5>
                      <h6>12:05 PM Today </h6>
                    </div>
                  </div>
                  <a href="https://themeforest.net/item/endless-react-admin-template/25365098">https://themeforest.net/item/endless-react-admin-template</a>
                  <div class="media"><img class="img-fluid" src="../assets/images/file_icons/12.png" alt="media-img" />
                    <div class="media-body">
                      <h5>React Template</h5>
                      <h6 class="mt-0">Functionality integration project.</h6>
                    </div>
                  </div>
                </div>
                <div class="link-group">
                  <div class="media">
                    <i data-feather="link"></i>
                    <div class="media-body">
                      <h5 class="mt-0">Multikart Template</h5>
                      <h6>05:12 AM Today</h6>
                    </div>
                  </div>
                  <a href="https://themeforest.net/item/multikart-responsive-vuejs-ecommerce-template/25174665">https://themeforest.net/item/multikart-responsive-template</a>
                  <div class="media"><img class="img-fluid" src="../assets/images/file_icons/3.png" alt="media-img" />
                    <div class="media-body">
                      <h5>Multipurpose Vuejs.</h5>
                      <h6 class="mt-0">Template is a multi-use Vue template.</h6>
                    </div>
                  </div>
                </div>
                <div class="link-group">
                  <div class="media">
                    <i data-feather="link"></i>
                    <div class="media-body">
                      <h5 class="mt-0">Unice-Multipurpose</h5>
                      <h6>03:26 PM</h6>
                    </div>
                  </div>
                  <a href="https://themeforest.net/item/unice-angular-multipurpose-template/24776272">https://themeforest.net/item/unice-angular-template</a>
                  <div class="media"><img class="img-fluid" src="../assets/images/file_icons/8.png" alt="media-img" />
                    <div class="media-body">
                      <h5>Angular Template.</h5>
                      <h6 class="mt-0">Unice is a Perfect Respon.</h6>
                    </div>
                  </div>
                </div>
                <div class="link-group">
                  <div class="media">
                    <i data-feather="link"></i>
                    <div class="media-body">
                      <h5 class="mt-0">Endless-Angular</h5>
                      <h6>02:26 AM</h6>
                    </div>
                  </div>
                  <a href="https://themeforest.net/item/endless-angular-admin-template/23884779">https://themeforest.net/item/endless-angular-admin-template</a>
                  <div class="media"><img class="img-fluid" src="../assets/images/file_icons/12.png" alt="media-img" />
                    <div class="media-body">
                      <h5>Endless Document.</h5>
                      <h6 class="mt-0">Help you understand angular.</h6>
                    </div>
                  </div>
                </div>
                <div class="link-group">
                  <div class="media">
                    <i data-feather="link"></i>
                    <div class="media-body">
                      <h5 class="mt-0">Bigdeal-eCommerce</h5>
                      <h6>04:00 PM</h6>
                    </div>
                  </div>
                  <a href="https://themeforest.net/item/bigdeal-ecommerce-html-template/24809149">https://themeforest.net/item/bigdeal-ecommerce-template</a>
                  <div class="media"><img class="img-fluid" src="../assets/images/file_icons/9.png" alt="media-img" />
                    <div class="media-body">
                      <h5>HTML Template.</h5>
                      <h6 class="mt-0">eCommerce HTML Template.</h6>
                    </div>
                  </div>
                </div>
                <div class="link-group">
                  <div class="media">
                    <i data-feather="link"></i>
                    <div class="media-body">
                      <h5 class="mt-0">Multikart-Responsive.</h5>
                      <h6>11:05 PM</h6>
                    </div>
                  </div>
                  <a href="https://themeforest.net/item/multikart-responsive-react-ecommerce-template/23067773">https://themeforest.net/item/multikart-responsive-react-ecommerce</a>
                  <div class="media"><img class="img-fluid" src="../assets/images/file_icons/3.png" alt="media-img" />
                    <div class="media-body">
                      <h5>Multipurp eComme.</h5>
                      <h6 class="mt-0">Well with multi-purpose websites.</h6>
                    </div>
                  </div>
                </div>
                <div class="link-group">
                  <div class="media">
                    <i data-feather="link"></i>
                    <div class="media-body">
                      <h5 class="mt-0">Creative - Responsive</h5>
                      <h6>12:26 PM</h6>
                    </div>
                  </div>
                  <a href="https://themeforest.net/item/creative-responsive-admin-template/24978419">https://themeforest.net/item/creative-responsive</a>
                  <div class="media"><img class="img-fluid" src="../assets/images/file_icons/11.png" alt="media-img" />
                    <div class="media-body">
                      <h5>Dashboard Templa.</h5>
                      <h6 class="mt-0">Creative Admin is a full featured.</h6>
                    </div>
                  </div>
                </div>
                <div class="link-group">
                  <div class="media">
                    <i data-feather="link"></i>
                    <div class="media-body">
                      <h5 class="mt-0">eComme Template</h5>
                      <h6>12:26 PM</h6>
                    </div>
                  </div>
                  <a href="https://themeforest.net/item/multikart-responsive-angular-ecommerce-template/22905358">https://themeforest.net/item/multikart-responsive-angular</a>
                  <div class="media"><img class="img-fluid" src="../assets/images/file_icons/3.png" alt="media-img" />
                    <div class="media-body">
                      <h5>Responsive Ang.</h5>
                      <h6 class="mt-0">Multikart – Multipurpose.</h6>
                    </div>
                  </div>
                </div>
                <div class="link-group">
                  <div class="media">
                    <div class="media"></div>
                    <i data-feather="link"></i>
                    <div class="media-body">
                      <h5 class="mt-0">Multikart Templat.</h5>
                      <h6>12:26 PM</h6>
                    </div>
                  </div>
                  <a href="https://themeforest.net/item/multikart-responsive-ecommerce-html-template/22809967">https://themeforest.net/item/multikart-responsive-ecommerce</a>
                  <div class="media"><img class="img-fluid" src="../assets/images/file_icons/10.png" alt="media-img" />
                    <div class="media-body">
                      <h5>Multi Responsive.</h5>
                      <h6 class="mt-0">Ecommerce HTML Theme.</h6>
                    </div>
                  </div>
                </div>
                <div class="link-group">
                  <div class="media">
                    <div class="media"></div>
                    <i data-feather="link"></i>
                    <div class="media-body">
                      <h5 class="mt-0">BigBoost Template</h5>
                      <h6>04:26 PM</h6>
                    </div>
                  </div>
                  <a href="https://themeforest.net/item/bigboost-ecommerce-html-template/24168053">https://themeforest.net/item/bigboost-ecommerce-html-template</a>
                  <div class="media"><img class="img-fluid" src="../assets/images/file_icons/7.png" alt="media-img" />
                    <div class="media-body">
                      <h5>Fully Responsive.</h5>
                      <h6 class="mt-0">Multiple Header Varations.</h6>
                    </div>
                  </div>
                </div>
                <div class="link-group">
                  <div class="media">
                    <i data-feather="link"></i>
                    <div class="media-body">
                      <h5 class="mt-0">App Landing </h5>
                      <h6>10:05 PM 20/05/2019</h6>
                    </div>
                  </div>
                  <a href="https://themeforest.net/item/unice-app-landing-corporate-and-portfolio-multipurpose-template/24581311">https://themeforest.net/item/unice-app-landing-corporate-and-portfolio-multipurpose-template</a>
                  <div class="media"><img class="img-fluid" src="../assets/images/file_icons/4.png" alt="media-img" />
                    <div class="media-body">
                      <h5>Multi-Purpos theme.</h5>
                      <h6 class="mt-0">Unice is a Perfect Responsive.</h6>
                    </div>
                  </div>
                </div>
                <div class="link-group">
                  <div class="media">
                    <i data-feather="link"></i>
                    <div class="media-body">
                      <h5 class="mt-0">Reno - Tools Store</h5>
                      <h6>12:26 PM</h6>
                    </div>
                  </div>
                  <a href="https://themeforest.net/item/reno-multipurpose-html-template/24141678">https://themeforest.net/item/reno-multipurpose-html-template</a>
                  <div class="media"><img class="img-fluid" src="../assets/images/file_icons/6.png" alt="media-img" />
                    <div class="media-body">
                      <h5>Reno Template is a busines.</h5>
                      <h6 class="mt-0">Android Mobile or tablets.</h6>
                    </div>
                  </div>
                </div>
                <div class="link-group">
                  <div class="media">
                    <i data-feather="link"></i>
                    <div class="media-body">
                      <h5 class="mt-0">Shop - Mart</h5>
                      <h6>12:26 PM 03/11/2019</h6>
                    </div>
                  </div>
                  <a href="https://themeforest.net/item/shopmart-multipurpose-shopify-theme/24040917?s_rank=12">https://themeforest.net/item/shopmart-multipurpose-shopify-theme</a>
                  <div class="media"><img class="img-fluid" src="../assets/images/file_icons/5.png" alt="media-img" />
                    <div class="media-body">
                      <h5>Shop Mart Landing Page.</h5>
                      <h6 class="mt-0">This is App Landing Template.</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="tab3">
                <ul class="chat-main">
                 <li v-for="document in allDocument">
              <div class="chat-box">
                <div class="media">
                  <div class="profile">
                    <a class="icon-btn btn-outline-danger btn-xl pull-right rouded15" href="#">
                      <i class="fa fa-file-code-o"></i>
                    </a>
                  </div>
                  <div class="details">
                    <h5>{{document.message}}</h5>
                    <h6>{{docToday(document.createdAt)}}</h6>
                  </div>
                  <div class="media-body">
                    <a class="icon-btn btn-outline-light btn-sm pull-right" :href="hostname+'images/chatImages/'+document.message" target="_blank">
                      <download-icon size="1.5x" class="custom-class"></download-icon>
                    </a>
                  </div>
                </div>
              </div>
            </li>
                  
                </ul>
              </div>
            </div>
          </div>

        </div>
      </aside>

      <div class="chitchat-main small-sidebar" id="content" >
        <div class="chat-content tabto active" id="mainchatpage">
          <div class=" custom-scroll active">
            <div class="row" style="margin-top: 157px;text-align: center;">
              <div class="col-12" style="">
                <h2 style="text-transform: capitalize;">Welcome, {{current_User.name}} </h2>
              </div>
              <div class="col-12" style="margin-top: 35px;">
                <div v-if="current_User.onlineStatus == 1" class="profile mainpanleProfile" v-bind:class="{ online: current_User.pStatus == 0, unreachable : current_User.pStatus == 1, busy: current_User.pStatus == 2, offline: current_User.pStatus == 3, offline: current_User.pStatus == 4 }">

                  <img class="bg-img" v-if="userImageName" :src="hostname+'images/chatImages/'+userImageName" alt="Avatar" style="border-radius: 30px;min-height: 64px;" />
                    <img class="bg-img" v-else  src="../assets/images/contact/1.jpg" alt="Avatar" style="border-radius: 30px;" />
                </div>

                <div class="col-12" style="margin-top: 21px;">
                  <button type="button" class="btn btn-default" data-toggle="modal" data-keyboard="false" data-backdrop="static" data-target="#msgchatModal" style="cursor: pointer; margin-top: 21px; margin-bottom: 21px;"> Start a conversation </button>
                  <p>Search for someone to start chatting with or go to Contact to see who is availabe</p>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div class="chat-content tabto active" id="group_chat">
          <div class="custom-scroll active">
    <div class="chat-content tabto active">
          <div class=" custom-scroll active">
            <div class="row" style="margin-top: 157px;text-align: center;">
              <div class="col-12" style="">
                <h2 style="text-transform: capitalize;">Welcome, {{current_User.name}} </h2>
              </div>
              <div class="col-12" style="margin-top: 35px;">
                <div v-if="current_User.onlineStatus == 1" class="profile mainpanleProfile" v-bind:class="{ online: current_User.pStatus == 0, unreachable : current_User.pStatus == 1, busy: current_User.pStatus == 2, offline: current_User.pStatus == 3, offline: current_User.pStatus == 4 }">
                  
                  <img class="bg-img" src="../assets/images/contact/1.jpg" alt="Avatar" style="border-radius: 30px;" />
                </div>

                <div class="col-12" style="margin-top: 21px;">
                  <button type="button" class="btn btn-default" data-toggle="modal" data-keyboard="false" data-backdrop="static" data-target="#msgchatModal" style="cursor: pointer; margin-top: 21px; margin-bottom: 21px;"> Start a conversation </button>
                  <p>Search for someone to start chatting with or go to Contact to see who is availabe</p>
                </div>

              </div>
            </div>
          </div>
        </div>
          </div>
        </div>

        <!--  Groupchat -->
        <div class="chat-content tabto" id="startgroupchat">
          <div id="group_chat_open" class="messages custom-scroll group_chat_open">
            <div class="contact-details">
              <div class="row">
                <form class="form-inline search-form">
                  <div class="form-group">
                    <input class="form-control-plaintext" type="search" placeholder="Search.." />
                    <div class="icon-close close-search"> </div>
                  </div>
                </form>
                <div class="col-7">
                  <div class="media left">
                    <div class="media-left mr-3" @click="groupSidebar()">

                      <div class="profile menu-trigger" style="border-radius: 30px;">
                        <img class="bg-img" src="../assets/images/contact/2.jpg" alt="Avatar" /></div>
                    </div>
                    <div class="media-body">
                      <h5>{{singlegroup.name}}</h5>

                    </div>
                    <div class="media-right groupUsers">
                      <ul>
                        <li>
                          <h6 style="font-size: 13px;font-weight: 600;padding: 3px;"> Participants: </h6>
                          <div class="usersprof">
                            <template v-for="gmembers,index in singlegroup.members" v-if="index < 4">
                              <div class="profile"><img class="bg-img" src="../assets/images/avtar/2.jpg" alt="Avatar" /></div>
                            </template>
                            <div class="profile">
                              <div class="usersCount">{{groupmembers}}</div>
                            </div>
                            <div class="addGroups" data-toggle="modal" data-keyboard="false" data-backdrop="static" data-target="#showGroupsMembers">
                              <div class="" style="padding: 6px;color: #6F66FF;">
                                <plus-icon size="1.5x" class="custom-class"></plus-icon>
                              </div>
                            </div>

                          </div>
                        </li>

                        <li>
                          <a class="icon-btn btn-light button-effect mobile-sidebar" href="#">
                            <arrow-left-icon size="1.5x" class="custom-class"></arrow-left-icon>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <ul class="calls text-right">
                    <!--<li>
                              <a class="icon-btn btn-light button-effect mute" href="#">
                                <i class="fa fa-volume-up"></i>
                              </a>
                            </li>-->
                    <li>
                      <a class="icon-btn btn-light search-right" href="#">
                        <search-icon size="1.5x" class="custom-class"></search-icon>
                      </a>
                    </li>
                    <template v-if="grouCallStatus == true">
                      <li>
                        <a class="icon-btn btn-success" href="#" data-tippy-content="Quick Audio Call" data-toggle="modal" data-keyboard="false" @click="groupvideoJoinCall(singlegroup)" data-backdrop="static" data-target="#groupvideocall">
                          Join Call
                        </a>
                      </li>
                    </template>
                    <template v-else>
                      <li>
                        <a class="icon-btn btn-light button-effect" href="#" data-tippy-content="Quick Audio Call" data-toggle="modal" data-keyboard="false" data-backdrop="static" data-target="#">
                          <phone-icon size="1.5x" class="custom-class"></phone-icon>
                        </a>
                      </li>
                      <li>
                        <a class="icon-btn btn-light button-effect" href="#" @click="groupvideostartCall(singlegroup)" data-tippy-content="Quick Video Call" data-toggle="modal" data-keyboard="false" data-backdrop="static" data-target="#groupvideocall">
                          <video-icon size="1.5x" class="custom-class"></video-icon>
                        </a>
                      </li>
                    </template>
                    <!--<li class="" v-if=" userid == singlegroup.creatorUserId ">
                          <a class="icon-btn btn-light bg-transparent button-effect outside" href="#" @click="deleteGroup()" data-tippy-content="Quick action">
                            <trash-2-icon size="1.5x" class="custom-class"></trash-2-icon>
                          </a>
                        </li>-->

                  </ul>
                </div>
              </div>
            </div>

            <vue-dropzone ref="mygroupVueDropzone" id="groupdropzone" @vdropzone-success="groupComplete" v-on:vdropzone-sending="draggroupfileupload" :options="dropzoneOptions"></vue-dropzone>
            <div class="contact-chat">
              <ul class="chatappend" v-for="g_chat in groupchatdata" v-if="g_chat.groupId == singlegroup._id">

                <li class="replies" v-if="g_chat.senderId._id == c_user._id" style="padding-top: 20px;">
                  <div class="media">
                    <div class="profile mr-4"><img class="bg-img" src="../assets/images/contact/2.jpg" alt="Avatar" /></div>
                    <div class="media-body">
                      <div class="contact-name">
                        <h5>{{g_chat.senderId.name}}</h5>
                        <h6>{{chatTime(g_chat.createdAt)}}</h6>
                        <ul class="msg-box">
                          <li class="msg-setting-main">

                            <div class="msg-dropdown-main" v-if="g_chat.isDeleted != 1">
                              <div class="msg-setting" :id="'msg-setting'+g_chat._id" @click="msg_setting(g_chat._id)">
                                <i class="ti-more-alt"></i>
                              </div>

                              <div class="msg-dropdown" :id="'msg-dropdown'+g_chat._id" style="z-index: 99999;">
                                <ul>
                                  <li v-if="g_chat.messageType != 1 && g_chat.messageType != 2">
                                    <a href="#" @click="editgroupchat(g_chat._id,g_chat.message)">
                                      <i class="fa fa-pencil"></i>edit</a>
                                  </li>
                                  <li>
                                    <a href="#" @click="groupquote(g_chat)">
                                      <i class="fa fa-share"></i>Quote</a>
                                  </li>

                                  <li v-if="g_chat.messageType != 1 && g_chat.messageType != 2">
                                    <a href="#" @click="copymsg(g_chat.message)" v-clipboard:copy="messagecopy" v-clipboard:success="onCopy" v-clipboard:error="onError">
                                      <i class="fa fa-clone"></i>copy</a>
                                  </li>
                                  <!--<li><a href="#"><i class="fa fa-star-o"></i>rating</a></li>-->
                                  <li style="margin-left: 12px;">
                                    <a href="#" @click="groupmsgdelete(g_chat)">
                                      <i class="ti-trash"></i>delete</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <h5 v-if="g_chat.isDeleted == 1" :id="'groupsender'+g_chat._id">message deleted</h5>
                            <h5 v-else-if="g_chat.messageType != 1 && g_chat.messageType != 2 && g_chat.chatType == 0" :id="'groupsender'+g_chat._id">{{ g_chat.message }}</h5>
                            <h5 v-else-if="g_chat.messageType != 1 && g_chat.messageType != 2 && g_chat.chatType == 1" :id="'groupsender'+g_chat._id">
                              <span style="border-bottom: 1px solid;">‘‘{{g_chat.commentId.message}}’’</span><br> {{ g_chat.message }}</h5>
                            <br>
                            <a :href="hostname+'/images/chatImages/'+g_chat.message" target="_blank" :id="'groupsender'+g_chat._id" v-if="g_chat.messageType == 1 && g_chat.isDeleted != 1" download>
                              <img :src="hostname+'/images/chatImages/'+g_chat.message">
                            </a>

                            <a :href="hostname+'/images/chatImages/'+g_chat.message" target="_blank" :id="'groupsender'+g_chat._id" v-if="g_chat.messageType == 2 && g_chat.isDeleted != 1" download><img src="../assets/images/fileIcon.png" style="width: 40px;"> {{ g_chat.message }}</a>
                          </li>
                          <!--    <li class="msg-setting-main">
                                    <h5> it should from elite auther &#128519;</h5>
                                    <div class="badge badge-success sm ml-2"> R</div>
                                    <div class="msg-dropdown-main">
                                      <div class="msg-setting"><i class="ti-more-alt"></i></div>
                                      <div class="msg-dropdown"> 
                                        <ul>
                                          <li><a href="#"><i class="fa fa-share"></i>forward</a></li>
                                          <li><a href="#"><i class="fa fa-clone"></i>copy</a></li>
                                          <li><a href="#"><i class="fa fa-star-o"></i>rating</a></li>
                                          <li><a href="#"><i class="ti-trash"></i>delete</a></li>
                                        </ul>
                                      </div>
                                    </div>
                                  </li> -->
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="sent" style="padding-top: 20px;" v-else>
                  <div class="media">
                    <div class="profile mr-4"><img class="bg-img" src="../assets/images/avtar/1.jpg" alt="Avatar" /></div>
                    <div class="media-body">
                      <div class="contact-name">
                        <h5>{{g_chat.senderId.name}}</h5>
                        <h6>{{chatTime(g_chat.createdAt)}}</h6>
                        <ul class="msg-box">
                          <li class="msg-setting-main">

                            <h5 v-if="g_chat.isDeleted == 1" :id="'sender'+g_chat._id">message deleted</h5>
                            <h5 v-else-if="g_chat.messageType != 1 && g_chat.messageType != 2 && g_chat.chatType == 0" :id="'sender'+g_chat._id">{{ g_chat.message }}</h5>
                            <h5 v-else-if="g_chat.messageType != 1 && g_chat.messageType != 2 && g_chat.chatType == 1" :id="'sender'+g_chat._id">
                              <span style="border-bottom: 1px solid;">‘‘{{g_chat.commentId.message}}’’</span><br> {{ g_chat.message }}</h5>
                            <br>
                            <a :href="hostname+'/images/chatImages/'+g_chat.message" target="_blank" :id="'sender'+g_chat._id" v-if="g_chat.messageType == 1 && g_chat.isDeleted != 1" download>
                              <img :src="hostname+'/images/chatImages/'+g_chat.message">
                            </a>

                            <a :href="hostname+'/images/chatImages/'+g_chat.message" target="_blank" :id="'sender'+g_chat._id" v-if="g_chat.messageType == 2 && g_chat.isDeleted != 1" download><img src="../assets/images/fileIcon.png" style="width: 40px;"> {{ g_chat.message }}</a>

                            <div class="msg-dropdown-main" v-if="g_chat.isDeleted != 1">
                              <div class="msg-setting" :id="'msg-setting'+g_chat._id" @click="msg_setting(g_chat._id)">
                                <i class="ti-more-alt"></i>
                              </div>

                              <div class="msg-dropdown" :id="'msg-dropdown'+g_chat._id" style="z-index: 99999;">
                                <ul>

                                  <li>
                                    <a href="#" @click="groupquote(g_chat)">
                                      <i class="fa fa-share"></i>Quote</a>
                                  </li>

                                  <li v-if="g_chat.messageType != 1 && g_chat.messageType != 2">
                                    <a href="#" @click="copymsg(g_chat.message)" v-clipboard:copy="messagecopy" v-clipboard:success="onCopy" v-clipboard:error="onError">
                                      <i class="fa fa-clone"></i>copy</a>
                                  </li>
                                  <!--<li><a href="#"><i class="fa fa-star-o"></i>rating</a></li>-->

                                </ul>
                              </div>
                            </div>
                          </li>

                        </ul>
                      </div>
                    </div>
                  </div>
                </li>

              </ul>
            </div>
          </div>
          <VEmojiPicker @select="selectEmoji" class="" v-bind:class="{activeemoji: isActive}" v-if="isActive" />
          <div class="message-input" id="message-input">
            <div class="replybox" v-if="groupreplyBox == true">
              <p style="padding: 7px; margin: 0;">‘‘{{groupchatreplydata.message}}’’
                <span style="float:right;cursor: pointer;" @click="closegroupReplybox()">
                  <x-icon size="1.5x" class="custom-class"></x-icon>
                </span>
                <br>
                <span style="margin-left: 6px;">
                  {{chatTime(groupchatreplydata.createdAt)}}
                </span>
              </p>
            </div>
            <div class="wrap emojis-main">
           

              <div class="dot-btn dot-primary mr-3">
                <a class="icon-btn btn-outline-primary button-effect" @click="showGroupemoji">
                  <smile-icon size="1.5x" class="custom-class"></smile-icon>
                </a>
              </div>

              <label class="icon-btn btn-outline-primary mr-4" for="groupfileupload">
                <i class="fa fa-plus"></i>
              </label>
              <input type="file" id="groupfileupload" ref="groupmyFiles" style="display:none" @change="groupuploadfile($event)" multiple>

              <input class="setemoj" id="groupsetemoj" ref="groupafterClick" type="text" v-on:keyup="groupremovecross()" @keyup.enter="groupchat()" v-model="groupmessage" placeholder="Write your message..." />
              <a class="icon-btn btn-outline-primary button-effect mr-3 ml-3" href="#" @click="feedbackDictation()">
                <mic-icon size="1.5x" class="custom-class"></mic-icon>
              </a>
              <button class="submit icon-btn btn-primary" v-show="ongroupChat" @click="groupchat()" id="send-groupmsg" :disabled="not_working">
                <send-icon size="1.5x" class="custom-class"></send-icon>
              </button>
              <button class="submit icon-btn btn-primary " style="display:none" v-show="onEditgroupclear" @click="cleargroupchat()">
                <x-icon size="1.5x" class="custom-class"></x-icon>
              </button>

            </div>
          </div>
        </div>
        <!--end -->

        <div class="chat-content tabto" id="startchat">
          <div class=" messages custom-scroll active messageschat" id="chating">

            <div class="contact-details">
              <div class="row">
                <form class="form-inline search-form">
                  <div class="form-group">
                    <input class="form-control-plaintext" type="search" placeholder="Search.." />
                    <div class="icon-close close-search"> </div>
                  </div>
                </form>
                <div class="col-7">
                  <div class="media left">
                    <div class="media-left mr-3" @click="chatSidebar()">

                      <div v-if="singlefriend.onlineStatus == 1" style="border-radius: 30px;" class="profile menu-trigger" v-bind:class="{ online: singlefriend.pStatus == 0, unreachable : singlefriend.pStatus == 1, busy: singlefriend.pStatus == 2, offline: singlefriend.pStatus == 3, offline: singlefriend.pStatus == 4 }">

                         <img class="bg-img" v-if="singlefriend.user_image" style ="width: 60px;min-height:60px" :src="hostname+'images/chatImages/'+singlefriend.user_image" alt="Avatar" />

                    <img class="bg-img" v-else  src="../assets/images/contact/2.jpg" style ="width: 60px;" alt="Avatar" /> 

                  </div>

                      <div v-else class="profile offline menu-trigger" style="border-radius: 30px;">

                         <img class="bg-img" v-if="singlefriend.user_image" style ="width: 60px;min-height: 60px;" :src="hostname+'images/chatImages/'+singlefriend.user_image" alt="Avatar" /> 

                       <img class="bg-img" v-else  src="../assets/images/contact/2.jpg" style ="width: 60px;" alt="Avatar" /> 

                       </div>
                    </div>

                    <div class="media-body">
                      <h5>{{singlefriend.name}}</h5>

                      <div v-if="singlefriend.onlineStatus == 1 && singlefriend.pStatus == 0" class="badge badge-success">Online</div>
                      <div v-if="singlefriend.onlineStatus == 1 && singlefriend.pStatus == 1" class="badge badge-warning">Away</div>
                      <div v-if="singlefriend.onlineStatus == 1 && singlefriend.pStatus == 2" class="badge badge-danger">Busy</div>
                      <div v-if="singlefriend.onlineStatus == 1 && singlefriend.pStatus == 3" class="badge badge-dark">Invisible</div>
                      <div v-if="singlefriend.onlineStatus == 1 && singlefriend.pStatus == 4" class="badge badge-secondary">Offline</div>
                      <div v-if="singlefriend.onlineStatus == 0" class="badge badge-light">Offline</div>

                    </div>
                    <div class="media-right">
                      <ul>
                        <li>
                          <a class="icon-btn btn-light button-effect mute" href="#">
                            <i class="fa fa-volume-up"></i>
                          </a>
                        </li>
                        <li>
                          <a class="icon-btn btn-light search-right" href="#">
                            <search-icon size="1.5x" class="custom-class"></search-icon>
                          </a>
                        </li>
                        <li>
                          <a class="icon-btn btn-light button-effect mobile-sidebar" href="#">
                            <arrow-left-icon size="1.5x" class="custom-class"></arrow-left-icon>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <ul class="calls text-right">
                    <li>
                      <a class="icon-btn btn-light button-effect" href="#" data-tippy-content="Quick Audio Call" data-toggle="modal" data-target="#o2ovideocall" data-keyboard="false" data-backdrop="static" @click="videostartCall(singlefriend,'audio')">
                        <phone-icon size="1.5x" class="custom-class"></phone-icon>
                      </a>
                    </li>
                    <li>
                      <a class="icon-btn btn-light button-effect" href="#" @click="videostartCall(singlefriend,'video')" data-tippy-content="Quick Video Call" data-toggle="modal" data-target="#o2ovideocall" data-keyboard="false" data-backdrop="static">
                        <video-icon size="1.5x" class="custom-class"></video-icon>
                      </a>
                    </li>
                    <!--<li>
                          <a class="icon-btn btn-light button-effect apps-toggle">
                            <i class="ti-layout-grid2"></i>
                          </a>
                        </li>-->
                    <li class="chat-friend-toggle">
                      <a class="icon-btn btn-light bg-transparent button-effect outside" href="#" data-tippy-content="Quick action">
                        <more-vertical-icon size="1.5x" class="custom-class"></more-vertical-icon>
                      </a>
                      <div class="chat-frind-content">
                        <ul style="width:170px">
                          <li>
                            <a class="" href="#" style="color: #959595;">
                              <user-icon size="1.5x" class="custom-class"></user-icon>
                            </a>
                            <h5 class="menu-trigger">Contact info</h5>
                          </li>

                          <li>
                            <a class="" href="#" style="color: #959595;">
                              <star-icon size="1.5x" class="custom-class"></star-icon>
                            </a>
                            <h5 class="menu-trigger">Stat Message</h5>
                          </li>
                          <li>
                            <a class="" href="#" style="color: #959595;">
                              <volume-x-icon size="1.5x" class="custom-class"></volume-x-icon>
                            </a>
                            <h5 class="menu-trigger">Mute Notification</h5>
                          </li>
                          <li>
                            <a class="" href="#" style="color: #959595;">
                              <slash-icon size="1.5x" class="custom-class"></slash-icon>
                            </a>
                            <h5 class="menu-trigger">Block</h5>
                          </li>
                          <li>
                            <a class="" href="#" style="color: #959595;">
                              <trash-2-icon size="1.5x" class="custom-class"></trash-2-icon>
                            </a>
                            <h5 class="menu-trigger">Delete Chat</h5>
                          </li>

                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-------- Dropzone ------>
            <vue-dropzone ref="myVueDropzone" @ondragleave="dragLeave(event)" id="dropzone" @vdropzone-success="afterComplete" v-on:vdropzone-sending="dragfileupload" :options="dropzoneOptions"> </vue-dropzone>
            <!-------- end -------->
            <loading :active.sync="isLoading" :can-cancel="true" :is-full-page="fullPage">

            </loading>

            <div class="contact-chat">

              <ul class="chatappend" v-for="chat in friendchat">
                <h5 v-if="chat.messageType == 3 && chat.chatType == 3" style="text-align:center;padding: 30px;">
                  <span>{{chatTime(chat.createdAt)}}</span> <br><br> {{ chat.message }}</h5>

                <li class="replies" style="padding-bottom:20px" v-else-if="chat.senderId._id == c_user._id">
                  <div class="media">
                    <div class="profile mr-4">
                       <img class="bg-img" v-if="userImageName" :src="hostname+'images/chatImages/'+userImageName" alt="Avatar"  />
                    <img class="bg-img" v-else  src="../assets/images/contact/1.jpg" alt="Avatar" /></div>
                    <div class="media-body">
                      <div class="contact-name">
                        <h5>{{ c_user.name}}</h5>
                        <h6>{{chatTime(chat.createdAt)}}</h6>

                        <ul class="msg-box">
                          <li class="msg-setting-main">

                            <h5 v-if="chat.isDeleted == 1" :id="'sender'+chat._id">message deleted</h5>
                            <h5 v-else-if="chat.messageType != 1 && chat.messageType != 2 && chat.messageType != 3 && chat.chatType == 0" :id="'sender'+chat._id">{{ chat.message }}</h5>
                            <h5 v-else-if="chat.messageType != 1 && chat.messageType != 2 && chat.messageType != 3 && chat.chatType == 1" :id="'sender'+chat._id">
                              <span style="border-bottom: 1px solid;">‘‘{{chat.commentId.message}}’’</span><br> {{ chat.message }}</h5>
                            <br>

                            <a :href="hostname+'/images/chatImages/'+chat.message" target="_blank" :id="'sender'+chat._id" v-if="chat.messageType == 1 && chat.isDeleted != 1" download>
                              <img :src="hostname+'/images/chatImages/'+chat.message">
                            </a>

                            <a :href="hostname+'/images/chatImages/'+chat.message" target="_blank" :id="'sender'+chat._id" v-if="chat.messageType == 2 && chat.isDeleted != 1" download><img src="../assets/images/fileIcon.png" style="width: 40px;"> {{ chat.message }}</a>

                            <div class="msg-dropdown-main" v-if="chat.isDeleted != 1">
                              <div class="msg-setting" :id="'msg-setting'+chat._id" @click="msg_setting(chat._id)">
                                <i class="ti-more-alt"></i>
                              </div>

                              <div class="msg-dropdown" :id="'msg-dropdown'+chat._id" style="z-index: 99999;">
                                <ul>
                                  <li v-if="chat.messageType != 1 && chat.messageType != 2">
                                    <a href="#" @click="eidtchat(chat._id,chat.message)">
                                      <i class="fa fa-pencil"></i>edit</a>
                                  </li>
                                  <li>
                                    <a href="#" @click="quote(chat)">
                                      <i class="fa fa-share"></i>Quote</a>
                                  </li>

                                  <li v-if="chat.messageType != 1 && chat.messageType != 2">
                                    <a href="#" @click="copymsg(chat.message)" v-clipboard:copy="messagecopy" v-clipboard:success="onCopy" v-clipboard:error="onError">
                                      <i class="fa fa-clone"></i>copy</a>
                                  </li>
                                  <!--<li><a href="#"><i class="fa fa-star-o"></i>rating</a></li>-->
                                  <li style="margin-left: 12px;">
                                    <a href="#" @click="msgdelete(chat)">
                                      <i class="ti-trash"></i>delete</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                          <!-- <li class="msg-setting-main">
                                    <h5> your personal assistant to help you &#128512; </h5>
                                    <div class="badge badge-success sm ml-2"> R</div>
                                    <div class="msg-dropdown-main">
                                      <div class="msg-setting"><i class="ti-more-alt"></i></div>
                                      <div class="msg-dropdown"> 
                                        <ul>
                                          <li><a href="#"><i class="fa fa-share"></i>forward</a></li>
                                          <li><a href="#"><i class="fa fa-clone"></i>copy</a></li>
                                          <li><a href="#"><i class="fa fa-star-o"></i>rating</a></li>
                                          <li><a href="#"><i class="ti-trash"></i>delete</a></li>
                                        </ul>
                                      </div>
                                    </div>
                                  </li> -->
                        </ul>

                      </div>
                    </div>
                  </div>
                </li>
                <li class="sent" style="padding-bottom:20px" v-else>

                  <div class="media">
                    <div class="profile mr-4">
                       <img class="bg-img" v-if="singlefriend.user_image" :src="hostname+'images/chatImages/'+singlefriend.user_image" alt="Avatar" />
                    <img class="bg-img" v-else  src="../assets/images/contact/1.jpg" alt="Avatar"> </div>
                    <div class="media-body">
                      <div class="contact-name">
                        <h5>{{ singlefriend.name }}</h5>
                        <h6>{{chatTime(chat.createdAt)}}</h6>
                        <ul class="msg-box">
                          <li class="msg-setting-main">
                            <div class="msg-dropdown-main" v-if="chat.isDeleted != 1">
                              <div class="msg-setting" :id="'msg-setting'+chat._id" @click="msg_setting(chat._id)">
                                <i class="ti-more-alt"></i>
                              </div>
                              <div class="msg-dropdown" :id="'msg-dropdown'+chat._id" style="z-index: 99999;">
                                <ul>
                                  <!--<li v-if="chat.messageType != 1 && chat.messageType != 2"><a href="#" @click="eidtchat(chat._id,chat.message)"><i class="fa fa-pencil" ></i>edit</a></li>-->
                                  <li>
                                    <a href="#" @click="quote(chat)">
                                      <i class="fa fa-share"></i>Quote</a>
                                  </li>

                                  <li v-if="chat.messageType != 1 && chat.messageType != 2">
                                    <a href="#" @click="copymsg(chat.message)" v-clipboard:copy="messagecopy" v-clipboard:success="onCopy" v-clipboard:error="onError">
                                      <i class="fa fa-clone"></i>copy</a>
                                  </li>
                                  <!--<li><a href="#"><i class="fa fa-star-o"></i>rating</a></li>-->
                                  <!--<li><a href="#" @click="msgdelete(chat._id)"><i class="ti-trash"></i>delete</a></li>-->
                                </ul>
                              </div>
                            </div>
                            <h5 v-if="chat.isDeleted == 1" :id="'receiver'+chat._id">message deleted</h5>
                            <h5 v-else-if="chat.messageType != 1 && chat.messageType != 2 && chat.messageType != 3 && chat.chatType == 0" :id="'receiver'+chat._id">{{ chat.message }} </h5>
                            <h5 v-else-if="chat.messageType != 1 && chat.messageType != 2 && chat.messageType != 3 && chat.chatType == 1" :id="'receiver'+chat._id">
                              <span style="border-bottom: 1px solid;">‘‘{{chat.commentId.message}}’’</span><br> {{ chat.message }}</h5>
                            <br>
                            <a :href="hostname+'/images/chatImages/'+chat.message" target="_blank" :id="'receiver'+chat._id" v-if="chat.messageType == 1 && chat.isDeleted != 1" download>
                              <img :src="hostname+'/images/chatImages/'+chat.message">
                            </a>
                            <a :href="hostname+'/images/chatImages/'+chat.message" target="_blank" :id="'receiver'+chat._id" v-if="chat.messageType == 2 && chat.isDeleted != 1"><img src="../assets/images/fileIcon.png" style="width: 40px;"> {{ chat.message }}</a>

                          </li>
                          <!--   <li class="msg-setting-main">
                                    <h5> it should from elite auther &#128519;</h5>
                                    <div class="badge badge-success sm ml-2"> R</div>
                                    <div class="msg-dropdown-main">
                                      <div class="msg-setting"><i class="ti-more-alt"></i></div>
                                      <div class="msg-dropdown"> 
                                        <ul>
                                          <li><a href="#"><i class="fa fa-share"></i>forward</a></li>
                                          <li><a href="#"><i class="fa fa-clone"></i>copy</a></li>
                                          <li><a href="#"><i class="fa fa-star-o"></i>rating</a></li>
                                          <li><a href="#"><i class="ti-trash"></i>delete</a></li>
                                        </ul>
                                      </div>
                                    </div>
                                  </li> -->
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>

              </ul>
              <img class="" src="../assets/images/contact/2.jpg" alt="Avatar" v-if="isSeen == true && friendchat.length > 0" style="width: 20px;float:right" />
            </div>

            <span v-show="typing" class="">{{ singlefriend.name }} is typing ...</span>

          </div>
          <VEmojiPicker @select="selectchatEmoji" class="" v-bind:class="{activeChatemoji: ischatemojiActive}" v-if="ischatemojiActive" />
          <div class="message-input" id="singlemessage-input">
            <div class="replybox" v-if="replyBox == true">
              <p style="padding: 7px; margin: 0;">‘‘{{chatreplydata.message}}’’
                <span style="float:right;cursor: pointer;" @click="closeReplybox()">
                  <x-icon size="1.5x" class="custom-class"></x-icon>
                </span>
                <br>
                <span style="margin-left: 6px;">
                  {{chatTime(chatreplydata.createdAt)}}
                </span>
              </p>
            </div>
            <div class="wrap emojis-main">

              <div class="dot-btn dot-primary mr-3">
                <a class="icon-btn btn-outline-primary button-effect " @click="showChatemoji">
                  <smile-icon size="1.5x" class="custom-class"></smile-icon>
                </a>
              </div>

              <label class="icon-btn btn-outline-primary mr-4" for="fileupload">
                <file-plus-icon size="1.5x" class="custom-class"></file-plus-icon>
              </label>
              <input type="file" id="fileupload" ref="myFiles" style="display:none" @change="uploadfile($event)" multiple>

              <!--<div class="contact-poll-content">
                          <ul>
                            <li><a href="#"><i data-feather="image"></i>gallery</a></li>
                            <li><a href="#"><i data-feather="camera"></i>camera</a></li>
                            <li><a data-toggle="modal" data-target="#snippetModal"><i data-feather="code">                       </i>Code Snippest</a></li>
                            <li><a href="#"><i data-feather="user">                              </i>contact</a></li>
                            <li><a href="#"><i data-feather="map-pin">                       </i>location</a></li>
                            <li><a href="#"><i data-feather="clipboard"> </i>document</a></li>
                            <li><a data-toggle="modal" data-target="#pollModal"><i data-feather="bar-chart-2">                       </i>poll</a></li>
                            <li><a href="#"><i data-feather="paperclip">                       </i>attach</a></li>
                          </ul>
                        </div>-->

              <input class="setemoj" id="setemoj" ref="afterClick" type="text" v-on:keyup="removecross()" @keyup.enter="chat()" v-model="message" placeholder="Write your message..." />
              <a class="icon-btn btn-outline-primary button-effect mr-3 ml-3" href="#">
                <mic-icon size="1.5x" class="custom-class"></mic-icon>
              </a>
              <button class="submit icon-btn btn-primary disabled" v-show="onChat" @click="chat()" id="send-msg" disabled="disabled">
                <send-icon size="1.5x" class="custom-class"></send-icon>
              </button>
              <button class="submit icon-btn btn-primary " style="display:none" v-show="onEditclear" @click="clearchat()">
                <x-icon size="1.5x" class="custom-class"></x-icon>
              </button>

            </div>
          </div>
        </div>

        <div class="call-content tabto">
          <a class="icon-btn btn-outline-primary button-effect mobile-back mb-3" href="#">
            <i class="ti-angle-left"> </i>
          </a>
          <div class="row">
            <div class="col-sm-5">
              <div class="user-profile mb-3">
                <div class="user-content"><img class="img-fluid" src="../assets/images/contact/2.jpg" alt="user-img" />
                  <h3>Josephin water</h3>
                  <h4 class="mt-2">+0 1800 76855</h4>
                  <ul>
                    <li>
                      <i class="fa fa-twitch"></i>massage</li>
                    <li>
                      <i class="fa fa-phone" data-toggle="modal" data-target="#audiocall" data-keyboard="false" data-backdrop="static"></i>voice call</li>
                    <li>
                      <i class="fa fa-video-camera" data-toggle="modal" data-target="#videocall" data-keyboard="false" data-backdrop="static"></i>video call</li>
                  </ul>
                </div>
              </div>
              <div class="user-profile">
                <div class="document">
                  <div class="filter-block">
                    <div class="collapse-block open">
                      <h5 class="block-title">Shared Document
                        <label class="badge badge-success sm ml-2">3</label>
                      </h5>
                      <div class="block-content">
                        <ul class="document-list">
                          <li>
                            <i class="ti-folder font-danger"></i>
                            <h5>Simple_practice_project-zip</h5>
                          </li>
                          <li>
                            <i class="ti-write font-success"></i>
                            <h5>Word_Map-jpg</h5>
                          </li>
                          <li>
                            <i class="ti-zip font-primary"></i>
                            <h5>Latest_Design_portfolio.pdf</h5>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-7">
              <div class="call-log-main custom-scroll">
                <div class="coll-log-group">
                  <div class="log-content-left">
                    <div class="media">
                      <phone-incoming-icon size="1.5x" class="custom-class"></phone-incoming-icon>
                      <div class="media-body">
                        <h5>incoming call </h5>
                      </div>
                    </div>
                  </div>
                  <div class="log-content-right">
                    <h6>15 Minutes ago 5:10 &nbsp;(22/10/19)</h6>
                  </div>
                </div>
                <div class="coll-log-group">
                  <div class="log-content-left">
                    <div class="media">
                      <phone-incoming-icon size="1.5x" class="custom-class"></phone-incoming-icon>
                      <div class="media-body">
                        <h5>outgoing call</h5>
                      </div>
                    </div>
                  </div>
                  <div class="log-content-right">
                    <h6>30 Minutes ago 10:30 &nbsp;(12/09/19)</h6>
                  </div>
                </div>
                <div class="coll-log-group">
                  <div class="log-content-left">
                    <div class="media">
                      <i data-feather="phone-missed"></i>
                      <div class="media-body">
                        <h5>missed call</h5>
                      </div>
                    </div>
                  </div>
                  <div class="log-content-right">
                    <h6>1 Minutes ago 8:30 &nbsp; (28/08/19)</h6>
                  </div>
                </div>
                <div class="coll-log-group">
                  <div class="log-content-left">
                    <div class="media">
                      <i data-feather="phone-missed"></i>
                      <div class="media-body">
                        <h5>missed call</h5>
                      </div>
                    </div>
                  </div>
                  <div class="log-content-right">
                    <h6>10 Minutes ago 9:10 &nbsp; (18/01/19)</h6>
                  </div>
                </div>
                <div class="coll-log-group">
                  <div class="log-content-left">
                    <div class="media">
                      <i data-feather="phone-missed"></i>
                      <div class="media-body">
                        <h5>missed call</h5>
                      </div>
                    </div>
                  </div>
                  <div class="log-content-right">
                    <h6>35 Minutes ago 9:10 &nbsp; (17/01/19)</h6>
                  </div>
                </div>
                <div class="coll-log-group">
                  <div class="log-content-left">
                    <div class="media">
                      <i data-feather="phone-missed"></i>
                      <div class="media-body">
                        <h5>missed call</h5>
                      </div>
                    </div>
                  </div>
                  <div class="log-content-right">
                    <h6>80 Minutes ago 12:05 &nbsp; (17/01/19)</h6>
                  </div>
                </div>
                <div class="coll-log-group">
                  <div class="log-content-left">
                    <div class="media">
                      <phone-incoming-icon size="1.5x" class="custom-class"></phone-incoming-icon>
                      <div class="media-body">
                        <h5>incoming call</h5>
                      </div>
                    </div>
                  </div>
                  <div class="log-content-right">
                    <h6>15 Minutes ago 15:20 &nbsp; (28/02/20)</h6>
                  </div>
                </div>
                <div class="coll-log-group">
                  <div class="log-content-left">
                    <div class="media">
                      <phone-incoming-icon size="1.5x" class="custom-class"></phone-incoming-icon>
                      <div class="media-body">
                        <h5>incoming call</h5>
                      </div>
                    </div>
                  </div>
                  <div class="log-content-right">
                    <h6>10 Minutes ago 20m 26s &nbsp; 10/3/20 </h6>
                  </div>
                </div>
              </div>
              <div class="call-log-clear">
                <i class="ti-trash font-danger"></i>
                <span class="font-danger">Delete call log</span>
              </div>
            </div>
          </div>
        </div>
        <div class="contact-content tabto">
          <div class="contact-sub-content">
            <a class="icon-btn btn-outline-primary button-effect mobile-back mb-3" href="#">
              <i class="ti-angle-left"></i>
            </a>
            <div class="row">
              <div class="col-sm-5">
                <div class="user-profile">
                  <div class="user-content"><img class="img-fluid bg-icon" src="../assets/images/contact/2.jpg" alt="user-img" />
                    <h3>Josephin water</h3>
                    <ul>
                      <li>
                        <i class="fa fa-twitch"> </i>massage</li>
                      <li>
                        <i class="fa fa-phone"> </i>voice call</li>
                      <li>
                        <i class="fa fa-video-camera"> </i>video call</li>
                    </ul>
                  </div>
                </div>
                <div class="personal-info-group">
                  <div class="social-info-group">
                    <ul class="integratin mt-0">
                      <li>
                        <div class="media">
                          <div class="media-left">
                            <a class="fb" href="https://www.facebook.com/login" target="_blank">
                              <i class="fa fa-facebook"></i>
                              <h5>Facebook </h5>
                            </a>
                          </div>
                          <div class="media-right">
                            <div class="profile bg-size"><img class="bg-img" src="../assets/images/contact/1.jpg" alt="Avatar" /></div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="media">
                          <div class="media-left">
                            <a class="twi" href="https://twitter.com/login" target="_blank">
                              <i class="fa fa-twitter"></i>
                              <h5>twitter </h5>
                            </a>
                          </div>
                          <div class="media-right">
                            <div class="profile bg-size"><img class="bg-img" src="../assets/images/contact/3.jpg" alt="Avatar" /></div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="media">
                          <div class="media-left">
                            <a class="ggl" href="https://accounts.google.com/signin/v2/identifier?service=mail&amp;passive=true&amp;rm=false&amp;continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&amp;ss=1&amp;scc=1&amp;ltmpl=default&amp;ltmplcache=2&amp;emr=1&amp;osid=1&amp;flowName=GlifWebSignIn&amp;flowEntry=ServiceLogin" target="_blank">
                              <i class="fa fa-google"></i>
                              <h5>google </h5>
                            </a>
                          </div>
                          <div class="media-right">
                            <div class="profile bg-size"><img class="bg-img" src="../assets/images/contact/2.jpg" alt="Avatar" /></div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-sm-7">
                <div class="personal-info-group">
                  <h3>contact info</h3>
                  <ul class="basic-info">
                    <li>
                      <h5>name</h5>
                      <h5 class="details">Nick</h5>
                    </li>
                    <li>
                      <h5>gender</h5>
                      <h5 class="details">male</h5>
                    </li>
                    <li>
                      <h5>Birthday</h5>
                      <h5 class="details">9 april 1994</h5>
                    </li>
                    <li>
                      <h5>Favorite Book</h5>
                      <h5 class="details">Perfect Chemistry</h5>
                    </li>
                    <li>
                      <h5>Personality</h5>
                      <h5 class="details">Cool</h5>
                    </li>
                    <li>
                      <h5>City</h5>
                      <h5 class="details">Moline Acres</h5>
                    </li>
                    <li>
                      <h5>mobile no</h5>
                      <h5 class="details">+0 1800 76855</h5>
                    </li>
                    <li>
                      <h5>email</h5>
                      <h5 class="details">pixelstrap@test.com</h5>
                    </li>
                    <li>
                      <h5>Website</h5>
                      <h5 class="details">www.test.com</h5>
                    </li>
                    <li>
                      <h5 class="m-0">Interest</h5>
                      <h5 class="details">Photography</h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <aside class="chitchat-right-sidebar" id="groupslide-menu">
        <div class="custom-scroll right-sidebar">
          <div class="contact-profile">
            <div class="theme-title">
              <div class="media">
                <div class="media-body text-left">
                  <a class=" close-profile ml-3" href="#">
                    <x-icon size="1x" class="custom-class"></x-icon>
                  </a>
                </div>
                <div>
                  <h6>Group Information</h6>
                </div>

              </div>
            </div>
            <div class="details">
              <div class="contact-top">
                <img class="bg-img" src="../assets/images/avtar/2.jpg" alt="" />
              </div>
              <div class="name">
                <h3>{{singlegroup.name}}</h3>
                <h6>Add Description</h6>
              </div>

            </div>
          </div>
          <div class="document">
            <div class="filter-block">
              <div class="collapse-block">
                <h5 class="block-title">
                  <span style="padding-right: 5px;">
                    <i class="fa fa-files-o" aria-hidden="true"></i>
                  </span> &nbsp; &nbsp; Shared Document
                  <label class="badge badge-success sm ml-2">3</label>
                </h5>
                <div class="block-content" style="display:none">
                  <ul class="document-list">
                    <li>
                      <i class="ti-folder font-danger"></i>
                      <h5>Simple_practice_project-zip</h5>
                    </li>
                    <li>
                      <i class="ti-write font-success"></i>
                      <h5>Word_Map-jpg</h5>
                    </li>
                    <li>
                      <i class="ti-zip font-primary"></i>
                      <h5>Latest_Design_portfolio.pdf</h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="media-gallery portfolio-section grid-portfolio">
            <div class="collapse-block ">
              <h5 class="block-title">
                <span style="padding-right: 5px;">
                  <i class="fa fa-bookmark-o" aria-hidden="true"></i>
                </span> &nbsp; &nbsp; Bookmarked Messages
                <label class="badge badge-primary sm ml-2">2</label>
              </h5>
              <div class="block-content" style="display:none">
                <div class="row share-media zoom-gallery">
                  <div class="col-12">
                    <h6 class="mb-2">22/03/2019</h6>
                  </div>
                  <div class="col-4 isotopeSelector filter">
                    <div class="media-big">
                      <div class="overlay">
                        <div class="border-portfolio">
                          <a href="../assets/images/gallery/1.jpg">
                            <div class="overlay-background">
                              <i class="ti-plus" aria-hidden="true"></i>
                            </div><img class="img-fluid bg-img" src="../assets/images/gallery/1.jpg" alt="portfolio-image" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="media-small isotopeSelector filter">
                      <div class="overlay">
                        <div class="border-portfolio">
                          <a href="../assets/images/gallery/2.jpg">
                            <div class="overlay-background">
                              <i class="ti-plus" aria-hidden="true"></i>
                            </div><img class="img-fluid bg-img" src="../assets/images/gallery/2.jpg" alt="portfolio-image" /></a>
                        </div>
                      </div>
                    </div>
                    <div class="media-small isotopeSelector filter">
                      <div class="overlay">
                        <div class="border-portfolio">
                          <a href="../assets/images/gallery/3.jpg">
                            <div class="overlay-background">
                              <i class="ti-plus" aria-hidden="true"></i>
                            </div><img class="img-fluid bg-img" src="../assets/images/gallery/3.jpg" alt="portfolio-image" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="media-small isotopeSelector filter">
                      <div class="overlay">
                        <div class="border-portfolio">
                          <a href="../assets/images/gallery/4.jpg">
                            <div class="overlay-background">
                              <i class="ti-plus" aria-hidden="true"></i>
                            </div><img class="img-fluid bg-img" src="../assets/images/gallery/4.jpg" alt="portfolio-image" /></a>
                        </div>
                      </div>
                    </div>
                    <div class="media-small isotopeSelector filter fashion">
                      <div class="overlay">
                        <div class="border-portfolio">
                          <a href="../assets/images/gallery/5.jpg">
                            <div class="overlay-background">
                              <i class="ti-plus" aria-hidden="true"></i>
                            </div><img class="img-fluid bg-img" src="../assets/images/gallery/5.jpg" alt="portfolio-image" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <h6 class="mb-2 mt-2">20/04/2019</h6>
                  </div>
                  <div class="col-4">
                    <div class="media-small isotopeSelector filter">
                      <div class="overlay">
                        <div class="border-portfolio">
                          <a href="../assets/images/gallery/2.jpg">
                            <div class="overlay-background">
                              <i class="ti-plus" aria-hidden="true"></i>
                            </div><img class="img-fluid bg-img" src="../assets/images/gallery/2.jpg" alt="portfolio-image" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="media-small isotopeSelector filter">
                      <div class="overlay">
                        <div class="border-portfolio">
                          <a href="../assets/images/gallery/3.jpg">
                            <div class="overlay-background">
                              <i class="ti-plus" aria-hidden="true"></i>
                            </div><img class="img-fluid bg-img" src="../assets/images/gallery/3.jpg" alt="portfolio-image" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="media-small isotopeSelector filter">
                      <div class="overlay">
                        <div class="border-portfolio">
                          <a href="../assets/images/gallery/4.jpg">
                            <div class="overlay-background">
                              <i class="ti-plus" aria-hidden="true"></i>
                            </div><img class="img-fluid bg-img" src="../assets/images/gallery/4.jpg" alt="portfolio-image" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="status">
            <div class="collapse-block ">
              <h5 class="block-title">
                <span style="padding-right: 5px;">
                  <i class="fa fa-cog" aria-hidden="true"></i>
                </span> &nbsp; &nbsp; Contact Info
                <label class="badge badge-outline-dark sm ml-2">3</label>
              </h5>
              <div class="block-content" style="display:none">
                <ul>
                  <li>
                    <h5>
                      <a href="#">
                        <i data-feather="smartphone"></i>+12 3456789587</a>
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <a href="https://themeforest.net/user/pixelstrap/portfolio">
                        <i data-feather="crosshair"></i>https://pixelstrap</a>
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <a href="#">
                        <i data-feather="map-pin"></i>1766 Fidler Drive Texas, 78238.</a>
                    </h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="status other">
            <div class="collapse-block ">
              <h5 class="block-title p-b-25">
                <span style="padding-right: 5px;">
                  <i class="fa fa-cog" aria-hidden="true"></i>
                </span> &nbsp; &nbsp;Setting</h5>
              <div class="block-content" style="display:none">
                <ul>
                  <li>
                    <h5>
                      <a href="#">
                        <i data-feather="smartphone"></i>+12 3456789587</a>
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <a href="https://themeforest.net/user/pixelstrap/portfolio">
                        <i data-feather="crosshair"></i>https://pixelstrap</a>
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <a href="#">
                        <i data-feather="map-pin"></i>1766 Fidler Drive Texas, 78238.</a>
                    </h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <aside class="chitchat-right-sidebar" id="slide-menu">
        <div class="custom-scroll right-sidebar">
          <div class="contact-profile">
            <div class="theme-title">
              <div class="media">
                <div class="media-body text-right">
                  <a class="close-profile ml-3" href="#">
                    <x-icon size="1x" class="custom-class"></x-icon>
                  </a>
                </div>
                <div>
                  <h6>Personal Information</h6>
                </div>

              </div>
            </div>
            <div class="details">
              <div class="contact-top profile" v-bind:class="{ online: singlefriend.pStatus == 0, unreachable : singlefriend.pStatus == 1, busy: singlefriend.pStatus == 2, offline: singlefriend.pStatus == 3, offline: singlefriend.pStatus == 4 }"><img class="bg-img" src="../assets/images/avtar/2.jpg" alt="" /></div>
              <div class="name">
                <h3>{{singlefriend.name}}</h3>
                <h6>Add Description</h6>
              </div>

            </div>
          </div>
          <div class="document">
            <div class="filter-block">
              <div class="collapse-block">
                <h5 class="block-title">
                  <span style="padding-right: 5px;">
                    <i class="fa fa-files-o" aria-hidden="true"></i>
                  </span> &nbsp; &nbsp; Shared Document
                  <label class="badge badge-success sm ml-2">3</label>
                </h5>
                <div class="block-content" style="display:none">
                  <ul class="document-list">
                    <li>
                      <i class="ti-folder font-danger"></i>
                      <h5>Simple_practice_project-zip</h5>
                    </li>
                    <li>
                      <i class="ti-write font-success"></i>
                      <h5>Word_Map-jpg</h5>
                    </li>
                    <li>
                      <i class="ti-zip font-primary"></i>
                      <h5>Latest_Design_portfolio.pdf</h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="media-gallery portfolio-section grid-portfolio">
            <div class="collapse-block ">
              <h5 class="block-title">
                <span style="padding-right: 5px;">
                  <i class="fa fa-bookmark-o" aria-hidden="true"></i>
                </span> &nbsp; &nbsp; Bookmarked Messages
                <label class="badge badge-primary sm ml-2">2</label>
              </h5>
              <div class="block-content" style="display:none">
                <div class="row share-media zoom-gallery">
                  <div class="col-12">
                    <h6 class="mb-2">22/03/2019</h6>
                  </div>
                  <div class="col-4 isotopeSelector filter">
                    <div class="media-big">
                      <div class="overlay">
                        <div class="border-portfolio">
                          <a href="../assets/images/gallery/1.jpg">
                            <div class="overlay-background">
                              <i class="ti-plus" aria-hidden="true"></i>
                            </div><img class="img-fluid bg-img" src="../assets/images/gallery/1.jpg" alt="portfolio-image" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="media-small isotopeSelector filter">
                      <div class="overlay">
                        <div class="border-portfolio">
                          <a href="../assets/images/gallery/2.jpg">
                            <div class="overlay-background">
                              <i class="ti-plus" aria-hidden="true"></i>
                            </div><img class="img-fluid bg-img" src="../assets/images/gallery/2.jpg" alt="portfolio-image" /></a>
                        </div>
                      </div>
                    </div>
                    <div class="media-small isotopeSelector filter">
                      <div class="overlay">
                        <div class="border-portfolio">
                          <a href="../assets/images/gallery/3.jpg">
                            <div class="overlay-background">
                              <i class="ti-plus" aria-hidden="true"></i>
                            </div><img class="img-fluid bg-img" src="../assets/images/gallery/3.jpg" alt="portfolio-image" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="media-small isotopeSelector filter">
                      <div class="overlay">
                        <div class="border-portfolio">
                          <a href="../assets/images/gallery/4.jpg">
                            <div class="overlay-background">
                              <i class="ti-plus" aria-hidden="true"></i>
                            </div><img class="img-fluid bg-img" src="../assets/images/gallery/4.jpg" alt="portfolio-image" /></a>
                        </div>
                      </div>
                    </div>
                    <div class="media-small isotopeSelector filter fashion">
                      <div class="overlay">
                        <div class="border-portfolio">
                          <a href="../assets/images/gallery/5.jpg">
                            <div class="overlay-background">
                              <i class="ti-plus" aria-hidden="true"></i>
                            </div><img class="img-fluid bg-img" src="../assets/images/gallery/5.jpg" alt="portfolio-image" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <h6 class="mb-2 mt-2">20/04/2019</h6>
                  </div>
                  <div class="col-4">
                    <div class="media-small isotopeSelector filter">
                      <div class="overlay">
                        <div class="border-portfolio">
                          <a href="../assets/images/gallery/2.jpg">
                            <div class="overlay-background">
                              <i class="ti-plus" aria-hidden="true"></i>
                            </div><img class="img-fluid bg-img" src="../assets/images/gallery/2.jpg" alt="portfolio-image" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="media-small isotopeSelector filter">
                      <div class="overlay">
                        <div class="border-portfolio">
                          <a href="../assets/images/gallery/3.jpg">
                            <div class="overlay-background">
                              <i class="ti-plus" aria-hidden="true"></i>
                            </div><img class="img-fluid bg-img" src="../assets/images/gallery/3.jpg" alt="portfolio-image" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="media-small isotopeSelector filter">
                      <div class="overlay">
                        <div class="border-portfolio">
                          <a href="../assets/images/gallery/4.jpg">
                            <div class="overlay-background">
                              <i class="ti-plus" aria-hidden="true"></i>
                            </div><img class="img-fluid bg-img" src="../assets/images/gallery/4.jpg" alt="portfolio-image" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="status">
            <div class="collapse-block ">
              <h5 class="block-title">
                <span style="padding-right: 5px;">
                  <i class="fa fa-cog" aria-hidden="true"></i>
                </span> &nbsp; &nbsp; Contact Info
                <label class="badge badge-outline-dark sm ml-2">3</label>
              </h5>
              <div class="block-content" style="display:none">
                <ul>
                  <li>
                    <h5>
                      <a href="#">
                        <i data-feather="smartphone"></i>+12 3456789587</a>
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <a href="https://themeforest.net/user/pixelstrap/portfolio">
                        <i data-feather="crosshair"></i>https://pixelstrap</a>
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <a href="#">
                        <i data-feather="map-pin"></i>1766 Fidler Drive Texas, 78238.</a>
                    </h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="status other">
            <div class="collapse-block ">
              <h5 class="block-title p-b-25">
                <span style="padding-right: 5px;">
                  <i class="fa fa-cog" aria-hidden="true"></i>
                </span> &nbsp; &nbsp;Setting</h5>
              <div class="block-content" style="display:none">
                <ul>
                  <li>
                    <h5>
                      <a href="#">
                        <i data-feather="smartphone"></i>+12 3456789587</a>
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <a href="https://themeforest.net/user/pixelstrap/portfolio">
                        <i data-feather="crosshair"></i>https://pixelstrap</a>
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <a href="#">
                        <i data-feather="map-pin"></i>1766 Fidler Drive Texas, 78238.</a>
                    </h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </aside>
      <aside class="app-sidebar active" id="rightside" style="display:none">
        <div class="apps">
          <ul class="apps-ul">
            <li id="todo">
              <div class="todo-main">
                <div class="theme-title">
                  <div class="media">
                    <div>
                      <h2>Todo</h2>
                      <h4>to create your task</h4>
                    </div>
                    <div class="media-body media-body text-right">
                      <a class="icon-btn btn-sm btn-outline-light close-apps" href="javascript:void(0);">
                        <x-icon size="1.5x" class="custom-class"></x-icon>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="todo-name">
                  <form class="default-form">
                    <select class="custom-scroll" name="support[support_type]">
                      <option>All Conversations</option>
                      <option>Josephin water</option>
                      <option>Jony Lynetin</option>
                      <option>Sufiya Elija</option>
                      <option>Mukrani Pabelo</option>
                      <option>Jhon Deo</option>
                    </select>
                  </form>
                </div>
                <div class="todo-tab theme-tab custom-scroll">
                  <ul class="nav nav-tabs">
                    <li class="nav-item">
                      <a class="nav-link button-effect active show" data-toggle="pill" href="#todo1">All</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link button-effect" data-toggle="pill" href="#todo2">My to-dos</a>
                    </li>
                    <li>
                      <a class="icon-btn btn-light button-effect btn-sm" data-toggle="modal" data-target="#todoModal" data-keyboard="false" data-backdrop="static">
                        <plus-icon size="1.5x" class="custom-class"></plus-icon>
                      </a>
                    </li>
                  </ul>
                  <div class="tab-content">
                    <div class="tab-pane active show" id="todo1">
                      <div class="tab-card text-left">
                        <div class="todo-task">
                          <h4>Designer Discussion </h4>
                          <div class="todo-main-content">
                            <div class="input-text">
                              <input type="checkbox" aria-label="Checkbox for following text input" />
                              <input id="user_input12" type="text" name="todo-text" placeholder="Give me review on our side" />
                            </div>
                            <div class="drop-picker">
                              <div class="dropdown currency" tabindex="1">
                                <div class="select">
                                  <span>Assign To</span>
                                </div>
                                <input type="hidden" name="currency" />
                                <ul class="dropdown-menu">
                                  <li class="dropdown-divider">
                                    <div class="fa fa-user"></div>
                                    <h5 class="text-muted">Assign To</h5>
                                  </li>
                                  <li>
                                    <a href="#">Josephin john</a>
                                  </li>
                                  <li>
                                    <a href="#">Lynetin john</a>
                                  </li>
                                  <li>
                                    <a href="#">Sufiya john</a>
                                  </li>
                                  <li>
                                    <a href="#">Jhon john</a>
                                  </li>
                                </ul>
                              </div>
                              <input class="datepicker-here form-control digits" type="url" data-language="en" placeholder="Due date" />
                            </div>
                          </div>
                          <div class="todo-list">
                            <div class="element" id="div_3">
                              <span class="add add-to-do">Add-To-Do</span>
                            </div>
                          </div>
                          <div class="todo-main-content">
                            <div class="input-text">
                              <input type="checkbox" aria-label="Checkbox for following text input" />
                              <input id="user_input13" type="text" name="todo-text" placeholder="Redesign Your Design" />
                            </div>
                            <div class="drop-picker">
                              <div class="dropdown currency" tabindex="1">
                                <div class="select">
                                  <span>Assign To</span>
                                </div>
                                <input type="hidden" name="currency" />
                                <ul class="dropdown-menu">
                                  <li class="dropdown-divider">
                                    <div class="fa fa-user"></div>
                                    <h5 class="text-muted">Assign To</h5>
                                  </li>
                                  <li>
                                    <a href="#">Josephin john</a>
                                  </li>
                                  <li>
                                    <a href="#">Lynetin john</a>
                                  </li>
                                  <li>
                                    <a href="#">Sufiya john</a>
                                  </li>
                                  <li>
                                    <a href="#">Jhon john</a>
                                  </li>
                                </ul>
                              </div>
                              <input class="datepicker-here form-control digits" type="url" data-language="en" placeholder="Due date" />
                            </div>
                          </div>
                          <div class="todo-list">
                            <div class="element" id="div_2">
                              <span class="add add-to-do">Add-To-Do</span>
                            </div>
                          </div>
                          <div class="todo-main-content">
                            <div class="input-text">
                              <input type="checkbox" aria-label="Checkbox for following text input" />
                              <input id="user_input14" type="text" name="todo-text" placeholder=" Complete Project report" />
                            </div>
                            <div class="drop-picker">
                              <div class="dropdown currency" tabindex="1">
                                <div class="select">
                                  <span>Assign To</span>
                                </div>
                                <input type="hidden" name="currency" />
                                <ul class="dropdown-menu">
                                  <li class="dropdown-divider">
                                    <div class="fa fa-user"></div>
                                    <h5 class="text-muted">Assign To</h5>
                                  </li>
                                  <li>
                                    <a href="#">Josephin john</a>
                                  </li>
                                  <li>
                                    <a href="#">Lynetin john</a>
                                  </li>
                                  <li>
                                    <a href="#">Sufiya john</a>
                                  </li>
                                  <li>
                                    <a href="#">Jhon john</a>
                                  </li>
                                </ul>
                              </div>
                              <input class="datepicker-here form-control digits" type="url" data-language="en" placeholder="Due date" />
                            </div>
                          </div>
                          <div class="todo-list">
                            <div class="element" id="div_1">
                              <span class="add add-to-do">Add-To-Do</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="todo2">
                      <div class="converstaion-docs tab-card">
                        <i class="fa fa-sticky-note-o"></i>
                        <h5 class="mb-3">No Open To-Dos Here </h5>
                        <a class="btn btn-primary btn-sm" data-toggle="modal" data-target="#createtodoModal">Create A To-Do</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li id="notes">
              <div class="notes-main">
                <div class="theme-title">
                  <div class="media">
                    <div>
                      <h2>Notes</h2>
                      <h4>Notes List</h4>
                    </div>
                    <div class="media-body media-body text-right">
                      <a class="icon-btn btn-sm btn-outline-light close-apps" href="javascript:void(0);">
                        <x-icon size="1.5x" class="custom-class"></x-icon>
                      </a>
                    </div>
                  </div>
                </div>
                <form class="default-form">
                  <div class="form-group notes-content">
                    <select>
                      <option>Contact Or Channel</option>
                      <option>Weekdays (Mon-Fri)</option>
                      <option>Daily</option>
                      <option>Weekly (Custom)</option>
                    </select>
                    <ul>
                      <li>
                        <a class="icon-btn btn-light button-effect btn-sm" data-toggle="modal" data-target="#notesModal">
                          <plus-icon size="1.5x" class="custom-class"></plus-icon>
                        </a>
                      </li>
                    </ul>
                  </div>
                </form>
                <div class="notes-list">
                  <h6 class="mb-2 text-muted">Joshephin Water.10 Jan</h6>
                  <div class="media"><img class="img-fluid mr-3" src="../assets/images/file_icons/5.png" alt="media-img" />
                    <div class="media-body">
                      <h5 class="mt-0">Joshephin Water</h5>
                    </div>
                  </div>
                  <h5 class="mb-2">Imporatnt project link</h5>
                  <h6 class="mb-2">Please start testing task of your projects.</h6>
                  <div class="forward-main">
                    <a class="line fa fa-mail-forward" href="#">Forward </a>
                  </div>
                </div>
              </div>
            </li>
            <li id="reminder">
              <div class="reminder-main">
                <div class="theme-title">
                  <div class="media">
                    <div>
                      <h2>Reminders</h2>
                      <h4>Set reminders</h4>
                    </div>
                    <div class="media-body media-body text-right">
                      <a class="icon-btn btn-sm btn-outline-light close-apps" href="javascript:void(0);">
                        <x-icon size="1.5x" class="custom-class"></x-icon>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="reminder-content tab-card">
                  <i class="ti-alarm-clock"></i>
                  <p>Never forget important tasks. Set personal and group reminders.</p>
                  <a class="setreminder btn btn-primary button-effect btn-sm" data-toggle="modal" data-target="#setReminder">set reminder</a>
                </div>
                <div class="reminder-list-disp">
                  <h5>Themeforest Discusssion</h5>
                  <h6>Project Discussion</h6>
                  <span>11:22 PM | 15 FAB</span>
                  <ul class="reminder-disp">
                    <li class="reminder-list-toggle">
                      <a class="icon-btn bg-transparent" href="#">
                        <more-vertical-icon size="1.5x" class="custom-class"></more-vertical-icon>
                      </a>
                      <div class="reminder-contentlist-toggle">
                        <ul>
                          <li>
                            <a class="icon-btn btn-sm" href="#">
                              <i data-feather="trash"></i>
                            </a>
                            <h5>Delete</h5>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="reminder-list">
                  <button class="Show-reminder">Show Completed</button>
                  <button class="Hide-reminder">Hide Completed</button>
                  <div class="target-reminder-list">
                    <h5>Session Start</h5>
                    <h6>Project Discussion</h6>
                    <h6>05:22 PM | 1 JAN</h6>
                    <ul class="reminder-disp">
                      <li class="reminder-toggle">
                        <a class="icon-btn bg-transparent" href="#" data-tippy-content="Quick action">
                          <more-vertical-icon size="1.5x" class="custom-class"></more-vertical-icon>
                        </a>
                        <div class="reminder-content-toggle">
                          <ul>
                            <li>
                              <a class="icon-btn btn-sm" href="#">
                                <i data-feather="trash"></i>
                              </a>
                              <h5>Delete</h5>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="app-list">
          <ul class="app-list-ul custom-scroll">
            <li class="title apps-toggle" id="appall">
              <grid-icon size="1.5x" class="custom-class"></grid-icon>
              <h5>Apps</h5>
            </li>
            <li>
              <a class="icon-btn btn-outline-success btn-sm button-effect" href="javascript:void(0);" @click="files()">
                <file-icon size="1.5x" class="custom-class"></file-icon>
              </a>
              <h5>Files </h5>
            </li>
            <li>
              <a class="icon-btn btn-outline-primary btn-sm button-effect" href="javascript:void(0);" @click="notes()">
                <book-icon size="1.5x" class="custom-class"></book-icon>
              </a>
              <h5>Notes </h5>
            </li>
            <li>
              <a class="icon-btn btn-outline-danger btn-sm button-effect" href="javascript:void(0);" @click="todo()">
                <list-icon size="1.5x" class="custom-class"></list-icon>
              </a>
              <h5>Todo </h5>
            </li>
            <li>
              <a class="icon-btn btn-outline-warning btn-sm button-effect" href="javascript:void(0);" @click="reminder()">
                <clock-icon size="1.5x" class="custom-class"></clock-icon>
              </a>
              <h5>Reminder</h5>
            </li>

            <!--  <li class="close-app"><a class="icon-btn btn-danger" href="#" onclick="removedefault()"><x-icon size="1.5x" class="custom-class"></x-icon></a>
                      <h5>close</h5>
                    </li> -->
          </ul>
        </div>
      </aside>

                 <!-- MEETING -->

       <div id="meeting" style="width:100%;background-color: #f3f6ff; display:none">

      <div class="row meetingRow" >
        <div class="col-2" style="margin-top: 3px;">
          <img class="" src="../assets/images/icons/meetingUser.png" alt="Avatar" style="height: auto;padding-right: 10px;" />
          <span style="font-size: 15px;">Meeting</span>
        </div>
        <div class="col-5" style="display: inherit;">
         
           <div class="search2" id="" style="padding: 0px;border-top: none;margin-bottom: 6px;justify-content: initial;">
            <div style="border-radius: 0px;">
              <div class="input-group">

                <input class="form-control" v-model="searchFriend" type="text" placeholder="Join By Id / Link" />
                <div class="input-group-append">
                  <span class="input-group-text">
                    <i class="fa fa-search"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-5">
          <button data-toggle="modal" data-keyboard="false" data-backdrop="static" data-target="#addMeetingmodal" class="btn addMeeting" >
            <span style="color: white;padding-right: 8px;">
              <i class="fa fa-plus" aria-hidden="true"></i></span> 
              <span style="color: white;">Create Meeting </span>
            </button>
        </div>
      </div>

      <div class="row">
        <div class="col-4" style="background-color: white;margin-left: 15px;">
          <div class="theme-tab tab-sm meeting-tabs" style="border-top: 1px solid #eaeef8;border-bottom: 1px solid #eaeef8;padding-top: 16px;">
            <ul class="nav nav-tabs">
            <li class="nav-item">
             <a id="up-meeting" data-toggle="tab" href="#upmeeting" role="tab" aria-controls="upmeeting" aria-selected="true" class="nav-link button-effect active">Upcomming Meeting</a>
            </li>
            <li class="nav-item">
              <a id="complete-meeting" data-toggle="tab" href="#completemeeting" role="tab" aria-controls="completemeeting" aria-selected="true" class="nav-link button-effect ">Completed Meeting</a>
            </li>
          </ul>          
         </div>

              <div class="tab-content meetingContent custom-scroll">
                <div id="upmeeting" class="container tab-pane active">
                  <div class="row meetingContentRow active"  style="margin-bottom: 12px;margin-top: 12px;">
                  <div class="col-2">
                    <div>
                    <div  class="profile" style="width: 56px;height: 56px;">
                      <img class="bg-img" src="../assets/images/contact/2.jpg" style="width: 48px;"  alt="Avatar" />
                    </div>
                  </div>
                  </div>
                  <div class="col-6">
                    <p>Chatto Meeting</p>
                    <p>2020/12/21</p>
                  </div>
                  <div class="col-4 meetingUser" >
                       <h6 style="font-size: 13px;font-weight: 600;padding: 3px;"> Participants: </h6>
                          <div class="usersprof">
                              <div class="profile">
                                <img class="bg-img" src="../assets/images/avtar/2.jpg" alt="Avatar" />
                              </div>
                               <div class="profile">
                                <img class="bg-img" src="../assets/images/avtar/2.jpg" alt="Avatar" />
                              </div>
                               <div class="profile">
                                <img class="bg-img" src="../assets/images/avtar/2.jpg" alt="Avatar" />
                              </div>
                            <div class="profile">
                              <div class="usersCount">+20</div>
                            </div>
                          </div>
                  </div>
                </div>
                <div class="row meetingContentRow" style="margin-bottom: 12px;margin-top: 12px;">
                  <div class="col-2">
                    <div  class="profile" style="width: 56px;height: 56px;">
                      <img class="bg-img" src="../assets/images/contact/2.jpg" style="width: 48px;"  alt="Avatar" />
                    </div>
                  </div>
                  <div class="col-6">
                    <p>Chatto Meeting</p>
                    <p>2020/12/21</p>
                  </div>
                  <div class="col-4 meetingUser" style="border-left:  1px solid #eaeef8;height: 56px;">
                       <h6 style="font-size: 13px;font-weight: 600;padding: 3px;"> Participants: </h6>
                          <div class="usersprof">
                              <div class="profile">
                                <img class="bg-img" src="../assets/images/avtar/2.jpg" alt="Avatar" />
                              </div>
                               <div class="profile">
                                <img class="bg-img" src="../assets/images/avtar/2.jpg" alt="Avatar" />
                              </div>
                               <div class="profile">
                                <img class="bg-img" src="../assets/images/avtar/2.jpg" alt="Avatar" />
                              </div>
                            <div class="profile">
                              <div class="usersCount">+20</div>
                            </div>
                          </div>
                  </div>
                </div>
                     <div class="row meetingContentRow" style="margin-bottom: 12px;margin-top: 12px;">
                  <div class="col-2">
                    <div  class="profile" style="width: 56px;height: 56px;">
                      <img class="bg-img" src="../assets/images/contact/2.jpg" style="width: 48px;"  alt="Avatar" />
                    </div>
                  </div>
                  <div class="col-6">
                    <p>Chatto Meeting</p>
                    <p>2020/12/21</p>
                  </div>
                  <div class="col-4 meetingUser" style="border-left:  1px solid #eaeef8;height: 56px;">
                       <h6 style="font-size: 13px;font-weight: 600;padding: 3px;"> Participants: </h6>
                          <div class="usersprof">
                              <div class="profile">
                                <img class="bg-img" src="../assets/images/avtar/2.jpg" alt="Avatar" />
                              </div>
                               <div class="profile">
                                <img class="bg-img" src="../assets/images/avtar/2.jpg" alt="Avatar" />
                              </div>
                               <div class="profile">
                                <img class="bg-img" src="../assets/images/avtar/2.jpg" alt="Avatar" />
                              </div>
                            <div class="profile">
                              <div class="usersCount">+20</div>
                            </div>
                          

                          </div>
                  </div>
                </div>
                </div>
                <div id="completemeeting" class="container tab-pane fade"><br>
                 
                </div>
               
              </div>
                </div>

                <div class="col-8" style="max-width: 64.66667%;">
                  <div class="row" style="margin-top: 11px;border-bottom: 1px solid #cbd3ef99;">
                     <div class="col-1">
                    <div  class="profile" style="width: 56px;height: 56px;">
                      <img class="bg-img" src="../assets/images/contact/2.jpg" style="width: 48px;"  alt="Avatar" />
                    </div>
                  </div>
                  <div class="col-5">
                    <p>Chatto Meeting</p>
                    <p>2020/12/21</p>
                  </div>

                      <div class="col-6">
                        <div class="row" >  
                          <div class="col-2" style="margin-top: 17px;">
                            <img class="" src="../assets/images/nav/newchat.png" alt="Avatar" style="height: auto;border-radius: 0;" /> 
                          </div>
                        <div class="col-6 meetingUser">                
                          <h6 style="font-size: 13px;font-weight: 600;padding: 3px;"> Participants: </h6>
                          <div class="usersprof">
                            
                               <div class="profile">
                                <img class="bg-img" src="../assets/images/avtar/2.jpg" alt="Avatar" />
                              </div>
                               <div class="profile">
                                <img class="bg-img" src="../assets/images/avtar/2.jpg" alt="Avatar" />
                              </div>
                               <div class="profile">
                                <img class="bg-img" src="../assets/images/avtar/2.jpg" alt="Avatar" />
                              </div>
                            <div class="profile">
                              <div class="usersCount">+20</div>
                            </div>
                              <div class="addMeetingPar" data-toggle="modal" data-keyboard="false" data-backdrop="static" data-target="#showGroupsMembers">
                              <div class="" style="padding: 3px;color: #6F66FF;">
                                <plus-icon size="1.5x" class="custom-class"></plus-icon>
                              </div>
                            </div>

                          </div>
                        </div>  
                         <div class="col-2" style="margin-top: 17px;">
                            <span><img class="" src="../assets/images/nav/dots.png" alt="Avatar" style="height: auto;" /></span>
                            </div>
                          </div>
                   </div>
                    </div>

                    <div class="row" style="margin-top: 15px;">
                      <div class="col-8" >
                        <div class="col-12" style="background-color:white;margin-bottom: 12px;">
                          <div class="row" style="padding-top: 13px;padding-bottom: 9px;">
                           <div class="col-1">
                             <img class="" src="../assets/images/icons/attach.png" alt="Avatar" style="height: auto;border-radius: 0;" /> 
                             
                           </div>
                           <div class="col-9" style="border-left: 1px solid gainsboro;height: 15px;">
                             <p>URL: <span> https://www.chatto.com/@123-456-789</span></p>
                           </div>
                           <div class="col-2">
                             <clipboard-icon size="1.5x" style="float: right;" class="custom-class"></clipboard-icon>
                         </div>
                           </div>
                        </div>
                        <div class="col-12 meetingTopic">
                           <p>Meeting Topic:</p>
                           <p>Loram ipsum</p>
                        </div>
                         <div class="col-12 meetingTopic">
                            <div class="row" style="padding-top: 14px;padding-bottom: 9px;">
                           <div class="col-1">
                             <img class="" src="../assets/images/icons/brace.png" alt="Avatar" style="height: auto;border-radius: 0;" /> 
                             
                           </div>
                           <div class="col-9" style="border-left: 1px solid gainsboro;height: 15px;">
                             <p>URL: <span> https://www.chatto.com/@123-456-789</span></p>
                           </div>
                           <div class="col-2">
                             <clipboard-icon size="1.5x" style="float: right;" class="custom-class"></clipboard-icon>
                         </div>
                           </div>
                        </div>
                         <div class="col-12 meetingTopic">
                           <div class="row" style="padding-top: 14px;padding-bottom: 9px;">
                           <div class="col-1">
                             <img class="" src="../assets/images/icons/batch.png" alt="Avatar" style="height: auto;border-radius: 0;" /> 
                             
                           </div>
                           <div class="col-9" style="border-left: 1px solid gainsboro;height: 15px;">
                             <p>Password: <span> * * * * * * * * *</span></p>
                           </div>
                           <div class="col-2">
                             <clipboard-icon size="1.5x"  style="float: right;" class="custom-class"></clipboard-icon>
                         </div>
                           </div>
                        </div>
                        <div class="col-12" style="padding-left: 0px;padding-right: 0px;">
                           <div class="document">
                          <div class="filter-block">
                            <div class="collapse-block open">
                              <h5 class="block-title">Advance Options
                                
                              </h5>
                              <div class="block-content">
                                <div class="col-12" style="background-color: white;padding: 12px;margin-bottom: 12px;">
                                 <span>Enable Video</span>
                                  <span style="float:right">
                                  <label class="switch">
                                    <input type="checkbox" checked>
                                    <span class="slider round"></span>
                                  </label>
                                </span>
                                </div>
                                
                                <div class="col-12" style="background-color: white;padding: 12px;margin-bottom: 12px;margin-top: 12px;">
                                   <span>Record Meeting</span>
                                  <span style="float:right">
                                  <label class="switch">
                                    <input type="checkbox">
                                    <span class="slider round"></span>
                                  </label>
                                </span>
                                </div>
                                <div class="col-12" style="background-color: white;padding: 12px;margin-bottom: 12px;margin-top: 12px;">
                                   <span>Allow others to invite / add to meeting</span>
                                  <span style="float:right">
                                  <label class="switch">
                                    <input type="checkbox" checked>
                                    <span class="slider round"></span>
                                  </label>
                                </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                          
                        </div>
                      </div>

                      <div class="col-4">
                        <div class="row">
                          <div class="col-12" style="background-color: white;text-align:center;margin-bottom: 20px;">
                            <div style="width: 100%;margin-top: 10px;height: 50px;background-color: aliceblue;">
                                <img class="" src="../assets/images/icons/schdule.png" alt="Avatar" style="height: auto;border-radius: 0;position: absolute;top: 35px;right: 123px;" /> 
                            </div>
                            <div class="meetingUser" style="margin-top: 40px; margin-bottom: 19px;">

                              <p>Date: 07/12/2020</p>
                              
                            </div>
                            
                          </div>
                          <div class="col-12" style="background-color: white;text-align:center;margin-bottom: 20px;margin-top:20px">
                            <div style="width: 100%;margin-top: 10px;height: 50px;background-color: aliceblue;">
                                <img class="" src="../assets/images/icons/clock.png" alt="Avatar" style="height: auto;border-radius: 0;position: absolute;top: 35px;right: 123px;" /> 
                            </div>
                            <div class="meetingUser" style="margin-top: 40px; margin-bottom: 19px;">

                              <p>Time: 2:00 pm</p>
                            
                            </div>
                            
                          </div>
                         
                        </div>
                      </div>

                    </div>

                  <div class="row" style="margin-top: 25px; border-top: 1px solid rgba(203, 211, 239, 0.6); padding-top: 25px;">
                    <div class="col-1">
                   <img class="" src="../assets/images/icons/editmeeting.png" alt="Avatar" style="height: auto;border-radius: 0;" /> <span> Edit</span>
                  </div>
                  <div class="col-1" style="border-left: 1px solid #BAC5E9; height: 20px;padding-right: 0; padding-left: 10px;">
                     <img class="" src="../assets/images/icons/invitemeeting.png" alt="Avatar" style="height: auto;border-radius: 0;" /> 
                     <span> Invite</span>
                  </div>
                  <div class="col-4" style="border-left: 1px solid #BAC5E9;height: 20px;">
                     <span style="color:#B70A0A"> Cancel</span>
                  </div>

                      <div class="col-6">
                            <button data-toggle="modal" data-keyboard="false" data-backdrop="static" data-target="#addMeetingmodal" class="btn addMeeting" >
                                <span style="color: white;">Start Meeting</span>
                              </button>
                   </div>
                    </div>

                </div>
      </div>

    </div>
                <!-- MEETING END -->


                 <!-- ROOM -->

       <div id="room" style="width:100%;background-color: #f3f6ff; display:none">

      <div class="row meetingRow" >
        <div class="col-2" style="margin-top: 3px;">
          <img class="" src="../assets/images/icons/roomUser.png" alt="Avatar" style="height: auto;padding-right: 10px;" /><span style="font-size: 15px;">Room</span>
        </div>
        <div class="col-5" style="display: inherit;">
         
           <div class="search2" id="" style="padding: 0px;border-top: none;margin-bottom: 6px;justify-content: initial;">
            <div style="border-radius: 0px;">
              <div class="input-group">

                <input class="form-control" v-model="searchFriend" type="text" placeholder="Search Room" />
                <div class="input-group-append">
                  <span class="input-group-text">
                    <i class="fa fa-search"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-5">
          <button type="button" class="btn addMeeting" ><span style="color: white;padding-right: 8px;"><i class="fa fa-plus" aria-hidden="true"></i></span> <span style="color: white;">Create Room </span></button>
        </div>
      </div>

      <div class="row">
        <div class="col-4" style="background-color: white;margin-left: 15px;">
          <div class="theme-tab tab-sm meeting-tabs" style="border-top: 1px solid #eaeef8;border-bottom: 1px solid #eaeef8;padding-top: 16px;">
            <ul class="nav nav-tabs">
            <li class="nav-item" style="width:25%">
             
             <a id="up-meeting" data-toggle="tab" href="#allroom" role="tab" aria-controls="allroom" aria-selected="true" class="nav-link button-effect active">All</a>
            </li>
            <li class="nav-item">
             <a id="create-room" data-toggle="tab" href="#createroom" role="tab" aria-controls="createroom" aria-selected="true" class="nav-link button-effect">Create Room</a>
            </li>
            <li class="nav-item">
              <a id="join-room" data-toggle="tab" href="#joinroom" role="tab" aria-controls="joinroom" aria-selected="true" class="nav-link button-effect ">Join Room</a>
            </li>
          </ul>          
         </div>

              <div class="tab-content meetingContent custom-scroll">
                <div id="allroom" class="container tab-pane active">
                  <div class="row roomContentRow active"  style="margin-bottom: 12px;margin-top: 12px;">
                  <div class="col-2">
                    <div>
                    <div  class="profile" style="width: 56px;height: 56px;">
                      <img class="bg-img" src="../assets/images/contact/2.jpg" style="width: 48px;"  alt="Avatar" />
                    </div>
                  </div>
                  </div>
                  <div class="col-6">
                    <p>Chatto Meeting</p>
                    <p>2020/12/21</p>
                  </div>
                  <div class="col-4 meetingUser" >
                       <h6 style="font-size: 13px;font-weight: 600;padding: 3px;"> Participants: </h6>
                          <div class="usersprof">
                              <div class="profile">
                                <img class="bg-img" src="../assets/images/avtar/2.jpg" alt="Avatar" />
                              </div>
                               <div class="profile">
                                <img class="bg-img" src="../assets/images/avtar/2.jpg" alt="Avatar" />
                              </div>
                               <div class="profile">
                                <img class="bg-img" src="../assets/images/avtar/2.jpg" alt="Avatar" />
                              </div>
                            <div class="profile">
                              <div class="usersCount">+20</div>
                            </div>
                          

                          </div>
                  </div>
                </div>


                <div class="row roomContentRow" style="margin-bottom: 12px;margin-top: 12px;">
                  <div class="col-2">
                    <div  class="profile" style="width: 56px;height: 56px;">
                      <img class="bg-img" src="../assets/images/contact/2.jpg" style="width: 48px;"  alt="Avatar" />
                    </div>
                  </div>
                  <div class="col-6">
                    <p>Chatto Meeting</p>
                    <p>2020/12/21</p>
                  </div>
                  <div class="col-4 meetingUser" style="border-left:  1px solid #eaeef8;height: 56px;">
                       <h6 style="font-size: 13px;font-weight: 600;padding: 3px;"> Participants: </h6>
                          <div class="usersprof">
                              <div class="profile">
                                <img class="bg-img" src="../assets/images/avtar/2.jpg" alt="Avatar" />
                              </div>
                               <div class="profile">
                                <img class="bg-img" src="../assets/images/avtar/2.jpg" alt="Avatar" />
                              </div>
                               <div class="profile">
                                <img class="bg-img" src="../assets/images/avtar/2.jpg" alt="Avatar" />
                              </div>
                            <div class="profile">
                              <div class="usersCount">+20</div>
                            </div>
                          </div>
                  </div>
                </div>
                
                     <div class="row roomContentRow" style="margin-bottom: 12px;margin-top: 12px;">
                  <div class="col-2">
                    <div  class="profile" style="width: 56px;height: 56px;">
                      <img class="bg-img" src="../assets/images/contact/2.jpg" style="width: 48px;"  alt="Avatar" />
                    </div>
                  </div>
                  <div class="col-6">
                    <p>Chatto Meeting</p>
                    <p>2020/12/21</p>
                  </div>
                  <div class="col-4 meetingUser" style="border-left:  1px solid #eaeef8;height: 56px;">
                       <h6 style="font-size: 13px;font-weight: 600;padding: 3px;"> Participants: </h6>
                          <div class="usersprof">
                              <div class="profile">
                                <img class="bg-img" src="../assets/images/avtar/2.jpg" alt="Avatar" />
                              </div>
                               <div class="profile">
                                <img class="bg-img" src="../assets/images/avtar/2.jpg" alt="Avatar" />
                              </div>
                               <div class="profile">
                                <img class="bg-img" src="../assets/images/avtar/2.jpg" alt="Avatar" />
                              </div>
                            <div class="profile">
                              <div class="usersCount">+20</div>
                            </div>
                          </div>
                  </div>
                </div>
                </div>
                <div id="joinroom" class="container tab-pane fade"><br>
                 
                </div>
               
              </div>
                </div>

                <div class="col-8" style="max-width: 64.66667%;">
                  <div class="row" style="margin-top: 11px;border-bottom: 1px solid #cbd3ef99;">
                     <div class="col-1">
                    <div  class="profile" style="width: 56px;height: 56px;">
                      <img class="bg-img" src="../assets/images/contact/2.jpg" style="width: 48px;"  alt="Avatar" />
                    </div>
                  </div>
                  <div class="col-5">
                    <p>Chatto Meeting</p>
                    <p>2020/12/21</p>
                  </div>

                      <div class="col-6">
                        <div class="row" >  
                          <div class="col-2" style="margin-top: 17px;">
                            <img class="" src="../assets/images/nav/newchat.png" alt="Avatar" style="height: auto;border-radius: 0;" /> 
                          </div>
                        <div class="col-6 meetingUser">                
                          <h6 style="font-size: 13px;font-weight: 600;padding: 3px;"> Participants: </h6>
                          <div class="usersprof">
                            
                               <div class="profile">
                                <img class="bg-img" src="../assets/images/avtar/2.jpg" alt="Avatar" />
                              </div>
                               <div class="profile">
                                <img class="bg-img" src="../assets/images/avtar/2.jpg" alt="Avatar" />
                              </div>
                               <div class="profile">
                                <img class="bg-img" src="../assets/images/avtar/2.jpg" alt="Avatar" />
                              </div>
                            <div class="profile">
                              <div class="usersCount">+20</div>
                            </div>
                              <div class="addMeetingPar" data-toggle="modal" data-keyboard="false" data-backdrop="static" data-target="#showGroupsMembers">
                              <div class="" style="padding: 3px;color: #6F66FF;">
                                <plus-icon size="1.5x" class="custom-class"></plus-icon>
                              </div>
                            </div>

                          </div>
                        </div>  
                         <div class="col-2" style="margin-top: 17px;">
                            <span><img class="" src="../assets/images/nav/dots.png" alt="Avatar" style="height: auto;" /></span>
                            </div>
                          </div>
                   </div>
                    </div>

                    <div class="row" style="margin-top: 15px;">
                      <div class="col-8" >
                     
                        <div class="col-12 meetingTopic" style="margin-bottom: 12px;">
                           <p>Meeting Topic:</p>
                           <p>Loram ipsum</p>
                        </div>
                         <div class="col-12 meetingTopic">
                            <div class="row" style="padding-top: 4px;padding-bottom: 9px;">
                           <div class="col-1">
                             <img class="" src="../assets/images/icons/brace.png" alt="Avatar" style="height: auto;border-radius: 0;" /> 
                             
                           </div>
                           <div class="col-9" style="border-left: 1px solid gainsboro;height: 15px;">
                             <p>URL: <span> https://www.chatto.com/@123-456-789</span></p>
                           </div>
                           <div class="col-2">
                             <clipboard-icon size="1.5x" style="float: right;" class="custom-class"></clipboard-icon>
                         </div>
                           </div>
                        </div>
                         <div class="col-12 meetingTopic">
                           <div class="row" style="padding-top: 4px;padding-bottom: 9px;">
                           <div class="col-1">
                             <img class="" src="../assets/images/icons/batch.png" alt="Avatar" style="height: auto;border-radius: 0;" /> 
                             
                           </div>
                           <div class="col-9" style="border-left: 1px solid gainsboro;height: 15px;">
                             <p>Password: <span> * * * * * * * * *</span></p>
                           </div>
                           <div class="col-2">
                             <clipboard-icon size="1.5x"  style="float: right;" class="custom-class"></clipboard-icon>
                         </div>
                           </div>
                        </div>
                           <div class="col-12 meetingTopic" style="">
                          <div class="row" style="padding-top: 4px;padding-bottom: 9px;">
                           <div class="col-1">
                             <img class="" src="../assets/images/icons/document.png" alt="Avatar" style="height: auto;border-radius: 0;" /> 
                             
                           </div>
                           <div class="col-9" style="border-left: 1px solid gainsboro;height: 15px;">
                             <p>Documents</p>
                           </div>
                           
                           </div>
                        </div>
                        <div class="col-12" style="padding-left: 0px;padding-right: 0px;">
                           <div class="document">
                          <div class="filter-block">
                            <div class="collapse-block open">
                              <h5 class="block-title">Advance Options
                                
                              </h5>
                              <div class="block-content">
                                <div class="col-12" style="background-color: white;padding: 12px;margin-bottom: 12px;">
                                 <span>Allow others to invite / add to room</span>
                                  <span style="float:right">
                                  <label class="switch">
                                    <input type="checkbox" checked>
                                    <span class="slider round"></span>
                                  </label>
                                </span>
                                </div>
                                
                                <div class="col-12" style="background-color: white;padding: 12px;margin-bottom: 12px;margin-top: 12px;">
                                   <span>Allow others to Schedule meeting</span>
                                  <span style="float:right">
                                  <label class="switch">
                                    <input type="checkbox">
                                    <span class="slider round"></span>
                                  </label>
                                </span>
                                </div>
                                <div class="col-12" style="background-color: white;padding: 12px;margin-bottom: 12px;margin-top: 12px;">
                                   <span>Manage Participants </span>
                                  <span style="float:right">
                                  <label class="switch">
                                    <input type="checkbox" checked>
                                    <span class="slider round"></span>
                                  </label>
                                </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                          
                        </div>
                      </div>

                      <div class="col-4">
                        <div class="row">
                          <div class="col-12" style="background-color: white;text-align:center;margin-bottom: 10px;">
                            <div style="width: 100%;margin-top: 10px;height: 50px;background-color: aliceblue;">
                                <img class="" src="../assets/images/icons/addUser.png" alt="Avatar" style="height: auto;border-radius: 0;position: absolute;top: 35px;right: 123px;" /> 
                            </div>
                            <div class="meetingUser" style="margin-top: 40px; ">

                              <p>Date: 07/12/2020</p>
                              
                            </div>
                            
                          </div>
                          <div class="col-12" style="background-color: white;text-align:center;margin-bottom: 10px;margin-top:10px">
                            <div style="width: 100%;margin-top: 10px;height: 50px;background-color: aliceblue;">
                                <img class="" src="../assets/images/icons/share.png" alt="Avatar" style="height: auto;border-radius: 0;position: absolute;top: 35px;right: 137px;" /> 
                            </div>
                            <div class="meetingUser" style="margin-top: 40px; margin-bottom: 19px;">
                              <p>Time: 2:00 pm</p>
                            </div>
                          </div>

                           <div class="col-12" style="background-color: white;text-align:center;margin-bottom: 10px;margin-top:10px">
                            <div style="width: 100%;margin-top: 10px;height: 50px;background-color: aliceblue;">
                                <img class="" src="../assets/images/icons/invite.png" alt="Avatar" style="height: auto;border-radius: 0;position: absolute;top: 35px;right: 137px;" /> 
                            </div>
                            <div class="meetingUser" style="margin-top: 40px; margin-bottom: 19px;">
                              <p>Time: 2:00 pm</p>
                            </div>
                          </div>
                         
                        </div>
                      </div>

                    </div>

                   <div class="row" style="margin-top: 25px; border-top: 1px solid rgba(203, 211, 239, 0.6); padding-top: 25px;">
                    <div class="col-5">
                   <img class="" src="../assets/images/icons/editmeeting.png" alt="Avatar" style="height: auto;border-radius: 0;" /> <span> Edit</span>
                  </div>
                  <div class="col-4" style="">
                      <button @click="meetingNav()" class="btn addMeeting" style="background-color:#FFFFFF;border: 1px solid #2C3550" >
                                <span style="color: #2C3550;">Schedule Meeting</span>
                              </button>
                  </div>

                      <div class="col-3">
                            <button data-toggle="modal" data-keyboard="false" data-backdrop="static" data-target="#addMeetingmodal" class="btn addMeeting" >
                                <span style="color: white;">Start Meeting</span>
                              </button>
                   </div>
                    </div>
                </div>
      </div>
    </div>
                <!-- ROOM END -->
    </div>

    
    <div class="modal fade add-popup add-contact-modal" id="showGroupsMembers" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title" v-if="showGrouptitle">
              {{singlegroup.name}}
              <i class="fa fa-edit" @click="editGroup()"></i>
            </h2>
            <div class="form-group mb-2 modal-title" v-if="editgTitle == true" style="display: flex;">
              <input type="text" ref="groupTitle" name="username" v-model="singlegroup.name" class="form-control" maxlength="50">

              <check-icon size="1.5x" class="custom-class" @click="editGroupTitle()" style="margin: 3px;"></check-icon>
              <x-icon size="1.5x" class="custom-class" @click="crossGroupTitle()" style="margin: 3px;"></x-icon>

            </div>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="default-form">

              <div class="form-group mb-0">
                <h5>
                  <span style="font-size:17px;cursor: pointer;" @click="showMembers()">Group Members </span>
                  <span style="float:right;cursor: pointer;" @click="addNewmember()">Add New Member</span>
                </h5>

                <div class="showmembers" v-if="showmembers == true">
                  <div class="groupmembers" v-for="(groupmembers, index) in singlegroup.members">

                    <img class="bg-img" src="../assets/images/contact/2.jpg" alt="Avatar" /> {{groupmembers.name}}

                    <label v-if="groupmembers._id != c_user._id" class="btn btn-sm btn-danger removeBtn" style="padding: 4px 7px;float:right;cursor: pointer;" @click="leaveGroup(groupmembers._id,index)">Remove</label>

                  </div>
                </div>

                <div class="showmembers" v-if="shownewmembers == true">
                  <div class="groupmembers" v-for="(members, index) in nonGroupUsers" v-if="members._id != c_user._id">

                    <img class="bg-img" src="../assets/images/contact/2.jpg" alt="Avatar" /> {{members.name}}
                    <span class="btn btn-sm btn-success showAdd" :id="'newmember'+members._id" style="padding: 4px 7px;float:right;cursor: pointer;" @click="addnewGroupmemners(members)">Add</span>
                    <span class="btn btn-sm btn-danger hideRemove" :id="'newmemberRm'+members._id" style="padding: 4px 7px;float:right;cursor: pointer;display:none" @click="removenewGroupmemners(members._id,index)">Remove</span>
                  </div>

                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button class="btn btn-danger button-effect btn-sm" type="button" data-dismiss="modal">Cancel</button>
            <button id="groupbtn" v-if="showmembers == true" class="btn btn-primary button-effect btn-sm " type="button" @click="leaveGroup(userid,'user')">Leave Group</button>
            <button id="addmemberbtn" v-if="shownewmembers == true" class="btn btn-primary button-effect btn-sm " type="button" @click="addNewmembersList()">Submit</button>
            <button id="addmemberonload" class="addmemberonload btn btn-primary button-effect btn-sm" style="display: none;">
              <i class="fa fa-spinner fa-spin"></i> Loading</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade add-popup add-contact-modal" id="exampleModalCenter" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title">
              <span><img class="" src="../assets/images/nav/groupUsers.png" alt="Avatar" style="height: auto;border-radius: 0;" /></span> New Group</h2>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="default-form">
              <div style="display: flex;">
                <div style="padding-right: 10px;">
                  <h4 style="margin-bottom: 4px; color: black;">Group:</h4>
                  <div style="border: 1px #E5EAF9 solid;padding: 4px;border-radius: 6px;">
                    <span>  <img class="bg-img" v-if="userImageName" style ="max-height: 40px; border-radius:0px" :src="hostname+'images/chatImages/'+userImageName" alt="Avatar" /> 

                       <img class="bg-img" v-else  src="../assets/images/contact/2.jpg" style ="max-height: 40px;; border-radius:0px"  alt="Avatar" /> </span>
                  </div>
                </div>
                <div class="form-group" style="width: 100%;margin-top: 22px;">
                  <input class="form-control" id="exampleInputEmail1" v-model="groupName" type="text" placeholder="Enter Group Name" maxlength="50" />
                </div>
              </div>
              <div style="margin-right: -10px;margin-left: -10px;">
                <div class="input-group">

                  <input class="form-control modelsearch" type="text" placeholder="Search ..." />

                </div>
              </div>

              <div class="form-group mb-0 mt-2">
                <h5>A</h5>
                <div class="showmembers">

                  <ul v-for="(friends, index) in friendsdata" v-if="friends._id != c_user._id" class=" groupmembers chat-main">
                    <li v-if="friends.friendReqStatus == 1" class="init" data-to="blank" style="padding-left: 0px;cursor: pointer;width: 100%;display: inline-block;margin: 0 0px;    padding-top: 0px;padding-bottom: 0px;">
                      <div class="chat-box">
                        <div v-if="friends.onlineStatus == 1" class="profile" style="width: 56px;height: 56px;" v-bind:class="{ online: friends.pStatus == 0, unreachable : friends.pStatus == 1, busy: friends.pStatus == 2, offline: friends.pStatus == 3, offline: friends.pStatus == 4 }">
                           <img class="bg-img" v-if="friends.user_image" style="width: 48px;" :src="hostname+'images/chatImages/'+friends.user_image" alt="Avatar" /> 

                       <img class="bg-img" v-else  src="../assets/images/contact/2.jpg" style="width: 48px;"  alt="Avatar" /></div>
                        <div v-else class="profile offline" style="width: 56px;height: 56px;">
                          <img class="bg-img" v-if="friends.user_image" style="width: 48px;" :src="hostname+'images/chatImages/'+friends.user_image" alt="Avatar" /> 

                       <img class="bg-img" v-else  src="../assets/images/contact/2.jpg" style="width: 48px;"  alt="Avatar" />
                        </div>

                        <div class="details" style="padding-left: 73px;">
                          <h5>{{friends.name}}</h5>
                          <h6 :id="'f_typing'+friends._id" v-if="friends.latestMsg" style="padding-top: 0px;">{{ friends.latestMsg.message }}</h6>
                          <h6 style="padding-top: 0px;" v-else>Start Chat</h6>
                        </div>

                        <div class="date-status">
                          <h6 class="todayDate" style="margin-bottom: 11px;">{{isToday(friends.updatedByMsg)}}</h6>

                          <span class="showAdd" :id="'member'+friends._id" @click="addGroupmemners(friends._id)" style="font-size: 21px;">
                            <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                          </span>
                          <span class="hideRemove" style="display:none;font-size: 21px;" :id="'memberRm'+friends._id" @click="removeGroupmemners(friends._id)">
                            <i class="fa fa-times-circle-o" aria-hidden="true"></i>
                          </span>
                        </div>
                      </div>
                    </li>

                  </ul>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button class="btn btn-danger button-effect btn-sm" type="button" data-dismiss="modal">Cancel</button>
            <button id="groupcreateBtn" class="btn btn-primary button-effect btn-sm disabled" type="button" @click="createGroup()" :disabled="havegroup">Create Group</button>
            <button class="buttonload btn btn-primary button-effect btn-sm" style="display:none">
              <i class="fa fa-spinner fa-spin"></i> Loading</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal pol-modal-main add-popup" id="pollModal" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title">
              <i data-feather="bar-chart-2"></i>poll</h2>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="default-form">
              <h3>create poll</h3>
              <div class="form-group">
                <input class="form-control" type="text" placeholder="ask que" />
                <input class="form-control" type="text" placeholder="add commatn" />
              </div>
              <div class="form-group">
                <input class="form-control" type="text" placeholder="option 1" />
                <input class="form-control" type="text" placeholder="option 2" />
                <a class="add-option" href="#">add an option</a>
              </div>
              <div class="form-group">
                <div class="post-poll">
                  <ul>
                    <li>post poll in
                      <p class="pt-0">test name</p>
                    </li>
                    <li>poll expier in 7 days
                      <p class="pt-0">test name</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="form-group">
                <div class="allow-group">
                  <input class="allow-check" type="checkbox" />Allow users to vote anonymously
                </div>
              </div>
              <div class="creat-poll-btn">
                <a class="btn btn-primary button-effect btn-sm" href="#" data-dismiss="modal" aria-label="Close">Create poll</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="modal notes-modal-main add-popup" id="notesModal" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title">
              <i class="ti-bookmark-alt"></i>notes</h2>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body custom-scroll">
            <div class="card">
              <div class="card-header">
                <h5>Inline Editor</h5>
              </div>
              <div class="card-body">
                <div class="cke_editable cke_editable_inline cke_contents_ltr cke_show_borders" id="area1" contenteditable="true" tabindex="0" spellcheck="false" role="textbox" aria-label="Rich Text Editor, area1" title="Rich Text Editor, area1">
                  <h1>Your title</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at vulputate urna, sed dignissim arcu. Aliquam at ligula imperdiet, faucibus ante a, interdum enim. Sed in mauris a lectus lobortis condimentum. Sed in nunc magna. Quisque massa urna, cursus vitae commodo eget, rhoncus nec erat. Sed sapien turpis, elementum sit amet elit vitae, elementum gravida eros. In ornare tempus nibh ut lobortis. Nam venenatis justo ex, vitae vulputate neque laoreet a.</p>
                </div>
              </div>
              <div class="card-footer">
                <button class="btn btn-danger button-effect btn-sm" type="button">Save</button>
                <button class="btn btn-primary button-effect btn-sm" type="button" data-dismiss="modal">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal reminder-modal-main add-popup" id="setReminder" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title">
              Set redminders</h2>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="form default-form">
              <div class="lable">Reminder for (Groups or contacts)</div>
              <div class="form-group">
                <input class="form-control" type="text" placeholder="contact or channel" />
              </div>
              <div class="lable">Remind about</div>
              <div class="form-group">
                <textarea class="form-control dib" rows="3" placeholder="Some details about task"></textarea>
              </div>
              <div class="lable">Remind about</div>
              <div class="form-group">
                <ul class="reminder-count">
                  <li class="active">
                    <div class="reminder-box">
                      <h3 class="remi-num">15</h3>
                      <h5 class="remi-val">minutes</h5>
                    </div>
                  </li>
                  <li>
                    <div class="reminder-box">
                      <h3 class="remi-num">1</h3>
                      <h5 class="remi-val">hour</h5>
                    </div>
                  </li>
                  <li>
                    <div class="reminder-box">
                      <h3 class="remi-num">5 PM</h3>
                      <h5 class="remi-val">today</h5>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="form-group mb-0">
                <div class="lable">select custom time</div>
                <div class="custom-remider-main">
                  <div class="custom-remider-content">
                    <div class="custom-reminder-inline">
                      <input class="form-control" type="date" />
                      <input class="form-control" type="time" />
                    </div>
                    <div class="custom-reminder-block">
                      <select>
                        <option>Do not repeat</option>
                        <option>Weekdays (Mon-Fri)</option>
                        <option>Daily</option>
                        <option>Weekly (Custom)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="reminder-btn">
                <a class="btn btn-primary button-effect">set reminder</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="modal snippet-modal-main add-popup" id="snippetModal" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title">
              <i class="fa fa-code"></i>code snippets</h2>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="default-form">
              <h3>creat snippets</h3>
              <div class="form-group">
                <input class="form-control" type="text" placeholder="title(optional)" />
              </div>
              <div class="form-group">
                <select class="mb-0">
                  <option>ebnf</option>
                  <option>c++</option>
                  <option>diff</option>
                  <option>dart</option>
                </select>
              </div>
              <div class="form-group">
                <textarea class="form-control" rows="5"></textarea>
              </div>
              <div class="form-group">
                <input class="form-control mb-0" type="text" placeholder="add commant (optional)" />
              </div>
              <div class="form-group mb-0">
                <div class="btn-snipate">
                  <a class="btn btn-danger button-effect btn-sm mr-3" href="#" data-dismiss="modal" aria-label="Close">Cancel</a>
                  <a class="btn btn-primary button-effect btn-sm" href="#" data-dismiss="modal" aria-label="Close">Create & post</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-------------------------------------------- O2O VIDEO CALL RECEIVER ---------------------------------->

    <div class="modal fade" id="videocallReceiver" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-body" style="border: 3px solid white; padding: 0px;">
          <div class="audiocall1 call-modal">
            <div class="center-con text-center" style="margin-bottom:120px">
              <div class="profile incomingName align-self-center">
                <img class="bg-img" src="../assets/images/contact/1.jpg" alt="Avatar" />
              </div>
              <div class="mt-4" style="margin-bottom: 100px;">
                <span class="title2" id="incomingName"></span><br>
                <h6>Incoming...</h6>
              </div>

              <ul>
                <li>
                  <a class="icon-btn btn-success button-effect btn-xl is-animating" href="#" @click="o2oreceiveCall()" data-dismiss="modal">
                    <phone-icon size="1.5x" class="custom-class"></phone-icon>
                  </a>
                </li>
                <li>
                  <a class="icon-btn btn-danger button-effect btn-xl is-animating cancelcall" href="#" @click="o2ostopKCall()" data-dismiss="modal">
                    <phone-icon size="1.5x" class="custom-class"></phone-icon>
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>

    <!-------------------------------------------- O2O AUDIO CALL RECEIVER ---------------------------------->
    <div class="modal fade" id="audiocallReceiver" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-body">
          <div class="audiocall1 call-modal">
            <div class="center-con text-center">
              <div class="title2" id="audioincomingName"></div>
              <ul>
                <li>
                  <a class="icon-btn btn-success button-effect btn-xl is-animating" href="#" @click="o2oaudioreceiveCall()" data-dismiss="modal">
                    <phone-icon size="1.5x" class="custom-class"></phone-icon>
                  </a>
                </li>
                <li>
                  <a class="icon-btn btn-danger button-effect btn-xl is-animating cancelcall" href="#" @click="o2ostopKCall()" data-dismiss="modal">
                    <phone-icon size="1.5x" class="custom-class"></phone-icon>
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>

    <!-------------------------------------------- Group CALL RECEIVER ---------------------------------->
    <div class="modal fade" id="groupcallReceiver" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-body">
          <div class="audiocall1 call-modal">
            <div class="center-con text-center">
              <div class="title2" id="groupincomingName"> Group Call</div>
              <ul>
                <li>
                  <a class="icon-btn btn-success button-effect btn-xl is-animating" href="#" @click="groupReceiveCall()" data-dismiss="modal">
                    <phone-icon size="1.5x" class="custom-class"></phone-icon>
                  </a>
                </li>
                <li>
                  <a class="icon-btn btn-danger button-effect btn-xl is-animating cancelcall" href="#" @click="o2ostopKCall()" data-dismiss="modal">
                    <phone-icon size="1.5x" class="custom-class"></phone-icon>
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
    <!---------------------------------- GROUP VIDEO CALL MODEL ---------------------------------->

    <div class="groupvideocallModel  viddiolog modal fade" id="groupvideocall" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" id="groupmodalcall" role="document">
        <div class="modal-body" style="border: 3px solid white;padding: 0px 0px;">

          <div class="videocall groupbeforeopenChat call-modal">

            <!-- <div class="modal-footer" style="background-color: aliceblue;"> -->
            <div id="room" style="display: none;">
              <h2 id="room-header"> Room Name here</h2>
              <div id="participants" class="row" style="margin-right: 2px; margin-left: 0px;"></div>

            </div>
            <div id="groupdetail" class="media videocall-details" style="display:block">
              <ul class="calls float-left">
                <li class="call-option-toggle">
                  <a class="icon-btn option-btn" href="#" data-tippy-content="Quick action">
                    <more-vertical-icon size="1.5x" class="custom-class"></more-vertical-icon>
                  </a>
                </li>
                <div class="call-option-content" style="display:none">
                  <ul class="call-cont-setting" style="padding: 0px;margin-left: 14px;margin-bottom:-24px;border-radius: 5px;display: grid;box-shadow: 0px 0px 0px 1px #0000000f;">
                    <li>
                      <button type="button" class="calloption-close  close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </li>
                    <li>

                      <a href="#" @click="groupstartchat()">
                        <div style="margin-right: 11px;">
                          <img class="" src="../assets/images/nav/chaticon.png" alt="Avatar" style="height: auto;border-radius: 0;" />
                          </i>
                        </div>
                        <span style="padding-right: 10px;">quick chat</span>

                      </a>
                    </li>
                    <li>
                      <a href="#" data-toggle="modal" data-target="#msgcallModal" data-keyboard="false" data-backdrop="static">
                        <div style="margin-right: 11px;">
                          <img class="" src="../assets/images/icons/videocall.png" alt="Avatar" style="height: auto;border-radius: 0;" />
                        </div>
                        <span style="padding-right: 14px;">video call</span>

                      </a>
                    </li>
                    <li>
                      <a href="#" @click="creategroupPanle" data-toggle="modal" data-target="#exampleModalCenter">
                        <div style="margin-right: 11px;">
                          <img class="" src="../assets/images/icons/addperson.png" alt="Avatar" style="height: auto;border-radius: 0;" />
                        </div>
                        <span style="padding-right: 0px;">add participant</span>

                      </a>
                    </li>
                    <li>
                      <a v-if="audioPause" class="" href="#" @click="audiogroupPausecall()" data-tippy-content="">
                        <div style="margin-right: 11px;font-size: 20px;color: #4d5363cc;">
                          <i class="fa fa-microphone"></i>
                        </div>
                        <span style="padding-right: 0px;">Mute</span>
                      </a>

                      <a v-if="audioPlay" class=" " href="#" @click="audiogroupPlaycall()" data-tippy-content="UnMute">
                        <div style="margin-right: 11px;font-size: 20px;color: #4d5363cc;">
                          <i class="fa fa-microphone-slash" aria-hidden="true"></i>
                        </div>
                        <span style="padding-right: 0px;">Unmute</span>
                      </a>

                    </li>
                    <li>
                      <a href="#" @click="creategroupPanle" data-toggle="modal" data-target="#exampleModalCenter">
                        <div style="margin-right: 11px;">
                          <img class="" src="../assets/images/icons/speaker.png" alt="Avatar" style="height: auto;border-radius: 0;" />
                        </div>
                        <span style="padding-right: 0px;">speaker</span>

                      </a>
                    </li>
                    <li>
                      <a href="#" @click="creategroupPanle" data-toggle="modal" data-target="#exampleModalCenter">
                        <div style="margin-right: 11px;">
                          <img class="" src="../assets/images/icons/screenshare.png" alt="Avatar" style="height: auto;border-radius: 0;" />
                        </div>
                        <span style="padding-right: 0px;">screen share</span>

                      </a>
                    </li>
                    <li>
                      <a href="#" @click="creategroupPanle" data-toggle="modal" data-target="#exampleModalCenter">
                        <div style="margin-right: 11px;">
                          <img class="" src="../assets/images/icons/record.png" alt="Avatar" style="height: auto;border-radius: 0;" />
                        </div>
                        <span style="padding-right: 0px;">record</span>

                      </a>
                    </li>
                    <li>
                      <a href="#" @click="creategroupPanle" data-toggle="modal" data-target="#exampleModalCenter">
                        <div style="margin-right: 11px;">
                          <img class="" src="../assets/images/icons/minutes.png" alt="Avatar" style="height: auto;border-radius: 0;" />
                        </div>
                        <span style="padding-right: 0px;">minutes</span>

                      </a>
                    </li>

                  </ul>
                </div>

              </ul>
              <ul style="float: right;">
                <li>
                  <div class="">
                    <a class="text-dark" href="#!" @click="fullgroupScreen()">
                      <img class="" src="../assets/images/icons/fullscreen.png" alt="Avatar" style="height: auto;border-radius: 0;" />
                    </a>
                  </div>
                </li>
                <li>
                  <div class="">
                    <a class="text-dark" href="#!" @click="minimizegroupScreen()" data-dismiss="modal" data-tippy-content="Zoom Screen">
                      <img class="" src="../assets/images/icons/minscreen.png" alt="Avatar" style="height: auto;border-radius: 0;" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div class="center-con text-center">
              <ul style="float: right;">
                <!--<li>
                          <a v-if="videoPause" class="icon-btn btn-light button-effect pause" href="#" @click="videoPausecall()" data-tippy-content="Hold">
                            <i class="fa fa-pause off" aria-hidden="true"></i>
                          </a>
                          <a v-if="videoPlay" class="icon-btn btn-light button-effect pause" href="#" @click="videoPlaycall()" data-tippy-content="Hold">
                            <i class="fa fa-play" aria-hidden="true"></i>
                          </a>
                        </li>-->
                <li>
                  <div style="padding: 7px;">
                    <a v-if="audioPause" class="" href="#" @click="audiogroupPausecall()" data-tippy-content="">
                      <img class="" src="../assets/images/icons/micfull.png" alt="Avatar" style="height: auto;border-radius: 0;" />
                    </a>

                    <a v-if="audioPlay" class=" " href="#" @click="audiogroupPlaycall()" data-tippy-content="UnMute">
                      <img class="" src="../assets/images/icons/crossmicfull.png" alt="Avatar" style="height: auto;border-radius: 0;" />
                    </a>
                  </div>

                  <div style="padding: 7px;">
                  <a v-if="groupVideoPause" class="" href="#" @click="groupPausecall()">
                      <img class="" src="../assets/images/icons/videocallfull.png" alt="Avatar" style="height: auto;border-radius: 0;" />
                    </a>
                    <a v-if="groupVideoPlay" class="" href="#" @click="videoPlaycall()">
                      <img class="" src="../assets/images/icons/crossvideocallfull.png" alt="Avatar" style="height: auto;border-radius: 0;" />
                    </a>
                  </div>
                  </br>
                  <div>
                    <a class="" id="groupchatopen" href="#" @click="groupstartchat()">
                      <img class="" src="../assets/images/icons/chatfull.png" alt="Avatar" style="height: auto;border-radius: 0;" />
                    </a>
                    <a class="icon-btn " id="groupchatclose" href="#" @click="grouphideCallchat()" style="display:none">
                      <img class="" src="../assets/images/chatclose.png" style="width: 60%;" alt="Avatar" />
                    </a>
                    </br>
                    </br>
                  </div>
                  <a class="icon-btn btn-danger button-effect btn-xl is-animating" href="#" @click="groupstopKCall()" data-dismiss="modal" data-tippy-content="Hangup">
                    <phone-icon size="1.5x" class="custom-class"></phone-icon>
                  </a>
                  <br>
                  <br>
                  <div id="basicUsage">{{formattedElapsedTime}}</div>
                </li>
                
              </ul>

            </div>

          </div>

          <div class="chitchat-main small-sidebar" id="groupcontents" style="display:none;width: 30%;float:right">

            <div class="chat-content tabto" id="groupstartchatsss">
              <div class=" messages custom-scroll active groupmessageschat groupmessageschat" id="groupchating" style="min-height: 450px!important;">

                <!-------- Dropzone ------>
                <vue-dropzone ref="myVueDropzone" @ondragleave="dragLeave(event)" id="dropzone" @vdropzone-success="afterComplete" v-on:vdropzone-sending="dragfileupload" :options="dropzoneOptions"> </vue-dropzone>
                <!-------- end -------->
                <loading :active.sync="isLoading" :can-cancel="true" :is-full-page="fullPage">

                </loading>
                <div class="contact-chat  ">
                  <ul class="chatappend" v-for="g_chat in groupchatdata" v-if="g_chat.groupId == singlegroup._id">
                    <h5 v-if="g_chat.messageType == 3 && g_chat.g_chatType == 3" style="text-align:center;padding: 10px;font-size: 10px;">
                      <span>{{chatTime(g_chat.createdAt)}}</span> <br><br> {{ g_chat.message }}</h5>
                    <li class="replies" style="padding-bottom:20px" v-else-if="g_chat.senderId._id == c_user._id">
                      <div class="media">
                        <div class="profile mr-4" style="margin-left: 0.5rem !important;width: 41px;height: 41px !important;padding: 2px;">
                          <img class="bg-img" src="../assets/images/contact/2.jpg" style="width: 35px !important;" alt="Avatar" /></div>
                        <div class="media-body">
                          <div class="contact-name">
                            <h5 style="font-size: 11px;">{{ c_user.name}}</h5>
                            <h6 style="font-size: 10px;">{{chatTime(g_chat.createdAt)}}</h6>

                            <ul class="msg-box" style="margin-top: 0px;margin-left: 8px;">
                              <li class="msg-setting-main">
                                <div class="msg-dropdown-main" v-if="g_chat.isDeleted != 1">
                                  <div class="msg-setting" :id="'msg-settingo2o'+g_chat._id" @click="msg_setting(g_chat._id)">
                                    <i class="ti-more-alt"></i>
                                  </div>

                                  <div class="msg-dropdown" :id="'msg-dropdowno2o'+g_chat._id" style="z-index: 99999;">
                                    <ul>
                                      <li v-if="g_chat.messageType != 1 && g_chat.messageType != 2">
                                        <a href="#" @click="editgroupchat(g_chat._id,g_chat.message)">
                                          <i class="fa fa-pencil"></i>edit</a>
                                      </li>
                                      <li>
                                        <a href="#" @click="groupquote(g_chat)">
                                          <i class="fa fa-share"></i>Quote</a>
                                      </li>

                                      <li v-if="g_chat.messageType != 1 && g_chat.messageType != 2">
                                        <a href="#" @click="copymsg(g_chat.message)" v-clipboard:copy="messagecopy" v-clipboard:success="onCopy" v-clipboard:error="onError">
                                          <i class="fa fa-clone"></i>copy</a>
                                      </li>
                                      <!--<li><a href="#"><i class="fa fa-star-o"></i>rating</a></li>-->
                                      <li>
                                        <a href="#" @click="groupmsgdelete(g_chat)">
                                          <i class="ti-trash"></i>delete</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>

                                <h5 v-if="g_chat.isDeleted == 1" :id="'sendergroup'+g_chat._id" style="font-size: 10px;padding-right: 10px;padding: 6px 10px;">message deleted</h5>
                                <h5 v-else-if="g_chat.messageType != 1 && g_chat.messageType != 2 && g_chat.chatType == 0" :id="'sendergroup'+g_chat._id" style="font-size: 10px;padding-right: 10px;padding: 6px 10px;">{{ g_chat.message }}</h5>
                                <h5 v-else-if="g_chat.messageType != 1 && g_chat.messageType != 2 && g_chat.chatType == 1" :id="'sendergroup'+g_chat._id" style="font-size: 10px;padding-right: 10px;padding: 6px 10px;">
                                  <span style="border-bottom: 1px solid;">‘‘{{g_chat.commentId.message}}’’</span><br> {{ g_chat.message }}</h5>
                                <br>
                                <a :href="hostname+'/images/chatImages/'+g_chat.message" :id="'sendergroup'+g_chat._id" v-if="g_chat.messageType == 1 && g_chat.isDeleted != 1" download>
                                  <img :src="hostname+'/images/chatImages/'+g_chat.message">
                                </a>

                                <a :href="hostname+'/images/chatImages/'+g_chat.message" :id="'sendergroup'+g_chat._id" v-if="g_chat.messageType == 2 && g_chat.isDeleted != 1" download><img src="../assets/images/fileIcon.png" style="width: 40px;"> {{ g_chat.message }}</a>

                              </li>

                            </ul>

                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="sent" style="padding-bottom:20px" v-else>
                      <div class="media">
                        <div class="profile mr-4" style="margin-left: 0.5rem !important;width: 41px;height: 41px !important;padding: 2px;">
                          <img class="bg-img" src="../assets/images/contact/2.jpg" style="width: 35px !important;" alt="Avatar" /></div>
                        <div class="media-body">
                          <div class="contact-name">
                            <h5 style="font-size: 10px;">{{ oncallFriend.name }}</h5>
                            <h6 style="font-size: 10px;">{{chatTime(g_chat.createdAt)}}</h6>
                            <ul class="msg-box" style="margin-top: 0px;margin-left: 8px;">
                              <li class="msg-setting-main">

                                <h5 v-if="g_chat.isDeleted == 1" :id="'receivero2o'+g_chat._id" style="font-size: 10px;padding-right: 10px;padding: 6px 10px;">message deleted</h5>
                                <h5 v-else-if="g_chat.messageType != 1 && g_chat.messageType != 2 && g_chat.chatType == 0" :id="'receiver'+g_chat._id" style="font-size: 10px;padding-right: 10px;padding: 6px 10px;">{{ g_chat.message }} </h5>
                                <h5 v-else-if="g_chat.messageType != 1 && g_chat.messageType != 2 && g_chat.chatType == 1" :id="'receivero2o'+g_chat._id" style="font-size: 10px;padding-right: 10px;padding: 6px 10px;">
                                  <span style="border-bottom: 1px solid;">‘‘{{g_chat.commentId.message}}’’</span><br> {{ g_chat.message }}</h5>
                                <br>
                                <a :href="hostname+'/images/chatImages/'+g_chat.message" :id="'receivero2o'+g_chat._id" v-if="g_chat.messageType == 1 && g_chat.isDeleted != 1" download>
                                  <img :src="hostname+'/images/chatImages/'+g_chat.message">
                                </a>
                                <a :href="hostname+'/images/chatImages/'+g_chat.message" :id="'receivero2o'+g_chat._id" v-if="g_chat.messageType == 2 && g_chat.isDeleted != 1"><img src="../assets/images/fileIcon.png" style="width: 40px;"> {{ g_chat.message }}</a>
                                <div class="msg-dropdown-main" v-if="g_chat.isDeleted != 1">
                                  <div class="msg-setting" :id="'msg-settingo2o'+g_chat._id" @click="msg_setting(g_chat._id)">
                                    <i class="ti-more-alt"></i>
                                  </div>
                                  <div class="msg-dropdown" :id="'msg-dropdowno2o'+g_chat._id" style="z-index: 99999;">
                                    <ul>

                                      <li>
                                        <a href="#" @click="groupquote(g_chat)">
                                          <i class="fa fa-share"></i>Quote</a>
                                      </li>

                                      <li v-if="g_chat.messageType != 1 && g_chat.messageType != 2">
                                        <a href="#" @click="copymsg(g_chat.message)" v-clipboard:copy="messagecopy" v-clipboard:success="onCopy" v-clipboard:error="onError">
                                          <i class="fa fa-clone"></i>copy</a>
                                      </li>

                                    </ul>
                                  </div>
                                </div>
                              </li>

                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>

                  </ul>

                </div>

              </div>
              <VEmojiPicker @select="selectGroupcallEmoji" class="" v-bind:class="{activeemoji: isActive}" style="bottom: 86px;" v-if="isActive" />
              <div class="message-input message-call" id="groupsinglemessage-input">
                <div class="replybox" v-if="replyBox == true">
                  <p style="padding: 7px; margin: 0;">‘‘{{chatreplydata.message}}’’
                    <span style="float:right;cursor: pointer;" @click="closegroupReplybox()">
                      <x-icon size="1.5x" class="custom-class"></x-icon>
                    </span>
                    <br>
                    <span style="margin-left: 6px;">
                      {{chatTime(chatreplydata.createdAt)}}
                    </span>
                  </p>
                </div>
                <div class="wrap emojis-main">

                  <div class="dot-btn dot-primary mr-3" style="margin-right: 0.3rem !important;">
                    <a class="icon-btn btn-outline-primary button-effect " style="height: 30px;width: 30px;" @click="showGroupemoji">
                      <smile-icon size="1.5x" class="custom-class"></smile-icon>
                    </a>
                  </div>

                  <label class="icon-btn btn-outline-primary mr-4" style="height: 30px;width: 30px;margin-right: 0.3rem !important;" for="fileupload">
                    <i class="fa fa-plus"></i>
                  </label>
                  <input type="file" id="fileupload" ref="groupmyFiles" style="display:none" @change="uploadfile($event)" multiple>

                  <input class="setemoj" id="setemoj" ref="afterClick" type="text" v-on:keyup="" @keyup.enter="groupchat()" v-model="groupmessage" style="font-size: 11px;width: calc(100% - 100px);" placeholder="Write your message..." />

                  <button class="submit icon-btn btn-primary disabled" style="height: 30px;width: 30px;" v-show="ongroupChat" @click="groupchat()" id="send-groupcallmsg" :disabled="not_working">
                    <send-icon size="1.5x" class="custom-class"></send-icon>
                  </button>
                  <button class="submit icon-btn btn-primary " style="display:none" v-show="onEditgroupclear" @click="cleargroupchat()">
                    <x-icon size="1.5x" class="custom-class"></x-icon>
                  </button>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <!-------------------------------------------- CLOSE GROUP CALL MODEL -------------------------------->

    <!---------------------------------- O2O VIDEO CALL MODEL ---------------------------------->

    <div class="o2ovideocallModel  viddiolog modal fade" id="o2ovideocall" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" id="o2omodalcall" role="document">
        <div class="modal-body" style="border: 3px solid white;padding: 0px 0px;">

          <div class="videocall o2obeforeopenChat call-modal" style="align-items: center;display: grid;">
            <div class="" style="text-align:center">
            <video id="videoOutput" poster="../assets/loaderGif.gif" class="remoteVideoWidth" style="width:100%" autoplay></video>
            <video id="remoteScreenshare" class="" style="width:100%;display:none"> </video>
               <div class="col-12" style="margin-top: 35px;text-align:center;width:100%;display:none" id="userbackground">
                <div  class="profile mainpanleProfile displayclass" style="">
                  <img class="bg-img" src="../assets/images/contact/1.jpg" alt="Avatar" style="border-radius: 30px;" />
                
                </div>

                    <h3 style="color:white">{{oncallFriend.name}}</h3>
              </div>
            </div>
            <!-- <img class="bg-img"  src="../assets/images/avtar/big/videocall_bg.jpg" alt="Avatar" /> -->
            <div class="small-image">
              <video id="local-video" style="width:250px" class="bg-img" autoplay></video>
            </div>
            <div id="o2odetail" class="media videocall-details" style="display:block">
              <ul class="calls float-left">
                <li class="call-option-toggle">
                  <a class="icon-btn option-btn" href="#" data-tippy-content="Quick action">
                    <more-vertical-icon size="1.5x" class="custom-class"></more-vertical-icon>
                  </a>
                </li>
                <div class="call-option-content" style="display:none">
                  <ul class="call-cont-setting" style="padding: 0px;margin-left: 14px;margin-bottom:-24px;border-radius: 5px;display: grid;box-shadow: 0px 0px 0px 1px #0000000f;">
                    <li>
                      <button type="button" class="calloption-close  close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </li>
                    <li>

                      <a href="#" @click="o2ostartchat()">
                        <div style="margin-right: 11px;">
                          <img class="" src="../assets/images/nav/chaticon.png" alt="Avatar" style="height: auto;border-radius: 0;" />
                          </i>
                        </div>
                        <span style="padding-right: 10px;">quick chat</span>

                      </a>
                    </li>
                    <li>
                      <a href="#" data-toggle="modal" data-target="#msgcallModal" data-keyboard="false" data-backdrop="static">
                        <div style="margin-right: 11px;">
                          <img class="" src="../assets/images/icons/videocall.png" alt="Avatar" style="height: auto;border-radius: 0;" />
                        </div>
                        <span style="padding-right: 14px;">video call</span>

                      </a>
                    </li>
                    <li>
                      <a href="#" @click="creategroupPanle" data-toggle="modal" data-target="#exampleModalCenter" data-keyboard="false" data-backdrop="static">
                        <div style="margin-right: 11px;">
                          <img class="" src="../assets/images/icons/addperson.png" alt="Avatar" style="height: auto;border-radius: 0;" />
                        </div>
                        <span style="padding-right: 0px;">add participant</span>

                      </a>
                    </li>
                    <li>
                      <a v-if="audioPause" class="" href="#" @click="audioPausecall()" data-tippy-content="">
                        <div style="margin-right: 11px;font-size: 20px;color: #4d5363cc;">
                          <i class="fa fa-microphone"></i>
                        </div>
                        <span style="padding-right: 0px;">Mute</span>
                      </a>

                      <a v-if="audioPlay" class=" " href="#" @click="audioPlaycall()" data-tippy-content="UnMute">
                        <div style="margin-right: 11px;font-size: 20px;color: #4d5363cc;">
                          <i class="fa fa-microphone-slash" aria-hidden="true"></i>
                        </div>
                        <span style="padding-right: 0px;">Unmute</span>
                      </a>

                    </li>
                    <li>
                      <a href="#" @click="creategroupPanle" data-toggle="modal" data-target="#exampleModalCenter">
                        <div style="margin-right: 11px;">
                          <img class="" src="../assets/images/icons/speaker.png" alt="Avatar" style="height: auto;border-radius: 0;" />
                        </div>
                        <span style="padding-right: 0px;">speaker</span>

                      </a>
                    </li>
                    <li>
                      <a href="#" id="share-screen" onclick="screenShare()">
                        <div style="margin-right: 11px;">
                          <img class="" src="../assets/images/icons/screenshare.png" alt="Avatar" style="height: auto;border-radius: 0;" />
                        </div>
                        <span style="padding-right: 0px;">screen share</span>

                      </a>
                    </li>
                    <li>
                      <a href="#" @click="creategroupPanle" data-toggle="modal" data-target="#exampleModalCenter">
                        <div style="margin-right: 11px;">
                          <img class="" src="../assets/images/icons/record.png" alt="Avatar" style="height: auto;border-radius: 0;" />
                        </div>
                        <span style="padding-right: 0px;">record</span>

                      </a>
                    </li>
                    <li>
                      <a href="#" @click="creategroupPanle" data-toggle="modal" data-target="#exampleModalCenter">
                        <div style="margin-right: 11px;">
                          <img class="" src="../assets/images/icons/minutes.png" alt="Avatar" style="height: auto;border-radius: 0;" />
                        </div>
                        <span style="padding-right: 0px;">minutes</span>

                      </a>
                    </li>

                  </ul>
                </div>

              </ul>
              <ul style="float: right;">
                <li>
                  <div class="">
                    <a class="text-dark" href="#!" @click="fullScreen()">
                      <img class="" src="../assets/images/icons/fullscreen.png" alt="Avatar" style="height: auto;border-radius: 0;" />
                    </a>
                  </div>
                </li>
                <li>
                  <div class="">
                    <a class="text-dark" href="#!" @click="minimizeScreen()" data-dismiss="modal" data-tippy-content="Zoom Screen">
                      <img class="" src="../assets/images/icons/minscreen.png" alt="Avatar" style="height: auto;border-radius: 0;" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div class="center-con text-center">
              <ul style="float: right;">
                <!--<li>
                          <a v-if="videoPause" class="icon-btn btn-light button-effect pause" href="#" @click="videoPausecall()" data-tippy-content="Hold">
                            <i class="fa fa-pause off" aria-hidden="true"></i>
                          </a>
                          <a v-if="videoPlay" class="icon-btn btn-light button-effect pause" href="#" @click="videoPlaycall()" data-tippy-content="Hold">
                            <i class="fa fa-play" aria-hidden="true"></i>
                          </a>
                        </li>-->
                <li>
                  <div style="padding: 7px;">
                    <a v-if="audioPause" class="" href="#" @click="audioPausecall()" data-tippy-content="">
                      <img class="" src="../assets/images/icons/micfull.png" alt="Avatar" style="height: auto;border-radius: 0;" />
                    </a>

                    <a v-if="audioPlay" class=" " href="#" @click="audioPlaycall()" data-tippy-content="UnMute">
                      <img class="" src="../assets/images/icons/crossmicfull.png" alt="Avatar" style="height: auto;border-radius: 0;" />
                    </a>
                  </div>
                  <div>
                    <a v-if="videoPause" class="" href="#" @click="videoPausecall()">
                      <img class="" src="../assets/images/icons/videocallfull.png" alt="Avatar" style="height: auto;border-radius: 0;" />
                    </a>
                    <a v-if="videoPlay" class="" href="#" @click="videoPlaycall()">
                      <img class="" src="../assets/images/icons/crossvideocallfull.png" alt="Avatar" style="height: auto;border-radius: 0;" />
                    </a>
                  </div>
                  <div style="padding: 7px;">
                    <a class="" id="o2ochatopen" href="#" @click="o2ostartchat()">
                      <img class="" src="../assets/images/icons/chatfull.png" alt="Avatar" style="height: auto;border-radius: 0;" />
                    </a>
                    <a class="icon-btn " style="height: 35px;width: 35px;border-radius: 15%;background:white;display:none" id="o2ochatclose" href="#" @click="o2ohideCallchat()">
                      <img class="" src="../assets/images/chatclose.png" style="width: 60%;" alt="Avatar" />
                    </a>
                    </br>
                    </br>
                  </div>
                  <a class="icon-btn btn-danger button-effect btn-xl is-animating" href="#" @click="o2ostopKCall()" data-dismiss="modal" data-tippy-content="Hangup">
                    <phone-icon size="1.5x" class="custom-class"></phone-icon>
                  </a>
                  <br>
                  <br>
                  <div id="basicUsage">{{formattedElapsedTime}}</div>
                </li>
                <!--<li>

                          <a v-if="audioPause" class="icon-btn btn-light button-effect pause" href="#" @click="audioPausecall()" data-tippy-content="">
                            <i class="fa fa-microphone"></i>
                          </a>

                          <a v-if="audioPlay" class="icon-btn btn-light button-effect " href="#" @click="audioPlaycall()" data-tippy-content="UnMute">
                            <i class="fa fa-microphone-slash" aria-hidden="true"></i>
                          </a>
                        </li>-->
              </ul>

            </div>

          </div>

          <div class="chitchat-main small-sidebar" id="o2ocontents" style="display:none;width: 30%;float:right">

            <div class="chat-content tabto" id="startchatsss">
              <div class=" messages custom-scroll active messageschat o2omessageschat" id="o2ochating" style="min-height: 450px!important;">

                <!-------- Dropzone ------>
                <vue-dropzone ref="myVueDropzone" @ondragleave="dragLeave(event)" id="dropzone" @vdropzone-success="afterComplete" v-on:vdropzone-sending="dragfileupload" :options="dropzoneOptions"> </vue-dropzone>
                <!-------- end -------->
                <loading :active.sync="isLoading" :can-cancel="true" :is-full-page="fullPage">

                </loading>
                <div class="contact-chat  ">
                  <ul class="chatappend" v-for="chat in friendchat">
                    <h5 v-if="chat.messageType == 3 && chat.chatType == 3" style="text-align:center;padding: 10px;font-size: 10px;">
                      <span>{{chatTime(chat.createdAt)}}</span> <br><br> {{ chat.message }}</h5>
                    <li class="replies" style="padding-bottom:20px" v-else-if="chat.senderId._id == c_user._id">
                      <div class="media">
                        <div class="profile mr-4" style="margin-left: 0.5rem !important;width: 41px;height: 41px !important;padding: 2px;">
                          <img class="bg-img" src="../assets/images/contact/2.jpg" style="width: 35px !important;" alt="Avatar" /></div>
                        <div class="media-body">
                          <div class="contact-name">
                            <h5 style="font-size: 11px;">{{ c_user.name}}</h5>
                            <h6 style="font-size: 10px;">{{chatTime(chat.createdAt)}}</h6>

                            <ul class="msg-box" style="margin-top: 0px;margin-left: 8px;">
                              <li class="msg-setting-main">
                                <div class="msg-dropdown-main" v-if="chat.isDeleted != 1">
                                  <div class="msg-setting" :id="'msg-settingo2o'+chat._id" @click="msg_setting(chat._id)">
                                    <i class="ti-more-alt"></i>
                                  </div>

                                  <div class="msg-dropdown" :id="'msg-dropdowno2o'+chat._id" style="z-index: 99999;">
                                    <ul>
                                      <li v-if="chat.messageType != 1 && chat.messageType != 2">
                                        <a href="#" @click="eidtchat(chat._id,chat.message)">
                                          <i class="fa fa-pencil"></i>edit</a>
                                      </li>
                                      <li>
                                        <a href="#" @click="quote(chat)">
                                          <i class="fa fa-share"></i>Quote</a>
                                      </li>

                                      <li v-if="chat.messageType != 1 && chat.messageType != 2">
                                        <a href="#" @click="copymsg(chat.message)" v-clipboard:copy="messagecopy" v-clipboard:success="onCopy" v-clipboard:error="onError">
                                          <i class="fa fa-clone"></i>copy</a>
                                      </li>
                                      <!--<li><a href="#"><i class="fa fa-star-o"></i>rating</a></li>-->
                                      <li>
                                        <a href="#" @click="msgdelete(chat)">
                                          <i class="ti-trash"></i>delete</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>

                                <h5 v-if="chat.isDeleted == 1" :id="'sendero2o'+chat._id" style="font-size: 10px;padding-right: 10px;padding: 6px 10px;">message deleted</h5>
                                <h5 v-else-if="chat.messageType != 1 && chat.messageType != 2 && chat.chatType == 0" :id="'sendero2o'+chat._id" style="font-size: 10px;padding-right: 10px;padding: 6px 10px;">{{ chat.message }}</h5>
                                <h5 v-else-if="chat.messageType != 1 && chat.messageType != 2 && chat.chatType == 1" :id="'sendero2o'+chat._id" style="font-size: 10px;padding-right: 10px;padding: 6px 10px;">
                                  <span style="border-bottom: 1px solid;">‘‘{{chat.commentId.message}}’’</span><br> {{ chat.message }}</h5>
                                <br>
                                <a :href="hostname+'/images/chatImages/'+chat.message" :id="'sendero2o'+chat._id" v-if="chat.messageType == 1 && chat.isDeleted != 1" download>
                                  <img :src="hostname+'/images/chatImages/'+chat.message">
                                </a>

                                <a :href="hostname+'/images/chatImages/'+chat.message" :id="'sendero2o'+chat._id" v-if="chat.messageType == 2 && chat.isDeleted != 1" download><img src="../assets/images/fileIcon.png" style="width: 40px;"> {{ chat.message }}</a>

                              </li>

                            </ul>

                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="sent" style="padding-bottom:20px" v-else>
                      <div class="media">
                        <div class="profile mr-4" style="margin-left: 0.5rem !important;width: 41px;height: 41px !important;padding: 2px;">
                          <img class="bg-img" src="../assets/images/contact/2.jpg" style="width: 35px !important;" alt="Avatar" /></div>
                        <div class="media-body">
                          <div class="contact-name">
                            <h5 style="font-size: 10px;">{{ oncallFriend.name }}</h5>
                            <h6 style="font-size: 10px;">{{chatTime(chat.createdAt)}}</h6>
                            <ul class="msg-box" style="margin-top: 0px;margin-left: 8px;">
                              <li class="msg-setting-main">

                                <h5 v-if="chat.isDeleted == 1" :id="'receivero2o'+chat._id" style="font-size: 10px;padding-right: 10px;padding: 6px 10px;">message deleted</h5>
                                <h5 v-else-if="chat.messageType != 1 && chat.messageType != 2 && chat.chatType == 0" :id="'receiver'+chat._id" style="font-size: 10px;padding-right: 10px;padding: 6px 10px;">{{ chat.message }} </h5>
                                <h5 v-else-if="chat.messageType != 1 && chat.messageType != 2 && chat.chatType == 1" :id="'receivero2o'+chat._id" style="font-size: 10px;padding-right: 10px;padding: 6px 10px;">
                                  <span style="border-bottom: 1px solid;">‘‘{{chat.commentId.message}}’’</span><br> {{ chat.message }}</h5>
                                <br>
                                <a :href="hostname+'/images/chatImages/'+chat.message" :id="'receivero2o'+chat._id" v-if="chat.messageType == 1 && chat.isDeleted != 1" download>
                                  <img :src="hostname+'/images/chatImages/'+chat.message">
                                </a>
                                <a :href="hostname+'/images/chatImages/'+chat.message" :id="'receivero2o'+chat._id" v-if="chat.messageType == 2 && chat.isDeleted != 1"><img src="../assets/images/fileIcon.png" style="width: 40px;"> {{ chat.message }}</a>
                                <div class="msg-dropdown-main" v-if="chat.isDeleted != 1">
                                  <div class="msg-setting" :id="'msg-settingo2o'+chat._id" @click="msg_setting(chat._id)">
                                    <i class="ti-more-alt"></i>
                                  </div>
                                  <div class="msg-dropdown" :id="'msg-dropdowno2o'+chat._id" style="z-index: 99999;">
                                    <ul>

                                      <li>
                                        <a href="#" @click="quote(chat)">
                                          <i class="fa fa-share"></i>Quote</a>
                                      </li>

                                      <li v-if="chat.messageType != 1 && chat.messageType != 2">
                                        <a href="#" @click="copymsg(chat.message)" v-clipboard:copy="messagecopy" v-clipboard:success="onCopy" v-clipboard:error="onError">
                                          <i class="fa fa-clone"></i>copy</a>
                                      </li>

                                    </ul>
                                  </div>
                                </div>
                              </li>

                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>

                  </ul>
                  <img class="" src="../assets/images/contact/2.jpg" alt="Avatar" v-if="isSeen == true && friendCallchat.length > 0" style="width: 20px;float:right" />
                </div>

                <span v-show="typing" class="">{{ oncallFriend.name }} is typing ...</span>

              </div>
              <VEmojiPicker @select="selectchatEmoji" class="" v-bind:class="{activeChatemoji: ischatemojiActive}" style="bottom: 86px;" v-if="ischatemojiActive" />
              <div class="message-input message-call" id="o2osinglemessage-input">
                <div class="replybox" v-if="replyBox == true">
                  <p style="padding: 7px; margin: 0;">‘‘{{chatreplydata.message}}’’
                    <span style="float:right;cursor: pointer;" @click="closeReplybox()">
                      <x-icon size="1.5x" class="custom-class"></x-icon>
                    </span>
                    <br>
                    <span style="margin-left: 6px;">
                      {{chatTime(chatreplydata.createdAt)}}
                    </span>
                  </p>
                </div>
                <div class="wrap emojis-main">

                  <div class="dot-btn dot-primary mr-3" style="margin-right: 0.3rem !important;">
                    <a class="icon-btn btn-outline-primary button-effect " style="height: 30px;width: 30px;" @click="showChatemoji">
                      <smile-icon size="1.5x" class="custom-class"></smile-icon>
                    </a>
                  </div>

                  <label class="icon-btn btn-outline-primary mr-4" style="height: 30px;width: 30px;margin-right: 0.3rem !important;" for="fileupload">
                    <i class="fa fa-plus"></i>
                  </label>
                  <input type="file" id="fileupload" ref="o2omyFiles" style="display:none" @change="uploadfile($event)" multiple>

                  <input class="setemoj" id="setemoj" ref="afterClick" type="text" v-on:keyup="" @keyup.enter="chat()" v-model="message" style="font-size: 11px;width: calc(100% - 100px);" placeholder="Write your message..." />

                  <button class="submit icon-btn btn-primary disabled" style="height: 30px;width: 30px;" v-show="onChat" @click="chat()" id="send-msg" disabled="disabled">
                    <send-icon size="1.5x" class="custom-class"></send-icon>
                  </button>
                  <button class="submit icon-btn btn-primary " style="display:none" v-show="onEditclear" @click="clearchat()">
                    <x-icon size="1.5x" class="custom-class"></x-icon>
                  </button>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <!-------------------------------------------- CLOSE O2O CALL MODEL -------------------------------->

    <!---------------------------------- O2O AUDIO CALL MODEL ---------------------------------->

    <div class="o2ovideocallModel  viddiolog modal fade" id="o2oaudiocall" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered " id="o2omodalaudiocall" role="document">
        <div class="modal-body">

          <div class="videocall o2obeforeopenChat call-modal">
            <audio style="display:none" id="audioOutput" autoplay controls></audio>
            <audio style="display:none" id="audioInput" autoplay controls></audio>
            <img class="bg-img" src="../assets/images/avtar/big/videocall_bg.jpg" alt="Avatar" />
            <div class="small-image"></div>
            <div id="o2oaudiodetail" class="media videocall-details">

              <div id="audiobasicUsage">{{formattedElapsedTime}}</div>
              <div class="zoomcontent minimizeclass">
                <a class="text-dark" href="#!" @click="audiominimizeScreen()" data-dismiss="modal" data-tippy-content="Zoom Screen">
                  <minimize-2-icon size="1.5x" class="custom-class"></minimize-2-icon>
                </a>
              </div>
            </div>
            <div class="center-con text-center">
              <ul>
                <li>

                  <a v-if="audioPause" class="icon-btn btn-light button-effect pause" href="#" @click="audioPausecall()" data-tippy-content="">
                    <i class="fa fa-microphone"></i>
                  </a>

                  <a v-if="audioPlay" class="icon-btn btn-light button-effect " href="#" @click="audioPlaycall()" data-tippy-content="UnMute">
                    <i class="fa fa-microphone-slash" aria-hidden="true"></i>
                  </a>
                  <li>
                    <a class="icon-btn btn-danger button-effect btn-xl is-animating" href="#" @click="o2ostopKCall()" data-dismiss="modal" data-tippy-content="Hangup">
                      <phone-icon size="1.5x" class="custom-class"></phone-icon>
                    </a>
                  </li>

                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </div>

    <!-------------------------------------------- CLOSE O2O Audio CALL MODEL -------------------------------->

    <!--------------------------------------------- OPEN BOARDCAST MODEL-------------------------------->
    <div class="videocallModel  viddiolog modal fade" id="broadcastvideocall" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modelbefore" id="modalcall" role="document">
        <div class="modal-body">

          <div class="videocall beforeopenChat call-modal">
            <video id="broadCastVideo" autoplay style="width:100%"></video>
            <img class="bg-img" src="../assets/images/avtar/big/videocall_bg.jpg" alt="Avatar" />

            <div class="media videocall-details">
              <div class="usersprof">
                <div class="profile"><img class="bg-img" src="../assets/images/avtar/2.jpg" alt="Avatar" /></div>
                <div class="profile"><img class="bg-img" src="../assets/images/avtar/3.jpg" alt="Avatar" /></div>
              </div>
              <div class="media-body">

              </div>
              <div id="basicUsage"></div>

            </div>
            <div class="center-con text-center">
              <ul>
                <li>
                  <a class="icon-btn btn-light button-effect pause" href="#" data-tippy-content="Hold">
                    <i class="ti-control-pause"></i>
                  </a>
                </li>
                <li>
                  <a class="icon-btn btn-danger button-effect btn-xl is-animating" href="#" id="broadcaststop" @click="on2Callclose()" data-dismiss="modal" data-tippy-content="Hangup">
                    <phone-icon size="1.5x" class="custom-class"></phone-icon>
                  </a>
                </li>
                <li>
                  <a class="icon-btn btn-light button-effect mic" href="#" data-tippy-content="Mute">
                    <i class="fa fa-microphone"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="text-right" style="float: right;position: absolute;bottom: 107px;right: 22px;">
              <ul>
                <li>
                  <div id="chatopen" class="">
                    <a class="icon-btn btn-light button-effect pause" id="" href="#" @click="showCallchat()" data-tippy-content="Hold">
                      <message-square-icon size="1.5x" class="custom-class"></message-square-icon>
                    </a>
                  </div>
                  <a class="icon-btn btn-light button-effect pause" id="chatclose" href="#" @click="hideCallchat()" style="display:none" data-tippy-content="Hold">
                    <img class="" src="../assets/images/chatclose.png" style="width: 60%;" alt="Avatar" />
                  </a>
                </li>

              </ul>
            </div>
          </div>
          <div class="chitchat-main small-sidebar" id="contents" style="display:none;width: 30%;float: right;">

            <div class="chat-content tabto" id="startboardcastchat">
              <div class=" messages custom-scroll active boardcastchat" id="brochatings" style="min-height:108vh !important;">

                <!-------- Dropzone ------>
                <vue-dropzone ref="myVueDropzone" @ondragleave="dragLeave(event)" id="dropzone" @vdropzone-success="afterComplete" v-on:vdropzone-sending="dragfileupload" :options="dropzoneOptions"> </vue-dropzone>
                <!-------- end -------->
                <loading :active.sync="isLoading" :can-cancel="true" :is-full-page="fullPage">

                </loading>
                <div class="contact-chat  ">
                  <ul class="chatappend" v-for="chat in broadcastChat">
                    <li class="replies" style="padding-bottom:20px" v-if="chat.senderId._id == c_user._id">
                      <div class="media">
                        <div class="profile mr-4">
                          <img class="bg-img" src="../assets/images/contact/2.jpg" alt="Avatar" /></div>
                        <div class="media-body">
                          <div class="contact-name">
                            <h5>{{ c_user.name}}</h5>
                            <h6>{{chatTime(chat.createdAt)}}</h6>

                            <ul class="msg-box">
                              <li class="msg-setting-main">

                                <h5>{{ chat.message }}</h5>

                              </li>
                              <!-- <li class="msg-setting-main">
                                    <h5> your personal assistant to help you &#128512; </h5>
                                    <div class="badge badge-success sm ml-2"> R</div>
                                    <div class="msg-dropdown-main">
                                      <div class="msg-setting"><i class="ti-more-alt"></i></div>
                                      <div class="msg-dropdown"> 
                                        <ul>
                                          <li><a href="#"><i class="fa fa-share"></i>forward</a></li>
                                          <li><a href="#"><i class="fa fa-clone"></i>copy</a></li>
                                          <li><a href="#"><i class="fa fa-star-o"></i>rating</a></li>
                                          <li><a href="#"><i class="ti-trash"></i>delete</a></li>
                                        </ul>
                                      </div>
                                    </div>
                                  </li> -->
                            </ul>

                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="sent" style="padding-bottom:20px" v-else>
                      <div class="media">
                        <div class="profile mr-4"><img class="bg-img" src="../assets/images/contact/2.jpg" alt="Avatar" /></div>
                        <div class="media-body">
                          <div class="contact-name">
                            <h5>{{chat.senderId.name}}</h5>
                            <h6>{{chatTime(chat.createdAt)}}</h6>
                            <ul class="msg-box">
                              <li class="msg-setting-main">

                                <h5>{{ chat.message }} </h5>

                              </li>
                              <!--   <li class="msg-setting-main">
                                    <h5> it should from elite auther &#128519;</h5>
                                    <div class="badge badge-success sm ml-2"> R</div>
                                    <div class="msg-dropdown-main">
                                      <div class="msg-setting"><i class="ti-more-alt"></i></div>
                                      <div class="msg-dropdown"> 
                                        <ul>
                                          <li><a href="#"><i class="fa fa-share"></i>forward</a></li>
                                          <li><a href="#"><i class="fa fa-clone"></i>copy</a></li>
                                          <li><a href="#"><i class="fa fa-star-o"></i>rating</a></li>
                                          <li><a href="#"><i class="ti-trash"></i>delete</a></li>
                                        </ul>
                                      </div>
                                    </div>
                                  </li> -->
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>

                  </ul>
                  <img class="" src="../assets/images/contact/2.jpg" alt="Avatar" v-if="isSeen == true && friendCallchat.length > 0" style="width: 20px;float:right" />
                </div>

              </div>
              <VEmojiPicker @select="broadcastchatEmoji" class="" v-bind:class="{activeChatemoji: isbroadchatemojiActive}" style="bottom: 86px;" v-if="isbroadchatemojiActive" />
              <div id="broadcast-input" class="message-input message-call">

                <div class="wrap emojis-main">

                  <div class="dot-btn dot-primary mr-3">
                    <a class="icon-btn btn-outline-primary button-effect " @click="showbroadcastChatemoji">
                      <smile-icon size="1.5x" class="custom-class"></smile-icon>
                    </a>
                  </div>

                  <input class="setemoj" id="setemoj" ref="afterClick" type="text" @keyup.enter="broadCastmsgchat()" v-model="broadCastmsg" placeholder="Write your message..." />

                  <button class="submit icon-btn btn-primary disabled" v-show="onbroChat" @click="broadCastmsgchat()" id="send-broadcastmsg" disabled="disabled">
                    <send-icon size="1.5x" class="custom-class"></send-icon>
                  </button>
                  <button class="submit icon-btn btn-primary " style="display:none" v-show="onEditclear" @click="clearchat()">
                    <x-icon size="1.5x" class="custom-class"></x-icon>
                  </button>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <!----------------------------Show Participent  Model -------------->

    <div class="modal fade fev-addcall-main add-popup" id="showPresenter" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title">
              Broadcast</h2>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div v-if="presentersData.length > 0" v-for="presenter in presentersData">
              <p> {{presenter.preName}}
                <button class="btn btn-success btn-xs" style="float:right;padding: 5px 16px;cursor: pointer;" @click="becomeViewer(presenter.preId)"> Join</button>
              </p>
            </div>
            <div v-else>
              <p> No Data</p>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-danger button-effect btn-sm" type="button" data-dismiss="modal">Cancel</button>
            <button class="btn btn-primary button-effect btn-sm" @click="startBroadcasting()" type="button">Start Broadcasting</button>
          </div>
        </div>
      </div>
    </div>

    <!---------------------------- Close Show Participent  Model -------------->

    <!----------------------------- Show Broadcast Password  Model-------------->

    <div class="modal fade fev-addcall-main add-popup" id="sBroadcast" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title">
              <i class="fa fa-signal text-light-icon"></i> Start Broadcasting
            </h2>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="default-form">
              <h4>Set password for live stream:</h4>
              <div class="form-group" style="display: flex;margin-top: 27px;">
                <span>Yes</span>
                <input class="form-control" id="exampleInputEmail12" name="password" type="radio" style="height: 19px;width:30%;margin-bottom: 0px;" value="Yes" />
              </div>
              <div class="form-group" style="display: flex;">
                <span style="width: 21px;">No</span>
                <input class="form-control" id="exampleInputEmail12" name="password" type="radio" style="height: 19px;width:30%;margin-bottom: 0px;" value="No" checked/>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button class="btn btn-danger button-effect btn-sm" type="button" data-dismiss="modal">Back</button>
            <button class="btn btn-primary button-effect btn-sm" type="button" data-toggle="modal" data-target="#broadcastvideocall" data-keyboard="false" data-backdrop="static" @click="startBroadcasting()">Broadcasting Now</button>
          </div>
        </div>
      </div>
    </div>

    <!---------------------------------------- Close Broadcast Password  Model -------------------->

    <!--------------------------------------------- CLOSE BOARDCAST MODEL -------------------------------->

    <div class="modal fade" id="confercall" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-body">
          <div class="conferencecall call-modal"><img class="bg-img" src="../assets/images/avtar/big/audiocall.jpg" alt="Avatar" />
            <div class="center-con text-center">
              <div class="usersprof">
                <div class="profile"><img class="bg-img" src="../assets/images/avtar/2.jpg" alt="Avatar" /></div>
                <div class="profile"><img class="bg-img" src="../assets/images/avtar/3.jpg" alt="Avatar" /></div>
                <div class="profile"><img class="bg-img" src="../assets/images/avtar/5.jpg" alt="Avatar" /></div>
                <div class="profile"><img class="bg-img" src="../assets/images/avtar/big/videocall_bg.jpg" alt="Avatar" /></div>
              </div>
              <p>Incoming Call</p>
              <h3>Conference Call</h3>
              <ul>
                <li>
                  <a class="icon-btn btn-danger button-effect btn-xl is-animating cancelcall" href="#" data-dismiss="modal">
                    <phone-icon size="1.5x" class="custom-class"></phone-icon>
                  </a>
                </li>
                <li>
                  <a class="icon-btn btn-success button-effect btn-xl is-animating" href="#">
                    <video-icon size="1.5x" class="custom-class"></video-icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="confvideocl" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <div class="row confimg">
              <div class="col-6">
                <div class="vclimg"><img class="bg-img" src="../assets/images/avtar/big/videocall_bg.jpg" alt="Avatar" /></div>
              </div>
              <div class="col-6">
                <div class="vclimg"><img class="bg-img" src="../assets/images/avtar/5.jpg" alt="Avatar" /></div>
              </div>
              <div class="col-6">
                <div class="vclimg"><img class="bg-img" src="../assets/images/avtar/2.jpg" alt="Avatar" /></div>
              </div>
              <div class="col-6">
                <div class="vclimg"><img class="bg-img" src="../assets/images/avtar/3.jpg" alt="Avatar" /></div>
              </div>
            </div>
          </div>
          <div class="modal-footer clfooter">
            <div id="basicUsage3">00:00:00</div>
            <ul>
              <li>
                <a class="icon-btn btn-light button-effect" href="#" data-tippy-content="speaker">
                  <i data-feather="volume-2"></i>
                </a>
              </li>
              <li>
                <a class="icon-btn btn-light button-effect" href="#" data-tippy-content="Camera">
                  <i data-feather="camera-off"></i>
                </a>
              </li>
              <li>
                <a class="icon-btn btn-light button-effect" href="#" data-tippy-content="Add Call">
                  <i data-feather="user-plus"></i>
                </a>
              </li>
              <li>
                <a class="icon-btn btn-danger button-effect btn-sm is-animating" href="#" data-dismiss="modal" data-tippy-content="Hangup">
                  <phone-icon size="1.5x" class="custom-class"></phone-icon>
                </a>
              </li>
              <li>
                <a class="icon-btn btn-light button-effect" href="#" data-tippy-content="Disable Video">
                  <i data-feather="video-off"></i>
                </a>
              </li>
              <li>
                <a class="icon-btn btn-light button-effect mic" href="#" data-tippy-content="Mute">
                  <i data-feather="mic-off"></i>
                </a>
              </li>
              <li>
                <a class="icon-btn btn-light button-effect" href="#" data-tippy-content="Hold">
                  <i data-feather="pause"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade audiorcvcall" id="audiorcvcall" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-body">
          <div class="audiocall2 call-modal"><img class="bg-img" src="../assets/images/avtar/big/audiocall.jpg" alt="Avatar" />
            <div class="center-con text-center">
              <div id="basicUsage2">00:00:00</div>
              <div class="title2">Josephin water</div>
              <h6>log angelina california</h6>
              <ul>
                <li>
                  <a class="icon-btn btn-light button-effect mute" href="#" data-tippy-content="Mute">
                    <i class="fa fa-microphone"></i>
                  </a>
                </li>
                <li>
                  <a class="icon-btn btn-light button-effect mute" href="#" data-tippy-content="Speaker">
                    <i class="fa fa-volume-up"></i>
                  </a>
                </li>
                <li>
                  <a class="icon-btn btn-danger button-effect btn-xl is-animating" href="#" data-tippy-content="Hangup" data-dismiss="modal">
                    <phone-icon size="1.5x" class="custom-class"></phone-icon>
                  </a>
                </li>
                <li>
                  <a class="icon-btn btn-light button-effect" href="#" data-tippy-content="Add Call">
                    <i data-feather="user-plus"></i>
                  </a>
                </li>
                <li>
                  <a class="icon-btn btn-light button-effect" href="#" data-tippy-content="Pause">
                    <i data-feather="pause"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

 <div class="modal fade fev-addcall-main add-popup" id="addMeetingmodal" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title">
              Create Meeting</h2>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="default-form">
              <div class="row">
              <div class="col-8">
              <div class="form-group">
                <span>Meeting Title:</span>
                <input class="form-control" id="exampleInputEmail12" type="text" placeholder="Give it a name" />
              </div>
              </div>
                <div class="col-4">
              <div class="form-group">
                <span>Time Zone:</span>
                <input class="form-control" id="examplemsg2" type="text" placeholder="Select timezone" />
              </div>
            </div>
              <div class="col-8">
              <div class="form-group">
                <span>Meeting Topic:</span>
                <textarea id="" class="form-control" name="w3review" placeholder="What is this meeting for?" rows="3" cols="50">
                 </textarea>
               
              </div>
              </div>
                <div class="col-4">
              <div class="form-group">
                <span>Notification Time:</span>
                <input class="form-control" id="examplemsg2" type="text" placeholder="Select notification time" />
              </div>
            </div>
              <div class="col-4">
              <div class="form-group">
                <span>Date:</span>
                <input class="form-control" id="exampleInputEmail12" type="text" placeholder="DD / MM / YYYY" />
              </div>
              </div>
                <div class="col-4">
              <div class="form-group">
                <span>Time:</span>
                <input class="form-control" id="examplemsg2" type="text" placeholder="HH : MM : SS" />
              </div>
            </div>
            <div class="col-4">
              <div class="form-group">
                <span>Duration:</span>
                <input class="form-control" id="examplemsg2" type="text" placeholder="HH : MM" />
              </div>
            </div>
              <div class="col-6">
              <div class="form-group">
                <span>Meeting ID:</span>
                <input class="form-control" id="exampleInputEmail12" type="text" placeholder="@123 - 456 - 7890" />
              </div>
              </div>
                <div class="col-6">
              <div class="form-group">
                <span>Meeting Password:</span>
                <input class="form-control" id="examplemsg2" type="text" placeholder="* * * * * * * *" />
              </div>
            </div>
             <div class="col-12">
              <div class="form-group">
                <span>Add Particapant</span>
               <label class="btn btn-sm btn-primary" style="position: absolute;top: 26px;left: 22px;">Invite Members</label> <input class="form-control"style="padding: 15px 138px;" id="examplemsg2" type="text" placeholder="Select Participants" />
              </div>
            </div>
              <div class="col-12">
              <div class="form-group">
                <span>Add Particapant</span><br>
                <div style="border: 1px #E5EAF9 solid;height: 45px;padding: 7px;border-radius: 3px;">
              <label for="upload" class="btn btn-sm btn-primary">Attach File</label>
              <input type="file" class="text-center form-control-file custom_file" id="upload" name="user_image">
              <label for="file_default">&nbsp; &nbsp; Upload refrence file </label>
              <label for="file_name"><b></b></label>
              </div>
              </div>
            </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            
            <button  class="btn addMeeting" >
            <span style="color: white;padding-right: 8px;">
              <i class="fa fa-plus" aria-hidden="true"></i></span> 
              <span style="color: white;">Create Meeting </span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade fev-addcall-main add-popup" id="addcallmodal" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title">
              Add Contact</h2>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="default-form">
              <div class="form-group">
                <h5>Email or Username</h5>
                <input class="form-control" id="exampleInputEmail12" type="text" placeholder="Josephin water" />
              </div>
              <div class="form-group">
                <h5>Contact number</h5>
                <input class="form-control" id="examplemsg2" type="number" placeholder="12345678912" />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button class="btn btn-danger button-effect btn-sm" type="button" data-dismiss="modal">Cancel</button>
            <button class="btn btn-primary button-effect btn-sm" type="button">Add contact</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade add-popup todo-main-modal" id="todoModal" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title">
              Welcome to Chitchat</h2>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="default-form">
              <div class="todo-task">
                <h5>Felling Lonely</h5>
                <div class="todo-main-content">
                  <div class="form-group">
                    <input type="checkbox" aria-label="Checkbox for following text input" />
                    <input class="w-100" id="user_input123" type="text" placeholder="Fill Your Fillings " />
                  </div>
                  <div class="drop-picker">
                    <div class="dropdown currency" tabindex="1">
                      <div class="select">
                        <span>Assign To</span>
                      </div>
                      <input type="hidden" name="currency" />
                      <ul class="dropdown-menu">
                        <li class="dropdown-divider">
                          <div class="fa fa-user text-muted"></div>
                          <h5 class="text-muted">Assign To</h5>
                        </li>
                        <li>Josephin john</li>
                        <li>Lynetin john</li>
                        <li>Sufiya john</li>
                        <li>Jhon john</li>
                      </ul>
                    </div>
                    <input class="datepicker-here form-control digits" type="url" data-language="en" placeholder="Due date" />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button class="btn btn-danger button-effect btn-sm" type="button">Save</button>
            <button class="btn btn-primary button-effect btn-sm" type="button" data-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade add-popup create-todo-main-modal" id="createtodoModal" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title">
              Today's ToDo</h2>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="default-form">
              <div class="todo-task">
                <h5>Felling Lonely</h5>
                <div class="todo-main-content">
                  <div class="form-group">
                    <input class="w-100" id="user_input123" v-model="todo" type="text" placeholder="Fill Your Fillings " />
                  </div>
                   <div class="form-group">
                       <select class="custom-scroll" name="" v-model="assignName">
                      <option selected value="">Assign To</option>
                      <template v-for="item in friendsdata">
                      <option :value="item">{{item.name}}</option>
                      </template>
                    </select>
                  </div>
                   <div class="form-group">
                      <input type="date" style="width:100%" name="" v-model="assignDate">
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button class="btn btn-danger button-effect btn-sm" type="button" @click="saveTodo()">Save</button>
            <button class="btn btn-primary button-effect btn-sm" type="button" data-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade add-popup msg-chat-modal" id="msgchatModal" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title">
              <img class="" src="../assets/images/nav/newchat.png" alt="Avatar" style="height: auto;border-radius: 0;" /> New Chat</h2>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div style="margin-right: -10px;margin-left: -10px;">
              <div class="input-group">
                <input class="form-control modelsearch" type="text" placeholder="Search ..." />
              </div>
            </div>
            <div class="form-group mb-0 mt-2">
              <h5>A</h5>
              <ul class="chat-main custom-scroll">
                <li v-for="friends in orderedUsers" v-if="friends._id != c_user._id || friends.friendReqStatus == 1" class="init" @click="startchat(friends)" :id="'friend'+friends._id" data-to="blank" data-dismiss="modal" style="cursor: pointer;width: 100%;    padding-left: 0px;padding-right: 5px;">
                  <div class="chat-box">
                    <div v-if="friends.onlineStatus == 1" class="profile" v-bind:class="{ online: friends.pStatus == 0, unreachable : friends.pStatus == 1, busy: friends.pStatus == 2, offline: friends.pStatus == 3, offline: friends.pStatus == 4 }">
                     <img class="bg-img" v-if="friends.user_image"  :src="hostname+'images/chatImages/'+friends.user_image" alt="Avatar" /> 

                       <img class="bg-img" v-else  src="../assets/images/contact/2.jpg"alt="Avatar" /></div>
                    <div v-else class="profile offline">
                      <img class="bg-img" v-if="friends.user_image"  :src="hostname+'images/chatImages/'+friends.user_image" alt="Avatar" /> 

                       <img class="bg-img" v-else  src="../assets/images/contact/2.jpg"alt="Avatar" />
                    </div>

                    <div class="details" style="padding-left: 73px;">
                      <h5>{{friends.name}}</h5>
                      <h6 :id="'f_typing'+friends._id" v-if="friends.latestMsg">{{ friends.latestMsg.message }}</h6>
                      <h6 v-else>Start Chat</h6>
                    </div>

                    <div class="date-status">
                      <h6 class="todayDate">{{isToday(friends.updatedByMsg)}}</h6>
                      <div v-if="friends.usCount != 0" class="badge badge-primary sm">{{friends.usCount}}</div>
                      <h6 class="font-success status" v-else-if="friends.seenStatus == 1 "> Seen</h6>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade add-popup msg-chat-modal" id="msgcallModal" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title">
              <img class="" src="../assets/images/nav/newcall.png" alt="Avatar" style="height: auto;border-radius: 0;" /> New Call</h2>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div style="margin-right: -10px;margin-left: -10px;">
              <div class="input-group">
                <input class="form-control modelsearch" type="text" placeholder="Search ..." />
              </div>
            </div>
            <div class="form-group mb-0 mt-2">
              <h5>A</h5>
              <ul class="call-log-main custom-scroll">
                <li style="width: 100%;padding-left: 0px; padding-right: 11px;" v-for="friends in orderedUsers" v-if="friends._id != c_user._id">
                  <div class="call-box">
                    <div v-if="friends.onlineStatus == 1" class="profile" v-bind:class="{ online: friends.pStatus == 0, unreachable : friends.pStatus == 1, busy: friends.pStatus == 2, offline: friends.pStatus == 3, offline: friends.pStatus == 4 }">
                       <img class="bg-img" v-if="friends.user_image"  :src="hostname+'images/chatImages/'+friends.user_image" alt="Avatar" /> 

                       <img class="bg-img" v-else  src="../assets/images/contact/2.jpg"alt="Avatar" /></div>
                    <div v-else class="profile offline">
                      <img class="bg-img" v-if="friends.user_image"  :src="hostname+'images/chatImages/'+friends.user_image" alt="Avatar" /> 

                       <img class="bg-img" v-else  src="../assets/images/contact/2.jpg"alt="Avatar" />
                    </div>
                    <div class="details">
                      <h5>{{friends.name }}</h5>
                      <h6>
                        <i data-feather="arrow-down-left"></i>{{isToday(friends.updatedByMsg)}}</h6>
                    </div>
                    <div class="call-status">
                      <!--<div class="icon-btn btn-outline-success button-effect btn-sm">
                          <phone-icon size="1.5x" class="custom-class"></phone-icon>
                        </div>-->
                      <a class="icon-btn btn-light button-effect" href="#" data-tippy-content="Quick Audio Call" data-toggle="modal" data-keyboard="false" data-backdrop="static" data-target="#o2oaudiocall" @click="videostartCall(friends,'audio')">
                        <phone-icon size="1.5x" class="custom-class"></phone-icon>
                      </a>
                      <a class="icon-btn btn-light button-effect" href="#" @click="videostartCall(friends,'video')" data-tippy-content="Quick Video Call" data-toggle="modal" data-keyboard="false" data-backdrop="static" data-target="#o2ovideocall">
                        <video-icon size="1.5x" class="custom-class"></video-icon>
                      </a>
                    </div>
                  </div>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="newGroupCall" class="modal fade" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div id='join'>
            <h1>Join a Room</h1>
            <!-- <form onsubmit="register(); return false;" accept-charset="UTF-8"> -->
            <p>
              <input v-model="groupUser" type="text" name="name" value="" id="name" placeholder="Username" required>
            </p>
            <p>
              <input v-model="groupRoomName" type="text" name="room" value="" id="roomName" placeholder="Room" required>
            </p>
            <p class="submit">
              <input type="submit" @click="registerGroCall()" name="commit" value="Join!">
            </p>
            <!-- </form> -->
          </div>

          <!-- <div class="modal-footer" style="background-color: aliceblue;"> -->
          <div id="room" style="display: none;">
            <h2 id="room-header"> Room Name here</h2>
            <div id="participants"></div>
            <input type="button" id="button-leave" onclick="leaveRoom()" value="Leave room">
          </div>
          <!-- </div> -->
        </div>
      </div>
    </div>

  </div>
</template>

<script>


import Vue from 'vue';
import $ from 'jquery';
import JQuery from 'jquery';
import 'bootstrap';
import feather from 'feather-icons';
import Popper from 'popper.js';
import VueSocketIO from 'vue-socket.io';
import socketio from 'socket.io-client';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import InfiniteLoading from 'vue-infinite-loading';
import 'feather-icons/dist/feather.min.js';
import tippy from 'tippy.js';
import Toasted from 'vue-toasted';
import 'tippy.js/dist/tippy.css';
import moment from 'moment';
import _ from 'lodash';
import vueDropzone from 'vue2-dropzone';
//import Dropzone from "dropzone";
import 'vue2-dropzone/dist/vue2Dropzone.min.css';
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
import VEmojiPicker from 'v-emoji-picker';
import ApiService from '../services/api.service.js';
import AudioRecorder from 'vue-audio-recorder';
Vue.use(AudioRecorder);
import {
  ContentLoader,
  FacebookLoader,
  CodeLoader,
  BulletListLoader,
  InstagramLoader,
  ListLoader
} from 'vue-content-loader'
import {ClipboardIcon ,CameraIcon , UserIcon, VolumeXIcon, SlashIcon, FilePlusIcon, MonitorIcon, MessageCircleIcon, RadioIcon, Minimize2Icon, Trash2Icon, CheckIcon, AirplayIcon, AtSignIcon, PhoneIcon, VideoIcon, SmileIcon, MicIcon, SendIcon, MessageSquareIcon, UsersIcon, PlusCircleIcon, PlusIcon, PhoneIncomingIcon, PhoneOutgoingIcon, FileIcon, ClockIcon, ListIcon, GridIcon, BookIcon, XIcon, DownloadIcon, SearchIcon, StarIcon, MoreVerticalIcon, ArrowLeftIcon } from 'vue-feather-icons';
import carousel from 'vue-owl-carousel';

export default {
  name: 'MainComponent',
  components: {ClipboardIcon ,CameraIcon , UserIcon, VolumeXIcon, SlashIcon, FilePlusIcon, MonitorIcon, MessageCircleIcon, AudioRecorder, ContentLoader, InfiniteLoading, RadioIcon, Minimize2Icon, Trash2Icon, CheckIcon, VEmojiPicker, Loading, vueDropzone, carousel, PhoneIncomingIcon, PhoneIcon, VideoIcon, SmileIcon, MicIcon, SendIcon, MessageSquareIcon, UsersIcon, PlusCircleIcon, PlusIcon, PhoneOutgoingIcon, FileIcon, ClockIcon, ListIcon, GridIcon, BookIcon, XIcon, DownloadIcon, SearchIcon, StarIcon, MoreVerticalIcon, ArrowLeftIcon },
  props: [],
  data() {
    return {
      data: '',
      isConnected: false,
      socketMessage: '',
      friendsdata: [],
      searchUsers: [],
      userId: '',
      current_User: '',
      userImageName:'',
      singlefriend: {},
      searchFriend: '',
      showSearchfriends: false,
      showUsers: true,
      msgObj: {},
      message: '',
      friendchat: {},
      friendCallchat: {},
      chatdata: {},
      typing: false,
      groups: [],
      singlegroup: {},
      oncallGroup: {},
      groupdata: {},
      receiveGroupName: '',
      grouCallStatus: false,
      callGroup: {},
      groupSearch: '',
      groupmessage: '',
      groupmsgObj: {},
      groupchatdata: {},
      groupCallId: '',
      not_working: true,
      groupLoader: false,
      messagecopy: '',
      editChatid: '',
      onEditclear: false,
      onChat: true,
      onbroChat: true,
      editgroupChatid: '',
      onEditgroupclear: false,
      ongroupChat: true,
      dropzoneOptions: {
        url: 'https://peekvideochat.com:22000/chatFilesShare',
        thumbnailWidth: 100,
        thumbnailHeight: 100,
        maxFiles: 10,
        maxFilesize: 420,
        chunking: true,
        headers: { "My-Awesome-Header": "header value" }
      },
      formDatas: {},
      replyBox: false,
      chatreplydata: {},
      groupreplyBox: false,
      groupchatreplydata: {},
      groupformDatas: {},
      userdec: {},
      isLoading: false,
      fullPage: true,
      isSeen: false,
      isActive: false,
      ischatemojiActive: false,
      isbroadchatemojiActive: false,
      multiplemembers: [],
      multipleneewmembers: [],
      havegroup: false,
      groupmembers: '',
      groupName: '',
      groupRoomName: '',
      groupUser: '',
      addgroupData: {},
      showGrouptitle: true,
      editgTitle: false,
      groupIndex: '',
      showmembers: true,
      shownewmembers: false,
      nonGroupUsers: [],
      userid: '',
      dragAndDropCapable: false,
      windowHeight: 0,
      hostname: '',
      broadcastPassword: '',
      presenterPassword: '',
      broadcastingId: '',
      broadcastChat: [],
      presentersData: [],
      bcPresenterId: '',
      broadcastHtml: '',
      starterBroid: '',
      broadCastmsg: '',
      presenterId: '',
      oncallFriend: {},
      o2ostatus: false,
      groupstatus: false,
      elapsedTime: 0,
      timer: undefined,
      elapsedcallTime: 0,
      calltimer: undefined,
      callstatus: 0,
      audio: {},
      videoPause: true,
      videoPlay: false,
      audioPause: true,
      audioPlay: false,
      groupVideoPause:true,
      groupVideoPlay:false,
      callType: '',
      groupData: true,
      groupSearching: false,
      selectFriendStatus: false,
      todo:'',
      assignDate:'',
      assignName:'',
      myTodoList:[],
      TodoList:[],
      todoStatus:'',
      allMedia:[],
      allDocument:[],


    }

  },
  beforeCreate: function() {
    if (localStorage.getItem("userData") === null) {
      this.$router.push('/login')
    }
  },

  sockets: {
    connect: function() {
      console.log('socket connected successfully')
    },

    disconnect() {
      console.log('socket disconnected')
    },


    /////////////////////////////CHAT SECTION////////////////////////

    receivemsg(data) {
      //this.c_user._id == data.receiverId._id &&
      console.log(data);
      setTimeout(() => {
        $('#f_typing' + data.msgData.receiverId._id).html(data.msgData.message);
      }, 1500);


      if (this.c_user._id == data.msgData.receiverId._id && this.singlefriend._id == data.msgData.senderId._id) {

        this.friendchat.push(data.msgData);
        var messagetone = document.getElementById("messagetone");
        messagetone.play();
        messagetone.muted = false;
        // $('#f_typing'+data.msgData.receiverId._id).html(data.msgData.message);
        var container = this.$el.querySelector("#chating");
        $("#chating").animate({ scrollTop: container.scrollHeight + 7020 }, "fast");
        var container2 = this.$el.querySelector("#o2ochating");
        $("#o2ochating").animate({ scrollTop: container2.scrollHeight + 7020 }, "fast");
        var container3 = this.$el.querySelector("#o2oaudiochating");
        $("#o2oaudiochating").animate({ scrollTop: container3.scrollHeight + 7020 }, "fast");

        if (this.singlefriend.chatWithRefId == this.c_user._id) {
          //this.friendCallchat.push(data.msgData);

          this.isSeen = true;
          console.log('seen');
          setTimeout(() => {
            $('#f_typing' + data.userId).html(data.msgData.message);
          }, 2000);
        }

      }
      else if (this.c_user._id == data.selectFrienddata) {
        var messagetone = document.getElementById("messagetone");
        messagetone.play();
        messagetone.muted = false;
        const fdata = this.friendsdata.filter((obj) => {
          return data.userId === obj._id;
        }).pop();

        const userdec = this.friendsdata.filter((obj) => {
          return data.userId === obj._id;
        }).pop();
        userdec.updatedByMsg = new Date().toISOString();

        this.isSeen = false;
        fdata.usCount += 1;
        setTimeout(() => {
          $('#f_typing' + data.userId).html(data.msgData.message);
        }, 2000);

      }




    },

    receiverUserStatus(data) {
      if (!this.friendsdata) return false;
      console.log(data);

      const post = this.friendsdata.filter((obj) => {
        return data.userId === obj._id;
      }).pop();
      post.chatWithRefId = data.selectedUser;
    },

    receiveupdatechatmsg(updatedata) {
      const data = updatedata;
      const post = this.friendchat.filter((obj) => {
        return updatedata.chatid === obj._id;
      }).pop();
      post.message = data.message;

    },

    receiveid(data) {
      //if(this.singlefriend.chatWithRefId == this.c_user._id){
      this.$set(this.friendchat[this.friendchat.length - 1], '_id', data._id);
      // console.log(this.friendchat[this.friendchat.length - 1]);
      // }

    },

    lastchatobj_receive(data) {
      console.log(data);
      if (data) {
        if (data.isSeen == 1) {
          this.isSeen = true;
        } else {
          this.isSeen = false;
        }

      }
    },

    reciverdeletemsg(data) {

      const post = this.friendchat.filter((obj) => {
        return data._id === obj._id;
      }).pop();
      post.isDeleted = 1;
      $('#receiver' + data._id).html('message deleted');

    },

    //////////////////////END CHAT SECTION////////////////////////

    ///////////////////////GROUP SECTION/////////////////////////


    receiveGroups(data) {
    	//console.log(data);
      if (this.groups) {
      	 const post = data.groupMembers.filter((obj) => {
        return this.c_user._id === obj;
      }).pop();
      	if(post)
        this.groups.push(data.groupData);
      }

    },

    groupreceiveid(data) {
      console.log(data);
      this.$set(this.groupchatdata[this.groupchatdata.length - 1], '_id', data._id);
      console.log(this.groupchatdata[this.groupchatdata.length - 1]);
    },



    receivegroupmsg(data) {
      console.log(data);
      if (this.groupchatdata) {
        this.groupchatdata.push(data);

        var container = this.$el.querySelector("#group_chat_open");
        $("#group_chat_open").animate({ scrollTop: container.scrollHeight + 7020 }, "fast");
        var container2 = this.$el.querySelector("#groupchating");
        $("#groupchating").animate({ scrollTop: container2.scrollHeight + 7020 }, "fast");
      }
    },

    groupreceiveid(data) {
      console.log(data);
      this.$set(this.groupchatdata[this.groupchatdata.length - 1], '_id', data._id);
      console.log(this.groupchatdata[this.groupchatdata.length - 1]);
    },
    receiveupdateGroupchatmsg(updatedata) {
      const data = updatedata;
      const post = this.groupchatdata.filter((obj) => {
        return updatedata.chatid === obj._id;
      }).pop();
      post.message = data.message;

    },

    receiveGroupTitle(data) {
      const post = this.groups.filter((obj) => {
        return data._id === obj._id;
      }).pop();
      post.name = data.name;
      // this.singlegroup = data;
    },
    receivedeleteGroup(data) {
      this.groups = data;
      $('#startgroupchat').removeClass('active');
    },

    receiveupdateMembers(data) {
      for (var l = 0; l < this.groups.length; l++) {
        if (data.groupId == this.groups[l]._id) {
          console.log('a');
          for (var m = 0; m < this.groups[l].members.length; m++) {

            if (this.groups[l].members[m]._id == data.memberId) {
              console.log('b');
              let memberIndex = this.groups.indexOf(this.groups[l].members[m]);
              this.groups[l].members.splice(memberIndex, 1);

              if (this.c_user._id != data.userId)
                $('#showGroupsMembers').modal('hide')
              $('.modal-backdrop.fade.show').removeClass("modal-backdrop show");
              $('#startgroupchat').removeClass('active');
              // if user leaves group
              if (this.c_user._id == data.memberId) {
                console.log('c');
                $('#showGroupsMembers').modal('hide')
                $('.modal-backdrop.fade.show').removeClass("modal-backdrop show");
                $('#startgroupchat').removeClass('active');
                let groupIndex = this.groups.indexOf(this.groups[l]);
                this.groups.splice(groupIndex, 1);
                break;
              }
            }
          }
        }
      }
    },

    grpreciverdeletemsg(data) {
      // console.log(data);
      const post = this.groupchatdata.filter((obj) => {
        return data._id === obj._id;
      }).pop(post);
      //console.log(post);
      post.isDeleted = 1;
      $('#receiver' + data._id).html('message deleted');

    },
    ///////////////////////////////Group Call //////////////////////

    receiveGroupdetail(data) {
      console.log(data);
      if (data.userId != this.c_user._id) {

        const groupId = this.groups.filter((obj) => {
          console.log(data.groupId + '===' + obj._id);
          return data.groupId === obj._id;

        }).pop(groupId);
        this.receiveGroupName = data.groupName;
        this.groupCallId = data.groupCallid;
        console.log(groupId);
        if (groupId) {
          this.grouCallStatus = true;
          console.log(this.grouCallStatus);
          this.callGroup = groupId;
          $('#groupcallReceiver').modal('show');

        }
      }
    },
    //////////////////////////END GROUP SEECTION ///////////////



    starttyping(data) {

      const post = this.friendsdata.filter((obj) => {
        return data.selectFrienddata._id === obj._id;
      }).pop();

      console.log(post);
      if (post) {
        if (this.singlefriend._id == data.UserId && post._id == data.selectFrienddata._id) {
          this.typing = true;

        } else if (post._id == data.selectFrienddata._id) {
          const fdata = this.friendsdata.filter((obj) => {
            return data.UserId === obj._id;
          }).pop();
          // console.log(fdata);
          $('#f_typing' + data.UserId).html('<span style="color: green;">is typing ...</span>');
          this.typing = false;

        }
      }


    },

    stoptyping(data) {
      console.log(data);
      this.typing = false;
      if (data.selectFrienddata.latestMsg) {
        $('#f_typing' + data.UserId).html(data.selectFrienddata.latestMsg.message);
      }
      else {
        $('#f_typing' + data.UserId).html('Start Chat');
      }
    },

    changestatuslogin(data) {
      console.log(data);
      const post = this.friendsdata.filter((obj) => {
        return data === obj._id;
      }).pop();

      if (post) {
        post.onlineStatus = 1;
      }
    },

    changestatuslogout(data) {
      console.log(data);
      const post = this.friendsdata.filter((obj) => {
        return data === obj._id;
      }).pop();
      if (post) {
        post.onlineStatus = 0;
      }
    },

    ///////////////////////BROADCASTING SECTION/////////////////////////


    receiveClosepanle(data) {

      if (data == this.broadcastingId) {

        this.broadcastChat = [];
        $('#broadcastvideocall').modal('hide');
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
      }
    },

    receivebroadcastmsg(data) {
      console.log(data.receiverId + '==' + this.broadcastingId);
      if (data.receiverId == this.broadcastingId) {
        $('#chatopen').addClass('dot-btn dot-success grow');
        this.broadcastChat.push(data);
        var containers = this.$el.querySelector("#brochatings");
        console.log(containers.scrollHeight);
        $("#brochatings").animate({ scrollTop: containers.scrollHeight + 7020 }, "fast");
        console.log(this.broadcastChat);
      }
    },

    ///////////////////////O2O CALL SECTION/////////////////////////


    O2OReceiverPanal(data) {

      if (data.reciverid == this.c_user._id || data.friendId == this.c_user._id) {

        if (this.selectFriendStatus == false) {
          $('#startchat').css('opacity', '0');
        }
        console.log(data);
        var x = document.getElementById("outgoingcall");
        console.log(x);
        x.pause();
        x.muted = true;

        var incoming = document.getElementById("incommingcall");
        incoming.pause();
        incoming.muted = true;
        $('#showCallMin').hide();
        $('#audioshowCallMin').hide();
        $('#showcallModel' + data.stoperId).show();
        $('#o2ovideocall').modal('hide');
        $('#o2oaudiocall').modal('hide');
        this.checkreset();
        this.checkcallstop();
        this.reset();
        this.stop();
        $('#audiocallReceiver').modal('hide');
        $('#videocallReceiver').modal('hide');

        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
        var endtimes = $('#basicUsage').text();
          var endtime='';
      if(endtimes =='00:00:00'){
           endtime = 'Missed Call';
      }else{
        	endtime='Call Ended ' + endtimes;
      }
        this.$toasted.success(endtime, {
          theme: "toasted-primary",
          position: "top-center",
          duration: 7000
        })
        //this.o2ostopKCall();
        stopCall();
      }
    },

    O2OreceivestarTimer(data) {


      if (data.reciverid == this.c_user._id || data.friendId == this.c_user._id) {

        this.checkreset();
        this.checkcallstop();
        var x = document.getElementById("outgoingcall");
        x.pause();
        x.muted = true;
        var incoming = document.getElementById("incommingcall");
        incoming.pause();
        incoming.muted = true;
        $('#videocallReceiver').modal('hide');
        $('#audiocallReceiver').modal('hide');
        //$('body').removeClass('modal-open');
        //$('.modal-backdrop').remove();
        this.reset();
        this.start();
      setTimeout(function() {
       	console.log('sockettime out');
       	console.log(data.statuscall,'sockettimeffffffff out');
		if(data.statuscall == 'audio'){
			
				 webRtcO2OPeer.getLocalStream().getVideoTracks()[0].enabled = false;
				}else{
				 webRtcO2OPeer.getLocalStream().getVideoTracks()[0].enabled = true;
				}
        }, 5000);
      }
    },
    receivecallsendmsg(data) {
      if (data.reciverid == this.c_user._id || data.friendId == this.c_user._id) {
        this.friendchat.push(data.msgData);
        var messagetone = document.getElementById("messagetone");
        messagetone.play();
        messagetone.muted = false;
        var container3 = this.$el.querySelector("#o2oaudiochating");
        $("#o2oaudiochating").animate({ scrollTop: container3.scrollHeight + 7020 }, "fast");
      }
    },

    /////////////////////////////////// PAUSE AND PLAY VIDEO CALL ////////////////////////
    receivevideoPausecall(data) {
      if (data.reciverid == this.c_user._id || data.friendId == this.c_user._id) {
        console.log('opennnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn');
       //  webRtcO2OPeer.getLocalStream().getVideoTracks()[0].enabled = false;
        $('#videoOutput').hide(2000);
        $("#userbackground").show(2000);
      }
    },
    receivevideoPlaycall(data) {
      if (data.reciverid == this.c_user._id || data.friendId == this.c_user._id) {
        console.log('closeeeeeeeeeeeeee');
      //   webRtcO2OPeer.getLocalStream().getVideoTracks()[0].enabled = true;
        $("#userbackground").hide(2000);
        $('#videoOutput').show(2000);

      }
    },


    ///////////////////////////////// Call busy status ////////////////////////////	

    receiveupdateCallStatus(data) {
      console.log(data);

      if(data.friendId == this.c_user._id){
      	this.callType=data.statuscall;
        if(data.statuscall == 'audio'){
          this.videoPause = false;
          this.videoPlay = true;
          
          // if (webRtcO2OPeer)
          //   webRtcO2OPeer.getLocalStream().getVideoTracks()[0].enabled = false;

          $('#videoOutput').hide();
          $("#userbackground").show();
          $('#local-video').css('display', 'none');
        }else{
        	 
            this.videoPlay = false;
        	this.videoPause = true;
           $('#local-video').css('display', 'block');
        }
      }
      const myData = this.friendsdata.filter((obj) => {
        return data.userId === obj._id;
      }).pop();
      if (myData) {
        myData.callStatus = data.status;
      }
      const friendData = this.friendsdata.filter((obj) => {
        return data.friendId === obj._id;
      }).pop();
      if (friendData) {
        friendData.callStatus = data.status;
      }
    },
    /////////////////////////////////REQUEST UPDATE STATUS ////////////////////////////	

    receiveRequeststatus(data) {
      console.log(data);
      console.log(data._id + '==' + this.c_user._id);

      // ------------ [AMMAR] ---------------------------
      if (data._id == this.c_user._id) {
        const fdata = this.friendsdata.filter((obj) => {
          return data.myId === obj._id;
        }).pop();

        console.log(fdata);
        if (data.status == 2) {
          this.friendsdata.push(data.userObj);
        } else {
          fdata.friendReqStatus = data.status;
        }
      }
      // ------------ ******* ---------------------------

    },

  },


  computed: {
    orderedUsers: function() {
      return _.orderBy(this.friendsdata, 'updatedByMsg', 'desc')
    },

    orderedGroups: function() {
      return _.orderBy(this.groups, 'createdAt', 'desc')
    },
    filteredGrouplist() {
      return this.groups.filter(post => {
        return post.name.toLowerCase().includes(this.groupSearch.toLowerCase())
      })
    },
    formattedElapsedTime() {
      const date = new Date(null);
      date.setSeconds(this.elapsedTime / 1000);
      const utc = date.toUTCString();
      // console.log(utc.substr(-6,3));
      return utc.substr(utc.indexOf(":") - 2, 8);
    },

    checkcallTime() {
      const date = new Date(null);
      date.setSeconds(this.elapsedcallTime / 1000);
      const utc = date.toUTCString();
      //console.log(utc.substr(-6,3));
      this.callstatus = utc.substr(-6, 3);
      return utc.substr(-6, 3);
    },

  },


  watch: {
    callstatus() {
      console.log(this.callstatus);
      if (this.callstatus > 20) {
        this.o2ostopKCall();
        // var incoming = document.getElementById("incommingcall");
        //	incoming.pause();
        //	incoming.muted = true;
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
        $('#o2ovideocall').modal('hide');
        $('#o2oaudiocall').modal('hide');


      }
    },
    groupmessage() {

      if (this.groupmessage.length > 0) {
        this.not_working = false;
      } else {
        this.not_working = true;
      }
    },
    groupName() {

      if (this.groupName.length > 0) {
        this.havegroup = false;
        $('#groupcreateBtn').removeClass('disabled');
      } else {
        this.havegroup = true;
      }

    },
    groupSearch() {
      if (this.groupSearch.length > 0) {
        this.groupData = false;
        this.groupSearching = true;

      }
      else {
        this.groupData = true;
        this.groupSearching = false;
      }
    },
    broadCastmsg() {
      if (this.broadCastmsg.length > 0) {

        $('#send-broadcastmsg').removeClass('disabled').attr("disabled", false);
      } else {
        $('#send-broadcastmsg').addClass('disabled').attr("disabled", true);
      }
    },

    message: _.debounce(function() {
      this.$socket.emit('stopTyping', { selectFrienddata: this.singlefriend, UserId: this.c_user._id });
    }, 1500),

    searchFriend: _.debounce(function() {
      if (this.searchFriend.length > 0) {
        this.showUsers = false;
        this.showSearchfriends = true;
        this.friendSearch();
      }
      else {
        this.showSearchfriends = false;
        this.showUsers = true;
      }
    }, 500),
   

  },
  created() {
    setInterval(() => this.startTimer(), 2000);
  },

  methods: {
    //playSound () {
    //var sound= 'https://peekvideochat.com/outgoing_ringtone.mp3';
    // if(sound) {
    //   this.audio = new Audio(sound);
    //	console.log(this.audio);
    //   this.audio.play();
    //	this.audio.loop=true;
    // }
    // },
    start() {
      this.timer = setInterval(() => {
        this.elapsedTime += 1000;
      }, 1000);
    },
    stop() {
      clearInterval(this.timer);
    },
    reset() {
      this.elapsedTime = 0;
    },

    checkcallstart() {
      this.calltimer = setInterval(() => {
        this.elapsedcallTime += 1000;
      }, 1000);
    },
    checkcallstop() {
      clearInterval(this.calltimer);
    },
    checkreset() {
      this.elapsedcallTime = 0;
    },
    startTimer() {

      var result = returnPdata();
      // console.log(result);
      if (result.length == 0) {
        this.presentersData = [];
      }
      if (this.presentersData.length > result.length) {
        console.log('alert remove');

        for (var i = this.presentersData.length - 1; i >= 0; i--) {
          for (var j = 0; j < result.length; j++) {
            if (this.presentersData[i] && (this.presentersData[i].preId != result[j].preId)) {
              this.presentersData.splice(i, 1);
            }
          }
        }
      }


      for (var i = 0; i < this.friendsdata.length; i++) {
        for (var j = 0; j < result.length; j++) {

          if (this.friendsdata[i]._id == result[j].preId) {
            var exists = this.presentersData.some(function(field) {
              return field.preId === result[j].preId
            });
            if (!exists) {
              this.presentersData.push(result[j]);
            }

          }
        }
      }
      //console.log(this.presentersData);
    },
    o2oopenwindow(id) {
      window.open('/o2o?data=' + this.singlefriend._id, '_blank', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=1100,height=600');
    },

    selectEmoji(emoji) {
      alert(emoji.data)
      //this.emoj.push(emoji.data);
      this.groupmessage += emoji.data;
      console.log(this.groupmessage);

      this.not_working = false;
      $('#send-groupmsg').removeClass('disabled').attr("disabled", false);

    },

    selectGroupcallEmoji(emoji) {
      // alert(emoji.data)
      //this.emoj.push(emoji.data);
      this.groupmessage += emoji.data;
      console.log(this.groupmessage);

      this.not_working = false;
      $('#send-groupcallmsg').removeClass('disabled').attr("disabled", false);

    },

    selectchatEmoji(emoji) {
      // console.log(emoji.data)
      //this.emoj.push(emoji.data);
      this.message += emoji.data;
      console.log(this.message);

      $('#send-msg').removeClass('disabled').attr("disabled", false);

    },

    broadcastchatEmoji(emoji) {

      this.broadCastmsg += emoji.data;
      console.log(this.broadCastmsg);

      $('#send-broadcastmsg').removeClass('disabled').attr("disabled", false);

    },
    showGroupemoji() {
      this.isActive = !this.isActive;
    },

    showChatemoji() {
      this.ischatemojiActive = !this.ischatemojiActive;
    },

    showbroadcastChatemoji() {
      this.isbroadchatemojiActive = !this.isbroadchatemojiActive;
    },

    logout: function() {

      axios.post('/externalLogout/' + this.c_user._id)
        .then((responce) => {
          this.$socket.emit('logout', this.c_user._id);
          this.emptyChatWithId();
          this.$session.destroy();
          localStorage.removeItem("userData");
          localStorage.removeItem("presenterData");
          this.$router.push('/login')
        })
        .catch((error) => console.log(error));


    },

    onCopy: function(e) {

      this.$toasted.success('copied to clipboard', {
        theme: "toasted-primary",
        position: "bottom-center",
        duration: 5000
      })
    },

    onError: function(e) {
      alert('Failed to copy texts')
    },

    copymsg(msg) {
      this.messagecopy = msg;
    },

    isToday(date) {
      return moment(date).format('l');
    },
  docToday(date) {
      return moment(date).format('LL');
    },
    chatTime(date) {
      return moment(date).format('LT');
    },

    feedbackDictation() {

      var recognition = new webkitSpeechRecognition();
      var recognition = new webkitSpeechRecognition();
      console.log(recognition);
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.lang = 'ko';
      recognition.start();

      recognition.onresult = function(e) {
        alert(e.results[0][0].transcript);
        this.groupmessage = e.results[0][0].transcript;


        recognition.stop();
        //document.getElementById('labnol').submit();
      };

      recognition.onerror = function(e) {
        recognition.stop();
      }


    },

    emptyChatWithId() {
      axios.get('/emptyChatWithId/' + this.c_user._id)
        .then(responce => {
          this.isSeen = false;
        })
        .catch((error) => console.log(error));
    },

    getUsers() {
      ApiService.getUsers((data) => {
        this.friendsdata = data
      }, (response) => {
        //toastr.error("Oops, " + response.status + " " + response.statusText, "Users", toastrOptions);
      })

    },


    getfriends() {

      axios.get('/getUsers/' + this.c_user._id + '/0/5d4c07fb030f5d0600bf5c03')
        .then(responce => {
          this.friendsdata = responce.data.usersList;
          setTimeout(() => {
            this.$socket.emit('login', this.c_user._id);
          }, 2000);

          console.log(this.friendsdata);
        })
        .catch((error) => console.log(error));
      $('#singlemessage-input').hide();
    },


    usertab() {
      this.groupSearch = '';
      $('.init').removeClass('active');
      $('#message-input').hide();
      $('#singlemessage-input').hide();
      $('#startchat').hide();
      $('#group_chat').hide();
      $('#mainsearch').show();
      $('#mainchatpage').show();
    },
    chatTab() {
      $('.init').removeClass('active');
      $('#message-input').hide();
      $('#singlemessage-input').hide();
      $('#startchat').hide();
    },

    friendSearch() {

      axios.post('/friends/searchFriend/', {
        name: this.searchFriend,
        userId: this.c_user._id,
        lastUserTime: ''
      }).then(response => {
        console.log(response.data);
        this.searchUsers = response.data;
      }, function(err) {
        console.log('err', err);
        alert('error');
      })
    },
    registerGroCall() {

    },

    ///////////////////////////////////////  START CHAT SECTION //////////////////////////////////////


    startchat(friend) {
      $('#group_chat').hide();
    $('#mainchatpage').hide();
      $('#startchat').css('opacity', '1');
      this.selectFriendStatus = true;
      $('#startchat').show();
      $('#message-input').hide();
      $('#singlemessage-input').show();
      $('#chating').addClass('active');
      this.o2ostatus = false;
      var container = this.$el.querySelector("#chating");
      $("#chating").animate({ scrollTop: container.scrollHeight + 7020 }, "fast");

      this.isLoading = true;
      this.message = '';
      this.editChatid = '';
      this.onEditclear = false;
      this.onChat = true;
      this.chatreplydata = "";
      this.typing = false;
      $('#singlemessage-input').css("height", "96px");
      this.replyBox = false;
      this.singlefriend = friend;


      localStorage.setItem('tokenIs', this.c_user._id + '-' + this.singlefriend._id + '-' + this.c_user.name);
      localStorage.setItem('friendId', this.singlefriend._id);
      this.$socket.emit('updateUserSelection', {
        selectedUser: this.singlefriend._id,
        userId: this.c_user._id
      });
      const post = this.friendsdata.filter((obj) => {
        return this.singlefriend._id === obj._id;
      }).pop();
      post.usCount = 0;
      //console.log(post);
      // this.$set(this.singlefriend,'chatWithRefId',this.c_user._id);
      $('.init').removeClass("active");
      $('#friend' + friend._id).addClass("active");

      if (screen.width < 600) {
        $('#rightside').removeClass('active');
        // $('#rightside').addClass('off');
      }

      //$(".contact-chat").animate({ scrollTop: window.innerHeight }, "fast");
      this.friendchat = {};
      axios.get('/getChat/' + this.c_user._id + '/' + friend._id + '/50')
        .then(responce => {

          this.friendchat = responce.data;
          console.log(this.friendchat);
          this.$socket.emit('lastchatobj_send', this.friendchat[this.friendchat.length - 1]);
          var container = this.$el.querySelector("#chating");
          $("#chating").animate({ scrollTop: container.scrollHeight + 7020 }, "fast");
          if (this.friendchat[this.friendchat.length - 1].isSeen == 1) {
            this.isSeen = true;
          } else {
            this.isSeen = false;
          }

        })
        .catch((error) => console.log(error));
      setTimeout(() => {
        this.isLoading = false
      }, 1000)
      $('#mainchatpage').hide();

      $('#group_chat').hide();
      var container = this.$el.querySelector("#chating");
      $("#chating").animate({ scrollTop: container.scrollHeight + 7020 }, "fast");

      $('#startchat').addClass("active");

      $('.chitchat-container').toggleClass("mobile-menu");

    },


    chat: function(e) {

      console.log(this.o2ostatus);


      if (this.o2ostatus == true) {
        this.singlefriend = this.oncallFriend
      }
      this.ischatemojiActive = false;
      if (this.message) {
        if (this.editChatid) {

          this.msgObj = {

            message: this.message,
            chatid: this.editChatid

          };
          console.log(this.msgObj);

          this.$socket.emit('updatechatmsg', this.msgObj)
          // this.removecross();
          axios.post('/updateChat/' + this.editChatid, {
            msgData: this.msgObj
          }).then(response => {

          }, function(err) {
            console.log('err', err);
            alert('error');
          })

          this.message = '';
          this.editChatid = '';
          $('#send-msg').addClass('disabled').attr("disabled", "disabled");
        }

        else if (this.chatreplydata) {

          this.msgObj = {

            commentId: { _id: this.chatreplydata._id, message: this.chatreplydata.message, senderId: this.chatreplydata.senderId._id },
            messageType: 0,
            senderId: { _id: this.c_user._id },
            receiverId: { _id: this.singlefriend._id },
            senderName: this.c_user.name,
            message: this.message,
            createdAt: new Date().toISOString(),
            chatType: 1
          };
          if (this.singlefriend.chatWithRefId == this.c_user._id) {
            // alert('dasdasdas');
            this.$set(this.msgObj, 'isSeen', 1);
          }

          //console.log(this.msgObj);
          this.isSeen = false;
          this.friendchat.push(this.msgObj);
          //this.friendCallchat.push(this.msgObj);
          this.$socket.emit('sendmsg', {
            selectFrienddata: this.singlefriend._id,
            userId: this.c_user._id,
            msgData: this.msgObj
          })
          $('#f_typing' + this.singlefriend._id).html(this.msgObj.message);
          $('#singlemessage-input').css("height", "96px");
          this.replyBox = false;
          this.chatreplydata = "";
          axios.post('/chat', {
            msgData: this.msgObj,
            selectedUserData: this.singlefriend._id
          }).then(response => {
            this.$socket.emit('sendid', response.data)

            this.userdec = this.friendsdata.filter((obj) => {
              return this.singlefriend._id === obj._id;
            }).pop();
            this.userdec.updatedByMsg = new Date().toISOString();


            setTimeout(() => {
              const id = $(".active.init").attr("id");

              if (id != 'friend' + this.singlefriend._id) {
                $('.init').removeClass("active");
                setTimeout(() => {

                  $('#friend' + this.singlefriend._id).addClass("active");
                  setTimeout(() => {

                    //   $('.chat-main .active .details h6').html('<span>You : </span>' + response.data.message);
                  }, 200);

                }, 1);


              }
            }, 0);


          }, function(err) {
            console.log('err', err);
            alert('error');
          })
          var container = this.$el.querySelector("#chating");
          $("#chating").animate({ scrollTop: container.scrollHeight + 7020 }, "fast");
          var container2 = this.$el.querySelector("#o2ochating");
          $("#o2ochating").animate({ scrollTop: container2.scrollHeight + 7020 }, "fast");
          var container3 = this.$el.querySelector("#o2oaudiochating");
          $("#o2oaudiochating").animate({ scrollTop: container3.scrollHeight + 7020 }, "fast");

          this.message = '';
          $('#send-msg').addClass('disabled').attr("disabled", "disabled");
        }

        else {


          this.msgObj = {
            chatType: 0,
            isGroup: 0,
            messageType: 0,
            senderId: { _id: this.c_user._id },
            senderImage: '',
            receiverImage: '',
            receiverId: { _id: this.singlefriend._id },
            senderName: this.c_user.name,
            message: this.message,
            createdAt: new Date().toISOString(),
          };
          console.log(this.msgObj);
          if (this.singlefriend.chatWithRefId == this.c_user._id) {
            this.$set(this.msgObj, 'isSeen', 1);
            this.isSeen = true;
            console.log('seenddddddddd');
            const post = this.friendsdata.filter((obj) => {
              return this.singlefriend._id === obj._id;
            }).pop();
            post.usCount = 0;
          }
          else {
            console.log('unseen');
            this.isSeen = false;

          }

          //console.log(this.msgObj);
          //  this.isSeen = false;
          this.friendchat.push(this.msgObj);
          //this.friendCallchat.push(this.msgObj);
          this.$socket.emit('sendmsg', {
            selectFrienddata: this.singlefriend._id,
            userId: this.c_user._id,
            msgData: this.msgObj
          })
          //  $('#f_typing' + this.singlefriend._id).html(this.msgObj.message);
          this.$socket.emit('stopTyping', { selectFrienddata: this.singlefriend, UserId: this.c_user._id });
          axios.post('/chat', {
            msgData: this.msgObj,
            selectedUserData: this.singlefriend._id
          }).then(response => {
            this.$socket.emit('sendid', response.data)


            this.userdec = this.friendsdata.filter((obj) => {
              return this.singlefriend._id === obj._id;
            }).pop();
            this.userdec.updatedByMsg = new Date().toISOString();


            setTimeout(() => {
              const id = $(".active.init").attr("id");

              if (id != 'friend' + this.singlefriend._id) {
                $('.init').removeClass("active");
                setTimeout(() => {

                  $('#friend' + this.singlefriend._id).addClass("active");
                  setTimeout(() => {

                    // $('.chat-main .active .details h6').html('<span>You : </span>' + response.data.message);
                  }, 200);

                }, 1);


              }
            }, 0);


          }, function(err) {
            console.log('err', err);
            alert('error');
          })
          console.log(this.singlefriend._id);

          this.message = '';
          var container = this.$el.querySelector("#chating");
          $("#chating").animate({ scrollTop: container.scrollHeight + 7020 }, "fast");
          var container2 = this.$el.querySelector("#o2ochating");
          $("#o2ochating").animate({ scrollTop: container2.scrollHeight + 7020 }, "fast");
          var container3 = this.$el.querySelector("#o2oaudiochating");
          $("#o2oaudiochating").animate({ scrollTop: container3.scrollHeight + 7020 }, "fast");


          $('#send-msg').addClass('disabled').attr("disabled", "disabled");

        }
      }
    },



    dragfileupload(file, xhr, formData) {
      console.log(file);
      formData.append('senderId', this.c_user._id);
      formData.append('senderName', this.c_user.name);
      formData.append('friendId', this.singlefriend._id);
      formData.append('isGroup', 0);


    },

    afterComplete(file, response) {
      console.log(file);
      console.log(response.data);

      this.msgObj = {
        _id: response.data._id,
        chatType: 0,
        isSeen: 0,
        isGroup: 0,
        messageType: response.data.messageType,
        senderId: { _id: this.c_user._id },
        senderImage: '',
        receiverImage: '',
        receiverId: { _id: this.singlefriend._id },
        senderName: this.c_user.name,
        message: response.file[0].originalname,
        createdAt: new Date().toISOString(),
      };
      if (this.singlefriend.chatWithRefId == this.c_user._id) {
        // alert('dasdasdas');
        this.$set(this.msgObj, 'isSeen', 1);
      }

      console.log(this.msgObj);
      this.isSeen = false;
      this.friendchat.push(this.msgObj);
      var container = this.$el.querySelector("#chating");
      $("#chating").animate({ scrollTop: container.scrollHeight + 7020 }, "fast");
      this.$socket.emit('sendmsg', {
        selectFrienddata: this.singlefriend._id,
        userId: this.c_user._id,
        msgData: this.msgObj
      })
      this.userdec = this.friendsdata.filter((obj) => {
        return this.singlefriend._id === obj._id;
      }).pop();

      this.userdec.updatedByMsg = new Date().toISOString();


      setTimeout(() => {
        const id = $(".active.init").attr("id");

        if (id != 'friend' + this.singlefriend._id) {
          $('.init').removeClass("active");
          setTimeout(() => {

            $('#friend' + this.singlefriend._id).addClass("active");
            setTimeout(() => {

              // $('.chat-main .active .details h6').html('<span>You : </span>' + response.data.message);
            }, 200);

          }, 1);


        }
      }, 0);
      // this.$socket.emit('sendmsg', response.data )
      this.$refs.myVueDropzone.removeFile(file);
      $("#dropzone").css("display", "none");
      $("#groupdropzone").css("display", "none");
    },

    uploadfile(event) {
      console.log(event.target.value)
      let filesdata = this.$refs.myFiles.files;
      filesdata.forEach((file) => {
        console.log(file);
        let formDatas = new FormData();
        formDatas.append('file', file);
        formDatas.append('senderId', this.c_user._id);
        formDatas.append('senderName', this.c_user.name);
        formDatas.append('friendId', this.singlefriend._id);
        formDatas.append('isGroup', 0);

        console.log(formDatas);
        let config = {
          header: {
            'Content-Type': 'multipart/form-data'
          }
        }
        this.isLoading = true;
        axios.post('/chatFilesShare', formDatas, config).then((response) => {
          console.log(response.data);
          this.msgObj = {
            _id: response.data.data._id,
            chatType: 0,
            isSeen: 0,
            isGroup: 0,
            messageType: response.data.data.messageType,
            senderId: { _id: this.c_user._id },
            senderImage: '',
            receiverImage: '',
            receiverId: { _id: this.singlefriend._id },
            senderName: this.c_user.name,
            message: response.data.file[0].originalname,
            createdAt: new Date().toISOString(),
          };
          if (this.singlefriend.chatWithRefId == this.c_user._id) {
            // alert('dasdasdas');
            this.$set(this.msgObj, 'isSeen', 1);
          }

          console.log(this.msgObj);
          this.isSeen = false;
          this.friendchat.push(this.msgObj);
          this.isLoading = false;
          var container = this.$el.querySelector("#chating");
          $("#chating").animate({ scrollTop: container.scrollHeight + 7020 }, "fast");
          this.$socket.emit('sendmsg', {
            selectFrienddata: this.singlefriend._id,
            userId: this.c_user._id,
            msgData: this.msgObj
          })
          this.userdec = this.friendsdata.filter((obj) => {
            return this.singlefriend._id === obj._id;
          }).pop();
          this.userdec.updatedByMsg = new Date().toISOString();


          setTimeout(() => {
            const id = $(".active.init").attr("id");

            if (id != 'friend' + this.singlefriend._id) {
              $('.init').removeClass("active");
              setTimeout(() => {

                $('#friend' + this.singlefriend._id).addClass("active");
                setTimeout(() => {

                  // $('.chat-main .active .details h6').html('<span>You : </span>' + response.data.message);
                }, 200);

              }, 1);


            }
          }, 0);
        }, function(err) {
          console.log('err', err);
          alert('error');
        })
      })
    },


    eidtchat(id, message) {
      this.message = message;
      this.editChatid = id;
      $('#singlemessage-input').css("height", "96px");
      this.replyBox = false;
      this.$nextTick(function() {
        this.$refs.afterClick.focus();
      });
      this.onEditclear = true;
      this.onChat = false;

    },

    clearchat() {
      this.onEditclear = false;
      this.onChat = true;
      this.message = '';
      this.editChatid = '';
    },


    removecross() {

      if (this.onEditclear == true) {
        this.onEditclear = false;
        // this.message = '';
        this.onChat = true;
        $('#send-msg').addClass('disabled').attr("disabled", "disabled")
      } else {
        this.$socket.emit('msgtyping', { selectFrienddata: this.singlefriend, UserId: this.c_user._id });
      }

    },

    msgdelete(data) {
      this.$socket.emit('senderdeletemsg', data);
      this.onEditclear = false;
      this.message = '';
      $('#singlemessage-input').css("height", "96px");
      this.replyBox = false;
      $('#sender' + data._id).html('message deleted');
      console.log(data._id);
      axios.get('/deleteMsg/' + data._id + '/0')
        .then((responce) => console.log(responce))
        .catch((error) => console.log(error));

    },
    quote(chatdata) {
      this.chatreplydata = chatdata;
      this.onEditclear = false;
      this.message = '';
      $('#singlemessage-input').css("height", "140px");
      this.replyBox = true;
      this.$nextTick(function() {
        this.$refs.afterClick.focus();
      });
    },

    closeReplybox() {
      $('#singlemessage-input').css("height", "96px");
      this.replyBox = false;
    },

    ///////////////////////////////////////  END CHAT SECTION //////////////////////////////////////

    ///////////////////////////////////////  START GROUP SECTION //////////////////////////////////////

    getgroups() {

      if (this.orderedGroups.length == 0) {
        this.groupLoader = true;
        axios.get('/getCreatedGroups/' + this.c_user._id + '/5d4c07fb030f5d0600bf5c03')
          .then(responce => {

            this.groupLoader = false;
            this.groups = responce.data;
            console.log(responce.data);

          }, function(err) {
            console.log('err', err);
            alert('error');
          });
      }
   $('#group_chat').show();
   $('#mainchatpage').hide();
      $('#group_chat').addClass("active");
      $('.group_chat').removeClass("active");

      $('#startchat').removeClass('active');
      $('#mainsearch').hide();
      $('#message-input').hide();
      $('#singlemessage-input').hide()
      this.replyBox = false;
    },

    getgroupsfirst() {
$('#group_chat').hide();
      if (this.orderedGroups.length == 0) {
        this.groupLoader = true;
        axios.get('/getCreatedGroups/' + this.c_user._id + '/5d4c07fb030f5d0600bf5c03')
          .then(responce => {

            this.groupLoader = false;
            this.groups = responce.data;
            console.log(responce.data);

          }, function(err) {
            console.log('err', err);
            alert('error');
          });
      }

    },


    startgroupchat(group, index) {
      $('#group_chat').hide();
      $('#singlemessage-input').hide();
      $('#message-input').show();
      $('.group_chat').removeClass("active");
      $('#group_data' + group._id).addClass("active");
      $('#group_chat').removeClass("active");

      this.singlegroup = group;
      this.groupmembers = group.members.length;
      this.groupIndex = index;
      console.log(this.groupIndex);
      this.userid = this.c_user._id;
      console.log(group._id);
      this.groupchatreplydata = "";
      this.editgroupChatid = "";
      this.nonGroupUsers = [];
      this.multipleneewmembers = [];
      this.shownewmembers = false;
      this.showmembers = true;

      var container = this.$el.querySelector("#group_chat_open");
      $("#group_chat_open").animate({ scrollTop: container.scrollHeight + 7020 }, "fast");
      //$('#friend'+friend._id).addClass("active");
      // $(".contact-chat").animate({ scrollTop: window.innerHeight }, "fast");
      axios.get('/getGroupChat/' + group._id + '/50')
        .then((responce) => this.groupchatdata = responce.data)
        .catch((error) => console.log(error));
      $('#startchat').removeClass("active");
      $('#startgroupchat').addClass("active");
      $('#mainchatpage').hide();
      $('.group_chat_open').addClass("active");
      var container = this.$el.querySelector("#group_chat_open");
      $("#group_chat_open").animate({ scrollTop: container.scrollHeight + 7020 }, "fast");

      $('.chitchat-container').toggleClass("mobile-menu");
    },

    groupchat: function(e) {
      this.isActive = false;
      if (this.groupmessage) {
        if (this.editgroupChatid) {

          this.msgObj = {

            message: this.groupmessage,
            chatid: this.editgroupChatid

          };
          console.log(this.msgObj);

          this.$socket.emit('updateGroupchatmsg', this.msgObj)

          axios.post('/updateGroupChat/' + this.editgroupChatid, {
            msgData: this.msgObj
          }).then(response => {

          }, function(err) {
            console.log('err', err);
            alert('error');
          })

          this.groupmessage = '';
          this.editgroupChatid = '';
          $('#send-msg').addClass('disabled').attr("disabled", "disabled");
        }

        else if (this.groupchatreplydata) {

          this.groupmsgObj = {

            commentId: { _id: this.groupchatreplydata._id, message: this.groupchatreplydata.message, senderId: this.groupchatreplydata.senderId },
            messageType: 0,
            senderId: { _id: this.c_user._id, name: this.c_user.name },
            senderName: this.c_user.name,
            message: this.groupmessage,
            groupId: this.singlegroup._id,
            createdAt: new Date().toISOString(),
            chatType: 1,
            isGroup: 1,
            isDeleted: 0
          };

          this.$socket.emit('sendgroupmsg', this.groupmsgObj);

          axios.post('/groupChat', this.groupmsgObj).then(response => {

            console.log(response.data);
            this.$socket.emit('groupsendid', response.data)
            $('#message-input').css("height", "96px");
            this.groupreplyBox = false;
            this.groupchatreplydata = '';
            //$('.chat-main .active .details h6').html('<span>You : </span>' + response.data.message);

          }, function(err) {
            console.log('err', err);
            alert('error');
          })
          var container = this.$el.querySelector("#group_chat_open");
          $("#group_chat_open").animate({ scrollTop: container.scrollHeight + 7020 }, "fast");
          this.groupmessage = '';


        }

        else {
          this.groupmsgObj = {
            chatType: 0,
            isGroup: 1,
            senderId: { _id: this.c_user._id, name: this.c_user.name },
            senderName: this.c_user.name,
            message: this.groupmessage,
            groupId: this.singlegroup._id,
            isDeleted: 0,
            messageType: 0
          };
          console.log(this.groupmsgObj);
          this.$socket.emit('sendgroupmsg', this.groupmsgObj);

          axios.post('/groupChat', this.groupmsgObj).then(response => {

            console.log(response.data);
            this.$socket.emit('groupsendid', response.data)

            //  $('.chat-main .active .details h6').html('<span>You : </span>' + response.data.message);

          }, function(err) {
            console.log('err', err);
            alert('error');
          })
          var container = this.$el.querySelector("#group_chat_open");
          $("#group_chat_open").animate({ scrollTop: container.scrollHeight + 7020 }, "fast");
          this.groupmessage = '';
        }
      }
    },


    editgroupchat(id, message) {
      console.log(id + 'edit id');
      this.closegroupReplybox();
      this.groupmessage = message;
      this.editgroupChatid = id;

      this.$nextTick(function() {
        this.$refs.groupafterClick.focus();
      });
      this.onEditgroupclear = true;
      this.ongroupChat = false;

    },

    cleargroupchat() {
      this.onEditgroupclear = false;
      this.ongroupChat = true;
      this.groupmessage = '';
      this.editgroupChatid = '';
    },

    groupremovecross() {

      this.onEditgroupclear = false;
      this.ongroupChat = true;
      $('#send-msg').addClass('disabled').attr("disabled", "disabled")
    },

    groupmsgdelete(data) {
      this.closegroupReplybox();
      this.onEditgroupclear = false;
      this.groupmessage = '';
      this.$socket.emit('grpsenderdeletemsg', data);

      $('#groupsender' + data._id).html('message deleted');
      console.log(data._id);
      axios.get('/deleteMsg/' + data._id + '/0')
        .then((responce) => console.log(responce))
        .catch((error) => console.log(error));

    },
    groupquote(chatdata) {

      this.groupchatreplydata = chatdata;
      this.onEditgroupclear = false;
      this.groupmessage = '';
      $('#message-input').css("height", "140px");
      this.groupreplyBox = true;
      this.$nextTick(function() {
        this.$refs.groupafterClick.focus();
      });
    },

    closegroupReplybox() {
      $('#message-input').css("height", "96px");
      this.groupreplyBox = false;
      this.groupchatreplydata = '';
    },

    draggroupfileupload(file, xhr, formData) {
      //   console.log('gggggggggggggggggggggggggggggggggggggg');
      console.log(this.singlegroup);
      formData.append('senderId', this.c_user._id);
      formData.append('senderName', this.c_user.name);
      formData.append('groupId', this.singlegroup._id);
      formData.append('isGroup', 1);


    },

    groupComplete(file, response) {
      // console.log(file);
      //console.log(response.data);

      this.groupmsgObj = {
        _id: response.data._id,
        chatType: 0,
        isGroup: 1,
        messageType: 1,
        senderId: { _id: this.c_user._id, name: this.c_user.name },
        senderName: this.c_user.name,
        message: response.file[0].originalname,
        groupId: this.singlegroup._id,
        isDeleted: 0,
        createdAt: new Date().toISOString(),
      };
      // if (this.singlefriend.chatWithRefId == this.c_user._id) {
      //   // alert('dasdasdas');
      //   this.$set(this.groupmsgObj, 'isSeen', 1);
      // }

      // console.log(this.groupmsgObj);
      // this.isSeen = false;
      // this.groupchatdata.push(this.groupmsgObj);
      this.$socket.emit('sendgroupmsg', this.groupmsgObj);
      var container = this.$el.querySelector("#group_chat_open");
      $("#group_chat_open").animate({ scrollTop: container.scrollHeight + 7020 }, "fast");
      // this.userdec = this.groupchatdata.filter((obj) => {
      //   return this.singlefriend._id === obj._id;
      // }).pop();

      // this.userdec.updatedByMsg = new Date().toISOString();


      // setTimeout(() => {
      //   const id = $(".active.init").attr("id");

      //   if (id != 'friend' + this.singlefriend._id) {
      //     $('.init').removeClass("active");
      //     setTimeout(() => {

      //       $('#friend' + this.singlefriend._id).addClass("active");
      //       setTimeout(() => {

      //         $('.chat-main .active .details h6').html('<span>You : </span>' + response.data.message);
      //       }, 200);

      //     }, 1);


      //   }
      // }, 0);
      // this.$socket.emit('sendmsg', response.data )
      this.$refs.mygroupVueDropzone.removeFile(file);
      $("#groupdropzone").css("display", "none");
      $("#dropzone").css("display", "none");
    },

    groupuploadfile(event) {
      // console.log(event.target.value)
      let groupfilesdata = this.$refs.groupmyFiles.files;
      groupfilesdata.forEach((file) => {
        let groupformDatas = new FormData();
        groupformDatas.append('file', file);
        groupformDatas.append('senderId', this.c_user._id);
        groupformDatas.append('senderName', this.c_user.name);
        groupformDatas.append('groupId', this.singlegroup._id);
        groupformDatas.append('isGroup', 1);
        console.log(groupformDatas);
        let config = {
          header: {
            'Content-Type': 'multipart/form-data'
          }
        }
        this.isLoading = true;
        axios.post('/chatFilesShare', groupformDatas, config).then((response) => {
          //console.log(response.data);
          this.groupmsgObj = {
            _id: response.data.data._id,
            chatType: 0,
            isGroup: 1,
            messageType: response.data.data.messageType,
            senderId: { _id: this.c_user._id, name: this.c_user.name },
            senderName: this.c_user.name,
            message: response.data.file[0].originalname,
            groupId: this.singlegroup._id,
            isDeleted: 0,
            createdAt: new Date().toISOString(),
          };
        
          this.$socket.emit('sendgroupmsg', this.groupmsgObj);
          this.isLoading = false;
          var container = this.$el.querySelector("#group_chat_open");
          $("#group_chat_open").animate({ scrollTop: container.scrollHeight + 7020 }, "fast");
          
        }, function(err) {
          console.log('err', err);
          alert('error');
        })
      })
    },

    /////////////////////////////////////// CREATE GROUP ////////////////////////////////////////////

    creategroupPanle() {
      $('#groupcreateBtn').show();
      $('.buttonload').hide();
    },

    createGroup() {
      console.log(this.multiplemembers.length);
      if (this.multiplemembers.length > 0 && this.groupName) {
        $('#groupcreateBtn').css('display', 'none');
        $('.buttonload').show();
        this.multiplemembers.push(this.c_user._id);
        this.addgroupData = {
          name: this.groupName,
          members: this.multiplemembers,
          creatorUserId: this.c_user._id,
          projectId: '5d4c07fb030f5d0600bf5c03',
          status: 1
        };
        axios.post('/createUserGroup', {
          groupData: this.addgroupData,
          userId: this.c_user._id
        }).then(response => {
        	const newGroup={
				groupData:response.data,
				groupMembers:this.multiplemembers
        	};
          this.$socket.emit('getGroups', newGroup);
          console.log(response);
          $('.chat-cont-setting').removeClass('open')
          this.$toasted.success('Group Create Successfully', {
            theme: "toasted-primary",
            position: "top-center",
            duration: 2000
          })
          console.log(response.data._id);
          $('#group_data' + response.data._id).addClass('active');
          this.singlegroup = response.data;

          setTimeout(() => {

            $('#exampleModalCenter').modal('hide')
            $('.modal-backdrop.fade.show').removeClass("modal-backdrop show");

          }, 2000);

          this.groupName = '';
          this.multiplemembers = [];
          $('.hideRemove').hide();
          $('.showAdd').show();



        }, function(err) {
          console.log('err', err);
          alert('error');
        })
      }
      else {
        if (this.multiplemembers.length == 0) {
          this.$toasted.success('Select Member', {
            theme: "toasted-primary",
            position: "top-center",
            duration: 2000
          })
        } else {
          this.$toasted.success('Enter Group Name', {
            theme: "toasted-primary",
            position: "top-center",
            duration: 2000
          })
        }

      }

    },


    editGroup() {

      this.showGrouptitle = false;
      this.editgTitle = true;
      this.$nextTick(function() {
        this.$refs.groupTitle.focus();
      });
    },

    addGroupmemners(id) {
      console.log(id);
      this.multiplemembers.push(id);
      $('#member' + id).hide();
      $('#memberRm' + id).show();
      console.log(this.multiplemembers);
    },

    removeGroupmemners(id, index) {
      console.log(index);
      if (this.multiplemembers[index] === id) {

        this.multiplemembers.splice(index, 1)
      } else {
        let found = this.multiplemembers.indexOf(id)
        this.multiplemembers.splice(found, 1)
      }
      $('#memberRm' + id).hide();
      $('#member' + id).show();
      console.log(this.multiplemembers);
    },

    editGroupTitle() {

      if (this.singlegroup.name) {
        console.log(this.msgObj);

        this.$socket.emit('updateGroupTitle', this.singlegroup);
        this.showGrouptitle = true;
        this.editgTitle = false;
        axios.post('/editGroupName', {
          groupId: this.singlegroup._id,
          groupName: this.singlegroup.name,
        }).then(response => {

        }, function(err) {
          console.log('err', err);
          alert('error');
        })
      } else {
        this.$toasted.success('Enter Group Name', {
          theme: "toasted-primary",
          position: "top-center",
          duration: 2000
        })
      }
    },

    deleteGroup() {

      // this.$socket.emit('deleteGroup',this.singlegroup);
      // console.log(''):
      if (this.orderedGroups[this.groupIndex]._id === this.singlegroup._id) {

        this.orderedGroups.splice(this.groupIndex, 1)
        this.groups = this.orderedGroups;
      } else {
        let found = this.orderedGroups.indexOf(this.singlegroup._id)
        this.orderedGroups.splice(found, 1);
        this.groups = this.orderedGroups;
      }
      this.$socket.emit('deleteGroup', this.groups);
      $('.group-main').removeClass('active');
      $('#startgroupchat').removeClass('active');
      axios.post('/deleteGroup', {
        groupId: this.singlegroup._id,
        projectId: '5d4c07fb030f5d0600bf5c03',
      }).then(response => {
        console.log(response);
      }, function(err) {
        console.log('err', err);
        alert('error');
      })
    },
    crossGroupTitle() {
      this.showGrouptitle = true;
      this.editgTitle = false;
    },

    leaveGroup(id, index) {
      if (index != 'user') {
        if (this.singlegroup.members[index]._id === id) {
          this.singlegroup.members.splice(index, 1)
          //this.groups=this.orderedGroups;
        } else {
          let found = this.singlegroup.members.indexOf(id)
          this.singlegroup.members.splice(found, 1);
          //this.groups=singlegroup.members;
        }
      }
      console.log(index);
      axios.post('/removeGroupUser', {
        groupId: this.singlegroup._id,
        memberId: id,
      }).then(response => {
        console.log(response);
        this.$socket.emit('updateMembers', {
          groupId: this.singlegroup._id,
          members: this.singlegroup.members,
          groupData: this.singlegroup,
          memberId: id,
          userId: this.c_user._id
        });
        if (index == 'user') {
          if (this.orderedGroups[this.groupIndex]._id === this.singlegroup._id) {

            this.orderedGroups.splice(this.groupIndex, 1)
            this.groups = this.orderedGroups;
          } else {
            let found = this.orderedGroups.indexOf(this.singlegroup._id)
            this.orderedGroups.splice(found, 1);
            this.groups = this.orderedGroups;
          }

          $('#showGroupsMembers').modal('hide')
          $('.modal-backdrop.fade.show').removeClass("modal-backdrop show");
          $('#startgroupchat').removeClass('active');

        }
      }, function(err) {
        console.log('err', err);
        alert('error');
      })

    },

    addNewmember() {

      this.nonGroupUsers = [];
      for (var j = 0; j < this.friendsdata.length; j++) {
        const isFound = false;
        if (this.friendsdata[j]._id != this.c_user._id) {

          for (var i = 0; i < this.singlegroup.members.length; i++) {
            if (this.friendsdata[j]._id == this.singlegroup.members[i]._id) {
              isFound = true;
              break;
            }

            else if (this.friendsdata[j]._id != this.singlegroup.members[i]._id && i == (this.singlegroup.members.length - 1) && !isFound) {
              this.nonGroupUsers.push(this.friendsdata[j]);
            }

          }
        }
      }
      console.log(this.nonGroupUsers);
      this.showmembers = false;
      this.shownewmembers = true;
    },

    showMembers() {

      this.multipleneewmembers = [];
      this.shownewmembers = false;
      this.showmembers = true;
      $('.removeBtn').show();
      console.log(this.singlegroup.members);

    },

    addnewGroupmemners(data) {
      console.log(data);
      this.multipleneewmembers.push(data);
      $('#newmember' + data._id).hide();
      $('#newmemberRm' + data._id).show();
      console.log(this.multipleneewmembers);
    },

    removenewGroupmemners(id, index) {
      console.log(index);
      if (this.multipleneewmembers[index]._id === id) {

        this.multipleneewmembers.splice(index, 1)
      } else {
        let found = this.multipleneewmembers.indexOf(id)
        this.multipleneewmembers.splice(found, 1)
      }
      $('#newmemberRm' + id).hide();
      $('#newmember' + id).show();
      console.log(this.multipleneewmembers);
    },


    addNewmembersList() {
      $('#addmemberbtn').hide();
      $('#addmemberonload').show();

      if (this.multipleneewmembers) {

        axios.post('/addNewMembers', {
          groupId: this.singlegroup._id,
          members: this.multipleneewmembers,
        }).then(response => {
          //this.$socket.emit('getGroups', response.data);
          for (var i = 0; i < this.multipleneewmembers.length; i++) {
            this.singlegroup.members.push(this.multipleneewmembers[i]);
          }

          for (var j = 0; j < this.nonGroupUsers.length; j++) {
            console.log(this.nonGroupUsers[j]._id + '===' + this.multipleneewmembers[j]._id);
            if (this.nonGroupUsers[j]._id === this.multipleneewmembers[j]._id) {
              this.nonGroupUsers.splice(this.nonGroupUsers[j], 1)
              //this.groups=this.orderedGroups;
            } else {
              let found = this.nonGroupUsers.indexOf(this.multipleneewmembers[j]._id)
              this.nonGroupUsers.splice(found, 1);
              //this.groups=nonGroupUsers;

            }
          }
          console.log(this.singlegroup);
          this.$socket.emit('updateMembers', this.singlegroup);
          this.multipleneewmembers = [];
          console.log(this.nonGroupUsers);
          $('#addmemberonload').hide();
          $('#addmemberbtn').show();
          this.$toasted.success('New Members Add Successfully', {
            theme: "toasted-primary",
            position: "top-center",
            duration: 2000
          })


          //  this.groupName='';
          this.multipleneewmembers = [];
          //   $('.hideRemove').hide();
          //  $('.showAdd').show();




        }, function(err) {
          console.log('err', err);
          alert('error');
        })
        setTimeout(() => {
          $('.hideRemove').hide();
          $('.showAdd').show();
        }, 2000);

      }


    },
    ///////////////////////////////////////  END GROUP SECTION //////////////////////////////////////
    callback(msg) {
      //console.debug('Event: ', msg)
    },

    chatNav(){
      $('#meeting').hide();
      $('#room').hide();
      $('#mainSidebar').show();
      $('#content').show();
      
    },

    meetingNav(){
      $('#mainSidebar').hide();
      $('#content').hide();
      $('#room').hide();
      $('#meeting').show();

    },
     roomNav(){
      $('#mainSidebar').hide();
      $('#content').hide();
      $('#meeting').hide();
      $('#room').show();

    },

    favourite() {

      this.getTodo();
      $("#recent").removeClass("active");
      $("#contact-list").removeClass("active");
      $("#document").removeClass("active");
      $("#notification").removeClass("active");
      $("#settings").removeClass("active");
      $("#status").removeClass("active");
      // add class to the one we clicked
      $('#favourite').addClass("active");

    },

    status() {
      this.allChatMedia();

      $("#recent").removeClass("active");
      $("#contact-list").removeClass("active");
      $("#document").removeClass("active");
      $("#notification").removeClass("active");
      $("#settings").removeClass("active");
      $("#favourite").removeClass("active");
      // add class to the one we clicked
      $('#status').addClass("active");
       this.allChatDocument();

    },

    document() {
       this.allChatDocument();
      $("#recent").removeClass("active");
      $("#contact-list").removeClass("active");
      $("#status").removeClass("active");
      $("#notification").removeClass("active");
      $("#settings").removeClass("active");
      $("#favourite").removeClass("active");
      // add class to the one we clicked
      $('#document').addClass("active");

    },

    contact() {

      $("#recent").removeClass("active");
      $("#status").removeClass("active");
      $("#document").removeClass("active");
      $("#notification").removeClass("active");
      $("#settings").removeClass("active");
      $("#favourite").removeClass("active");
      // add class to the one we clicked
      $('#contact-list').addClass("active");

    },

    notification() {

      $("#recent").removeClass("active");
      $("#contact-list").removeClass("active");
      $("#document").removeClass("active");
      $("#status").removeClass("active");
      $("#settings").removeClass("active");
      $("#favourite").removeClass("active");
      // add class to the one we clicked
      $('#notification').addClass("active");

    },

    setting() {

      $("#recent").removeClass("active");
      $("#contact-list").removeClass("active");
      $("#document").removeClass("active");
      $("#notification").removeClass("active");
      $("#status").removeClass("active");
      $("#favourite").removeClass("active");
      // add class to the one we clicked
      $('#settings').addClass("active");

    },

    files() {

      $("#todo").removeClass("active");
      $("#notes").removeClass("active");
      $("#reminder").removeClass("active");
      // add class to the one we clicked
      $('#files').addClass("active");

    },
    reminder() {

      $("#todo").removeClass("active");
      $("#notes").removeClass("active");
      $("#files").removeClass("active");
      // add class to the one we clicked
      $('#reminder').addClass("active");

    },
    notes() {

      $("#todo").removeClass("active");
      $("#files").removeClass("active");
      $("#reminder").removeClass("active");
      // add class to the one we clicked
      $('#notes').addClass("active");

    },

    todo() {

      $("#files").removeClass("active");
      $("#notes").removeClass("active");
      $("#reminder").removeClass("active");
      // add class to the one we clicked
      $('#todo').addClass("active");

    },
    msg_setting(id) {
      $('#msg-setting' + id).siblings('#msg-dropdown' + id).toggle();
      $('#msg-settingo2o' + id).siblings('#msg-dropdowno2o' + id).toggle();
    },



    infiniteHandler($state) {
      let vm = this;
      alert('hello');

      $state.loaded();
   
    },


    //////////////////////////////////////// BROADCASTING ////////////////////////////////////////////////


    startBroadcasting() {

      this.broadcastPassword = this.setPassword;
      this.broadcastChat = [];
      $('#showPresenter').hide();
      $('#broadcastvideocall').modal();
      $('#broadcastvideocall').show();
      presenter(this.broadcastHtml);
      axios.post('/startPresenter/', {
        password: this.broadcastPassword,
        userId: this.c_user._id
      }).then(response => {
        console.log(response.data);
        this.broadcastingId = response.data.broadcastRefId._id;
        this.presenterId = response.data.broadcastRefId.presenterId
      }, function(err) {
        console.log('err', err);
        alert('error');
      })

    },

    showCallchat() {
      $('#chatopen').removeClass('dot-btn dot-success grow');
      $('#chatopen').hide();
      $('#chatclose').show();
      $('#startchat').hide();
      $('#brochatings').addClass('active');
      $('#broadcast-input').show();
      var containers = this.$el.querySelector("#brochatings");
      console.log(containers.scrollHeight);
      $("#brochatings").animate({ scrollTop: containers.scrollHeight + 7020 }, "fast");

      this.broadCastmsg = '';
      this.editChatid = '';
      this.onEditclear = false;
      this.onbroChat = true;
      $('#broadcast-input').css("height", "96px");


      $('.videocall').removeClass('beforeopenChat');
      $('.videocall').addClass('afteropenChat');
      $('#modalcall').removeClass('modelbefore');
      $('#modalcall').addClass('modelafter');
      $('#contents').show();
      $('.chitchat-main .chat-content').css('opacity', '1');
    },

    hideCallchat() {
      $('#chatopen').removeClass('dot-btn dot-success grow');
      $('.videocall').addClass('beforeopenChat');
      $('.videocall').removeClass('afteropenChat');
      $('#modalcall').removeClass('modelafter');
      $('#modalcall').addClass('modelbefore');
      $('#contents').hide();
      $('#chatclose').hide();
      $('#chatopen').show();



    },

    becomeViewer(presenterid) {

      this.starterBroid = presenterid;
      this.broadCastchat = [];
      $('#showPresenter').hide();
      $('#broadcastvideocall').modal();
      $('#broadcastvideocall').show();
      viewer(presenterid, this.broadcastHtml);
      axios.get('/getBroadcastId/' + presenterid)
        .then(response => {
          this.broadcastingId = response.data.broadcastRefId._id;
          this.bcJoinedChat = {
            senderId: { _id: this.c_user._id, name: this.c_user.name },
            receiverId: this.broadcastingId,
            message: 'I have Joined',
            chatType: 2
          }

          this.$socket.emit('broadcastmsg', this.bcJoinedChat); //emit socket to show other that I have joined BC
          axios.post('/joinViewer', {
            preId: this.starterBroid, //set presenterId here
            joinMsg: this.bcJoinedChat, //set joinMessage here
            broadcastId: this.broadcastingId, //set broadcast id here
            userData: this.c_user  //user data here
          }).then(response => {
            console.log(response.data);
            this.broadcastChat = response.data;	//storing chat in variable
          }, function(err) {
            console.log('err', err);
            alert('error');
          });

        }, function(err) {
          console.log('err', err);
          alert('error');
        })

    },
    on2Callclose() {


      $('#broadcastvideocall').hide();
      $('.videocall').addClass('beforeopenChat');
      $('.videocall').removeClass('afteropenChat');
      $('#modalcall').removeClass('modelafter');
      $('#modalcall').addClass('modelbefore');
      $('#contents').hide();
      $('#chatclose').hide();
      $('#chatopen').show();
      $('#brochatings').removeClass('active');
      if (this.presenterId == this.c_user._id) {

        this.$socket.emit('closebroadcastpanel', this.broadcastingId);
        this.broadcastChat = [];
        axios.get('/stopPresenter/' + this.c_user._id + '/' + this.broadcastingId)
          .then(response => {


          })
      }
      else {

        this.bcJoinedChat = {
          senderId: { _id: this.c_user._id, name: this.c_user.name },
          receiverId: this.broadcastingId,
          message: 'Left !',
          chatType: 2
        }
        axios.post('/stopViewer', {

          userData: this.c_user,
          userId: this.c_user._id,
          preId: this.starterBroid
        }).then(response => {

        }, function(err) {
          console.log('err', err);
          alert('error');
        });

        this.$socket.emit('broadcastmsg', this.bcJoinedChat); //emit socket to show other that I have joined BC
      }

      $('.modal-backdrop.fade.show').removeClass("modal-backdrop show");
      broadcaststop();
      localStorage.removeItem("presenterData");

    },

    broadCastmsgchat() {
      this.isbroadchatemojiActive = false;
      this.bcJoinedChat = {
        senderId: { _id: this.c_user._id, name: this.c_user.name },
        receiverId: this.broadcastingId,
        message: this.broadCastmsg,
        chatType: 2
      }

      this.$socket.emit('broadcastmsg', this.bcJoinedChat); //emit socket to show other that I have joined BC
      this.broadCastmsg = '';
      axios.post('/chat', {
        msgData: this.bcJoinedChat
      }).then(response => {

      }, function(err) {
        console.log('err', err);
        alert('error');
      })
    },
    videoPausecall() {
      var o2oobg = {
        reciverid: receiverId(),
        friendId: this.oncallFriend._id
      }
      this.$socket.emit('sendvideoPausecall', o2oobg);
      //console.log(webRtcO2OPeer.getLocalStream());
      webRtcO2OPeer.getLocalStream().getVideoTracks()[0].enabled = false;
      this.videoPause = false;
      this.videoPlay = true;
      // if (this.callType == 'audio') {
      //  // $('#videoOutput').hide(2000);
      //  // $("#userbackground").show(2000);
        

      //   //this.callType = 'audio';
      // }
      $('#local-video').css('display', 'none');

    },
    videoPlaycall() {
      var o2oobg = {
        reciverid: receiverId(),
        friendId: this.oncallFriend._id
      }
      this.$socket.emit('sendvideoPlaycall', o2oobg);
       // console.log(webRtcO2OPeer.getLocalStream());
      webRtcO2OPeer.getLocalStream().getVideoTracks()[0].enabled = true;
      this.videoPlay = false;
      this.videoPause = true;
      // if (this.callType == 'audio') {
      //   $("#userbackground").hide(2000);
      //   $('#videoOutput').show(2000);
        
      //   //this.callType = 'video';
      // }
      $('#local-video').css('display', 'block');
    },
    groupPausecall() {

      this.groupVideoPause = false;
      this.groupVideoPlay = true;
      participants[parsed.name].rtcPeer.getVideoTracks()[0].stop();

    },
  groupPlaycall() {

      this.audioPause = false;
      this.audioPlay = true;
      webRtcO2OPeer.getLocalStream().getAudioTracks()[0].enabled = false;

    },


    audioPausecall() {

      this.audioPause = false;
      this.audioPlay = true;
      webRtcO2OPeer.getLocalStream().getAudioTracks()[0].enabled = false;

    },

    audioPlaycall() {

      webRtcO2OPeer.getLocalStream().getAudioTracks()[0].enabled = true;
      this.audioPlay = false;
      this.audioPause = true;
    },


    /////////////////////////////////////// END BROADCASTING //////////////////////////////////////////

    ////////////////////////////////////// O2O VIDEO CALL ////////////////////////////////////////


    o2ohideCallchat() {

      $('#o2ochatopen').removeClass('dot-btn dot-success grow');
      $('.videocall').addClass('o2obeforeopenChat');
      $('.videocall').removeClass('o2oafteropenChat');
      $('#o2omodalcall').removeClass('o2omodelafter');
      $('#o2omodalcall').addClass('o2omodelbefore');
      $('#local-video').removeClass('afterlocalVideo');
      $('#local-video').addClass('beforelocalVideo');
      $('#local-video').removeClass('afterlocalVideo');
      $('#local-video').addClass('beforelocalVideo');
      $('#o2odetail').removeClass('afterDetail');
      $('#o2odetail').addClass('beforeDetail');
      $('#o2ocontents').hide();
      $('#o2ochatclose').hide();
      $('#o2ochatopen').show();



    },

    videostartCall(friends, statuscall) {
      this.callType = statuscall;
      if (statuscall == 'audio') {
        this.videoPause = false;
        this.videoPlay = true;
        $('#videoOutput').hide();
        $("#userbackground").show();
        $('#local-video').css('display', 'none');
      } else {
        this.videoPause = true;
        this.videoPlay = false;
        
        $('#videoOutput').show();
        $("#userbackground").hide();
        $('#local-video').css('display', 'block');
      }
      this.singlefriend = friends;
      $('#msgcallModal').modal('hide');
      console.log(this.singlefriend.callStatus);
      if (this.singlefriend.callStatus == 0) {

        this.audioPause = true;
        this.audioPlay = false;
        this.o2ohideCallchat();
        var incoming = document.getElementById("incommingcall");
        incoming.play();
        incoming.muted = false;
        incoming.loop = true;
        this.checkcallstart();
        this.reset();
        this.stop();
        //$('body').removeClass('modal-open');
        //$('.modal-backdrop').remove();
        //$('#o2ovideocall').modal('show');

        $('#o2osinglemessage-input').show();
        this.oncallFriend = this.singlefriend;
        let userDataobj = {
          friendId: this.oncallFriend._id,
          callerName: this.c_user.name,
          callerId: this.c_user._id,
          callType: statuscall
        };
     this.$socket.emit('updateCallStatus', {
          userId: this.c_user._id,
          friendId: this.oncallFriend._id,
          status: 1,
          statuscall:statuscall
          
        });
        videoKCall(this.c_user._id, this.oncallFriend._id, userDataobj, this.callType);
        
        axios.post('/updateCallStatus', {
          userId: this.c_user._id,
          friendId: this.oncallFriend._id,
          status: 1
        }).then(response => {

        }, function(err) {
          console.log('err', err);
          //alert('error');
        });


      }
      else {

        setTimeout(() => {

          $('#o2ovideocall').modal('hide');
          $('.o2ovideocallModel').modal('hide');
          $('#o2omodalcall').modal('hide');
          $('.modal-backdrop').remove();
        }, 2000);

        this.$toasted.success('User Busy An Another Call ', {
          theme: "toasted-primary",
          position: "top-right",
          duration: 4000
        })


      }

    },
    o2oreceiveCall() {
      this.o2ohideCallchat();
      $('#o2ovideocall').modal({backdrop: 'static', keyboard: false});
      var x = document.getElementById("outgoingcall");
      x.pause();
      x.muted = true;
      startCall();
      this.reset();
      this.start();
      var o2oobg = {
        reciverid: receiverId(),
        friendId: this.oncallFriend._id,
        statuscall:this.callType
      }
      this.$socket.emit('O2OstarTimer', o2oobg);
      $('#videocallReceiver').modal('hide');

		if(this.callType== 'audio'){
                $('#videoOutput').hide();
		        $("#userbackground").show();
		        
		}else{
			$("#userbackground").hide();
			$('#videoOutput').show();
		     
		}

      $('#o2ovideocall').show();
     
		
      const post = this.friendsdata.filter((obj) => {
        return receiverId() === obj._id;
      }).pop();
      this.oncallFriend = post;
      console.log(this.oncallFriend);
       setTimeout(function() {
       	console.log('settttttttttt time out');
       	console.log(this.callType);
		if(this.callType== 'audio'){
			
				 webRtcO2OPeer.getLocalStream().getVideoTracks()[0].enabled = false;
				}else{
				 webRtcO2OPeer.getLocalStream().getVideoTracks()[0].enabled = true;
				}
        }, 10000);
    },


    o2ostopKCall() {

      //this.audio.pause();
      stopCall();
      var x = document.getElementById("outgoingcall"); console.log(x);
      x.pause();
      x.muted = true;
      var incoming = document.getElementById("incommingcall");
      incoming.pause();
      incoming.muted = true;

      $('body').removeClass('modal-open');
      $('.modal-backdrop').remove();
      $('#showCallMin').hide();
      $('#audioshowCallMin').hide();
      this.checkreset();
      this.checkcallstop();
      //this.singlefriend= this.oncallFriend;
      this.o2ostatus = false;
      console.log(this.oncallFriend);


      $('#showcallModel' + this.oncallFriend._id).show();

      var o2oobg = {
        reciverid: receiverId(),
        friendId: this.oncallFriend._id,
        stoperId: this.c_user._id
      }

      this.$socket.emit('O2OcloseReceiverPanal', o2oobg);
      $('#startchat').show();
      $('#message-input').hide();
      $('#singlemessage-input').show();
      var endtimes = $('#basicUsage').text();
      console.log(endtimes);
      var endtime='';
      if(endtimes == '00:00:00'){
       endtime = 'Missed Call';
      }else{
      	endtime='Call Ended ' + endtimes;
      }
      this.$toasted.success(endtime, {
        theme: "toasted-primary",
        position: "top-center",
        duration: 4000
      })

      var Rid = '';
      var idddd = receiverId();
      if (receiverId()) {
        Rid = receiverId();
        console.log('reciver');
      }
      else {
        Rid = this.oncallFriend._id;
      }
      this.$socket.emit('updateCallStatus', {
        userId: this.c_user._id,
        friendId: Rid,
        status: 0
      });
      this.updateCallStatus(Rid);

      this.msgObj = {
        chatType: 3,
        isGroup: 0,
        messageType: 3,
        senderId: { _id: this.c_user._id },
        senderImage: '',
        receiverImage: '',
        receiverId: { _id: Rid },
        senderName: this.c_user.name,
        message: endtime,
        createdAt: new Date().toISOString(),
      };
      console.log(this.selectFriendStatus);
      if (this.selectFriendStatus) {
        this.friendchat.push(this.msgObj);
      }
      var o2oobg = {
        reciverid: receiverId(),
        friendId: this.oncallFriend._id,
        msgData: this.msgObj
      }
      this.$socket.emit('callsendmsg', o2oobg)
      axios.post('/chat', {
        msgData: this.msgObj,
        selectedUserData: Rid
      }).then(response => {
        console.log(response);

      }, function(err) {
        console.log('err', err);
        //alert('error');
      })
      this.reset();
      this.stop();
      this.oncallFriend = {};
    },
    minimizeScreen() {
      $('#startchat').hide();
      $('#o2ovideocall').modal('hide');
      $('body').removeClass('modal-open');
      $('.modal-backdrop').remove();
      $('#showcallModel' + this.oncallFriend._id).hide();
      $('#showCallMin').show();
    },
    o2ostartchat() {

      console.log(this.oncallFriend);
      this.o2ostatus = true;
      $('#o2ochatopen').removeClass('dot-btn dot-success grow');
      $('#o2ochatopen').hide();
      $('#o2ochatclose').show();
      $('#o2ochating').addClass('active');
      $('#o2osinglemessage-input').show();
      $('#message-input').hide();
      var containers = this.$el.querySelector("#o2ochating");
      console.log(containers.scrollHeight);
      $("#o2ochating").animate({ scrollTop: containers.scrollHeight + 7020 }, "fast");

      this.message = '';
      this.editChatid = '';
      this.onEditclear = false;
      this.onChat = true;
      this.chatreplydata = "";
      this.typing = false;
      this.replyBox = false;
      $('#o2osinglemessage-input').css("height", "96px");


      $('.videocall').removeClass('o2obeforeopenChat');
      $('.videocall').addClass('o2oafteropenChat');
      $('#o2omodalcall').removeClass('o2omodelbefore');
      $('#o2omodalcall').addClass('o2omodelafter');
      $('#local-video').removeClass('beforelocalVideo');
      $('#local-video').addClass('afterlocalVideo');

      $('#o2odetail').removeClass('beforeDetail');
      $('#o2odetail').addClass('afterDetail');

      $('#o2ocontents').show();
      $('.chitchat-main .chat-content').css('opacity', '1');

      this.$socket.emit('updateUserSelection', {
        selectedUser: this.oncallFriend._id,
        userId: this.c_user._id
      });
      const post = this.friendsdata.filter((obj) => {
        return this.oncallFriend._id === obj._id;
      }).pop();
      post.usCount = 0;


      this.friendchat = {};
      axios.get('/getChat/' + this.c_user._id + '/' + this.oncallFriend._id + '/50')
        .then(responce => {

          this.friendchat = responce.data;
          this.$socket.emit('lastchatobj_send', this.friendchat[this.friendchat.length - 1]);
          var container = this.$el.querySelector("#o2ochating");
          $("#o2ochating").animate({ scrollTop: container.scrollHeight + 7020 }, "fast");
          if (this.friendchat[this.friendchat.length - 1].isSeen == 1) {
            this.isSeen = true;
          } else {
            this.isSeen = false;
          }

        })
        .catch((error) => console.log(error));

      var container = this.$el.querySelector("#o2ochating");
      $("#o2ochating").animate({ scrollTop: container.scrollHeight + 7020 }, "fast");


    },

    updateCallStatus(Rid) {
      axios.post('/updateCallStatus', {
        userId: this.c_user._id,
        friendId: Rid,
        status: 0
      }).then(response => {

      }, function(err) {
        console.log('err', err);
        //alert('error');
      });
    },
    ///////////////////////////////////////////////////////// O2O AUDIO CALL /////////////////////////////////////////////////////////////////////////////

    startAudiocall(friends) {

      console.log(friends);
      this.singlefriend = friends;
      $('#msgcallModal').modal('hide');
      if (this.singlefriend.callStatus == 0) {
        this.audioPause = true;
        this.audioPlay = false;
        this.checkcallstart();
        var incoming = document.getElementById("incommingcall");
        incoming.play();
        incoming.muted = false;
        incoming.loop = true;

        $('#o2osinglemessage-input').show();
        this.oncallFriend = this.singlefriend;
        let userDataobj = {
          friendId: this.oncallFriend._id,
          callerName: this.c_user.name,
          callerId: this.c_user._id,
          callType: 1
        };
        videoKCall(this.c_user._id, this.oncallFriend._id, userDataobj, 1);

        this.$socket.emit('updateCallStatus', {
          userId: this.c_user._id,
          friendId: this.oncallFriend._id,
          status: 1
        });
        this.updateCallStatus(this.oncallFriend._id);

      }
      else {

        setTimeout(() => {

          $('#o2ovideocall').modal('hide');
          $('#o2oaudiocall').modal('hide');
          $('.modal-backdrop').remove();
        }, 2000);

        this.$toasted.success('User Busy An Another Call ', {
          theme: "toasted-primary",
          position: "top-right",
          duration: 4000
        })


      }
    },

    o2ostartAudiochat() {

      console.log(this.oncallFriend);
      this.o2ostatus = true;
      $('#o2oaudiochatopen').removeClass('dot-btn dot-success grow');
      $('#o2oaudiochatopen').hide();
      $('#o2oaudiochatclose').show();
      $('#o2oaudiochating').addClass('active');
      $('#o2osinglemessage-input').show();
      $('#message-input').hide();
      var containers = this.$el.querySelector("#o2ochating");
      console.log(containers.scrollHeight);
      $("#o2ochating").animate({ scrollTop: containers.scrollHeight + 7020 }, "fast");

      this.message = '';
      this.editChatid = '';
      this.onEditclear = false;
      this.onChat = true;
      this.chatreplydata = "";
      this.typing = false;
      this.replyBox = false;
      $('#o2osinglemessage-input').css("height", "96px");


      $('.videocall').removeClass('o2obeforeopenChat');
      $('.videocall').addClass('o2oafteropenChat');
      $('#o2omodalaudiocall').removeClass('o2omodelbefore');
      $('#o2omodalaudioaudiocall').addClass('o2omodelafter');

      $('#o2oaudiodetail').removeClass('beforeDetail');
      $('#o2oaudiodetail').addClass('afterDetail');

      $('#o2oaudiocontents').show();
      $('.chitchat-main .chat-content').css('opacity', '1');

      this.$socket.emit('updateUserSelection', {
        selectedUser: this.oncallFriend._id,
        userId: this.c_user._id
      });
      const post = this.friendsdata.filter((obj) => {
        return this.oncallFriend._id === obj._id;
      }).pop();
      post.usCount = 0;


      this.friendchat = {};
      axios.get('/getChat/' + this.c_user._id + '/' + this.oncallFriend._id + '/50')
        .then(responce => {

          this.friendchat = responce.data;
          this.$socket.emit('lastchatobj_send', this.friendchat[this.friendchat.length - 1]);
          var container = this.$el.querySelector("#o2oaudiochating");
          $("#o2oaudiochating").animate({ scrollTop: container.scrollHeight + 7020 }, "fast");
          if (this.friendchat[this.friendchat.length - 1].isSeen == 1) {
            this.isSeen = true;
          } else {
            this.isSeen = false;
          }

        })
        .catch((error) => console.log(error));

      var container = this.$el.querySelector("#o2ochating");
      $("#o2oaudiochating").animate({ scrollTop: container.scrollHeight + 7020 }, "fast");


    },

    o2ohideaudioCallchat() {

      $('#o2oaudiochatopen').removeClass('dot-btn dot-success grow');
      $('.videocall').addClass('o2obeforeopenChat');
      $('.videocall').removeClass('o2oafteropenChat');
      $('#o2omodalaudiocall').removeClass('o2omodelafter');
      $('#o2omodalaudiocall').addClass('o2omodelbefore');

      $('#o2oaudiodetail').removeClass('afterDetail');
      $('#o2oaudiodetail').addClass('beforeDetail');
      $('#o2oaudiocontents').hide();
      $('#o2oaudiochatclose').hide();
      $('#o2oaudiochatopen').show();



    },

    o2oaudioreceiveCall() {
      var x = document.getElementById("outgoingcall");
      x.pause();
      x.muted = true;

      startCall();
      this.reset();
      this.start();
      var o2oobg = {
        reciverid: receiverId(),
        friendId: this.oncallFriend._id
      }
      this.$socket.emit('O2OstarTimer', o2oobg);
      $('#audiocallReceiver').modal('hide');

      $('#o2oaudiocall').modal('show');

      const post = this.friendsdata.filter((obj) => {
        return receiverId() === obj._id;
      }).pop();
      this.oncallFriend = post;
      console.log(this.oncallFriend);
    },

    audiominimizeScreen() {
      $('#startchat').hide();
      $('#o2oaudiocall').modal('hide');
      $('body').removeClass('modal-open');
      $('.modal-backdrop').remove();
      $('#showcallModel' + this.oncallFriend._id).hide();
      $('#audioshowCallMin').show();
    },










    ////////////////////////////////////// GROUP VIDEO CALL ////////////////////////////////////////

    groupshowCallchat() {
      $('#groupchatopen').removeClass('dot-btn dot-success grow');
      $('#groupchatopen').hide();
      $('#groupchatclose').show();
      $('#groupchating').addClass('active');
      $('#groupsinglemessage-input').hide();

      var containers = this.$el.querySelector("#groupchating");
      console.log(containers.scrollHeight);
      $("#groupchating").animate({ scrollTop: containers.scrollHeight + 7020 }, "fast");

      this.onEditgroupclear = false;
      this.ongroupChat = true;
      this.groupmessage = '';
      this.editgroupChatid = '';
      $('#groupsinglemessage-input').css("height", "96px");


      $('.videocall').removeClass('groupbeforeopenChat');
      $('.videocall').addClass('groupafteropenChat');
      $('#groupmodalcall').removeClass('groupmodelbefore');
      $('#groupmodalcall').addClass('groupmodelafter');
      $('#local-video').removeClass('beforelocalVideo');
      $('#local-video').addClass('afterlocalVideo');

      $('#groupdetail').removeClass('beforeDetail');
      $('#groupdetail').addClass('afterDetail');

      $('#groupcontents').show();
      $('.chitchat-main .chat-content').css('opacity', '1');
    },

    grouphideCallchat() {

      $('#groupchatopen').removeClass('dot-btn dot-success grow');
      $('.videocall').addClass('groupbeforeopenChat');
      $('.videocall').removeClass('groupafteropenChat');
      $('#groupmodalcall').removeClass('groupmodelafter');
      $('#groupmodalcall').addClass('groupmodelbefore');
      $('#local-video').removeClass('afterlocalVideo');
      $('#local-video').addClass('beforelocalVideo');
      $('#local-video').removeClass('afterlocalVideo');
      $('#local-video').addClass('beforelocalVideo');
      $('#groupdetail').removeClass('afterDetail');
      $('#groupdetail').addClass('beforeDetail');
      $('#groupcontents').hide();
      $('#groupchatclose').hide();
      $('#groupchatopen').show();



    },

    groupvideostartCall(group) {
      this.singlegroup = group;
      var groupRoomName = group.name;
      var groupUser = this.c_user.name;
      console.log(groupRoomName);
      register(groupRoomName, groupUser);

      axios.post('/createGroupCall', {
        groupId: group._id,
        callerId: this.c_user._id,
        projectId: '5d4c07fb030f5d0600bf5c03'
      }).then(response => {
        console.log(response);
        this.$socket.emit('sendGroupdetail', {
          groupId: group._id,
          groupName: group.name,
          userId: this.c_user._id,
          groupCallid: response.data._id
        });
      }, function(err) {
        console.log('err', err);
        //alert('error');
      });


    },
    groupvideoJoinCall(group) {
      this.singlegroup = group;
      var groupRoomName = group.name;
      var groupUser = this.c_user.name;
      console.log(groupRoomName);
      register(groupRoomName, groupUser);
      axios.post('/joinCallGroup', {
        _id: this.groupCallId,
        groupId: this.callGroup._id,
        userId: this.c_user._id,
        projectId: '5d4c07fb030f5d0600bf5c03',
        member: this.c_user._id
      }).then(response => {
        console.log(response);
      }, function(err) {
        console.log('err', err);
        //alert('error');
      });

    },

    groupstopKCall() {
      leaveRoom();
      axios.post('/leaveCallGroup', {
        _id: this.groupCallId,
        groupId: this.callGroup._id,
        userId: this.c_user._id
      }).then(response => {
        console.log(response);
      }, function(err) {
        console.log('err', err);
        //alert('error');
      });

      $('#groupchatclose').hide();
      $('#groupchating').removeClass('active');
      $('#groupsinglemessage-input').hide();
      $('#chating').removeClass('active');
    
    },
    minimizeScreen() {
      $('#startchat').hide();
      $('#groupvideocall').modal('hide');
      $('body').removeClass('modal-open');
      $('.modal-backdrop').remove();
      $('#groupshowcallModel' + this.oncallGroup._id).hide();
      $('#showCallMin').show();
    },
    groupstartchat() {

      //console.log(this.oncallGroup);
      this.groupstatus = true;
      $('#groupchatopen').removeClass('dot-btn dot-success grow');
      $('#groupchatopen').hide();
      $('#groupchatclose').show();
      $('#groupchating').addClass('active');
      $('#groupsinglemessage-input').show();

      var containers = this.$el.querySelector("#groupchating");
      console.log(containers.scrollHeight);
      $("#groupchating").animate({ scrollTop: containers.scrollHeight + 7020 }, "fast");

      this.onEditgroupclear = false;
      this.ongroupChat = true;
      this.groupmessage = '';
      this.editgroupChatid = '';
      this.groupchatreplydata = "";
      $('#groupsinglemessage-input').css("height", "96px");

      axios.get('/getGroupChat/5f5626fec7ebca22288ec2fd/50')
        .then((responce) => this.groupchatdata = responce.data)
        .catch((error) => console.log(error));
      $('.videocall').removeClass('groupbeforeopenChat');
      $('.videocall').addClass('groupafteropenChat');
      $('#groupmodalcall').removeClass('groupmodelbefore');
      $('#groupmodalcall').addClass('groupmodelafter');
      $('#local-video').removeClass('beforelocalVideo');
      $('#local-video').addClass('afterlocalVideo');

      $('#groupdetail').removeClass('beforeDetail');
      $('#groupdetail').addClass('afterDetail');

      $('#groupcontents').show();
      $('.chitchat-main .chat-content').css('opacity', '1');


    },
    groupReceiveCall() {
      this.singlegroup = this.callGroup;
      var groupRoomName = this.receiveGroupName;
      var groupUser = this.c_user.name;
      console.log(this.groupCallId, 'lllllllllllldsaaaaaaaa');
      register(groupRoomName, groupUser);
      $('#groupcallReceiver').modal('hide');
      $('#groupvideocall').modal('show');
      axios.post('/joinCallGroup', {
        _id: this.groupCallId,
        groupId: this.callGroup._id,
        userId: this.c_user._id,
        projectId: '5d4c07fb030f5d0600bf5c03',
        member: this.c_user._id
      }).then(response => {
        console.log(response);
      }, function(err) {
        console.log('err', err);
        //alert('error');
      });

    },


    ////////////////////////////////////// END GROUP VIDEO CALL ////////////////////////////////////////




    addfriends(friend) {
      console.log(this.friendsdata);
      console.log(this.searchUsers);
      if (friend.friendReqStatus == 0) {
        console.log("IFF");
 
        axios.post('/friends/sendFriendRequest', {
          userId: this.c_user._id,
          friendId: friend._id,
          projectId: '5d4c07fb030f5d0600bf5c03',
          status: 2
        }).then(response => {
          console.log(response);
          const searchdata = this.searchUsers.filter((obj) => {
            return friend._id === obj._id;
          }).pop();
          searchdata.friendReqStatus = 2;
          searchdata.friendReqSenderId = this.c_user._id;
          searchdata["friendReqId"] = response.data._id;
          this.friendsdata.push(searchdata);

          // -------------------- IN PROGRESS [AMMAR]-----------------------------------
          let tempUserData = this.c_user;
          tempUserData["friendReqId"] = response.data._id;
          tempUserData.friendReqSenderId = this.c_user._id;
          tempUserData.friendReqStatus = 2;
          var statusUpdate = {
            _id: friend._id,
            status: 2,
            myId: this.c_user._id,
            userObj: tempUserData   //sending current user obj with required appended fields
          }
          this.$socket.emit('updateRequeststatus', statusUpdate);
          // --------------------  ---------- ------------------------------------------
        }, function(err) {
          console.log('err', err);
          alert('error');
        })
      }
      else if (friend.friendReqStatus == 3) {
        console.log("ELSE IF");


        axios.post('/friends/updateFriendRequest', {
          _id: friend.friendReqId,
          status: 2,
          userId: this.c_user._id,
          friendId: friend._id,
        }).then(response => {
          console.log(response);

          // -------------------- IN PROGRESS [AMMAR]-----------------------------------
          const searchdata = this.searchUsers.filter((obj) => {
            return friend._id === obj._id;
          }).pop();
          searchdata.friendReqStatus = 2;
          searchdata.friendReqSenderId = this.c_user._id;
          searchdata["friendReqId"] = response.data._id;
          this.friendsdata.push(searchdata);

          let tempUserData = this.c_user;
          tempUserData["friendReqId"] = response.data._id;
          tempUserData.friendReqSenderId = this.c_user._id;
          tempUserData.friendReqStatus = 2;
          var statusUpdate = {
            _id: friend._id,
            status: 2,
            friendId: friend._id,
            myId: this.c_user._id,
            userObj: tempUserData   //sending current user obj with required appended fields
          }
          this.$socket.emit('updateRequeststatus', statusUpdate);
          // --------------------  ---------- ------------------------------------------

        }, function(err) {
          console.log('err', err);
          alert('error');
        })

      }

    },

    friendRequestupdate(data, status) {
      console.log(data);
      console.log(status);
      var statusUpdate = {
        _id: data._id,
        status: status,
        myId: this.c_user._id
      }
      this.$socket.emit('updateRequeststatus', statusUpdate);
      const fdata = this.friendsdata.filter((obj) => {
        return data._id === obj._id;
      }).pop();

      fdata.friendReqStatus = status;
      fdata.friendReqSenderId = this.c_user._id;
      axios.post('/friends/updateFriendRequest', {
        _id: data.friendReqId,
        status: status,
      }).then(response => {
        console.log(response);
      }, function(err) {
        console.log('err', err);
        alert('error');
      })
    },


    /////////////////////////////////////// ADD FRIENDS END ////////////////////////////////////////////////////

    userUploadfile(event){
     let userfilesdata = this.$refs.userImage.files;
      userfilesdata.forEach((file) => {
        console.log(file);
        let userProfiledata = new FormData();
        userProfiledata.append('file', file);
        userProfiledata.append('imageName', file.name);
        userProfiledata.append('id', this.c_user._id);
    
        console.log(userProfiledata);
        let config = {
          header: {
            'Content-Type': 'multipart/form-data'
          }
        }
        //this.isLoading = true;
        axios.post('/uploadProfilePic', userProfiledata, config).then((response) => {
          console.log(response.data);
       this.userImageName=response.data;
       localStorage.setItem('c_user_image', JSON.stringify(response.data));
       
          
        }, function(err) {
          console.log('err', err);
          alert('error');
        })
          })
    },

    chatSidebar() {
      $('#groupslide-menu').hide();
      $('#slide-menu').show();
    },
    groupSidebar() {
      $('#slide-menu').hide();
      $('#groupslide-menu').show();
    },
    saveTodo(){
     var todoObj={
          userId: this.c_user._id,
          assignFrom: this.c_user.name,
          todo: this.todo,
          assignTo: this.assignName,
          assignDate: this.assignDate,
        }
   axios.post('/addTodo', todoObj).then(response => {
          console.log(response);
          this.myTodoList.push(response.data);
        //  this.$socket.emit('notification', todoObj);
           this.$toasted.success('Task Created Successfully ', {
          theme: "toasted-primary",
          position: "top-center",
          duration: 3000
        })
         
           setTimeout(() => {
              $('#createtodoModal').modal('hide');
        }, 3000);

       
        }, function(err) {
          console.log('err', err);
          alert('error');
        })
    },

    getMytodo(){
        axios.post('/getmyTodo',{userId: this.c_user._id}).then(response => {
          console.log(response);
          this.myTodoList = response.data;
        }, function(err) {
          console.log('err', err);
          alert('error');
        })

    },
    getTodo(){
        axios.post('/getTodo',{userId: this.c_user._id}).then(response => {
          console.log(response);
          this.TodoList = response.data;
        }, function(err) {
          console.log('err', err);
          alert('error');
        })

    },
    todoStatusUpdate(value){
     // console.log(value.target);
       console.log($.parseJSON(JSON.stringify(value.target.value)));
       axios.post('/todoStatus',
        {
          userId: this.c_user._id,
          status:value.target.value
        }).then(response => {
          console.log(response);
          //this.TodoList = response.data;
        }, function(err) {
          console.log('err', err);
          alert('error');
        })

    },

     allChatMedia(){
     // console.log(value.target);
       axios.post('/allImageChat',
        {
          userId: this.c_user._id,
        }).then(response => {
          console.log(response);
          this.allMedia = response.data;
        }, function(err) {
          console.log('err', err);
          alert('error');
        })

    },
    
     allChatDocument(){
     // console.log(value.target);
       axios.post('/allDocumentChat',
        {
          userId: this.c_user._id,
        }).then(response => {
          console.log(response);
          this.allDocument = response.data;
        }, function(err) {
          console.log('err', err);
          alert('error');
        })

    },
  },

  mounted() {


    this.c_user = JSON.parse(localStorage.getItem('userData'));
    console.log(this.c_user.name);
    this.current_User = this.c_user;
    this.userImageName=JSON.parse(localStorage.getItem('c_user_image'));
    console.log(JSON.parse(localStorage.getItem('userData')));
    var dd = '';
    this.updateCallStatus(dd);
    localStorage.setItem('tokenData', this.c_user._id);
    this.hostname = this.$hostname;
    this.getfriends();
    this.getgroupsfirst();
    // this.getMytodo();
    // this.getTodo();
    //console.log(this.getUsers());
    this.emptyChatWithId();
    if (screen.width < 600) {
      $('.main-nav').removeClass('on');
      $('.main-nav').addClass('off');
    }

    ////////////////Chat dropzone //////////////////////

    document.addEventListener('dragenter', function(e) {
      console.log(e.target);
      if (e.target.className == 'message-input' || e.target.className == 'wrap emojis-main' || e.target.className == 'setemoj' || e.target.className == ' messages custom-scroll active messageschat' || e.target.className == 'messages custom-scroll messageschat active') {
        $("#dropzone").css("display", "block");
      }
      else {
        $("#dropzone").css("display", "none");
      }

    });

    //////////////// Group chat dropzone //////////////////////

    document.addEventListener('dragenter', function(e) {
      if (e.target.className == 'message-input' || e.target.className == 'wrap emojis-main' || e.target.className == 'setemoj' || e.target.className == 'messages custom-scroll group_chat_open active') {
        $("#groupdropzone").css("display", "block");
      }
      else {
        $("#groupdropzone").css("display", "none");
      }
    });

    this.broadcastHtml = document.getElementById('broadCastVideo');

    $(".bg-top").parent().addClass('b-top');
    $(".bg-bottom").parent().addClass('b-bottom');
    $(".bg-center").parent().addClass('b-center');
    $(".bg_size_content").parent().addClass('b_size_content');
    $(".bg-img").parent().addClass('bg-size');
    $('.bg-img').each(function() {
      var el = $(this),
        src = el.attr('src'),
        parent = el.parent();
      parent.css({
        'background-image': 'url(' + src + ')',
        'background-size': 'cover',
        'background-position': 'center',
        'display': 'block'
      });
      el.hide();
    });


  $('.sidebar-top li').click(function(e) {

    $('.sidebar-top li.active').removeClass('active');

    var $parent = $(this).parent();
    $(this).addClass('active');
    e.preventDefault();
  });

  $('.meetingContentRow').click(function(e) {

    $('.meetingContentRow.active').removeClass('active');

    var $parent = $(this).parent();
    $(this).addClass('active');
    e.preventDefault();
  });

  $('.roomContentRow').click(function(e) {

    $('.roomContentRow.active').removeClass('active');

    var $parent = $(this).parent();
    $(this).addClass('active');
    e.preventDefault();
  });

    /*=====================
          04. Chitchat Loder js
          ==========================*/
    $('.chitchat-loader').slideUp('slow', function() {
      $(this).remove();
    });

    /*=====================
          05. Search js
          ==========================*/
    $('.search').on('click', function(e) {
      $(this).siblings().toggleClass("open");
    });
    $('.close-search').on('click', function(e) {
      $(this).parent().parent().removeClass("open");
    });
    $('.search-right').on('click', function(e) {
      $(this).parent().parent().parent().parent().parent().parent().find(".form-inline").toggleClass("open");
    });
    $('.close-search').on('click', function(e) {
      $(this).parent().parent().removeClass("open");
    });

    /*=====================
          06. Mute js
          ==========================*/
    $('.mute').on('click', function(e) {
      $(this).children().toggleClass("off");
    });

    /*=====================
          07. Button Effect js
          ==========================*/
    $('.button-effect').on('click', function(e) {
      e.preventDefault();
      var self = $(this),
        wave = '.effect-wave',
        btnWidth = self.outerWidth(),
        x = e.offsetX,
        y = e.offsetY;
      self.prepend('<span class="effect-wave"></span>')
      $(wave)
        .css({
          'top': y,
          'left': x
        })
        .animate({
          opacity: '0',
          width: btnWidth * 2,
          height: btnWidth * 2
        }, 500, function() {
          self.find(wave).remove()
        })
    })

    /*=====================
          08. Collapse Title js
          ==========================*/
    $('.block-title').on('click', function(e) {
      e.preventDefault;
      var speed = 300;
      var thisItem = $(this).parent(),
        nextLevel = $(this).next('.block-content');
      if (thisItem.hasClass('open')) {
        thisItem.removeClass('open');
        nextLevel.slideUp(speed);
      } else {
        thisItem.addClass('open');
        nextLevel.slideDown(speed);
      }
    });

    /*=====================
          09. Refresh Request information next & previous button
          ==========================*/
    $('.refresh').on('click', function(e) {
      $(this).toggleClass('refreshed');
    });
    $('.req-info').on('click', function(e) {
      $(this).addClass('disabled');
    });
    $('.next').on('click', function(e) {
      $(this).parent().parent().siblings().addClass('open');
    });
    $('.previous').on('click', function(e) {
      $(this).parent().parent().parent().removeClass('open');
    });

    $('.chat-cont-toggle').on('click', function(e) {
      $('.chat-cont-setting ').toggleClass('open');
    });




    /*=====================
          10 .Full Screen
          ==========================*/

    $('.toggle-full-screen').on('click', function(e) {
      $('#videocall').toggleClass("active");
    })

    /*=====================
          11.Header fix
          ==========================*/
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 60) {
        $(".landing-header").addClass("fixed");
      } else {
        $(".landing-header").removeClass("fixed");
      }
    });
    /*=====================
      12.Tap on Top
      ==========================*/
    $(window).on('scroll', function() {
      if ($(this).scrollTop() > 600) {
        $('.tap-top').fadeIn();
      } else {
        $('.tap-top').fadeOut();
      }
    });
    $('.tap-top').on('click', function() {
      $("html, body").animate({
        scrollTop: 0
      }, 600);
      return false;
    });

$('#upload').change(function() {
    var filename = $('#upload').val();
    if (filename.substring(3,11) == 'fakepath') {
        filename = filename.substring(12);
    } // For Remove fakepath
    $("label[for='file_name'] b").html(filename);
    $("label[for='file_default']").text('Selected File: ');
    if (filename == "") {
        $("label[for='file_default']").text('No File Choosen');
    }
});

    /*=====================
    14 footer responsive js
    ==========================*/
    var contentwidth = jQuery(window).width();
    if ((contentwidth) < '768') {
      jQuery('.footer-title h3').append('<span class="according-menu"></span>');
      jQuery('.footer-title').on('click', function() {
        jQuery('.footer-title').removeClass('active');
        jQuery('.footer-contant').slideUp('normal');
        if (jQuery(this).next().is(':hidden') == true) {
          jQuery(this).addClass('active');
          jQuery(this).next().slideDown('normal');
        }
      });
      jQuery('.footer-contant').hide();
    } else {
      jQuery('.footer-contant').show();
    }
    /*=====================
        15. Pin box
        ==========================*/
    $('.ti-pin2').on('click', function() {
      $(this).parent().parent().parent().toggleClass('pined');
    });

    /*=====================
        16 Reminder
        ==========================*/
    $(".reminder-count li").on('click', function() {
      $('.reminder-count li').removeClass('active');
      $(this).addClass('active');
    });

    $('.Show-reminder').on('click', function(e) {
      $('.target-reminder-list').show(500);
      $('.Show-reminder').hide(0);
      $('.Hide-reminder').show(0);
    });
    $('.Hide-reminder').on('click', function(e) {
      $('.target-reminder-list').hide(500);
      $('.Show-reminder').show(0);
      $('.Hide-reminder').hide(0);
    });
    $('.toggle').on('click', function(e) {
      $('.target-reminder-list').toggle('slow');
    });

    /*=====================
        17 set wallpaper onclick
        ==========================*/
    $('.wallpaper li.bg-color').on('click', function() {
      var color = $(this).css('background-image');
      $(".wallpaper li").removeClass('active');
      $(this).addClass("active");
      $(".chitchat-main .messages").css({
        'background-image': color,
        'background-blend-mode': 'unset',
      });
    });
    $('.wallpaper li.bg-size').on('click', function() {
      var color = $(this).children(".bg-img").attr('src');
      $(".wallpaper li").removeClass('active');
      $(this).addClass("active");
      $(".chitchat-main .messages").css({
        'background-image': 'url(' + color + ')',
        'background-color': 'transparent'
      });
    });

    /*=====================
        18 custom tab
        ==========================*/
    $(".contact-log-main li , .call-log-main li").on('click', function() {
      $(this).parent().find("li").removeClass("active");
      $(this).addClass("active");
    });
    $("#myTab1 li a").on('click', function() {
      var active_class = $(this).attr("data-to");
      $('.messages.custom-scroll').removeClass("active");
      $('#' + active_class).addClass("active");
    });
    $(".chat-tabs .nav-tabs li[data-to]").on('click', function() {
      $('.chitchat-main .tabto').removeClass("active");
      var active_class = $(this).attr("data-to");
      $('.' + active_class).addClass("active");
    });



    /*=====================
      22. toggle classes
      ==========================*/
    $('.mobile-sidebar').on('click', function() {
      $('.chitchat-container').toggleClass("mobile-menu");
    });

    $('.group-main .group-box').on('click', function() {
      $('.chitchat-container').toggleClass("mobile-menu");
    });
    $('.call-log-main .call-box').on('click', function() {
      $('.chitchat-container').toggleClass("mobile-menu");
    });
    $('.contact-log-main .contact-box').on('click', function() {
      $('.chitchat-container').toggleClass("mobile-menu");
    });

    $('.mobile-back').on('click', function() {
      $('.chitchat-container').toggleClass("mobile-menu");
      $('.main-nav').removeClass("on");
    });


    $('.chat-friend-toggle').on('click', function() {
      $('.chat-frind-content').toggle();
    });
    $('.call-option-toggle').on('click', function() {
      $('.call-option-content').toggle();
    });

    $('.calloption-close').on('click', function() {
      $('.call-option-content').css('display', 'none');
    });
    $('.gr-chat-friend-toggle').on('click', function() {
      $('.gr-chat-frind-content').toggle();
    });
    $('.msg-setting').on('click', function() {
      $(this).siblings('.msg-dropdown').toggle();
    });
    $(".favourite").on('click', function() {
      $(this).toggleClass("btn-outline-primary").toggleClass("btn-primary");
    });
    $(".edit-btn").on('click', function() {
      $(this).parent().parent().toggleClass("open");
    });

    /*=====================
        23. ADD tO-DO LIST
        ==========================*/

    $('.add').on('click', function(e) {
      var total_element = $(".element").length;
      var lastid = $(".element:last").attr("id");
      var split_id = lastid.split("_");
      var nextindex = Number(split_id[1]) + 1;
      var max = 100;
      if (total_element < max) {
        $(".element:last").after("<div class='element' id='div_" + nextindex + "'></div>");
        $("#div_" + nextindex).append("<form class='p-15'><div class='form-group' style='display :flex'><input type='checkbox' id='txt_" + nextindex + "'/><input type='text' class='m-l-15'/></div><div class='todo-buttons'><a class='badge badge-success font_label' href='#'' style='padding: 7px 12px'>Save</a><a class='badge badge-outline-primary font_label' href='#'' style='margin-left : 15px;padding: 7px 12px'>Cancel</a><span id='remove_" + nextindex + "' class='remove' style='margin-left : 40px'><i class='fa fa-trash' style='font-size : 20px'></i></span></div></form>");
      }
    });
    $('.todo-list').on('click', '.remove', function() {
      var id = this.id;
      var split_id = id.split("_");
      var deleteindex = split_id[1];
      $("#div_" + deleteindex).remove();
    });

    $('.trashbtn').on('click', function(e) {
      $(".todo-main-content .default-form").remove();
    });

    /*=====================
            24. right sidebar
            ==========================*/


    $('.apps-toggle').on('click', function() {
      if (!$('body').hasClass('sidebar-active main-page menu-active'))
        $('body').toggleClass('sidebar-active main-page');
      $('body').removeClass('menu-active');
      $('.app-sidebar').toggleClass('active');
      $('.chitchat-main').toggleClass("small-sidebar");
    });



    /*=====================
            27. profile open close
            ==========================*/
    $('.menu-trigger, .close-profile').on('click', function(e) {
      $('body').toggleClass('menu-active'); //add class
      $('.app-sidebar').toggleClass('active'); //remove
      $('.chitchat-main').toggleClass("small-sidebar"); //remove
      if ($(window).width() <= 1440) {
        $('.chitchat-container').toggleClass('sidebar-overlap');
        $('.chitchat-main').addClass("small-sidebar"); //remove
      }
      if ($('body').hasClass('menu-active')) {
        $('body').addClass('sidebar-active main-page');
        $('.app-sidebar').removeClass('active');
        $('.chitchat-main').removeClass("small-sidebar");
      }

    });
    /*=====================
            28. dropdown
            ==========================*/

    $('.dropdown').click(function() {
      $(this).attr('tabindex', 1).focus();
      $(this).toggleClass('active');
      $(this).find('.dropdown-menu').slideToggle(300);
    });
    $('.dropdown').focusout(function() {
      $(this).removeClass('active');
      $(this).find('.dropdown-menu').slideUp(300);
    });
    $('.dropdown .dropdown-menu li').click(function() {
      $(this).parents('.dropdown').find('span').text($(this).text());
      $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
    });

    /*=====================
        29. Sidebar setting
        ==========================*/

    $(".sidebar-setting .two-column").on('click', function() {
      $(".sidebar-setting li").removeClass('active');
      $(this).addClass("active");
      $('.theme-title .icon-btn').removeClass("btn-outline-light").removeClass("btn-outline-primary");
      $('.main-nav').removeClass("on");
    });
    $(".sidebar-setting .three-column").on('click', function() {
      $(".sidebar-setting li").removeClass('active');
      $(this).addClass("active");
      $('.theme-title .icon-btn').addClass("btn-outline-light").addClass("btn-outline-primary");
      $('.main-nav').addClass("on");
    });

    /*=====================
        Chat 
        ==========================*/


    $(window).on('keydown', function(e) {
      if (e.which == 13) {
        if (!e.target.value) {
          return false
        }

        return false;
      }
    });

    $(".emojis-sub-contain ul li").click(function() {
      var number = $(this).html();
      $("#setemoj").focus().val(function() {
        return this.value + number + ' ';
        $(".messages").animate({
          scrollTop: $(document).height()
        }, "fast");
      });
      $('#send-msg').removeClass('disabled').removeAttr("disabled")
    });


    $('#send-msg').addClass('disabled').attr("disabled", "disabled")
    $("#setemoj").keyup(function(e) {
      if (!e.target.value) {
        $('#send-msg').addClass('disabled').attr("disabled", "disabled")
      } else {
        $('#send-msg').removeClass('disabled').removeAttr("disabled")
      }
    });



    $(".groupemojis-sub-contain ul li").click(function() {
      var number = $(this).html();
      $("#groupsetemoj").focus().val(function() {
        return this.value + number;
        $(".messages").animate({
          scrollTop: $(document).height()
        }, "fast");
      });
      $('#send-groupmsg').removeClass('disabled').removeAttr("disabled")
    });


    $('#send-groupmsg').addClass('disabled').attr("disabled", "disabled")
    $("#groupsetemoj").keyup(function(e) {
      if (!e.target.value) {
        $('#send-groupmsg').addClass('disabled').attr("disabled", "disabled")
      } else {
        $('#send-groupmsg').removeClass('disabled').removeAttr("disabled")
      }
    });



    /*=====================
        25. Sticker
        ==========================*/
    $('.sticker-contain ul li').on('click', function(e) {
      var sticker = $(this).children().html();
      $('<li class="replies"> <div class="media"> <div class="profile mr-4 bg-size" style="background-image: url("../assets/images/contact/1.jpg"); background-size: cover; background-position: center center;"></div><div class="media-body"> <div class="contact-name"> <h5>Alan josheph</h5> <h6>01:42 AM</h6> <ul class="msg-box"> <li> <h5>' + sticker + '</h5> </li></ul> </div></div></div></li>').appendTo($('.messages .chatappend'));
      $('.chat-main .active .details h6').html('<span>You : </span>' + sticker);
      var test = $(this).height();
      $(".messages").animate({

        scrollTop: $(document).height()
      }, "fast");
      $(".sticker-contain").removeClass("open");
      $(".toggle-sticker").removeClass("active");
    });

    // Toggle sticker
    $('.toggle-sticker').on('click', function() {
      $(this).toggleClass("active");
      $('.sticker-contain').toggleClass("open");
      $('.emojis-contain').removeClass("open");
      $(".toggle-emoji").removeClass("active");
      $('.contact-poll-content').css('display', 'none');
    });

    // Toggle emoji
    $('.toggle-emoji').on('click', function(e) {
      e.stopPropagation();
      $(this).toggleClass("active");
      $('.emojis-contain').toggleClass("open");
      $(".sticker-contain").removeClass("open");
      $(".toggle-sticker").removeClass("active");
      $('.contact-poll-content').css('display', 'none');
    });

    // Toggle poll
    $('.contact-poll').on('click', function(e) {
      $('.contact-poll-content').toggle();
      $('.emojis-contain').removeClass("open");
      $(".toggle-emoji, .toggle-sticker").removeClass("active");
    });

    // Outside click
    $(document).on('click', function(e) {
      var outside_space = $(".outside");
      if (!outside_space.is(e.target) &&
        outside_space.has(e.target).length === 0) {
        $(".sticker-contain").removeClass("open");
        $(".emojis-contain").removeClass("open");
        $(".toggle-emoji, .toggle-sticker").removeClass("active");
        $('.contact-poll-content').css('display', 'none');
        $('.chat-frind-content').css('display', 'none');
        //$('.call-option-content').css('display', 'none');
      }
    })

    $(".mode").on("click", function() {
      $('.mode i').toggleClass("fa-moon-o").toggleClass("fa-lightbulb-o");
      $('body').toggleClass("dark");
    });
    $(".mainnav").on("click", function() {
      $('.theme-title .icon-btn').toggleClass("btn-outline-light").toggleClass("btn-outline-primary");
      $('.main-nav').toggleClass("on");
    });

    $(".close-apps").on("click", function() {
      $('.apps-ul li').removeClass("active");
      $('.chitchat-main').addClass("small-sidebar");
    });

    $(".close-app").on("click", function() {
      $('body').removeClass("sidebar-active");
      $('.app-sidebar').removeClass("active");
    });

    $(".close-panel").on("click", function() {
      $('.dynemic-sidebar, .button-effect.active, sidebar-top .sidebar-top > li > a').removeClass("active");
      $('.recent-default').addClass("active");
    });

    $("body").on("click", ".colors li", function() {
      $(this).addClass('active').siblings().removeClass('active');
      var $color = $(this).attr("data-attr");
      $("#color").attr("href", "../assets/css/" + $color + ".css");
      return false;
    });


  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  border-radius: 8px;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.dropzone {
  box-sizing: border-box;
  display: none;
  position: absolute;
  width: 92%;
  height: 89%;
  z-index: 99999;
  background: #80808066;
  border: 11px dashed #60a7dc;
}

.replybox {
  width: 63%;
  height: auto;
  background: rgb(224, 221, 221);
  margin-left: 121px;
  border-top-right-radius: 13px;
  border-top-left-radius: 13px;
  border-bottom: 2px solid #9c979747;
}

.activeemoji {
  z-index: 9999;
  position: absolute;
  bottom: 0px;
}

.activeChatemoji {
  z-index: 9999;
  position: absolute;
  bottom: 0px;
}

.groupmembers {
  padding-top: 7px;
  padding-bottom: 7px;
}

img.emojione {

  margin: 0px !important;
  display: inline !important;

  height: auto;
  width: 50px;
}

@media screen and (max-width: 480px) {
  .replybox {
    width: 57%;
    height: auto;
    background: rgb(224, 221, 221);
    margin-left: 72px;
    border-top-right-radius: 13px;
    border-top-left-radius: 13px;
    border-bottom: 2px solid #9c979747;
  }
  .message-call {
  height: 59px !important;
  position: fixed;
  transition: all 0.5s;
  padding: 17px 8px;
  z-index: 9;
  width: 100% !important;
  bottom: 0px !important;
}
.afteropenChat {
  background-image: url(/img/videocall_bg.b320143d.jpg);
  background-size: cover;
  background-position: center center;
  display: block;
  width: 0%;
  float: left;
}

  li.sent h5 {
    margin-left: 15px;
  }
  div#EmojiPicker {
    margin-bottom: 35px;
  }
}

@media screen and (max-width: 767.98px) {
  .message-input {
    width: calc(100% - 200px);
  }
}

@media screen and (max-width: 767.98px) {
  .message-input {
    width: calc(100% - 200px);
  }
}

@media screen and (max-width: 992px) {
  .message-input {
    width: calc(100% - 215px);
  }
}

@media screen and (max-width: 1366px) {
  .message-input {
    width: calc(100% - 490px);
  }
}

@media screen and(max-width: 767.98px) {
  .message-input {
    width: calc(100% - 200px);
  }
}

@media screen and (max-width: 992px) {
  .message-input {
    width: calc(100% - 215px);
  }
}

@media screen and (max-width: 800px) {

  .message-input {
    width: 100vw;
    -webkit-animation: fadeInRight 300ms ease-in-out;
    animation: fadeInRight 300ms ease-in-out;
    transition: all 0.3s ease;
  }
}

@media screen and (max-width: 1024px) {
  .message-input {
    padding: 26px 20px;
  }
}

@media screen and (max-width: 1366px) {
  .message-input {
    padding: 26px 25px;
  }
  .chitchat-main #broadcast-input input {
    width: calc(100% - 90px);
  }
  .chitchat-main #o2osinglemessage-input input {
    width: calc(100% - 170px);
  }
}

.message-call {
  height: 72px !important;
  position: fixed;
  transition: all 0.5s;
  padding: 22px 8px;
  z-index: 9;
  width: 30% !important;
  bottom: -24px !important;
}

.beforeopenChat {
  background-image: url(/img/videocall_bg.b320143d.jpg);
  background-size: cover;
  background-position: center center;
  display: block;
  width: 100%;
  float: left;
}

.afteropenChat {
  background-image: url(/img/videocall_bg.b320143d.jpg);
  background-size: cover;
  background-position: center center;
  display: block;
  width: 70%;
  float: left;
}

.modelafter {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(99vh - 60px);
}

.modelbefore {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 60px);
}




/*020 video call*/

.o2obeforeopenChat {
  background-image: url(/img/videocall_bg.b320143d.jpg);
  background-size: cover;
  background-position: center center;
  display: block;
  width: 100%;
  float: left;
}

.o2oafteropenChat {
  background-image: url(/img/videocall_bg.b320143d.jpg);
  background-size: cover;
  background-position: center center;
  display: block;
  width: 70%;
  float: left;
}

.o2omodelafter {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(99vh - 60px);
  max-width: 1150px !important;
}

.o2omodelbefore {
  max-width: 850px !important;
}


/*Group video call*/

.groupbeforeopenChat {
  background-image: url(/img/videocall_bg.b320143d.jpg);
  background-size: cover;
  background-position: center center;
  display: block;
  width: 100%;
  float: left;
}

.groupafteropenChat {
  background-image: url(/img/videocall_bg.b320143d.jpg);
  background-size: cover;
  background-position: center center;
  display: block;
  width: 70%;
  float: left;
}

.groupmodelafter {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(99vh - 60px);
  max-width: 1150px !important;
}

.groupmodelbefore {
  max-width: 850px !important;
}


.beforelocalVideo {
  width: 286px;
  height: 217px;
}

.afterlocalVideo {
  width: 227px;
  height: 176px;
}

.callChat {
  width: 30%;
  float: right;
}

.minimizeclass {
  border-radius: 100%;
  background-color: #eff1f2;
  padding: 9px;
  width: 35px;
  height: 36px;
}

#remoteScreenshare {
  object-fit: initial;
  width: 400px;
  height: 600px;
}

#videoOutput {
  object-fit: initial;
  height: 630px;
}
</style>
