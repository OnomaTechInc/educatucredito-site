<template>
  <v-container fluid>
    <header class="masthead2">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 my-auto">
            <div class="header-content mx-auto">
              <h2 v-html="translationText.heading"></h2>
            </div>
          </div>
        </div>
        <div class="row mt-5">
            <div class="col-lg-11" id="video" style="max-width: 560px; width: 560px; max-height: 315px; height: 315px; margin-left: auto; margin-right: auto;">
                <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/bNwhYx0XnPY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> -->                

                <!-- <div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/h4z90hkwgl?videoFoam=true" title="Wistia video player" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div> -->

                <div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><span class="wistia_embed wistia_async_xbiw6z7e9l popover=true popoverAnimateThumbnail=true videoFoam=true" style="display:inline-block;height:100%;position:relative;width:100%">&nbsp;</span></div></div>
                <v-btn class="primary" v-html="translationText.btn1" @click="gestarted"></v-btn>
                <v-btn class="" v-html="translationText.btn2" @click="moreinfo"></v-btn>
            </div>
        </div>
      </div>
    </header>
  </v-container>
</template>
<style scoped>
  .feature-item .text-muted {
    text-align: justify;
  }
</style>

<script>
  export default {
    data () {
      return {
        translationText: []
      }
    },
    created () {
      this.translation(this.$parent.$parent.$parent.language)
    },
    watch: {
      '$parent.$parent.$parent.language' (v) {
        this.translation(this.$parent.$parent.$parent.language)
      }
    },
    methods: {
      gestarted () {
        this.$router.replace({ name: 'Register' })
      },

      moreinfo () {
        this.$router.replace({ name: 'MoreInfo' })
      },

      translation (val) {
        if (val == 'en') {
          this.translationText = { 
            heading: 'Are you ready to Fix your Credit Score and Achieve Financial Freedom?',
            btn1: 'Get Started',
            btn2: 'More Info'
          }
        } else if (val === 'es') {
          this.translationText = {
            heading: '¿Estás listo para corregir tu puntaje de crédito y lograr la libertad financiera?',
            btn1: 'Empezar',
            btn2: 'Más información'
          }
        }
      }
    }
  }
</script>