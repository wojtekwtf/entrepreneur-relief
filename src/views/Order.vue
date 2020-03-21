<template>
  <div class="order">
    <OrderConfirm v-if="!paid"></OrderConfirm>
    <OrderFinalised v-else></OrderFinalised>
  </div>
</template>

<script>
  import OrderConfirm from '@/components/order/OrderConfirm.vue'
  import OrderFinalised from '@/components/order/OrderFinalised.vue'

  export default {
    name: 'Order',
    components: {
      OrderConfirm,
      OrderFinalised
    },
    data() {
      return {
        paid: false
      }
    }
  }
</script>
