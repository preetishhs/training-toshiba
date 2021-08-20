<template>
  <select v-model="currentLang">
    <option v-for="lang in langs" :key="lang.code" :value="lang.code">
      {{ lang.name }}
    </option>
  </select>
</template>
<script>
export default {
  data() {
    return {
      langs: [
        {
          name: 'English',
          code: 'en'
        },
        {
          name: 'French',
          code: 'fr'
        },
        {
          name: 'English(US)',
          code: 'en-US'
        }
      ]
    }
  },
  computed: {
    currentLang: {
      get() {
        return this.$store.state.lang.selectedLocale
      },
      set(newVal) {
        this.$i18n.locale = newVal
        this.$store.dispatch('lang/setLocale', newVal)
      }
    }
  },
  created() {
    this.$i18n.locale = this.$store.state.lang.selectedLocale
  }
}
</script>
