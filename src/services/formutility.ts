import { formstore } from "../store/formstore";

export default function utilities() {
  const createImage = (file: any) => {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      formstore.eventImage = e.target.result;
    };
    reader.readAsDataURL(file);
  };
  const imageSelect = (e: any) => {
    const file = e.target.files || e.dataTransfer.files;
    if (!file.length) {
      return;
    }
    createImage(file[0]);
  };
  /*
   *const removeImage = () => {
   *  formstore.eventImage = "";
   *};
   */

  const today = new Date();

  const flatpickrconfig = {
    altInput: true,
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    minDate: today
  };

  return { imageSelect, flatpickrconfig };
}
