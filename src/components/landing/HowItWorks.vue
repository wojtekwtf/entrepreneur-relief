<template>
  <div class="how-it-works">
    <div class="container">
      <div class="how-it-works__list flex">
        <div class="how-it-works__item flex column">
          <div class="how-it-works__number"><span>1</span></div>
          <h3 class="heading heading--primary heading--white">Pay now for a voucher</h3>
          <p class="copy copy--white">Choose a company that is of interest to you and buy a voucher for goods and services</p>
        </div>
        <div class="how-it-works__item flex column">
          <div class="how-it-works__number"><span>2</span></div>
          <h3 class="heading heading--primary heading--white">The company has income to survive</h3>
          <p class="copy copy--white">Companies around the world will struggle with finances during the coronavirus crisis. We need to make sure people don't lose jobs and the economy doesn't shrink.</p>
        </div>
        <div class="how-it-works__item flex column">
          <div class="how-it-works__number"><span>3</span></div>
          <h3 class="heading heading--primary heading--white">Use it in the future</h3>
          <p class="copy copy--white">When COVID-19 pandemic is finally over, you will be able to pay for goods and services with your voucher</p>
        </div>
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
    background: color(primary);
    padding: 100px 0;

    &__list {

    }

    &__item {
      padding: 0 50px;
      width: 33%;

      h3 {
        max-width: 80%;
      }
    }

    &__number {
      background: color(primary-x-light);
      position: relative;
      height: 100px;
      width: 100px;
      border-radius: 50%;

      span {
        @include center();
        color: color(pink-light);
        @include font(60, 600);
      }
    }
  }
</style>
