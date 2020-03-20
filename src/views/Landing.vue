<template>
  <div class="landing">
    <Hero></Hero>
    <Search></Search>
    <HowItWorks></HowItWorks>
    <BusinessOfTheDay></BusinessOfTheDay>
  </div>
</template>

<script>
  import Hero from '@/components/landing/Hero.vue'
  import Search from '@/components/landing/Search.vue'
  import HowItWorks from '@/components/landing/HowItWorks.vue'
  import BusinessOfTheDay from '@/components/landing/BusinessOfTheDay.vue'

  export default {
    name: 'Landing',
    components: {
      Hero,
      Search,
      HowItWorks,
      BusinessOfTheDay
    }
  }
</script>
