import { required, minLength } from "vuelidate/lib/validators";
import { formstore } from "../store/index";

const validDate = () => {
  return formstore.end > formstore.start;
};

export const validationrules = {
  eventLocation: {
    required,
    minLength: minLength(2)
  },
  eventType: {
    required
  },
  eventDetails: {
    required,
    minLength: minLength(12)
  },
  organizerID: {
    required
  },
  end: {
    required,
    validDate
  },
  start: {
    required,
    validDate
  }
};
