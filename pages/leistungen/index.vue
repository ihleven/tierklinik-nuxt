<template>
    <!-- <div>
        <div v-for="section in story.content.sections" :key="section._uid" class="tile ">
            <div class="tile is-parent">
                <div class="tile is-child box">
                    <component :is="`${section.component.replace(/_/g, '-')}`" :blok="section"></component>
                </div>
            </div>
        </div>
    </div> -->
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

    export default {
        mixins: [storyblokLivePreview],
        asyncData(context) {
            return context.app.$storyapi
                .get(`cdn/stories/leistungen/`, {
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
        computed: {
            image() {
                return 'https:' + this.story.content.meta[0].image
            },
        },

        mounted() {
            console.log('leistungen index:', this.story)
        },
    }
</script>

<style></style>
