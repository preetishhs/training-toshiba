<template>
  <div class="product-card">
    <img :src="productItem.image" class="product-img" />
    <p class="product-title">{{ productItem.title }}</p>
    <p class="product-price">{{ productItem.price }}</p>
    <button @click.stop="addToCart">Add to Cart</button>
    <button @click.stop="deleteProduct">Delete</button>
  </div>
</template>
<script>
export default {
  props: {
    productItem: {
      type: Object,
      required: true
    }
  },
  emits: ['addItem', 'deleteItem'],
  methods: {
    addToCart() {
      this.$emit('addItem', this.productItem)
    },
    deleteProduct() {
      this.$emit('deleteItem', this.productItem.id)
    }
  }
}
</script>
<style lang="scss">
.product-card {
  width: 300px;
  height: 400px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 20px;
  margin: 20px;
  .product-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  .product-title {
    font-size: 24px;
    text-align: center;
    margin-top: 10px;
  }
  .product-price {
    font-size: 30px;
    font-weight: bold;
    margin-top: 10px;
  }
}
</style>
