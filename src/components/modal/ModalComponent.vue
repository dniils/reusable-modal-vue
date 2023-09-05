<template>
  <div class="modal-wrapper">
    <div class="modal">
      <div
        class="modal__window-header"
        :class="{
          'modal__window-header_positive': modalConfig.type === 'success',
          'modal__window-header_negative': modalConfig.type === 'error',
          'modal__window-header_neutral': modalConfig.type === 'neutral',
          'modal__window-header_warning': modalConfig.type === 'warning',
        }"
      >
        <div class="modal__window-title">
          {{ modalConfig.windowTitle }}
        </div>
        <img
          v-if="modalConfig.closeIcon"
          class="modal__btn-close"
          src="@/assets/icon-close.svg"
          alt="close"
        />
      </div>
      <div class="modal__main">
        <div v-if="modalConfig.type">
          <div class="modal__icon" v-if="modalConfig.type === 'success'">
            🟢
          </div>
          <div class="modal__icon" v-if="modalConfig.type === 'warning'">
            🟡
          </div>
          <div class="modal__icon" v-if="modalConfig.type === 'error'">🔴</div>
        </div>
        <div
          class="modal__title"
          :class="{
            modal__title_success: modalConfig.type === 'success',
            modal__title_error: modalConfig.type === 'error',
          }"
        >
          {{ modalConfig.title }}
        </div>
        <div class="modal__content">
          {{ modalConfig.text }}
        </div>
        <div class="modal__chips" v-if="modalConfig.chipsAmout">
          <chips-component>
            <template #amountOfChips>
              {{ modalConfig.chipsAmout }}
            </template>
          </chips-component>
        </div>
      </div>
      <div class="modal__buttons" v-if="modalConfig.button">
        <button-component
          v-if="modalConfig.button.positive"
          btn-type="positive"
        >
          <template #buttonText>
            {{ modalConfig.button.positive.text }}
          </template>
        </button-component>

        <button-component v-if="modalConfig.button.neutral" btn-type="neutral">
          <template #buttonIcon>
            {{ modalConfig.button.neutral.icon }}
          </template>
          <template #buttonText>
            {{ modalConfig.button.neutral.text }}
          </template>
        </button-component>

        <button-component
          v-if="modalConfig.button.negative"
          btn-type="negative"
        >
          <template #buttonIcon>
            {{ modalConfig.button.negative.icon }}
          </template>
          <template #buttonText>
            {{ modalConfig.button.negative.text }}
          </template>
        </button-component>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from "vue";
import ButtonComponent from "../button/ButtonComponent.vue";
import ChipsComponent from "../chips/ChipsComponent.vue";

const modalConfig = inject("modalConfig");
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1rem;
  max-width: 18.75rem;
  min-width: 12.5rem;
  background-color: #010b25;
  border: 0.125rem solid #1c4483;
  border-radius: 0.625rem;
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

    &_negative {
      box-shadow: 0rem -0.5rem 7.438rem 0.313rem rgba(255, 0, 0, 0.5);
    }

    &_positive {
      box-shadow: 0rem -0.5rem 7.438rem 0.313rem rgba(172, 255, 47, 0.5);
    }

    &_neutral {
      box-shadow: 0rem -0.5rem 7.438rem 0.313rem rgba(173, 216, 230, 0.5);
    }

    &_warning {
      box-shadow: 0rem -0.5rem 7.438rem0.313rem rgb(186, 177, 84, 0.6);
    }
  }

  &__window-title {
    width: 100%;
    text-align: center;
    padding-left: 0.75rem;
  }

  &__btn-close {
    width: 0.75rem;
    height: 0.75rem;

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
    box-shadow: 7.5rem 5rem 2.5rem 1.25rem #0ff;
  }

  &__title {
    font-weight: 600;
    color: #fff;

    &_success {
      color: greenyellow;
    }

    &_error {
      color: indianred;
    }
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
