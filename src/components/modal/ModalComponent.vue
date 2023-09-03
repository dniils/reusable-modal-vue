<template>
  <div class="modal-wrapper">
    <div class="modal">
      <div class="modal__window-header">
        <div class="modal__window-title">
          <slot name="modalName">Название окна</slot>
        </div>
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
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  showCloseIcon: { type: Boolean, default: () => false },
});
</script>

<style scoped lang="scss">
.modal-wrapper {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(1, 11, 37, 0.8);
}
.modal {
  font-size: 1rem;
  max-width: 300px;
  min-width: 200px;
  background-color: #010b25;
  border: 2px solid #1c4483;
  border-radius: 10px;
  overflow-y: auto;
  overflow-x: hidden;
  text-align: center;
  margin: 1rem;

  &__window-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    padding: 0.2rem 0.3rem;
    color: #589fe7;
    background-color: #01143f;
  }

  &__window-title {
    width: 100%;
    text-align: center;
    padding-left: 12px;
  }

  &__btn-close {
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
    max-height: 80vh;
    overflow-y: auto;
    overflow-x: hidden;
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
    background-color: #01143f;
  }
}
</style>
