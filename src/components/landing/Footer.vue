<template>
  <div class="footer-box text-center">
    <div class="flex column">
      <h1 class="heading--hero">Find the local business you wish to support</h1>
      <div class="footer-box__search hero-input flex column align-center justify-center">
        <div class="input-wrapper input--alone">
          <input placeholder="Search for a local business..." class="input" type="text">
          <img src="../../assets/icon-search.svg">
        </div>
      </div>
      <div class="footer-box__logo flex row justify-center">
        <img src="../../assets/logo.svg" alt=""/>
        eRelief
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Footer',
  }
</script>

<style scoped lang="scss">
  .footer-box {
    height: 600px;
    padding: 100px 350px;
    background-color: color(pink-light);

    &__search {
      padding: 64px;
    }
  }

</style>
