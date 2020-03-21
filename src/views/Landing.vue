<template>
  <div class="landing">
    <Hero></Hero>
    <HowItWorks></HowItWorks>
    <Search></Search>
    <BusinessOfTheDay></BusinessOfTheDay>
  </div>
</template>

<script>
  import Hero from '@/components/landing/Hero.vue'
  import Search from '@/components/landing/Search.vue'
  import HowItWorks from '@/components/landing/HowItWorks.vue'
  import BusinessOfTheDay from '@/components/landing/BusinessOfTheDay.vue'
  import Footer from '@/components/landing/Footer.vue'

  export default {
    name: 'Landing',
    components: {
      Hero,
      Search,
      HowItWorks,
      BusinessOfTheDay,
    }
  }
</script>
