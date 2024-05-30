<script setup>
import net08 from "@/assets/images/net08.png";
import net07 from "@/assets/images/net07.png";
import net23 from "@/assets/images/net23.png";
import { ref } from "vue";

const number = ref(1);
const onChange = (v) => {
  console.log("onChange", v);
  number.value = v;
};
</script>

<template>
  <a-header />
  <a-banner zh="集团动态" en="Group dynamics" :src="net23" />
  <div class="ed_dist_outer">
    <div class="ed_d_top">
      <a-image class="ea_net07" :src="net07"  />
      <div class="ed_d_ul">
        <div class="ed_d_li" v-for="u in 3" :key="u">
          <div class="ed_d_h3">2024年伯克希尔-哈撒韦年度股东大会召开在即。</div>
          <div class="ed_d_h6 thin">2024-03-22</div>
          <div class="ed_d_h5 line_clamp">
            2024年伯克希尔-哈撒韦年度股东大会召开在即。当地时间5月2号，在接受第一财经记者采访时，英国资深金融行业从业者大卫·巴雷特（David
            Barrett）称，对于此次年会，他最关注的莫过于会上...
          </div>
        </div>
      </div>
    </div>
    <div class="ed_d_dt">
      <div class="ed_d_dd" v-for="u in 7" :key="u">
        <a-image class="ed_l_image" :src="net08"  />
        <div class="ed_l_title">2024年会召开在即</div>
        <div class="ed_l_content ellipsis">
          2024年伯克希尔-哈撒韦年度股东大会召开在即。当地时间5月2号，在接受第一财经记者采访时，英国资深金融行业从业者大卫·巴雷特（David
          Barrett）称，对于此次年会，他最关注的莫过于会上...
        </div>
      </div>
    </div>
    <a-pagination v-model="number" :total="100" @change="onChange" />
  </div>
  <a-footer />
</template>

<style lang="less" scoped>
@import url("./dynamics_480.less");
@import url("./dynamics_920.less");
</style>
