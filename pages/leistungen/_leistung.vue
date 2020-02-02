<template>
    <article>
        <section class="hero is-primary box">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        {{ story.content.title }}
                    </h1>
                    <h2 class="subtitle">
                        {{ story.content.subtitle }}
                    </h2>
                </div>
            </div>
        </section>
        <section v-for="body in story.content.body" :key="body._uid">
            <component :is="`${body.component.replace(/_/g, '-')}`" :blok="body"></component>
        </section>
    </article>
</template>

<script>
    import storyblokLivePreview from '@/mixins/storyblokLivePreview'
    // import Navigation from '@/components/Navigation.vue'
    // import PageHero from '@/components/PageHero'
    // import Breadcrumbs from '@/components/Breadcrumbs'

    export default {
        // components: { Navigation, PageHero, Breadcrumbs },
        mixins: [storyblokLivePreview],
        asyncData(context) {
            return context.app.$storyapi
                .get(`cdn/stories/leistungen/${context.params.leistung}`, {
                    version: context.query._storyblok || context.isDev ? 'draft' : 'published',
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
        mounted() {
            console.log('leistung: ', this.$route.params.leistung)
        },
    }
</script>
<style lang="scss" scoped>
    .hero-body {
        padding: 0;
    }
    .body-element {
        border: 0px solid black;
    }
</style>
