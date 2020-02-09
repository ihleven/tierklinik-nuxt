<template>
    <div>
        <Navigation />
        <PageHero :image="image" :heading="title" :subheading="subtitle"></PageHero>

        <section class="section"></section>

        <Footer />
    </div>
</template>

<script>
    import storyblokLivePreview from '@/mixins/storyblokLivePreview'
    import Navigation from '@/components/Navigation.vue'
    import PageHero from '@/components/PageHero'
    import Footer from '@/components/Footer'
    export default {
        layout: 'default',
        components: { Navigation, PageHero, Footer },
        mixins: [storyblokLivePreview],
        // asyncData(context) {
        //     return context.app.$storyapi
        //         .get(`cdn/stories/datenschutz`, {
        //             version: context.query._storyblok || context.isDev ? 'draft' : 'published',
        //             cv: context.store.state.cacheVersion,
        //         })
        //         .then(res => {
        //             return res.data
        //         })
        //         .catch(res => {
        //             context.error({ statusCode: res.response.status, message: res.response.data })
        //         })
        // },
        data() {
            return {
                title: 'Datenschutz',
                subtitle: null,
            }
        },
        computed: {
            image() {
                return '//a.storyblok.com/f/72564/2776x3866/f2902f74d9/charles-k4msj7kc0as-unsplash-hund-mit-jeansjacke.jpg'
            },
        },

        mounted() {
            console.log(' * Datenschutz:', this.story)
        },
    }
</script>

<style></style>
