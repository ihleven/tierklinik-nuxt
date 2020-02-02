<template>
    <div>
        <TierklinikHero></TierklinikHero>

        <component :is="`${section.component.replace(/_/g, '-')}`" v-for="section in story.content.sections" :key="section._uid" :blok="section"></component>
        <Footer></Footer>
    </div>
</template>

<script>
    import storyblokLivePreview from '@/mixins/storyblokLivePreview'
    import TierklinikHero from '@/components/TierklinikHero'
    import Footer from '@/components/Footer'

    export default {
        layout: 'default',
        components: { TierklinikHero, Footer },
        mixins: [storyblokLivePreview],
        asyncData(context) {
            let version = context.query._storyblok || context.isDev ? 'draft' : 'published'
            let endpoint = `cdn/stories/home`

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
                project: 'default',
                items: [
                    {
                        src: 'https://i.picsum.photos/id/395/640/480.jpg',
                        w: 1024,
                        h: 768,
                    },
                    {
                        src: 'https://i.picsum.photos/id/237/640/480.jpg',
                        w: 1024,
                        h: 768,
                    },
                ],
            }
        },
        mounted() {
            console.log('homepage:', this.story)
        },
        methods: {
            open() {},
        },
    }
</script>
