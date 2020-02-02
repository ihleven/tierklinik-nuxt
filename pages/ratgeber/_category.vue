<template>
    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column">
                    <aside class="menu">
                        <p class="menu-label">
                            {{ category.name }}
                        </p>
                        <ul class="menu-list">
                            <li v-for="story in stories" :key="story._uid">
                                <n-link :to="'/ratgeber/' + $route.params.category + '/' + story.slug">{{ story.name }}</n-link>
                            </li>
                        </ul>
                    </aside>
                </div>
                <div class="column">
                    <nuxt-child :article="article" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import storyblokLivePreview from '@/mixins/storyblokLivePreview'

    export default {
        mixins: [storyblokLivePreview],
        asyncData(context) {
            let category = context.store.state.categoryByName[context.params.category]
            return context.app.$storyapi
                .get(`cdn/stories`, {
                    version: context.query._storyblok || context.isDev ? 'draft' : 'published',
                    cv: context.store.state.cacheVersion,
                    starts_with: 'ratgeber/',
                    'filter_query[categories][exists]': category.uuid,
                    is_startpage: 0,
                })
                .then(res => {
                    return res.data
                })
                .catch(res => {
                    context.error({ statusCode: res.response.status, message: res.response.data })
                })
        },

        computed: {
            category() {
                return this.$store.state.categoryByName[this.$route.params.category]
            },
            article() {
                let filteredlist = this.stories.filter(story => story.slug == this.$route.params.article)
                return filteredlist.length ? filteredlist[0] : null
            },
        },
    }
</script>

<style></style>
