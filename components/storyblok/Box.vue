<template>
    <div v-editable="blok" class="box">
        <p>{{ blok.text }}</p>
    </div>
</template>

<script>
    export default {
        name: 'Box',
        props: ['blok'],
    }
</script>

<style lang="scss"></style>
