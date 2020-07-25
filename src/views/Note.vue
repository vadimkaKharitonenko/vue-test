<template>
  <main>
    <header class="header">
      <h2>{{isEdit ? 'Редактирование заметки' : 'Создание заметки'}}</h2>
      <router-link :to="{name: 'Home'}">Вернуться на главную</router-link>
    </header>

    <label class="name">
      <span>Название заметки:</span>
      <input
          class="name__field"
          type="text"
          v-model="note.name"
      >
    </label>

    <TodoList
        :items="note.todo"
        :isEditable="true"
        :onCheck="onCheckTodoList"
        :onDelete="deleteTodo"
    />

    <div class="controls">
      <div class="controls__column">
        <Button
            :onClick="addTodo"
            :type="`accept`"
        >Добавить пункт
        </Button>
      </div>

      <button
          v-if="this.currentSnapshot !== 0"
          class="undo"
          @click="undo"
      >
        <img src="../assets/icons/undo.svg" alt="undo">
      </button>

      <button
          v-if="history.length - 1 !== this.currentSnapshot"
          class="redo"
          @click="redo"
      >
        <img src="../assets/icons/redo.svg" alt="redo">
      </button>

      <Button
          v-if="isEdit"
          :onClick="() => this.deleteConfirmIsShown = true"
          :type="`cancel`"
      >Удалить
      </Button>

      <Button
          :onClick="() => this.confirmCancelIsShown = true"
          :type="`cancel`"
      >Отменить
      </Button>

      <Button
          :onClick="saveNote"
          :type="`accept`"
      >Сохранить
      </Button>
    </div>

    <Confirm
        v-if="confirmCancelIsShown"
        :onCancel="() => this.confirmCancelIsShown = false"
        :onSubmit="() => this.$router.push({path: '/'})"
    >Вы уверены?
    </Confirm>

    <Confirm
        v-if="validateError"
        :onCancel="() => this.validateError = false"
        :isNotification="true"
    >Пожалуйста, заполните все поля.
    </Confirm>

    <Confirm
        v-if="deleteConfirmIsShown"
        :onCancel="() => this.deleteConfirmIsShown = false"
        :onSubmit="deleteNote"
    >Вы действительно хотите удалить эту заметку?
    </Confirm>
  </main>
</template>

<script>

  import {store} from '../store';
  import router from '../router';

  import TodoList from '../components/TodoList';
  import Button from '../components/buttons/Button';
  import Confirm from '../components/Confirm';

  export default {
    name: 'Note',
    components: {
      TodoList,
      Button,
      Confirm
    },
    mounted() {
      this.updateHistory();
    },
    data() {
      return {
        isEdit: this.$router.currentRoute.params.id !== undefined,
        note: this.$router.currentRoute.params.id !== undefined
          ? JSON.parse(JSON.stringify(store.getters.getNoteByIndex(this.$router.currentRoute.params.id)))
          : {name: '', todo: []},
        confirmCancelIsShown: false,
        deleteConfirmIsShown: false,
        validateError: false,
        history: [],
        currentSnapshot: 0,
      }
    },
    methods: {
      addTodo() {
        this.note.todo = [...this.note.todo, {name: '', checked: false}];
        this.updateHistory();
      },
      deleteTodo(index) {
        this.note.todo = this.note.todo.filter((_, i) => i !== index);
        this.updateHistory();
      },
      onCheckTodoList(todo) {
        this.note.todo[todo.index].checked = todo.checked;
        this.updateHistory();
      },
      addNote() {
        if (this.validateNote() > 0) return this.validateError = true;
        store.dispatch('createNote', {name: this.note.name, todo: this.note.todo});
        router.push({path: '/'});
      },
      editNote() {
        if (this.validateNote() > 0) return this.validateError = true;
        store.dispatch('editNote', {index: this.$router.currentRoute.params.id, note: this.note});
        router.push({path: '/'});
      },
      saveNote() {
        this.isEdit
          ? this.editNote()
          : this.addNote();
      },
      deleteNote() {
        store.dispatch('deleteNote', {index: this.$router.currentRoute.params.id});
        router.push({path: '/'});
      },
      validateNote() {
        let errors = 0;

        if (!this.note.name) errors++;
        this.note.todo.forEach(todo => !todo.name ? errors++ : {});

        return errors;
      },
      updateHistory() {
        this.history = [...this.history, JSON.parse(JSON.stringify(this.note))];
        this.currentSnapshot = this.history.length - 1;
      },
      undo() {
        if (this.currentSnapshot <= 0) return;
        this.currentSnapshot = this.currentSnapshot - 1;
        this.note = JSON.parse(JSON.stringify(this.history[this.currentSnapshot]));
      },
      redo() {
        if (this.currentSnapshot === this.history.length - 1) return;
        this.currentSnapshot = this.currentSnapshot + 1;
        this.note = JSON.parse(JSON.stringify(this.history[this.currentSnapshot]));
      }
    },
  }

</script>

<style scoped>
  .name {
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-column-gap: 8px;
    margin-bottom: 32px;
  }

  .name__field {
    border-bottom: 1px solid #c1bdbd;
  }

  .controls {
    display: grid;
    grid-template-columns: 1fr repeat(5, max-content);
    grid-column-gap: 8px;
    margin-top: 32px;
  }

  .controls__column {
    margin-right: auto;
  }

  .undo,
  .redo {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .redo {
    margin-right: 16px;
  }

  .undo img,
  .redo img {
    width: 16px;
  }

  @media screen and (max-width: 599px) {
    .controls {
      grid-template-columns: 1fr repeat(2, max-content);
      row-gap: 16px;
      padding: 0 10px;
    }

    .name {
      grid-template-columns: 1fr;
      grid-row-gap: 8px;
      padding: 10px;
    }
  }
</style>
