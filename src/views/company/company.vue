<script setup>
	import net15 from '@/assets/images/net15.png'
	import C1Images from "./c1_images";
	import C2Develop from "./c2_develop";
	import {
		useRouter
	} from "vue-router";
	import {
		ref,
		onMounted
	} from 'vue';
	import {
		getCompanyById
	} from '@/plugins/api';

	import {
		useRoute
	} from "vue-router";
	const route = useRoute()
	const parmId = route.query.companyId;

	const router = useRouter();
	const content = ref("");

	onMounted(() => {
		fetchData();
	});

	const fetchData = async () => {
		try {
			const response = await getCompanyById({id: parmId});
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
	<a-banner zh="分公司介绍" en="Introduction of branch company" :src="net15" />
	<a-article :title="content.companyName" :content="content.context" @back="onBack" />
	<!-- <C1Images />
	<C2Develop /> -->
	<a-footer />
</template>