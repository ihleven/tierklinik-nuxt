<template>
    <div>
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

import TierklinikHero from '@/components/TierklinikHero'
import Footer from '@/components/Footer'

export default {
    layout: 'start',
    components: { TierklinikHero, Footer },
    mixins: [storyblokLivePreview],
    async asyncData(context) {
        const version = context.query._storyblok || context.isDev ? 'draft' : 'published'

        const index = await context.app.$storyapi.get('cdn/stories/home', {
            version,
            cv: context.store.state.cacheVersion,
        })

        return {
            story: index.data.story,
        }
    },
    data() {
        return {}
    },
    head: {
        title: 'Tierärzte Tschabrun',
        titleTemplate: '%s',
    },
}
</script>
