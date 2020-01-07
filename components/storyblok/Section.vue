<template>
    <section class="section">
        <div class="container">
            <component :is="e.component" v-for="e in blok.body" :key="e._uid" :blok="e"></component>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Section',
        props: ['blok'],
        mounted() {
            console.log('section:', this.blok._uid, this.blok.body)
        },
    }
</script>

<style lang="scss" scoped></style>
