<template>
  <main>
    <header class="header">
      <h2>Список заметок</h2>
      <router-link :to="{name: 'CreateNote'}">Создать заметку</router-link>
    </header>

    <NoteList :notes="notes"/>
  </main>


</template>

<script>

  import {store} from '../store';

  import NoteList from '../components/NoteList';

  export default {
    name: 'Home',
    components: {
      NoteList
    },
    computed: {
      notes() {
        return store.getters.GET_NOTES;
      }
    }
  }

</script>
