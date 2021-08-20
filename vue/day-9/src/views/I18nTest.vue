<template>
  Litres: {{ $n(getFormatted, 'liquidMeasurement') }} <br />
  Date1: {{ $d(d1, 'shortDate') }} <br />
  Date2: {{ $d(d1, 'longDate') }} <br />
  Date3: {{ $d(d1, 'time') }} <br />
</template>
<script>
export default {
  data() {
    return {
      litres: 1000000,
      d1: new Date(),
      d2: new Date(),
      d3: new Date()
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
