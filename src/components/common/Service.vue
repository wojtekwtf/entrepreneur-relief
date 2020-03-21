<template>
  <div
    class="business-services-offer flex space-between align-center"
    :class="{ 'business-services-offer--on-light': onLight }"
    @click="$emit('set', service)"
  >
    <p class="copy">{{ service.name }}</p>
    <div class="flex align-center">
      <div class="tag">
        {{ service.price }} zł
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Business',
    props: {
      service: {
        type: Object,
        default: () => ({})
      },
      onLight: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped lang="scss">
  .business-services-offer {
    cursor: pointer;
    width: 100%;
    padding: 4px 24px;
    margin-top: 8px;
    background-color: white;
    border-radius: 8px;

    p {
      color: black;
    }

    .tag {
      margin-right: 8px;
      white-space: nowrap;
    }

    &--on-light {
      background-color: color(er-pink);
    }
  }
</style>
