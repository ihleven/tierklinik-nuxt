<template>
    <div>
        <!-- <Navigation /> -->
        <PageHero :image="image" :heading="title" :subheading="subtitle"></PageHero>

        <section class="section">
            <div style="width: 700px;position: relative;">
                <iframe
                    width="700"
                    height="440"
                    src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=6714%20N%C3%BCziders%2C%20Elserweg%208a+(Tierklinik%20Tschabrun)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                ></iframe>
                <div style="position: absolute;width: 80%;bottom: 10px;left: 0;right: 0;margin-left: auto;margin-right: auto;color: #000;text-align: center;">
                    <small style="line-height: 1.8;font-size: 2px;background: #fff;"
                        >Powered by <a href="http://www.googlemapsgenerator.com/pt/">googlemapsgen (pt)</a> &
                        <a href="https://www.buyinstagramfollowersreviews.net/">5 ways to clean up your twitter pro buy followers guide</a></small
                    >
                </div>
                <style>
                    #gmap_canvas img {
                        max-width: none !important;
                        background: none !important;
                    }
                </style>
            </div>
        </section>

        <Footer />
    </div>
</template>

<script>
    import storyblokLivePreview from '@/mixins/storyblokLivePreview'
    // import Navigation from '@/components/Navigation.vue'
    import PageHero from '@/components/PageHero'
    import Footer from '@/components/Footer'

    export default {
        layout: 'default',
        components: { PageHero, Footer },
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
                title: 'Kontakt',
                subtitle: null,
            }
        },
        computed: {
            image() {
                return '//a.storyblok.com/f/72564/2776x3866/f2902f74d9/charles-k4msj7kc0as-unsplash-hund-mit-jeansjacke.jpg'
            },
        },

        mounted() {
            console.log(' * Impressum:', this.story)
        },
    }
</script>

<style></style>
