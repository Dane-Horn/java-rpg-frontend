import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (login.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/registration',
    name: 'Registration',
    // route level code-splitting
    // this generates a separate chunk (registeration.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "registration" */ '../views/Registration.vue')
  },
  {
    path: '/forgotpassword',
    name: 'Forgotpassword',
    // route level code-splitting
    // this generates a separate chunk (forgotpassword.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "forgotpassword" */ '../views/ForgotPassword.vue')
  },
  {
    path: '/preferences',
    name: 'Preferences',
    // route level code-splitting
    // this generates a separate chunk (preferences.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "preferences" */ '../views/Preferences.vue')
  },
  {
    path: '/maze',
    name: 'MapScreen',
    // route level code-splitting
    // this generates a separate chunk (forgotpassword.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "forgotpassword" */ '../views/MapScreen.vue')
  },
]

// import { MapScreen, LoginScreen, RegisterScreen,  Preferences, ForgotPassword } from "./components/index";

// const router = new VueRouter({
//   routes: [
//     { path: "/login", component: LoginScreen },
//     { path: "/maze", component: MapScreen },
//     { path: "/preferences", component: Preferences },
//     { path: "/register", component: RegisterScreen },
//     { path: "/forgotpassword", component: ForgotPassword }
//   ]
// });


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
