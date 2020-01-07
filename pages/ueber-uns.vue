<template>
    <div>
        <Navigation />

        <PageHero :img="story.content.hero_image" :heading="story.content.hero_title"></PageHero>

        <component :is="`${section.component.replace(/_/g, '-')}`" v-for="section in story.content.sections" :key="section._uid" :blok="section"></component>
    </div>
</template>

<script>
    import Navigation from '@/components/Navigation.vue'
    import PageHero from '@/components/PageHero'
    import storyblokLivePreview from '@/mixins/storyblokLivePreview'

    export default {
        layout: 'default',
        components: { Navigation, PageHero },
        mixins: [storyblokLivePreview],
        asyncData(context) {
            let version = context.query._storyblok || context.isDev ? 'draft' : 'published'
            let endpoint = `cdn/stories/ueber-uns`

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
            image() {
                return 'https:' + this.story.content.meta[0].image
            },
        },

        mounted() {
            console.log('mounted:', this.story)
        },
    }
</script>

<style>
    .hero {
        background-size: cover;
        background-position: 50% 50%;
        /* background-image: url('~assets/tierklinik/team.jpg'); */
    }
    .team {
        padding: 3rem 1rem;
    }
</style>
