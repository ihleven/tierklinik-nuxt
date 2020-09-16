<template>
    <main>
        <!-- <Navigation /> -->
        <PageHero :image="story.content.hero_image | transformImage('0x1000/smart')" :heading="story.content.hero_headline"></PageHero>

        <section class="section">
            <div class="container">
                <div class="columns">
                    <div v-for="post in articles" :key="post.content._uid" class="column is-one-third">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img :src="post.content.image | transformImage('200x150/smart')" :alt="post.content.title" />
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-left">
                                        <figure class="image is-48x48">
                                            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                                        </figure>
                                    </div>
                                    <div class="media-content">
                                        <p class="title is-4">{{ post.content.title }}</p>
                                        <p class="subtitle is-6">{{ post.content.author }}</p>
                                    </div>
                                </div>

                                <div class="content">
                                    {{ post.content.teaser }} <br />
                                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                                </div>
                                <nuxt-link :to="'/artikel/' + post.slug">Lesen</nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
    // import Navigation from '@/components/Navigation.vue'
    import PageHero from '@/components/PageHero'
    export default {
        components: { PageHero },
        async asyncData(context) {
            let version = context.query._storyblok || context.isDev ? 'draft' : 'published'
            let index = await context.app.$storyapi.get('cdn/stories/posts/index', {
                version: version,
                cv: context.store.state.cacheVersion,
            })
            let stories = await context.app.$storyapi.get('cdn/stories', {
                version: version,
                starts_with: 'posts',
                cv: context.store.state.cacheVersion,
            })
            // .then(res => {
            //     console.log(res.data)
            //     return res
            // })
            // .catch(res => {
            //     context.error({ statusCode: res.response.status, message: res.response.data })
            // })

            return {
                story: index.data.story,
                articles: stories.data.stories.filter(s => s.content.component == 'post'),
            }
        },
        data() {
            return { total: 0, data: { stories: [] } }
        },
        mounted() {
            console.log(this.story, this.articles)
        },
    }
</script>
