<template>
    <p class="subtitle" :class="classes">{{ blok.text }}</p>
</template>

<script>
    export default {
        name: 'Subtitle',
        props: ['blok'],
        computed: {
            classes() {
                let size = this.blok.size ? `is-${this.blok.size}` : ''
                return size + this.blok.classes
            },
        },
        mounted() {
            // console.log('tile:', this.blok.is_parent, this.blok.is_vertical, this.blok.size, this.blok.tiles)
        },
    }
</script>
