<template>
    <div class="textAlignLeft">
        <h1>User List</h1> 
        <ul class="listStyleNone">
            <li v-for="user in users" :key="user.id">{{user.id}} {{user.name}}</li>
        </ul>
    </div>
</template>
<script>

export default {
    computed:{
        users(){
            return this.$store.state.users
        }
    },
    methods: {
        getUsers(){
            console.log('2 getUsers ===> store call');
            this.$store.dispatch('getUsers')
        }
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