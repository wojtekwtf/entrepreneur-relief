<template>
  <div class="search" id="search">
    <div class="container">
      <div class="search-content">
        <div class="search-header flex space-between">
          <div class="search-header-text">
            <p class="copy">City of the week</p>
            <h2 class="heading heading--hero">Wrocław</h2>
            <p class="copy copy--large">From fine dining to dancing salsa, Wrocław has the best services to look forward to.</p>
          </div>
        </div>

        <a class="underline" @click="goToCompanyList('wroclaw')">Explore all</a>

        <div class="search-card__list flex wrap">
          <BusinessPreview
            v-for="business in businesses"
            :key="business.id"
            :business="business"
          ></BusinessPreview>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BusinessPreview from '@/components/common/BusinessPreview.vue'

  export default {
    name: 'Search',
    components: {
      BusinessPreview
    },
    data() {
      return {
        businesses: this.$store.state.businesses
      }
    },
    methods: {
      goToCompanyList(city) {
        this.$router.push({name: 'company-list', params: {city}})
      }
    }
  }
</script>

<style scoped lang="scss">
  .search {
    padding: 100px 0;

    &-content {
      padding: 60px;
    }

    &-header-text {
      max-width: 50%;

      .heading--hero {
        margin-top: 0;
      }
    }

    &-card {
      &__list {
        margin-top: 20px;
      }
    }

    &-see-more {
      margin-top: 20px;
    }
  }
</style>
