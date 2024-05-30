<script setup>
	import net21 from '@/assets/images/net21.png'
	import {
		useRouter
	} from "vue-router";
	const router = useRouter();
	import {
		ref,
		onMounted
	} from 'vue';
	import {
		getNewById 
	} from '@/plugins/api';

	import {
		useRoute
	} from "vue-router";
	const route = useRoute()
	const parmId = route.query.id;

	const content = ref("");

	onMounted(() => {
		fetchData();
	});

	const fetchData = async () => {
		try {
			const response = await getNewById({
				id: parmId
			});
			content.value = response.data;
		} catch (err) {
			console.log('err', err)
		}
	};

	const onBack = () => {
		router.push("/");
	};
</script>

<template>
	<a-header />
	<a-banner zh="新闻详情" en="Video Details" :src="net21" />
	<a-article :title="content.title" :content="content.context" :date="content.createTime" @back="onBack">
	</a-article>
	<a-footer />
</template>

<style lang="less" scoped>
	@import url("./video_detail_480.less");
	@import url("./video_detail_920.less");
</style>