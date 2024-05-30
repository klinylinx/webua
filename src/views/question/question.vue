<script setup>
import net09 from "@/assets/images/net09.png";
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const number = ref(1);
const dataList = ref([]);
const pageSize = 10;

const renderList = computed(() => {
  const start = (number.value - 1) * pageSize;
  const end = number.value * pageSize;
  return dataList.value.slice(start, end);
});

const onChange = (e) => {
  number.value = e;
};
const onBack = () => {
  router.push("/");
};

onMounted(() => {
  dataList.value = [
    {
      Q: "什么是东方红集团",
      A: "东方红集团是一家总部位于中国香港的高科技企业集团，专注于推动科技创新和国家进步，通过旗下多个子公司开展广泛的高科技业务",
    },
    {
      Q: "东方红集团的主要业务方向有哪些",
      A: "东方红集团的主要业务方向包括算力服务器集群构建、边缘计算、数据分析、人工智能、云计算租赁以及安全数据服务",
    },
    {
      Q: "东方红集团的创始人是谁",
      A: "东方红集团的前身是由香港爱国实业家曹光彪先生创立的香港东方红实业中兴会",
    },
    {
      Q: "东方红集团的使命是什么",
      A: "东方红集团的使命是利用前沿科技推动企业业务成长，推动数据驱动型经济的繁荣与发展，为国家的科技进步和经济发展贡献力量",
    },
    {
      Q: "东方红集团的愿景是什么",
      A: "东方红集团的愿景是成为全球科技领域的领航者，推动国家科技进步与经济发展，成为新时代下科技舞台上的璀璨明星",
    },
    {
      Q: "东方红集团的核心价值观是什么",
      A: "东方红集团的核心价值观包括创新驱动、责任感、团队协作、客户为中心和可持续发展",
    },
    {
      Q: "东方红集团的总部在哪里",
      A: "东方红集团的总部位于中国香港",
    },
    {
      Q: "东方红集团的主要子公司有哪些",
      A: "东方红集团的主要子公司包括东方红（香港）科技技术服务有限公司、东方红海外投资有限公司、东方红国际物流有限公司和东方红（英国）生物科技有限公司",
    },
    {
      Q: "东方红集团如何通过子公司扩展其业务",
      A: "东方红集团通过旗下子公司在不同领域和市场中运营，如东方红（香港）科技技术服务有限公司专注于高科技研发和服务，东方红海外投资有限公司负责全球投资，东方红国际物流有限公司管理国际物流，东方红（英国）生物科技有限公司从事生物科技研发",
    },
    {
      Q: "东方红集团的技术优势是什么",
      A: "东方红集团的技术优势在于其在算力服务器构建、边缘计算、高级数据分析和人工智能应用领域的深厚积累",
    },
    {
      Q: "东方红集团在国际市场上的地位如何",
      A: "东方红集团在全球科技领域占有一席之地，特别是在算力服务器和人工智能服务领域具有竞争力",
    },
    {
      Q: "东方红集团如何支持员工发展",
      A: "东方红集团为员工提供广泛的职业发展机会和持续教育资源，支持个人和职业成长",
    },
    {
      Q: "东方红集团有哪些社会责任活动",
      A: "集团参与多种社会责任活动，包括教育支持、环境保护项目和技术创新赛事的赞助",
    },
    {
      Q: "东方红集团的主要客户群体包括哪些",
      A: "东方红集团的主要客户包括金融机构、大型企业、科研机构和政府部门",
    },
    {
      Q: "东方红集团的领导团队有哪些人物",
      A: "具体领导团队成员的信息未公开，但团队由经验丰富的科技和管理专家组成",
    },
    {
      Q: "东方红集团在行业中的竞争优势是什么",
      A: "东方红集团的竞争优势在于其强大的技术研发能力、全球合作网络以及深入理解市场需求的能力",
    },
    {
      Q: "东方红集团如何处理客户数据的安全和隐私",
      A: "东方红集团严格遵守国际数据安全和隐私保护法规，采用先进的技术措施保护客户数据的安全和隐私",
    },
    {
      Q: "东方红集团如何通过国际合作提升其技术实力",
      A: "东方红集团通过与国际知名科技公司如Hewlett Packard Enterprise（HPE）等合作，不断引进先进技术和资源，提升自身的技术实力和市场竞争力",
    },
    {
      Q: "东方红集团的未来发展战略有哪些",
      A: "东方红集团的未来发展战略包括加强国际合作、持续投资于关键技术研发、拓展新兴市场和加强可持续发展实践",
    },
    {
      Q: "如何联系东方红集团",
      A: "您可以通过公司官网的联系页面、电子邮件或电话与东方红集团取得联系。具体联系方式请参阅公司官方网站",
    },
  ];
});
</script>

<template>
  <a-header />
  <a-banner zh="常见问题" en="Q&A" :src="net09" />
  <a-article @back="onBack" />
  <div class="east_question">
    <div
      class="eq_li"
      v-for="(u, x) in renderList"
      :key="x"
      @click="u.isOpen = !u.isOpen"
    >
      <div class="eq_q">
        {{ ("0" + (x + 1 + (number - 1) * pageSize)).slice(-2) }}、{{ u.Q }}
      </div>
      <div class="eq_a" v-show="u.isOpen">{{ u.A }}</div>
      <div :class="['eq_btn', { on: u.isOpen }]"></div>
    </div>
  </div>
  <a-pagination v-model="number" :total="20" @change="onChange" />
  <a-footer />
</template>

<style lang="less" scoped>
@import url("./question_480.less");
@import url("./question_920.less");
</style>
