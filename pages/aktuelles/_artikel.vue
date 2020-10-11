<template>
    <div>
        <!-- <Navigation /> -->
        <PageHero :image="story.content.image" :heading="story.content.title" :subheading="story.content.subtitle"></PageHero>
        <Breadcrumbs page="Aktuelles" pagehref="/aktuelles" :self="story.content.title" />

        <section class="section">
            <div class="container">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-96x96">
                            <img :src="author.avatar | transformImage('96x96/smart')" :alt="author.name" class="is-rounded" />
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-3">{{ story.content.title }}</p>
                        <div class="subtitle is-5">
                            von {{ author.name }} am <time datetime="2016-1-1">{{ story.created_at | formatDate }}</time>
                        </div>
                    </div>
                </div>
                <br />
                <div v-editable="story.content" class="content">
                    <blockquote>{{ story.content.teaser }}</blockquote>
                    <div v-html="body"></div>
                </div>
            </div>
        </section>
        <Footer></Footer>
    </div>
</template>

<script>
    import storyblokLivePreview from '@/mixins/storyblokLivePreview'
    // import Navigation from '@/components/Navigation.vue'
    import PageHero from '@/components/PageHero'
    import Breadcrumbs from '@/components/Breadcrumbs'
    import Footer from '@/components/Footer'
    export default {
        components: { PageHero, Breadcrumbs, Footer },
        filters: {
            formatDate: date => Intl.DateTimeFormat('de-AT').format(new Date(date)),
        },
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
