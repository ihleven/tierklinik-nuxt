<template>
    <div>
        <PageHero :image="story.content.hero_image" :heading="story.content.hero_headline"></PageHero>

        <nav class="navbar page" role="navigation" aria-label="main navigation" style="min-height:3.25rem;box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);">
            <!--background: #eff3f4;-->
            <a v-for="item in submenu" :key="item._uid" class="navbar-item" @click="scrollTo(item.config[0].nav_item)">
                <h4 class="subtitle is-5">{{ item.config[0].nav_item }}</h4>
            </a>
        </nav>
        <component :is="`${section.component.replace(/_/g, '-')}`" v-for="section in story.content.sections" :key="section._uid" :ref="navItem(section)" :blok="section"></component>
        <Footer></Footer>
    </div>
</template>

<script>
    import storyblokLivePreview from '@/mixins/storyblokLivePreview'
    import Navigation from '@/components/Navigation.vue'
    import PageHero from '@/components/PageHero'
    import Breadcrumbs from '@/components/Breadcrumbs'
    import Footer from '@/components/Footer'

    export default {
        layout: 'default',
        components: { Navigation, PageHero, Breadcrumbs, Footer },
        mixins: [storyblokLivePreview],
        asyncData(context) {
            let version = context.query._storyblok || context.isDev ? 'draft' : 'published'
            let endpoint = `cdn/stories/ueber-uns`

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
            return {}
        },
        computed: {
            image() {
                return 'https:' + this.story.content.meta[0].image
            },
            submenu() {
                return this.story.content.sections.filter(s => s.component == 'chapter_intro')
            },
        },

        mounted() {
            // this.story.content.sections.forEach(element => {
            //     console.log('element:', element)
            // })
            // console.log('mounted:', this.submenu)
        },
        methods: {
            scrollTo(anchor) {
                let element = document.getElementById(`${anchor}`)
                // console.log(anchor, element)

                element.scrollIntoView({ block: 'start', behavior: 'smooth' })
            },
            navItem(section) {
                if (section && section.config && section.config[0]) return section.config[0].nav_item
            },
        },
        head: {
            title: 'Über uns',
        },
    }
</script>
<style lang="scss" scoped>
    .tile {
        &.is-ancestor {
            justify-content: space-evenly;
        }
    }
    .navbar.page {
        display: flex;
        justify-content: center;
        min-height: 3.25rem;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
        align-items: strech;
        .navbar-item {
            display: flex;
            align-items: center;
        }
    }
    .card-content {
        .content {
            .body {
                font: 1rem/1.25 Helvetica;
            }
        }
    }
</style>
