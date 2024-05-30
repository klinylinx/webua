<script setup>
import { computed, onMounted, onUnmounted, ref } from "vue";

const tabIndex = ref(0);
const dataList = ref([
  {
    year: "2001年",
    desc: "中国正式加入世界贸易组织 (WTO), 正式与国际接轨。受时任中共中央外交部部长唐家璇委派，香港爱国实业 家曹光彪先生在2002年11月1日组织成立香港东方红实业中兴会， 作为中国最重要的对外窗口，香港有着得天独厚的地理优势，香港东 方红实业中兴会的核心宗旨，是在中国对外开放的初期，大力引进海 外全新的科技资料，包括海外专利、人才、科研技术的引进以及海外大型集团的战略投资",
  },
  {
    year: "2021年",
    desc: "曹光彪先生于香港港安医院离世，享年101岁。 在生前的最后一段日子里，香港东方红实业中兴会的运营，虽然早就 已经交给旁人，但是曹光彪先生任然不忘党和中央交给他的使命，致 力于香港东方红实业中兴会的体制改革，他交代说：“时代的变革是 巨大的，作为一个组织，中兴会的力量已经越来越弱化，中兴会应当 顺应时代的变迁，学习西方的公司文化，改革创新，去成立公司，去成立集团，让团队更加正规化。",
  },
  {
    year: "2022年",
    desc: "在曹老的余晖下，香港东方红集团(英文名： HereIn The East) 在香港正式成立。 <br />“东方红”这个名字不仅仅是一个符号，它蕴含了爱国主义、革命精 神、科技进步和国家强盛等多重含义，是中国现代史上不可磨灭的红色记忆和文化象征。 <br />东方红集团的创立，源自香港爱国实业家曹光彪先生的前瞻性布局。承继了曹光彪先生的爱国情怀和事业遗志，将深厚的红色基因和对国家的忠诚，转化为推动科技进步和经济发展的实际行动。作为一家承载深厚历史使命和文化底蕴的企业，集团希望继承并发扬了“东方红”的爱国主义精神和革命传统，致力于科技创新和国家进步，成为新时代下连接中国与世界科技舞台的桥梁",
  },
  {
    year: "2023年",
    desc: "香港东方红集团自成立以来，始终秉承爱国实业家曹光彪先生的遗志，致力于推动科技创新和国家进步。集团立足于香港这一国际大都市，充分发挥地理优势，积极拓展海外业务，搭建起连接中国与世界科技交流的桥梁。通过其全球分布的子公司，东方红集团在全球算力网络建设、边缘计算、数据分析、人工智能、云计算租赁和安全数据服务等多个高科技领域内取得了显著成绩，展现了集团的技术实力和创新能力。 <br />东方红海外投资有限公司专注于发现和投资全球的科技创新项目，为集团带来先进技术和战略资源。东方红国际物流有限公司通过优化全球供应链和物流网络，确保技术和产品的高效全球分发。东方红（英国）生物科技有限公司在生物技术领域的突破，为医疗健康和农业生物技术的进步贡献力量。",
  },
  {
    year: "2024年",
    desc: "东方红（香港）科技技术服务有限公司作为集团的核心子公司，紧随国家战略部署，与Hewlett Packard 东方红（香港）科技技术服务有限公司作为集团的核心子公司，紧随国家战略部署，与Hewlett Packard Enterprise（HPE）等国际知名企业建立战略合作关系，共同投资建设全球算力服务器集群。公司深受红色文化熏陶，将红色基因融入企业发展和国家战略响应中，为国家的数字化转型提供有力支持。 <br />这些子公司的紧密合作和业务互补，共同推进了东方红集团的全球业务布局，加速了科技创新的步伐，同时也为集团客户提供了精准和多元化的技术解决方案，促进了业务成长和数据驱动型经济的繁荣",
  },
]);
const content = computed(() => dataList.value[tabIndex.value]?.desc);

const onOpen = () => {
  const rows = dataList.value[tabIndex.value] || {};
  ElMessageBox.alert(rows.desc, rows.year, {
    dangerouslyUseHTMLString: true,
    confirmButtonText: "确定",
  });
};

let timer;
onMounted(() => {
  clearInterval(timer);
  timer = setInterval(() => {
    let val = tabIndex.value + 1;
    val = val % dataList.value.length;
    tabIndex.value = val;
  }, 5000);
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>

<template>
  <div class="eh_through">
    <div class="eh_through_inner">
      <div class="eh_t_left">
        <div class="eh_t_h2 thin">Group <br />development history</div>
        <div class="eh_t_h3">集团发展历程</div>
        <img class="eh_t_line" src="@/assets/images/line01.png" />
        <div class="eh_t_block">
          <a
            :class="['eh_t_link', { on: tabIndex === x }]"
            v-for="(u, x) in dataList"
            :key="x"
            @click="tabIndex = x"
          >
            {{ u.year }}
          </a>
        </div>
        <div class="eh_t_add_btn"></div>
      </div>
      <div class="eh_t_right">
        <div class="eh_t_right_btn"></div>
        <div class="eh_t_left_btn"></div>
      </div>
      <div class="eh_t_bottom">
        <div class="eh_t_text line_clamp" v-html="content"></div>
        <div class="eh_t_btn" @click="onOpen">了解详情</div>
      </div>
    </div>
  </div>
</template>


<style lang="less" scoped>
@import url("./h3_through_480.less");
@import url("./h3_through_920.less");
</style>