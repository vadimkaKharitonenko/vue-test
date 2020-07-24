<template>
  <li class="todo">
    <Checkbox
        :checked="todo.checked"
        :disabled="!isEditable"
    />
    <input
        class="todo__name"
        type="text"
        :value="todo.name"
        :readonly="!isEditable"
    />
  </li>
</template>

<script>

  import Checkbox from './Checkbox';

  export default {
    name: 'Todo',
    components: {
      Checkbox
    },
    props: {
      todo: Object,
      isEditable: Boolean
    },
  }

</script>

<style scoped>
  .todo {
    display: grid;
    grid-template-columns: repeat(2, max-content);
    grid-column-gap: 10px;
    align-items: center;
  }
</style>
