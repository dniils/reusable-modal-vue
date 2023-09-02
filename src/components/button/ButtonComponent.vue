<template>
  <button class="btn btn_positive">{{ buttonText }}</button>
</template>

<script setup>
import { defineProps, ref } from "vue";

const props = defineProps({
  text: { type: String, default: () => "buttonText" },
});
const buttonText = ref(props.text);
</script>

<style lang="scss" scoped>
.btn {
  border: none;
  border-radius: 0.2rem;
  padding: 0.2rem 0.5rem;
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.15s ease-in-out;

  &:hover {
    cursor: pointer;
  }

  &_positive {
    color: #fff;
    background-color: #14800f;

    &:hover {
      background-color: #199812;
    }
  }
}
</style>
