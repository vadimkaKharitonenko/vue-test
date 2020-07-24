<template>
  <main>
    <header class="header">
      <h2>Создание заметки</h2>
      <router-link :to="{name: 'Home'}">вернутся на главную</router-link>
    </header>

  </main>


</template>

<script>

  export default {
    name: 'CreateNote',
    components: {},
  }

</script>

<style scoped>
  .title {
    display: inline-block;
    width: 100%;
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid #c1bdbd;
  }
</style>
