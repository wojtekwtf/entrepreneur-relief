<template>
  <div class="nav">
    <div class="container nav-container">
      <div class="nav-brand">
        <router-link to="/" class="flex align-center">
          <img src="../../assets/logo.svg" alt="">
          eRelief
        </router-link>
      </div>
      <div class="nav-menu">
        <a
          class="nav-menu-item"
          v-for="item in menu"
          :key="item.label"
          :href="item.href"
        >
          {{ item.label }}
        </a>
      </div>
      <div class="nav-actions">
        <button class="btn btn-black" @click="$router.push('/signup')">For companies</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      menu: [
        {
          label: 'Customer Benefits',
          href: '#how-it-works'
        },
        {
          label: 'Business Benefits',
          href: '#how-it-works'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .nav {
    height: 80px;
    background: color(primary-dark);

    &-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: inherit;
      position: relative;
      z-index: 1000;
    }

    &-brand a {
      @include font(24, 700);
      color: black !important;

      img {
        margin-right: 8px;
      }
    }

    &-menu {
      display: none;

      @include md-up {
        display: block;
      }

      &-item {
        margin: 0 16px;
        color: black;
      }
    }

    &-actions {

    }
  }
</style>
