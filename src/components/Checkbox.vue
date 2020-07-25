<template>
  <label :class="`checkbox checkbox_disabled_${disabled}`">
    <input
        class="checkbox__input"
        type="checkbox"
        @change="e => onChange(e.target.checked)"
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
      disabled: Boolean,
      onChange: Function
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
    width: 16px;
    height: 16px;
    border-radius: 4px;
    border: 1px solid #333333;
    cursor: pointer;
  }

  .checkbox__input:checked + .checkbox__mark {
    border-color: forestgreen;
  }

  .checkbox__input:checked + .checkbox__mark::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 4px;
    background-color: forestgreen;
  }

  .checkbox_disabled_true {
    pointer-events: none;
  }
</style>
