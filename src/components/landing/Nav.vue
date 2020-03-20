<template>
  <div class="nav">
    <div class="container nav-container">
      <div class="nav-brand">
        <router-link to="/">
          E-Relief
        </router-link>
      </div>
      <div class="nav-menu">
        <button class="btn btn-white" @click="$router.push('/signup')">For companies</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
}
</script>

<style scoped lang="scss">
  .nav {
    height: 80px;
    background: color(primary-dark);

    &-container {
      border-bottom: 1px solid rgba(255,255,255,0.1);
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: inherit;
      position: relative;
      z-index: 1000;
    }

    &-brand a {
      @include font(24, 700);
      color: white !important;
    }

    &-menu {

    }
  }
</style>
