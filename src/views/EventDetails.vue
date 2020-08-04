<template>
  <div id="background">
    <b-container class="py-5">
      <b-row align-h="center" no-gutters>
        <b-card>
          <b-card-header style="text-align:center;">{{Title}}</b-card-header>
          <b-card-body>
            <b-form id="event_details_form" @submit.prevent>
              <b-form-group
                id="eventTile"
                label="Event Title"
                label-for="eventTitle"
                description="Name of the Event"
              >
                <b-form-input
                  id="eventTitle"
                  v-model="form.eventTitle"
                  type="text"
                  placeholder="eg.Knust Parade Grounds"
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="eventLocation_group"
                label="Event Location"
                label-for="eventLocation"
                description="The event is happening at"
              >
                <b-form-input
                  id="eventLocation"
                  v-model="form.eventLocation"
                  type="text"
                  placeholder="eg.Knust Parade Grounds"
                ></b-form-input>
              </b-form-group>
              <b-form-row>
                <b-col sm>
                  <b-form-group
                    id="eventStartDay"
                    label="Event Start Date"
                    label-for="startDatetime"
                    description="The event start on the date"
                  >
                    <Flatpickr
                      id="startDatetime"
                      class="form-control"
                      v-model="form.start"
                      :config="configs"
                    />
                  </b-form-group>
                </b-col>
                <b-col sm>
                  <b-form-group
                    id="eventEndDate"
                    label="Event End Date"
                    label-for="endDatetime"
                    description="The Day the Event Will Come to an End on"
                  >
                    <Flatpickr
                      id="endDatetime"
                      class="form-control"
                      v-model="form.end"
                      :config="configs"
                    />
                  </b-form-group>
                </b-col>
              </b-form-row>
              <b-form-group
                id="eventType"
                label="Event Type"
                label-for="eventType"
                description="The Type of Event"
              >
                <b-form-input v-model="form.eventType" type="text"></b-form-input>
              </b-form-group>
              <b-form-group
                id="eventDetails_group"
                label="Event Details"
                label-for="eventDetails"
                description="Some details of the Event"
              >
                <b-form-textarea id="eventDetails" v-model="form.eventDetails" required></b-form-textarea>
              </b-form-group>
              <b-form-group
                id="eventImage_group"
                label="Event Image"
                label-for="eventImage"
                description="A Logo or Image of the Event Place"
              >
                <img
                  :src="form.eventImage"
                  alt="Event Image"
                  class="rounded mx-auto d-block mb-3"
                  style="width: 30%; height: 45%;"
                />
              </b-form-group>
              <b-form-group
                label="Event Was created at "
                label-for="eventCreateTime"
                description="The time this event was created"
              >
                <b-form-input id="eventCreateTime" type="text" :value="creationDate" readonly></b-form-input>
              </b-form-group>
              <b-form-group
                label="Event Was created By  "
                label-for="eventCreatedBy"
                description="The User Who created this event"
              >
                <b-form-input id="eventCreatedBy" type="text" :value="form.organizerName" readonly></b-form-input>
              </b-form-group>
              <b-btn
                type="submit"
                size="lg"
                variant="warning"
                style="display:block;margin-left:auto;margin-right:auto;"
              >Modify Event</b-btn>
            </b-form>
          </b-card-body>
        </b-card>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "@vue/composition-api";
import { formstore } from "../store/index";
import utilities from "@/services/formutility";
import Flatpickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

export default defineComponent({
  name: "EventDetails",
  components: {
    Flatpickr,
  },
  setup() {
    const form = formstore;

    const Title = "Event Details";

    const { flatpickrconfig: configs } = utilities();

    const organizer: any = formstore.organizersDetails.find(
      (organizers: any) => {
        return organizers.organizer_id === formstore.organizerID;
      }
    );

    form.organizerName = organizer.name;
    const creationDate = computed(() => new Date().toUTCString());

    return { creationDate, Title, form, configs, name };
  },
});
</script>

<style lang="scss" scoped>
#background {
  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
}
</style>
