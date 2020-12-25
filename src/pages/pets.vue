<template>
    <div>
        <PageHero :image="story.content.hero_image" :heading="story.content.hero_headline"></PageHero>

        <div class="grid grid-cols-1 lg:grid-cols-2">
            <component
                :is="`${section.component.replace(/_/g, '-')}`"
                v-for="section in story.content.sections"
                :key="section._uid"
                class="flex-wrap"
                :blok="section"
            ></component>
        </div>

        <Footer></Footer>
    </div>
</template>

<script>
    import storyblokLivePreview from '@/mixins/storyblokLivePreview'
    import PageHero from '@/components/PageHero'
    import Footer from '@/components/Footer'
    import SectionPets from '@/components/storyblok/SectionPets'

    export default {
        layout: 'default',
        components: { PageHero, Footer, SectionPets },
        mixins: [storyblokLivePreview],
        async asyncData(context) {
            const version = context.query._storyblok || context.isDev ? 'draft' : 'published'
            try {
                let response = await context.app.$storyapi.get('cdn/stories/pets', {
                    version: version,
                    cv: context.store.state.cacheVersion,
                })
                console.log('story:', response.data.story)
                return {
                    story: response.data.story,
                }
            } catch (e) {
                context.error({ message: e.message })
            }
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
            params() {
                return this.$route.params
            },
        },

        mounted() {
            // console.log('leistungen-route:', this.$route.params.leistung)
        },
        head: {
            title: 'Leistungen',
        },
    }
</script>

<style lang="scss" scoped></style>
