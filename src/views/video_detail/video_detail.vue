<script setup>
import net21 from "@/assets/images/net21.png";
import { useRouter } from "vue-router";
const router = useRouter();
import { ref, onMounted } from "vue";
import { getVideoById } from "@/plugins/api";

import { useRoute } from "vue-router";
const route = useRoute();
const parmId = route.query.id;

const content = ref("");

onMounted(() => {
  fetchData();
});

const fetchData = async () => {
  try {
    const response = await getVideoById({
      id: parmId,
    });
    content.value = response.data;
  } catch (err) {
    console.log("err", err);
  }
};

const onBack = () => {
  router.back();
};
</script>

<template>
  <a-header />
  <a-banner zh="视频详情" en="Video Details" :src="net21" />
  <a-article
    :title="content.title"
    :content="content.brief"
    :date="content.date"
    return-name="返回"
    @back="onBack"
  >
    <div class="ea_f_video">
      <!-- <img :src="content.faceUri" class="ea_f_image" />
			<img class="ea_f_btn" src="@/assets/images/play01.png" /> -->
      <video
        class="ea_f_image"
        :poster="content.faceUri"
        :src="content.video"
        controls
      ></video>
    </div>
  </a-article>
  <a-footer />
</template>

<style lang="less" scoped>
@import url("./video_detail_480.less");
@import url("./video_detail_920.less");
</style>
