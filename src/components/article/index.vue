<script setup>
	defineProps({
		title: String,
		date: String,
		content: String,
		returnName: {
			type: String,
			default: "返回首页"
		},
	});

	const emit = defineEmits(["back"]);
</script>

<template>
	<div class="ea_cxt">
		<div class="ea_f_return start" @click="emit('back')">
			<svg class="ea_f_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
				<path fill="currentColor"
					d="M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z">
				</path>
			</svg>
			{{ returnName }}
		</div>

		<div v-if="title" class="ea_f_h2">{{ title }}</div>
		<slot />
		<div v-if="date" class="ea_f_date">{{ date }}</div>
		<div v-if="content" class="ea_f_content" v-html="content"></div>
	</div>
</template>

<style lang="less" scoped>
	@import url("./article_480.less");
	@import url("./article_920.less");
</style>