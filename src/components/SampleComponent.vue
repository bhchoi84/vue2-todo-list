<template>
    <div class="guideLine">
        <h2>{{title}}</h2>
        <slot name="header" :header="header" ></slot>
        <slot name="body" :body="body" ></slot>
        <slot name="footer" :footer="footer" ></slot>
        <slot :defaultVal="defaultVal" ></slot><!--default -->
        <button @click="$emit('click-event', $event)" >Click</button>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
            default: '샘플 component'
        }
    },
    data(){
        return {
            header: 'slot 자식 컴포넌트가 올려보낸 header props값',
            body: 'slot 자식 컴포넌트가 올려보낸 body props값',
            footer: 'slot 자식 컴포넌트가 올려보낸 footer props값',
            defaultVal: 'slot 자식 컴포넌트가 올려보낸 defaultVal props값'
        
        }
    },
    methods: {
        updateName(){
            // this.title = 'updated component name'
            // 자식 컴포넌트에서 부모로 부터 받은 props 값을 수정하면 안된다.
        }
    }
}
</script>
<style scoped>
    .guideLine {
        border: 1px solid red
    }
    h2 {
        color: brown
    }
</style>