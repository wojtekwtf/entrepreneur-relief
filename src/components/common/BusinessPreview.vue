<template>
  <div
    class="business-preview"
  >
    <div class="business-preview-main">
      <h4 class="heading heading--primary">{{ business.name }}</h4>
      <div class="business-preview-rating" v-if="business.rating">
        <img src="../../assets/star.svg">
        {{ business.rating.value }} ({{ business.rating.count }})
      </div>
      <p class="copy">{{ business.description }}</p>
    </div>

    <Service
      v-for="service in business.services"
      :key="service.name"
      :service="service"
      @set="handleSetActiveOrder(business, service)"
    >
    </Service>
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
  .business-preview {
    margin: 10px 15px;
    width: calc(100% / 3 - 60px);
    padding: 30px;
    background: color(er-pink);

    &-logo {
      max-height: 80px;
      width: auto;
    }

    &__list {
      margin-top: 50px;
    }

    &-main {
      margin-bottom: 20px;
    }
  }
</style>
