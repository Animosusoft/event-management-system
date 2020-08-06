<template>
  <div id="background">
    <BaseNav />
    <b-container class="py-5">
      <b-row align-h="center" no-gutters>
        <b-modal id="modal" title="Success Message">
          <p class="my-4">You have created an organizer successfully</p>
        </b-modal>
        <b-card>
          <b-card-body>
            <b-form id="create_organizer" @submit.prevent="createOrganizer">
              <b-form-group id="type_group" label="Organizer type" label-for="type">
                <b-form-select
                  id="type"
                  v-model="store.type"
                  :options="organizerTypeOptions"
                  required
                ></b-form-select>
              </b-form-group>
              <b-form-group id="name_group" label="Organizer name" label-for="name">
                <b-form-input
                  id="type"
                  v-model="store.name"
                  type="text"
                  placeholder="eg.Moko Shiw"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group id="url_group" label="url" label-for="url">
                <b-form-input
                  id="url"
                  v-model="store.url"
                  type="text"
                  placeholder="eg.https://www.hitpick.com"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group id="logo_group" label="logo" label-for="logo">
                <b-form-input
                  id="logo"
                  v-model="store.logo"
                  type="text"
                  placeholder="eg.mokoshiw.png"
                ></b-form-input>
              </b-form-group>
              <b-form-group id="phone_group" label="Phone number" label-for="phone">
                <b-form-input
                  id="phone"
                  v-model="store.phone"
                  type="text"
                  placeholder="+233456789763"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group id="email_group" label="Organizer email" label-for="email">
                <b-form-input
                  id="email"
                  v-model="store.email"
                  type="text"
                  placeholder="thermo@outlook.com"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group id="status_group" label="Organizer status" label-for="status">
                <b-form-select id="status" v-model="store.status" :options="statusOptions" required></b-form-select>
              </b-form-group>
              <b-btn
                type="submit"
                size="lg"
                variant="success"
                style="display:block;margin-left:auto;margin-right:auto;"
              >Create Organizer</b-btn>
            </b-form>
          </b-card-body>
        </b-card>
      </b-row>
    </b-container>
    <BaseFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { organizerstore, authstore } from "../store/index";

export default defineComponent({
  setup(props, { root: { $bvModal } }) {
    const name = "Create Organizer";
    const store = organizerstore;

    const organizerTypeOptions = [
      { value: "organization", text: "Organization" },
      { value: "person", text: "Personal" },
    ];

    const statusOptions = [
      { value: "active", text: "active" },
      { value: "not-active", text: "not Active" },
    ];

    const createOrganizer = () => {
      const data = new FormData();
      data.set("email", store.email);
      data.set("phone", store.phone);
      data.set("type", store.type);
      data.set("url", store.url);
      data.set("logo", store.logo);
      data.set("name", store.name);
      data.set("status", store.status);

      fetch("https://metasolution-alpha.herokuapp.com/api/v1/organizers", {
        method: "post",
        mode: "cors",
        headers: {
          Authorization: `Bearer ${authstore.token}`,
        },
        body: data,
      })
        .then((responseFromServer) => {
          if (responseFromServer.status === 201) {
            $bvModal.show("modal");
          }
        })
        .catch((error) => {
          throw error;
        });
    };
    return {
      name,
      store,
      createOrganizer,
      organizerTypeOptions,
      statusOptions,
    };
  },
});
</script>

<style lang="scss" scoped>
#background {
  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
}
</style>
