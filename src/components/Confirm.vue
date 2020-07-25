<template>
  <div class="confirm">
    <div class="confirm__modal">
      <p class="confirm__question">
        <slot></slot>
      </p>
      <div class="confirm__controls">
        <Button
            v-if="!isNotification"
            :onClick="onSubmit"
            :type="`accept`"
        >Да
        </Button>

        <Button
            v-if="!isNotification"
            :onClick="onCancel"
            :type="`cancel`"
        >Нет
        </Button>

        <Button
            v-if="isNotification"
            :onClick="onCancel"
            :type="`accept`"
        >ОК
        </Button>
      </div>
    </div>
  </div>
</template>

<script>

  import Button from './buttons/Button';

  export default {
    name: 'Confirm',
    components: {
      Button
    },
    props: {
      onCancel: Function,
      onSubmit: Function,
      isNotification: Boolean
    },
    methods: {}
  }

</script>

<style scoped>
  .confirm {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, .5);
  }

  .confirm__modal {
    display: grid;
    grid-row-gap: 24px;
    width: 300px;
    padding: 16px;
    border-radius: 8px;
    background-color: white;
  }

  .confirm__question {
    text-align: center;
  }

  .confirm__controls {
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 8px;
  }
</style>
