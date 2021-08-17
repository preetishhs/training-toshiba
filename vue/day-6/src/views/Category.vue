<template>
  <div class="product-list">
    <router-link
      v-for="item in products"
      :key="item.id"
      :to="{ name: 'product', params: { productId: item.id } }"
      custom
      v-slot="{ navigate }"
    >
      <Product :productItem="item" @click="navigate" />
    </router-link>
  </div>
</template>
<script>
import { getProductInCategory } from '@/services/product'
import Product from '@/components/Product'
export default {
  name: 'Category',
  components: {
    Product
  },
  data() {
    return {
      categoryName: '',
      products: []
    }
  },
  watch: {
    $route: {
      handler() {
        console.log('triggered')
        this.getProducts()
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    async getProducts() {
      this.categoryName = this.$route.params.categoryName
      this.products = await getProductInCategory({
        category: this.categoryName
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
