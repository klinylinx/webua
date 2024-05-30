<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  modelValue: { type: Number, default: 1 },
  pageSize: { type: Number, default: 10 },
  total: Number,
});
const emit = defineEmits(["change", "update:modelValue"]);

const number = ref(1);

watch(
  () => props.modelValue,
  (n) => {
    number.value = n;
  }
);

const onChange = (v) => {
  emit("change", v);
};

const onPrevNext = (v) => {
  number.value = Math.floor(v);
};
</script>

<template>
  <div class="east_pagination center">
    <div class="ep_icon center" :disabled="number === 1" @click="onPrevNext(1)">
      <svg
        class="ep_icon_inner"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
      >
        <path
          fill="currentColor"
          d="M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"
        ></path>
      </svg>
    </div>
    <el-pagination
      v-model:current-page="number"
      background
      :pager-count="5"
      layout="prev, pager, next"
      :page-size="pageSize"
      :total="total"
      @change="onChange"
    />
    <div
      class="ep_icon center"
      :disabled="number >= total / pageSize"
      @click="onPrevNext(total / pageSize)"
    >
      <svg
        class="ep_icon_inner"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
      >
        <path
          fill="currentColor"
          d="M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688m-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z"
        ></path>
      </svg>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import url("./pagination_480.less");
@import url("./pagination_920.less");
</style>
