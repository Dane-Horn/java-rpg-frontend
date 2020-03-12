import Vue from "vue";
import App from "./App.vue";
import { store } from "./store/store";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";
Vue.config.productionTip = false;
Vue.use(VueRouter);

import { MapScreen, LoginScreen, Preferences } from "./components/index";
const router = new VueRouter({
  routes: [
    { path: "/login", component: LoginScreen },
    { path: "/maze", component: MapScreen },
    { path: "/preferences", component: Preferences },
  ]
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
