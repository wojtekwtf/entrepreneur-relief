<template>
  <div class="register">
    <div class="background"></div>
    <div class="nav flex align-center">
      <router-link class="underline copy--white" to="/">Back</router-link>
      <img src="../../assets/logo.svg" alt="">
    </div>
    <div class="container flex">
      <div class="register-form">
        <div class="register-form-inputs">
          <h1 class="heading heading--primary">Sign up your business and don't worry about the future</h1>
          <p class="copy">Name</p>
          <input v-model="form.name" type="text" class="input">
          <p class="copy">Description</p>
          <input v-model="form.description" type="text" class="input">
          <p class="copy">Website</p>
          <input v-model="form.website" type="text" class="input">
          <p class="copy">Email</p>
          <input v-model="form.email" type="text" class="input">
          <p class="copy">Link to logo</p>
          <input v-model="form.logoLink" type="text" class="input">

          <div class="register-form-services">
            <div class="item flex align-center" v-for="(item, index) in form.services" :key="index">
              <div>
                <p class="copy">Service</p>
                <input v-model="item.name" type="text" class="input">
              </div>
              <div class="price">
                <p class="copy">Price</p>
                <input v-model="item.price" type="number" class="input input--short">
                <div @click="add" class="add-new" v-if="index === form.services.length - 1">
                  <img src="../../assets/star.svg">
                </div>
              </div>
            </div>
          </div>
        </div>

        <button class="btn" @click="submitForm">Sign up</button>
      </div>
      <div class="register-description">
        <p class="copy copy--white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque autem cum ducimus ea eum ipsam labore molestiae numquam, quis quod reiciendis repudiandae sapiente tempore ut velit vero? Doloribus, vitae?</p>
        <p class="copy copy--white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque autem cum ducimus ea eum ipsam labore molestiae numquam, quis quod reiciendis repudiandae sapiente tempore ut velit vero? Doloribus, vitae?</p>
        <p class="copy copy--white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque autem cum ducimus ea eum ipsam labore molestiae numquam, quis quod reiciendis repudiandae sapiente tempore ut velit vero? Doloribus, vitae?</p>
        <p class="copy copy--white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque autem cum ducimus ea eum ipsam labore molestiae numquam, quis quod reiciendis repudiandae sapiente tempore ut velit vero? Doloribus, vitae?</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterForm',
  data() {
    return {
      form: {
        name: '',
        description: '',
        website: '',
        email: '',
        logoLink: '',
        services: [{ name: '', price: '' }]
      }
    }
  },
  methods: {
    add() {
      this.form.services.push({ name: '', price: '' })
    },
    submitForm() {
      if (this.form.name && this.form.description && this.form.website && this.form.email && this.form.logoLink && this.form.services[0].name && this.form.services[0].price) {
        this.$store.commit('setCompanyToRegister', this.form);
        this.$router.push({ name: 'signup', query: {sent: true} })
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
    padding: 50px 0 30px;

    .copy {
      margin: 10px 0 2px;
    }

    .nav {
      position: fixed;
      top: 24px;
      right: 100px;

      img {
        margin-left: 30px;
      }
    }

    &-form {
      width: 40%;

      &-inputs {
        max-height: 80vh;
        overflow: auto;
        padding: 20px 10px 30px;
      }

      .btn {
        margin-top: 20px;
        margin-left: 10px;
      }
    }

    &-description {
      width: 60%;
      padding-left: 20%;
      padding-top: 20px;
    }

    .background {
      position: absolute;
      width: 70vw;
      height: 200vh;
      background: color(primary-dark);
      transform: rotate(-20deg);
      top: -40vh;
      right: -30vw;
    }

    .price {
      margin-left: 8px;
      position: relative;
    }

    .item {
      .add-new {
        position: absolute;
        right: -24px;
        bottom: 12px;
      }
    }
  }
</style>
