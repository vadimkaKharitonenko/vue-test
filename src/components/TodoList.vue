<template>
  <ul class="todo-list">
    <Todo
        v-for="(todo, index) in items"
        :index="index"
        :todo="todo"
        :isEditable="isEditable"
        :onCheck="onCheck"
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
      onCheck: Function,
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

  @media screen and (max-width: 599px) {
    .todo-list {
      padding: 0 10px;
    }
  }
</style>
