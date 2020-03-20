<template>
  <div id="app">
    <Nav></Nav>
    <router-view/>
  </div>
</template>

<script>
  import Nav from '@/components/landing/Nav.vue'

  export default {
    name: 'App',
    components: {
      Nav
    }
  }
</script>
<style lang="scss">
  body {
    background: color(pink-background);
  }
</style>
