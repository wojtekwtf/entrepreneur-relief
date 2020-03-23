<template>
  <div
    class="business-services-offer flex space-between align-center"
    :class="{ 'business-services-offer--on-light': onLight }"
    @click="$emit('set', service)"
  >
    <p class="copy">{{ service.name }}</p>
    <div class="flex align-center">
      <div class="tag">
        <span v-if="!onlyPrice">Buy for </span>{{ service.price }} zł
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Service',
    props: {
      service: {
        type: Object,
        default: () => ({})
      },
      onLight: {
        type: Boolean,
        default: false
      },
      onlyPrice: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped lang="scss">
  .business-services-offer {
    max-width: 300px;
    cursor: pointer;
    width: 100%;
    padding: 4px 12px;
    margin-top: 8px;
    background-color: white;
    border-radius: 8px;

    p {
      color: black;
    }

    .tag {
      margin-right: 8px;
      white-space: nowrap;
      background: #F2F2F2;
      padding: 6px 14px;
      margin-left: 8px;
    }

    &--on-light {
      background-color: color(er-pink);

      .tag {
        background: white;
      }
    }
  }
</style>
