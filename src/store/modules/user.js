import axios from 'axios'

export default {
    namespaced: true,
     state: {
        users: []
    },
    // commit => state VO에 바로 값을 반영한다라고 생각할것 
    // 일종의 VO 에 바로 적용되는 CUD beans로 보면됨
    mutations: {
        SET_USER(state, users){
            console.log('5 SET_USER mutations ===> state data fetch')
            state.users = users
        }
    },
    actions: {
        getUsers({commit}){
            console.log('3 store getUsers ===> api call');
            axios.get('https://jsonplaceholder.typicode.com/users').then( response => {
                console.log('4 store getUsers api response');
                commit('SET_USER', response.data) // users 데이터
             })
        }
    },
    getters: {
        
    }
}