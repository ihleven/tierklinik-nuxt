<template>
    <article v-if="article.content" v-editable="article.content">
        <h1 class="title">{{ article.content.title }}</h1>
        <div class="content" v-html="content"></div>
    </article>
</template>

<script>
    import storyblokLivePreview from '@/mixins/storyblokLivePreview'

    export default {
        mixins: [storyblokLivePreview],
        props: ['article'],
        computed: {
            content() {
                return this.article ? this.$storyapi.richTextResolver.render(this.article.content.content) : ''
            },
        },
    }
</script>

<style></style>
