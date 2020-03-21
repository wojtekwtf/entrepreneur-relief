<template>
  <div class="how-it-works" id="how-it-works">
    <div class="container flex">
      <div class="how-it-works__text">
        <h1 class="heading heading--hero">How does it work?</h1>
        <h2 class="copy copy--large">We work together with the local businesses in Poland to help them generate an income and ensure they stay afloat in the times of trouble</h2>
        <div class="how-it-works__list flex column">
          <div class="how-it-works__item flex column">
            <div class="flex">
              <div class="how-it-works__number"><span>1</span></div>
              <h3 class="heading heading--primary heading">Find a business</h3>
            </div>
            <p class="copy copy">Start by finding the local business you wish to support. View their page to see all the available services for purchase. </p>
          </div>
          <div class="how-it-works__item flex column">
            <div class="flex">
              <div class="how-it-works__number"><span>2</span></div>
              <h3 class="heading heading--primary heading">Purchase a service</h3>
            </div>
            <p class="copy copy">By purchasing one of the service, you’ll be supporting the business financially in these troubled times.</p>
          </div>
          <div class="how-it-works__item flex column">
            <div class="flex">
              <div class="how-it-works__number"><span>3</span></div>
              <h3 class="heading heading--primary heading">Use it in the future</h3>
            </div>
            <p class="copy copy">Once the Polish government gives the okay for businesses to start operating again, you can cash in this purchase</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HowItWorks',
  }
</script>

<style scoped lang="scss">
  .how-it-works {
    padding: 80px 0px;

    &__text {
      padding-left: 150px;

      > h2 {
        max-width: 500px;
        line-height: 40px;
      }
    }

    &__list {
      margin-top: 40px;
    }

    &__item {
      width: 80%;
      margin-bottom: 10px;

      h3 {
        max-width: 80%;
        margin-bottom: 0;
      }

      .copy {
        padding-left: 50px;
        margin-top: 0;
      }
    }

    &__number {
      background: color(primary);
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

</style>
