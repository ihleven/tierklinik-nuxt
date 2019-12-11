<template>
    <div>
        <section class="hero is-medium is-transparent">
            <!-- Hero head: will stick at the top -->
            <div class="hero-head"></div>

            <!-- Hero content: will be in the middle -->
            <div class="hero-body">
                <div class="container">
                    <h1 class="title is-1">Unsere Fachgebiete</h1>
                    <h2 class="subtitle is-3">Dr. Sylvia und Dr. Rudolf Tschabrun</h2>
                </div>
            </div>

            <div class="hero-foot">
                <div class="box cta">
                    <p class="has-text-centered">
                        <span class="tag is-primary">New</span>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
        </section>

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

                    <span
                        class="navbar-burger burger"
                        :class="{'is-active': menuOpen}"
                        data-target="navbarMenu"
                        @click="toggleMenu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </div>
                <div class="navbar-menu" :class="{'is-active': menuOpen}">
                    <div class="navbar-start">
                        <n-link :to="'/tierklinik/team'" class="navbar-item">Team</n-link>
                        <a class="navbar-item">Rundgang</a>
                        <a class="navbar-item">Fachgebiete</a>
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
                        <p
                            class="subtitle"
                        >Vel fringilla est ullamcorper eget nulla facilisi. Nulla facilisi nullam vehicula ipsum a. Neque egestas congue quisque egestas diam in arcu cursus.</p>
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
                                    <h5 class="subtitle">Fachtierarzt</h5>Er ist ein vielseitiger Chirurg, die Tätigkeit reicht von anspruchsvollen Tumoroperationen über Abdominalchirurgie bis zu aufwendigen Knochenoperationen. Ein weiteres seiner Fachgebiete ist die Dermatologie.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tile is-parent">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img
                                        src="~assets/tierklinik/sylvia.jpg"
                                        alt="Placeholder image"
                                    />
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="content">
                                    <h3 class="title">Dr. Sylvia Tschabrun</h3>
                                    <h5 class="subtitle">Fachtierärztin</h5>Ihre Fachgebiete sind Orthopädie und innere Medizin, mit dem Schwerpunkt Kardiologie. Sie ist für das Management der Tierklinik zuständig.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tile is-parent">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img
                                        src="~assets/tierklinik/susanne.jpg"
                                        alt="Placeholder image"
                                    />
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="content">
                                    <h3 class="title">Mag. med. vet. Susanne Rath</h3>
                                    <h5 class="subtitle">Tierärztin</h5>Sie ist auf die Diagnose, Behandlung und Chirurgie von Hasen und Meerschweinchen spezialisiert. Ein weiteres ihrer Fachgebiete ist die Gastroenterologie der Hunde und Katzen.
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
                                    <h5 class="subtitle">Fachtierarzt</h5>Er ist ein vielseitiger Chirurg, die Tätigkeit reicht von anspruchsvollen Tumoroperationen über Abdominalchirurgie bis zu aufwendigen Knochenoperationen. Ein weiteres seiner Fachgebiete ist die Dermatologie.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tile is-parent">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img
                                        src="~assets/tierklinik/sylvia.jpg"
                                        alt="Placeholder image"
                                    />
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="content">
                                    <h3 class="title">Dr. Sylvia Tschabrun</h3>
                                    <h5 class="subtitle">Fachtierärztin</h5>Ihre Fachgebiete sind Orthopädie und innere Medizin, mit dem Schwerpunkt Kardiologie. Sie ist für das Management der Tierklinik zuständig.
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
export default {
    layout: 'default',
    data() {
        return {
            menuOpen: false,
        }
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
    background-image: url('~assets/tierklinik/team.jpg');
}
.team {
    padding: 3rem 1rem;
}
</style>