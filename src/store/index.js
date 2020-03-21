import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeOrder: {},
    companyToRegister: {},
    businesses: [
      {
        id: 1,
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
        id: 2,
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
        id: 3,
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
  },
  mutations: {
    setActiveOrder(state, payload) {
      state.activeOrder = payload;
    },
    setCompanyToRegister(state, payload) {
      state.companyToRegister = payload;
    }
  },
  actions: {
  },
  getters: {
    getOneBusiness(state) {
      // WOJTEK user router.history.params.id to get current id at the company page
      // use find fuction here.
      // https://vuex.vuejs.org/guide/getters.html
      console.log(router.history);
      console.log(state.businesses);
      return state.businesses.find(business => business.id === router.history.params.id);
    }
  }
})
