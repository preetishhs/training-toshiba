<template>
  <select v-model="$i18n.locale">
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
        }
      ]
    }
  }
}
</script>
