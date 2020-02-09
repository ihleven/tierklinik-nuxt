<template>
    <div v-editable="blok" class="box" :class="classes">
        <component :is="b.component" v-for="b in blok.body" :key="b._uid" :blok="b"></component>
    </div>
</template>

<script>
    export default {
        name: 'Box',
        props: ['blok'],
        computed: {
            classes() {
                let notification = this.blok.notification ? 'notification ' : '',
                    color = this.blok.color ? ' ' + this.blok.color : ''
                return notification + this.blok.classes + color
            },
        },
        mounted() {
            console.log(' * box:', this.blok)
        },
    }
</script>

<style lang="scss"></style>
