<template>
  <nav>
    <b-navbar toggleable="lg" type="dark" variant="dark" sticky>
      <b-navbar-brand href="#">Metasolutions</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{name:'Home'}" active>
            <b-icon icon="house" scale="1.25" shift-v="1.25" aria-hidden="true" class="mr-sm-2"></b-icon>Home
          </b-nav-item>
          <b-nav-item :to="{name:'About'}">About</b-nav-item>
          <b-nav-item v-b-toggle.sidebar-1>
            <b-icon icon="layout-sidebar" scale="1.25" class="mr-sm-2"></b-icon>Sidebar
          </b-nav-item>
          <b-sidebar id="sidebar-1" title="Sidebar" shadow>
            <div class="px-3 py-2">
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
            </div>
          </b-sidebar>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar type="dark" variant="light">
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
            <b-icon icon="calendar-date" class="mr-sm-2" />Create event
          </b-nav-item>
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Login</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-avatar variant="warning" badge="2" badge-variant="dark" icon="people-fill" size="3rem"></b-avatar>
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
