<template>
    <div>
        <PageHero :img="hero_image.meta.download_url" :heading="hero_heading"></PageHero>

        <section class="section team">
            <div class="container">
                <div class="columns">
                    <div class="intro column is-8 is-offset-2">
                        <h2 class="title">{{ heading }}</h2>
                        <br />
                        <p class="subtitle">{{ caption }}</p>
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
                    <div class="tile is-parent">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src="~assets/tierklinik/susanne.jpg" alt="Placeholder image" />
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="content">
                                    <h3 class="title">Mag. med. vet. Susanne Rath</h3>
                                    <h5 class="subtitle">Tierärztin</h5>
                                    Sie ist auf die Diagnose, Behandlung und Chirurgie von Hasen und Meerschweinchen spezialisiert. Ein weiteres ihrer Fachgebiete ist die Gastroenterologie der Hunde
                                    und Katzen.
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
    import api from '~/plugins/axios'

    export default {
        layout: 'default',
        components: { PageHero },
        asyncData() {
            return api.get(`pages/6/`).then(res => {
                return res.data
            })
        },
        data() {
            return {
                menuOpen: false,
                news: '',
            }
        },
        mouted() {
            console.log('mounted:', this)
        },
        methods: {
            toggleMenu() {
                this.menuOpen = !this.menuOpen
            },
        },
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
