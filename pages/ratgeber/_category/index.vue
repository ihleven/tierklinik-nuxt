<template>
    <div>article index</div>
</template>

<script>
    import storyblokLivePreview from '@/mixins/storyblokLivePreview'

    export default {
        mixins: [storyblokLivePreview],
        props: ['categories'],
    }
</script>
