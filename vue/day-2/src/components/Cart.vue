<template>
  <div class="cart">
    <div class="page-title">Cart</div>
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
          price: 20,
        },
      ],
    },
  },
}
</script>
<style lang="scss" scoped>
.page-title {
  color: red;
}
.cart {
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  width: 300px;
  height: 300px;
}
</style>
