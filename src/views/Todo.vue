<template>
    <div id="todo" class="container">
        <h1 class="text-center">Todo App</h1>
        <input 
                type="text" 
                class="w-100 p-2" 
                placeholder="todo.." 
                @keyup.enter.prevent="addTodo"
                v-model="todoText"
                />
        <hr>
        <TodoItem 
            v-for="todo in todos.slice().reverse()" 
            :key="todo.id" 
            :todo="todo" 
            @toggle-check="toggleCheck"
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
            todos: [
                {id: 1, text: 'study vue', checked: false},
                {id: 2, text: 'study react', checked: false},
                {id: 3, text: 'study angular', checked: false}
            ],
            todoText: ''
        }
    },
    methods: {
        addTodo(e){
            console.log(e.target.value)
            this.todos.push({
                id: Math.random(),
                text: e.target.value,
                checked: false
            })
            this.todoText = ''
        },
        toggleCheck({id, checked}){
            const index = this.todos.findIndex( todo => {
                return todo.id === id 
            })
            this.todos[index].checked = checked
        },
        deleteTodo(id){
            // const index = this.todos.findIndex( todo => {
            //     return todo.id === id 
            // })
            // this.todos.splice(index, 1)
            this.todos = this.todos.filter( todo => todo.id !== id )
        }
    }
   
}
</script>
<style scoped>
</style>