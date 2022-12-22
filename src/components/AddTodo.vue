<template>
    <div>
        <input 
            type="text" 
            class="w-100 p-2" 
            placeholder="todo.." 
            @keyup.enter.prevent="addTodo"
            v-model="todoText"
        />
    </div>
</template>
<script>
export default {
    data(){
        return{
            todoText: ''
        }
    },
    methods: {
        addTodo(e){
            this.$emit('add-todo',{todoId: Math.random(), todoText: e.target.value})
            this.todoText = ''
        }
    }
}
    
</script>
<style scoped>
</style>