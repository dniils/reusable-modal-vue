<template>
  <div class="modals">
    <modal-component>
      <template #modalIcon>
        <img src="./assets/logo.png" alt="some-icon-here" />
      </template>
      <template #modalName>Подтверждение</template>
      <template #modalTitle>Требуется подтвердить действие!</template>
      <template #modalContent
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
        deserunt deleniti illo? Mollitia, fugit velit.</template
      >
      <template #modalButtons>
        <button-component btn-type="negative">
          <template #buttonText>Отмена</template>
        </button-component>
        <button-component>
          <template #buttonIcon>🤩</template>
          <template #buttonText>Да!</template>
        </button-component>
      </template>
    </modal-component>

    <modal-component :show-close-icon="true">
      <template #modalName>Информация</template>
      <template #modalContent>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
        cumque hic, incidunt illo debitis porro natus accusantium quod ipsa
        excepturi eligendi sapiente dolor eaque exercitationem iure distinctio
        numquam repellat rerum!</template
      >
    </modal-component>

    <modal-component>
      <template #modalName>Награда за просмотр</template>
      <template #modalTitle>Вы получили фишки!</template>
      <template #modalContent
        >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        similique? Eligendi aspernatur aliquam ea iusto delectus odio sunt
        consectetur, similique dolor totam illo laborum deleniti voluptatem
        quasi! Necessitatibus, tempora veniam!</template
      >
      <template #modalChips>
        <chips-component>
          <template #amountOfChips>12,000M</template>
        </chips-component>
      </template>
      <template #modalButtons>
        <button-component>
          <template #buttonText>Забрать</template>
        </button-component>
      </template>
    </modal-component>
  </div>
</template>

<script>
import ModalComponent from "./components/modal/ModalComponent.vue";
import ButtonComponent from "./components/button/ButtonComponent.vue";
import ChipsComponent from "./components/chips/ChipsComponent.vue";

export default {
  name: "App",
  components: {
    ModalComponent,
    ButtonComponent,
    ChipsComponent,
  },
};
</script>

<style lang="scss">
.modals {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: flex-start;
  gap: 1rem;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
