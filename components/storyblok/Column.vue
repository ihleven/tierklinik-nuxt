<template>
    <div v-editable="blok" class="column">
        <component :is="block.component" v-for="block in blok.blocks" :key="block._uid" :blok="block"></component>
    </div>
</template>

<script>
    export default {
        name: 'Column',
        props: ['blok'],
        computed: {
            classes() {
                return this.blok.classes
            },
        },
        mounted() {
            // console.log('column:', this.blok)
        },
    }
</script>
