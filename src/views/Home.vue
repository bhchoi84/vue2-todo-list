<template>
  <div class="homeGuideLine">
    <h1>This page is {{name}}</h1>
    <SampleComponent :title="name" @click-event="clickEvent"  >
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
    </SampleComponent >
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
      clickEvent(){
        console.log(11);
        this.name = 'renewal home page!'
      }
    },
    init(){
      console.log('init',this.name);
    },
    beforeCreate(){
      console.log('beforeCreate',this.name);
    },
    created(){
      // this를 통해 data 접근가능
      console.log('created',this.name);
    },
    beforeMount(){
      alert('beforeMount => dom이 마운드 전이라 dom이 없는 상태') 
    },
    mounted(){
      alert('mounted => dom은 그려졌으나 rendering은 안된상태 ( dom ) 접근 가능') 
    },
    beforeUpdate(){
      alert('beforeUpdate > this.name value : ' + this.name)
    },
    updated(){
      alert('updated > this.name value : ' + this.name)
    },
    beforeDestroy(){
      alert('beforeDestroy')
    },
    destroyed(){
      alert('destroy')
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

