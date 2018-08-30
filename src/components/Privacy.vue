<template>
  <v-container fluid id="terms">
    <header class="mainHeader">
      <div class="container">
          <div class="heading text-center">
                <h3 v-html="translationText.heading"></h3>
          </div>
      </div>
    </header>
    <section class="terms">
        <div class="container">
            <div class="box">
                <h3 v-html="translationText.strong1"></h3>
                <p v-html="translationText.text1"></p>
            </div>
            <div class="box">
                <h4 v-html="translationText.strong2"></h4>
                <p v-html="translationText.text2"></p>
                <ul class="orderList" style="list-style:none;">
                  <li>
                    <h5 v-html="translationText.num1"></h5>
                    <span class="big" v-html="translationText.text3a"></span>
                  </li>
                  <li>
                    <h6 v-html="translationText.register"></h6>
                    <span v-html="translationText.text3"></span>
                  </li>
                  <li>
                    <h6 v-html="translationText.order"></h6>
                    <span v-html="translationText.text4"></span>
                  </li>
                  <li>
                    <h6 v-html="translationText.credit"></h6>
                    <span v-html="translationText.text5"></span>
                  </li>
                  <li>
                    <h6 v-html="translationText.surveys"></h6>
                    <span v-html="translationText.text6"></span>
                  </li>
                  <li>
                    <h5 v-html="translationText.num2"></h5>
                    <span v-html="translationText.text7"></span>
                    <span v-html="translationText.text8"></span>
                  </li>
                </ul>
            </div>
            <div class="box">
                <h3 v-html="translationText.active"></h3>
                <p v-html="translationText.text9"></p>
                <p v-html="translationText.text10"></p>
            </div>
            <div class="box">
                <h3 v-html="translationText.passive"></h3>
                <p v-html="translationText.text11"></p>
                <p v-html="translationText.text12"></p>
                <p v-html="translationText.text13"></p>
            </div>
            <div class="box">
                <h3 v-html="translationText.how"></h3>
                <p v-html="translationText.text14"></p>
                <p v-html="translationText.text15"></p>
            </div>
            <div class="box">
                <h3 v-html="translationText.info"></h3>
                <p v-html="translationText.text16"></p>
            </div>
            <div class="box">
                <h3 v-html="translationText.sharing"></h3>
                <p v-html="translationText.sharingtext"></p>
            </div>
            <div class="box">
                <h3 v-html="translationText.sharing2"></h3>
                <p v-html="translationText.text17"></p>
            </div>
            <div class="box">
                <h3 v-html="translationText.secure"></h3>
                <p v-html="translationText.text18"></p>
            </div>
            <div class="box">
                <h3 v-html="translationText.access"></h3>
                <p v-html="translationText.text19"></p>
            </div>
            <div class="box">
                <h3 v-html="translationText.protect"></h3>
                <p v-html="translationText.text20"></p>
                <p v-html="translationText.text21"></p>
            </div>
            <div class="box">
                <h3 v-html="translationText.links"></h3>
                <p v-html="translationText.text22"></p>
            </div>
            <div class="box">
                <h3 v-html="translationText.childrens"></h3>
                <p v-html="translationText.text23"></p>
            </div>
            <div class="box">
                <h3 v-html="translationText.changes"></h3>
                <p v-html="translationText.text24"></p>
            </div>
            <div class="box">
                <h2 v-html="translationText.boldtext"></h2>
            </div>
        </div>
    </section>
  </v-container>
</template>
<style scoped>
  .feature-item .text-muted {
    text-align: justify;
  }
  .orderList li span{
    font-size: 1rem;
    display: block;
    padding-left: 15px;
    margin-bottom: 20px;
  }
  .orderList li span.big{
    font-size: 16px;
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
              heading: 'PRIVACY POLICY',
              strong1:'Our Commitment to Privacy',
              text1:'Our Privacy Policy has been developed as an extension of our commitment to combine quality products and services with integrity in dealing with users. The Policy is designed to assist you in the understanding of how we collect, use and protect the personal information provided to us.',
              strong2:'What Information Do We Collect?',
              text2:'When you visit our site, we collect two types of information: personal information you actively choose to disclose ("Active Information") and Use information collected, in a way not visible to you, on an aggregate anonymous basis as you and other users browse our site ("Passive Information")',
              num1:'1. Personally Identifiable Information',
              text3a:'This refers to information that lets us know specifically about you i.e. profile information.',
              register:'a. Registration',
              text3:'When you register to become an authorized reseller of our products or services, we will collect Personally Identifiable Information (such as name, address, email address, and telephone number). This Personally Identifiable Information is securely stored and may be accessed on our website. You are assigned an identification number and select your own password – both are needed to enter the Site and to access your Contact Information. Please safeguard your password in a secure location as we are not responsible for breaches into the system when access is willingly provided.',
              order:'b. Ordering',
              text4:'When you place an order for products or services, we collect Personally Identifiable Information (such as name, contact and billing information, credit card, and other transactional information). We use this information to deliver your order, process payment, and to communicate the status of your order.',
              credit:'c. Credit Card Storage',
              text5:'Credit card information collected at registration or for product orders is used only to process payment for the transaction and, generally, is not retained on our Site. However, you may voluntarily elect to securely store multiple credit cards to be used for product orders.',
              surveys:'d. Surveys and Promotions',
              text6:'Occasionally, you may voluntarily provide Personally Identifiable Information to complete surveys and questionnaires or to participate in user polls. We use this information to improve our products and services and to ensure that we’re providing accurate disclosures. We may also use your Personally Identifiable Information to provide you newsletters and other marketing information that coincide with your preferences. You may customize your marketing preferences, or let us know if you do not wish to receive any promotional materials, by adjusting your Subscriptions & Email options on the Site.',
              num2:'2. Aggregate Information',
              text7:'This refers to information that does not, by itself, identify you as a specific individual. Such information would include the Uniform Resource Locator ("URL") of the website that referred you to our Site, your Internet Protocol ("IP") address (a number automatically assigned to your computer whenever you surf the web), your operating system and browser type, and any search terms that you enter on our Site. Our web server aggregates this information in order to monitor the level of activity on our Site, evaluate its effectiveness, and improve the content or our Site in order to make your visit an easy and enjoyable experience.',
              text8:'We may collect, compile, store, publish, promote, report, or otherwise disclose or use any Aggregate Information, provided that such information does not personally identify you. We do not correlate any Personally Identifiable Information with the Aggregate Information that we collect on our Site. If we do correlate any Aggregate Information to you, it will be protected like any other Personally Identifiable Information under this Privacy Statement.',
              active:'Active Information You Choose to Provide',
              text9:'In order to gain use of the site (become a "user"), we require you to disclose the following information: Name, Address and Phone Number',
              text10:'We use secure socket layer (SSL) encryption to protect the transmission of the information you submit to us when you use our secure online forms. The information you provide to us is stored securely.',
              passive:'Passive Information Collected What is a Cookie?',
              text11:'Cookies are a feature of web browser software that allows web servers to recognize the computer used to access a site. They are small pieces of data stored by a user’s browser to simplify subsequent interactions with the site. This makes it easier for a user to move from site to site and to complete transactions over the Internet. Cookies should make your online experience easier and more personalized.',
              text12:'Our site utilizes cookies to collect information about how our site is used. Passive Information gathered may include the date and time of visits, the site pages viewed, time spent at our site, the sites visited just before and just after visiting our site. If you do not wish to transmit "cookie" information about yourself, you may turn off the cookie function in your web browser. Our site’s servers also automatically identify you computer by its Internet Protocol address, which is a unique string of numbers that are assigned to your computer by your Internet Service Provider.',
              text13:'The IP address may be used to address problems with our server or to gather broad demographic information about our users. We passively collect your IP Address.',
              how:'How Do We Use the Information Collected?',
              text14:'Broadly speaking, persons we employ directly, or as contractors or agents at our direction, use Active Information for purposes of administering our business activities, providing customer support and making available other products or services we think might be of interest to our users. We may use the Active Information or Passive Information you provide to contact you about various changes to our site, new services, features or products we offer. If at any time you do not wish to receive such information, you may "opt-out" of doing so by adjusting your email settings in the back office of the website.',
              text15:'We use Passive Information to gather information about our users and to enhance our site to make it easier, faster and friendlier for users. Additionally, cookies help us better understand the usage pattern of the people that visit our site, which helps us improve our services. Passive Information may result in your viewing of particular advertising based on your user habits.',
              info:'Your Information In Relation to Others We Link To',
              text16:'You might be able to access other websites through our site via hyperlinks. When you do so, you are subjecting yourself to their privacy policies and data collection. Please read the privacy policies of those sites to ensure you agree with the terms before using such sites.',
              sharing:'Sharing Information with Advertisers or Other Third Parties',
              sharingtext:'We may disclose anonymous information about user habits to advertisers on our site. The parties who perform services for us (credit card processors, merchant bank, Internet Service Provider) may also have access to your information in performing such services. Should we buy or sell assets of our company, another company may need to review our company’s assets, which might include your information, to make business decisions as to whether to acquire such assets.',
              sharing2:'Sharing Information with the Government or As Otherwise Required by Law',
              text17:'We may be required by subpoena, law or government agency to disclose both Active and Passive Information you have provided to us.',
              secure:'How Do We Secure Active Information and Passive Information?',
              text18:'We secure your personal information submitted by you by using reasonable efforts to prevent unauthorized access or disclosure, or accidental loss of Active and Passive Information. Individual postings on this site and other communications to our office via email or standard mail may not be secure unless we advise you that security measures are in place prior to your submission of information. Therefore, if you choose to communicate with us through these means, you are assuming the risk of doing so and we respectfully request that you do not send or post sensitive information through these means.',
              access:'Accessing and Correcting Your Information',
              text19:'We take reasonable measures to ensure that any Personally Identifiable Information we collect on our Site is accurate, current, complete, and reliable for its intended use. If you wish to update or otherwise correct Personally Identifiable Information provided to us, you may edit your information online.',
              protect:'Protecting Your Information',
              text20:'We acknowledge your trust and are committed to take reasonable steps to protect Personally Identifiable Information provided from loss, misuse, and unauthorized access. We employ physical, electronic, and managerial processes to safeguard and secure your information.',
              text21:'It is you responsibility to safeguard the password you use to access our Site and to promptly advise us if you ever suspect that your password has been compromised. We strongly encourage you to change your password regularly to prevent unauthorized access. Because your identification number and password are specific to you, you acknowledge sole responsibility for any and all use of our Site conducted with your identification number and password.',
              links:'Links to Other Websites',
              text22:'Links to third-party websites may be provided solely for your information and convenience or to provide additional shopping for various other goods and services through our Merchant and Services Partners. If you use these links, you will leave our Site. This Privacy Statement does not cover the information practices of those websites nor do we control their content or privacy policies. We suggest that you carefully review the privacy policies of each site you visit.',
              childrens:'Children’s Privacy Protection',
              text23:'We take special care to protect the privacy needs of children and encourage parents to be an active participant in their child’s online activities. Our Site does not target and is not intended for children under the age of 18, and we will not knowingly collect Personally Identifiable Information from them. If we discover personal data from a child through our site, we will eliminate that data.You may learn more about protecting children’s privacy online by visiting: <a href=http://www.ftc.gov/bcp/edu/pubs/consumer/tech/tec08.shtm>http://www.ftc.gov/bcp/edu/pubs/consumer/tech/tec08.shtm</a>.',
              changes:'Changes to This Statement',
              text24:'Any updates or changes to the terms of this Privacy Statement will be posted on our Site and the date of the newest version posted below. Please check back frequently, especially before you submit any Personally Identifiable Information at our Site, to see if this Privacy Statement has changed. By using our Site, you acknowledge acceptance of this Privacy Statement in effect at the time of use.',
              boldtext:'YOUR USE OF OUR SITE MEANS THAT YOU ACCEPT THE PRACTICES SET FORTH IN THIS POLICY. YOUR CONTINUED USE INDICATES YOUR AGREEMENT TO THE CHANGES.'
          }
        } else if (val === 'es') {
          this.translationText = {
              heading: 'POLÍTICA DE PRIVACIDAD',
              strong1:'Nuestro Compromiso Con La Privacidad',
              text1:'Nuestra política de privacidad se ha desarrollado como una extensión de nuestro compromiso de combinar productos y servicios de calidad con integridad al tratar con los usuarios. La Política está diseñada para ayudarlo a comprender cómo recopilamos, usamos y protegemos la información personal que se nos proporciona.',
              strong2:'¿Qué información recopilamos?',
              text2:'Cuando visita nuestro sitio, recopilamos dos tipos de información: la información personal que elige divulgar activamente ("Información activa") y Usa la información recopilada, de forma no visible para usted, en forma anónima agregada mientras usted y otros usuarios navegan nuestro sitio ("Información pasiva")',
              num1:'1. Información de identificación personal',
              text3a:'Esto se refiere a información que nos permite saber específicamente sobre usted, es decir, información de perfi',
              register:'a. Registro',
              text3:'Cuando se registre para convertirse en un distribuidor autorizado de nuestros productos o servicios, recopilaremos información de identificación personal (como nombre, dirección, dirección de correo electrónico y número de teléfono). Esta información de identificación personal se almacena de forma segura y se puede acceder a ella en nuestro sitio web. Se le asigna un número de identificación y selecciona su propia contraseña; ambos son necesarios para ingresar al Sitio y para acceder a su Información de contacto. Proteja su contraseña en un lugar seguro ya que no somos responsables de las infracciones en el sistema cuando el acceso se proporciona de manera voluntaria.',
              order:'b. Ordenando',
              text4:'Cuando realiza un pedido de productos o servicios, recopilamos información de identificación personal (como nombre, contacto e información de facturación, tarjeta de crédito y otra información transaccional). Usamos esta información para entregar su pedido, procesar el pago y comunicar el estado de su pedido.',
              credit:'c. Almacenamiento con tarjeta de crédito',
              text5:'La información de la tarjeta de crédito recopilada en el registro o para pedidos de productos se usa solo para procesar el pago de la transacción y, en general, no se conserva en nuestro Sitio. Sin embargo, puede elegir voluntariamente almacenar de forma segura varias tarjetas de crédito para usar en pedidos de productos.',
              surveys:'d.  Encuestas y Promociones',
              text6:'Ocasionalmente, puede proporcionar voluntariamente información de identificación personal para completar encuestas y cuestionarios o para participar en encuestas de usuarios. Usamos esta información para mejorar nuestros productos y servicios y para garantizar que proporcionamos divulgaciones precisas. También podemos usar su información de identificación personal para enviarle boletines informativos y otra información de marketing que coincida con sus preferencias. Puede personalizar sus preferencias de marketing, o informarnos si no desea recibir ningún material promocional, ajustando sus opciones de suscripción y correo electrónico en el sitio',
              num2:'2. Información agregada',
              text7:'Esto se refiere a la información que, por sí misma, no lo identifica como un individuo específico. Dicha información incluiría el Localizador Uniforme de Recursos ("URL") del sitio web que lo remitió a nuestro Sitio, su dirección de Protocolo de Internet ("IP") (un número asignado automáticamente a su computadora cada vez que navega por la web), su sistema operativo y tipo de navegador, y cualquier término de búsqueda que ingrese en nuestro Sitio. Nuestro servidor web agrega esta información para monitorear el nivel de actividad en nuestro Sitio, evaluar su efectividad y mejorar el contenido de nuestro Sitio para que su visita sea una experiencia fácil y agradable.',
              text8:'Podemos recopilar, compilar, almacenar, publicar, promocionar, informar o divulgar o utilizar cualquier información agregada, siempre que dicha información no lo identifique personalmente. No correlacionamos ninguna información de identificación personal con la información agregada que recopilamos en nuestro sitio. Si correlacionamos cualquier información agregada con usted, estará protegida como cualquier otra información de identificación personal según esta Declaración de privacidad.',
              active:'Información activa que elige proporcionar',
              text9:'Para aprovechar el sitio (conviértase en un "usuario"), le solicitamos que divulgue la siguiente información: nombre, dirección y número de teléfono',
              text10:'Usamos cifrado de capa de conexión segura (SSL) para proteger la transmisión de la información que nos envía cuando utiliza nuestros formularios seguros en línea. La información que nos proporciona se almacena de forma segura.',
              passive:'Información pasiva recopilada ¿Qué es una cookie?',
              text11:'Las cookies son una característica del software de navegador web que permite a los servidores web reconocer la computadora utilizada para acceder a un sitio. Son pequeñas piezas de datos almacenados por el navegador de un usuario para simplificar las interacciones posteriores con el sitio. Esto hace que sea más fácil para un usuario moverse de un sitio a otro y completar transacciones a través de Internet. Las cookies deben hacer que su experiencia en línea sea más fácil y personalizada',
              text12:'Nuestro sitio utiliza cookies para recopilar información sobre cómo se usa nuestro sitio. Pasiva La información recopilada puede incluir la fecha y la hora de las visitas, las páginas del sitio visitadas, el tiempo pasado en nuestro sitio, los sitios visitados justo antes y justo después de visitar nuestro sitio. Si no desea transmitir información sobre "cookies" sobre usted, puede desactivar la función de cookies en su navegador web. Los servidores de nuestro sitio también identifican automáticamente su computadora por su dirección de Protocolo de Internet, que es una cadena única de números que su Proveedor de Servicios de Internet asigna a su computadora. La dirección IP puede usarse para resolver problemas con nuestro servidor o para recopilar información demográfica amplia sobre nuestros usuarios. Recopilamos pasivamente su dirección IP.',
              text13:'The IP address may be used to address problems with our server or to gather broad demographic information about our users. We passively collect your IP Address.',
              how:'¿Cómo utilizamos la información recopilada?',
              text14:'En términos generales, las personas que empleamos directamente, o como contratistas o agentes bajo nuestra dirección, usan Active Information para administrar nuestras actividades comerciales, proporcionar soporte al cliente y poner a disposición otros productos o servicios que creemos que pueden ser de interés para nuestros usuarios. Podemos utilizar la información activa o la información pasiva que brinde para contactarlo sobre diversos cambios en nuestro sitio, nuevos servicios, características o productos que ofrecemos. Si en algún momento no desea recibir dicha información, puede "optar por no participar" al hacerlo ajustando su configuración de correo electrónico en la oficina administrativa del sitio web.',
              text15:'Usamos información pasiva para recopilar información sobre nuestros usuarios y mejorar nuestro sitio para que sea más fácil, más rápido y más amigable para los usuarios. Además, las cookies nos ayudan a comprender mejor el patrón de uso de las personas que visitan nuestro sitio, lo que nos ayuda a mejorar nuestros servicios. La información pasiva puede dar como resultado la visualización de publicidad en particular en función de sus hábitos de usuario.',
              info:'Su información en relación con otros nos vinculamos a',
              text16:'Es posible que pueda acceder a otros sitios web a través de nuestro sitio a través de hipervínculos. Cuando lo hace, se está sometiendo a sus políticas de privacidad y recopilación de datos. Lea las políticas de privacidad de esos sitios para asegurarse de estar de acuerdo con los términos antes de utilizar dichos sitios.',
              sharing:'Compartir información con anunciantes u otros terceros',
              sharingtext:'Podemos divulgar información anónima sobre los hábitos de los usuarios a los anunciantes en nuestro sitio. Las partes que prestan servicios para nosotros (procesadores de tarjetas de crédito, banco comercial, proveedor de servicios de Internet) también pueden tener acceso a su información al realizar dichos servicios. Si compramos o vendemos activos de nuestra compañía, es posible que otra compañía tenga que revisar los activos de nuestra compañía, que pueden incluir su información, para tomar decisiones comerciales sobre la adquisición de dichos activos.',
              sharing2:'Compartir información con el gobierno o según lo requiera la ley',
              text17:'Es posible que seamos requeridos por citación, ley o agencia gubernamental para divulgar información activa y pasiva que nos haya proporcionado.',
              secure:'¿Cómo aseguramos información activa e información pasiva?',
              text18:'Protegemos su información personal presentada por usted mediante el uso de esfuerzos razonables para evitar el acceso o la divulgación no autorizados, o la pérdida accidental de información activa y pasiva. Las publicaciones individuales en este sitio y otras comunicaciones a nuestra oficina por correo electrónico o correo estándar pueden no ser seguras a menos que le avisemos que existen medidas de seguridad antes de enviar su información. Por lo tanto, si elige comunicarse con nosotros a través de estos medios, está asumiendo el riesgo de hacerlo y le pedimos respetuosamente que no envíe o publique información confidencial a través de estos medios.',
              access:'Accediendo y corrigiendo su información',
              text19:'Tomamos medidas razonables para garantizar que cualquier información de identificación personal que recopilemos en nuestro sitio sea precisa, actual, completa y confiable para su uso previsto. Si desea actualizar o corregir la información de identificación personal que se nos proporciona, puede editar su información en línea.',
              protect:'Protegiendo su información',
              text20:'Reconocemos su confianza y nos comprometemos a tomar medidas razonables para proteger la información de identificación personal provista por la pérdida, el uso indebido y el acceso no autorizado. Empleamos procesos físicos, electrónicos y gerenciales para salvaguardar y proteger su información.',
              text21:'Es su responsabilidad proteger la contraseña que usa para acceder a nuestro Sitio y avisarnos inmediatamente si alguna vez sospecha que su contraseña se ha visto comprometida. Le recomendamos encarecidamente que cambie su contraseña regularmente para evitar el acceso no autorizado. Debido a que su número de identificación y contraseña son específicos para usted, usted reconoce la responsabilidad exclusiva por el uso de nuestro Sitio con su número de identificación y contraseña.',
              links:'Enlaces a otros sitios web',
              text22:'Los enlaces a sitios web de terceros se pueden proporcionar únicamente para su información y conveniencia o para proporcionar compras adicionales para otros bienes y servicios a través de nuestros socios de comerciantes y servicios. Si usa estos enlaces, abandonará nuestro sitio. Esta Declaración de privacidad no cubre las prácticas de información de esos sitios web ni controlamos su contenido o políticas de privacidad. Sugerimos que revise cuidadosamente las políticas de privacidad de cada sitio que visite.',
              childrens:'Protección de la privacidad de los niños',
              text23:'Tomamos especial cuidado para proteger las necesidades de privacidad de los niños y alentamos a los padres a ser un participante activo en las actividades en línea de sus hijos. Nuestro sitio no está dirigido y no está destinado a niños menores de 18 años, y no recopilaremos a sabiendas información de identificación personal de ellos. Si descubrimos datos personales de un niño a través de nuestro sitio, eliminaremos esa información. Puede obtener más información sobre cómo proteger la privacidad de los niños en línea visitando: <a href=http://www.ftc.gov/bcp/edu/pubs/consumer/tech/tec08.shtm>http://www.ftc.gov/bcp/edu/pubs/consumer/tech/tec08.shtm</a>.',
              changes:'Cambios a esta declaración',
              text24:'Todas las actualizaciones o cambios a los términos de esta Declaración de privacidad se publicarán en nuestro Sitio y la fecha de la versión más nueva publicada a continuación. Consulte con frecuencia, especialmente antes de enviar cualquier información de identificación personal en nuestro sitio, para ver si esta declaración de privacidad ha cambiado. Al utilizar nuestro sitio, usted reconoce la aceptación de esta declaración de privacidad vigente al momento de su uso',
              boldtext:'SU USO DE NUESTRO SITIO SIGNIFICA QUE ACEPTA LAS PRÁCTICAS ESTABLECIDAS EN ESTA POLÍTICA. SU USO CONTINUADO INDICA SU ACUERDO CON LOS CAMBIOS.'
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
