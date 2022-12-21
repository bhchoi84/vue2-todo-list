<template>
    <div class="guideLine">
        <h2>{{title}}</h2>
        <button @click="updateName" >Click</button>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
            default: '샘플 component'
        }
    },
    data(){
        return {
        
        }
    },
    methods: {
        updateName(){
            this.title = 'updated component name'
        }
    }
}
</script>
<style scoped>
    .guideLine {
        border: 1px solid red
    }
    h2 {
        color: brown
    }
</style>