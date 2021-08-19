import { computed } from 'vue'

export function useToastTemp() {
  const getToastMessage = computed(() => 'conflict 2')
  return {
    getToastMessage
  }
}
