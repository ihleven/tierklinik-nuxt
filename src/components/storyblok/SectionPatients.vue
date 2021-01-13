<template>
    <section v-editable="blok">
        <div class="grid grid-cols-1 lg:grid-cols-2">
            <Patient v-for="patient in patienten" :key="patient.id" :p="patient" />
        </div>
    </section>
</template>

<script>
import storyblokLivePreview from '@/mixins/storyblokLivePreview'

import Patient from '@/components/storyblok/Patient'

export default {
    components: { Patient },
    mixins: [storyblokLivePreview],
    props: ['blok'],

    data() {
        return {
            patienten: [],
        }
    },
    async fetch() {
        // console.log(this.$storyapi, this.$store.state.cacheVersion)
        const response = await this.$storyapi.get('cdn/stories', {
            starts_with: `patienten`,
            is_startpage: false,
            // sort_by: 'content.datum:desc',
            version: 'draft',
            cv: this.$store.state.cacheVersion,
        })
        this.patienten = response.data.stories
        // set status code on server and
        // if (process.server) {
        //     this.$nuxt.context.res.statusCode = 404
        // }
        // use throw new Error()
        // throw new Error('Post not found')
    },

    mounted() {
        console.log('section pets:', this.blok)
    },
}
</script>
