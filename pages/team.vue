<template>
    <div>
        <section class="hero is-medium is-transparent" :style="{ 'background-image': 'url(http://tierklinik.webfactional.com' + hero_image.meta.download_url + ')' }">
            <!-- Hero head: will stick at the top -->
            <div class="hero-head">
                <nav class="navbar">
                    <div class="container">
                        <div class="navbar-brand">
                            <n-link class="navbar-item" to="/tierklinik">
                                <img src="~assets/logo/logo-tierklinik.svg" alt="Logo" />

                                <h1 class="title is-4">
                                    Tierklinik
                                    <div class="subtitle is-6">Tschabrun</div>
                                </h1>
                            </n-link>

                            <span class="navbar-burger burger" :class="{ 'is-active': menuOpen }" data-target="navbarMenu" @click="toggleMenu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                        <div class="navbar-menu" :class="{ 'is-active': menuOpen }">
                            <div class="navbar-start">
                                <n-link :to="'/team'" class="navbar-item">Team</n-link>
                                <a class="navbar-item">Rundgang</a>
                                <a class="navbar-item">Fachgebiete</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            <!-- Hero content: will be in the middle -->
            <div class="hero-body">
                <div class="container">
                    <h1 class="title is-1">{{ hero_heading }}</h1>
                    <!-- <h2 class="subtitle">Dr. Sylvia und Dr. Rudolf Tschabrun</h2> -->
                    <!-- <h3 class="subtitle is-3">Kleintierklinik in Nüziders</h3> -->
                </div>
            </div>

            <div class="hero-foot">
                <div class="box cta">
                    <p class="has-text-centered">
                        <span class="tag is-primary">New</span>
                        {{ news || '' }}
                    </p>
                </div>
            </div>
        </section>

        <section class="section team">
            <div class="container">
                members: {{ members }}
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
    import axios from 'axios'

    const instance = axios.create({
        baseURL: 'http://tierklinik.webfactional.com/api/v2/',
    })
    instance.defaults.headers.common['Accept'] = 'application/json'

    export default {
        layout: 'default',
        asyncData({ params }) {
            console.log('asyncData', params)
            return instance.get(`pages/6/`).then(res => {
                console.log('asyncData', res.data)
                return res.data
            })
        },
        data() {
            return {
                menuOpen: false,
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
