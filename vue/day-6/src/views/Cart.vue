<template>
  <div class="cart">
    <h2>Cart</h2>
    <div v-if="!$store.state.cartList.length">No Items in Cart</div>
    <div v-for="(item, i) in $store.state.cartList" :key="i" class="cart-item">
      <div class="item-title">{{ item.title }}</div>
      <div class="price">{{ item.price }}</div>
      <div class="quantity">{{ item.quantity }}</div>
      <button class="remove" @click="removeItem(item)">Remove</button>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations(['REMOVE_CART_ITEM']),
    removeItem(product) {
      this.REMOVE_CART_ITEM(product)
    }
  }
}
</script>
<style lang="scss" scoped>
.cart {
  padding: 10px;
  background: #fff;
  .cart-item {
    display: flex;
    margin: 20px;
  }
  .price {
    margin-left: 20px;
  }
  .quantity {
    margin-left: 20px;
  }
  .remove {
    margin-left: 20px;
  }
}
</style>
