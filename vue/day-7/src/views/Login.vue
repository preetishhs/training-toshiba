<template>
  <div class="login">
    <h2>Login</h2>
    <div class="item">
      <label> Username: </label>
      <input type="text" v-model="user.username" />
    </div>
    <div class="item">
      <label> Password: </label>
      <input type="password" v-model="user.password" />
    </div>
    <div class="item">
      <button @click="login">Login</button>
    </div>
    <div class="item">
      <button @click="signup">Sign Up</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async login() {
      console.log('called')
      await this.$store.dispatch('user/loginUser', this.user)
      this.$router.push({ name: 'home' })
    },
    signup() {
      this.$router.push('signup')
    }
  }
}
</script>
<style lang="scss" scoped>
.login {
  margin: 20px;
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
  .item {
    display: flex;
    margin: 10px;
    label {
      width: 120px;
    }
  }
}
</style>
