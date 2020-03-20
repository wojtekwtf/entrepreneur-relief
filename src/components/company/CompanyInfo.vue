<template>
  <div class="section company-info">
    Company info
    <p>{{ details.name }}</p>
  </div>
</template>

<script>
  const details = {
    name: 'Apple'
  };

export default {
  name: 'CompanyInfo',
  data() {
    return {
      details: details
    }
  },
}
</script>

<style scoped lang="scss">

</style>
