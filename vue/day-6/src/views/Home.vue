<template>
  <div class="product-container">
    <Product
      v-for="item in filterdProducts"
      :key="item.id"
      :productItem="item"
      @click="showProduct(item)"
    />
  </div>
</template>

<script>
import Product from '@/components/Product'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Home',
  components: {
    Product
  },
  computed: {
    ...mapGetters(['filterdProducts'])
  },
  created() {
    this.getProductList()
  },
  methods: {
    ...mapActions(['getProductList']),
    showProduct(product) {
      this.$router.push({ name: 'product', params: { productId: product.id } })
    }
  }
}
</script>

<style lang="scss" scoped>
.product-container {
  display: flex;
  flex-wrap: wrap;
}
.product-card {
  background-color: #d1d1d1;
}
</style>
