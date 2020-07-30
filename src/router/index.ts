import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Login from "@/views/Login.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/home",
    name: "Home",
    component: () => import(/*webpackChunkName: "home"*/ "../views/Home.vue")
  },
  {
    path: "/event",
    name: "CreateEvent",
    component: () => import(/*webpackChunkName: "createventform"*/ "../views/EventCreationForm.vue")
  },
  {
    path: "/eventdetails",
    name: "EeventDetails",
    component: () => import(/* webpackChunkName: "eventdetails" */ "../views/EventDetails.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;