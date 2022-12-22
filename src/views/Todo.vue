<template>
    <div id="todo" class="container">
        <h1 class="text-center">Todo App</h1>
        <CompletedTodo  :todos="todos" />
        <AddTodo @add-todo="addTodo" />
        <hr>
        <TodoList 
                :todos="todos" 
                @toggle-checkbox="toggleCheckbox"
                @delete-todo="deleteTodo"
        />
    </div>
</template>
<script>
import AddTodo from '@/components/AddTodo.vue'
import TodoList from '@/components/TodoList.vue'
import CompletedTodo from '@/components/CompletedTodo.vue'

export default {
    components: {
        AddTodo,
        TodoList,
        CompletedTodo
    },
    data(){
        return {
            todos: [
                {id: 1, text: 'study vue', checked: false},
                {id: 2, text: 'study react', checked: false},
                {id: 3, text: 'study angular', checked: false}
            ],
            todoText: ''
        }
    },
    methods: {
        addTodo({todoId, todoText}){
            this.todos.push({id: todoId, text: todoText, checked: false})
        },
        toggleCheckbox({id, checked}){
            const index = this.todos.findIndex( todo => {
                return todo.id === id 
            })
            this.todos[index].checked = checked
        },
        deleteTodo({id}){
            this.todos = this.todos.filter( todo => todo.id !== id )
        }
    }
   
}
</script>
<style scoped>
</style>