<template>
  <ul class="todo-list">
    <Todo
        v-for="todo in items"
        :todo="todo"
        :isEditable="isEditable"
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
      isEditable: Boolean
    }
  }

</script>

<style scoped>
  .todo-list {
    display: grid;
    grid-row-gap: 8px;
  }
</style>
