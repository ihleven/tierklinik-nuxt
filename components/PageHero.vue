<template>
    <div>
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
        <section class="hero is-medium is-transparent" :style="{ 'background-image': 'url(http://tierklinik.webfactional.com' + img + ')' }">
            <!-- Hero content: will be in the middle -->
            <div class="hero-body">
                <div class="container">
                    <h1 class="title is-1">{{ heading }}</h1>
                    <!-- <h2 class="subtitle">Dr. Sylvia und Dr. Rudolf Tschabrun</h2> -->
                    <!-- <h3 class="subtitle is-3">Kleintierklinik in Nüziders</h3> -->
                </div>
            </div>

            <div class="hero-foot">
                <div class="box cta">
                    <p class="has-text-centered">
                        <span class="tag is-primary">New</span>
                        {{ news || '' }} Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        props: ['img', 'heading'],
        data() {
            return {
                menuOpen: false,
                news: null,
            }
        },
        methods: {
            toggleMenu() {
                this.menuOpen = !this.menuOpen
            },
        },
    }
</script>

<style lang="scss" scoped>
    .hero-body .title {
        color: hsl(192, 17%, 99%) !important;
    }
    .hero-body .subtitle {
        color: hsl(192, 17%, 99%) !important;
        padding-top: 2rem;
        line-height: 1.5;
    }

    .hero {
        background-size: cover;
        background-position: 50% 50%;
        background-image: url('~assets/tierklinik/teaser-katze.jpg');

        .navbar {
            background: rgba(250, 250, 250, 0.9);
            .navbar-item {
                img {
                    max-height: unset;
                    width: 4rem;
                    height: 4rem;
                    padding-left: 1rem;
                }
                h1 {
                    padding-left: 1rem;
                }
                &.logo {
                    // padding: 1rem 1rem 1rem 5rem;
                    // padding: 0 1rem 0 5rem;
                    // background: url(~assets/tierklinik/logo-tierklinik.svg) no-repeat center center;
                    // background-size: contain;
                    // background-position: 0% 50%;
                }
                a {
                    border-bottom: 1px solid transparent;
                    &:hover a {
                        border-bottom: 1px solid currentColor;
                    }
                }
            }
        }
    }
</style>
