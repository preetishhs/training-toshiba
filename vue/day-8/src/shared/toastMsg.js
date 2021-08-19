import { computed } from 'vue'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'
export function useToast() {
  const store = useStore()
  const { t } = useI18n()
  const user = computed(() => store.state.user.user)
  const isLoggedIn = computed(() => store.state.user.isLoggedIn)
  const getToastMessage = computed(() => {
    if (isLoggedIn.value) {
      return t('toast.loggedIn', { currentUserName: user.value.username })
    } else {
      return t('toast.guest')
    }
  })
  return {
    getToastMessage,
    isLoggedIn,
    user
  }
}
