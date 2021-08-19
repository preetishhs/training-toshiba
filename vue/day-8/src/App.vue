<template>
  <router-link :to="{ name: 'home' }" custom v-slot="{ navigate }">
    <h1 class="page-title" @click="navigate">{{ $t('pageTitle') }}</h1>
  </router-link>
  <Navbar color="red" nav-title="Cat:" />
  <router-view></router-view>
</template>
<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>
<style lang="scss" scoped>
.page-title {
  text-align: center;
  font-size: 30px;
}
</style>
