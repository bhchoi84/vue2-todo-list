<template>
  <div class="homeGuideLine">
    <h1>This page is {{name}}</h1>
    <SampleComponent :title="name" >
      <template v-slot:header="props">
        <div>SLOT(컴포넌트 중간에 들어가는것) header / {{ props.header }}</div>
      </template>
      <template #body="{ body }">
        <div>SLOT(컴포넌트 중간에 들어가는것) body / {{ body }}</div>
      </template>
      <template v-slot:footer="props">
        <div>SLOT(컴포넌트 중간에 들어가는것) footer / {{ props.footer }}</div>
      </template>
      <template v-slot:default="props">
        <div>default / {{ props.defaultVal }}</div>
      </template>
    </SampleComponent>
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

