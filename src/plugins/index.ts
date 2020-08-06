//bootstrap and bootstrap vue css
import "@/assets/scss/custom.scss";
//Local components
import "@/plugins/globalComponents";
import { BootstrapVue } from "bootstrap-vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSlidersH,
  faCalendarDay,
  faUserCog,
  faLaptopHouse,
  faInfo,
  faPeopleArrows,
  faEnvelopeOpenText,
  faUnlockAlt
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faYoutube, faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(
  faUnlockAlt,
  faUserCog,
  faPeopleArrows,
  faCalendarDay,
  faSlidersH,
  faInfo,
  faLaptopHouse,
  faFacebook,
  faYoutube,
  faGoogle,
  faGithub,
  faEnvelopeOpenText
);

export default {
  install(Vue: any) {
    // Install BootstrapVue
    Vue.use(BootstrapVue);
    //Local Components Plugin
  }
};
