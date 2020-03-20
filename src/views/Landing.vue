<template>
  <div class="landing">
    <Nav></Nav>
    <Hero></Hero>
    <Search></Search>
    <HowItWorks></HowItWorks>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Nav from '@/components/landing/Nav.vue'
  import Hero from '@/components/landing/Hero.vue'
  import Search from '@/components/landing/Search.vue'
  import HowItWorks from '@/components/landing/HowItWorks.vue'

  export default {
    name: 'Landing',
    components: {
      Nav,
      Hero,
      Search,
      HowItWorks
    }
  }
</script>
