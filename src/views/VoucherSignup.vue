<template>
  <div class="voucher-signup">
    <RegisterForm v-if="!$route.query.sent"></RegisterForm>
    <Confirm v-else></Confirm>
  </div>
</template>

<script>
  import RegisterForm from '@/components/voucher-signup/RegisterForm.vue'
  import Confirm from '@/components/voucher-signup/Confirm.vue'

  export default {
    name: 'VoucherSignup',
    components: {
      RegisterForm,
      Confirm
    }
  }
</script>
