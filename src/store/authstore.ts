import Vue from "vue";
import VueCompositionApi, { reactive } from "@vue/composition-api";
import { AuthStore } from "../types/index";

Vue.use(VueCompositionApi);

const authstore: AuthStore = reactive({ token: "" });

export default authstore;
