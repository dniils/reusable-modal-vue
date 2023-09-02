<template>
  <button :class="`btn_${btnType}`" class="btn">{{ buttonText }}</button>
</template>

<script setup>
import { defineProps, ref } from "vue";

const props = defineProps({
  text: { type: String, default: () => "buttonText" },
  btnType: { type: String, default: () => "positive" },
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
    background-color: #14800f;

    &:hover {
      background-color: #199812;
    }
  }

  &_negative {
    background-color: #960000;

    &:hover {
      background-color: #b10000;
    }
  }

  &_neutral {
    background-color: #06328b;

    &:hover {
      background-color: #0846c0;
    }
  }
}
</style>
