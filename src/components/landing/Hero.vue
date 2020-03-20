<template>
  <div class="hero">
    <div class="rect rect1"></div>
    <div class="rect rect2"></div>
    <div class="rect rect3"></div>
    <div class="rect rect4"></div>
    <div class="container">
      <div class="hero-main">
        <h1 class="heading heading--hero heading--white">Support local businesses through COVID-19</h1>
        <p class="copy copy--large copy--white">Pay less for products after coronavirus crisis.</p>
        <p class="copy copy--large copy--white">Help businesses survive.</p>
        <div class="hero-input">
          <input placeholder="Buy voucher from..." class="input" type="text">
          <button class="btn btn-white btn-to-inside">Search</button>
          <button class="btn btn-transparent hero-learn-more">Learn more</button>
        </div>
      </div>
      <div class="hero-image">
        <img src="https://cdn2.iconfinder.com/data/icons/business-finance-character/28/10-512.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
}
</script>

<style scoped lang="scss">
  .hero {
    min-height: calc(100vh - 80px);
    background: color(primary-dark);
    color: white;
    position: relative;

    .container {
      min-height: inherit;
      display: flex;
    }

    &-main {
      max-width: 45vw;
      min-height: inherit;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    &-image {
      min-height: inherit;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      p {
        background: yellow;
        height: 30vw;
        width: 40vh;
      }
    }

    &-learn-more {
      margin-left: 50px;
    }

    &-input {
      margin-top: 30px;

      .input {
        padding-right: 90px;
      }
    }
  }

  .rect {
    position: absolute;
  }

  .rect1 {
    top: -50vh;
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
    background: linear-gradient(45deg, lighten(#20324D, 2%) 0%, color(primary-dark) 100%);
    border-radius: 50px;
  }

  .rect3 {
    top: 50vh;
    left: 10vw;
    width: 15vw;
    height: 10vw;
    transform: skew(-0.14turn, 21deg) rotate(0deg);
    background: linear-gradient(90deg, lighten(#20324D, 3%) 0%, lighten(#20324D, 1%) 100%);
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
</style>
