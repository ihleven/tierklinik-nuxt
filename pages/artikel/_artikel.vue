<template>
    <div>
        <!-- <Navigation /> -->
        <PageHero :image="story.content.image" :heading="story.content.title" :subheading="story.content.subtitle"></PageHero>
        <Breadcrumbs />

        {{ author }}

        <section class="section">
            <div class="container">
                <div v-editable="story.content" class="">
                    <h1>{{ story.content.name }}</h1>
                    <div class="content" v-html="body"></div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import storyblokLivePreview from '@/mixins/storyblokLivePreview'
    // import Navigation from '@/components/Navigation.vue'
    import PageHero from '@/components/PageHero'
    import Breadcrumbs from '@/components/Breadcrumbs'

    export default {
        components: { PageHero, Breadcrumbs },
        mixins: [storyblokLivePreview],
        asyncData(context) {
            return context.app.$storyapi
                .get(`cdn/stories/posts/${context.params.artikel}`, {
                    version: context.query._storyblok || context.isDev ? 'draft' : 'published',
                    cv: context.store.state.cacheVersion,
                })
                .then(res => {
                    return res.data
                })
                .catch(res => {
                    context.error({ statusCode: res.response.status, message: res.response.data })
                })
        },
        data() {
            return { story: { content: { body: '' } } }
        },
        computed: {
            author() {
                return this.$store.state.authors[this.story.content.author]
            },
            body() {
                return this.story.content.content ? this.$storyapi.richTextResolver.render(this.story.content.content) : ''
            },
        },
    }
</script>
