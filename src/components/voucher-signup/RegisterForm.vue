<template>
  <div class="register flex flex-1 align-center justify-center">
    <div class="register-form container column align-center justify-center" v-if="!formSent">
      <div class="container">
        <div class="register-form-inputs flex column align-center">
          <h1 class="heading heading--primary text-center">Sign up your business and don't worry about the future</h1>
          <p class="copy">Company Name</p>
          <input v-model="form.name" type="text" class="input input--alone">
          <p class="copy">Description</p>
          <textarea rows="3" v-model="form.description" type="text" class="input input--alone"></textarea>
          <p class="copy">Website</p>
          <input v-model="form.website" type="text" class="input input--alone">
          <p class="copy">Email</p>
          <input v-model="form.email" type="text" class="input input--alone">
          <p class="copy">Link to logo</p>
          <input v-model="form.logo" type="text" class="input input--alone">

          <div class="register-form-services">
            <div class="item flex align-center" v-for="(item, index) in form.services" :key="index">
              <div>
                <p class="copy">Service</p>
                <input v-model="item.name" type="text" class="input input--alone">
              </div>
              <div class="price">
                <p class="copy">Price</p>
                <input v-model="item.price" type="number" class="input input--alone input--short">
              </div>
            </div>
            <div @click="add" class="add-new flex align-center">
              <img src="../../assets/add.svg">
              Add next service
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center">
        <button class="btn" @click="submitForm">Sign up</button>
      </div>
      <p v-if="invalidForm" class="copy copy--accent">Fill in all required fields</p>
    </div>
    <Confirm v-else class="register-form container flex column align-center"></Confirm>
    <div class="register-description container">
      <p class="copy copy--white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque autem cum ducimus ea eum ipsam labore molestiae numquam, quis quod reiciendis repudiandae sapiente tempore ut velit vero? Doloribus, vitae?</p>
      <p class="copy copy--white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque autem cum ducimus ea eum ipsam labore molestiae numquam, quis quod reiciendis repudiandae sapiente tempore ut velit vero? Doloribus, vitae?</p>
      <p class="copy copy--white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque autem cum ducimus ea eum ipsam labore molestiae numquam, quis quod reiciendis repudiandae sapiente tempore ut velit vero? Doloribus, vitae?</p>
      <p class="copy copy--white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque autem cum ducimus ea eum ipsam labore molestiae numquam, quis quod reiciendis repudiandae sapiente tempore ut velit vero? Doloribus, vitae?</p>
    </div>
  </div>
</template>

<script>
  import Confirm from '@/components/voucher-signup/Confirm.vue'

  export default {
    name: 'RegisterForm',
    components: {
      Confirm
    },
    data() {
      return {
        form: {
          name: '',
          description: '',
          website: '',
          email: '',
          logo: '',
          services: [{ name: '', price: '' }]
        },
        triedToSend: false,
        formSent: false
      }
    },
    computed: {
      invalidForm() {
        return this.triedToSend && (!this.form.name || !this.form.description || !this.form.website || !this.form.email || !this.form.logo || !this.form.services[0].name || !this.form.services[0].price);
      }
    },
    methods: {
      add() {
        this.form.services.push({ name: '', price: '' });
      },
      submitForm() {
        this.triedToSend = true;

        if (this.form.name && this.form.description && this.form.website && this.form.email && this.form.logo && this.form.services[0].name && this.form.services[0].price) {
          this.$store.commit('setCompanyToRegister', this.form);
          this.formSent = true;
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .register {
    height: 100vh;
    width: 100vw;
    position: relative;
    overflow: hidden;

    .nav {
      position: fixed;
      top: 24px;
      right: 100px;

      img {
        margin-left: 30px;
      }
    }

    &-form {
      width: 55%;
      padding-bottom: 70px;

      &-inputs {
        max-height: 80vh;
        overflow: auto;
        padding: 20px 10px 30px;

        .copy {
          margin: 12px 0 0;
        }

        .heading {
          max-width: 600px;
        }
      }

      .btn {
        margin-top: 20px;
        margin-left: 10px;
        margin-bottom: 20px;

        + p {
          margin-left: 10px;
        }
      }
    }

    &-description {
      width: 45%;
      height: 100%;
      background: color(primary-dark);
      padding: 20px 100px 0;

      p {
        margin-bottom: 60px;
      }
    }

    .price {
      margin-left: 8px;
      position: relative;
    }

    .add-new {
      margin-top: 16px;
      cursor: pointer;

      img {
        height: 20px;
        width: 20px;
        margin-right: 4px;
      }
    }
  }
</style>

<style>
  .register .business-preview {
    width: 100%;
    margin: 0;
    margin-top: 20px;
  }
</style>
