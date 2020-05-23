import axios from 'axios'


export default {
 startchat(friendid){

          $('.init').removeClass("active");
          $('#friend'+friendid).addClass("active");
         return this.$http.get('https://192.168.43.78:22000/getChat/'+this.userId+'/'+friendid+'/50')
            .then((responce) => console.log(responce))
            .catch((error) => console.log(error));
         }
}

