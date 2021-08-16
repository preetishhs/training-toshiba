<template>
  <router-link :to="{ name: 'home' }" custom v-slot="{ navigate }">
    <h1 class="page-title" @click="navigate">{{ title }}</h1>
  </router-link>
  <Navbar />
  <button @click="navigateToProfile">My Profile</button>
  <router-view></router-view>
</template>
<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components: {
    Navbar
  },
  data() {
    return {
      title: 'My Shopping Cart'
    }
  },
  methods: {
    navigateToProfile() {
      this.$router.replace({ name: 'profile' })
    }
  }
}
</script>
<style lang="scss" scoped>
.page-title {
  text-align: center;
  font-size: 30px;
}
</style>
