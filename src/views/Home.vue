<template>
  <div>
    <BaseNav />
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      indicators
      img-width="1024"
      img-height="240"
    >
      <b-carousel-slide
        caption="Work From The Confort Of Your Home"
        :img-src="require('../assets/imágenes/home_carousel/laptop_desk.jpg')"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Planning Of Great Events Happen At Beautiful Placese"
        :img-src="require('../assets/imágenes/home_carousel/work_hallway.jpg')"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="A Bright , Peacefull And Natural Environment Is What You Need For Great Ideas"
        :img-src="require('../assets/imágenes/home_carousel/sunny_nature.jpg')"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Work with and for nature"
        :img-src="require('../assets/imágenes/home_carousel/nature.jpg')"
      ></b-carousel-slide>
    </b-carousel>
    <BaseFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const name = "Home";

    return { name };
  },
});
</script>

<style lang="scss" scoped>
</style>
