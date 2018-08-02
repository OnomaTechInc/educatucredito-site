<template>
  <v-container fluid>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">
          <span><img src="img/top-logo.png" /></span>
          <span class="heading">Educa Tu Credito</span>
        </a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i class="fa fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="/about-us">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="/why-choose-us">Why Choose Us</a>
            </li>
            <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="/login">Login/Sign Up</a>
              </li>
          </ul>
        </div>
      </div>
    </nav>

    <header class="masthead">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 my-auto">
            <div class="header-content mx-auto">
              <h2>We believe all of us has a right</h2>
              <h3>A credit score is not just a number; it's a lifestyle. We will help you achieve  a good financial lifestyle. <br /> Our company of financial experts  believe we can make a significant change in your life.</h3>
            </div>
          </div>
        </div>
        <div class="row mt-5">
            <div class="col-lg-8" id="video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/bNwhYx0XnPY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
          <div class="col-lg-4">
            <div  id="registerform">
              <h4>Register Now</h4>
              <div class="Shape-1"></div>
              <input type="text" name="fullname" placeholder="Your Full Name" />
              <input type="text" name="email" placeholder="Your Email ID" />
              <input type="text" name="password" placeholder="Password" />
              <input type="text" name="confirm_password" placeholder="Confirm Password" />
              <input type="submit" value="Sign Up" class="signup" />
            </div>
          </div>
        </div>
      </div>
    </header>

    <section class="section2">
      <div class="container">
        
      </div>
    </section>

    <section class="section5">
      <div class="container">
          <div class="footer-logo"><img src="img/footer-logo.png" /></div>
          <div class="invert-center">
            <a href="https://www.youtube.com/channel/UCQFH77XQUBX9NPSBRouRwtg"><img src="img/footer-youtube.png" /></a> 
            <a href="https://www.facebook.com/Educa-Tu-Credito-643508152673251/"><img src="img/footer-facebook.png" /></a> 
            <a href="https://www.instagram.com/educatucredito/"><img src="img/footer-instagram.png" /></a> 
          </div>

          <div class="copyright-reserved">&copy; Educa Tu Credito 2018. All Rights Reserved.</div>
      </div>
    </section>
  </v-container>
</template>
