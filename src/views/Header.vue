<template>
  <div>
    <BaseNav />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "Header",
  setup() {
    const name = "Meatasolutions";

    return { name };
  },
});
</script>

<style></style>
