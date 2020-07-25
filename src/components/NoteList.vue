<template>
  <div class="note-list">
    <Note
        v-if="notes"
        v-for="(note, index) in notes"
        :index="index"
        :note="note"
        :onDelete="() => setNoteToDelete(index)"
    />

    <p v-if="!notes.length">Нет заметок</p>

    <Confirm
        v-if="noteToDelete !== false"
        :onCancel="() => setNoteToDelete(false)"
        :onSubmit="() => deleteNote(this.noteToDelete)"
    >Вы уверены?
    </Confirm>
  </div>
</template>

<script>

  import {store} from '../store';

  import Note from './Note';
  import Confirm from './Confirm';

  export default {
    name: 'NoteList',
    components: {
      Note,
      Confirm
    },
    props: {
      notes: Array
    },
    data() {
      return {
        noteToDelete: false
      }
    },
    methods: {
      deleteNote(id) {
        store.dispatch('deleteNote', {id});
        this.setNoteToDelete(false);
      },
      setNoteToDelete(index) {
        this.noteToDelete = index;
      }
    }
  }

</script>

<style scoped>
  .note-list {
    display: grid;
    grid-row-gap: 16px;
  }
</style>
