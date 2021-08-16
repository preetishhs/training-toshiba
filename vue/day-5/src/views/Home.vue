<template>
  <div class="product-container">
    <Product
      v-for="item in products"
      :key="item.id"
      :productItem="item"
      @add-item="addToCart"
      @click="showProduct(item)"
    />
  </div>
  <modal v-if="showCart" @closed="showCart = false">
    <template v-slot:header="{ fallback }"> {{ fallback }} </template>
    <Cart :cartList="cartList" />
    <template v-slot:footer>
      <button>Proceed to Checkout</button>
    </template>
  </modal>
</template>

<script>
import Product from '@/components/Product'
import Cart from '@/components/Cart'
import Modal from '@/components/Modal'
import { fetchProducts } from '@/services/product'

export default {
  name: 'Home',
  components: {
    Product,
    Cart,
    Modal
  },
  data() {
    return {
      showCart: false,
      cartList: [],
      products: []
    }
  },
  created() {
    fetchProducts().then((res) => {
      this.products = res
    })
  },
  methods: {
    addToCart(product) {
      console.log('called')
      this.cartList.push(product)
      this.showCart = true
    },
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
