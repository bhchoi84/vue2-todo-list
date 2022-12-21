<template>
     <div 
        class="mb-2 d-flex"
        style="text-align: left">

        <div>
            <input 
                type="checkbox" 
                :checked="todo.checked" 
                @change="toggleCheck"
            />
        </div>
        <span 
            class="ml-2 flex-grow-1" 
            :class="todo.checked ? 'text-muted' : '' " 
            :style="todo.checked ? 'text-decoration: line-through' : ''  "
        >{{todo.text}}</span>
        <button class="btn btn-danger btn-sm" @click="deleteTodo">Delete</button>
    </div>
</template>
<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true
        }
    },
    data(){
        return {

        }
    },
    methods: {
        toggleCheck(e){
            this.$emit('toggle-check',{
                id: this.todo.id,
                checked: e.target.checked
            })
        },
        deleteTodo(){
            this.$emit('delete-todo', this.todo.id)
        }
    }
}
</script>
<style scoped>
</style>