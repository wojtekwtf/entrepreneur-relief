<template>
  <div class="confirm">
    <h1 class="heading heading--primary">Great!</h1>
    <p class="copy copy--large">You signed up for eRelief!</p>

    <p class="copy">Here are the details of your registration</p>

    <div class="confirm-details flex column align-center">
      <img class="confirm-logo" :src="companyToRegister.logo" alt="">

      <p class="copy">Name: <span class="copy--bold">
        {{ companyToRegister.name }}
      </span></p>
      <p class="copy">Description: <span class="copy--bold">
        {{ companyToRegister.description }}
      </span></p>
      <p class="copy">Website: <span class="copy--bold">
        {{ companyToRegister.website }}
      </span></p>
      <p class="copy">Email: <span class="copy--bold">
        {{ companyToRegister.email }}
      </span></p>

      <Service
        v-for="service in companyToRegister.services"
        :key="service.name"
        :service="service"
        :on-light="true"
      >
      </Service>
    </div>
  </div>
</template>

<script>
  import Service from '@/components/common/Service.vue'

  export default {
    name: 'Confirm',
    components: {
      Service
    },
    computed: {
      companyToRegister() {
        return this.$store.state.companyToRegister;
      }
    }
  }
</script>

<style scoped>
  .confirm {
    padding-top: 20px;
  }

  .confirm-logo {
    max-height: 80px;
    width: auto;
  }

  .confirm-details {
    width: 250px;
    margin-top: 40px;
  }
</style>
