<template>
  <div class="container">
    <button-component @click="showBtnClickEventHandler">
      <template #buttonText> Show Modal </template>
    </button-component>

    <Teleport to="body">
      <modal-component v-if="!modal.modalActive.value"></modal-component>
    </Teleport>
  </div>
</template>

<script setup>
import ModalComponent from "./components/modal/ModalComponent.vue";
import ButtonComponent from "./components/button/ButtonComponent.vue";
import { useModal } from "./components/modal/useModal.ts";
import { modalConfig } from "./components/modal/modalConfigs.ts";

const modal = useModal(modalConfig.purchaseSuccess);

// function showBtnClickEventHandler() {
//   modal.show();
// }
</script>

<style lang="scss">
::-webkit-scrollbar {
  width: 0.2rem;
}

::-webkit-scrollbar-track {
  background: #23232d;
  border-radius: 0.1rem;
}

::-webkit-scrollbar-thumb {
  background: #484f69;
  border-radius: 0.1rem;
}

::-webkit-scrollbar-thumb:hover {
  background: #505875;
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

.container {
  color: white;
  padding: 0.5rem;
}
</style>
