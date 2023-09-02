<template>
  <div class="chips">
    <img class="chips__icon" src="../../assets/icon-chip.png" alt="chip" />
    <div class="chips__amount">
      <slot name="amountOfChips"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.chips {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  background-color: #002571;
  padding: 0.3rem 0.5rem;
  border-radius: 8px;

  &__icon {
    width: 20px;
    height: 20px;
  }

  &__amount {
    color: #fff;
    font-weight: 600;
  }
}
</style>
