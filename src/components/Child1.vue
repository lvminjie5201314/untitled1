<template>
    <div>
        孩子组件--{{myname}}
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "child1",
        props:['myname']
    }
</script>

<style scoped>

</style>