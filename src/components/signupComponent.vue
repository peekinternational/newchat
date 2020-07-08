<template>
  <div class="hello">
     <div class="login-page1">
      <div class="container-fluid p-0">
        <div class="row">
          <div class="col-12">
            <div class="login-contain-main">
              <div class="left-page">
                <div class="login-content">
                  <div class="login-content-header"><img class="image-fluid" src="../assets/images/logo/landing-logo.png" alt="images"></div>
                  <h3 style="margin: 2px;">Hello Everyone , We are Chitchat</h3>
                  <h4>Wellcome to chitchat please login to your account.</h4>
                  <form class="form1">
                      <div class="form-group">
                      <label class="col-form-label" for="inputEmail3">Name</label>
                      <input class="form-control" id="inputEmail3" type="text" placeholder="Demo">
                    </div>
                      <div class="form-group">
                      <label class="col-form-label" for="inputEmail3">Email Address</label>
                      <input class="form-control" id="inputEmail3" type="email" placeholder="Demo@123gmail.com">
                    </div>
                      <div class="form-group">
                      <label class="col-form-label" for="inputEmail3">Phone Number</label>
                      <input class="form-control" id="inputEmail3" type="number" placeholder="1242352325">
                    </div>
                    <div class="form-group">
                      <label class="col-form-label" for="inputEmail3">Password</label>
                      <input class="form-control" id="inputEmail3" type="password" placeholder="Password">
                    </div>
                    
                    
                    <div class="form-group">
                      <div class="buttons"><a class="btn btn-primary button-effect" href="#">Signup</a><router-link to="/login" class="btn button-effect btn-signup">Login</router-link>
                      </div>
                    </div>
                  </form>
                  
			
                  <div class="termscondition">
                    <h4 class="mb-0"><span>*</span>Terms and condition<b>&amp;</b>Privacy policy</h4>
                  </div>
                </div>
              </div>
              <div class="right-page">
                <div class="right-login animat-rate">
                  <div class="animation-block">
                    <div class="bg_circle">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div class="cross"></div>
                    <div class="cross1"></div>
                    <div class="cross2"></div>
                    <div class="dot"></div>
                    <div class="dot1"></div>
                    <div class="maincircle"></div>
                    <div class="top-circle"></div>
                    <div class="center-circle"></div>
                    <div class="bottom-circle"></div>
                    <div class="bottom-circle1"></div>
                    <div class="right-circle"></div>
                    <div class="right-circle1"></div><img class="heart-logo" src="../assets/images/login_signup/5.png" alt="login logo"/><img class="has-logo" src="../assets/images/login_signup/4.png" alt="login logo"/><img class="login-img" src="../assets/images/login_signup/1.png" alt="login logo"/><img class="boy-logo" src="../assets/images/login_signup/6.png" alt="login boy logo"/><img class="girl-logo" src="../assets/images/login_signup/7.png" alt="girllogo"/><img class="cloud-logo" src="../assets/images/login_signup/2.png" alt="login logo"/><img class="cloud-logo1" src="../assets/images/login_signup/2.png" alt="login logo"/><img class="cloud-logo2" src="../assets/images/login_signup/2.png" alt="login logo"/><img class="cloud-logo3" src="../assets/images/login_signup/2.png" alt="login logo"/><img class="cloud-logo4" src="../assets/images/login_signup/2.png" alt="login logo"/><img class="has-logo1" src="../assets/images/login_signup/4.png" alt="login logo"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import '../assets/js/owl.carousel.js';
import '../assets/js/popper.min.js';
import 'feather-icons/dist/feather.min.js';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import '../assets/js/bootstrap.js';

import '../assets/js/easytimer.min.js';

import '../assets/js/date-picker/datepicker.js';
import '../assets/js/date-picker/datepicker.en.js';
import '../assets/js/date-picker/datepicker.custom.js';
import '../assets/js/tour/intro.js';
import '../assets/js/tour/intro-init.js';
import '../assets/js/jquery.magnific-popup.js';
import '../assets/js/zoom-gallery.js';
import '../assets/js/script.js';


import { AirplayIcon, AtSignIcon,PhoneIcon,VideoIcon,SmileIcon,MicIcon,SendIcon,MessageSquareIcon,UsersIcon,PlusCircleIcon,PlusIcon,PhoneIncomingIcon,PhoneOutgoingIcon,FileIcon,ClockIcon,ListIcon,GridIcon,BookIcon,XIcon,DownloadIcon,SearchIcon,StarIcon,MoreVerticalIcon} from 'vue-feather-icons';
import carousel from 'vue-owl-carousel';

export default {
  name: 'MainComponent',
   components: { carousel,PhoneIncomingIcon,PhoneIcon,VideoIcon,SmileIcon,MicIcon,SendIcon,MessageSquareIcon,UsersIcon,PlusCircleIcon,PlusIcon,PhoneOutgoingIcon,FileIcon,ClockIcon,ListIcon,GridIcon,BookIcon,XIcon,DownloadIcon,SearchIcon,StarIcon,MoreVerticalIcon },
      props:[],
        data(){
            return{

            }
    
        },
        watch:{
    
                },
        methods:{
           
 favourite(){
        
       $("#recent").removeClass("active");
       $("#contact-list").removeClass("active");
       $("#document").removeClass("active");
       $("#notification").removeClass("active");
       $("#settings").removeClass("active");
       $("#status").removeClass("active");
      // add class to the one we clicked
      $('#favourite').addClass("active");
        
         },

status(){
        
       $("#recent").removeClass("active");
       $("#contact-list").removeClass("active");
       $("#document").removeClass("active");
       $("#notification").removeClass("active");
       $("#settings").removeClass("active");
       $("#favourite").removeClass("active");
      // add class to the one we clicked
      $('#status').addClass("active");
        
         },

document(){
        
      $("#recent").removeClass("active");
       $("#contact-list").removeClass("active");
       $("#status").removeClass("active");
       $("#notification").removeClass("active");
       $("#settings").removeClass("active");
       $("#favourite").removeClass("active");
      // add class to the one we clicked
      $('#document').addClass("active");
        
         },

contact(){
        
       $("#recent").removeClass("active");
       $("#status").removeClass("active");
       $("#document").removeClass("active");
       $("#notification").removeClass("active");
       $("#settings").removeClass("active");
       $("#favourite").removeClass("active");
      // add class to the one we clicked
      $('#contact-list').addClass("active");
        
         },

notification(){
        
       $("#recent").removeClass("active");
       $("#contact-list").removeClass("active");
       $("#document").removeClass("active");
       $("#status").removeClass("active");
       $("#settings").removeClass("active");
       $("#favourite").removeClass("active");
      // add class to the one we clicked
      $('#notification').addClass("active");
        
         },

 setting(){
        
      $("#recent").removeClass("active");
       $("#contact-list").removeClass("active");
       $("#document").removeClass("active");
       $("#notification").removeClass("active");
       $("#status").removeClass("active");
       $("#favourite").removeClass("active");
      // add class to the one we clicked
      $('#settings').addClass("active");
        
         },

   files(){
        
      $("#todo").removeClass("active");
       $("#notes").removeClass("active");
       $("#reminder").removeClass("active");
      // add class to the one we clicked
      $('#files').addClass("active");
        
         },
         reminder(){
        
      $("#todo").removeClass("active");
       $("#notes").removeClass("active");
       $("#files").removeClass("active");
      // add class to the one we clicked
      $('#reminder').addClass("active");
        
         },
         notes(){
        
      $("#todo").removeClass("active");
       $("#files").removeClass("active");
       $("#reminder").removeClass("active");
      // add class to the one we clicked
      $('#notes').addClass("active");
        
         },

         todo(){
        
      $("#files").removeClass("active");
       $("#notes").removeClass("active");
       $("#reminder").removeClass("active");
      // add class to the one we clicked
      $('#todo').addClass("active");
        
         },

        },
        mounted() {
    
         /*=====================
      02. Background Image js
      ==========================*/
      $(".bg-top").parent().addClass('b-top');
      $(".bg-bottom").parent().addClass('b-bottom');
      $(".bg-center").parent().addClass('b-center');
      $(".bg_size_content").parent().addClass('b_size_content');
      $(".bg-img").parent().addClass('bg-size');
      $('.bg-img').each(function () {
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

 

    /*=====================
         04. Chitchat Loder js
         ==========================*/
         $('.chitchat-loader').slideUp('slow', function () {
            $(this).remove();
        });

    /*=====================
         05. Search js
         ==========================*/
         $('.search').on('click', function (e) {
            $(this).siblings().toggleClass("open");
        });
         $('.close-search').on('click', function (e) {
            $(this).parent().parent().removeClass("open");
        });
         $('.search-right').on('click', function (e) {
            $(this).parent().parent().parent().parent().parent().parent().find(".form-inline").toggleClass("open");
        });
         $('.close-search').on('click', function (e) {
            $(this).parent().parent().removeClass("open");
        });

    /*=====================
         06. Mute js
         ==========================*/
         $('.mute').on('click', function (e) {
            $(this).children().toggleClass("off");
        });

    /*=====================
         07. Button Effect js
         ==========================*/
         $('.button-effect').on('click', function (e) {
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
            }, 500, function () {
                self.find(wave).remove()
            })
        })

    /*=====================
         08. Collapse Title js
         ==========================*/
         $('.block-title').on('click', function (e) {
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
         $('.refresh').on('click', function (e) {
            $(this).toggleClass('refreshed');
        });
         $('.req-info').on('click', function (e) {
            $(this).addClass('disabled');
        });
         $('.next').on('click', function (e) {
            $(this).parent().parent().siblings().addClass('open');
        });
         $('.previous').on('click', function (e) {
            $(this).parent().parent().parent().removeClass('open');
        });

         $('.chat-cont-toggle').on('click', function (e) {
            $('.chat-cont-setting ').toggleClass('open');
        });




    /*=====================
          10 .Full Screen
          ==========================*/

          $('.toggle-full-screen').on('click', function (e) {
            $('#videocall').toggleClass("active");
        })

    /*=====================
          11.Header fix
          ==========================*/
          $(window).scroll(function () {
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
      $(window).on('scroll', function () {
        if ($(this).scrollTop() > 600) {
            $('.tap-top').fadeIn();
        } else {
            $('.tap-top').fadeOut();
        }
    });
      $('.tap-top').on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    
    /*=====================
    14 footer responsive js
    ==========================*/
    var contentwidth = jQuery(window).width();
    if ((contentwidth) < '768') {
        jQuery('.footer-title h3').append('<span class="according-menu"></span>');
        jQuery('.footer-title').on('click', function () {
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
        $('.ti-pin2').on('click', function () {
            $(this).parent().parent().parent().toggleClass('pined');
        });

    /*=====================
        16 Reminder
        ==========================*/
        $(".reminder-count li").on('click', function () {
            $('.reminder-count li').removeClass('active');
            $(this).addClass('active');
        });

        $('.Show-reminder').on('click', function (e) {
            $('.target-reminder-list').show(500);
            $('.Show-reminder').hide(0);
            $('.Hide-reminder').show(0);
        });
        $('.Hide-reminder').on('click', function (e) {
            $('.target-reminder-list').hide(500);
            $('.Show-reminder').show(0);
            $('.Hide-reminder').hide(0);
        });
        $('.toggle').on('click', function (e) {
            $('.target-reminder-list').toggle('slow');
        });

    /*=====================
        17 set wallpaper onclick
        ==========================*/
        $('.wallpaper li.bg-color').on('click', function () {
            var color = $(this).css('background-image');
            $(".wallpaper li").removeClass('active');
            $(this).addClass("active");
            $(".chitchat-main .messages").css({
                'background-image': color,
                'background-blend-mode': 'unset',
            });
        });
        $('.wallpaper li.bg-size').on('click', function () {
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
        $(".contact-log-main li , .call-log-main li").on('click', function () {
            $(this).parent().find("li").removeClass("active");
            $(this).addClass("active");
        });
        $("#myTab1 li a").on('click', function () {
            var active_class = $(this).attr("data-to");
            $('.messages.custom-scroll').removeClass("active");
            $('#' + active_class).addClass("active");
        });
        $(".chat-tabs .nav-tabs li[data-to]").on('click', function () {
            $('.chitchat-main .tabto').removeClass("active");
            var active_class = $(this).attr("data-to");
            $('.' + active_class).addClass("active");
        });
      


    /*=====================
      22. toggle classes
      ==========================*/
      $('.mobile-sidebar').on('click', function () {
        $('.chitchat-container').toggleClass("mobile-menu");
    });
      $('.chat-main .chat-box').on('click', function () {
        $('.chitchat-container').toggleClass("mobile-menu");
    });
      $('.group-main .group-box').on('click', function () {
        $('.chitchat-container').toggleClass("mobile-menu");
    });
      $('.call-log-main .call-box').on('click', function () {
        $('.chitchat-container').toggleClass("mobile-menu");
    });
      $('.contact-log-main .contact-box').on('click', function () {
        $('.chitchat-container').toggleClass("mobile-menu");
    });

      $('.mobile-back').on('click', function () {
        $('.chitchat-container').toggleClass("mobile-menu");
        $('.main-nav').removeClass("on");
    });


      $('.chat-friend-toggle').on('click', function () {
        $('.chat-frind-content').toggle();
    });

      $('.gr-chat-friend-toggle').on('click', function () {
        $('.gr-chat-frind-content').toggle();
    });
      $('.msg-setting').on('click', function () {
        $(this).siblings('.msg-dropdown').toggle();
    });
      $(".favourite").on('click', function () {
        $(this).toggleClass("btn-outline-primary").toggleClass("btn-primary");
    });
      $(".edit-btn").on('click', function () {
        $(this).parent().parent().toggleClass("open");
    });

    /*=====================
        23. ADD tO-DO LIST
        ==========================*/

        $('.add').on('click', function (e) {
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
        $('.todo-list').on('click', '.remove', function () {
            var id = this.id;
            var split_id = id.split("_");
            var deleteindex = split_id[1];
            $("#div_" + deleteindex).remove();
        });

        $('.trashbtn').on('click', function (e) {
            $(".todo-main-content .default-form").remove();
        });

    /*=====================
           24. right sidebar
           ==========================*/
       

           $('.apps-toggle').on('click', function () {
            if (!$('body').hasClass('sidebar-active main-page menu-active'))
                $('body').toggleClass('sidebar-active main-page');
            $('body').removeClass('menu-active');
            $('.app-sidebar').toggleClass('active');
            $('.chitchat-main').toggleClass("small-sidebar");
        });



    /*=====================
           27. profile open close
           ==========================*/
           $('.menu-trigger, .close-profile').on('click', function (e) {
            $('body').toggleClass('menu-active'); //add class
            $('.app-sidebar').toggleClass('active'); //remove
            $('.chitchat-main').toggleClass("small-sidebar"); //remove
            if($( window ).width() <= 1440 ) {
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

           $('.dropdown').click(function () {
            $(this).attr('tabindex', 1).focus();
            $(this).toggleClass('active');
            $(this).find('.dropdown-menu').slideToggle(300);
        });
           $('.dropdown').focusout(function () {
            $(this).removeClass('active');
            $(this).find('.dropdown-menu').slideUp(300);
        });
           $('.dropdown .dropdown-menu li').click(function () {
            $(this).parents('.dropdown').find('span').text($(this).text());
            $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
        });

    /*=====================
        29. Sidebar setting
        ==========================*/

        $(".sidebar-setting .two-column").on('click', function () {
            $(".sidebar-setting li").removeClass('active');
            $(this).addClass("active");
            $('.theme-title .icon-btn').removeClass("btn-outline-light").removeClass("btn-outline-primary");
            $('.main-nav').removeClass("on");
        });
        $(".sidebar-setting .three-column").on('click', function () {
            $(".sidebar-setting li").removeClass('active');
            $(this).addClass("active");
            $('.theme-title .icon-btn').addClass("btn-outline-light").addClass("btn-outline-primary");
            $('.main-nav').addClass("on");
        });

    /*=====================
        Chat 
        ==========================*/

        $(".messages").animate({ scrollTop: $(document).height() }, "fast");
        $('.submit').on('click', function() {
            typingMessage();
            newMessage();
        });
        $(window).on('keydown', function(e) {
            if (e.which == 13) {
                if(!e.target.value){
                    return false
                }
                typingMessage();
                newMessage();
                return false;
            }
        });

        $(".emojis-sub-contain ul li").click(function () {
            var number = $(this).html();            
            $("#setemoj").focus().val(function() {
               return this.value + number;
               $(".messages").animate({
                scrollTop: $(document).height()
            }, "fast");
           });
            $('#send-msg').removeClass('disabled').removeAttr("disabled")
        });

        
        $('#send-msg').addClass('disabled').attr("disabled", "disabled")
        $("#setemoj").keyup(function(e){
            if(!e.target.value){
                $('#send-msg').addClass('disabled').attr("disabled","disabled")
            } else {
                $('#send-msg').removeClass('disabled').removeAttr("disabled")
            }
        });

        function newMessage() {
            var message = $('.message-input input').val();
            if($.trim(message) == '') {
                return false;
            }
            $('<li class="replies"> <div class="media"> <div class="profile mr-4 bg-size" style="background-image: url(&quot;../assets/images/contact/1.jpg&quot;); background-size: cover; background-position: center center;"></div><div class="media-body"> <div class="contact-name"> <h5>Alan josheph</h5> <h6>01:42 AM</h6> <ul class="msg-box"> <li> <h5>' + message + '</h5> </li></ul> </div></div></div></li>').appendTo($('.messages .chatappend'));
            $('.message-input input').val(null);
            $('.chat-main .active .details h6').html('<span>You : </span>' + message);
            $(".messages").animate({ scrollTop: $(document).height() }, "fast");
        };

        function typingMessage() {
          $('<li class="sent last typing-m"> <div class="media"> <div class="profile mr-4 bg-size" style="background-image: url(&quot;../assets/images/contact/2.jpg&quot;); background-size: cover; background-position: center center; display: block;"><img class="bg-img" src="../assets/images/contact/2.jpg" alt="Avatar" style="display: none;"></div><div class="media-body"> <div class="contact-name"> <h5>Josephin water</h5> <h6>01:42 AM</h6> <ul class="msg-box"> <li> <h5> <div class="type"> <div class="typing-loader"></div></div></h5> </li></ul> </div></div></div></li>').appendTo($('.messages .chatappend'));
          $(".messages").animate({ scrollTop: $(document).height() }, "fast");   
          setTimeout(function() {
            $('.typing-m').hide(); 
            $('<li class="sent"> <div class="media"> <div class="profile mr-4 bg-size" style="background-image: url(&quot;../assets/images/contact/2.jpg&quot;); background-size: cover; background-position: center center; display: block;"></div><div class="media-body"> <div class="contact-name"> <h5>Josephin water</h5> <h6>01:35 AM</h6> <ul class="msg-box"> <li> <h5> Sorry I busy right now, I will text you later </h5> <div class="badge badge-success sm ml-2"> R</div></li></ul> </div></div></div></li>').appendTo($('.messages .chatappend'));
            $(".messages").animate({ scrollTop: $(document).height() }, "fast");   
        }, 2000);
      }



    /*=====================
       25. Sticker
       ==========================*/
       $('.sticker-contain ul li').on('click', function (e) {
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
    $('.toggle-sticker').on('click', function () {
        $(this).toggleClass("active");
        $('.sticker-contain').toggleClass("open");
        $('.emojis-contain').removeClass("open");
        $(".toggle-emoji").removeClass("active");
        $('.contact-poll-content').css('display', 'none');
    });

    // Toggle emoji
    $('.toggle-emoji').on('click', function (e) {
        e.stopPropagation();
        $(this).toggleClass("active");
        $('.emojis-contain').toggleClass("open");
        $(".sticker-contain").removeClass("open");
        $(".toggle-sticker").removeClass("active");
        $('.contact-poll-content').css('display', 'none');
    });

    // Toggle poll
    $('.contact-poll').on('click', function (e) {
        $('.contact-poll-content').toggle();
        $('.emojis-contain').removeClass("open");
        $(".toggle-emoji, .toggle-sticker").removeClass("active");
    });

    // Outside click
    $(document).on('click', function (e) {
        var outside_space = $(".outside");
        if (!outside_space.is(e.target) &&
            outside_space.has(e.target).length === 0) {
            $(".sticker-contain").removeClass("open");
        $(".emojis-contain").removeClass("open");
        $(".toggle-emoji, .toggle-sticker").removeClass("active");
        $('.contact-poll-content').css('display', 'none');
        $('.chat-frind-content').css('display', 'none');
    }
})

    $(".mode").on("click", function () {
        $('.mode i').toggleClass("fa-moon-o").toggleClass("fa-lightbulb-o");
        $('body').toggleClass("dark");
    });       
    $(".mainnav").on("click", function () {
        $('.theme-title .icon-btn').toggleClass("btn-outline-light").toggleClass("btn-outline-primary");
        $('.main-nav').toggleClass("on");
    }); 
    
    $(".close-apps").on("click", function () {
        $('.apps-ul li').removeClass("active");
        $('.chitchat-main').addClass("small-sidebar");
    });

    $(".close-app").on("click", function () {
        $('body').removeClass("sidebar-active");
        $('.app-sidebar').removeClass("active");
    });
    
    $(".close-panel").on("click", function () {
        $('.dynemic-sidebar, .button-effect.active, sidebar-top .sidebar-top > li > a').removeClass("active");
        $('.recent-default').addClass("active");
    });
    
    $("body").on("click", ".colors li", function () {
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
</style>
