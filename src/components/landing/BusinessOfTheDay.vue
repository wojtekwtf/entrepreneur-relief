<template>
  <div class="business-day">
    <div class="container">
      <img src="../../assets/business.png" alt="">
      <div class="flex">
        <div class="business-day-description">
          <div class="texts flex column align-center justify-center">
            <p class="copy">Business of the day</p>
            <h4 class="heading heading--hero">{{ business.name }} </h4>
            <h4 class="copy copy--large">{{ business.description }} </h4>
          </div>
        </div>
        <div class="business-day-services">
          <div
            class="business-day-services-offer flex space-between align-center"
            v-for="service in business.services"
            :key="service.name"
            @click="handleSetActiveOrder(business, service)"
          >
            <p class="copy">{{ service.name }}</p>
            <div class="flex align-center">
              <div class="tag">
                {{ service.price }} zł
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BusinessOfTheDay',
    data() {
      return {
        business: {
          name: 'Asfalt Coffee',
          description: 'A banging café with a wide range of hip-hop music released by Asfalt Records (O.S.T.R., Otsochodzi and Taco Hemingway). Rap is the dominating genre, along with jazz and electro.',
          services: [
            { name: '10 coffees bundle', price: 80 },
            { name: 'Coffee + pie', price: 15  },
            { name: '5 pies bundle', price: 35 },
            { name: '2 vinyl records', price: 120 }
          ]
        }
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
  .business-day {
    padding: 50px 0 150px 0;

    img {
      width: 100%;
      margin-bottom: 50px;
    }

    &-services,
    &-description {
      width: 50%;
      margin-right: 50px;
    };

    .texts {
      max-width: 500px;
      margin-left: auto
    }

    &-services {
      width: 300px;
      margin: 0 auto;

      &-offer {
        cursor: pointer;
        padding: 4px 24px;
        margin-top: 8px;
        background-color: color(primary);
        border-radius: 8px;

        p {
          color: white;
        }
      }
    }
  }
</style>
