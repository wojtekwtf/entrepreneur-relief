<template>
  <div class="company-info">
    <Business></Business>
  </div>
</template>
<script>

// :business="business"
import Business from '@/components/common/Business.vue'

export default {
  name: 'CompanyInfo',
  components: {
    Business
  },
  computed: {
    getOneBusiness() {
      return this.$store.state.getOneBusiness;
    }
  }
  // WOJTEK https://vuex.vuejs.org/guide/getters.html use computed here to use getter from store and access the getOneBusiness getter.
  // Then use it in template in Business component. You can find how to import a component in almost every other view.
  // On this view, it should be possible to already click when you implement
}
</script>

<style scoped lang="scss">

</style>
