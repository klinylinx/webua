<script setup>
import "swiper/css";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

const props = defineProps({
  data: { type: Array, default: () => [] },
  current: { type: Number, default: 0 },
});

const emit = defineEmits(["update:current"]);

const onEnd = (e) => {
  emit("update:current", e.activeIndex);
};
</script>

<template>
  <swiper
    v-if="data.length"
    :slides-per-view="1"
    :space-between="0"
    :autoplay="{
      delay: 2000,
      stopOnLastSlide: false,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }"
    :initialSlide="current"
    :loop="true"
    :speed="300"
    :modules="[Autoplay, EffectFade]"
    @slideChangeTransitionEnd="onEnd"
    style="height: 100%"
  >
    <swiper-slide v-for="(u, x) in data" :key="x">
      <a-image :src="u.picUri" style="width: 100%; height: 100%" />
    </swiper-slide>
  </swiper>
</template>
