<template>
  <div class="how-it-works flex row">
    <div class="how-it-works__text container">
      <h1 class="heading--hero">How it works</h1>
      <h2 class="copy--large">We work together with the local businesses in Poland to help them generate an income and ensure they stay afloat in the times of trouble</h2>
      <div class="how-it-works__list flex column">
        <div class="how-it-works__item flex column">
          <div class="flex row"> 
            <div class="how-it-works__number"><span>1</span></div>
            <h3 class="heading heading--primary heading">Find a business</h3>
          </div>
          <p class="copy copy">Start by finding the local business you wish to support. View their page to see all the available services for purchase. </p>
        </div>
        <div class="how-it-works__item flex column">
          <div class="flex row"> 
            <div class="how-it-works__number"><span>2</span></div>
            <h3 class="heading heading--primary heading">Purchase a service</h3>
          </div>
          <p class="copy copy">By purchasing one of the service, you’ll be supporting the business financially in these troubled times.</p>
        </div>
        <div class="how-it-works__item flex column">
          <div class="flex row"> 
            <div class="how-it-works__number"><span>3</span></div>
            <h3 class="heading heading--primary heading">Use it in the future</h3>
          </div>
          <p class="copy copy">Once the Polish government gives the okay for businesses to start operating again, you can cash in this purchase</p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="illustration_span">
        <div class="illustration-background"></div>
        <img class="illustration_image" src="../../assets/how-it-works-illu.svg" alt="empty restaurant">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'how-it-works',
}
</script>

<style scoped lang="scss">
  .how-it-works {
    background: color(pink-background);
    padding: 150px 0px;
    padding-left: 450px;


    &__text {
      width: 500px;
      margin-left: auto;
    }

    &__item {
      width: 80%;

      h3 {
        max-width: 80%;
      }

      .copy {
        padding-left: 50px;
      }
    }

    &__number {
      background: color(pink);
      position: relative;
      margin-right: 15px;
      margin-top: 7px;
      height: 36px;
      width: 36px;
      border-radius: 50%;

      span {
        @include center();
        color: color(text);
        @include font(18, 600);
      }
    }
  }

  .illustration_span {
    position: relative;
    padding-left: 100px;
  }

  .illustration_image {
    position: absolute;
    width: 366px;
    height: 488px;
  }

  .illustration-background {
    position: absolute;
    left: 150px;
    bottom: -550px;
    width: 366px;
    height: 515px;
    background-color: color(text-pink);
  }
</style>
