<template>
  <div class="product-detail" v-if="product">
    <div class="img-desc">
      <img :src="product.image" width="300" height="300" />
      <div class="description">
        <h3>{{ product.title }}</h3>
        {{ product.description }}
      </div>
    </div>
    <div class="tabs-container">
      <div
        :class="classObj('Features')"
        class="random"
        :style="{ background: green }"
        @click="changeTab('Features')"
      >
        Features
      </div>
      <div :class="classObj('Specs')" @click="changeTab('Specs')">Specs</div>
      <div
        :class="classObj('Review')"
        :style="tabStyles"
        @click="changeTab('Review')"
      >
        Reviews
      </div>
    </div>
    <div class="content">
      <component :is="currentComponent"></component>
    </div>
    <button @click="goBack">Back</button>
  </div>
</template>
<script>
import Specs from '@/components/Specs'
import Review from '@/components/Review'
import Features from '@/components/Features'
import { fetchProductItem } from '@/services/product'
export default {
  components: {
    Specs,
    Review,
    Features
  },
  data() {
    return {
      product: null,
      productId: '',
      green: 'green',
      random: '',
      tabStyles: {
        background: 'red',
        'font-style': 'italic'
      },
      currentComponent: 'Features'
    }
  },
  created() {
    this.productId = this.$route.params.productId
    fetchProductItem(this.productId).then((res) => {
      if (!res) {
        this.$router.push({ name: 'notFound' })
      }
      this.product = res
    })
  },
  methods: {
    changeTab(comp) {
      this.random = 'hightlight'
      this.currentComponent = comp
    },
    classObj(current) {
      return {
        tab: true,
        active: this.currentComponent === current
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.tabs-container {
  display: flex;
}
.product-detail {
  display: flex;
  flex-flow: column;
  align-items: center;
}
.content {
  width: 600px;
  height: 250px;
  border: 1px solid black;
  margin-top: 10px;
}
.img-desc {
  display: flex;
  max-width: 600px;
  margin: 20px;
  .description {
    margin-left: 20px;
  }
}
.tab {
  width: 150px;
  padding: 10px;
  font-size: 30px;
  &.active {
    text-decoration: underline;
    font-weight: bold;
  }
  &.green {
    color: green;
  }
}
</style>
