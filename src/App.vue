<template>
  <div id="app">
 
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
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

import MainComponent from './components/mainComponent.vue'

export default {
  name: 'App',
  components: {
    MainComponent
  },
  data() {
            return {
            
               
            }
        },
         mounted() {
           
        },
      created() {
    window.addEventListener('beforeunload', this.sendData)
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
