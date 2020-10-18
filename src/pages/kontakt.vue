<template>
    <div>
        <!-- <Navigation /> -->
        <PageHero :image="image" :heading="title" :subheading="subtitle"></PageHero>

        <section class="section wegbeschreibung">
            <div class="tile is-ancestor">
                <div class="tile is-vertical ">
                    <article class="tile is-child box">
                        <h4 class="title is-5">
                            Mit dem
                            <a
                                href="https://maps.google.com/maps?ll=47.166453,9.815448&z=16&t=m&hl=de&gl=DE&mapclient=embed&daddr=Tierklinik%20Dr%20Sylvia%20u%20Dr%20Rudolf%20Tschabrun%20Elserweg%208%206714%20N%C3%BCziders%20%C3%96sterreich@47.1664532,9.815448"
                                target="_blank"
                                >Routenplaner</a
                            >
                            finden Sie am Schnellsten zu uns:
                        </h4>

                        <p class="subtitle">With some content</p>
                        <div class="content">
                            <ul>
                                <li>Klicken Sie in der Karte auf den blauen Pfeil mit der Beschriftung "Routenp..."</li>
                                <li>Wählen Sie dort das gewünschte Verkehrsmittel und geben Sie Ihre Adresse ein (Straße Hausnummer Komma PLZ und/oder Ort)</li>
                            </ul>
                        </div>
                    </article>
                </div>

                <div class="tile is-parent">
                    <article class="tile is-child box autobahn">
                        <h4 class="title is-5">Von der Autobahnabfahrt Nüziders:</h4>
                        <p>
                            Auf der Dorfhauptstrasse an der Kirche und dem Dorfzentrum vorbei Richtung Bludenz, nach Ortsende Nüziders links hinauf, etwa 1 km bergauf dann rechts abbiegen und vor dem
                            Torbogen links hinauf auf den Elserweg. Der Weg ist mit weissen TIERKLINIK-Schildern bezeichnet.
                        </p>
                    </article>
                    <div class="tile is-child box autobahn">
                        <h4 class="title is-5">Von der Autobahnabfahrt Bludenz</h4>
                        <p>
                            Autobahnausfahrt Bludenz / Bürs, dann Richtung Bludenz über eine große Brücke über die Bahngeleise. Bei der nächsten Kreuzung nach rechts abbiegen und leicht aufwärts durch
                            die Stadt Bludenz fahren. Sie fahren an der Fußgängerzone (rechts) geradeaus vorbei. Nach ca 150 Metern ist ein Schild "Nüziders" nach links. Auf dieser Strasse ca einen
                            Kilometer fahren, bis direkt hinter einer Brücke ein grünes Schild "Tierklinik" nach rechts oben weist. Weiter durch einen Torbogen, dann gleich links wieder durch einen
                            Torbogen (einspurig!) und nach 30 m rechts nach oben (Schild Tierklinik). Unser Parkplatz ist nach 80 m auf der rechten Seite.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="hero">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2712.5609271477006!2d9.813253951545752!3d47.16645317905578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479b4f97ee46ce5b%3A0x38f59ab56f432331!2sTierklinik%20Dr%20Sylvia%20u%20Dr%20Rudolf%20Tschabrun!5e0!3m2!1sde!2sde!4v1589391753052!5m2!1sde!2sde"
                width="700"
                height="440"
                frameborder="0"
                style="width:100%; height: 450px; border:0;"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
            ></iframe>
        </section>

        <Footer />
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
        // asyncData(context) {
        //     return context.app.$storyapi
        //         .get(`cdn/stories/datenschutz`, {
        //             version: context.query._storyblok || context.isDev ? 'draft' : 'published',
        //             cv: context.store.state.cacheVersion,
        //         })
        //         .then(res => {
        //             return res.data
        //         })
        //         .catch(res => {
        //             context.error({ statusCode: res.response.status, message: res.response.data })
        //         })
        // },
        data() {
            return {
                title: 'Kontakt',
                subtitle: null,
            }
        },
        computed: {
            image() {
                // return '//a.storyblok.com/f/72564/2776x3866/f2902f74d9/charles-k4msj7kc0as-unsplash-hund-mit-jeansjacke.jpg'
                return '//a.storyblok.com/1600x600/smart/f/72564/5383x3840/9b9a660a62/stock-hund-mit-telefon-hintergrund-weiss-20343940_l.jpg'
            },
        },

        mounted() {
            // console.log(' * Impressum:', this.story)
        },
    }
</script>

<style lang="scss" scoped>
    .autobahn {
        p {
            font-size: 1rem;
            font-weight: 300;
        }
    }
</style>
