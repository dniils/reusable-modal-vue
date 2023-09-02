<template>
  <button :class="`btn_${btnType}`" class="btn" :disabled="props.disabled">
    <slot name="buttonIcon"></slot>
    <slot name="buttonText">click</slot>
  </button>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  btnType: { type: String, default: () => "positive" },
  disabled: Boolean,
});
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
  margin: 0.5rem 0;

  &:hover:enabled {
    cursor: pointer;
  }

  &:disabled {
    color: #747474;
    background-color: #5d5d5d;
  }

  &_positive {
    background-color: #14800f;

    &:hover:enabled {
      background-color: #199812;
    }
  }

  &_negative {
    background-color: #960000;

    &:hover:enabled {
      background-color: #b10000;
    }
  }

  &_neutral {
    background-color: #06328b;

    &:hover:enabled {
      background-color: #0846c0;
    }
  }
}
</style>
