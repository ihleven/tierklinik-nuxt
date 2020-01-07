<template>
    <div>
        <Navigation />
        <PageHero :img="story.content.hero_image" :heading="story.content.hero_title"></PageHero>

        <section class="section">
            <div class="container">
                <div class="tile is-ancestor">
                    <div class="tile is-parent is-3">
                        <div class="tile is-child">
                            <aside class="menu">
                                <p class="menu-label">
                                    Fachgebiete
                                </p>
                                <ul class="menu-list">
                                    <li><a>Innere</a></li>
                                    <li><a>Kardiologie</a></li>
                                    <li><a>Orthopädie</a></li>
                                    <li><a>Dermatologie</a></li>
                                    <li><a>Zahnbehandlungen</a></li>
                                    <li><a>Onkologie</a></li>
                                    <li><a>Gyn</a></li>
                                    <li><a>Behandlung und Chirurgie von Kaninchen und Meerschweinchen</a></li>
                                </ul>
                                <p class="menu-label">
                                    Behandlung / Therapie
                                </p>
                                <ul class="menu-list">
                                    <li>
                                        <a class="is-active">Operationen</a>
                                        <ul>
                                            <li><a>Weichteilchirurgie</a></li>
                                            <li><a>Gelenks-Chirurgie</a></li>
                                            <li><a>Knochenchirurgie</a></li>
                                            <li><a>Tumorentfernungen</a></li>
                                        </ul>
                                    </li>
                                    <li><a>Medikamente</a></li>
                                    <li><a>Akkupunktur</a></li>
                                    <li><a>Lasertherapie</a></li>
                                </ul>
                                <p class="menu-label">
                                    Diagnostik
                                </p>
                                <ul class="menu-list">
                                    <li><a>Digitales Röntgen</a></li>
                                    <li><a>Blutanalysegerät für Blutchemie </a></li>
                                    <li><a>Ultraschall</a></li>
                                    <li><a>Mikroskop</a></li>
                                </ul>
                            </aside>
                        </div>
                    </div>
                    <div class="tile is-vertical is-8">
                        <div v-for="section in story.content.sections" :key="section._uid" class="tile ">
                            <div class="tile is-parent">
                                <div class="tile is-child box">
                                    <component :is="`${section.component.replace(/_/g, '-')}`" :blok="section"></component>
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
    import Navigation from '@/components/Navigation.vue'

    export default {
        layout: 'default',
        components: { PageHero, Navigation },
        mixins: [storyblokLivePreview],
        asyncData(context) {
            let version = context.query._storyblok || context.isDev ? 'draft' : 'published'
            let endpoint = `cdn/stories/leistungen`

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
            console.log('leistungen:', this.story)
        },
    }
</script>

<style></style>
