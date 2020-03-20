<template>
  <div class="voucher-signup">
    <RegisterForm></RegisterForm>
  </div>
</template>

<script>
  // @ is an alias to /src
  import RegisterForm from '@/components/voucher-signup/RegisterForm.vue'

  export default {
    name: 'VoucherSignup',
    components: {
      RegisterForm
    }
  }
</script>
