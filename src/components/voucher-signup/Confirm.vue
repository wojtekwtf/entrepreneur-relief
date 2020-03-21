<template>
  <div class="section confirm">
    {{ companyToRegister }}

    CONFIRMED
  </div>
</template>

<script>
export default {
  name: 'Confirm',
  computed: {
    companyToRegister() {
      return this.$store.state.companyToRegister;
    }
  }
}
</script>

<style scoped lang="scss">

</style>
