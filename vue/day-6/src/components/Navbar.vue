<template>
  <div class="nav-container">
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
export default {
  emits: ['selected'],
  data() {
    return {
      categories: [],
      currentCategory: '',
      limit: null
    }
  },
  watch: {
    limit(newVal) {
      this.$emit('selected', {
        category: this.currentCategory,
        limit: newVal
      })
    }
  },
  created() {
    getCategoryList().then((res) => {
      this.categories = res
      this.currentCategory = this.categories[0]
    })
  },
  methods: {
    categorySelected(item) {
      this.currentCategory = item
      this.$emit('selected', {
        category: item,
        limit: this.limit
      })
    }
  }
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
</style>
