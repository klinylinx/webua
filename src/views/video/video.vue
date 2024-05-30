<script setup>
	import net08 from "@/assets/images/net08.png";
	import net22 from "@/assets/images/net22.png";
	import {
		ref,
		onMounted
	} from "vue";
	import {
		getVideos
	} from '@/plugins/api';
	import {
		useRouter
	} from "vue-router";
	const router = useRouter();

	const number = ref(1);
	const lists = ref([]);
	const onChange = (v) => {
		console.log("onChange", v);
		number.value = v;
	};

	const onClick = (item) => {
		router.push("/video_detail?id=" + item.id);
	};

	onMounted(() => {
		fetchData();
	});
	const fetchData = async () => {
		try {
			const response = await getVideos();
			lists.value = response.rows;
		} catch (err) {
			console.log('err', err)
		}
	};
</script>

<template>
	<a-header />
	<a-banner zh="集团视频" en="Group video" :src="net22" />
	<div class="ev_j_dt">
		<div class="ev_j_dt_inner">
			<div class="ev_j_dd" v-for="(item,index) in lists" :key="index" @click="onClick(item)">
				<a-image class="ev_l_image" :src="item.faceUri">
					<img class="ev_l_btn" src="@/assets/images/play01.png" />
				</a-image>
				<!-- <video :src="item.video" class="ev_l_btn" controls></video> -->
				<div class="ev_l_title">{{item.title}}</div>
				<div class="ev_l_content ellipsis">
					{{item.brief}}
				</div>
			</div>
		</div>
	</div>
	<!-- <a-pagination v-model="number" :total="100" @change="onChange" /> -->
	<a-footer />
</template>

<style lang="less" scoped>
	@import url("./video_480.less");
	@import url("./video_920.less");
</style>