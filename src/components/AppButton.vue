<template>
  <button @click="handleClick" :class="buttonClass">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    onClick: {
      type: Function,
      required: true
    },
    buttonClass: {
      type: String,
      default: 'button'
    }
  },
  methods: {
    handleClick() {
      this.onClick();
    }
  }
};
</script>
