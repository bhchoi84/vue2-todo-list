<template>
    <div>
        <TodoItem 
            v-for="todo in todos.slice().reverse()" 
            :key="todo.id" 
            :todo="todo" 
        />
    </div>
</template>
<script>
import TodoItem from '@/components/TodoItem.vue'
export default {
    components: {
        TodoItem
    },
    computed: {
        todos(){
            return this.$store.state.todos
        }
    }
}
</script>
<style scoped></style>