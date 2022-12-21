<template>
  <div class="homeGuideLine">
    <h1>This is Home page</h1>
    <SampleComponent />
  </div>
</template>

<script>

  import SampleComponent from '@/components/SampleComponent.vue'

  export default {
    name: 'home',
    components: {
      SampleComponent
    },
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>
<style scoped>
  .homeGuideLine {
    border: 1px solid green;
  }
</style>

