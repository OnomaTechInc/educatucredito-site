<template>
  <v-container fluid>
    <header class="masthead3">
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
    <section class="section2 p-5 pt-0">
      <div class="container p-5">
        <div class="row p-5">
          <v-flex xs12 sm12 md12 lg12 class="my-auto">
            <h2>About Us</h2>
            <p>Estamos más allá de la reparación de crédito por única vez. Nuestro equipo está dedicado a ayudarlo a desarrollar una relación más saludable con su crédito. Nuestro enfoque y objetivo principal es usted, su situación, su historia y su disposición a realizar un cambio en su vida financiera para usted y su familia. Queremos alentarlo a hacer un buen cambio de estilo de vida que pueda darle la clave para sus sueños financieros.</p>
            <p>Un puntaje de crédito no es solo un número; es un estilo de vida. Lo ayudaremos a lograr un buen estilo de vida financiero. Nuestra compañía de expertos financieros cree que podemos hacer un cambio significativo en su vida.</p>
            <p>Nuestro producto y servicios que le ofrecemos.PLAN DE PROTECCIÓN DE SERVICIOS DE EDUCACIÓN FINANCIERA (FES)</p>
            <p>CARACTERÍSTICAS PRIMARIAS</p>
            <p>Restauración de crédito</p>
            <p>Generador de crédito positivo</p>
            <p>Abogado de crédito</p>
            <p>Crédito inteligente</p>
            <p>Fes Debt Zero</p>
            <p>Lifelock</p>
            <p>Bloqueo financiero</p>
            <p>Valor del seguro de vida</p>
            <p>Plan Mycare</p>
            <p>Compras con descuento</p>
            <p>Yfl Family Mint</p>
            <p>Tarjeta de descuento Rx</p>
            <p>REGÍSTRESE AHORA Y HABLE CON NUESTROS AMIGOS CONSULTANTES FINANCIEROS PARA QUE PUEDA TENER UN BUEN ESTILO DE VIDA DE CRÉDITO</p>
          </v-flex>
        </div>
      </div>
    </section>


  </v-container>
</template>





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
            section1h2: 'We believe all of us has a right',
            section1h3: 'A credit score is not just a number; it\'s a lifestyle. We will help you achieve  a good financial lifestyle. <br /> Our company of financial experts  believe we can make a significant change in your life.',
            section1h4: 'Register Now',
            section2col1: 'Achieve financial stability',
            section2col2: 'Increase their ability',
            section2col3: 'Equal opportunities for everything',
            section3h1: 'Our Product and Services we offer you',
            section3h2: 'FINANCIAL EDUCATION SERVICES (FES) PROTECTION PLAN',
            section3title1: 'CREDIT RESTORATION',
            section3title2: 'POSITIVE CREDIT BUILDER',
            section3title3: 'CREDIT ATTORNEY',
            section3title4: 'SMART CREDIT',
            section3title5: 'FES DEBT ZERO',
            section3title6: 'IFE LOCK',
            section3title7: 'FINANCIAL LOCKBOX',
            section3title8: 'VALUE OF LIFE INSURANCE',
            section3title9: 'MYCARE PLAN',
            section3title10: 'WHAT\'S INCLUDED',
            section3title11: 'DISCOUNT SHOPPING',
            section3title12: 'YFL FAMILY MINT',
            section3title13: 'RX DISCOUNT CARD',
            section3desc1: 'Your financial health revolves around your credit score, making it imperative that the information<br /> your credit report contains is as accurate and up-to-date as possible.<br /> Work with our credit experts and proven system to eliminate any inaccurate,<br /> obsolete or erroneous accounts. We\'ll teach you the exact information you need to provide to<br /> the Credit Bureau\'s to use the Fair Credit Reporting Act to your advantage and<br /> dispute the mistaken negative ratings that may be preventing you<br /> from obtaining new credit when you need it most. Lower your interest rates, avoid high late fees,<br /> save money and advance your credit opportunities.',
            section3desc2: 'Understanding how your credit score is calculated and how to read your credit report are the first steps in improving your current standing. Our Credit Education Center offers a wide variety of educational services, credit tips and resources to help you take the necessary steps to enhance your credit score and manage your financial life. Improve your score by identifying the accounts that need immediate attention and why, and understand the impact of the amount of credit you are using.',
            section3desc3: 'We love to help people. We fix people\'s credit reports in a legally and trustworthy manner and fight abusive debt collectors. We turn victims into victors as we step into an otherwise unfair fight started by debt collectors, creditors and credit reporting agencies. We are focused on you and not just your case. Our lawyers and paralegals band together to analyze your case and situation from all angles to bring about the best result in the quickest manner. We will work with you to determine your case eligibility and aim to stop debt harassment & clean up difficult to remove credit report errors from your credit file.',
            section3desc4: 'Manage all your online accounts in one place, integrated with your credit and identity. You can use Action buttons to ask your creditor a question about your account or a transaction. No phone calls or writing letters are necessary. We automatically track and update your account balances, bills coming due and transactions every day. Access your interactive credit report, which is now easy to read, search or find anything quickly, view more or less detail. It also includes your credit score, auto score, insurance score and even a hiring risk index for job seekers. Get alerts to your phone or email that someone opened credit in your name. Then use the Action button to stop the thieves.',
            section3desc5: 'DebtZero is a clear guide on how to more efficiently pay down your debt. Taking into account your debt obligations and interest, the system will show you exactly how to properly allocate your money towards your monthly payments using nothing more than your current income, in order to speed up you debt payoff. Not only will it map out the thousands of dollars you will be saving in interest by paying off your debt significantly earlier than expected, but it will show you the amount of hard earned money you can save by eliminating unnecessary years of interest payments!',
            section3desc6: 'LifeLock uses proprietary technology that searches for potential threats to your identity. If they detect activity using your personal information, you receive an alert, and if you\'re ever victimized by identity theft, a U.S.-Based Identity Restoration specialist will be dedicated to your case.',
            section3desc7: 'If you\'re like most families, one person is generally designated to handle the financial aspects of the household. Or, if you\'re single, you may be the only person who knows the type and location of your financial accounts. What if your loved ones suddenly found themselves in the position of taking over your finances without warning? Would they be able to locate insurance, bank and financial records in the event of an emergency? My Financial Lockbox is an online solution that enables you to store financial data in a single, secure, password-protected location for easy access by you or loved ones that you select and authorize',
            section3desc8: 'Should you pass away unexpectedly, the loss of your financial support may leave a large burden on the shoulders of your loved ones. Life insurance can keep the impact to a minimum by replacing a portion of the lost income and helping to maintain your loved ones current standard of living.',
            section3desc9: 'When it comes to your health and your assets, you\'re used to being in charge. The decisions you make for yourself and your family are important because you know what\'s best for you. unfortunately, in the event that you aren\'t able to speak on behalf of these decisions, someone that doesn\'t understand your wishes can end up making them for you. Without an estate plan in place, these crucial choices regarding YOUR health, YOUR finances, and YOUR family are suddenly out of your control.',
            section3desc10: 'Lost Will<br /> Your Last Will states how you want your assets to be distributed among your heirs upon your death.<br /><br /> Living Trust<br /> What is placed into your living trust can be altered throughout your lifetime, and upon your passing, will be transferred to whomever you appoint as a Trustee.<br /><br /> Health Care Power of Attorney<br /> This document names someone to be your health care agent, sometimes referred to as a representative proxy, or patient advocate.',
            section3desc11: 'Simply browse the offers available at our retailers or search for a specific product. When you\'re ready to earn rewards, just click through to the retailer via our link and complete your purchase. You can shop by searching for Stores, Deals or Products. Every time you shop at any of our 4,000 retailers, you are rewarded for our generated sale through that vendor. Your shopping experience is simple- using the exact same website your favorite retailer provides, but allowing you to earn Cash Back benefits. Want additional discounts? We often offer additional coupon codes to copy and paste at checkout.',
            section3desc12: 'FamilyMint is an award-winning online money management and goal-setting application that offers an engaging way for kids to learn financial responsibility. It\'s easy for kids to use, lets them connect their money with real-world meaning, and most importantly, learn by doing. Your FES Protection Plan membership gives you access to the YFL\'s FamilyMint web and mobile interfaces, provides a quarterly financial newsletter "snippet" for kids, as well as detailed information on how to bring the FamilyMint workbook program to your child\'s classroom.',
            section3desc13: 'Lower your out-of-pocket prescription expenses, with discounts ranging from 10% to 85% on most medications. Present your membership card along with your prescriptions to your pharmacist and ask to compare our contracted discount price with the pharmacy\'s retail price when the prescription is processed. You pay the lower of the two prices directly to the pharmacy at the point of sale, regardless of promotions and discounts.',
            contactus: 'CONTACT US',
            location: 'OUR OFFICE LOCATION',
            sayhi: 'SAY HI',
            continuefill: 'Fill out the form below to continue watching video',
            submitbtn: 'Submit',
            pl1: 'Credit Restoration',
            pl2: 'Credit Builder',
            pl3: 'Credit Attorney',
            pl4: 'Smart Credit',
            pl5: 'Debt Zero',
            pl6: 'Lifelock',
            pl7: 'Financial Lockbox',
            pl8: 'Life Insurance',
            pl9: 'MyCare Plan',
            pl10: 'Discount Shopping',
            pl11: 'YFL Family Mint',
            pl12: 'RX Discount Card',
            pl13: 'FES Travel',
            pl14: 'Health Insurance',
            feats: 'Primary Features'
          }
        } else if (val === 'es') {
          this.translationText = {
            section1h2: 'Creemos que todos nosotros tenemos un derecho',
            section1h3: 'Un puntaje de crédito no es solo un número, es un estilo de vida. Lo ayudaremos a lograr un buen estilo de vida financiero. Nuestra compañía de expertos financieros cree que podemos hacer un cambio significativo en su vida',
            section1h4: 'Regístrate Ahora',
            section2col1: 'Lograr estabilidad financiera',
            section2col2: 'Incrementa su habilidad',
            section2col3: 'Igualdad de oportunidades para todo',
            section3h1: 'Nuestro Producto Y Servicios Que Te Ofrecemos',
            section3h2: 'PLAN DE PROTECCIÓN DE SERVICIOS DE EDUCACIÓN FINANCIERA (FES)',
            section3title1: 'RESTAURACIÓN DE CRÉDITO',
            section3title2: 'CONSTRUCTOR DE CRÉDITO POSITIVO',
            section3title3: 'ABOGADO DE CRÉDITO',
            section3title4: 'CRÉDITO INTELIGENTE',
            section3title5: 'FES DEBT ZERO',
            section3title6: 'LIFELOCK',
            section3title7: 'BLOQUEO FINANCIERO',
            section3title8: 'VALOR DE SEGURO DE VIDA',
            section3title9: 'MYCARE PLAN',
            section3title10: 'QUÉ ESTÁ INCLUIDO',
            section3title11: 'DESCUENTO COMPRAS',
            section3title12: 'YFL FAMILY MINT',
            section3title13: 'TARJETA DE DESCUENTO RX',
            section3desc1: 'Su salud financiera gira en torno a su puntaje de crédito, por lo que es imperativo que la información su informe de crédito contiene la información más precisa y actualizada posible. Trabaje con nuestros expertos en crédito y un sistema comprobado para eliminar cualquier inexactitud, cuentas obsoletas o erróneas. Le enseñaremos la información exacta que necesita proporcionar a la Oficina de Crédito para utilizar la Ley de Informes Crediticios Justos a su favor y disputa las clasificaciones negativas erróneas que pueden estar previniendo de obtener nuevo crédito cuando más lo necesita. Reduzca sus tasas de interés, evite altas tarifas por pagos atrasados, Ahorre dinero y avance sus oportunidades de crédito',
            section3desc2: 'Comprender cómo se calcula su puntaje de crédito y cómo leer su informe de crédito son los primeros pasos para mejorar su posición actual. Nuestro Centro de Educación Crediticia ofrece una amplia variedad de servicios educativos, consejos de crédito y recursos para ayudarlo a tomar los pasos necesarios para mejorar su puntaje de crédito y administrar su vida financiera. Mejore su puntaje al identificar las cuentas que necesitan atención inmediata y por qué, y entienda el impacto de la cantidad de crédito que está utilizando.Características específicas Un desglose del sistema de puntuación de crédito Comprender el sistema de puntuación de crédito; cómo funciona y cómo afecta su salud y libertad financiera. Técnicas de gestión de crédito Detalles sobre cómo sus acciones financieras pueden afectar su puntaje de crédito y cómo mejorar su puntaje actual Centro de educación y recursos Incluye una amplia variedad de servicios educativos, consejos de crédito y herramientas de presupuesto para establecer y mantener su buen crédito.',
            section3desc3: 'Nos encanta ayudar a la gente Arreglamos los informes de crédito de las personas de manera legal y confiable y luchamos contra los cobradores de deudas abusivas. Convertimos a las víctimas en vencedoras cuando entramos en una pelea por lo demás injusta iniciada por los cobradores de deudas, los acreedores y las agencias de informes crediticios. Estamos enfocados en ti y no solo en tu caso. Nuestros abogados y asistentes legales se unen para analizar su caso y su situación desde todos los ángulos para lograr el mejor resultado de la manera más rápida. Trabajaremos con usted para determinar la elegibilidad de su caso y nuestro objetivo es detener el acoso y la limpieza de la deuda, lo cual dificulta la eliminación de los errores de informe de crédito de su expediente crediticio. Los recaudadores de deudas están capacitados en las leyes de la Ley de prácticas justas de cobro de deudas. Ellos saben lo que pueden y no pueden hacer. Igualmente saben que los consumidores a los que llaman no son tan conocedores de sus derechos según la ley. Según la ley, hay muchas cosas que los coleccionistas no pueden hacer para cobrar una deuda.',
            section3desc4: 'Administre todas sus cuentas en línea en un solo lugar, integrado con su crédito e identidad. Puede usar los botones de acción para hacerle una pregunta a su acreedor sobre su cuenta o una transacción. No se necesitan llamadas telefónicas ni escribir cartas. Rastreamos y actualizamos automáticamente los saldos de sus cuentas, facturas vencidas y transacciones diarias. Acceda a su informe de crédito interactivo, que ahora es fácil de leer, busque o encuentre algo rápidamente, vea más o menos detalles. También incluye su puntaje de crédito, puntaje automático, puntaje de seguro e incluso un índice de riesgo de contratación para personas que buscan trabajo. Recibe alertas de tu teléfono o correo electrónico que alguien abrió crédito a tu nombre. Luego usa el botón Acción para detener a los ladrones. Características específicas Administrador de dinero Acceso seguro a todas sus cuentas Encontramos sus cuentas en línea para usted. No se requieren adivinanzas o búsquedas. Declaraciones instantáneas Todas sus cuentas se actualizan a lo largo del día, incluidas las transacciones pendientes. Actúa fácilmente, Pregúntele a su banco o compañía de tarjeta de crédito cualquier cosa con un clic de un botón.',
            section3desc5: 'DebtZero es una guía clara sobre cómo pagar de manera más eficiente su deuda. Teniendo en cuenta sus obligaciones e intereses de deuda, el sistema le mostrará exactamente cómo asignar correctamente su dinero a sus pagos mensuales utilizando únicamente sus ingresos actuales, a fin de acelerar el pago de su deuda. No solo asignará los miles de dólares que ahorrará intereses pagando su deuda significativamente antes de lo esperado, ¡pero le mostrará la cantidad de dinero duramente ganado que puede ahorrar al eliminar años innecesarios de pagos de intereses!',
            section3desc6: 'LifeLock utiliza tecnología patentada que busca posibles amenazas a su identidad. Si detectan actividad utilizando su información personal, usted recibe una alerta, y si alguna vez es víctima de un robo de identidad, un especialista en restauración de identidad con sede en los EE. UU. Estará dedicado a su caso.',
            section3desc7: 'Si usted es como la mayoría de las familias, generalmente se designa a una persona para manejar los aspectos financieros del hogar. O bien, si es soltero, puede ser la única persona que conoce el tipo y la ubicación de sus cuentas financieras. ¿Qué pasa si sus seres queridos de repente se encuentran en la posición de hacerse cargo de sus finanzas sin previo aviso? ¿Podrían ubicar registros de seguros, bancos y financieros en caso de una emergencia? My Financial Lockbox es una solución en línea que le permite almacenar datos financieros en una ubicación única, segura y protegida por contraseña para que usted o sus seres queridos puedan acceder fácilmente y seleccionar y autorizar',
            section3desc8: 'Si fallece inesperadamente, la pérdida de su apoyo financiero puede dejar una gran carga sobre los hombros de sus seres queridos. El seguro de vida puede mantener el impacto al mínimo reemplazando una parte de los ingresos perdidos y ayudando a mantener el nivel de vida actual de sus seres queridos. Características específicas Asistir con servicios médicos y funerarios Puede dejar los gastos médicos sin seguro, además del gasto de los servicios funerarios. En un momento emocional y difícil, su seguro de vida se puede utilizar para cubrir estos gastos sin dificultades financieras o estrés adicional.',
            section3desc9: 'Cuando se trata de su salud y sus activos, está acostumbrado a estar a cargo. Las decisiones que toma para usted y su familia son importantes porque sabe lo que es mejor para usted. desafortunadamente, en caso de que no pueda hablar en nombre de estas decisiones, alguien que no comprende sus deseos puede terminar haciéndolos por usted. Sin un plan de sucesión, estas opciones cruciales con respecto a SU salud, SUS finanzas y SU familia están repentinamente fuera de su control.',
            section3desc10: 'Voluntad perdida<br />Su última voluntad establece cómo desea que sus activos se distribuyan entre sus herederos después de su muerte. Esto también puede incluir a quién designaría como tutor para sus hijos menores una vez incapaces. Sin especificar esta información en un documento oficial firmado, el Estado distribuirá su propiedad como ELLOS lo consideren oportuno.<br />Confianza de vida<br />Lo que se coloca en su fideicomiso en vida se puede modificar a lo largo de su vida y, a su fallecimiento, se transferirá a quien designe como Fideicomisario. Con un fideicomiso en vida, mantendrá la privacidad de la distribución de sus activos y evitará los costos del tribunal de sucesiones.<br />Poder de atención médica<br /> Este documento nombra a alguien para que sea su agente de atención médica, a veces denominado representante representante o defensor del paciente. ', 
            section3desc11: 'Simplemente navegue por las ofertas disponibles en nuestros minoristas o busque un producto específico. Cuando esté listo para ganar recompensas, simplemente haga clic en el minorista a través de nuestro enlace y complete su compra. Puede comprar buscando Tiendas, Ofertas o Productos. Cada vez que compra en cualquiera de nuestros 4,000 minoristas, se le recompensa por nuestra venta generada a través de ese proveedor. Su experiencia de compra es simple: utiliza exactamente el mismo sitio web que su minorista favorito, pero le permite obtener beneficios de devolución de efectivo. ¿Quieres descuentos adicionales? A menudo ofrecemos códigos de cupones adicionales para copiar y pegar en el proceso de pago.', 
            section3desc12: 'FamilyMint es una galardonada aplicación de gestión de dinero y establecimiento de metas en línea que ofrece una manera atractiva para que los niños aprendan la responsabilidad financiera. Es fácil de usar para los niños, les permite conectar su dinero con el significado del mundo real, y lo más importante, aprender haciendo. Su membresía en el Plan de protección FES le da acceso a las interfaces web y móviles FamilyMint de YFL, proporciona un "fragmento" de boletín financiero trimestral para niños, así como información detallada sobre cómo llevar el programa Libro de trabajo FamilyMint al aula de su hijo.', 
            section3desc13: 'Reduzca sus gastos de bolsillo de medicamentos recetados, con descuentos que van del 10% al 85% en la mayoría de los medicamentos. Presente su tarjeta de membresía junto con sus recetas a su farmacéutico y solicite comparar el precio de descuento contratado con el precio minorista de la farmacia cuando se procesa la receta. Usted paga el menor de los dos precios directamente a la farmacia en el punto de venta, independientemente de las promociones y descuentos.',
            contactus: 'CONTÁCTENOS',
            location: 'Ubicación',
            sayhi: 'Di hola',
            continuefill: 'Complete el siguiente formulario para continuar viendo el video',
            submitbtn: 'Enviar',
            pl1: 'Restauración de crédito',
            pl2: 'Creador de crédito',
            pl3: 'Abogado de crédito',
            pl4: 'Crédito inteligente',
            pl5: 'Deuda cero',
            pl6: 'Lifelock',
            pl7: 'Bloqueo financiero',
            pl8: 'Seguro de vida',
            pl9: 'MyCare Plan',
            pl10: 'Compras con descuento',
            pl11: 'YFL Family Mint',
            pl12: 'Tarjeta de descuento RX',
            pl13: 'FES Travel',
            pl14: 'Seguro de salud',
            feats: 'Características principales'
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
    $('.v-list button').on('click',function(){
      $(this).parent().addClass('slideUp')
      $('.v-list').addClass('slideUp')
      $('.v-dialog').addClass('slideUp')
      $('.v-overlay').addClass('slideUp')
    })
    $('.v-overlay').on('click',function(){
      $(this).addClass('slideUp')
      $('.v-list').addClass('slideUp')
      $('.v-dialog').addClass('slideUp')
    })
    // var video = Wistia.api("h4z90hkwgl")
    // video.bind("end", function() {
      
    // })
  })
</script>




<style scoped>
  .feature-item .text-muted {
    text-align: justify;
  }
  #mainNav {
    opacity: 1 !important;
    padding-bottom: 40px !important;
    position: relative !important;
  }
  .section2 {
    height: auto !important;
    padding-bottom: 40px !important;
  }
</style>