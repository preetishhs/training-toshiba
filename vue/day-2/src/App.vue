<template>
  <h1 class="page-title">{{ title }}</h1>
  <div v-if="!showProductDetail" class="product-container">
    <Product
      v-for="item in products"
      :key="item.id"
      :productItem="item"
      @add-item="addToCart"
      @click="showProduct(item)"
    />
  </div>
  <Cart :cartList="cartList" class="cart" />
  <ProductDetail v-if="showProductDetail" :product="selected" />
</template>

<script>
import Product from '@/components/Product'
import ProductDetail from '@/components/ProductDetail'
import Cart from '@/components/Cart'
import { productList } from '@/utils/products'
export default {
  name: 'App',
  components: {
    Product,
    Cart,
    ProductDetail,
  },
  data() {
    return {
      selected: {},
      showProductDetail: false,
      title: 'My Shopping Cart',
      cartList: [],
      products: [],
    }
  },
  mounted() {
    this.products = productList
  },
  methods: {
    addToCart(product) {
      console.log('called')
      this.cartList.push(product)
    },
    showProduct(product) {
      this.selected = product
      this.showProductDetail = true
    },
  },
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
.cart {
  position: absolute;
  right: 0;
  top: 0;
}
.product-card {
  background-color: rgb(180, 180, 180);
}
</style>
