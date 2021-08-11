<template>
  <div class="product-card" v-show="renderCondition">
    <img :src="productItem.image" class="product-img" />
    <p class="product-title">{{ productItem.title }}</p>
    <p class="product-price">{{ productItem.price }}</p>
    <button @click.stop="addToCart">Add to Cart</button>
  </div>
</template>
<script>
export default {
  props: {
    productItem: {
      type: Object,
      required: true,
    },
  },
  emits: ['addItem'],
  computed: {
    renderCondition() {
      return (
        this.productItem.category === `men's clothing` ||
        this.productItem.category === 'jewelery'
      )
    },
  },
  methods: {
    addToCart() {
      this.$emit('addItem', this.productItem)
    },
  },
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
