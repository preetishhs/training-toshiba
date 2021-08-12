<template>
  <div class="cart">
    <div v-if="cartList.length">No Items in Cart</div>
    <div v-for="(item, i) in cartList" :key="i" class="cart-item">
      <div class="item-title">{{ item.title }}</div>
      <div class="price">{{ item.price }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    cartList: {
      type: Array,
      required: false,
      default: () => [
        {
          title: 'Some title',
          price: 20
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.cart {
  padding: 10px;
  background: #fff;
}
</style>
