<script setup>
import net10 from '@/assets/images/net10.png'
import { onMounted, ref } from "vue";

const level01 = ref(0);
const level02 = ref(0);

const dataList = ref([]);
const init = () => {
  dataList.value = [
    {
      key: "集团概况",
      items: [
        { name: "集团简介" },
        { name: "集团管理" },
        { name: "集团架构" },
        { name: "集团荣誉" },
      ],
    },
    {
      key: "集团文化",
      items: [{ name: "集团简介" }, { name: "集团荣誉" }],
    },
    {
      key: "集团管理",
      items: [{ name: "集团简介" }, { name: "集团荣誉" }],
    },
  ];
  const initIndex = 0;
  const subInitIndex = 0;
  const rows = dataList.value[initIndex];
  const subRows = rows?.items?.[subInitIndex];
  onClickName(subRows, subInitIndex, rows, initIndex);
};

const onClickKey = (rows, index, bool) => {
  rows.isExtend = bool || !rows.isExtend;
};
const onClickName = (subRows, subIndex, rows, index) => {
  dataList.value = dataList.value.map((u, x) => {
    u.items = u.items.map((w, y) => {
      w.isActive = x === index && y === subIndex;
      return w;
    });
    return u;
  });
  onClickKey(rows, index, true);
};

onMounted(() => {
  init();
});

const content = `
  <img src="http://localhost:5174/src/assets/images/net10.png" style="width: 100%">
  
  <br /><br />名称:XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  <br />成立时间:XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  <br />总部位置:XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  <br />业务范围:XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  <br />核心理念与未来展望:XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

  <br /><br />XX公司分公司介绍

  <br /><br />XX公司分公司，作为XX公司的重要组成部分，自XXXX年成立以来，一直秉承母公司的经营理念，致力于为客户提供优质的产品与服务。我们坐落于[城市名]的核心商务区，地理位置优越，交通便利，便于与各方合作伙伴进行深入的交流与合作。

  <br /><br />分公司现有员工XX余人，其中不乏行业精英和专业技术人才。我们拥有一支高效、专业、富有创新精神的团队，他们凭借丰富的行业经验和专业的技术知识，为客户提供了全方位的解决方案。

  <br /><br />在业务领域上，分公司紧跟市场趋势，不断拓展业务范围，现已涉及[具体业务领域1]、[具体业务领域2]、[具体业务领域3]等多个领域。我们始终坚持客户需求为导向，以优质的产品和服务赢得了广大客户的信赖与支持。

  <br /><br />未来，XX公司分公司将继续秉承“客户至上、质量第一”的宗旨，不断提升自身的综合实力和市场竞争力，为客户创造更大的价值。同时，我们也将积极履行社会责任，为推动社会进步和经济发展贡献自己的力量。
`;
</script>

<template>
  <a-header />
  <a-banner zh="关于集团" en="About the Group" :src="net10" />
  <div class="ea_o_outer">
    <div class="ea_o_left">
      <div class="ea_o_item" v-for="(u, x) in dataList" :key="x">
        <a class="ea_o_key" @click="onClickKey(u, x)">{{ u.key }}</a>
        <div
          v-show="u.isExtend"
          class="ea_o_ul"
          v-for="(w, y) in u.items"
          :key="y"
        >
          <a
            :class="['ea_o_li', { on: w.isActive }]"
            @click="onClickName(w, y, u, x)"
          >
            {{ w.name }}
          </a>
        </div>
      </div>
    </div>
    <div class="ea_o_right" v-html="content" />
  </div>
  <a-footer />
</template>

<style lang="less" scoped>
@import url("./about_480.less");
@import url("./about_920.less");
</style>


