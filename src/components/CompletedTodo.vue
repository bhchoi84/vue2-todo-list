<template>
    <div class="guideLine textAlignLeft">완료 건수 : {{completedTodoCount}}</div>
</template>
<script>
export default {
    computed: {
        todos(){
            return this.$store.state.todos
        },
        completedTodoCount(){
            // store state 값은 위처럼 메서드로 가져와서 사용
            return this.todos.filter( todo => todo.checked ).length;
        }
    }
}
</script>
<style scoped>
.guideLine {
    border: 1px solid red
}
.textAlignLeft {
    text-align: left
}
</style>