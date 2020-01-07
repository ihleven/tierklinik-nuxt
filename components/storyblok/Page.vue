<template>
    <div v-editable="blok" class="page">
        <component v-for="blok in blok.body" :key="blok._uid" :is="blok.component" :blok="blok"></component>
    </div>
</template>

<script>
    export default {
        props: ['blok'],
    }
</script>
