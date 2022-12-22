<template>
    <div class="textAlignLeft">
        <h1>User List</h1> 
        <ul class="listStyleNone">
            <li v-for="user in people" :key="user.id">{{user.id}} {{user.name}}</li>
        </ul>
    </div>
</template>
<script>

import { mapState, mapActions } from 'vuex' // store의 state를 가져온다.

export default {
    computed:{
        // users(){
        //     return this.$store.state.users
        // }

        // ...mapState([
        //     'users'     // store state get
        // ])

        // ...mapState({
        //     //people: 'users'
        //     people: state => state.user.users
        // })

        ...mapState('user', {
            people: state => state.users
        })
    },
    methods: {
        ...mapActions('user', ['getUsers'])
        // getUsers(){
        //     console.log('2 getUsers ===> store call');
        //     this.$store.dispatch('getUsers')
        // }
    },
    created() {
        console.log('1 created');
       this.getUsers();
    }
}
</script>
<style scoped>
.listStyleNone {
    list-style: none
}
.textAlignLeft {
    text-align: left
}
</style>