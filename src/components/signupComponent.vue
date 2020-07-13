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
                  <form v-on:submit="registeruser" class="form1">
                      <div class="form-group">
                      <label class="col-form-label" for="inputname">Name</label>
                      <input class="form-control" id="inputname" v-model="input.username" type="text" placeholder="Enter Usename" required>
                    </div>
                      <div class="form-group">
                      <label class="col-form-label" for="inputemail">Email Address</label>
                      <input class="form-control" id="inputemail" type="email" v-model="input.email" placeholder="Enter Email" required>
                    </div>
                      <div class="form-group">
                      <label class="col-form-label" for="inputphone">Phone Number</label>
                      <input class="form-control" id="inputphone" type="number" v-model="input.phone" placeholder="Enter Phone Number" required>
                    </div>
                    <div class="form-group">
                      <label class="col-form-label" for="inputpassword">Password</label>
                      <input class="form-control" id="inputpassword" v-model="input.password" type="password" placeholder="Password">
                    </div>
                    
                    
                    <div class="form-group">
                      <div class="buttons">
					  <button type="submit" class="btn btn-primary button-effect">Sign Up</button>
					  <router-link to="/login" class="btn button-effect btn-signup">Login</router-link>
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
             input: {
                    username: "",
					email: "",
					phone: "",
					password: ""
                },
            }
    
        },
        watch:{
    
                },
        methods:{

 registeruser: function (event) {
              event.preventDefault();

                axios.post('/projects/register-user', {
                  projectId: '5d4c07fb030f5d0600bf5c03',
                  name: this.input.username,
				  email: this.input.email,
                  phone: this.input.phone,
				  password: this.input.password,
                }).then(response => {

                console.log(response);
                  if (response.data != '' ) {
                     this.$toasted.success(  'Register Successfully !!', { 
					 theme: "toasted-primary", 
					 position: "top-left", 
					 duration : 5000
               })
                    this.$router.push('/login')
                  }else{
                    
                     this.$toasted.error(  'Error !!', { 
					 theme: "toasted-primary", 
					 position: "top-left", 
					 duration : 5000
               })

                  }
                }, function (err) {
                  console.log('err', err);
                  alert(err.body);
                })
              }
        },
        mounted() {
    
     

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
