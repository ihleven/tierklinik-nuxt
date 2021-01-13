<template>
    <div>
        <!-- <TopBar></TopBar> -->
        <TierklinikHero></TierklinikHero>

        <component
            :is="`${section.component.replace(/_/g, '-')}`"
            v-for="section in story.content.sections"
            :key="section._uid"
            :blok="section"
        ></component>

        <Footer></Footer>
    </div>
</template>

<script>
import storyblokLivePreview from '@/mixins/storyblokLivePreview'
// import TopBar from '@/components/TopBar'
import TierklinikHero from '@/components/TierklinikHero'
import Footer from '@/components/Footer'

export default {
    layout: 'start',
    components: { TierklinikHero, Footer },
    mixins: [storyblokLivePreview],
    // asyncData(context) {
    //     let version = context.query._storyblok || context.isDev ? 'draft' : 'published'
    //     let endpoint = `cdn/stories/home`

    //     return context.app.$storyapi
    //         .get(endpoint, {
    //             version: version,
    //             cv: context.store.state.cacheVersion,
    //         })
    //         .then(res => {
    //             return res.data
    //         })
    //         .catch(res => {
    //             context.error({ statusCode: res.response.status, message: res.response.data })
    //         })
    // },
    async asyncData(context) {
        const version = context.query._storyblok || context.isDev ? 'draft' : 'published'

        const index = await context.app.$storyapi.get('cdn/stories/home', {
            version,
            cv: context.store.state.cacheVersion,
        })
        // let lostFound = await context.app.$storyapi.get('cdn/stories', {
        //     version: version,
        //     starts_with: 'lostandfound',
        //     cv: context.store.state.cacheVersion,
        // })

        return {
            story: index.data.story,
            // lost: lostFound.data.stories,
        }
    },
    data() {
        return {
            // project: 'default',
            // items: [
            //     {
            //         src: 'https://i.picsum.photos/id/395/640/480.jpg',
            //         w: 1024,
            //         h: 768,
            //     },
            //     {
            //         src: 'https://i.picsum.photos/id/237/640/480.jpg',
            //         w: 1024,
            //         h: 768,
            //     },
            // ],
        }
    },
    mounted() {
        // console.log('homepage:', this.story, this.lost)
    },
    methods: {
        // open() {},
    },
    head: {
        title: 'Tierklinik Tschabrun',
        titleTemplate: '%s',
    },
}
</script>

<style lang="scss" scoped>
// .panel-block {
//     background-color: white;
//     padding: 0.75rem 1rem;
// }
</style>
