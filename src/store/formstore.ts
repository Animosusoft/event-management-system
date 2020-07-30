import Vue from "vue";
import VueCompositionApi, { reactive } from "@vue/composition-api";
import { Formdata } from "../types/index";

Vue.use(VueCompositionApi);

const formstore: Formdata = reactive({
  eventTitle: "",
  eventLocation: "",
  eventDetails: "",
  eventImage: "",
  end: "",
  start: "",
  eventType: "",
  organizersDetails: [{}],
  organizerID: 0,
  organizerName: ""
});

export { formstore };
