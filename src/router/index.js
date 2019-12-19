import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";
import Overview from "../views/Overview";
import Products from "../views/Products";
import orders from "../views/Orders";
import Profile from "../views/Profile";
import Checkout from "../views/Checkout";
import Order from "../views/Order";
import {fb} from '../firebase'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/checkout",
    name: "checkout",
    component: Checkout
  },
  {
    path: "/order",
    name: "order",
    component: Order
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    meta: { requiresAuth: true },
    children:[
      {
        path: "overview",
        name: "overview",
        component: Overview
      },
      {
        path: "products",
        name: "products",
        component: Products
      },
      {
        path: "profile",
        name: "profile",
        component: Profile
      },
      {
        path: "orders",
        name: "orders",
        component: orders
      },

    ]
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((to, from, next) => {

  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = fb.auth().currentUser

  if (requiresAuth && !currentUser) {
    next('/')
  } else if (requiresAuth && currentUser) {
    next()
  } else {
    next()
  }
})

export default router;
