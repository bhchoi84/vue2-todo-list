<template>
    <div>
        <label for="">Name</label>
        <input 
                type="text" 
                :value="name" 
                @input="updateName"
        />
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: '',
            required: false
        }
    },
    data(){
        return {

        }
    },
    methods: {
        updateName(e){
            console.log('InputField 내부 ' + e.target.value);
            this.$emit('update-name', e.target.value )
        }
    }
}
</script>

<style scoped>

</style>