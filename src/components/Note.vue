<template>
  <article class="note">
    <p v-if="isEditable">Режим редактирования</p>
    <header class="note__header">
      <input
          class="note__name"
          type="text"
          :value="note.name"
      />
      <button
          class="note__edit"
          @click="toggleEditable"
      >
        <img
            v-if="!isEditable"
            src="../assets/icons/edit.svg"
            alt="edit"
        >
      </button>
      <button class="note__delete"/>
    </header>

    <TodoList
        :items="note.todo"
        :isEditable="isEditable"
    />
  </article>
</template>

<script>

  import TodoList from './TodoList';

  export default {
    name: 'Note',
    components: {
      TodoList
    },
    props: {
      note: Object,
    },
    data() {
      return {
        isEditable: false
      }
    },
    methods: {
      toggleEditable() {
        this.isEditable = !this.isEditable;
      }
    }
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
    font-weight: bold;
  }

  .note__edit {
    margin-top: 4px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .note__delete {
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

  .note__delete::before,
  .note__delete::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 8px;
    background-color: white;
    transform: rotate(-45deg);
  }

  .note__delete::after {
    transform: rotate(45deg);
  }
</style>
