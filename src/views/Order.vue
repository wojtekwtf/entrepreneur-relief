<template>
  <div class="order">
    <OrderConfirm></OrderConfirm>
  </div>
</template>

<script>
  // @ is an alias to /src
  import OrderConfirm from '@/components/order/OrderConfirm.vue'

  export default {
    name: 'Order',
    components: {
      OrderConfirm
    }
  }
</script>
