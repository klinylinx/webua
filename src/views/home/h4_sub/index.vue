<script setup>
	import net03 from '@/assets/images/net03.png'
	import {
		useRouter
	} from "vue-router";
	import {
		ref,
		onMounted
	} from 'vue';
	import {
		getCompanys
	} from '@/plugins/api';
	const router = useRouter();
	const companys = ref([])
	const onClick = (item) => {
		router.push("/company?companyId=" + item.id);
	};

	onMounted(() => {
		fetchData();
	});

	const fetchData = async () => {
		try {
			const response = await getCompanys();
			companys.value = response.rows;
		} catch (err) {
			console.log('err', err)
		}
	};
</script>

<template>
	<div class="eh_sub">
		<div class="eh_sub_inner">
			<div class="between">
				<div class="eh_s_top">
					<div class="eh_s_h2 thin">All its <br />subsidiaries</div>
					<div class="eh_s_h3">旗下各分公司</div>
					<img class="eh_s_line" src="@/assets/images/line02.png" />
				</div>
				<div class="eh_s_right_btn"></div>
			</div>
			<div class="eh_s_ul">
				<div class="eh_s_li" v-for="(item,index) in companys" :key="index" @click="onClick(item)">
					<!-- <a-image class="eh_s_imh" :src="net03" /> -->
					<a-image :src="item.faceUri" class="eh_s_imh" />
					<div class="eh_s_h4">{{item.companyName}}</div>
					<div class="eh_s_h5 ellipsis">
						{{item.brief}}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
	@import url("./h4_sub_480.less");
	@import url("./h4_sub_920.less");
</style>