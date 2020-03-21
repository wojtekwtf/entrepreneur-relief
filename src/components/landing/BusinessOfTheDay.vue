<template>
  <div class="business-day">
    <div class="container">
      <Business
        :business="business"
        :on-light="true"
      ></Business>
    </div>
  </div>
</template>

<script>
  import Business from '@/components/common/Business.vue'

  export default {
    name: 'BusinessOfTheDay',
    components: {
      Business
    },
    data() {
      return {
        business: {
          logo: 'https://www.gobrazilwines.com/wp-content/uploads/2019/01/GoBrazilWine_Vegan_Symbol-295x300.png',
          rating: {
            value: 4.6,
            count: 250
          },
          name: 'Asfalt Coffee & Vinyl',
          description: 'A banging new café in Warsaw with a wide range of hip-hop music released by Asfalt Records, with rap is the dominating genre, along with jazz and electro',
          services: [
            { name: '10 coffees bundle', price: 80 },
            { name: 'Coffee + pie', price: 15  },
            { name: '5 pies bundle', price: 35 },
            { name: '2 vinyl records', price: 120 }
          ]
        }
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
  }
</style>
