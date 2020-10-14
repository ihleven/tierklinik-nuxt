<template>
    <div>
        <PageHero :image="image" :heading="story.content.hero_headline" :subheading="subheading"></PageHero>

        <div class="tabs is-boxed">
            <ul>
                <li v-for="c in categories" :key="c.uuid" :class="{ 'is-active': c.name == $route.params.category }">
                    <n-link :to="'/ratgeber/' + c.slug">
                        <span class="icon is-small"><i class="far fa-file-alt" aria-hidden="true"></i></span>
                        <span>{{ c.name }}</span>
                    </n-link>
                </li>
            </ul>
        </div>

        <nuxt-child :categories="categories" :heading="story.content.heading" />

        <Footer></Footer>
    </div>
</template>

<script>
    import storyblokLivePreview from '@/mixins/storyblokLivePreview'

    // import Navigation from '@/components/Navigation.vue'
    import PageHero from '@/components/PageHero'
    import Footer from '@/components/Footer'

    export default {
        layout: 'default',
        components: {
            PageHero,
            Footer,
        },
        mixins: [storyblokLivePreview],
        asyncData(context) {
            let version = context.query._storyblok || context.isDev ? 'draft' : 'published'
            let endpoint = `cdn/stories/ratgeber`

            return context.app.$storyapi
                .get(endpoint, {
                    version: version,
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
            return {
                story: { content: { body: '' } },
                menuOpen: false,
                news: '',
            }
        },
        computed: {
            categories() {
                return this.story.content.categories.map(c => this.$store.state.categoryByUuid[c])
            },
            category() {
                if (this.$route.params.category) {
                    return this.$store.state.categoryByName[this.$route.params.category]
                }
                return null
            },
            image() {
                return this.category ? this.category.content.image : 'https:' + this.story.content.hero_image
            },
            subheading() {
                return this.category ? this.category.content.name : null
            },
        },

        mounted() {
            // console.log('leistungen:', this.$store.state.categoryByUuid)
        },
    }
</script>

<style scoped>
    .category card-image {
        /* width: 240px; */
        /* height: 160px; */
    }
    .card.is-horizontal {
        flex-direction: row;
        display: flex;
        flex-basis: 50ex;
        flex-grow: 0;
        flex-shrink: 1;
        align-items: center;
    }

    .card.is-horizontal .card-image {
        align-self: center;
    }
    .card-image img {
        border-bottom-left-radius: 4px;
        border-top-right-radius: 0;
    }
    .card.is-horizontal .image {
        min-height: 100%;
    }

    .card.is-horizontal .card-content {
        flex: 1;
    }

    .card.is-horizontal .card-content {
        padding-left: 1em;
        padding-top: 0;
        padding-bottom: 0;
        font-size: 0.8em;
    }

    .card.is-horizontal {
        ul {
            list-style: none;
            margin: 0;
        }

        .is-divider {
            margin-top: 1.5rem;
            margin-bottom: 1rem;
        }
    }
</style>
