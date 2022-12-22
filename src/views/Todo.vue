<template>
    <div id="todo" class="container">
        <h1 class="text-center">Todo App</h1>
        <CompletedTodo />
        <AddTodo />
        <hr>
        <TodoList />
        <UserList />
    </div>
</template>
<script>

import AddTodo from '@/components/AddTodo.vue'
import TodoList from '@/components/TodoList.vue'
import CompletedTodo from '@/components/CompletedTodo.vue'
import UserList from '@/components/UserList.vue'

export default {
    components: {
        AddTodo,
        TodoList,
        CompletedTodo,
        UserList
    }   
}
</script>
<style scoped>
</style>