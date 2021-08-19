<template>
  <div class="nav-container" :style="`background:${color}`">
    <div class="navbar">
      <div
        v-for="item in categories"
        :key="item"
        class="nav-item"
        @click="categorySelected(item)"
      >
        <router-link :to="{ name: 'category', params: { categoryName: item } }">
          {{ item }}
        </router-link>
      </div>
      <div class="nav-item">
        <router-link :to="{ name: 'cart' }"> Cart </router-link>
      </div>
      <div class="buttons">
        <button @click="navigateToProfile">My Profile</button>
        <button v-if="!isLoggedIn" @click="login">Login</button>
        <button v-else @click="logout">Logout</button>
        <LocaleSwitcher />
      </div>
    </div>
    <div class="filter-container">
      <select v-model="limit">
        <option default>Limit</option>
        <option :value="2">2</option>
        <option :value="4">4</option>
        <option :value="100">100</option>
      </select>
    </div>
  </div>
</template>
<script>
import { getCategoryList } from '@/services/product'
import { ref, computed, watch, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import LocaleSwitcher from '@/components/LocaleSwitcher'
export default {
  components: {
    LocaleSwitcher
  },
  emits: ['selected'],
  props: {
    color: {
      required: false,
      default: 'transparent'
    },
    navTitle: {
      required: false,
      default: ''
    }
  },
  setup(props, { emit }) {
    const store = useStore()
    const router = useRouter()

    // category related
    const categories = ref([])
    const currentCategory = ref('')
    getCategoryList().then((res) => {
      categories.value = res
      categories.value = categories.value.map((item) => {
        return props.navTitle + item
      })
      currentCategory.value = categories.value[0]
    })
    function categorySelected(item) {
      currentCategory.value = item
      emit('selected', {
        category: item,
        limit: limit.value
      })
    }
    // ***

    // limit related
    const limit = ref(null)
    const isLoggedIn = computed(() => {
      return store.state.user.isLoggedIn
    })
    watch('limit', (newVal) => {
      emit('selected', {
        category: currentCategory.value,
        limit: newVal
      })
    })
    // ***

    // navigation related
    function navigateToProfile() {
      router.replace({ name: 'profile' })
    }
    function login() {
      router.push({ name: 'login' })
    }
    function logout() {
      store.dispatch('user/logoutUser')
    }
    // ***

    onMounted(() => {
      console.log('Mounted hook called')
    })

    return {
      categories,
      categorySelected,
      navigateToProfile,
      isLoggedIn,
      login,
      logout
    }
  }
  // data() {
  //   return {
  //     categories: [],
  //     currentCategory: '',
  //     limit: null
  //   }
  // },
  // computed: {
  //   ...mapState('user', ['isLoggedIn'])
  // },
  // watch: {
  //   limit(newVal) {
  //     this.$emit('selected', {
  //       category: this.currentCategory,
  //       limit: newVal
  //     })
  //   }
  // },
  // created() {
  //   getCategoryList().then((res) => {
  //     this.categories = res
  //     this.currentCategory = this.categories[0]
  //   })
  // },
  // methods: {
  //   ...mapActions('user', ['logoutUser']),
  //   categorySelected(item) {
  //     this.currentCategory = item
  //     this.$emit('selected', {
  //       category: item,
  //       limit: this.limit
  //     })
  //   },

  //   navigateToProfile() {
  //     this.$router.replace({ name: 'profile' })
  //   },
  //   login() {
  //     this.$router.push({ name: 'login' })
  //   },
  //   logout() {
  //     this.logoutUser()
  //   }
  // }
}
</script>
<style lang="scss" scoped>
.nav-container {
  display: flex;
  justify-content: space-around;
}
.navbar {
  display: flex;
  margin: 20px;
}
.nav-item {
  padding: 20px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: underline;
}
.buttons {
  margin-left: 50px;
  display: flex;
  align-items: center;
  button {
    margin-right: 20px;
  }
}
</style>
