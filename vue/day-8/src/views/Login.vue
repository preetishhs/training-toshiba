<template>
  <div class="login">
    <h2>{{ t('login.title') }}</h2>
    <div class="item">
      <label> {{ t('login.username') }} </label>
      <input type="text" v-model="user.username" />
    </div>
    <div class="item">
      <label> {{ t('login.password') }}: </label>
      <input type="password" v-model="user.password" />
    </div>
    <div class="item">
      <button @click="login">{{ t('login.title') }}</button>
    </div>
    <div class="item">
      <button @click="signup">{{ t('login.signup') }}</button>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'
export default {
  setup() {
    const router = useRouter()
    const store = useStore()
    const { t } = useI18n()
    const user = ref({
      username: '',
      password: ''
    })
    async function login() {
      await store.dispatch('user/loginUser', user.value)
      router.push({ name: 'home' })
    }
    function signup() {
      router.push({ name: 'signup' })
    }
    return {
      user,
      login,
      signup,
      t
    }
  }
  // data() {
  //   return {
  //     user: {
  //       username: '',
  //       password: ''
  //     }
  //   }
  // },
  // methods: {
  //   async login() {
  //     console.log('called')
  //     await this.$store.dispatch('user/loginUser', this.user)
  //     this.$router.push({ name: 'home' })
  //   },
  //   signup() {
  //     this.$router.push({name:'signup'})
  //   }
  // }
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
