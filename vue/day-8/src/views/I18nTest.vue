<template>Litres: {{ $n(getFormatted, 'liquidMeasurement') }}</template>
<script>
export default {
  data() {
    return {
      litres: 1000000
    }
  },
  computed: {
    getFormatted() {
      if (this.$i18n.locale === 'en') {
        return this.litres
      } else if (this.$i18n.locale === 'fr') {
        return this.litres / 1000
      }
      return this.litres
    }
  }
}
</script>
