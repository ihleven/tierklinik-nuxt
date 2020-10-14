<template>
    <main>
        <!-- <Navigation /> -->
        <PageHero :image="story.content.hero_image | transformImage('0x1000/smart')" :heading="story.content.hero_headline"></PageHero>

        <section class="section">
            <div class=" wrapper">
                <div v-for="post in articles" :key="post.content._uid" class="">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <img :src="post.content.image | transformImage('400x300/smart')" :alt="post.content.title" />
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div v-if="post.author" class="media-left">
                                    <figure class="image is-1-by-1">
                                        <img :src="post.author.avatar | transformImage('72x72/smart')" :alt="post.author.name" class="is-rounded" />
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <p class="title is-4">{{ post.content.title }}</p>
                                    <div class="subtitle is-6">
                                        <span v-if="post.author && post.author.name">von {{ post.author.name }}</span> am <time>{{ post.created_at | formatDate }}</time>
                                    </div>
                                </div>
                            </div>

                            <div class="content">
                                {{ post.content.teaser }}
                            </div>
                            <nuxt-link v-if="isempty(post.content.content)" :to="'/aktuelles/' + post.slug">Lesen</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer></Footer>
    </main>
</template>

<script>
    // import Navigation from '@/components/Navigation.vue'
    import PageHero from '@/components/PageHero'
    import Footer from '@/components/Footer'
    export default {
        components: { PageHero, Footer },
        filters: {
            formatDate: date => Intl.DateTimeFormat('de-AT').format(new Date(date)),
        },
        async asyncData(context) {
            let version = context.query._storyblok || context.isDev ? 'draft' : 'published'

            let index = await context.app.$storyapi.get('cdn/stories/posts/index', {
                version: context.query._storyblok || context.isDev ? 'draft' : 'published',
                cv: context.store.state.cacheVersion,
            })

            let stories = await context.app.$storyapi.get('cdn/stories', {
                version: version,
                starts_with: 'posts',
                cv: context.store.state.cacheVersion,
            })

            let articles = stories.data.stories.filter(s => s.content.component == 'post')
            articles.forEach(a => {
                a.author = context.store.state.authors[a.content.author] || {}
            })

            return {
                story: index.data.story,
                articles: articles,
            }
        },
        data() {
            return { total: 0, data: { stories: [] } }
        },
        computed: {
            authors() {
                // console.log('authors:', this.$store.state.authors)
                return this.$store.state.authors
            },
        },
        mounted() {
            // console.log('authors:', this.authors['765c7cee-399c-4514-9d2b-8ed4c861019b'].name)
        },
        methods: {
            isempty(content) {
                if (content) {
                    return this.$storyapi.richTextResolver.render(content).replace(/<[^>]*>?/gm, '').length
                }
                return ''
                //
            },
        },
    }
</script>

<style scoped>
    .wrapper {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-gap: 1.5rem;
    }
    .card {
        height: 100%;
        margin-bottom: 0;
    }
</style>
