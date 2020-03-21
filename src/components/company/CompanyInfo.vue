<template>
  <div>
    <div class="company-header flex">
      <!-- Hardcoded, no time for filling photos now :D -->
      <img class="vega-img" src="../../assets/vega.png"/>
      <div class="company-intro flex column">
        <h1 class="header--hero">{{ getOneBusiness.name }}</h1>
        <p class="copy--large">{{ getOneBusiness.description }}</p>
      </div>
    </div>
    <div class="company-about flex">
      <div class="about-text">
        <h1 class="heading--hero">About</h1>
        <p class="copy">{{ getOneBusiness.about }}</p>
      </div>
      <img class="yoga-img" src="../../assets/yoga.png"/>
    </div>
    <div class="services">
      <h1 class="heading--hero">Services</h1>
      <Service
        v-for="service in getOneBusiness.services"
        :key="service.name"
        :service="service"
        on-light="true"
        @set="handleSetActiveOrder(business, service)"
      >
      </Service>
    </div>
  </div>
</template>
<script>

import Business from '@/components/common/Business.vue'
import Service from '@/components/common/Service.vue'

export default {
  name: 'CompanyInfo',
  components: {
    Business,
    Service
  },
  computed: {
    getOneBusiness() {
      return this.$store.getters.getOneBusiness;
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

  .company-header {
    background-color: color(primary);
    height: 643px;
  }

  .vega-img {
    width: 579px;
    height: 318px;
    margin: 100px 0 0 100px;
  }

  .yoga-img {
    width: 320px;
    height: 420px;
    margin: 150px 0 0 100px;  
  }

  .company-intro {
    margin: 100px 100px 0px;
  }

  .company-about {
    height: 800px;
    background-color: color(grey-background);
  }

  .about-text {
    margin: 100px 200px 0px;
    width: 500px;
  }

  .services {
    margin: 0px 200px 100px;
    width: 30%;
  }

</style>
