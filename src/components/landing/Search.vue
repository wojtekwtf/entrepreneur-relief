<template>
  <div class="search" id="search">
    <div class="container">
      <div class="search-content">
        <div class="search-header flex space-between">
          <div class="search-header-text">
            <h2 class="heading heading--hero">Wrocław</h2>
            <p class="copy copy--large">From fine dining to dancing salsa, Wrocław has the best services to look forward to.</p>
          </div>
          <router-link class="underline" to="/">See all in Wrocław</router-link>
        </div>

        <div class="search-card__list flex wrap">
          <div
            class="search-card"
            v-for="business in businesses"
          >
            <div class="search-card-main">
              <img class="search-card-logo" :src="business.logo" alt="">
              <h4 class="heading heading--primary">{{ business.name }}</h4>
              <div class="search-card-rating">
                <img src="../../assets/star.svg">
                {{ business.rating.value }} ({{ business.rating.count }})
              </div>
              <p class="copy">{{ business.description }}</p>
            </div>

            <div
              class="search-card-offer flex space-between align-center"
              v-for="service in business.services"
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
  </div>
</template>

<script>

  export default {
    name: 'Search',
    data() {
      return {
        businesses: [
          {
            logo: 'https://www.gobrazilwines.com/wp-content/uploads/2019/01/GoBrazilWine_Vegan_Symbol-295x300.png',
            name: 'Vega',
            description: 'The oldest vegan bar in Poland that’s been open since 1987',
            rating: {
              value: 4.6,
              count: 250
            },
            services: [
              { name: 'Vegan rolls', price: 13  },
              { name: 'Vegan noodles', price: 20  },
              { name: 'Any burger', price: 19  }
            ],
          },
          {
            logo: 'https://i.pinimg.com/originals/80/78/22/8078227d0ce3cfe4f389d88400253f6d.png',
            name: 'La Rosa Nostra',
            description: 'The best place for delicious Polish dishes during the day time hours',
            rating: {
              value: 4.7,
              count: 1675
            },
            services: [
              { name: '2 desserts', price: 20 },
              { name: '3 course dinner with drink', price: 40 },
              { name: 'Wine tasting with sides', price: 80  }
            ],
          },
          {
            logo: 'https://yogaincambridge.co.uk/wp-content/uploads/2019/12/yoga_logo_02.png',
            name: 'Factory Energy Yoga',
            description: 'Summed up as the best place to clear you mind in Wrocław',
            rating: {
              value: 4.3,
              count: 200
            },
            services: [
              { name: 'Single class', price: 35 },
              { name: '4 classes', price: 120 },
              { name: 'Open ticket monthly', price: 200 }
            ],
          }
        ]
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
  .search {
    padding: 100px 0;

    &-content {
      padding: 60px;
      padding-left: 200px;
      background-color: color(pink-light);
    }

    &-header-text {
      max-width: 50%;

      .heading--hero {
        margin-top: 0;
      }
    }

    &-card {
      margin: 0 20px;
      width: calc(100% / 3 - 40px);

      &-logo {
        height: 80px;
        width: auto;
      }

      &__list {
        margin-top: 50px;
      }

      &-offer {
        cursor: pointer;
        width: 100%;
        padding: 4px 24px;
        margin-top: 8px;
        background-color: color(primary);
        border-radius: 8px;

        p {
          color: white;
        }
      }

      &-main {
        margin-bottom: 20px;
      }

      .tag {
        margin-right: 8px;
        white-space: nowrap;
      }
    }

    &-see-more {
      margin-top: 20px;
    }
  }
</style>
