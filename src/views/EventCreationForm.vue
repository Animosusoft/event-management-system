<template>
  <div id="background">
    <BaseNav />
    <b-container class="py-5">
      <b-row align-h="center" no-gutters>
        <b-card>
          <b-card-body>
            <b-form id="create_event_form" @submit.prevent="submitForm">
              <div v-if="eventExistAlready" class="text-danger text-monospace text-center">
                <b-card-text>Same Event created at the same time and at the same location</b-card-text>
              </div>
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

              <b-form-group id="OrganizerSelect" label="Organizer Name" label-for="organizerSelect">
                <b-form-select
                  id="organizerSelect"
                  :options="form.organizersDetails"
                  v-model="$v.form.organizerID.$model"
                  value-field="organizer_id"
                  text-field="name"
                  :class="validationState($v.form.organizerID)"
                >
                  <template v-slot:first>
                    <b-form-select-option value disabled>Select Organizer name</b-form-select-option>
                  </template>
                </b-form-select>
                <b-form-invalid-feedback
                  v-if="!$v.form.organizerID.required"
                >Please select the Name of the Organizer</b-form-invalid-feedback>
              </b-form-group>

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
              <b-form-group id="eventImage_group" label="Event Image" label-for="eventImage">
                <b-form-file
                  accept="image/*"
                  v-model="form.eventImage"
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
    <BaseFooter />
  </div>
</template>

<script lang="ts">
import { onBeforeMount, defineComponent, ref } from "@vue/composition-api";
import { validationMixin } from "vuelidate";
import { validationrules } from "../services/validations";
import BaseInput from "../components/BaseInput.vue";
import utilities from "../services/formutility";
import { formstore, authstore } from "../store/index";
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
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            Authorization: `Bearer ${authstore.token}`,
          },
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

    const eventExistAlready = ref(false);

    const submitForm = async () => {
      const formdata = new FormData();
      formdata.set("event_title", formstore.eventTitle);
      formdata.set("location", formstore.eventLocation);
      formdata.set("end_date", formstore.end);
      formdata.set("start_date", formstore.start);
      formdata.set("url", formstore.eventImage);
      formdata.set("organizer_id", formstore.organizerID);
      formdata.set("description", formstore.eventDetails);
      formdata.set("event_type", formstore.eventType);
      await fetch("https://metasolution-alpha.herokuapp.com/api/v1/events", {
        method: "post",
        mode: "cors",
        headers: {
          Authorization: `Bearer ${authstore.token}`,
        },
        body: formdata,
      })
        .then((responseFromServer) => {
          if (responseFromServer.status === 201) {
            $router.push({ path: "eventdetails" });
          } else if (responseFromServer.status === 400) {
            eventExistAlready.value = true;
          } else {
            responseFromServer.json().then((jsonServerResponse) => {
              console.log(jsonServerResponse);
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
      eventExistAlready,
    };
  },
});
</script>

<style lang="scss">
#background {
  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
}
</style>
