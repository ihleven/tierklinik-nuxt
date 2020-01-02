<template>
    <div>
        <PageHero img="hero_image.meta.download_url" heading="hero_heading"></PageHero>

        <nav class="navbar">
            <div class="container">
                <div class="navbar-brand">
                    <n-link class="navbar-item" to="/">
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
                        <n-link :to="'/rundgang'" class="navbar-item">Rundgang</n-link>
                        <n-link :to="'/fachgebiete'" class="navbar-item">Fachgebiete</n-link>
                    </div>
                </div>
            </div>
        </nav>

        <section class="section team">
            <div class="container">
                <div class="columns">
                    <div class="intro column is-8 is-offset-2">
                        <h2 class="title">Perfect for developers or designers!</h2>
                        <br />
                        <p class="subtitle">Vel fringilla est ullamcorper eget nulla facilisi. Nulla facilisi nullam vehicula ipsum a. Neque egestas congue quisque egestas diam in arcu cursus.</p>
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

    export default {
        components: { PageHero },
        data() {
            return {
                menuOpen: false,
                news: '',
            }
        },
        mouted() {
            console.log('mounted: leistungen', this)
        },
        methods: {
            toggleMenu() {
                this.menuOpen = !this.menuOpen
            },
        },
    }
</script>

<style></style>
