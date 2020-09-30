<template>
  <div id="login">
     <div class="login-page1">
      <div class="container-fluid p-0">
        <div class="row">
          <div class="col-12">
            <div class="login-contain-main">
              <div class="left-page">
                <div class="login-content">
                  <div class="login-content-header"><img class="image-fluid" src="../assets/images/logo/logo_big.png" alt="images"></div>
                  <h3 style="margin: 2px;">Hello Everyone , We are Chatto</h3>
                  <h4>Wellcome to chatto please login to your account.</h4>
                 <h5> {{this.errorMessage}} </h5>
                  <form v-on:submit="loginuser" class="form1">
                    <div class="form-group">
                      <label class="col-form-label"  for="inputEmail3">Email or Mobile No</label>
                      <input class="form-control" name="username" v-model="input.username"  id="inputEmail3" type="text" placeholder="Email or Mobile No" required>
                    </div>
                    <div class="form-group">
                      <label class="col-form-label" for="inputPassword3">Password</label><span> </span>
                      <input class="form-control" name="password" v-model="input.password" id="inputPassword3" type="password" placeholder="Password" required>
                    </div>
                    <div class="form-group">
                      <div class="rememberchk">
                        <div class="form-check">
                          <input class="form-check-input" id="gridCheck1" type="checkbox">

                          <label class="form-check-label" for="gridCheck1">Remember Me.</label>
                          <h6>Forgot Password?</h6>
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="buttons">
                        <button type="submit" id="loginbtn" class="btn btn-primary button-effect">Login</button>
                        <router-link to="/signup" class="btn button-effect btn-signup">SignUp</router-link></div>
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
import Toasted from 'vue-toasted';
// import { ApiService } from '../services/api.service'


export default {
  name: 'Login',
   components: {  },
      props:[],
           data() {
            return {
                input: {
                    username: "",
                    password: ""
                },
                errorMessage: ''
            }
        },
         beforeCreate: function () {
        if (this.$session.exists()) {
          this.$router.push('/')
        }
      },

        watch:{
    
                },

        methods:{

             loginuser: function (event) {
              event.preventDefault();

                axios.post('/login', {
                  password: this.input.password,
                  name: this.input.username
                }).then(response => {

                console.log(response);
				
				
				
                  if (response.data != null ) {
				  $('#loginbtn').addClass('disabled').attr('disabled',true);
                        this.$toasted.success(  'Welcome Back !!', { 
						 theme: "toasted-primary", 
						 position: "top-left", 
						 duration : 2000
					   })
                    this.$session.start()
                    this.$session.set('c_user', response.data.user)
                    this.$session.set('c_user_image', response.data.user.user_image)
                    localStorage.setItem('userData', JSON.stringify(response.data.user));
                    this.$session.set('jwt', response.data.user.token)
                    Vue.http.headers.common['Authorization'] = 'Bearer ' + response.data.user.token
                    //this.$router.push('/')
					
					window.location.href = '/';
                  }else{
                    
                    this.$toasted.error(  'Wrong username and password !!', { 
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
