<template>
  <div class="container">
    <div class="modal" :style="`width: ${width}px; height: ${height}px`">
      <div class="close" @click="close">X</div>
      <h3 class="title">
        <slot name="header" :fallback="defaultTitle"> </slot>
      </h3>
      <div class="content">
        <slot></slot>
      </div>
      <div class="footer">
        <slot name="footer"> </slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  emits: ['closed'],
  props: {
    width: {
      type: Number,
      default: 300
    },
    height: {
      type: Number,
      default: 400
    }
  },
  data() {
    return {
      defaultTitle: 'Confirm'
    }
  },
  methods: {
    close() {
      this.$emit('closed', true)
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  width: 300px;
  height: 400px;
  background: white;
  border: 2px solid black;
  border-radius: 4px;
  padding: 10px;
  position: relative;
}
.close {
  position: absolute;
  right: 10px;
  top: 10px;
}
.content {
  margin: 20px;
  height: 200px;
}
</style>
