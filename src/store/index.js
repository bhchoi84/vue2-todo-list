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
    mutations: {

    },
    actions: {

    },
    getters: {

    }
})