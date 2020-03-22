<template>
  <div class="search" id="search">
    <div class="circle circle1"></div>
    <div class="circle circle2"></div>
    <div class="container">
      <div class="search-content">
        <div class="search-header flex space-between">
          <div class="search-header-text">
            <p class="copy copy--prelabel">City of the week</p>
            <h2 class="heading heading--hero">Wrocław</h2>
            <p class="copy copy--large">From fine dining to dancing salsa, Wrocław has the best services to look forward to.</p>
          </div>
        </div>

        <a class="copy copy--underline-color" @click="goToCompanyList('wroclaw')">Explore all</a>

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
    padding: 0 0 100px;
    position: relative;

    &-content {
      @include md-up {
        padding: 0 60px;
      }
    }

    &-header-text {
      @include md-up {
        max-width: 50%;
      }

      .heading--hero {
        margin-top: 0;
      }
    }

    &-card {
      &__list {
        margin-top: 20px;

        .business-preview {
          min-width: 330px;
          margin: 10px 0;

          &:nth-of-type(2) {
            @include xs-up {
              margin: 10px 30px;
            }
          }
        }
      }
    }

    &-see-more {
      margin-top: 20px;
    }

    .circle {
      position: absolute;
      border-radius: 50%;
    }

    .circle1 {
      height: 100px;
      width: 100px;
      background: color(light-blue);
      right: 400px;
      top: 0;
      display: none;

      @include md-up {
        display: block;
      }
    }

    .circle2 {
      height: 1000px;
      width: 1000px;
      background: color(primary);
      top: -50px;
      right: -600px;
      display: none;

      @include md-up {
        display: block;
      }
    }
  }
</style>
