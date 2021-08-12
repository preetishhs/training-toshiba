<template>
  <h1 class="page-title">{{ title }}</h1>
  <div v-show="!showProductDetail" class="product-container">
    <Product
      v-for="item in products"
      :key="item.id"
      :productItem="item"
      @add-item="addToCart"
      @click.right.ctrl="showProduct(item)"
    />
  </div>

  <ProductDetail
    v-if="showProductDetail"
    :product="selected"
    v-model:show="showProductDetail"
  />
  <modal v-if="showCart" @closed="showCart = false">
    <template v-slot:header="{ fallback }"> {{ fallback }} </template>
    <Cart :cartList="cartList" />
    <template v-slot:footer>
      <button>Proceed to Checkout</button>
    </template>
    Test
  </modal>
  <modal
    v-if="showSignUp"
    @closed="showSignUp = false"
    :width="900"
    :height="800"
  >
    <SignUp />
  </modal>
</template>

<script>
import Product from '@/components/Product'
import ProductDetail from '@/components/ProductDetail'
import Cart from '@/components/Cart'
import { productList } from '@/utils/products'
import Modal from '@/components/Modal'
import SignUp from '@/components/SignUp'
export default {
  name: 'App',
  components: {
    Product,
    Cart,
    ProductDetail,
    Modal,
    SignUp
  },
  data() {
    return {
      selected: {},
      showCart: false,
      showSignUp: false,
      showProductDetail: false,
      title: 'My Shopping Cart',
      cartList: [],
      products: []
    }
  },
  mounted() {
    this.products = productList
  },
  methods: {
    addToCart(product) {
      console.log('called')
      this.cartList.push(product)
      this.showCart = true
    },
    showProduct(product) {
      this.selected = product
      this.showProductDetail = true
    }
  }
}
</script>

<style lang="scss" scoped>
.page-title {
  text-align: center;
  font-size: 30px;
}
.product-container {
  display: flex;
  flex-wrap: wrap;
}
.product-card {
  background-color: #d1d1d1;
}
</style>
