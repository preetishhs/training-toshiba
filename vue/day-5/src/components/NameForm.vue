<template>
  <div>Name: <input v-model="myName" /></div>
  <div>Display: {{ myName }}</div>
</template>
<script>
export default {
  data() {
    return {
      myName: 'John'
    }
  }
}
</script>
