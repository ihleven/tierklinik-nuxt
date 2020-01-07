<template>
    <div class="content" v-html="blok.text"></div>
</template>

<script>
    export default {
        name: 'ElementContent',
        props: ['blok'],
    }
</script>
