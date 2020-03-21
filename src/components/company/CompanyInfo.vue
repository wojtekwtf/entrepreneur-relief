<template>
  <div class="company-info">
    <Business :business="getOneBusiness"></Business>
  </div>
</template>
<script>

import Business from '@/components/common/Business.vue'

export default {
  name: 'CompanyInfo',
  components: {
    Business
  },
  computed: {
    getOneBusiness() {
      return this.$store.getters.getOneBusiness;
    }
  }
}
</script>

<style scoped lang="scss">

</style>
