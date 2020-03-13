// import Vue from 'vue';
// import App from './App.vue';
// import vuetify from './plugins/vuetify';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import router from './router'


// import { store } from "./store/store";
// import VueRouter from "vue-router";

// Vue.config.productionTip = false;
// Vue.use(VueRouter);

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

// new Vue({
//   router,
//   store,
//   vuetify,
//   render: h => h(App)
// }).$mount("#app");

import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './router'
import { store } from "./store/store";

Vue.config.productionTip = false;

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

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
