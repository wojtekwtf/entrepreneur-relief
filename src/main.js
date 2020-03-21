import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueStripeCheckout from 'vue-stripe-checkout';

import '@trevoreyre/autocomplete-vue/dist/style.css'
import '@/styles/main.scss';

Vue.config.productionTip = false;

Vue.use(VueStripeCheckout, 'pk_test_KPaluHwEpFucNzVLSbpLI78U00dvDWpQ8G');

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
