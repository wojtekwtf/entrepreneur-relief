<template>
  <div class="voucher-signup">
    <RegisterForm></RegisterForm>
  </div>
</template>

<script>
  import RegisterForm from '@/components/voucher-signup/RegisterForm.vue'

  export default {
    name: 'VoucherSignup',
    components: {
      RegisterForm
    }
  }
</script>
