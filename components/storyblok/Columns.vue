<template>
    <div v-editable="blok" class="columns">
        <component :is="column.component" v-for="column in blok.columns" :key="column._uid" :blok="column"></component>
    </div>
</template>

<script>
    export default {
        name: 'Columns',
        props: ['blok'],
        computed: {
            classes() {
                let parent = this.blok.is_parent ? 'is-parent ' : '',
                    vertical = this.blok.is_vertical ? 'is-vertical ' : '',
                    size = this.blok.size ? `is-${this.blok.size}` : ''
                return parent + vertical + size
            },
        },
        mounted() {
            console.log('columns:', this.blok)
        },
    }
</script>
