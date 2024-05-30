<script setup>
import { watch } from "vue";
const props = defineProps({
  modelValue: Boolean,
  content: String,
});
const emit = defineEmits(["update:modelValue"]);

let timer = null;
watch(
  () => props.modelValue,
  (n, o) => {
    if (!n) return;
    clearTimeout(timer);
    timer = setTimeout(() => emit("update:modelValue", false), 3000);
  }
);
</script>

<template>
  <transition name="fade">
    <div class="message_layer center" v-if="props.modelValue">
      <div class="ml_content" v-html="content" />
    </div>
  </transition>
</template>

<style lang="less">
.message_layer {
  position: fixed;
  top: 20px;
  left: 0;
  right: 0;
  .ml_content {
    color: #333;
    border-radius: 20px;
    font-size: 15px;
    padding: 10px 24px;
    background-color: #ffb700;
  }
}
</style>
