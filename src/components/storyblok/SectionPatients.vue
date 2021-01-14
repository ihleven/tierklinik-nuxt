<template>
    <section v-editable="blok">
        <Pagination :current="current" :total="numPages" @page="setPage"></Pagination>
        <div class="grid grid-cols-1 lg:grid-cols-2">
            <Patient v-for="patient in patienten" :key="patient.id" :p="patient" />
        </div>
        <Pagination :current="current" :total="numPages" @page="setPage"></Pagination>
    </section>
</template>

<script>
import storyblokLivePreview from '@/mixins/storyblokLivePreview'

import Patient from '@/components/storyblok/Patient'
import Pagination from '@/components/Pagination'

export default {
    components: { Patient, Pagination },
    mixins: [storyblokLivePreview],
    props: ['blok'],

    async fetch() {
        const response = await this.$storyapi.get('cdn/stories', {
            starts_with: `patienten`,
            is_startpage: false,
            per_page: this.pageSize,
            page: this.current,
            // sort_by: 'content.datum:desc',
            version: 'draft',
            cv: this.$store.state.cacheVersion,
        })

        this.total = parseInt(response.headers.total)
        this.pageSize = parseInt(response.headers['per-page'])
        this.numPages = Math.ceil(this.total / this.pageSize)

        this.patienten = response.data.stories
        // set status code on server and
        // if (process.server) {
        //     this.$nuxt.context.res.statusCode = 404
        // }
        // use throw new Error()
        // throw new Error('Post not found')
    },
    fetchOnServer: false,

    data() {
        return {
            current: parseInt(this.$route.query.page) || 1,
            total: 1,
            pageSize: 20,
            numPages: 1,
            patienten: [],
        }
    },

    mounted() {
        console.log('section pets:', this.blok, this.$route.query.page)
    },
    methods: {
        setPage(page) {
            this.current = page
            this.$fetch()
        },
    },
}
</script>
