import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "popper.js";
import "./assets/app.scss";
import jQuery from "jquery";
import {fb} from './firebase';
import VueFirestore from 'vue-firestore';
import Swal from 'sweetalert2';
import VueCarousel from 'vue-carousel';
import store from './store'
Vue.use(VueCarousel);

Vue.use(VueFirestore, {
  key: 'id',         // the name of the property. Default is '.key'.
  enumerable: true  //  whether it is enumerable or not. Default is true.
})

window.Swal = Swal;
window.$=window.jQuery=jQuery;

Vue.use(VueFirestore)
Vue.component('Navbar', require('./components/Navbar.vue').default);
Vue.component('Hero', require('./components/Hero.vue').default);
Vue.component('Product', require('./sections/Products').default);
Vue.component('Login', require('./components/Login').default);
Vue.component('products-list', require('./sections/ProductList.vue').default);
Vue.component('add-to-cart', require('./components/AddToCart.vue').default);


Vue.config.productionTip = false;

let app = '';

fb.auth().onAuthStateChanged(function() {

  if(!app){
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");

  }

});

