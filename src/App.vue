<template>
  <div class="container">
    <button-component>
      <template #buttonText> Show Modal </template>
    </button-component>

    <modal-component>
      <template #modalIcon>
        <img src="./assets/logo.png" alt="some-icon-here" />
      </template>
      <template #modalName>Подтверждение</template>
      <template #modalTitle>Требуется подтвердить действие!</template>
      <template #modalContent
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
        deserunt deleniti illo? Mollitia, fugit velit.

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
          praesentium cum, quasi minima quo earum inventore suscipit nulla atque
          exercitationem non similique incidunt quas ullam nisi, fuga
          blanditiis? Placeat, ad! Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Asperiores magnam beatae at perferendis! Ab, illo
          quam inventore quia iste aliquam adipisci, ex sit ipsum aperiam,
          distinctio quis. Cum laborum, assumenda error laudantium quo ratione
          rerum iste ab debitis sint molestiae dolor quibusdam distinctio
          praesentium iure fugiat, optio, officiis quis aliquam?
        </p></template
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

    <!-- <modal-component :show-close-icon="true">
      <template #modalName>Информация</template>
      <template #modalContent>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
        cumque hic, incidunt illo debitis porro natus accusantium quod ipsa
        excepturi eligendi sapiente dolor eaque exercitationem iure distinctio
        numquam repellat rerum!</template
      >
    </modal-component> -->

    <!-- <modal-component>
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
    </modal-component> -->
  </div>
</template>

<script setup>
import ModalComponent from "./components/modal/ModalComponent.vue";
import ButtonComponent from "./components/button/ButtonComponent.vue";
// import ChipsComponent from "./components/chips/ChipsComponent.vue";
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
}

body {
  background-color: #000512;
}

::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-track {
  background: #23232d;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: #484f69;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #505875;
}
</style>
