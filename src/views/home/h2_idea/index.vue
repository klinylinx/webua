<script setup>
import { ref } from "vue";

const dataList = ref([
  {
    title: "公司愿景",
    en: "Company Vision",
    desc: "成为新时代科技创新的驱动者，连接中国与世界，推动国家科技进步与经济发展",
  },
  {
    title: "企业文化",
    en: "Corporate Culture",
    desc: "传承红色文化与爱国精神，注重技术创新、合作共赢、社会责任、质量至上和适应性强",
  },
  {
    title: "公司使命",
    en: "Company Mission",
    desc:
      "致力于成为全球算力网络领导者，通过边缘计算、AI、云计算等技术加速企业成长，提升社会工作和生活品质",
  },
  {
    title: "品牌价值观",
    en: "Brand values",
    desc:
      "创新、合作、责任、传承、质量、适应性。持续技术创新，建立全球合作，履行社会责任，传承红色文化，坚持高质量，适应市场变革",
  },
]);

const tabIndex = ref(0);
const onTab = (index) => {
  tabIndex.value = index;
};
</script>

<template>
  <div class="eh_idea center">
    <div class="eh_idea_inner">
      <div class="eh_i_left">
        <div class="eh_i_h2 thin">Group <br />philosophy</div>
        <div class="eh_i_h3">集团理念</div>
        <img class="eh_i_line" src="@/assets/images/line02.png" />
        <div class="eh_i_block">
          <a
            :class="['eh_i_link', { on: x === tabIndex }]"
            v-for="(u, x) in dataList"
            :key="x"
            @click="onTab(x)"
            >{{ u.title }}</a
          >
        </div>
        <div class="eh_i_add_btn"></div>
      </div>
      <div class="eh_i_right end">
        <div
          :class="['eh_i_li', { on: x === tabIndex }]"
          v-for="(u, x) in dataList"
          :key="x"
        >
          <div class="eh_i_title start">
            <div class="eh_i_num">0{{ x + 1 }}</div>
            <div class="eh_i_h4">{{ u.title }}</div>
          </div>
          <div class="start">
            <div class="eh_i_h6">{{ u.en }}</div>
            <div class="eh_i_h5 line_clamp">
              {{ u.desc }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import url("./h2_idea_480.less");
@import url("./h2_idea_920.less");
</style>
