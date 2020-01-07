<template>
    <div>
        <PageHero :img="story.content.meta[0].image" :heading="story.content.meta[0].title"></PageHero>

        <section class="section team">
            <div class="container">
                <div class="columns">
                    <div class="intro column is-8 is-offset-2">
                        <h2 class="title">{{ story.content.heading }}</h2>
                        <br />
                        <p class="subtitle">{{ story.content.caption }}</p>
                    </div>
                </div>

                <div class="tile is-ancestor">
                    <div v-for="arzt in story.content.aerzte" :key="arzt._uid" class="tile is-parent">
                        <div class="article card">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src="~assets/tierklinik/rudi.jpg" alt="Placeholder image" />
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="content">
                                    <h3 class="title">{{ arzt.name }}</h3>
                                    <h5 class="subtitle">{{ arzt.name }}</h5>
                                    {{ arzt.description }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="tile is-ancestor">
                    <div class="tile is-parent">
                        <div class="article card">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src="~assets/tierklinik/rudi.jpg" alt="Placeholder image" />
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="content">
                                    <h3 class="title">Dr. Rudolf Tschabrun</h3>
                                    <h5 class="subtitle">Fachtierarzt</h5>
                                    Er ist ein vielseitiger Chirurg, die Tätigkeit reicht von anspruchsvollen Tumoroperationen über Abdominalchirurgie bis zu aufwendigen Knochenoperationen. Ein
                                    weiteres seiner Fachgebiete ist die Dermatologie.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tile is-parent">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src="~assets/tierklinik/sylvia.jpg" alt="Placeholder image" />
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="content">
                                    <h3 class="title">Dr. Sylvia Tschabrun</h3>
                                    <h5 class="subtitle">Fachtierärztin</h5>
                                    Ihre Fachgebiete sind Orthopädie und innere Medizin, mit dem Schwerpunkt Kardiologie. Sie ist für das Management der Tierklinik zuständig.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import PageHero from '@/components/PageHero'
    import storyblokLivePreview from '@/mixins/storyblokLivePreview'

    export default {
        layout: 'default',
        components: { PageHero },
        mixins: [storyblokLivePreview],
        asyncData(context) {
            let version = context.query._storyblok || context.isDev ? 'draft' : 'published'
            let endpoint = `cdn/stories/team`

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
            return {
                story: { content: { body: '' } },
                menuOpen: false,
                news: '',
            }
        },
        computed: {
            image() {
                return 'https:' + this.story.content.meta[0].image
            },
        },

        mounted() {
            console.log('mounted:', this.story)
        },
        // methods: {
        //     toggleMenu() {
        //         this.menuOpen = !this.menuOpen
        //     },
        // },
    }
</script>

<style>
    .hero {
        background-size: cover;
        background-position: 50% 50%;
        /* background-image: url('~assets/tierklinik/team.jpg'); */
    }
    .team {
        padding: 3rem 1rem;
    }
</style>
