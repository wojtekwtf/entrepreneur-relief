<template>
  <div class="company-info flex column align-center justify-center">
    <Business
      :business="getOneBusiness"
      :on-light="true"
      :prelabel="false"
      :image="false"
    ></Business>
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
  },
  methods: {
      handleSetActiveOrder(business, service) {
        this.$store.commit('setActiveOrder', {
          business,
          chosenService: service
        });
        this.$router.push({ name: 'order' })
      }
    }
  }
</script>

<style scoped lang="scss">
  .company-info {
    min-height: calc(100vh - 80px - 298px);
  }
</style>
