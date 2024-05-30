<script setup>
import { onMounted, ref } from "vue";

const props = defineProps({
  width: String,
  height: String,
  src: String,
});

const urlPath = props.src;
const width = ref(null);
const height = ref(null);

onMounted(() => {
  // const elem = new Image();
  // elem.src = urlPath;
  // elem.onload = () => {
  //   width.value = props.width || elem.naturalWidth + "px";
  //   height.value = props.height || elem.naturalHeight + "px";
  // };
});
</script>

<template>
  <div
    class="communal_image"
    :style="{
      backgroundImage: `url(${urlPath})`,
      width,
      height,
    }"
  >
    <img class="communal_image_inner" :src="urlPath" />
    <slot />
  </div>
</template>

<style lang="less" scoped>
.communal_image {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
}
.communal_image_inner {
  opacity: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
</style>
