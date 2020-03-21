<template>
  <div class="flex">
    <div class="business-description">
      <div class="business-texts flex column align-center justify-center">
        <h4 class="heading heading--hero">{{ business.name }} </h4>
        <h4 class="copy copy--large">{{ business.description }} </h4>
      </div>
    </div>
    <div class="business-services">
      <Service
        v-for="service in business.services"
        :key="service.name"
        :service="service"
        :on-light="true"
        @set="handleSetActiveOrder(business, service)"
      >
      </Service>
    </div>
  </div>
</template>

<script>
  import Service from '@/components/common/Service.vue'

  export default {
    name: 'Business',
    components: {
      Service
    },
    props: {
      business: {
        type: Object,
        default: () => ({})
      },
      onLight: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      handleSetActiveOrder(business, service) {
        this.$store.commit('setActiveOrder', {
          business,
          chosenService: service
        });
        this.$router.push({ name: 'order' })
      }
    }
  }
</script>

<style scoped lang="scss">
  .business {
    &-services,
    &-description {
      width: 50%;
      margin-right: 50px;
    }

    &-texts {
      max-width: 500px;
      margin-left: auto
    }

    &-services {
      width: 300px;
      margin: 0 auto;
    }
  }
</style>
