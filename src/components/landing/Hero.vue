<template>
  <div class="hero">
    <div class="rect rect1"></div>
    <div class="rect rect2"></div>
    <div class="rect rect3"></div>
    <div class="rect rect4"></div>
    <div class="container">
      <div class="hero-main">
        <h1 class="heading heading--hero heading--white text-center pink-light">Help support your <span class="pink">favorite</span><br> local business</h1>
<!--        <p class="copy copy&#45;&#45;large copy&#45;&#45;white text-center">Pay less for products after coronavirus crisis.</p>-->
<!--        <p class="copy copy&#45;&#45;large copy&#45;&#45;white text-center">Help businesses survive.</p>-->
        <div class="hero-input flex column align-center justify-center">
          <div class="input-wrapper">
            <input placeholder="Search for a local business..." class="input" type="text">
            <img src="../../assets/icon-search.svg">
          </div>
        </div>
        <a class="hero-learn-more pink-light text-center">Learn more</a>
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
    min-height: 600px;
    height: calc(80vh - 80px);
    background: color(primary-dark);

    color: color(pink-light);
    position: relative;

    .container {
      height: inherit;
      display: flex;
    }

    &-main {
      margin: 0 auto;
      max-width: 60vw;
      height: inherit;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    &-learn-more {
      margin-top: 30px;
      text-decoration: underline;
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
    top: -70vh;
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
    top: 30vh;
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
