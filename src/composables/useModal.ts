import { provide, ref } from "vue";

export const useModal = (
  // default
  config = {
    closeIcon: true,
    windowTitle: "Название окна",
    title: "Заголовок",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi reiciendis odit deleniti non possimus eligendi perferendis id natus laboriosam repellendus?",
  }
) => {
  const modalActive = ref(false);

  const show = () => {
    modalActive.value = true;
  };

  const hide = () => {
    modalActive.value = false;
  };

  provide("modalConfig", config);

  return {
    modalActive,
    show,
    hide,
  };
};
