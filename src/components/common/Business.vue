<template>
  <div class="flex justify-center">
    <img v-if="image" src="../../assets/asfalt-inside.png" />
    <div class="business flex">
      <div class="business flex column align-center justify-center">
        <p class="copy text-center copy--prelabel" v-if="prelabel">New to the platform</p>
        <h4 class="heading--hero text-center">{{ business.name }} </h4>
        <p class="description copy--large justify-center text-center">{{ business.description }} </p>
        <div class="services">
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
      },
      prelabel: {
        type: Boolean,
        default: true
      },
      image: {
        type: Boolean,
        default: true
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
    width: 100%;
    margin: 0 20px;

    @include lg-up {
      width: 60%;
      margin: 0 100px;
    }
  }

  .services {
    width: 270px;
  }

  img {
    width: 40%;
    margin-left: auto;
    display: none;

    @include md-up {
      display: block;
    }
  }
</style>
