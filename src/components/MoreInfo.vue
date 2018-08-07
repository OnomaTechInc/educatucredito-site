<template>
  <v-container fluid>
    <header class="masthead2">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 my-auto">
            <div class="header-content mx-auto">
              <h2 v-html="translationText.heading" style="color: #000"></h2>
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-lg-11" id="video" style="max-width: 560px; width: 560px; max-height: 315px; height: 315px; margin-left: auto; margin-right: auto;">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/a6mx_Vy4Dz4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
          <div class="col-lg-12 my-auto" style="text-align: center">
            <v-btn class="primary" v-html="translationText.btn1" @click="gestarted"></v-btn>
          </div>
        </div>

      </div>
    </header>
  </v-container>
</template>
<style scoped>
  #video {
    position: relative;
    padding-top: 30px; height: 0; overflow: hidden;
  }

  #video iframe,
  #video object,
  #video embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-height: 315px;
  }


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

      translation (val) {
        if (val === 'en') {
          this.translationText = {
            heading: 'Congratulations',
            btn1: 'Get Started'
          }
        } else if (val === 'es') {
          this.translationText = {
            heading: 'Felicitaciones',
            btn1: 'Empezar'
          }
        }
      }
    }
  }
</script>