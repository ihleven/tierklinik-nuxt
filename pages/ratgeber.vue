<template>
    <div>
        <Navigation />

        <PageHero :img="story.content.hero_image" :heading="story.content.hero_headline"></PageHero>

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
            let endpoint = `cdn/stories/ratgeber/uebersicht`

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
            console.log('leistungen:', this.story)
        },
    }
</script>

<style></style>
