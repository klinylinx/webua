<script setup>
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const {
  path: pathName,
  meta: { resoucePath },
} = useRoute();

defineProps({
  color: String,
});

const isVisible = ref(false);

const dataList = [
  { name: "首页", path: "/" },
  { name: "关于集团", path: "/about" },
  { name: "新闻中心", path: "/news" },
  { name: "视频中心", path: "/video" },
  { name: "公司产业", path: "/" },
];
</script>

<template>
  <div class="header_east" :style="{ color }">
    <div class="header_east_inner between">
      <img class="he_logo01" src="@/assets/images/logo01.png" />
      <img class="he_menu" src="@/assets/images/index01.png" @click="isVisible = true" />
      <div :class="['he_ul', { on: isVisible }]" @click="isVisible = false">
        <div class="he_ul_inner">
          <img class="he_logo05" src="@/assets/images/logo05.png" />
          <a
            v-for="(u, x) in dataList"
            :key="x"
            :class="['he_li', { on: pathName === u.path || resoucePath === u.path }]"
            @click="router.push(u.path)"
          >
            {{ u.name }}
          </a>
          <div class="he_setup start">
            <a class="he_s_tab on">简</a>
            <a class="he_s_tab">繁</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import url("./header_480.less");
@import url("./header_920.less");
</style>
