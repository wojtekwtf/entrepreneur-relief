<template>
  <div class="hero">
    <div class="rect rect1"></div>
    <div class="rect rect2"></div>
    <div class="rect rect3"></div>
    <div class="rect rect4"></div>
    <div class="container">
      <div class="hero-main">
        <h1 class="heading heading--hero heading--black text-center pink-light">
          Purchase a voucher of your local <br> place and enjoy the service <br> in the future
        </h1>
<!--        <p class="copy copy&#45;&#45;large copy&#45;&#45;white text-center">Pay less for products after coronavirus crisis.</p>-->
<!--        <p class="copy copy&#45;&#45;large copy&#45;&#45;white text-center">Help businesses survive.</p>-->
        <div class="hero-input flex align-center justify-center">
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
          <p class="hero-or copy copy--black">
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
        <a href="#search" class="hero-learn-more pink-light text-center underline">Learn more</a>
      </div>
    </div>
  </div>
</template>

<script>
  import Autocomplete from '@trevoreyre/autocomplete-vue'

  export default {
    name: 'Hero',
    components: {
      Autocomplete
    },
    data() {
      return {
        loadingBusiness: false,
        loadingCity: false,
        businesses: [
          {
            id: 2,
            label: 'La Rosa Nostra'
          },
          {
            id: 3,
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
        console.log(id)
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
  .hero {
    min-height: 600px;
    height: 100%;
    max-height: calc(80vh - 80px);
    background: color(primary-dark);

    color: black;
    position: relative;

    .container {
      min-height: 600px;
      height: 100%;
      max-height: calc(80vh - 80px);
      display: flex;

      h1 {
        margin-top: 0;
      }
    }

    &-main {
      min-height: 600px;
      height: 100%;
      max-height: calc(80vh - 80px);
      margin: 0 auto;
      max-width: 60vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    &-learn-more {
      margin-top: 50px;
      text-decoration: underline;
    }

    &-input {
      margin-top: 30px;
      flex-wrap: wrap;

      .input .autocomplete-input {
        padding-right: 90px;
      }
    }

    &-or {
      margin: 10px 20px;
    }
  }

  .rect {
    position: absolute;
  }

  .rect1 {
    top: -80vh;
    left: -55vw;
    width: 110vw;
    height: 100vh;
    transform: skew(30deg) rotate(150deg);
    border-radius: 50px;
    background: linear-gradient(60deg, color(primary-dark) 0%, color(primary) 100%);
  }

  .rect2 {
    bottom: 10vw;
    right: 1vh;
    width: 30vw;
    height: 40vw;
    transform: skew(-0.14turn, 21deg) rotate(0deg);
    background: linear-gradient(45deg, color(primary-light) 0%, color(primary-dark) 100%);
    border-radius: 50px;
  }

  .rect3 {
    top: 30vh;
    left: 10vw;
    width: 15vw;
    height: 10vw;
    transform: skew(-0.14turn, 21deg) rotate(10deg);
    background: linear-gradient(90deg, color(primary-x-light) 0%, lighten(#FDD886, 1%) 100%);
    border-radius: 1vw;
  }

  .rect4 {
    bottom: 10vw;
    right: 1vh;
    width: 20vw;
    height: 20vw;
    transform: skew(-0.14turn, 21deg) rotate(0deg);
    background-color: transparent;
    border-radius: 50px;
  }

  .loading {
    position: absolute;
    top: 11px;
    height: 20px;
    width: 20px;
    animation: loading 0.5s linear infinite;
  }

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
