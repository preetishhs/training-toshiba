<template>
  <div class="profile">
    <div class="nav-profile">
      <router-link :to="{ name: 'personal' }">
        <div class="nav-item">Personal</div>
      </router-link>
      <router-link :to="{ name: 'privacy' }">
        <div class="nav-item">Privacy</div>
      </router-link>
      <router-link :to="{ name: 'settings' }">
        <div class="nav-item">Settings</div>
      </router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.profile {
  display: flex;
}
.nav-profile {
  width: 200px;
  text-align: center;
  margin: 30px;
}
.nav-item {
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 24px;
  background: rgb(224, 224, 224);
  border-bottom: 1px solid grey;
  &:hover {
    background: grey;
  }
}
.content {
  border: 1px solid grey;
  width: 600px;
  height: 600px;
}
.router-link-exact-active {
  .nav-item {
    background: grey;
  }
}
</style>
