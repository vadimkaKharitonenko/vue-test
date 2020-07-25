<template>
  <button
    :class="`button button_type_${type}`"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'Button',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      onClick: {
        type: Function,
        default: () => console.log('click')
      }
    },
  }
</script>

<style scoped>
  .button {
    padding: 8px;
    font-family: 'OpenSansLight', sans-serif;
    cursor: pointer;
    color: white;
    border: none;
    border-radius: 4px;
  }

  .button_type_cancel {
    background-color: firebrick;
  }

  .button_type_accept {
    background-color: forestgreen;
  }
</style>
