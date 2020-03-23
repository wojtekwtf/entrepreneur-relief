<template>
  <div class="business-preview flex column align-center">
    <div class="business-preview-main flex column align-center justify-center">
      <h4 class="heading heading--primary flex column justify-center text-center"><span>{{ business.name }}</span></h4>
      <div class="business-preview-rating" v-if="business.rating">
        <img src="../../assets/star.svg">
        {{ business.rating.value }} ({{ business.rating.count }})
      </div>
      <p class="copy text-center">{{ business.description }}</p>
    </div>

    <Service
      v-for="service in business.services"
      :key="service.name"
      :service="service"
      :only-price="onlyPrice"
      :on-light="onLight"
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
      },
      onlyPrice: {
        type: Boolean,
        default: false
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
  .business-preview {
    margin: 10px 15px;
    width: calc(100% / 3 - 60px);
    padding: 15px 15px 50px;
    background: color(er-pink);
    min-width: 330px;

    .heading {
      height: 100px;
    }

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
