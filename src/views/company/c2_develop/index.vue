<script setup>
import { onMounted, ref } from "vue";

const tabIndex = ref(0);
const dataList = ref([]);

onMounted(() => {
  dataList.value = [{}, {}, {}, {}, {}, {}, {}];
});
</script>

<template>
  <div class="eh_idea">
    <div class="eh_idea_inner between">
      <div class="eh_i_left">
        <div class="eh_i_h2 thin">Develop <br />course</div>
        <div class="eh_i_h3">发展历程</div>
        <img class="eh_i_line" src="@/assets/images/line02.png" />
      </div>
      <div class="eh_i_bottom">
        <div class="eh_i_ul">
          <div
            class="eh_i_li"
            v-for="(u, x) in dataList"
            :key="x"
            @click="tabIndex = x"
          >
            <div class="eh_i_point"></div>
            <div class="eh_i_h4">2008</div>
            <transition name="opacity">
              <div v-show="tabIndex === x" class="eh_i_content">
                XX公司分公司，作为XX公司的重要组成部分，自XXXX年成立以来，一直秉承母公司的经营理念，致力于为客户提供优质的产品与服务。我们坐落于[城市名]的核心商务区，地理位置优越，交通便利，便于与各方合作伙伴进行深入的交流与合作。
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import url("./c2_develop_480.less");
@import url("./c2_develop_920.less");
</style>
