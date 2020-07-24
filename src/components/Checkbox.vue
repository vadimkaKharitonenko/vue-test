<template>
  <label :class="`checkbox checkbox_disabled_${disabled}`">
    <input
        class="checkbox__input"
        type="checkbox"
        :checked="checked"
    >
    <span class="checkbox__mark"/>

  </label>
</template>

<script>

  export default {
    name: 'Checkbox',
    components: {},
    props: {
      checked: Boolean,
      disabled: Boolean
    },
  }

</script>

<style scoped>
  .checkbox__input {
    display: none;
  }

  .checkbox__mark {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 12px;
    height: 12px;
    border-radius: 4px;
    border: 1px solid #333333;
    cursor: pointer;
  }

  .checkbox__input:checked + .checkbox__mark::before {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 4px;
    background-color: #333333;
  }

  .checkbox_disabled_true {
    pointer-events: none;
  }
</style>
