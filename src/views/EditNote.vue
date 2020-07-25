<template>
  <main>
    <header class="header">
      <h2>Редактирование заметки</h2>
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
        :onChange="onChangeTodoList"
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

      <Button
          :onClick="onCancel"
          :type="`cancel`"
      >Отменить
      </Button>

      <Button
          :type="`accept`"
      >Сохранить
      </Button>
    </div>

    <Confirm
        v-if="confirmIsShown"
        :onCancel="onCloseConfirm"
        :onSubmit="goToHome"
    >Вы уверены?
    </Confirm>

    <Confirm
        v-if="validateError"
        :onCancel="onCloseNotification"
        :isNotification="true"
    >Пожалуйста, заполните все поля.
    </Confirm>
  </main>
</template>

<script>

  import {store} from '../store';

  import TodoList from '../components/TodoList';
  import Confirm from '../components/Confirm';
  import Button from '../components/buttons/Button';
  import router from '../router';

  export default {
    name: 'EditNote',
    components: {
      TodoList,
      Confirm,
      Button
    },
    data() {
      return {
        note: store.getters.getNoteByIndex(this.$router.currentRoute.params.id),
        confirmIsShown: false,
        validateError: false
      }
    },
    methods: {
      addTodo() {
        return this.note.todo = [...this.note.todo, {name: '', checked: false}];
      },
      deleteTodo(index) {
        return this.note.todo = this.note.todo.filter((_, i) => i !== index);
      },
      onChangeTodoList(todo) {
        if (todo.checked !== undefined) this.note.todo[todo.index].checked = todo.checked;
        if (todo.name) this.note.todo[todo.index].name = todo.name;
      },
      onCancel() {
        this.confirmIsShown = true;
      },
      onCloseConfirm() {
        this.confirmIsShown = false;
      },
      onCloseNotification() {
        this.validateError = false;
      },
      goToHome() {
        return router.push({path: '/'});
      },
    }
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
    grid-template-columns: 1fr repeat(2, max-content);
    grid-column-gap: 8px;
    margin-top: 32px;
  }

  .controls__column {
    margin-right: auto;
  }
</style>
