<template>
  <v-container fluid id="terms">
    <header class="mainHeader">
      <div class="container">
          <div class="heading text-center">
              <h3 class="text-uppercase" v-html="translationText.heading"></h3>
              <span class="lead" v-html="translationText.lead"></span>
          </div>
      </div>
    </header>
    <section class="terms">
        <div class="container">
            <div class="box">
                <h3 v-html="translationText.title1"></h3>
                <p v-html="translationText.title1p"></p>
            </div>
            <div class="box">
                <h3 v-html="translationText.title2"></h3>
                <p v-html="translationText.title2p"></p>
            </div>
            <div class="box">
                <h3 v-html="translationText.title3"></h3>
                <p v-html="translationText.title3p"></p>
            </div>
            <div class="box">
                <h3 v-html="translationText.title4"></h3>
                <p v-html="translationText.title4p"></p>
            </div>
            <div class="box">
                <h3 v-html="translationText.title5"></h3>
                <p v-html="translationText.title5p1"></p>
                <p v-html="translationText.title5p2"></p>
            </div>
            <div class="box">
                <h3 v-html="translationText.title5e"></h3>
                <p v-html="translationText.title5p3"></p>
            </div>
            <div class="box">
                <h3 v-html="translationText.title6"></h3>
                <p v-html="translationText.title6p"></p>
            </div>
            <div class="box">
                <h3 v-html="translationText.title7"></h3>
                <p v-html="translationText.title7p"></p>
            </div>
            <div class="box">
                <h3 v-html="translationText.title8"></h3>
                <p v-html="translationText.title8p"></p>
            </div>
            <div class="box">
                <h3 v-html="translationText.title9"></h3>
                <p v-html="translationText.title9p1"></p>
                <div class="list">
                    <ul>
                        <li v-html="translationText.title9list1"></li>
                        <li v-html="translationText.title9list2"></li>
                        <li v-html="translationText.title9list3"></li>
                        <li v-html="translationText.title9list4"></li>
                        <li v-html="translationText.title9list5"></li>
                    </ul>
                </div>
                <p v-html="translationText.title9p2"></p>
                <p v-html="translationText.title9p3"></p>
                <p v-html="translationText.title9p4"></p>
                <p v-html="translationText.title9p5"></p>
            </div>
            <div class="box">
                <h3 v-html="translationText.title10"></h3>
                <p v-html="translationText.title10p1"></p>
                <p v-html="translationText.title10p2"></p>
                <p v-html="translationText.title10p3"></p>
                <p v-html="translationText.title10p4"></p>
            </div>
            <div class="box">
                <h3 v-html="translationText.title11"></h3>
                <p v-html="translationText.title11p"></p>
            </div>
            <div class="box">
                <h3 v-html="translationText.title12"></h3>
                <p v-html="translationText.title12p1"></p>
                <p v-html="translationText.title12p2"></p>
            </div>
            <div class="box">
                <h3 v-html="translationText.title13"></h3>
                <p v-html="translationText.title13p"></p>
            </div>
            <div class="box">
                <h3 v-html="translationText.title14"></h3>
                <p v-html="translationText.title14p"></p>
            </div>
            <div class="box">
                <h3 v-html="translationText.title15"></h3>
                <p v-html="translationText.title15p"></p>
            </div>
            <div class="box">
                <h3 v-html="translationText.title16"></h3>
                <p v-html="translationText.title16p"></p>
            </div>
            <div class="box">
                <h3 v-html="translationText.title17"></h3>
                <p v-html="translationText.title17p"></p>
            </div>
            <div class="box">
                <h3 v-html="translationText.title18"></h3>
                <p v-html="translationText.title18p1"></p>
                <p v-html="translationText.title18p2"></p>
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
                title5e:'Export',
                title6:'Government Use',
                title7:'Errors and Corrections',
                title8:'LINKS TO OTHER WEBSITES',
                title9:'USER CONDUCT',
                title10:'INTELLECTUAL PROPERTY RIGHTS',
                title11:'THIRD PARTY SITES',
                title12:'RETURNS',
                title13:'DISCLAIMER OF WARRANTIES',
                title14:'LIMITATION OF LIABILITY',
                title15:'INDEMNIFICATION',
                title16:'LEGAL COMPLIANCE',
                title17:'CHOICE OF LAW AND FORUM',
                title18:'MISCELLANEOUS',
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
                title9list3:'c. constitutes unauthorized or unsolicited advertising, junk or bulk e-mail (also known as "spamming"), chain letters, any other form of unauthorized solicitation, or any form of lottery or gambling;',
                title9list4:'d. contains software viruses or any other computer code, files, or programs that are designed or intended to disrupt, damage, or limit the functioning of any software, hardware, or telecommunications equipment or to damage or obtain unauthorized access to any data or other information of any third party; or',
                title9list5:'e. impersonates any person or entity, including any employee or representative of this site, its licensors or advertisers.',
                title9p2:'You also agree that you shall not harvest or collect information about the users of this site or use such information for the purpose of transmitting or facilitating transmission of unsolicited bulk electronic email or communications for any other commercial purpose of your own or a third party.',
                title9p3:'You further agree that you shall not solicit or collect information, or attempt to induce any physical contact with, anyone 18 years old or younger without appropriate parental consent.',
                title9p4:'This site generally does not pre-screen, monitor, or edit the content posted by users of this site. However, this site and its agents have the right, at their sole discretion, to remove any content that, in this site’s sole judgment, does not comply with the Site Submission Rules or is otherwise harmful, objectionable, or inaccurate. This site is not liable for any failure, delay, damages or results, in removing such content.',
                title9p5:'You agree that your use of this site may be suspended or terminated immediately upon receipt of any notice which alleges that you have used this site in violation of these Rules and/or for any purpose that violates any local, state, federal or law of other nations, including but not limited to the posting of information that may violate third party rights, that may defame a third party, that may be obscene or pornographic, that may harass or assault other, that may violate hacking or other criminal regulations, etc. of its agents, officers, directors, contractors or employees. In such event, you agree that the owner of this site may disclose your identity and contact information, if requested by a government or law enforcement body or as a result of a subpoena or other legal action, and the owner of this site shall not be liable for damages or result of a subpoena or other legal action, and the owner of this site shall not be liable for damages or results thereof, and you agree not to bring any action or claim against the owner of this site for such disclosure.',
                title10p1:'1. Copyright',
                title10p2:'The Site design, text, content, selection and arrangement of elements, organization, graphics, compilation, magnetic translation, digital conversion, and other matters related to the Site are protected under applicable copyright laws, ALL RIGHTS RESERVED. The posting of any such elements on the Site does not constitute a waiver of any right in such elements. You do not acquire ownership rights to any such elements viewed through the Site. Except as otherwise provided herein, none of these elements may be used, copied, reproduced, downloaded, posted, displayed, transmitted, mechanical, photocopying, recording, or otherwise, without Company’s prior written permission.',
                title10p3:'2. Trademark',
                title10p4:'Educa Tu Credito name, logo, and all product names, company names, and other logos, unless otherwise noted, are trademarks and/or trade dress of Financial Education Services.The use or misuse of any Marks or any other materials contained on the Site, without the prior written permission of their owner, is expressly prohibited.',
                title11p:'You may be transferred to online merchants or other third party sites through links or frames from this site. You are cautioned to read their Terms and Conditions and/or Privacy Policies before using such sites. These sites may contain information or material that is illegal, unreasonable or that some people may find inappropriate or offensive. These other sites are not under the control of the Company and are not monitored or reviewed by the Company. The inclusion of such a link or frame does not imply endorsement of this site by the Company, its advertisers or licensors, any association with its operators and is provided solely for your convenience. You agree that the Company and its licensors have no liability whatsoever from such third party sites and your usage of them.',
                title12p1:'Educa Tu Credito offers a ten-day, money back guarantee on the enrollment fee and initial monthly membership fee (for applicable services). All subsequent membership fees are nonrefundable as the benefits of the service are realized immediately upon payment.',
                title12p2:'Upon cancellation of a distributor’s agreement, the participant may return resalable sales aids purchased within one (1) year from the date of cancellation for a refund if he or she is unable to sell or use the merchandise. AParticipant may only return sales aids he or she personally purchased from the Company under his or her Participant Identification Number, and which are in resalable condition. Upon receipt of the products and sales aids, the Participant will be reimbursed ninety percent (90%) of the net cost of the original purchase price(s), less shipping charges. If the purchases were made through a credit card, the refund will be credited back to the same account. The Company shall deduct from the reimbursement paid to the Participant any commissions, bonuses, rebates or other incentives received by the Participant that were associated with the merchandise that is returned.',
                title13p:'The Company, its advertisers and licensors make no representation or warranties about this site, the suitability of the information contained on or received through use of this site, or any service or products received through this site. All information and use of this site are provided "as is" without warranty of any kind. The Company, advertisers and/or its licensors hereby disclaim all warranties without regards to this site, the information contained or received through use of this site, and any services or products received through this site, including all express, statutory, and implied warranties of merchantability, fitness for a particular purpose, title and non-infringement. The Company, advertisers and/or its licensors do not warrant that the contents or any information received through this site are accurate, reliable or correct; that this site will be available at any particular time or location; that any defects or errors will be corrected; or that the contents of any information received through this site is free of viruses or other harmful components. Your use of this site is solely at your risk. User agrees that it has relied on no warranties, representations or statements other than in this agreement. Because some jurisdictions do not permit the exclusion of certain warranties, these exclusions may not apply to you but shall apply to the maximum extent permitted by law of your jurisdiction.',
                title14p:'Under no circumstances shall the Company, advertisers and/or its licensors be liable for any direct, indirect, punitive, incidental, special, or consequential damages that result from the use or inability to use, this site. This limitation applies whether the alleged liability is based on contract, tort, negligence, strictly liability, or any other basis, even if the company, advertisers and/or its licensors have been advised of the possibility of such damage. Because some jurisdictions do not allow the exclusion or limitation of incidental or consequential damages, the Company, advertisers and/or its respective licensors’ liability in such jurisdictions shall be limited to the maximum extent permitted by law of your jurisdiction.',
                title15p:'Your agree to defend, indemnify, and hold harmless the Company, its advertisers, licensors, subsidiaries and other affiliated companies, and their employees, contractors, officers, agents and directors from all liabilities, claim, and expenses, including attorney’s fees, that arise from your use of this site, or any services, information or products from this site, or any violation of this Agreement. The Company reserves the right, at it own expense, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which event you shall cooperate with the Company in asserting any available defenses',
                title16p:'Company may suspend or terminate this Agreement or User’s use immediately upon receipt of any notice which alleges that User has used this site for any purpose that violates any local, state, federal or law of other nations, including but not limited to the posting of information that may violate third party rights, that may defame a third party, that may be obscene or pornographic, that may harass or assault other, that may violate hacking or other criminal regulationsof its agent, officers, directors, contractors or employees. In such event, Company may disclose the User’s identity and a subpoena or other legal action, and Company shall not be liable for damages or results thereof and User agrees not to bring any action or claim against Company for such disclosure.',
                title17p:'This site is controlled by the Company from its offices within the State of Florida, U.S. of America. It can be accessed from all 50 states as well as from other countries around the world to the extent permitted by site. As each of these places has laws that may differ from Michigan, by assessing this site, both you and the Company agree that the statutes and laws of Michigan shall apply to any actions or claims arising out of or on relation to this Agreement or your use of this site, without regards to conflicts of laws principles thereof. You and the Company also agree and hereby submit to the filing of any claim only in the exclusive personal jurisdiction and venue of Michigan and any legal proceedings shall be conducted in English. The Company makes no representation that materials on this site are appropriate or available for use in other locations, and accessing them from territories where their contents are illegal is prohibited.',
                title18p1:'This Agreement incorporates by reference the Site Submission Rules if this site allows posting and posts such Rules. This Agreement constitutes the entire agreement between the parties related to the subject matter thereof, supersedes any prior or contemporaneous (oral, written or electronic) agreement between the parties and shall not be changed except by written agreement signed by an officer of the Company. If any provision of this Agreement is prohibited by law are held to be unenforceable, the remaining provisions hereof shall not be affected, and this Agreement as much as possible under applicable law shall continue in full force and effect as if such unenforceable provision had never constituted a part hereof and the unenforceable provision shall be automatically amended so as to best accomplish the objectives of such unenforceable provision within the limits of applicable law.',
                title18p2:'This site reserves the right to revise these provisions at its discretion, so check back from time to time to be sure you are complying with the current version.'           
      }
        } else if (val === 'es') {
          this.translationText = {
                heading: 'TÉRMINOS DE USO',
                title1:'ACEPTACIÓN DE TÉRMINOS A TRAVÉS DEL USO',
                title2:'DEBE TENER 18 AÑOS O MÁS PARA ACEPTAR ESTE ACUERDO Y UTILIZAR ESTE SITIO',
                title3:'LICENCIA PARA UTILIZAR ESTE SITIO',
                title4:'USO DE RESTRICCIONES DE LICENCIA',
                title5:'Seguridad',
                title5e:'Exportar',
                title6:'Uso del gobierno',
                title7:'Errores y correcciones',
                title8:'ENLACES A OTROS SITIOS WEB',
                title9:'CONDUCTA DEL USUARIO DEL USUARIO',
                title10:'DERECHOS DE PROPIEDAD INTELECTUAL',
                title11:'SITIOS DE TERCEROS',
                title12:'DEVOLUCIONES',
                title13:'RENUNCIA DE GARANTÍAS',
                title14:'LIMITACIÓN DE RESPONSABILIDAD',
                title15:'INDEMNIZACIÓN',
                title16:'CÓMPLICE LEGAL',
                title17:'ELECCIÓN DEL DERECHO Y FORO',
                title18:'DIVERSO',
                title1p:'Al utilizar este sitio o al hacer clic en "Acepto" a este Acuerdo, usted ("Usuario") indica que acepta estos términos y condiciones. Si no acepta este Acuerdo, no use este sitio y no haga clic en "Acepto". Por favor, revise este Acuerdo periódicamente para ver los cambios ya que el propietario de este sitio ("Compañía") se reserva el derecho de revisar este Acuerdo. En el caso de un cambio en este Acuerdo, su uso continuado de este sitio después de la publicación de cualquier cambio constituye la aceptación de dichos cambios. La Compañía se reserva el derecho de rescindir el uso de este sitio por parte de un Usuario en cualquier momento sin previo aviso y puede hacerlo por cualquier incumplimiento de este Acuerdo.',
                title2p:'Este Acuerdo debe ser completado, comprendido y aceptado por una persona mayor de 18 años. Si un padre o tutor desea permitir que una persona menor de 18 años acceda a este sitio, debe enviar un correo electrónico a la Compañía con su permiso explícito y aceptación responsabilidad legal. Si aún no tiene 18 años o está accediendo a este sitio desde cualquier país donde este material esté prohibido, salga ahora ya que no cuenta con la autorización correspondiente.',
                title3p:'Tras su aceptación, la Empresa le concede una licencia limitada no exclusiva e intransferible para utilizar este sitio en estricta conformidad con los términos y condiciones de este Acuerdo. Usted acepta no hacer ninguna declaración falsa o fraudulenta al usar este sitio. Usted reconoce y acepta que todo el contenido y los servicios disponibles en este sitio son propiedad de la Compañía y están protegidos por derechos de autor, marcas comerciales, marcas de servicio, patentes, secretos comerciales y otros derechos y leyes de propiedad, en los EE. UU. E internacionalmente. Todos los derechos no otorgados expresamente aquí están completamente reservados por la Compañía, sus anunciantes y licenciantes. Usted acepta pagar todas y cada una de las compras y servicios utilizando su nombre y tarjeta de crédito a través de este Sitio, no para impugnar dichos cargos y para pagar todos los cobros y / o honorarios de abogados que resulten de la falta de pago.',
                title4p:'Excepto que se permita explícitamente, usted acepta no guardar, descargar, cortar y pegar, vender, licenciar, alquilar, arrendar, modificar, distribuir, copiar, reproducir, transmitir, exhibir públicamente, realizar públicamente, publicar, adaptar, editar, o crear trabajos derivados de materiales de este sitio. Se prohíbe la recuperación sistemática de datos u otro contenido de este sitio para crear o compilar, directa o indirectamente, una colección, base de datos o directorio sin el permiso por escrito de la Compañía. Además, el uso del contenido o materiales para cualquier propósito no expresamente permitido en este Acuerdo está prohibido.',
                title5p1:'Usted acepta que si la Compañía le otorga un Nombre de usuario y Contraseña, deberá hacer todos los esfuerzos posibles para impedir el acceso a este sitio a través de su Nombre de usuario y Contraseña por parte de cualquier persona que no sea usted mismo, incluyendo, entre otros, mantener dicha información estrictamente confidencial. notificando a la Compañía inmediatamente si descubre una pérdida o acceso a dicha información por parte de una persona no autorizada y mediante el uso de un nombre de usuario y contraseña seguros que un tercero no adivina fácilmente.',
                title5p2:'Usted acepta que no deberá tratar de revertir el ensamblaje, compilación inversa, descompilación, desmontaje, traducción o alteración de ningún código ejecutable, contenido o material en o recibido a través de este sitio. Usted comprende que tales acciones probablemente lo someterán a sanciones legales civiles y penales graves y que la Compañía aplicará dichas sanciones en toda la extensión de la ley para proteger sus derechos y los derechos de sus otros licenciantes.',
                title5p3:'Acepta que cumplirá con todas las leyes y reglamentaciones aplicables de control de exportaciones e importaciones en su uso de este sitio, o materiales o servicios recibidos a través de este sitio, y, en particular, no exportará ni reexportará nada en o recibido a través de este sitio. este sitio está en violación de las leyes de exportación locales o extranjeras y / o sin todas las licencias necesarias de los gobiernos de los Estados Unidos y el extranjero.',
                title6p:'Si usted es una sucursal o agencia del gobierno de EE. UU., Se aplica la siguiente disposición. Este sitio, el código, los contenidos, los servicios y la documentación que lo acompaña están compuestos de "software informático comercial" y "documentación comercial de software informático", ya que dichos términos se utilizan en 48 C.F.R. 12.212 (SEPT 1995) y se proporcionan al Gobierno (i) para adquisiciones realizadas por o en nombre de agencias civiles, de conformidad con la política establecida en 48 C.F.R. 12.212; o (ii) para adquisiciones realizadas por o en nombre de unidades del Departamento de Defensa, consistentes con las políticas establecidas en 48 C.F.R. 227.7202-1 (JUN 1995) y 227.7202-3 (JUN 1995). Derechos no publicados reservados bajo las leyes de derechos de autor de los Estados Unidos.',
                title7p:'Si bien hacemos todos los esfuerzos razonables para incluir información precisa y actualizada en nuestro Sitio, no garantizamos ni aseguramos que el Sitio esté libre de errores. Los errores de ingreso de datos u otros problemas técnicos a veces pueden dar como resultado que se muestre información inexacta. Nos reservamos el derecho de corregir cualquier imprecisión o error tipográfico en nuestro Sitio, incluidos los precios y la disponibilidad de productos y servicios, y no nos hacemos responsables de dichos errores. También podemos realizar mejoras y / o cambios en las funciones, la funcionalidad o el contenido del Sitio en cualquier momento. Si ve información o descripción que considera incorrecta, contáctenos y la verificaremos por usted.',
                title8p:'Nuestro sitio contiene enlaces a otros sitios web para su información y conveniencia, o para proporcionar compras adicionales para otros bienes y servicios a través de nuestros socios comerciales y de servicios. Estos sitios web de terceros son responsables y se comprometen a mantener sus propios términos de uso del sitio. Sugerimos que revise cuidadosamente los términos de uso de cada sitio al que desee acceder desde nuestro Sitio.',
                title9p1:'Al usar funciones de este sitio que le permiten publicar o transmitir información a este sitio o a través de este, o que otros usuarios pueden ver, usted acepta que no debe cargar, publicar o distribuir o facilitar la distribución de cualquier contenido. incluyendo texto, comunicaciones, video, software, imágenes, sonidos, datos u otra información, que:',
                title9list1:'a. es ilegal, amenazante, abusivo, acosador, difamatorio, difamatorio, engañoso, fraudulento, invasivo de la privacidad de otra persona, tortuoso, obsceno, sexualmente explícito o gráfico, o de otra manera en violación de las reglas o políticas de este sitio;',
                title9list2:'b. infrinja cualquier patente, marca comercial, marca de servicio, secreto comercial, derecho de autor, derecho moral, derecho de publicidad, privacidad u otro derecho de propiedad de cualquier parte;',
                title9list3:'c. constituye publicidad no autorizada o no solicitada, correo electrónico no deseado o masivo (también conocido como "spamming"), cadenas de cartas, cualquier otra forma de solicitud no autorizada, o cualquier forma de lotería o juego;',
                title9list4:'d. contiene virus de software o cualquier otro código de computadora, archivos o programas diseñados o destinados a interrumpir, dañar o limitar el funcionamiento de cualquier software, hardware o equipo de telecomunicaciones o dañar u obtener acceso no autorizado a cualquier información u otra información de cualquier tercero; o',
                title9list5:'e. suplanta a cualquier persona o entidad, incluidos los empleados o representantes de este sitio, sus licenciantes o anunciantes.',
                title9p2:'También acepta no recopilar ni recopilar información sobre los usuarios de este sitio o utilizar dicha información con el fin de transmitir o facilitar la transmisión de correo electrónico o comunicaciones masivas no solicitadas para cualquier otro fin comercial propio o de un tercero.',
                title9p3:'Además, acepta no solicitar ni recopilar información, ni intentar inducir ningún contacto físico con ninguna persona de 18 años o menor sin el consentimiento apropiado de los padres.',
                title9p4:'Generalmente, este sitio no preselecciona, supervisa ni edita el contenido publicado por los usuarios de este sitio. Sin embargo, este sitio y sus agentes tienen el derecho, a su exclusivo criterio, de eliminar cualquier contenido que, a juicio exclusivo de este sitio, no cumpla con las Reglas de envío del sitio o sea perjudicial, objetable o inexacto. Este sitio no se hace responsable de cualquier falla, demora, daños o resultados al eliminar dicho contenido.',
                title9p5:'Usted acepta que su uso de este sitio puede suspenderse o cancelarse inmediatamente después de recibir cualquier notificación que alegue que ha utilizado este sitio en violación de estas Reglas y / o para cualquier propósito que viole cualquier ley local, estatal, federal o de otra índole. naciones, incluyendo pero no limitado a la publicación de información que puede violar los derechos de terceros, que puede difamar a un tercero, que puede ser obsceno o pornográfico, que puede acosar o atacar a otros, que puede violar la piratería u otras regulaciones penales, etc. de sus agentes, funcionarios, directores, contratistas o empleados. En tal caso, usted acepta que el propietario de este sitio puede revelar su identidad e información de contacto, si lo solicita un gobierno o un organismo de aplicación de la ley o como resultado de una citación u otra acción legal, y el propietario de este sitio no debe ser responsable de los daños o el resultado de una citación u otra acción legal, y el propietario de este sitio no será responsable por los daños o resultados de los mismos, y usted acepta no presentar ninguna acción o reclamo contra el propietario de este sitio para dicha divulgación.',
                title10p1:'1. Derechos de autor',
                title10p2:'El diseño, el texto, el contenido, la selección y la disposición de los elementos, la organización, los gráficos, la compilación, la traducción magnética, la conversión digital y otros asuntos relacionados con el Sitio están protegidos por las leyes de derechos de autor aplicables, TODOS LOS DERECHOS RESERVADOS. La publicación de dichos elementos en el Sitio no constituye una renuncia a ningún derecho sobre dichos elementos. Usted no adquiere los derechos de propiedad de ninguno de dichos elementos vistos a través del Sitio. Salvo que se indique lo contrario en este documento, ninguno de estos elementos puede ser utilizado, copiado, reproducido, descargado, publicado, exhibido, transmitido, mecánico, fotocopiado, grabado u otro, sin el permiso previo por escrito de la Compañía.',
                title10p3:'2. Marca',
                title10p4:'Nombre, logotipo y nombre de todos los productos, nombres de empresas y otros logotipos de Educa Tu Credito, a menos que se indique lo contrario, son marcas comerciales y / o imagen comercial de Financial Education Services. El uso o mal uso de cualquier marca o cualquier otro material contenido en el sitio , sin el permiso previo por escrito de su propietario, está expresamente prohibido.',
                title11p:'Puede ser transferido a comerciantes en línea u otros sitios de terceros a través de enlaces o marcos desde este sitio. Se le advierte que lea sus Términos y condiciones y / o Políticas de privacidad antes de utilizar dichos sitios. Estos sitios pueden contener información o material que es ilegal, irracional o que algunas personas pueden considerar inapropiado u ofensivo. Estos otros sitios no están bajo el control de la Compañía y no son monitoreados o revisados ​​por la Compañía. La inclusión de dicho enlace o marco no implica el respaldo de este sitio por parte de la Compañía, sus anunciantes o licenciantes, ninguna asociación con sus operadores y se proporciona únicamente para su conveniencia. Usted acepta que la Compañía y sus licenciantes no tienen ninguna responsabilidad de dichos sitios de terceros y su uso de ellos.',
                title12p1:'Educa Tu Credito ofrece una garantía de devolución de dinero de diez días sobre la tarifa de inscripción y la cuota de membresía mensual inicial (para servicios aplicables). Todas las tarifas de membresía posteriores no son reembolsables ya que los beneficios del servicio se realizan inmediatamente después del pago.',
                title12p2:'Tras la cancelación de un acuerdo de distribuidor, el participante puede devolver las ayudas de venta revendibles compradas dentro de un (1) año a partir de la fecha de cancelación para un reembolso si él o ella no puede vender o usar la mercancía. El participante solo podrá devolver los materiales de venta que haya comprado personalmente a la Compañía con su Número de identificación de participante y que estén en condiciones de reventa. Una vez recibidos los productos y las ayudas de venta, se reembolsará al participante el noventa por ciento (90%) del costo neto del precio original de la compra, menos los gastos de envío. Si las compras se realizaron a través de una tarjeta de crédito, el reembolso será acreditado nuevamente a la misma cuenta. La Compañía deducirá del reembolso pagado al Participante cualquier comisión, bonificación, rebaja u otros incentivos recibidos por el Participante que estén asociados con la mercancía que se devuelve.',
                title13p:'La Compañía, sus anunciantes y licenciantes no hacen ninguna representación o garantía sobre este sitio, la idoneidad de la información contenida o recibida a través del uso de este sitio, o cualquier servicio o producto recibido a través de este sitio. Toda la información y el uso de este sitio se proporcionan "tal cual" sin garantía de ningún tipo. La Compañía, los anunciantes y / o sus licenciantes renuncian a todas las garantías sin este sitio, la información contenida o recibida a través del uso de este sitio, y cualquier servicio o producto recibido a través de este sitio, incluyendo todas las garantías expresas, legales e implícitas de comerciabilidad, adecuación para un propósito particular, título y no infracción. La Compañía, los anunciantes y / o sus licenciantes no garantizan que el contenido o la información recibida a través de este sitio sea precisa, confiable o correcta; que este sitio estará disponible en cualquier momento o lugar en particular; que cualquier defecto o error será corregido; o que el contenido de cualquier información recibida a través de este sitio está libre de virus u otros componentes dañinos. Su uso de este sitio es exclusivamente bajo su responsabilidad. El usuario acepta que no ha confiado en ninguna garantía, declaración o declaración que no sea en este acuerdo. Debido a que algunas jurisdicciones no permiten la exclusión de ciertas garantías, estas exclusiones pueden no aplicarse en su caso, pero se aplicarán en la medida máxima permitida por la ley de su jurisdicción.',
                title14p:'Bajo ninguna circunstancia la Compañía, los anunciantes y / o sus licenciantes serán responsables por daños directos, indirectos, punitivos, incidentales, especiales o consecuentes que resulten del uso o la imposibilidad de utilizar este sitio. Esta limitación se aplica ya sea que la responsabilidad alegada se base en contrato, agravio, negligencia, estrictamente responsabilidad o cualquier otra base, incluso si la compañía, los anunciantes y / o sus licenciantes han sido informados de la posibilidad de tal daño. Debido a que algunas jurisdicciones no permiten la exclusión o limitación de daños incidentales o consecuentes, la Compañía, los anunciantes y / o la responsabilidad de sus respectivos licenciantes en tales jurisdicciones se limitarán a la extensión máxima permitida por la ley de su jurisdicción.',
                title15p:'Usted acepta defender, indemnizar y eximir de responsabilidad a la Compañía, sus anunciantes, licenciantes, subsidiarias y otras compañías afiliadas, y sus empleados, contratistas, funcionarios, agentes y directores de todas las responsabilidades, reclamos y gastos, incluidos los honorarios de abogados, que surjan. desde su uso de este sitio, o cualquier servicio, información o producto de este sitio, o cualquier violación de este Acuerdo. La Compañía se reserva el derecho, a su propio costo, de asumir la defensa y el control exclusivos de cualquier asunto sujeto a indemnización por usted, en cuyo caso deberá cooperar con la Compañía para hacer valer cualquier defensa disponible',
                title16p:'La Compañía puede suspender o rescindir este Acuerdo o el uso del Usuario inmediatamente después de recibir cualquier aviso que alegue que el Usuario ha utilizado este sitio para cualquier fin que viole cualquier ley local, estatal, federal o de otras naciones, incluyendo pero no limitado a la publicación de información que puede violar los derechos de terceros, que pueden difamar a un tercero, que pueden ser obscenos o pornográficos, que pueden hostigar o atacar a otros, que pueden violar la piratería u otras regulaciones penales de su agente, funcionarios, directores, contratistas o empleados. En tal caso, la Compañía puede divulgar la identidad del Usuario y una citación u otra acción legal, y la Compañía no será responsable de los daños o resultados de los mismos y el Usuario acepta no presentar ninguna acción o reclamo contra la Compañía por dicha divulgación.',
                title17p:'Este sitio está controlado por la Compañía desde sus oficinas dentro del Estado de Florida, EE. UU. De América. Se puede acceder desde los 50 estados, así como desde otros países del mundo, en la medida permitida por el sitio. Como cada uno de estos lugares tiene leyes que pueden diferir de Michigan, al evaluar este sitio, tanto usted como la Compañía acuerdan que los estatutos y leyes de Michigan se aplicarán a cualquier acción o reclamo que surja de o en relación con este Acuerdo o su uso. de este sitio, sin tener en cuenta los conflictos de principios legales de los mismos. Usted y la Compañía también acuerdan y por la presente se someten a la presentación de cualquier reclamo solo en la jurisdicción y jurisdicción personal exclusiva de Michigan y cualquier procedimiento legal se realizará en inglés. La Compañía no garantiza que los materiales en este sitio sean apropiados o estén disponibles para su uso en otros lugares, y el acceso a ellos desde territorios donde sus contenidos son ilegales está prohibido.',
                title18p1:'Este Acuerdo incorpora por referencia las Reglas de Presentación del Sitio si este sitio permite publicar y publicar tales Reglas. Este Acuerdo constituye el acuerdo completo entre las partes relacionado con el tema del mismo, reemplaza cualquier acuerdo previo o actual (oral, escrito o electrónico) entre las partes y no se modificará excepto mediante un acuerdo escrito firmado por un funcionario de la Compañía. Si alguna disposición de este Acuerdo está prohibida por ley se considera inaplicable, las disposiciones restantes de este no se verán afectadas, y este Acuerdo tanto como sea posible bajo la ley aplicable continuará en pleno vigor y efecto como si tal disposición no ejecutable nunca hubiera constituido una parte de este documento y la disposición que no se puede hacer cumplir se modificará automáticamente a fin de lograr mejor los objetivos de dicha disposición no ejecutable dentro de los límites de la ley aplicable.',
                title18p2:'Este sitio se reserva el derecho de revisar estas disposiciones a su discreción, así que vuelva a verificar de vez en cuando para asegurarse de que está cumpliendo con la versión actual.',
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
