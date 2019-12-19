<template>
  <div class="about">
    <Navbar></Navbar>
    <h1>Shipping Status</h1>
<br><br>
    <div class="container">
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6"><section class="root">
          <figure>
            <img src="https://image.flaticon.com/icons/svg/970/970514.svg" alt="">
            <figcaption>
              <h4>Tracking Details</h4>
              <h6>Order Number</h6>
              <h2># A61452B</h2>
            </figcaption>
          </figure>
          <div class="order-track">
            <div class="order-track-step">
              <div class="order-track-status">
                <span class="order-track-status-dot"></span>
                <span class="order-track-status-line"></span>
              </div>
              <div class="order-track-text">
                <p class="order-track-text-stat">Label Created</p>
                <span class="order-track-text-sub">1st November, 2019</span>
              </div>
            </div>
            <div class="order-track-step">
              <div class="order-track-status">
                <span class="order-track-status-dot"></span>
                <span class="order-track-status-line"></span>
              </div>
              <div class="order-track-text">
                <p class="order-track-text-stat"> Shipped - 123 Start St.
                  Seattle, WA </p>
                <span class="order-track-text-sub">1st November, 2019</span>
              </div>
            </div>
            <div class="order-track-step">
              <div class="order-track-status">
                <span class="order-track-status-dot"></span>
                <span class="order-track-status-line"></span>
              </div>
              <div class="order-track-text">
                <p class="order-track-text-stat"> Estimated - 456 End St.
                  New York City, NY</p>
                <span class="order-track-text-sub">3rd November, 2019</span>
              </div>
            </div>
          </div>
        </section></div>
        <div class="col-md-3"></div>
      </div>
  </div>
  <footer class="mainfooter" role="contentinfo">
    <div class="footer-middle">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-3 col-sm-6">
            <!--Column1-->
            <div class="footer-pad">
              <h4>Product</h4>
              <ul class="list-unstyled">
                <li><a href="#"></a></li>
                <li><a href="#">Payment Center</a></li>
                <li><a href="#">Contact Directory</a></li>
                <li><a href="#">Forms</a></li>
                <li><a href="#">News and Updates</a></li>
                <li><a href="#">FAQs</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <!--Column1-->
            <div class="footer-pad">
              <h4>Abouts</h4>
              <ul class="list-unstyled">
                <li><a href="#">Website Tutorial</a></li>
                <li><a href="#">Accessibility</a></li>
                <li><a href="#">Disclaimer</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Webmaster</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <!--Column1-->
            <div class="footer-pad">
              <h4>Events</h4>
              <ul class="list-unstyled">
                <li><a href="#">Parks and Recreation</a></li>
                <li><a href="#">Public Works</a></li>
                <li><a href="#">Police Department</a></li>
                <li><a href="#">Fire</a></li>
                <li><a href="#">Mayor and City Council</a></li>
                <li>
                  <a href="#"></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-3">
            <h4>Follow Us</h4>
            <ul class="social-network social-circle">
              <li><a href="#" class="icoFacebook" title="Facebook" style="color: blue"><i class="fab fa-facebook"></i></a></li>
              <li><a href="#" class="icoLinkedin" title="Linkedin"><i class="fab fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 copy">
            <p class="text-center">&copy; Copyright 2018 - Vue-shopping  All rights reserved.</p>
          </div>
        </div>


      </div>
    </div>
  </footer>

  </div>
</template>

<style scoped lang="scss">

  /*FOOTER*/
  footer {
    background: #16222A;
    background: -webkit-linear-gradient(59deg, #3A6073, #16222A);
    background: linear-gradient(59deg, #3A6073, #16222A);
    color: white;
    margin-top:100px;
  }

  footer a {
    color: #fff;
    font-size: 14px;
    transition-duration: 0.2s;
  }

  footer a:hover {
    color: #FA944B;
    text-decoration: none;
  }

  .copy {
    font-size: 12px;
    padding: 10px;
    border-top: 1px solid #FFFFFF;
  }

  .footer-middle {
    padding-top: 2em;
    color: white;
  }


  /*SOCİAL İCONS*/

  /* footer social icons */

  ul.social-network {
    list-style: none;
    display: inline;
    margin-left: 0 !important;
    padding: 0;
  }

  ul.social-network li {
    display: inline;
    margin: 0 5px;
  }


  /* footer social icons */

  .social-network a.icoFacebook:hover {
    background-color: #3B5998;
  }

  .social-network a.icoLinkedin:hover {
    background-color: #007bb7;
  }

  .social-network a.icoFacebook:hover i,
  .social-network a.icoLinkedin:hover i {
    color: #fff;
  }

  .social-network a.socialIcon:hover,
  .socialHoverClass {
    color: #44BCDD;
  }

  .social-circle li a {
    display: inline-block;
    position: relative;
    margin: 0 auto 0 auto;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    text-align: center;
    width: 30px;
    height: 30px;
    font-size: 15px;
  }

  .social-circle li i {
    margin: 0;
    line-height: 30px;
    text-align: center;
  }

  .social-circle li a:hover i,
  .triggeredHover {
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -ms--transform: rotate(360deg);
    transform: rotate(360deg);
    -webkit-transition: all 0.2s;
    -moz-transition: all 0.2s;
    -o-transition: all 0.2s;
    -ms-transition: all 0.2s;
    transition: all 0.2s;
  }

  .social-circle i {
    color: #595959;
    -webkit-transition: all 0.8s;
    -moz-transition: all 0.8s;
    -o-transition: all 0.8s;
    -ms-transition: all 0.8s;
    transition: all 0.8s;
  }

  .social-network a {
    background-color: #F9F9F9;
  }
  @import url("https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600&display=swap");
  *, *::after, *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    color: #2c3e50;
    font-family: 'Montserrat', sans-serif;
    width: 40rem;
    font-weight: 300;
    min-height: 100vh;
    position: relative;
    display: block;
    margin: 2rem auto;
  }

  h2, h4, h6 {
    margin: 0;
    padding: 0;
    display: inline-block;
  }

  .root {
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.3);
  }

  figure {
    display: flex;
  }
  figure img {
    width: 8rem;
    height: 8rem;
    border-radius: 15%;
    border: 1.5px solid #f05a00;
    margin-right: 1.5rem;
    padding:1rem;
  }
  figure figcaption {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  figure figcaption h4 {
    font-size: 1.4rem;
    font-weight: 500;
  }
  figure figcaption h6 {
    font-size: 1rem;
    font-weight: 300;
  }
  figure figcaption h2 {
    font-size: 1.6rem;
    font-weight: 500;
  }

  .order-track {
    margin-top: 2rem;
    padding: 0 1rem;
    border-top: 1px dashed #2c3e50;
    padding-top: 2.5rem;
    display: flex;
    flex-direction: column;
  }
  .order-track-step {
    display: flex;
    height: 7rem;
  }
  .order-track-step:last-child {
    overflow: hidden;
    height: 4rem;
  }
  .order-track-step:last-child .order-track-status span:last-of-type {
    display: none;
  }
  .order-track-status {
    margin-right: 1.5rem;
    position: relative;
  }
  .order-track-status-dot {
    display: block;
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 50%;
    background: #f05a00;
  }
  .order-track-status-line {
    display: block;
    margin: 0 auto;
    width: 2px;
    height: 7rem;
    background: #f05a00;
  }
  .order-track-text-stat {
    font-size: 1.3rem;
    font-weight: 500;
    margin-bottom: 3px;
  }
  .order-track-text-sub {
    font-size: 1rem;
    font-weight: 300;
  }

  .order-track {
    transition: all .3s height 0.3s;
    transform-origin: top center;
  }


</style>



