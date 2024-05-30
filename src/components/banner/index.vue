<script setup>
const props = defineProps({
  zh: String,
  en: String,
  src: String,
});
</script>

<template>
  <div class="banner_east">
    <a-image class="he_logo"  :src="src" />
    <div class="be_content between">
      <div>
        <div class="be_h1">{{ zh }}</div>
        <div class="be_h2 thin">{{ en }}</div>
      </div>
      <div class="be_right">
        <div class="be_right_btn"></div>
        <div class="be_left_btn"></div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import url("./banner_480.less");
@import url("./banner_920.less");
</style>
