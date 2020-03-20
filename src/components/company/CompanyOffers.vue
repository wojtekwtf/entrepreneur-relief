<template>
  <div class="section company-offers">
    Company offers

    <div v-for="item in items">
      {{ item.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompanyOffers',
}
</script>

<style scoped lang="scss">

</style>
