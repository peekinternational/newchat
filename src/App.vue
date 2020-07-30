<template>
  <div id="app">
 
  <router-view ></router-view>

  </div>
</template>

<style>
  @import './assets/css/style.css';
  @import './assets/css/magnific-popup.css';
  @import './assets/css/tour.css';
  @import './assets/css/date-picker.css';
</style>

<script>

import Login from './components/loginComponent.vue'

export default {
  name: 'App',
  components: {
    Login
  },
  data() {
            return {
            
               
            }
        },
         mounted() {
           window.addEventListener('beforeunload', this.sendData)
        },
      created() {
    
  },
        methods: {
           sendData() {
      alert('fsdfsd');
    }, 
        }
}
</script>

<style>

</style>
