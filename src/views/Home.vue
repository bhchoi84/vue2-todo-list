<template>
  <div class="homeGuideLine">
    <h1>This page is {{name}}</h1>
    <SampleComponent :title="name" />
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
        name: 'home page!'
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

  h1 {
    color: green
  }
</style>

