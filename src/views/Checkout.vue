<template>
  <div class="checkout">
    <Navbar></Navbar>
    <br>
    <div class="container"><br>
      <div class="row">
        <div class="col-md-8"><u>Product Details</u><br><br><br>
          <table class="table table-bordered table-hover">
            <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item,index) in this.$store.state.cart" :key="index">
              <td scope="row">{{index+1}}</td>
              <td><img :src="item.productImage" width="50px" class="align-self-center mr-3" alt=""></td>
              <td>{{item.productName}}</td>
              <td>{{item.productPrice}}</td>
              <td>{{item.productQuantity }}</td>
              <td>
                <a href="" @click.prevent="$store.commit('removeFromCart',item)"><i class="fas fa-trash-alt"></i></a>
              </td>
            </tr>
            </tbody>
          </table>
          <router-link to="/"><button class='btn btn-primary'>Continue shoping</button></router-link>
          <router-link to="/order"><button class='btn btn-info ml-2'>Check tracking Status</button></router-link>
        </div>
        <div class="col-md-4"><br><br><br>
          <div class="card bg-light mb-3" style="max-width: 18rem;">
            <div class="card-header">Total</div>
            <div class="card-body">
              <h4> Total Price : <b>{{ this.$store.getters.totalPrice}}</b></h4>
              <p class="card-title">Payment System</p><hr>
              <div class="col">
                <input type="text" class="form-control" placeholder="Card Number MM / YY CVC">
              </div>
              <button class='pay-with-stripe btn btn-primary mt-4'>Pay with credit card</button>
              <router-link to="/"><button class='pay-with-stripe btn btn-info mt-4'>Pay with Hand Cash</button></router-link>
            </div>
          </div>
        </div>

      </div>
    </div><br><br><br><br><br><br>
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

<script>
  import $ from 'jquery'
  export default {
    name: "checkout",
    props: {
      name: String,
      price: String,
      image: String,
      pId: String
    },
    data(){
      return {
        item :{
          productName: this.name,
          productImage: this.image,
          productPrice: this.price,
          productId: this.pId,
          productQuantity: 1,
        }
      }
    },
    methods:{
      addToCart(){
        $('#miniCart').modal('show');
        this.$store.commit('addToCart', this.item)
      }
    }
  };
</script>

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

</style>


