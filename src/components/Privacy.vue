<template>
  <v-container fluid id="terms">
    <header class="mainHeader">
      <div class="container">
          <div class="heading text-center">
              <h3 class="text-uppercase">Privacy Policy</h3>
          </div>
      </div>
    </header>
    <section class="terms">
        <div class="container">
            
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
  // import {uuid} from 'vue-uuid'
  // import axios from 'axios'
  // import jQuery from 'jquery'
  // window.$ = window.jQuery = jQuery
  export default {
    data () {
      return {
        translationText: [],
        dialog: true
      }
    },
    created () {
      this.translation(this.$parent.$parent.$parent.language)
      var d = this
      window._wq = window._wq || []
      // target our video by the first 3 characters of the hashed ID
      window._wq.push({
        id: 'h4z90hkwgl',
        onReady: function (video) {
        // on play, seek the video to 10 seconds, then unbind so it
        // only happens once.
          video.bind('end', function (t) {
            console.log('the video ended')
            d.dialog = true
            video.popover.hide()
          })
        }
      })
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
        if (val === 'en') {
            this.translationText = {
                heading: 'TERMS OF USE',
                title1:'ACCEPTANCE OF TERMS THROUGH USE',
                title2:'YOU MUST BE 18 OR OLDER TO AGREE TO THIS AGREEMENT AND USE THIS SITE',
                title3:'LICENSE TO USE THIS SITE',
                title4:'LICENSE RESTRICTIONS USE',
                title5:'Security',
                title6:'Government Use',
                title7:'Errors and Corrections',
                title8:'LINKS TO OTHER WEBSITES',
                title9:'USER CONDUCT',
                title9:'INTELLECTUAL PROPERTY RIGHTS',
                title1p:'By using this site or by clicking "I agree" to this Agreement, you ("User") signify your agreement to these terms and conditions. If you do not agree to this Agreement please do not use this site and do not click "I agree". Please check this Agreement periodically for changes as the owner of this site ("Company") reserves the right to revise this Agreement. In the event of a change to this Agreement, your continued use of this site following the posting of any changes constitutes acceptance of such changes. The Company reserves the right to terminate a User’s use of this site at any time without notice and may do so for any breach of this Agreement.',
                title2p:'This Agreement must be completed, understood and agreed to by a person over 18. If a parent or guardian wishes to permit a person under 18to access this site, he or she should email the Company with his or her explicit permission and acceptance of full legal responsibility. If you are not yet 18 or are accessing this site from any country where this material is prohibited, please exit now as you do not have proper authorization.',
                title3p:'Upon your agreement, Company hereby grants you a non-exclusive, non-transferable limited license to use this site in strict accordance with the terms and conditions in this Agreement. You agree not to make any false or fraudulent statements as you use this site. You acknowledge and agree that all content and services available on this site are property of the Company and are protected by copyrights, trademarks, service marks, patents, trade secrets, and other proprietary rights and laws, in the U.S. and internationally. All rights not expressly granted herein are fully reserved by the Company, its advertisers and licensors. You agree to pay for any and all purchases and services using your name and credit card through this Site, not to challenge any such charges and to pay for all collections and/or attorneys fees resulting from any non-payment.',
                title4p:'Except as may be explicitly permitted, you agree not to save, download, cut and paste, sell, license, rent, lease, modify, distribute, copy, reproduce, transmit, publicly display, publicly perform, publish, adapt, edit, or create derivative works from materials from this site. Systematic retrieval of data or other content from this site to create or compile, directly or indirectly, a collection, database or directory without written permission from the Company is prohibited. In addition, use of the content or materials for any purpose not expressly permitted in this Agreement is prohibited.',
                title5p1:'You agree that if you are issued a Username and Password by the Company, you shall use your best efforts to prevent access to this site through your Username and Password by anyone other than yourself, including but not limited to, keeping such information strictly confidential, notifying the Company immediately if you discover loss or access to such information by an unauthorized party and by using a secure Username and Password not easily guessed by a third party.',
                title5p2:'You agree that you shall not try to reverse assemble, reverse compile, decompile, disassemble, translate or otherwise alter any executable code, contents or materials on or received via this site. You understand that such actions are likely to subject you to serious civil and criminal legal penalties and that the Company shall pursue such penalties to the full extent of the law to protect its rights and the rights of its other licensors. Export',
                title5p3:'You agree that you shall comply with all applicable export and import control laws and regulations in your use of this site, or materials or services received through this site, and, in particular, you shall not export or re-export anything on or received through this site in violation or local or foreign export laws and/or without all required U.S. and foreign government licenses.',
                title6p:'If you are a branch or agency of the U.S. Government, the following provision applies. This site, code, contents, services and accompanying documentation are comprised of "commercial computer software" and "commercial computer software documentation" as such terms are used in 48 C.F.R. 12.212 (SEPT 1995) and are provided to the Government (i) for acquisitions by or on behalf of civilian agencies, consistent with the policy set forth in 48 C.F.R. 12.212; or (ii) for acquisitions by or on behalf of units of the Department of Defense, consistent with the policies set forth in 48 C.F.R. 227.7202-1 (JUN 1995) and 227.7202-3 (JUN 1995. Unpublished rights reserved under the copyright laws of the United States.',
                title7p:'While we use reasonable efforts to include accurate and current information on our Site, we do not warrant or represent that the Site will be error-free. Data entry errors or other technical problems may sometimes result in inaccurate information being shown. We reserve the right to correct any inaccuracies or typographical errors on our Site, including pricing and availability of products and services, and shall have no liability for such errors. We may also make improvements and/or changes to the Site’s features, functionality, or content at any time. If you see any information or description you believe to be incorrect, please contact us and we’ll verify it for you.',
                title8p:'Our Site contains links to other websites for your information and convenience, or to provide additional shopping for various other goods and services through our Merchant and Services Partners. These third-party websites are responsible for, and undertake to maintain, their own site terms of use. We suggest that you carefully review the terms of use of each site you choose to access from our Site.',            
                title9p1:'By using features of this site that allow you to post or otherwise transmit information to or through this site, or which may be seen by other users, you agree that you shall not upload, post, or otherwise distribute or facilitate distribution of any content – including text, communications, video, software, images, sounds, data, or other information – that:',
                title9list1:'a. is unlawful, threatening, abusive, harassing, defamatory, libelous, deceptive, fraudulent, invasive of another’s privacy, tortuous, obscene, sexually explicit or graphic, or otherwise in violation of this site’s rules or policies;',
                title9list2:'b. infringes any patent, trademark, service mark, trade secret, copyright, moral right, right of publicity, privacy or other proprietary right of any party;',
                }
        } else if (val === 'es') {
          this.translationText = {
            heading: 'POR QUÉ ELEGIRNOS',
            lead: 'La educación financiera no es solo para los ricos.',
            whyusp1: 'La educación financiera no es solo para los ricos. Esto es para todos. Todos tenemos derecho a saber que la libertad financiera no es imposible y que es alcanzable mediante la orientación correcta y la ayuda de expertos financieros que se preocupan por usted.',
            whyusp2: 'Con muchos años de experiencia combinada, tenemos una amplia capacitación en análisis sobre cómo funcionan las oficinas de crédito. Entendemos y queremos compartir con nuestros clientes los derechos legales que tienen para protegerse durante la crisis financiera.',
            whyusp3: 'Colaboramos entre nosotros y analizamos cada situación que tenemos en cada uno de nuestros clientes y proporcionamos formas estratégicas para aumentar su puntaje de crédito, eliminar informes de crédito erróneos y sugerir sugerencias sobre formas específicas para ayudarlos a manejar bien sus deudas con el objetivo de lograr buenos resultados financieros. estilo de vida.',
            whyusp4: 'Estos son algunos de los logros y métodos eficaces comprobados que tenemos hasta el momento en que damos el 100% de satisfacción a todos nuestros clientes que tienen un cambio tremendo en su aspecto financiero de la vida.',
            list1: 'Todos nuestros clientes confían en nosotros',
            list2: 'Nos enorgullecemos de nuestra calificación A + acreditada con el Better Business Bureau:',
            list3: 'Complete la participación del cliente con la revisión y el cambio a sus disputas',
            list4: 'Controle su progreso en línea las 24 horas, todos los días, con un Servicio al Cliente de primera clase',
            list5: 'Los mejores precios en cualquier lugar y evitar una posible multa fiscal',
            list6: 'Nuestro objetivo es enseñar y entrenar. NOSOTROS tenemos el Centro de Educación y Recursos: Incluye una amplia variedad de servicios educativos, consejos de crédito y herramientas de presupuesto para establecer y mantener su buen crédito.',
            list7: 'DebtZero se considera una de las herramientas más potentes de nuestra lista de servicios que le ofrecemos. Es una guía clara sobre cómo pagar de manera más eficiente su deuda. Teniendo en cuenta sus obligaciones e intereses de deuda, el sistema le mostrará exactamente cómo asignar correctamente su dinero a sus pagos mensuales utilizando únicamente sus ingresos actuales, a fin de acelerar el pago de su deuda. No solo asignará los miles de dólares que ahorrará intereses pagando su deuda significativamente antes de lo esperado, sino que le mostrará la cantidad de dinero duramente ganado que puede ahorrar al eliminar años innecesarios de pagos de intereses.',
            list8: 'No hay vendedores molestos. Contamos con un personal de servicio al cliente amigable para responder sus preguntas. Nunca dejamos de preocuparnos por todos nuestros clientes hasta que logran una vida libre de crisis financieras y obtener la tranquilidad de las incertidumbres de la vida',
            list9: 'Ofrecemos mayores tasas de devolución de efectivo que sus competidores',
            list10: 'Ofrecemos plataformas confiables y seguras para cada servicio',
            whyusp5: 'Todas estas son representaciones de nuestro compromiso personal con la satisfacción del cliente, la preocupación genuina y la atención para ayudar a las personas a sobrellevar y superar las dificultades financieras. Los ayudamos a lograr un cambio increíble en su estilo de vida financiero.',
            whyusp6: 'Por qué esperar Solo lleva un minuto <a href=#/register>registrarse</a>. Su información está segura con nosotros. Tratamos sus datos como si fueran nuestros. Comience el camino hacia un futuro financiero mejor. <a href=tel:813-444-5539>¡Llámanos ahora!</a>'
          }
        }
      }
    },
    components: {
    }
  }
  // jQuery(document).ready(function () {
  //   jQuery('.slider').bxSlider({
  //     adaptiveHeight: true
  //   })
  //   // var video = Wistia.api('h4z90hkwgl')
  //   // video.bind('end', function() {
  //   // })
  // })
</script>
