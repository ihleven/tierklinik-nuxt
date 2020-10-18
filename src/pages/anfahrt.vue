<template>
    <div>
        <PageHero :image="story.content.hero_image | transformImage('0x1000/smart')" :heading="story.content.hero_headline"></PageHero>

        <component :is="`${section.component.replace(/_/g, '-')}`" v-for="section in story.content.sections" :key="section._uid" :blok="section"></component>

        <!-- <no-ssr>
            <l-map :zoom="13" :center="[47.41322, -1.219482]">
                <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
                <l-marker :lat-lng="[47.41322, -1.219482]"></l-marker>
            </l-map>
        </no-ssr> -->
        <Footer></Footer>
    </div>
</template>

<script>
    import storyblokLivePreview from '@/mixins/storyblokLivePreview'

    import PageHero from '@/components/PageHero'
    import Footer from '@/components/Footer'

    export default {
        components: { PageHero, Footer },
        mixins: [storyblokLivePreview],
        layout: 'default',
        async asyncData(context) {
            let version = context.query._storyblok || context.isDev ? 'draft' : 'published'
            let response = await context.app.$storyapi.get('cdn/stories/anfahrt', {
                version: version,
                cv: context.store.state.cacheVersion,
            })
            console.log('story:', response.data.story)
            return {
                story: response.data.story,
            }
        },
        head: {
            title: 'Anfahrt',
        },
    }
</script>

<style lang="scss"></style>
