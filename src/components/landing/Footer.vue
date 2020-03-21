<template>
  <div class="footer-box text-center">
    <div class="flex column">
      <h1 class="heading--hero">Find the local business you wish to support</h1>
      <div class="footer-box__search hero-input flex align-center justify-center">
        <div class="input-wrapper">
          <Autocomplete
            :search="searchBusiness"
            placeholder="Search for a local business..."
            aria-label="Search for a local business..."
            class="input"
            :get-result-value="getResultsValue"
            @submit="handleSubmitBusiness"
            :loading="loadingBusiness"
          ></Autocomplete>
          <img v-if="!loadingBusiness" src="../../assets/icon-search.svg">
          <img v-else class="loading" src="../../assets/loading.svg">
        </div>
        <p class="footer-or copy">
          or
        </p>
        <div class="input-wrapper">
          <Autocomplete
            :search="searchCity"
            placeholder="Search for a city..."
            aria-label="Search for a city..."
            class="input"
            :class="{ 'input--loading': true }"
            :get-result-value="getResultsValue"
            @submit="handleSubmitCity"
            :loading="loadingCity"
          ></Autocomplete>
          <img v-if="!loadingCity" src="../../assets/icon-search.svg">
          <img v-else class="loading" src="../../assets/loading.svg">
        </div>
      </div>
      <div class="footer-box__logo flex row justify-center">
        <img src="../../assets/logo.svg" alt=""/>
        eRelief
      </div>
    </div>
  </div>
</template>

<script>
  import Autocomplete from '@trevoreyre/autocomplete-vue'

  export default {
    name: 'Footer',
    components: {
      Autocomplete
    },
    data() {
      return {
        loadingBusiness: false,
        loadingCity: false,
        businesses: [
          {
            id: 1,
            label: 'La Rosa Nostra'
          },
          {
            id: 2,
            label: 'Factory Energy Yoga'
          }
        ],
        cities: [
          {
            city: 'warsaw',
            label: 'Warsaw'
          },
          {
            city: 'wroclaw',
            label: 'Wrocław'
          }
        ]
      }
    },
    methods: {
      searchBusiness(input) {
        if (input.length < 1) { return [] }
        return this.businesses.filter(business => business.label.toLowerCase().startsWith(input.toLowerCase()));
      },
      searchCity(input) {
        if (input.length < 1) { return [] }
        return this.cities.filter(city => city.label.toLowerCase().startsWith(input.toLowerCase()));
      },
      getResultsValue(result) {
        return result.label;
      },
      handleSubmitBusiness({id}) {
        this.loadingBusiness = true;
        return new Promise(resolve => setTimeout(() => {
          this.$router.push({name: 'company', params: {id}});
          resolve();
        }, 500));
      },
      handleSubmitCity({city}) {
        this.loadingCity = true;
        return new Promise(resolve => setTimeout(() => {
          this.$router.push({name: 'company-list', params: {city}});
          resolve();
        }, 500));
      }
    }
  }
</script>

<style scoped lang="scss">
  .footer-box {
    height: 600px;
    padding: 100px 350px;
    background-color: black;

    &__search {
      padding: 64px;
    }
  }

  .footer-or {
    margin: 0 20px;
  }

  .footer {
    text-align: left;
  }
</style>
