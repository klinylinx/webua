<script setup>
	import net07 from '@/assets/images/net07.png'
	import net08 from '@/assets/images/net08.png'
	import net06 from '@/assets/images/net06.png'
	import {
		useRouter
	} from "vue-router";
	const router = useRouter();
	import {
		ref,
		onMounted
	} from "vue";
	import {
		getNews
	} from '@/plugins/api';
	const number = ref([]);
	const lists = ref([])
	const hots = ref([])
	const top = ref('')
	onMounted(() => {
		fetchData();
	});
	const fetchData = async () => {
		try {
			const response = await getNews();
			top.value = response.rows[0];
			hots.value = response.rows.slice(0, 3);
			lists.value = response.rows.slice(3, 6);
		} catch (err) {
			console.log('err', err)
		}
	};
	const toDetail = (item) => {
		router.push("/new_detail?id=" + item.id);
	};

	const onChange = (v) => {
		number.value = v;
	};
</script>

<template>
	<a-header />
	<a-banner zh="新闻中心" en="News center" :src="net06" />
	<div class="en_list_outer">
		<div class="en_l_top">
			<img :src="top.faceUri" class="en_net07"/>
			<div class="en_l_ul">
				<div class="en_l_li" v-for="(item,index) in hots" :key="index" @click="toDetail(item)">
					<div class="en_l_h3">{{item.title}}</div>
					<div class="en_l_h6 thin">2024-03-22</div>
					<div class="en_l_h5 line_clamp">
						{{item.brief}}
					</div>
				</div>
			</div>
		</div>
		<div class="en_l_dt">
			<div class="en_l_dd between" v-for="(item,index) in lists" :key="index" @click="toDetail(item)">
				<div class="en_l_cxt">
					<div class="en_l_h3">{{item.title}}</div>
					<div class="en_l_h6 thin">2024-03-22</div>
					<div class="en_l_h5 line_clamp">
						{{item.brief}}
					</div>
				</div>
				<img :src="item.faceUri" class="en_l_img" />
			</div>
		</div>
		<!-- <a-pagination v-model="number" :total="100" @change="onChange" /> -->
	</div>
	<a-footer />
</template>

<style lang="less" scoped>
	@import url("./news_480.less");
	@import url("./news_920.less");
</style>