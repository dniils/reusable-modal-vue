<template>
  <div class="modal">
    <div class="modal__window-title">
      <slot name="modalName">Название окна</slot>
      <img
        v-if="props.showCloseIcon"
        @click="closeModal"
        class="modal__btn-close"
        src="@/assets/icon-close.svg"
        alt="close"
      />
    </div>
    <div class="modal__main">
      <div class="modal__icon">
        <slot name="modalIcon"></slot>
      </div>
      <div class="modal__title">
        <slot name="modalTitle"></slot>
      </div>
      <div class="modal__content">
        <slot name="modalContent">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quod
          modi repellat, labore inventore vitae odit laboriosam quos eligendi?
          Consequatur eaque at quam, numquam sapiente modi. Repudiandae sunt
          quibusdam minus? Aliquid inventore natus perferendis animi
          consequuntur. Dolore, voluptates. Quibusdam, doloribus.
        </slot>
      </div>
      <div class="modal__chips">
        <slot name="modalChips"></slot>
      </div>
    </div>
    <div class="modal__buttons">
      <slot name="modalButtons"></slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  showCloseIcon: { type: Boolean, default: () => false },
});

function closeModal() {
  //
}
</script>

<style scoped lang="scss">
.modal {
  font-size: 1rem;
  max-width: 300px;
  background-color: #010b25;
  border: 2px solid #1c4483;
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  margin: 0 auto;

  &__window-title {
    position: relative;
    font-weight: 600;
    padding: 0.2rem 0;
    color: #589fe7;
    background-color: #01143f;
  }

  &__btn-close {
    position: absolute;
    right: 5px;
    top: 5px;
    width: 12px;
    height: 12px;

    &:hover {
      cursor: pointer;
    }
  }

  &__main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
  }

  &__title {
    color: #fff;
  }

  &__content {
    color: #b1c7ea;
  }

  &__buttons {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    justify-content: center;
    // padding: 0.5rem;
    background-color: #01143f;
  }
}
</style>
