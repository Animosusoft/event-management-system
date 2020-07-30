import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Plugins from "@/plugins/index";

Vue.use(Plugins);

Vue.config.productionTip = false;

new Vue({
  name: "root",
  router,
  render: (h) => h(App)
}).$mount("#app");
