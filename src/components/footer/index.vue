<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="footer_east">
    <div class="footer_east_inner">
      <div class="fe_top">
        <img class="fe_logo" src="@/assets/images/logo01.png" alt="logo" />
        <div class="fe_ul start">
          <a class="fe_li" @click="router.push('/question')"> 常见问题 </a>
          <a class="fe_li" @click="router.push('/privacy_security')">
            隐私安全
          </a>
          <a class="fe_li" @click="router.push('/copyright')"> 版权所有 </a>
          <a class="fe_li" @click="router.push('/lower')"> 法律声明 </a>
        </div>
      </div>
      <div class="fe_bottom thin">
        Copyright ◎ 香港东方红集团｜ 版权所有·本网站支持IPv6
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import url("./footer_480.less");
@import url("./footer_920.less");
</style>
