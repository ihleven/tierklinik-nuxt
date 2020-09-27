<template>
    <div>
        <PageHero :image="story.content.hero_image" :heading="story.content.hero_headline"></PageHero>

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
                                    <li><n-link to="/leistungen/interne-medizin">Intere</n-link></li>
                                    <li><n-link to="/leistungen/kardiologie">Kardiologie</n-link></li>
                                    <li><n-link to="/leistungen/orthopaedie">Orthopädie</n-link></li>
                                    <li><n-link to="/leistungen/dermatologie">Dermatologie</n-link></li>
                                    <li><n-link to="/leistungen/zahnbehandlungen">Zahnbehandlungen</n-link></li>
                                    <li><n-link to="/leistungen/onkologie">Onkologie</n-link></li>
                                    <li><n-link to="/leistungen/gynaekologie">Gynäkologie</n-link></li>
                                </ul>
                                <p class="menu-label">Therapien</p>
                                <ul class="menu-list">
                                    <li>
                                        <n-link to="/leistungen/operationen">Operationen</n-link>
                                        <ul>
                                            <li><n-link to="/leistungen/weichteilchirurgie">Weichteilchirurgie</n-link></li>
                                            <li><n-link to="/leistungen/gelenks-chirurgie">Gelenks-Chirurgie</n-link></li>
                                            <li><n-link to="/leistungen/knochenchirurgie">Knochenchirurgie</n-link></li>
                                            <li><n-link to="/leistungen/tumorentfernungen">Tumorentfernungen</n-link></li>
                                        </ul>
                                    </li>
                                    <li><n-link to="/leistungen/medikamente">Medikamente</n-link></li>
                                    <li><n-link to="/leistungen/akkupunktur">Akkupunktur</n-link></li>
                                    <li><n-link to="/leistungen/lasertherapie">Lasertherapie</n-link></li>
                                </ul>
                                <p class="menu-label">
                                    Diagnostikmöglichkeiten
                                </p>
                                <ul class="menu-list">
                                    <li><n-link to="/leistungen/digitales-roentgen">Digitales Röntgen</n-link></li>
                                    <li><n-link to="/leistungen/blutanalyse">Blutanalysegerät für Blutchemie </n-link></li>
                                    <li><n-link to="/leistungen/ultraschall">Ultraschall</n-link></li>
                                    <li><n-link to="/leistungen/mikroskop">Mikroskop</n-link></li>
                                </ul>

                                <p class="menu-label">
                                    Patienten
                                </p>
                                <ul class="menu-list">
                                    <li><n-link to="/leistungen/katzen">Katzen</n-link></li>
                                    <li><n-link to="/leistungen/hunde">Hunde</n-link></li>
                                    <li><n-link to="/leistungen/hasen">Hasen</n-link></li>
                                    <li><n-link to="/leistungen/kaninchen">Kaninchen</n-link></li>
                                    <li><n-link to="/leistungen/meerschweinchen">Meerschweinchen</n-link></li>
                                    <li><n-link to="/leistungen/hamster">Hamster</n-link></li>
                                </ul>
                            </aside>
                        </div>
                    </div>
                    <div class="tile is-parent is-vertical is-9">
                        <div class="tile is-child">
                            <nuxt-child />
                        </div>
                    </div>
                    <!-- <div v-else class="tile is-vertical is-9">
                        <div v-for="section in story.content.sections" :key="section._uid" class="tile ">
                            <div class="tile is-parent">
                                <div class="tile is-child box">
                                    <component :is="`${section.component.replace(/_/g, '-')}`" :blok="section"></component>
                                </div>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </section>
        <Footer></Footer>
    </div>
</template>

<script>
    import storyblokLivePreview from '@/mixins/storyblokLivePreview'
    // import Navigation from '@/components/Navigation.vue'
    import PageHero from '@/components/PageHero'
    import Footer from '@/components/Footer'

    export default {
        layout: 'default',
        components: { PageHero, Footer },
        mixins: [storyblokLivePreview],
        asyncData(context) {
            let version = context.query._storyblok || context.isDev ? 'draft' : 'published'
            let endpoint = `cdn/stories/leistungsuebersicht`

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
            params() {
                return this.$route.params
            },
        },

        mounted() {
            // console.log('leistungen-route:', this.$route.params.leistung)
        },
    }
</script>

<style lang="scss" scoped>
    .box {
        padding: 0;
    }
</style>
