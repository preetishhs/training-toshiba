<template>
  <h1 class="page-title">{{ title }}</h1>
  <Navbar @selected="filterProducts" />
  <button @click="showPage = 'profile'">My Profile</button>
  <div v-show="showPage === 'products'" class="product-container">
    <Product
      v-for="item in products"
      :key="item.id"
      :productItem="item"
      @add-item="addToCart"
      @click="showProduct(item)"
      @delete-item="deleteItem"
    />
  </div>

  <ProductDetail
    v-if="showPage === 'productItem'"
    :product-id="selected.id"
    v-model:show="showPage"
  />
  <Profile v-if="showPage === 'profile'" />
  <modal v-if="showCart" @closed="showCart = false">
    <template v-slot:header="{ fallback }"> {{ fallback }} </template>
    <Cart :cartList="cartList" />
    <template v-slot:footer>
      <button>Proceed to Checkout</button>
    </template>
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
import Modal from '@/components/Modal'
import SignUp from '@/components/SignUp'
import Navbar from '@/components/Navbar'
import Profile from '@/components/Profile'
import {
  fetchProducts,
  getProductInCategory,
  deleteProduct
} from '@/services/product'

export default {
  name: 'App',
  components: {
    Product,
    Cart,
    ProductDetail,
    Modal,
    SignUp,
    Navbar,
    Profile
  },
  data() {
    return {
      selected: {},
      showCart: false,
      showSignUp: false,
      showPage: 'products',
      title: 'My Shopping Cart',
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
      this.selected = product
      this.showPage = 'productItem'
    },
    filterProducts(filter) {
      getProductInCategory(filter).then((res) => {
        this.products = res
      })
    },
    deleteItem(id) {
      deleteProduct(id).then(() => {
        this.products = this.products.filter((item) => {
          return item.id !== id
        })
      })
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
