import { mapState } from 'vuex'
export default {
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
