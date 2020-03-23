<template>
  <div class="order-confirm flex column" v-if="!paid">
    <VueStripeCheckout
      ref="checkoutRef"
      currency="PLN"
      :image="activeOrder.business.logo"
      :description="`${activeOrder.business.name}/${activeOrder.chosenService.name}`"
      :amount="activeOrder.chosenService.price * 100"
      :allow-remember-me="false"
      @done="done"
      @opened="opened"
      @closed="closed"
      @canceled="canceled"
    ></VueStripeCheckout>
    <div class="order-confirm__content flex column align-center justify-center">
      <h1 class="text-center heading heading--primary">Here is an overview of your order</h1>

      <BusinessPreview :business="businessParsed" :on-light="true" :only-price="true"></BusinessPreview>

      <button class="btn btn-black" @click="checkout">Checkout</button>
    </div>
  </div>
  <div v-else class="order-confirm flex column align-center justify-center">
    <div class="order-confirm__content flex column align-center justify-center">
      <h1 class="text-center heading heading--primary">Thank you for helping your local business.</h1>
      <button class="btn btn-black" @click="$router.push('/')">Explore more</button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import BusinessPreview from '@/components/common/BusinessPreview.vue'

  export default {
    name: 'OrderConfirm',
    components: {
      BusinessPreview
    },
    data() {
      return {
        paid: false
      }
    },
    computed: {
      activeOrder() {
        return this.$store.state.activeOrder;
      },
      businessParsed() {
        return {
          ...this.activeOrder.business,
          services: [this.activeOrder.chosenService],
        }
      }
    },
    methods: {
      async checkout () {
        // token - is the token object
        // args - is an object containing the billing and shipping address if enabled
        const { token } = await this.$refs.checkoutRef.open();

        const email = token.email;
        const product = this.activeOrder.chosenService.name;
        const business = this.activeOrder.business.name;
        const price = this.activeOrder.chosenService.price;

        const params = `email=${email}&product=${product}&business=${business}&price=${price}`;
        const paramsInternal = `product=${product}&business=${business}&price=${price}`;

        axios
          .get(`https://jaqdl96fxh.execute-api.eu-central-1.amazonaws.com/default/send_email_voucher_purchase?${params}`)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

        axios
          .get(`https://bmd6po8l9i.execute-api.eu-central-1.amazonaws.com/default/send_email_internal_confirmation?${paramsInternal}`)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

        this.paid = true;
      },
      done() {
      },
      opened() {
      },
      closed() {
      },
      canceled() {
      }
    }
  }
</script>

<style lang="scss">
  .order-confirm {
    min-height: calc(100vh - 80px - 298px);

    &__content {
      margin: 0 auto;
      padding: 30px 10px;

      @include md-up {
        width: 600px;
        padding: 70px 0 30px;
      }

      .btn {
        margin-top: 20px;
      }
    }

    .business-preview {
      width: 250px;

      @include sm-up {
        width: 400px
      }
    }
  }
</style>
