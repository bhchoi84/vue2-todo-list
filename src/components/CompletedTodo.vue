<template>
    <div class="guideLine textAlignLeft">완료 건수 : {{completedTodoCount}}</div>
</template>
<script>
export default {
    props: {
        todos: {
            type: Array,
            required: true
        }
    },
    computed: {
        completedTodoCount(){
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