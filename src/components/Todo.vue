<template>
  <li :class="`todo todo_editable_${isEditable}`">
    <Checkbox
      :checked="todo.checked"
      :disabled="!isEditable"
      :onChange="checked => onCheck({checked, index})"
    />

    <input
      class="todo__name"
      type="text"
      placeholder="Текст..."
      v-model="todo.name"
      :readonly="!isEditable"
    />

    <DeleteButton
      v-if="isEditable"
      :onClick="() => onDelete(index)"
    />
  </li>
</template>

<script>
  import Checkbox from './Checkbox';
  import DeleteButton from './buttons/DeleteButton';

  export default {
    name: 'Todo',
    components: {
      Checkbox,
      DeleteButton
    },
    props: {
      todo: Object,
      isEditable: Boolean,
      onCheck: Function,
      onDelete: Function,
      index: Number
    },
  }
</script>

<style scoped>
  .todo {
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-column-gap: 10px;
    align-items: center;
  }

  .todo__name {
    padding: 8px;
  }

  .todo_editable_true .todo__name {
    padding: 7px;
    border: 1px solid #c1bdbd;
    border-radius: 4px;
  }

  .todo_editable_true {
    grid-template-columns: max-content 1fr max-content;
  }
</style>
