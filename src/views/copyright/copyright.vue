<script setup>
import net11 from '@/assets/images/net11.png'
import { useRouter } from "vue-router";
const router = useRouter();

const content = `
保留所有权利。本网站的所有内容，包括但不限于文本、图像、图表、标志、图标、声音、视频以及软件，均属于东方红集团及/或其内容提供者的财产。这些内容受中华人民共和国和国际版权法的保护。

<br /><br />未经东方红集团事先书面同意，严禁任何人以任何形式复制、分发、传输、展示、执行、翻译、出售、转让、创作衍生作品、或以其他方式利用本网站的任何内容。东方红集团保留随时更正、修改、更新本声明的权利。

<br /><br />许可和网站使用
<br />东方红集团授予您有限的许可，以个人和非商业用途访问和个人使用本网站，此许可不包括任何形式的网站内容或软件的销售或商业使用，包括收集和使用任何产品列表、描述或价格；任何衍生使用本网站或其内容；任何下载或复制账户信息供其他商家使用；或任何数据挖掘、机器人或类似的数据收集和提取工具的使用。

<br /><br />商标信息
<br />本网站上的所有商标、服务标志和交易名称均是东方红集团或其关联公司、相关广告商、合作伙伴或其他授权主体的财产。

<br /><br />免责声明
<br />本网站和其内容“按现状”提供，东方红集团不提供任何明示或暗示的保证，包括但不限于对适销性、特定用途的适用性及非侵权的暗示保证。

<br /><br />修订和更新
<br />东方红集团保留随时修改本版权声明的权利。请定期查看本声明，了解任何更改情况。
`;

const onBack = () => {
  router.push("/");
};
</script>

<template>
  <a-header />
  <a-banner zh="版权所有" en="All rights reserved" :src="net11" />
  <a-article title="版权所有" :content="content" @back="onBack" />
  <a-footer />
</template>

