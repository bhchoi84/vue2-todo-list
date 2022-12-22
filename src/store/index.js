import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todos: [
                {id: 1, text: 'study vue', checked: false},
                {id: 2, text: 'study react', checked: false},
                {id: 3, text: 'study angular', checked: false}
        ],
    },
    // commit => state VO에 바로 값을 반영한다라고 생각할것 
    // 일종의 VO 에 바로 적용되는 CUD beans로 보면됨
    mutations: {
        ADD_TODO(state, value){
            state.todos.push({
                id: Math.random(),
                text: value,
                checked: false
            })
        },
        TOGGLE_TODO(state, {id, checked}){
            const todoId = state.todos.findIndex( todo => {
               return todo.id === id 
            })
            state.todos[todoId].checked = checked
        }, 
        DELETE_TODO(state, id){
            const todoId = state.todos.findIndex( todo => {
                return todo.id ===id
            })
            state.todos.splice(todoId, 1)
        }
    },
    actions: {
        addTodo({ commit }, value){
            setTimeout(function(){
                commit('ADD_TODO', value)
            }, 500)  
        },
        toggleTodo({commit}, {id, checked}){
            setTimeout(function(){
                commit('TOGGLE_TODO', {id, checked})
            }, 500)
        },
        deleteTodo({commit}, id){
            setTimeout(function(){
                commit('DELETE_TODO', id)
            }, 500)
        }
    },
    getters: {

    }
})