<template>
  <div class="page-overview">
    <v-overview></v-overview>
    <div class="p20">
      <overview-content>
      </overview-content>
    </div>
  </div>
</template>

<script>
  import overviewContent from '../../components/markdown/overview-content.md' 
  import Overview from '../../components/element-components/overview'
  export default {
      components: {
        'v-overview': Overview,
        'overview-content': overviewContent
      }
  }
</script>

<style lang="scss" scoped>
  .page-overview {
    background: #fff;
  }
</style>