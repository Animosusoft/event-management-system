<template>
  <div id="background">
    <BaseNav />
    <b-container class="py-5">
      <b-row align-h="center" no-gutters>
        <b-card>
          <b-card-body>
            <b-form id="create_event_form" @submit.prevent="submitForm">
              <BaseInput
                label="Event Title"
                type="text"
                v-model="form.eventTitle"
                placeholder="Enter Name Of Event"
                autofocus="true"
                required
              />
              <b-form-group
                id="eventLocation_group"
                label="Event Location"
                label-for="eventLocation"
              >
                <b-form-input
                  id="eventLocation"
                  v-model="$v.form.eventLocation.$model"
                  type="text"
                  placeholder="eg.Knust Parade Grounds"
                  :class="validationState($v.form.eventLocation)"
                ></b-form-input>
                <b-form-invalid-feedback v-if="!$v.form.eventLocation.required">
                  Please Enter An Event name It is require If you want to create an
                  event
                </b-form-invalid-feedback>
                <b-form-invalid-feedback
                  v-if="!$v.form.eventLocation.minLength"
                >Please The Event Name Must Be A Minimum of 2 word</b-form-invalid-feedback>
              </b-form-group>
              <b-form-row>
                <b-col>
                  <b-form-group label="Event Start" label-for="eventstartDatetime">
                    <Flatpickr
                      id="eventstartDatetime"
                      :config="flatpickrconfig"
                      class="form-control"
                      :class="validationState($v.form.start)"
                      v-model="form.start"
                    ></Flatpickr>
                    <div
                      class="invalid-feedback"
                      v-if="!$v.form.start.validDate"
                    >The Starting Date should be less than the Ending Date</div>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group label="Event End" label-for="eventendDatetime">
                    <Flatpickr
                      id="eventendDatetime"
                      :config="flatpickrconfig"
                      class="form-control"
                      :class="validationState($v.form.end)"
                      v-model="form.end"
                    ></Flatpickr>
                    <div
                      class="invalid-feedback"
                      v-if="!$v.form.end.validDate"
                    >The Ending Date should be greater than the StartingDate</div>
                  </b-form-group>
                </b-col>
              </b-form-row>
              <b-form-group id="EventType" label="Event Type" label-for="eventType">
                <b-form-select
                  v-model="$v.form.eventType.$model"
                  id="eventType"
                  :options="options"
                  :class="validationState($v.form.eventType)"
                >
                  <template v-slot:first>
                    <b-form-select-option value disabled>Select Event Type</b-form-select-option>
                  </template>
                </b-form-select>
                <b-form-invalid-feedback v-if="!$v.form.eventType.require">This field is required</b-form-invalid-feedback>
              </b-form-group>
              <b-form-group id="eventDetails_group" label="Event Details" label-for="eventDetails">
                <b-form-textarea
                  id="eventDetails"
                  v-model="$v.form.eventDetails.$model"
                  type="text"
                  required
                  rows="3"
                  placeholder="eg.Enter Details About the Event"
                  :class="validationState($v.form.eventDetails)"
                ></b-form-textarea>
                <b-form-invalid-feedback
                  v-if="!$v.form.eventDetails.required"
                >Please Enter the Event Details .It is require If you want to create an event</b-form-invalid-feedback>
                <b-form-invalid-feedback v-if="!$v.form.eventDetails.minLength">
                  Please The Organizer Name Must Be A Minimum of
                  {{ $v.form.eventDetails.$params.minLength.min }} word
                </b-form-invalid-feedback>
              </b-form-group>
              <b-form-group id="OrganizerSelect" label="Organizer Name">
                <b-form-select
                  :options="form.organizersDetails"
                  v-model="$v.form.organizerID.$model"
                  value-field="organizer_id"
                  text-field="name"
                  :class="validationState($v.form.organizerID)"
                  @change="logevent($event)"
                >
                  <template v-slot:first>
                    <b-form-select-option value disabled>Select Organizer name</b-form-select-option>
                  </template>
                  <b-form-invalid-feedback
                    v-if="!$v.form.organizerID.required"
                  >Please select the Name of the Organizer</b-form-invalid-feedback>
                </b-form-select>
              </b-form-group>
              <b-form-group id="eventImage_group" label="Event Image" label-for="eventImage">
                <b-form-file
                  accept="image/*"
                  @change="onSelectImage"
                  :state="Boolean(form.eventImage)"
                  placeholder="Choose an image ..."
                  drop-placeholder="Drop file here..."
                ></b-form-file>
              </b-form-group>
              <b-btn
                type="submit"
                size="lg"
                variant="success"
                :disabled="$v.$error || $v.$invalid"
                style="display:block;margin-left:auto;margin-right:auto;"
                :class="{ 'is-valid': 'All Looks Good !!Thank you for imputing the required details' }"
              >Create Event</b-btn>
            </b-form>
          </b-card-body>
        </b-card>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { onBeforeMount, defineComponent } from "@vue/composition-api";
import { validationMixin } from "vuelidate";
import { validationrules } from "../services/validations";
import BaseInput from "../components/BaseInput.vue";
import utilities from "../services/formutility";
import { formstore } from "../store/formstore";
import Flatpickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

export default defineComponent({
  mixins: [validationMixin],

  name: "EventCreationForm",

  validations: {
    form: {
      ...validationrules,
    },
  },
  components: { BaseInput, Flatpickr },

  setup(props, { root: { $router } }) {
    onBeforeMount(async () => {
      await fetch(
        "https://metasolution-alpha.herokuapp.com/api/v1/organizers",
        {
          method: "get",
          mode: "cors",
        }
      )
        .then(async (organizers_details) => {
          const allorganizers = await organizers_details.json();
          formstore.organizersDetails = allorganizers.organizers;
        })
        .catch((error: Error) => {
          throw error;
        });
    });

    const { imageSelect: onSelectImage, flatpickrconfig } = utilities();

    const options = [
      { value: "public", text: "A Public Event" },
      { value: "private", text: "A Private Event" },
    ];

    const submitForm = async () => {
      const formdata = new FormData();
      formdata.set("title", formstore.eventTitle);
      formdata.set("end", formstore.end);
      formdata.set("start", formstore.start);
      formdata.set("location", formstore.eventLocation);
      formdata.set("discription", formstore.eventDetails);
      formdata.set("type", formstore.eventType);
      formdata.set("url", formstore.eventImage);
      await fetch("https://metasolution-alpha.herokuapp.com/api/v1/event", {
        method: "post",
        mode: "cors",
        headers: {
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
        },
        body: formdata,
      })
        .then((responseFromServer) => {
          if (responseFromServer.status === 201) {
            $router.push({ path: "eventdetails" });
          } else {
            responseFromServer.json().then((jsonServerResponse) => {
              throw new Error(jsonServerResponse);
            });
          }
        })
        .catch((error) => {
          throw error;
        });
    };

    const form = formstore;

    const validationState = (modeldata: any) => {
      return {
        "is-invalid": modeldata.$error,
        "is-valid": !modeldata.$error && modeldata.$dirty,
      };
    };

    return {
      form,
      options,
      submitForm,
      onSelectImage,
      validationState,
      flatpickrconfig,
    };
  },
});
</script>

<style lang="scss" scoped>
#background {
  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
}
</style>
