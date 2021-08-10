<template>
  <h1 class="page-title">{{ title }}</h1>
  <Count />
  <NameLogger />
  <img :src="imageURL" :width="width" :height="height" />
</template>

<script>
import Count from '@/components/Count'
export default {
  name: 'App',
  components: {
    Count,
  },
  data() {
    return {
      title: 'My Shopping Cart',
      width: 300,
      height: 300,
      imageURL:
        'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    }
  },
}
</script>

<style lang="scss">
.page-title {
  text-align: center;
  font-size: 30px;
}
</style>
