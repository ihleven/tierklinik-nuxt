<template>
    <div>
        <PageHero :image="story.content.hero_image | transformImage('0x1000/smart')" heading="Gesucht & gefunden" subheading="Dramen & Erfolgsgeschichten"></PageHero>

        <section class="section"></section>
    </div>
</template>

<script>
    import PageHero from '@/components/PageHero'
    import storyblokLivePreview from '@/mixins/storyblokLivePreview'

    export default {
        layout: 'default',
        components: { PageHero },
        mixins: [storyblokLivePreview],
        asyncData(context) {
            let version = context.query._storyblok || context.isDev ? 'draft' : 'published'
            let endpoint = `cdn/stories/posts/index`

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
            return {}
        },
        computed: {
            image() {
                return 'https:' + this.story.content.hero_image
            },
        },

        mounted() {
            console.log(' * gesucht/gefunden:', this.story)
        },
    }
</script>

<style></style>
