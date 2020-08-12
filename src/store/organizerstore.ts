import vue from "vue";
import compostionapi, { reactive } from "@vue/composition-api";
import { OrganizerStore } from "../types/index";

vue.use(compostionapi);

const organizerstore: OrganizerStore = reactive({
  type: "",
  name: "",
  url: "",
  logo: "",
  phone: "",
  email: ""
});

export default organizerstore;
