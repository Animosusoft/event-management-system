//bootstrap and bootstrap vue css
import "@/assets/scss/custom.scss";
//Local components
import "@/plugins/globalComponents";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";

export default {
  install(Vue: any) {
    // Install BootstrapVue
    Vue.use(BootstrapVue);
    // Optionally install the BootstrapVue icon components plugin
    Vue.use(BootstrapVueIcons);
    //Local Components Plugin
  }
};
