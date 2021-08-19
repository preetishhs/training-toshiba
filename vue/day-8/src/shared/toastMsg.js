import { computed } from 'vue'
import { useStore } from 'vuex'

export function useToast() {
  const store = useStore()
  const user = computed(() => store.state.user.user)
  const isLoggedIn = computed(() => store.state.user.isLoggedIn)
  const getToastMessage = computed(() => {
    if (isLoggedIn.value) {
      return `Hello! ${user.value.username}! Welcome.`
    } else {
      return `Hello Guest!`
    }
  })
  return {
    getToastMessage,
    isLoggedIn,
    user
  }
}
