<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column>
        <section>
          <img src="/static/img/bgimg.png" alt="" class="imgAbsolute">
          <div class="contentHolder">
              <h3 class="text-uppercase heading">DO YOU KNOW HOW TO REBUILD YOUR CREDIT?</h3>
              <h1><img src="/static/img/qoute.png" alt="" class="img-responsive"></h1>
              <div class="vidHolder">
                <!-- <iframe src="https://fast.wistia.net/embed/iframe/h4z90hkwgl?videoFoam=true" width="100%" height="396"></iframe> -->
                <div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><span class="wistia_embed wistia_async_xbiw6z7e9l popover=true popoverAnimateThumbnail=true videoFoam=true" style="display:inline-block;height:100%;position:relative;width:100%">&nbsp;</span></div></div>
              </div>
              <div class="qouteBox">
                <img src="/static/img/qoute2.png" alt="" class="img-responsive">
              </div>
              <div id="formArea"  class="formArea">
                <span class="head">Learn Each Secrets
                    On Credit Building
                  </span>
                  <span class="note">
                      Fixing Your Credit Scores
                      Can Be Fast And Easy
                  </span>

              <!-- Begin MailChimp Signup Form -->
                <div id="mc_embed_signup">
                <form novganun nalidate>
                    <div id="mc_embed_signup_scroll">
                <div class="mc-field-group">
                  <input type="text" value="" v-model="FNAME"  class="" placeholder="Your First Name..." id="mce-FNAME">
                </div>
                <div class="mc-field-group">
                  <input type="text" value="" v-model="LNAME"  class="" placeholder="Your Last Name..." id="mce-LNAME">
                </div>
                <div class="mc-field-group">
                  <input type="email" value="" v-model="EMAIL" class="required email" placeholder="Email Address..." id="mce-EMAIL">
                </div>
                  <div id="mce-responses" class="clear">
                    <div class="response" id="mce-error-response" style="display:none"></div>
                    <div class="response" id="mce-success-response" style="display:none"></div>
                  </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_fa9463f3ae774118c273d8fa3_1e3be0baa9" tabindex="-1" value=""></div>
                    <button type="submit" v-on:click.prevent="subscribe" name="subscribe" id="mc-embedded-subscribe" class="btn btnOrange">KNOW THE SECRET</button>
                    <!-- <div class="clear"><input type="submit" @click="submitUserInfo" value="KNOW THE SECRET" name="subscribe" id="mc-embedded-subscribe" class="signup button btnOrange"></div> -->
                    </div>
                </form>
                </div> 
                <!-- <form action="">
                  <input type="text" placeholder="Your First Name...">
                  <input type="text" placeholder="Your Last Name...">
                  <input type="email" placeholder="Email Address...">
                  <input type="text" placeholder="Phone Number...">
                  <button type="submit"  class="btn btnOrange">KNOW THE SECRET</button>
                </form> -->
              </div>
          </div>
        </section>
        <footer>
          <div class="contentHolder">
            <h3>SHARE WITH ME THE CREDIT SECRETS</h3>
          </div>
        </footer>
      </v-layout>
    </v-slide-y-transition>
    <v-dialog persistent v-model="dialog" width="500" >
      <v-card>
        <v-card-title
          primary-title
        >
        Next Video / Register
        </v-card-title>

        <v-card-text>
          Would you like to Register now or Proceed to next video?
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="moreinfo"
          >
            Next Video
          </v-btn>
          <v-btn
            color="primary"
            flat
            @click="register"
          >
            Register
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .content--wrap .container {
    background: #f5f5f5;
  }
  .content-container {
    padding: 20px;
    background: #fff;
  }
  h1, h2 {
    font-weight: normal;
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
  nav#mainNav {
    display: none !important;
  }


/* ==========================================================================
   Author's custom styles
   ========================================================================== */

    body{
        font-size: 16px;
    }

   .contentHolder{
       position: relative;
       width: 100%;
       max-width: 927px;
       text-align: center;
       margin: 0 auto;
       padding: 0 15px;
   }
   .imgAbsolute{
       position: absolute;
       width: 100%;
       top: 0;
       left: 0;
       opacity: 0.1;
       height: 750px;
   }
   .img-responsive{
       margin: 0 auto;
   }
   .heading{
       font-size: 1.5em;
       color: #2f2f2f;
       margin: 7% 0 5%;
   }
   .vidHolder{
    margin: 5% auto;
    max-width: 705px;
    }
    /* .vidHolder iframe{
        width: 100%;
        max-width: 705px;
        height: 300px;
        background-color: red;
    } */
   .qouteBox{
       margin-bottom: 5%;
   }
   .formArea{
       text-align: center;
       background-color: #5099bc;
       max-width: 530px;
       margin: 0 auto;
       border-radius: 10px;
       padding: 37px 15px;
   }
   .formArea .head{
       color: white;
       font-size: 2.5em;
       color: white;
       display: block;
       max-width: 440px;
       margin: 0 auto;
       padding: 5px 30px;
       line-height: 1;
       position: relative;
       border-bottom: 2px solid white;
       margin-bottom: 10px;
   }
   .formArea .note{
       font-size: 2.2em;;
       color:white;
       display: block;
       padding: 5px 30px;
       line-height: 1;
   }
   .formArea form{
       margin-top: 35px;
   }
   .formArea form input{
        width: 100%;
        max-width: 432px;
        margin: 0 auto;
        height: 36px;
        padding: 0 20px;
        color: #7b7b7b;
        font-size: 1.1em;
        outline: none;
        border: none;
        margin-bottom: 23px;
   }
   .btn{
       width: 100%;
       max-width: 288px;
       line-height: 47px;
       text-align: center;
       margin: 15px auto 0;
       font-size: 1.3em;
       font-weight: bold;
       transition: all .35s ease-in-out;
    }
   .btnOrange{
       background-color: #e3612e;
       color: white;
       border: 2px solid white;
   }
   .btnOrange:hover{
        background-color: white;
        color: #e3612e;
        border: 2px solid #e3612e;
        transition: all .35s ease-in-out;
   }
   footer{
       margin-top: 5%;
       background-color: #e3612e;
       padding: 2% 0;
   }
   footer h3{
       margin: 0;
       font-size:2em;
       color: white;
   }

   #mc_embed_signup input {
     background: #fff
   }

   /* mead queries */
   @media only screen and (max-width:767px){
       body{
           font-size: 12px;
       }
       .formArea .head{
           padding: 5px 0;
       }
       .formArea .note{
           padding: 5px 0;
       }
   }
   /* mead queries */

</style>

<script>
  import axios from 'axios'
  // import {uuid} from 'vue-uuid'
  import jQuery from 'jquery'
  window.$ = window.jQuery = jQuery
  export default {
    data () {
      return {
        dialog: false,
        session: '',
        FNAME: '',
        LNAME: '',
        EMAIL: '',
        items: []
      }
    },
    computed: {
    },
    watch: {
    },
    created () {
      var d = this
      window._wq = window._wq || []
      // target our video by the first 3 characters of the hashed ID
      window._wq.push({
        id: 'xbiw6z7e9l',
        onReady: function (video) {
          // on play, seek the video to 10 seconds, then unbind so it
          // only happens once. video.bind('end', function (t) {
          video.bind('end', function (t) {
            console.log('the video ended')
            d.nextVideo()
            // $('#mc_embed_signup').scrollTop();
            video.popover.hide()
          })
        }
      })
    },
    methods: {
      register () {
        window.location.href = 'https://account.educatucredito.com/register'
      },
      moreinfo () {
        this.$router.replace({ name: 'MoreInfo' })
      },
      nextVideo () {
        var d = this
        this.$store.dispatch('confirmer/ask', {
          title: 'Subscribe',
          body: 'You need to subscribe first to proceed to the next video',
          cancel: 'Cancel',
          confirm: 'Subscribe'
        }).then(confirmation => {
          if (confirmation) {
            d.$vuetify.goTo('#formArea')
          }
        })
      },
      secondVideo () {
        var d = this
        d.dialog = true
      },
      subscribe () {
        var data = this
        if (data.EMAIL.length > 0) {
          axios.post('https://www.educatucredito.com/mailchimp/subscribe.php', {
            email: data.EMAIL,
            fname: data.FNAME,
            lname: data.LNAME
          }).then(function (response) {
            console.log(response)
            data.secondVideo()
            data.EMAIL = ''
            data.FNAME = ''
            data.LNAME = ''
          }).catch(function (error) {
            alert(error)
          })
        } else {
          alert('Email is Required!')
        }
      }
    }
  }
</script>