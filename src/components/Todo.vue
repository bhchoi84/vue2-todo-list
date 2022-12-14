<template>
    <div class="mb-3 mt-3 d-flex">
        <div>
            <input type="checkbox" @change="toggleCheckbox" />
        </div>
        <span 
         class="ml-2 flex-grow-1"  
         style="text-align: left"
         :class="todo.checked ? 'text-muted':''"
         :style="todo.checked ? 'text-decoration: line-through':''"
         >{{todo.text}}</span>
         <button 
            class="btn btn-danger btn-sm"
            @click="clickDelete"
            >삭제</button>
    </div>
</template>
<script>

export default {
    name: 'todo',
     props: {
        todo: {
            type: Object,
            required: true
        }
    },
    components: {

    },
    methods: {
        toggleCheckbox(e){
            this.$emit('toggle-checkbox',{
                id: this.todo.id,
                checked: e.target.checked
            })
        },
        clickDelete(){
            this.$emit('click-delete', this.todo.id)
        }
    }
   
}
</script>
<style scoped></style>