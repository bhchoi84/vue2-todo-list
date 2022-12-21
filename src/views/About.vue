<template>
    <div class="aboutGuideLine">
        <h1>This page is {{name}}</h1>
        <form @submit="inputSubmit">
            <InputField  @update-name="updateName"  />
        </form>
    </div>
</template>
<script>

// import SampleComponent from '@/components/SampleComponent.vue'
import InputField from '@/components/InputField.vue'

export default {
    components: {
        InputField
    },
    data(){
        return {
            name: 'about page!'
        }
    }, 
    methods: {
        inputSubmit(e){
            console.log('inputSubmit ' + e);
        },
        updateName(value){
            console.log('부모 About emit으로 전달받은 자식값 : ' + value);
            this.name = value
        }
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