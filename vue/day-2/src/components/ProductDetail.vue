<template>
  <div class="product-detail" v-if="product">
    <div>
      <img :src="product.image" width="300" height="300" />
      <div class="description">
        {{ product.description }}
      </div>
    </div>
    <div class="tabs-container">
      <button @click="changeTab('Features')">Features</button>
      <button @click="changeTab('Specs')">Specs</button>
      <button @click="changeTab('Review')">Reviews</button>
    </div>
    <div class="content">
      <component :is="currentComponent"></component>
    </div>
  </div>
</template>
<script>
import Specs from '@/components/Specs'
import Review from '@/components/Review'
import Features from '@/components/Features'
export default {
  components: {
    Specs,
    Review,
  },
  props: {
    product: {
      type: Object,
    },
  },
  data() {
    return {
      currentComponent: Features,
    }
  },
  methods: {
    changeTab(comp) {
      this.currentComponent = comp
    },
  },
}
</script>
<style lang="scss" scoped>
.tabs-container {
  display: flex;
}
.content {
  width: 400px;
  height: 400px;
  border: 1px solid black;
  margin-top: 10px;
}
</style>
