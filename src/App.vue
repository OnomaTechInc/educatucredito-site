<template>
  <v-app light>
    <v-content v-if="$route.meta.plainLayout">
      <div class="alert_container">
        <v-alert 
          class="notification" 
          v-if="alertNotifications"
          value="showAlertNotification" 
          v-for="alertNotification in alertNotifications" 
          :key="alertNotification.id" 
          transition="fade-transition" 
          :type="alertNotification.type"
        >
          {{ alertNotification.body }}
          <a class="alert__dismissible" @click="closeAlert(alertNotification.id)"><i aria-hidden="true" class="icon icon--right material-icons">cancel</i></a>
        </v-alert>
      </div>
      <router-view @setRoleName="processNameRole" @receiveAlertMessage="alertMessage = $event"/>
      <ConfirmDialog/>
    </v-content>
    <v-content v-else>
      <!-- Navigation -->
      <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div class="container">
          <a class="navbar-brand js-scroll-trigger" href="/">
            <span><img class="logo" src="@/assets/top-logo.png" /></span>
            <span class="heading">Educa Tu Credito</span>
          </a>
          <div class="contactdetails">
            <a href="tel:813-444-5539"><v-icon>phone</v-icon> <span>813-444-5539</span></a>
            <a href="mailto:info@educatucredito.com"><v-icon>mail</v-icon> <span>info@educatucredito.com</span></a>
          </div>
          <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i class="fa fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="/home">{{ link.home }}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="/about-us">{{ link.aboutus }}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="https://blog.educatucredito.com">Blogs</a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="/why-choose-us">{{ link.whyus }}</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="https://account.educatucredito.com/login">{{ link.login }}</a>
              </li>
            </ul>
          </div>
          <!-- <div class="changelang">
            <v-icon style="vertical-align: middle">language</v-icon>
            <a href="#" @click="setDefaultLanguage('en')">En</a> | <a href="#" @click="setDefaultLanguage('es')">Es</a>
          </div> -->
          <!-- <v-icon>language</v-icon>  -->
          <!-- <v-btn-toggle v-model="toggle" mandatory flat>
              <v-btn flat @click="setDefaultLanguage('en')">
                EN
              </v-btn>
              <v-btn flat @click="setDefaultLanguage('es')">
                ES
              </v-btn>
          </v-btn-toggle> -->
        </div>
      </nav>
      <div class="alert_container">
        <v-alert 
          class="notification" 
          v-if="alertNotifications"
          value="showAlertNotification" 
          v-for="alertNotification in alertNotifications" 
          :key="alertNotification.id" 
          transition="fade-transition" 
          :type="alertNotification.type"
        >
          {{ alertNotification.body }}
          <a class="alert__dismissible" @click="closeAlert(alertNotification.id)"><i aria-hidden="true" class="icon icon--right material-icons">cancel</i></a>
        </v-alert>
      </div>
      <router-view @setRoleName="processNameRole" @receiveAlertMessage="alertMessage = $event"/>

      <section class="section5">
        <div class="container">
            <div class="footer-logo"><img class="logo" src="@/assets/footer-logo.png" /></div>
            <div class="invert-center">
              <a target="_blank" href="https://www.youtube.com/channel/UCqSgxarIeeU-Zd_mNILoW5g"><img src="@/assets/footer-youtube.png" /></a> 
              <a target="_blank" href="https://www.facebook.com/Educa-Tu-Credito-643508152673251/"><img src="@/assets/footer-facebook.png" /></a> 
              <a target="_blank" href="https://www.instagram.com/educatucredito/"><img src="@/assets/footer-instagram.png" /></a> 
            </div>

            <div class="copyright-reserved">&copy; Educa Tu Credito 2018. All Rights Reserved.</div>
          <div class="contactdetails2">
            <a href="tel:813-444-5539"><v-icon>phone</v-icon> <span>813-444-5539</span></a>
            <a href="mailto:info@educatucredito.com"><v-icon>mail</v-icon> <span>info@educatucredito.com</span></a>
          </div>
            <ul class="footernav">
              <li class="">
                <a class="" href="/home">{{ link.home }}</a>
              </li>
              <li class="">
                <a class="" href="/about-us">{{ link.aboutus }}</a>
              </li>
              <li class="">
                <a class="nav-link js-scroll-trigger" href="https://blog.educatucredito.com">Blogs</a>
              </li>
              <li class="">
                <a class="" href="/why-choose-us">{{ link.whyus }}</a>
              </li>
              <li class="">
                <a class="" href="/terms-of-use">{{ link.terms }}</a>
              </li>
              <li class="">
                <a class="" href="/privacy-policy">{{ link.privacy }}</a>
              </li>
              <li class="">
                  <a class="" href="https://account.educatucredito.com/login">{{ link.login }}</a>
                </li>
            </ul>
        </div>
      </section>
      <ConfirmDialog/>
      <!-- <v-dialog v-model="dialogLanguage" persistent max-width="290">
        <v-card>
          <v-card-title>Change default language</v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" flat @click.native="setDefaultLanguage('en'), dialogLanguage = false">English</v-btn>
            <v-btn color="green darken-1" flat @click.native="setDefaultLanguage('es'), dialogLanguage = false">Espa&ntilde;ol</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog> -->
      <v-dialog v-model="dialog" fullscreen transition="slide-y-transition">
        <v-list>
          <v-subheader>Would you like to translate this site?</v-subheader>
          <v-btn class="primary" @click.native="setDefaultLanguage('en'), dialog = false">English</v-btn> 
          <v-btn class="secondary" @click.native="setDefaultLanguage('es'), dialog = false">Espa&ntilde;ol</v-btn>
        </v-list>
      </v-dialog>
    </v-content>
    <v-speed-dial
      id="mobilebtn"
      v-model="fab"
      :top="top"
      :bottom="bottom"
      :right="right2"
      :left="left"
      :direction="direction"
      :open-on-hover="hover"
      :transition="transition"
    >
      <v-btn
        slot="activator"
        v-model="fab"
        color="blue darken-2"
        dark
        fab
      >
        <v-icon>contact_support</v-icon>
        <v-icon>close</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="green"
      >
        <a href="tel:813-444-5539">
          <v-icon>call</v-icon>
        </a>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="indigo"
      >
        <a href="mailto:info@educatucredito.com">
          <v-icon>email</v-icon>
        </a>
      </v-btn>
    </v-speed-dial>

  </v-app>
</template>

<script>
  import ConfirmDialog from './components/ConfirmDialog'
  import Vue from 'vue'
  export default {
    data () {
      return {
        sheet: true,
        dialog: false,
        direction: 'top',
        fab: false,
        fling: false,
        hover: false,
        tabs: null,
        top: false,
        bottom: true,
        left: true,
        right2: false,
        transition: 'slide-y-transition',
        link: [],
        dialogLanguage: false,
        language: 'es',
        fixed: true,
        alertMessage: '',
        showAlertNotification: false,
        alertNotifications: [],
        clipped: false,
        drawer: true,
        cordova: Vue.cordova,
        items: [],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Educa Tu Credito',
        name: 'John Wick',
        userImage: 'https://randomuser.me/api/portraits/men/41.jpg',
        toggle: 1
      }
    },
    created () {
      let session = JSON.parse(window.localStorage.getItem('session'))
      // console.log(session)
      if (session !== undefined && session !== null) {
        this.name = session.name
        this.userImage = session.user_image
      }
      this.getMenu()
      var self = this
      this.cordova.on('deviceready', () => {
        self.onDeviceReady()
      })
      // this.setDefaultLanguage(this.language)
      var defaultLang = window.localStorage.getItem('language')
      if (defaultLang !== null && defaultLang !== undefined) {
        this.language = defaultLang
        this.setDefaultLanguage(this.language)
      } else {
        this.dialog = true
      }
    },
    watch: {
      alertMessage (val) {
        this.alertNotifications.push(val)
        setTimeout(() => (this.closeAlert(val.id)), 10000)
      }
    },
    computed: {
      initial () {
        if (this.name) {
          return this.name.charAt(0)
        } else {
          return ''
        }
      }
    },
    methods: {
      setDefaultLanguage (val) {
        if (val === 'en') {
          this.language = 'en'
          this.link = {
            home: 'Home',
            aboutus: 'About Us',
            whyus: 'Why Choose Us',
            login: 'Login / Sign Up',
            terms:'Terms of Use',
            privacy:'Privacy Policy'
          }
        } else {
          this.language = 'es'
          this.link = {
            home: 'Inicio',
            aboutus: 'Sobre Nosotros',
            whyus: 'Por Qué Elegirnos',
            login: 'Iniciar Sesión / Regístrate',
            terms:'Términos de Uso',
            privacy:'Política de privacidad'
          }
        }
        // this.dialogLanguage = false
        // this.sheet = false
        window.localStorage.setItem('language', val)
      },
      getMenu () {
        this.items = [
          {
            icon: 'dashboard',
            title: 'Dashboard',
            link: '/dashboard'
          },
          {
            icon: 'live_tv',
            title: 'Videos',
            link: '/videos'
          },
          {
            icon: 'attach_file',
            title: 'Files',
            link: '/files'
          },
          {
            icon: 'account_circle',
            title: 'Profile',
            link: '/profile'
          }
        ]
      },
      logout () {
        var d = this
        this.$store.dispatch('confirmer/ask', {
          title: 'Confirm Logout',
          body: 'Are you sure you want to logout?'
        }).then(confirmation => {
          if (confirmation) {
            this.session = []
            window.localStorage.setItem('session', '[]')
            d.$router.replace({ name: 'Logout' })
          }
        })
      },
      processNameRole (val) {
        this.name = val.name
        this.userImage = val.user_image
      },
      closeAlert (val) {
        for (var x = 0; x < this.alertNotifications.length; x++) {
          if (val === this.alertNotifications[x].id) {
            this.alertNotifications.splice(x, 1)
          }
        }
      },
      onDeviceReady: function () {
        // Handle the device ready event.
        this.cordova.on('pause', this.onPause, false)
        this.cordova.on('resume', this.onResume, false)
        if (this.cordova.device.platform === 'Android') {
          document.addEventListener('backbutton', this.onBackKeyDown, false)
        }
      },
      onPause () {
        // Handle the pause lifecycle event.
        console.log('pause')
      },
      onResume () {
        // Handle the resume lifecycle event.
        // SetTimeout required for iOS.
        setTimeout(function () {
          console.log('resume')
        }, 0)
      },
      onBackKeyDown () {
        // Handle the back-button event on Android. By default it will exit the app.
        navigator.app.exitApp()
      }
    },
    components: {
      ConfirmDialog
    }
  }
</script>

<style>
  .container {
    padding: 0;
  }
  em {
    font-size: small
  }
	body {
    padding-top: constant(safe-area-inset-top);
    padding-top: env(safe-area-inset-top);
	}
  .footer{ /* Apply this to v-bottom-nav if necessary. */
    margin-bottom: constant(safe-area-inset-bottom);
    margin-bottom: env(safe-area-inset-bottom);
  }
  .v-badge__badge {
    top: -12px !important;
    right: -10px !important;
  }
  .alert_container {
    position: fixed;
    right: 0px;
    max-width: 50%;
    z-index: 9999
  }
  .loadingIcon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .logo {
    width: 82px;
    margin-top: -30px;
  }
  #mainNav .logo {
    margin-top: -18px;
  }
  #mainNav .heading {
    line-height: 1.8;
  }
  
contactdetails .v-icon{
  display: inline-block;
  font-weight: 700;
  vertical-align: middle;
  text-decoration: none;
  color: white;
}
contactdetails .span{
  display: inline-block;
  font-weight: 700;
  vertical-align: middle;
  text-decoration: none;
  color: white;
}
a:hover {
  text-decoration: none;
}

</style>
<style scoped>
  .list__tile__title {
    color: #303030
  }
</style>