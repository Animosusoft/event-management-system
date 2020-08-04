import { formstore } from "../store/index";

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
    altFormat: "F j,Y H:i K",
    enableTime: true,
    dateFormat: "Z",
    minDate: today
  };

  return { imageSelect, flatpickrconfig };
}
