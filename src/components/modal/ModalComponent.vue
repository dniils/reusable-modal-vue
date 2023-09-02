<template>
  <div class="modal">
    <div class="modal__window-title">Название окна</div>
    <div class="modal__main">
      <div class="modal__title">Заголовок</div>
      <div class="modal__content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quod
        modi repellat, labore inventore vitae odit laboriosam quos eligendi?
        Consequatur eaque at quam, numquam sapiente modi. Repudiandae sunt
        quibusdam minus? Aliquid inventore natus perferendis animi consequuntur.
        Dolore, voluptates. Quibusdam, doloribus.
      </div>
    </div>
    <div class="modal__buttons">
      <button-component text="Okay!"></button-component>
    </div>
  </div>
</template>

<script setup>
import ButtonComponent from "../button/ButtonComponent.vue";
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
    font-weight: 600;
    padding: 0.2rem 0;
    color: #589fe7;
    background-color: #01143f;
  }

  &__main {
    display: flex;
    flex-direction: column;
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
    padding: 0.5rem;
    background-color: #01143f;
  }
}
</style>
