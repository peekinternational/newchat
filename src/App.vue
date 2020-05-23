<template>
  <div id="app">
 
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view ></router-view>

  </div>
</template>

<style>
  @import './assets/css/date-picker.css';
  @import './assets/css/magnific-popup.css';
  @import './assets/css/style.css';
  @import './assets/css/tour.css';
  @import './assets/js/ckeditor/skins/moono-lisa/editor.css?t=HBDD';
  @import './assets/js/ckeditor/plugins/scayt/skins/moono-lisa/scayt.css';
 
  @import './assets/js/ckeditor/plugins/tableselection/styles/tableselection.css';
  @import './assets/js/ckeditor/plugins/wsc/skins/moono-lisa/wsc.css';
  @import './assets/js/ckeditor/plugins/copyformatting/styles/copyformatting.css';
  


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
