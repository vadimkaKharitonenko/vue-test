<template>
  <div class="note-list">
    <Note
        v-if="notes"
        v-for="note in notes"
        :note="note"
    />

    <p v-if="!notes.length">Нет заметок</p>
  </div>
</template>

<script>

  import Note from './Note';

  export default {
    name: 'NoteList',
    components: {
      Note
    },
    props: {
      notes: Array
    },
  }

</script>

<style scoped>
  .note-list {
    display: grid;
    grid-row-gap: 16px;
  }
</style>
