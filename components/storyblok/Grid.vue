<template>
    <div v-editable="blok" class="util__flex">
        <component v-for="blok in blok.columns" :key="blok._uid" :is="blok.component" :blok="blok"></component>
    </div>
</template>

<script>
    export default {
        props: ['blok'],
    }
</script>
