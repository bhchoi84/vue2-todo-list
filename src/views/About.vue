<template>
    <div class="aboutGuideLine">
        <h1>This is About page</h1>    
        <SampleComponent />
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
</style>