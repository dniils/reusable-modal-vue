<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <modal-component />
</template>

<script>
import ModalComponent from "./components/modal/ModalComponent.vue";

export default {
  name: "App",
  components: {
    ModalComponent,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
