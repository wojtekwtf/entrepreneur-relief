<template>
  <div class="company">
    <CompanyInfo></CompanyInfo>
    <CompanyOffers></CompanyOffers>
  </div>
</template>

<script>
  // @ is an alias to /src
  import CompanyOffers from '@/components/company/CompanyOffers.vue'
  import CompanyInfo from '@/components/company/CompanyInfo.vue'

  export default {
    name: 'Company',
    components: {
      CompanyInfo,
      CompanyOffers
    }
  }
</script>
