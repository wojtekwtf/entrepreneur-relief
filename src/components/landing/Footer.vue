<template>
  <div class="footer-box">
    <div class="flex column">
      <h1 class="footer-box__text copy copy--large justify-center text-center">Together, we can all make a difference and help these businesses thrive.</h1>
      <div class="flex row justify-center">
        <img class="logo-image" src="../../assets/logo-black.svg" alt=""/>
        <p class="logo-text">eRelief</p>
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
    height: 298px;
    padding: 100px 0;
    background-color: color(er-pink);

    &__text {
      margin: auto;
      padding-bottom: 25px;
      max-width: 300px;

      @include sm-up {
        max-width: 400px;
      }
    }
  }

  .logo-text {
    margin-top: 14px;
    padding: 10px;
  }

</style>
