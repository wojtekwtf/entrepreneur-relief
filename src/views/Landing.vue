<template>
  <div class="landing">
    <Hero></Hero>
    <Search></Search>
    <HowItWorks></HowItWorks>
  </div>
</template>

<script>
  import Hero from '@/components/landing/Hero.vue'
  import Search from '@/components/landing/Search.vue'
  import HowItWorks from '@/components/landing/HowItWorks.vue'

  export default {
    name: 'Landing',
    components: {
      Hero,
      Search,
      HowItWorks
    }
  }
</script>
