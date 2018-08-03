<template>
  <v-container fluid>
    <header class="masthead2">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 my-auto">
            <div class="header-content mx-auto">

            </div>
          </div>
        </div>
        <div class="row mt-5">
        </div>
      </div>
    </header>
    <section class="whyUs">
      <div class="container">
        <h1 v-html="translationText.heading" class="text-uppercase"></h1>
        <div class="info-box">
          <p v-html="translationText.sectionp1"></p>
          <p v-html="translationText.sectionp2"></p>
          <p v-html="translationText.sectionp3"></p>
          <p v-html="translationText.sectionp4"></p>
          <div class="list">
            <ul>
              <li><h4 v-html="translationText.list1"></h4></li>
              <li><h4 v-html="translationText.list2"></h4></li>
              <li><h4 v-html="translationText.list3"></h4></li>
              <li><h4 v-html="translationText.list4"></h4></li>
              <li><h4 v-html="translationText.list5"></h4></li>
              <li><h4 v-html="translationText.list6"></h4></li>
              <li><h4 v-html="translationText.list7"></h4></li>
              <li><h4 v-html="translationText.list8"></h4></li>
              <li><h4 v-html="translationText.list9"></h4></li>
              <li><h4 v-html="translationText.list10"></h4></li>
            </ul>
          </div>
          <p v-html="translationText.sectionp5"></p>
          <p v-html="translationText.sectionp6"></p>
        </div>
      </div>
    </section>
  </v-container>
</template>
<style scoped>
  .feature-item .text-muted {
    text-align: justify;
  }
</style>


<script>
  import {uuid} from 'vue-uuid'
  import axios from 'axios'
  export default {
    data () {
      return {
        translationText: [],
        dialog:true
      }
    },
    created () {
      this.translation(this.$parent.$parent.$parent.language)
      var d = this
      window._wq = window._wq || []
      // target our video by the first 3 characters of the hashed ID
      _wq.push({ id: "h4z90hkwgl", onReady: function(video) {
        // on play, seek the video to 10 seconds, then unbind so it
        // only happens once.
        video.bind('end', function(t) {
          console.log("the video ended");
          d.dialog = true
          video.popover.hide();
        })

      }})

    },
    watch: {
      '$parent.$parent.$parent.language' (v) {
        this.translation(this.$parent.$parent.$parent.language)
      }
    },
    computed: {
    },
    methods: {
      translation (val) {
        if (val == 'en') {
          this.translationText = { 
            heading:"WHY CHOOSE US",
            sectionp1:"Financial Education is not just for the wealthy. This is for everyone. We all have the right to know that financial freedom is not impossible and it is reachable by correct guidance and help of financial experts that cares about you.",
            sectionp2:"With many years of combined experience, we have extensive training on analysis on how credit bureaus work. We understand and we want to share our clients what legal rights they have to protect themselves during financial crisis.",
            sectionp3:"We collaborated with each other and analyze every situation we have on each of our clients and provide strategic ways to increase their credit score, eliminate erroneous credit report and suggest tips on specific ways to help them handle their debts well for the goal of achieving  good financial lifestyle.",
            sectionp4:"These are some of accomplishments and proven effective methods that  we have so far as we give 100% satisfaction to all of our clients who have tremendous change in their financial aspect of life.",
            list1:"We are trusted by all of our clients",
            list2:"We pride ourselves on our Accredited A+ Rating with the Better Business Bureau:",
            list3:"Complete customer involvement with review and change to your disputes",
            list4:"Monitor your progress online 24/7 with world-class Customer Service",
            list5:"Best prices anywhere and Avoid a Potential Tax Penalty",
            list6:"We aim to teach and train. We have Education and Resource Center: Includes a wide variety of educational services, credit tips and budgeting tools to establish and maintain your good credit.",
            list7:"DebtZero as considered one of the most powerful tool from our list of services we offer you. It is a clear guide on how to more efficiently pay down your debt. Taking into account your debt obligations and interest, the system will show you exactly how to properly allocate your money towards your monthly payments using nothing more than your current income, in order to speed up your debt payoff. Not only will it map out the thousands of dollars you will be saving in interest by paying off your debt significantly earlier than expected, but it will show you the amount of hard earned money you can save by eliminating unnecessary years of interest payments.",
            list8:"No pesky sales people. We have friendly, customer service staff to answer your questions. We never stop caring to all our clients until they achieve a life free from financial crisis and obtain peace of mind for life’s uncertainties",
            list9:"We offer higher Cash Back rates than competitors",
            list10:"We offer Reliable and Secure Platforms for each services",
            sectionp5:"All of these are representations of our personal commitment towards customer satisfaction,  genuine concern and care to help individuals cope up and overcome financial difficulties. We help them achieve incredible change in their financial lifestyle",
            sectionp6:"Why wait? It only takes a minute to <a href=#/register>sign up</a>. Your information is safe with us. We treat your data as if it were our own. Start the path to a better financial future. <a href=tel:813-444-5539>Call us now!</a>",
          }
        } else if (val === 'es') {
          this.translationText = {
            heading:"POR QUÉ ELEGIRNOS",
            sectionp1:"La educación financiera no es solo para los ricos. Esto es para todos. Todos tenemos derecho a saber que la libertad financiera no es imposible y que es alcanzable mediante la orientación correcta y la ayuda de expertos financieros que se preocupan por usted.",
            sectionp2:"Con muchos años de experiencia combinada, tenemos una amplia capacitación en análisis sobre cómo funcionan las oficinas de crédito. Entendemos y queremos compartir con nuestros clientes los derechos legales que tienen para protegerse durante la crisis financiera.",
            sectionp3:"Colaboramos entre nosotros y analizamos cada situación que tenemos en cada uno de nuestros clientes y proporcionamos formas estratégicas para aumentar su puntaje de crédito, eliminar informes de crédito erróneos y sugerir sugerencias sobre formas específicas para ayudarlos a manejar bien sus deudas con el objetivo de lograr buenos resultados financieros. estilo de vida.",
            sectionp4:"Estos son algunos de los logros y métodos eficaces comprobados que tenemos hasta el momento en que damos el 100% de satisfacción a todos nuestros clientes que tienen un cambio tremendo en su aspecto financiero de la vida.",
            list1:"Todos nuestros clientes confían en nosotros",
            list2:"Nos enorgullecemos de nuestra calificación A + acreditada con el Better Business Bureau:",
            list3:"Complete la participación del cliente con la revisión y el cambio a sus disputas",
            list4:"Controle su progreso en línea las 24 horas, todos los días, con un Servicio al Cliente de primera clase",
            list5:"Los mejores precios en cualquier lugar y evitar una posible multa fiscal",
            list6:"Nuestro objetivo es enseñar y entrenar. NOSOTROS tenemos el Centro de Educación y Recursos: Incluye una amplia variedad de servicios educativos, consejos de crédito y herramientas de presupuesto para establecer y mantener su buen crédito.",
            list7:"DebtZero se considera una de las herramientas más potentes de nuestra lista de servicios que le ofrecemos. Es una guía clara sobre cómo pagar de manera más eficiente su deuda. Teniendo en cuenta sus obligaciones e intereses de deuda, el sistema le mostrará exactamente cómo asignar correctamente su dinero a sus pagos mensuales utilizando únicamente sus ingresos actuales, a fin de acelerar el pago de su deuda. No solo asignará los miles de dólares que ahorrará intereses pagando su deuda significativamente antes de lo esperado, sino que le mostrará la cantidad de dinero duramente ganado que puede ahorrar al eliminar años innecesarios de pagos de intereses.",
            list8:"No hay vendedores molestos. Contamos con un personal de servicio al cliente amigable para responder sus preguntas. Nunca dejamos de preocuparnos por todos nuestros clientes hasta que logran una vida libre de crisis financieras y obtener la tranquilidad de las incertidumbres de la vida",
            list9:"Ofrecemos mayores tasas de devolución de efectivo que sus competidores",
            list10:"Ofrecemos plataformas confiables y seguras para cada servicio",
            sectionp5:"Todas estas son representaciones de nuestro compromiso personal con la satisfacción del cliente, la preocupación genuina y la atención para ayudar a las personas a sobrellevar y superar las dificultades financieras. Los ayudamos a lograr un cambio increíble en su estilo de vida financiero.",
            sectionp6:"Por qué esperar Solo lleva un minuto <a href=#/register>registrarse</a>. Su información está segura con nosotros. Tratamos sus datos como si fueran nuestros. Comience el camino hacia un futuro financiero mejor. <a href=tel:813-444-5539>¡Llámanos ahora!</a>"
          }
        }
      }
    },
    components: {
    }
  }
  $(document).ready(function(){
    $('.slider').bxSlider({
      adaptiveHeight: true
    });
    // var video = Wistia.api("h4z90hkwgl")
    // video.bind("end", function() {
    // })
  })
</script>
