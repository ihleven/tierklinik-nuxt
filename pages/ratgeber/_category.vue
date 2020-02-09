<template>
    <section class="section">
        <div v-if="article.uuid" class="container">
            <!-- <h1 class="title">{{ article.content.title }}</h1> -->

            <nav class="panel is-primary">
                <p class="panel-heading">Inhalt {{ category.name }}</p>

                <n-link
                    v-for="story in stories"
                    :key="story._uid"
                    class="panel-block is-size-6"
                    :to="'/ratgeber/' + category.slug + '/' + story.slug"
                    :class="{ 'is-active': story.uuid == article.uuid }"
                >
                    <span class="panel-icon">
                        <i class="fas fa-book" aria-hidden="true"></i>
                    </span>
                    {{ story.name }}
                </n-link>
            </nav>
            <nuxt-child :article="article" class="article box" />
        </div>
        <div v-else class="container">
            <nuxt-child :articles="stories" :category="category" />
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
                return filteredlist.length ? filteredlist[0] : { uuid: 0 }
            },
        },
    }
</script>

<style lang="scss" scoped>
    .article {
        margin-right: 3rem;
    }
    .panel {
        float: right;
        margin: -1rem -1rem 2rem 2rem;
        background-color: white;
        max-width: 30%;
    }
    .panel-block {
        padding: 0.75rem 1rem;
        &.is-active {
            background-color: #f5f5f5;
        }
        font: 1rem/1.25 Helvetica;
    }
</style>
