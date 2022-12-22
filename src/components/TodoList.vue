<template>
    <div>
        <TodoItem 
            v-for="todo in todos.slice().reverse()" 
            :key="todo.id" 
            :todo="todo" 
            @toggle-checkbox="toggleCheckbox"
            @delete-todo="deleteTodo"
        />
    </div>
</template>
<script>
import TodoItem from '@/components/TodoItem.vue'
export default {
    components: {
        TodoItem
    },
    data(){
        return {
      
        }
    },
    computed: {
        todos(){
            return this.$store.state.todos
        }
    },
    methods: {
        toggleCheckbox({id, checked}){
            this.$emit('toggle-checkbox', {id, checked})
        },
        deleteTodo({id}){
            this.$emit('delete-todo', {id})
        }
    }
}
</script>
<style scoped></style>