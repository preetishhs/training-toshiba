<template>
  <!-- <div class="toast">{{ getToastMessage }}</div> -->
  <h2>{{ $tc('products', filterdProducts.length) }}</h2>
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
import { mapState, mapGetters, mapActions } from 'vuex'
import Product from '@/components/Product'
// import { useToast } from '@/shared/toastMsg'
export default {
  name: 'Home',
  // setup() {
  //   const { getToastMessage } = useToast()
  //   return {
  //     getToastMessage
  //   }
  // },
  components: {
    Product
  },
  computed: {
    ...mapState('product', ['timestamp']),
    ...mapGetters('product', ['filterdProducts'])
  },
  created() {
    if (!this.filterdProducts.length) {
      this.getProductList()
    } else {
      let current = new Date()
      let storedDate = new Date(this.timestamp)
      console.log(storedDate, current)
      if (storedDate.getHours() + 2 < current.getHours()) {
        this.getProductList()
      }
    }
  },
  methods: {
    ...mapActions('product', ['getProductList']),
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
