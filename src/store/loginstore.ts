import Vue from "vue";
import VueCompositionApi, { reactive } from "@vue/composition-api";
import { LoginStore } from "@/types/index";

Vue.use(VueCompositionApi);

const loginstore: LoginStore = reactive({
  username: "",
  password: ""
});

export default loginstore;

