<template>
  <div class="eh_banner">
    <template v-if="bannerList.length">
      <a-swiper v-model:current="tabIndex" :data="bannerList" />
      <div class="eh_content">
        <!-- <div class="eh_h2 end">1/03</div> -->
        <!-- <div class="eh_h1 bold">連接世界算力無界</div>
      <div class="eh_h3 thin">
        Connecting the world There is no limit to computing power
      </div>
      <div class="eh_btn">了解详情</div> -->
        <div class="eh_progress start">
          <div
            :class="['eh_p_num', { on: tabIndex === x }]"
            v-for="(u, x) in bannerList"
            :key="x"
          >
            {{ "0" + (x + 1) }}
          </div>
        </div>
      </div>
    </template>
    <div class="eh_c_bottom">
      <div class="eh_c_bottom_inner between" @click="onOpen">
        <img class="eh_c_audio" src="@/assets/images/index02.png" />
        <div class="ch_c_notice ellipsis">通告：{{ notices.title }}</div>
        <img class="eh_c_menu" src="@/assets/images/index01.png" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getBannerList, getNotices } from "@/plugins/api";
import bannerDataJson from "./bannerData";

const tabIndex = ref(0);
const notices = ref([]);
const bannerList = ref(bannerDataJson);

onMounted(() => {
  fetchData();
  // getBanners();
});

const fetchData = async () => {
  try {
    const response = await getNotices();
    notices.value = response.rows[0];
  } catch (err) {
    console.log("err", err);
  }
};

const getBanners = async () => {
  try {
    const response = await getBannerList();
    bannerList.value = response.rows;
  } catch (err) {
    console.log("err", err);
  }
};

const onOpen = () => {
  const rows = notices.value || {};
  ElMessageBox.alert(rows.context, rows.title, {
    dangerouslyUseHTMLString: true,
    confirmButtonText: "确定",
  });
};
</script>

<style lang="less" scoped>
@import url("./h1_banner_480.less");
@import url("./h1_banner_920.less");
</style>
