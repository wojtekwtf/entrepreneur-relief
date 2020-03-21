<template>
  <div class="order-confirm">
    {{ activeOrder }}
  </div>
</template>

<script>
export default {
  name: 'OrderConfirm',
  computed: {
    activeOrder() {
      return this.$store.state.activeOrder;
    }
  }
}
</script>

<style scoped lang="scss">

</style>
