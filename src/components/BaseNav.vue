<template>
  <nav>
    <b-navbar toggleable="lg" type="dark" variant="dark" sticky>
      <b-navbar-brand href="#">Metasolutions</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{name:'Home'}">
            <fa-icon
              :icon="['fas','laptop-house']"
              class="mr-2"
              size="lg"
              :style="{color:'white'}"
            />Home
          </b-nav-item>
          <b-nav-item :to="{name:'About'}">
            <fa-icon :icon="['fas','info']" size="lg" class="mr-2" :style="{color:'white'}" />About
          </b-nav-item>
          <b-nav-item v-b-toggle.sidebar-1>
            <fa-icon :icon="['fas','sliders-h']" size="lg" class="mr-2" :style="{color:'white'}" />Sidebar
          </b-nav-item>
          <b-sidebar id="sidebar-1" title="Sidebar" shadow>
            <div class="px-3 py-2">
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <b-img src="#" fluid thumbnail></b-img>
            </div>
          </b-sidebar>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar type="dark" variant="light" class="rounded">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button
                size="sm"
                variant="outline-success"
                class="my-2 my-sm-0"
                type="submit"
              >Search</b-button>
            </b-nav-form>
          </b-navbar>

          <b-nav-item :to="{name:'CreateEvent'}">
            <fa-icon
              :icon="['fas','calendar-day']"
              size="lg"
              class="mr-2"
              :style="{color:'white'}"
            />Create event
          </b-nav-item>
          <b-nav-item :to="{name:'CreateOrganizer'}">
            <fa-icon
              :icon="['fas','people-arrows']"
              class="mr-2"
              size="lg"
              :style="{color:'white'}"
            />Create organizer
          </b-nav-item>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <fa-icon
                :icon="['fas','user-cog']"
                class="mt-2"
                size="lg"
                :style="{ color: 'white' }"
              />
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Login</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "BaseNav",
});
</script>

<style lang="scss" scoped>
@font-face {
  font-family: GrenzeGotisch;
  src: url("../assets/fuentes/GrenzeGotisch-VariableFont_wght.ttf");
}

.navbar-brand {
  font-family: GrenzeGotisch;
  font-style: normal;
  font-weight: 777;
  font-size: 1.8rem;
}
</style>>
