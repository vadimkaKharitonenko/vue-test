<template>
  <article class="note">
    <header class="note__header">
      <input
        class="note__name"
        type="text"
        :value="note.name"
      />
      <router-link :to="`/note/${index}`">
        <img
          src="../assets/icons/edit.svg"
          alt="edit"
        >
      </router-link>

      <DeleteButton :onClick="onDelete"/>
    </header>

    <TodoList
      :items="note.todo"
      :isEditable="false"
    />
  </article>
</template>

<script>
  import TodoList from './TodoList';
  import DeleteButton from './buttons/DeleteButton';

  export default {
    name: 'Note',
    components: {
      TodoList,
      DeleteButton
    },
    props: {
      note: Object,
      onDelete: Function,
      index: Number
    },
  }
</script>

<style scoped>
  .note {
    display: grid;
    grid-row-gap: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid #c1bdbd;
  }

  .note__header {
    display: grid;
    grid-template-columns: 1fr 16px 16px;
    grid-column-gap: 8px;
    align-items: flex-start;
  }

  .note__name {
    padding: 8px;
    font-weight: bold;
  }

  @media screen and (max-width: 599px) {
    .note {
      padding: 0 10px 16px;
    }
  }
</style>
