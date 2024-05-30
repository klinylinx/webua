<script setup>
import net20 from "@/assets/images/net20.png";
import net16 from "@/assets/images/net16.png";
import net17 from "@/assets/images/net17.png";
import net18 from "@/assets/images/net18.png";
import net19 from "@/assets/images/net19.png";
</script>

<template>
  <div class="ec_images">
    <div class="ec_images_inner">
      <el-image class="ec_net20" :src="net20" />
      <el-image class="ec_net16" :src="net16" />
      <el-image class="ec_net17" :src="net17" />
      <div class="ec_net21 ec_text center">
        <img class="ec_icon" src="@/assets/images/sub01.png" />
        <div class="ec_h4">两层办公写字楼<br />占地4000平方米</div>
      </div>
      <el-image class="ec_net18" :src="net18" />
      <div class="ec_net22 ec_text center">
        <img class="ec_icon" src="@/assets/images/sub01.png" />
        <div class="ec_h4">公司位于杭州<br />城西银泰城</div>
      </div>
      <el-image class="ec_net19" :src="net19" />
    </div>
  </div>
</template>

<style lang="less" scoped>
@import url("./c1_images_480.less");
@import url("./c1_images_920.less");
</style>