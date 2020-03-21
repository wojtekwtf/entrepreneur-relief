<template>
  <div id="app">
    <Nav></Nav>
    <router-view/>
    <Footer v-if="$route.params.name !== `signup`"></Footer>
  </div>
</template>

<script>
  import Nav from '@/components/landing/Nav.vue'
  import Footer from '@/components/landing/Footer.vue'

  export default {
    name: 'App',
    components: {
      Nav,
      Footer
    }
  }
</script>
<style lang="scss">
</style>
