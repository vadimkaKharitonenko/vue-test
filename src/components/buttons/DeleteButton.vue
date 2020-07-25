<template>
  <button
    class="delete"
    @click="onClick"
  />
</template>

<script>
  export default {
    name: 'DeleteButton',
    props: {
      onClick: Function,
    },
  }
</script>

<style scoped>
  .delete {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
    margin-top: 4px;
    background-color: firebrick;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .delete::before,
  .delete::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 8px;
    background-color: white;
    transform: rotate(-45deg);
  }

  .delete::after {
    transform: rotate(45deg);
  }
</style>
