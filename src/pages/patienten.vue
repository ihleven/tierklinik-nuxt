<template>
    <div>
        <PageHero :image="page.content.hero_image" :heading="page.content.hero_headline"></PageHero>

        <component
            :is="`${section.component.replace(/_/g, '-')}`"
            v-for="section in page.content.sections"
            :key="section._uid"
            class="flex-wrap"
            :blok="section"
        ></component>

        <Footer></Footer>
    </div>
</template>

<script>
import storyblokLivePreview from '@/mixins/storyblokLivePreview'
import PageHero from '@/components/PageHero'
import Footer from '@/components/Footer'
import SectionPatients from '@/components/storyblok/SectionPatients'

export default {
    components: { PageHero, Footer, SectionPatients },
    mixins: [storyblokLivePreview],
    layout: 'default',
    async asyncData(context) {
        const version = context.query._storyblok || context.isDev ? 'draft' : 'published'
        try {
            const response = await context.app.$storyapi.get('cdn/stories/patienten', {
                version,
                cv: context.store.state.cacheVersion,
            })
            return {
                page: response.data.story,
            }
        } catch (e) {
            context.error({ message: e.message })
        }
    },
    data() {
        return {
            page: { content: { body: '' } },
        }
    },
    head: {
        title: 'Patienten',
    },

    mounted() {
        console.log('patienten page:', this.page)
    },
}
</script>

<style lang="scss" scoped></style>
