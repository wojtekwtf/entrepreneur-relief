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
        about: 'Vega jest najstarszym barem wegańskim (dawniej wegetariańskim) w Polsce, działającym nieprzerwanie od 1987 roku. Od 2012 r. jest lokalem w 100% wegańskim. Potrawy przyrządzane są od podstaw wyłącznie z produktów roślinnych: świeżych warzyw i owoców, roślin strączkowych, kasz, orzechów, nasion, ziół, bez użycia półfabrykatów, konserw ani żadnych produktów pochodzenia zwierzęcego. Dysponujemy dwiema salami jadalnymi: na parterze oraz na piętrze i dwoma kuchniami. Na parterze proponujemy głównie, choć nie tylko, tradycyjne dania kuchni polskiej w wersji wegańskiej, na piętrze dania inspirowane kuchnią świata, również pizzę, desery, ciasta i lody własnej produkcji.  Sala na piętrze jest idealnym miejscem do organizowania uroczystości oraz imprez, zarówno prywatnych, jak firmowych, a także wydarzeń kulturalnych. Od ponad 30 lat promujemy wśród mieszkańców naszego miasta zdrowy tryb życia oraz odżywiania, zwracamy uwagę na tragiczną sytuację zwierząt organizując i będąc miejscem wykładów, warsztatów, imprez cyklicznych (Wegański Weekend, Vegilia). Współpracujemy z organizacjami działającymi na rzecz zwierząt i środowiska (Stowarzyszenie Otwarte Klatki, Ekostraż, Schronisko dla Koni TARA, Fundacja Ekorozwoju, Viva, Czarna Owca Pana Kota).',
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
        about: 'La Rosa to restauracja w samym sercu Bydgoszczy, która miłośników dobrego jedzenia urzeka pogodzeniem tradycji kuchni regionalnej z inspiracjami z całego świata. Staramy się, by nasze dania były szczere, pełne domowego ciepła, ale i kulinarnej fantazji. Kuchnia jest otwarta, by umożliwić zaglądanie w restauracyjne kulisy i zapewnić bezpośredni kontakt kucharzy z gośćmi. To jedyna taka restauracja w Bydgoszczy i regionie. Restauracja La Rosa to wspaniałe miejsce na każdą okazję, na rodzinny obiad, spotkanie z przyjaciółmi, kolację we dwoje, imprezę prywatną i firmową.',
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
        about: 'We are one of the largest schools in Poland with two separate yoga rooms - both air-conditioned, both with all yoga aids. We have a spacious chillout zone, which our students loved from the beginning and which makes us stand out. You can wait here for classes, drink hot tea, you can stay here after class, sharing your reflections from classes with other students. It is here that new relationships are born between people who share a passion for yoga. In the background you can always hear soft, soothing sounds, which allows you to completely relax and forget about everyday problems.',
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
      return state.businesses.find(business => business.id === Number(router.history.current.params.id));
    }
  }
})
