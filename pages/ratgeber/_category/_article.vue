<template>
    <div>article {{ article }}</div>
</template>

<script>
    import storyblokLivePreview from '@/mixins/storyblokLivePreview'

    export default {
        mixins: [storyblokLivePreview],
        props: ['article'],
    }
</script>

<style></style>
