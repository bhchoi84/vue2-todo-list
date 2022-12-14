<template>
  <div class="container">
    <h1 class="text-center">Todos</h1>
    <input 
    v-model="initInput"
    type="text" 
    class="w-100 p-2" 
    placeholder="할일.."
    @keyup.enter.prevent="addTodo"
    />
    <Todo 
      v-for="todo in todos.slice().reverse()" 
      :todo="todo" 
      :key="todo.id" 
      @toggle-checkbox="toggleCheckbox"
      @click-delete="clickDelete"
      />
      {{this.todos}}
  </div>

</template>

<script>
import Todo from '@/components/Todo.vue'
export default {
  name: "todos",
  components: {
    Todo
  },
  data(){
    return {
      todos: [
        {id:1, text: 'Vue 공부', checked: false},
        {id:2, text: 'React 공부', checked: false},
        {id:3, text: 'Node 공부', checked: false},
      ],
      initInput: ''
    }
  },
  methods: {
    addTodo(e){
      this.todos.push({
        id: Math.random(),
        text: e.target.value,
        checked: false
      })
      this.initInput = ''
    },
    toggleCheckbox({id, checked}){
      console.log(id, checked)
      const index = this.todos.findIndex( t => {
        return t.id === id
      })
      this.todos[index].checked = checked
    },
    clickDelete(id){
      // console.log(id);
      // const index = this.todos.findIndex(t => {
      //   return t.id === id 
      // })
      // this.todos.splice(index, 1)
      this.todos = this.todos.filter( t => t.id !== id )
    }
  }
} 
</script>
