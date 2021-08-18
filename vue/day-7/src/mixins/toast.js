import { mapState } from 'vuex'
import Product from '@/components/Product'
export default {
  components: {
    Product
  },
  computed: {
    ...mapState('user', ['user', 'isLoggedIn']),
    getToastMessage() {
      if (this.isLoggedIn) {
        return `Hello! ${this.user.username}! Welcome.`
      } else {
        return `Hello Guest!`
      }
    }
  }
}
