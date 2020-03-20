<template>
  <div class="search">
    <div class="container">
      <h2 class="heading heading--primary text-center">Search for businesses to help</h2>

      <div class="flex justify-center align-center">
        <input placeholder="Buy voucher from..." class="input" type="text">
        <button class="btn btn-white btn-to-inside">Search</button>
      </div>

      <div class="search-card__list flex wrap">
        <div
          class="search-card"
          v-for="i in 6"
        >
          <img src="https://dcassetcdn.com/design_img/2642892/545201/545201_14262046_2642892_63898bf6_image.png" alt="">
          <p class="copy copy--small copy--bold">Rachel's Dance Studio</p>
          <p class="copy copy--uppercase">On Offer</p>

          <div
            class="search-card-offer flex space-between align-center"
            v-for="i in 3"
          >
            <p class="copy">10 dance lessons (1h)</p>
            <div class="flex align-center">
              <div class="tag">
                350 zł
              </div>
              <button
                class="btn btn-small "
                @click="$router.push('/company/123')"
              >
                Buy
              </button>
            </div>
          </div>

          <button
            class="btn search-see-more btn-blue"
            @click="$router.push('/company/123')"
          >
            See more
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
}
</script>

<style scoped lang="scss">
  .search {
    padding: 100px 0;

    .heading--primary {
      margin-bottom: 32px;
    }

    &-card {
      box-shadow: globalVars(ui-default-box-shadow--light);
      border: 1px solid color(gray-background-medium);
      padding: 16px 25px;
      margin: 10px;
      min-width: 400px;
      display: flex;
      flex-direction: column;
      align-items: center;

      &__list {
        margin-top: 50px;
      }

      p {
        text-align: center;
      }

      &-offer {
        box-shadow: globalVars(ui-default-box-shadow);
        border: 1px solid color(gray-background-medium);
        width: 100%;
        padding: 8px;
        margin: 4px 0;
      }

      .tag {
        margin-right: 8px;
      }
    }

    &-see-more {
      margin-top: 20px;
    }
  }
  img {
    max-width: 150px;
  }
</style>
