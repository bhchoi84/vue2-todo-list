<template>
    <div class="aboutGuideLine">
        <h1>This page is {{name}}</h1>
        <SampleComponent :title="name" />
    </div>
</template>
<script>

import SampleComponent from '@/components/SampleComponent.vue'

export default {
    components: {
        SampleComponent
    },
    data(){
        return {
            name: 'about page!'
        }
    }, 
    methods: {

    }
}
</script>

<style scoped>
    .aboutGuideLine {
    border: 1px solid blue
    }

    h1 {
        color: blue
    }
</style>