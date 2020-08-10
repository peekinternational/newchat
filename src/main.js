import Vue from 'vue'
import VueRouter from 'vue-router'
import VueSession from 'vue-session'
import VueResource from "vue-resource"
import Toasted from 'vue-toasted';
import App from './App.vue'
import VueSocketIO from 'vue-socket.io';
import socketio from 'socket.io-client';
import VueClipboard from 'vue-clipboard2';
import AudioRecorder from 'vue-audio-recorder';

window.axios = require('axios');
//window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.baseURL = 'https://peekvideochat.com:22000/';
//window.axios.defaults.baseURL = 'https://192.168.100.25:22000/';
window.axios.defaults.withCredentials = true
import { MyVuexStore } from './my-vuex-store.js';
//import {ApiService} from './services/api.service.js';
VueClipboard.config.autoSetContainer = true ;
Vue.use(VueRouter)
Vue.use(VueSession)
Vue.use(VueResource)
Vue.use(Toasted)
Vue.use(VueClipboard)

const SocketInstance = socketio.connect(':6998');

//export const SocketInstance = socketio('http://localhost:4113')


Vue.use(VueSocketIO, SocketInstance, MyVuexStore)
 window.$ = window.jQuery = require('jquery')

//Vue.prototype.$apiService = new ApiService();

import Main from './components/mainComponent.vue';
import Login from './components/loginComponent.vue';
import Signup from './components/signupComponent.vue';
import O2O from './components/o2oCallComponent.vue';

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
Vue.config.productionTip = false
Vue.prototype.$hostname = 'https://peekvideochat.com:22000/'
//Vue.prototype.$hostname = 'https://192.168.100.25:22000/'


const routes = [
  { path: '/', component: Main },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/o2o', component: O2O },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
	mode: 'history',
 // base: process.env.BASE_URL,
  routes // short for `routes: routes`
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.


new Vue({

  render: h => h(App),
  router,
  
}).$mount('#app')
