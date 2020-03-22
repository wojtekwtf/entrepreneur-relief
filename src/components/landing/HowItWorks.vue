<template>
  <div class="how-it-works" id="how-it-works">
    <div class="container">
      <h1 class="heading heading--hero">How does it work?</h1>
      <h2 class="copy copy--large">Your favourite local place cannot sell its services due to the crisis. <br> So let’s help them by buying their service for the future.</h2>
      <div class="how-it-works__list flex row">
        <div class="flex column">
          <div class="how-it-works__item flex column">
            <div class="flex">
              <div class="how-it-works__number"><span>1</span></div>
              <h3 class="heading heading--section heading">Find a business</h3>
            </div>
            <p class="copy">Start by finding your favourite place and view their page to see all the available services for purchase.</p>
          </div>
          <div class="how-it-works__item flex column">
            <div class="flex">
              <div class="how-it-works__number"><span>2</span></div>
              <h3 class="heading heading--section heading">Buy a service</h3>
            </div>
            <p class="copy">Get a discount when you buy one or more services that you would like to use in the future.</p>
          </div>
        </div>
        <div class="flex column">
          <div class="how-it-works__item flex column">
            <div class="flex">
              <div class="how-it-works__number"><span>3</span></div>
              <h3 class="heading heading--section heading">Support you favorite businesses</h3>
            </div>
            <p class="copy">Your favourite place will survive because of you, allowing them to keep their business up and running.</p>
          </div>
          <div class="how-it-works__item flex column">
            <div class="flex">
              <div class="how-it-works__number"><span>4</span></div>
              <h3 class="heading heading--section heading">Look to the future</h3>
            </div>
            <p class="copy">In the future you will be able to book a moment most convenient for you, especially that these vouchers are valid for 1 year.</p>
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
    padding: 80px 0;
    max-width: 900px;
    margin: auto;


    &__list {
      margin-top: 40px;
      flex-wrap: wrap;

      @include md-up {
        flex-wrap: nowrap;
      }
    }

    &__item {
      margin-bottom: 10px;
      padding-right: 20px;

      @include md-up {
        min-height: 180px;
      }

      h3 {
        max-width: 80%;
        margin-bottom: 0;
      }

      .copy {
        padding-left: 50px;
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
