<template>
  <div>Count: {{ count }}</div>
  <div>Double Count: {{ count * 2 }}</div>
  <div>Multiples of 5: {{ multipleOfFive }}</div>
  <button @click="increment">Increment</button>
  <button @click="decrement">Decrement</button>
</template>
<script>
export default {
  name: 'Count',
  data() {
    return {
      count: 0
    }
  },
  computed: {
    multipleOfFive() {
      if (this.count % 5 === 0) {
        return 'Yes'
      } else {
        return 'No'
      }
    }
  },
  watch: {
    count(newVal, oldVal) {
      console.log('Watch: ', newVal, oldVal)
      if (newVal === 3) {
        alert('Max quantity exceeded')
      }
    },
    multipleOfFive(newVal) {
      if (newVal === 'Yes') {
        alert('Multiple of 5 detected')
      }
    }
  },
  methods: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  }
}
</script>
