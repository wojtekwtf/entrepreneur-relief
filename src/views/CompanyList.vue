<template>
  <div class="company-list" v-if="currentCity">
    <div class="container">
      <h2 class="move-to-right heading heading--hero">{{ currentCity.city }}</h2>
      <p class="move-to-right copy copy--large">{{ currentCity.description }}</p>

      <div class="company-list__list">
        <BusinessPreview
          v-for="(business, index) in [currentCity.businesses, currentCity.businesses].flat()"
          :key="`${business.name}${index}`"
          :business="business"
        ></BusinessPreview>
      </div>
    </div>
  </div>
</template>

<script>
  import BusinessPreview from '@/components/common/BusinessPreview.vue'

  export default {
    name: 'CompanyList',
    components: {
      BusinessPreview,
    },
    computed: {
      currentCity() {
        if (!this.$route.params.city) {
          return null;
        }

        return this.allData.find(d => d.key === this.$route.params.city);
      }
    },
    data() {
      return {
        allData: [
          {
            city: 'Wroclaw',
            key: 'wroclaw',
            description: 'From fine dining to dancing salsa, Wrocław has the best services to look forward to.',
            businesses: this.$store.state.businesses
          },
          {
            city: 'Warsaw',
            key: 'warsaw',
            description: 'Best vegan city.',
            businesses: this.$store.state.businesses
          }
        ]
      }
    },
  }
</script>

<style lang="scss" scoped>
  .company-list {
    padding: 50px 0 100px;

    &__list {
      display: flex;
      flex-wrap: wrap;
    }
  }

  .move-to-right {
    position: relative;
    left: 14px;
  }
</style>
