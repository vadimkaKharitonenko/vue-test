<template>
  <ul class="todo-list">
    <Todo
        v-for="(todo, index) in items"
        :index="index"
        :todo="todo"
        :isEditable="isEditable"
        :onChange="onChange"
        :onDelete="onDelete"
    />
  </ul>
</template>

<script>

  import Todo from './Todo';

  export default {
    name: 'TodoList',
    components: {
      Todo
    },
    props: {
      items: Array,
      isEditable: Boolean,
      onChange: Function,
      onDelete: Function
    }
  }

</script>

<style scoped>
  .todo-list {
    display: grid;
    grid-row-gap: 8px;
    padding-left: 8px;
  }
</style>
