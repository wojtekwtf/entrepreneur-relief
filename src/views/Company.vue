<template>
  <div class="company">
    <CompanyInfo></CompanyInfo>
  </div>
</template>

<script>
  import CompanyInfo from '@/components/company/CompanyInfo.vue'

  export default {
    name: 'Company',
    components: {
      CompanyInfo
    }
  }
</script>
