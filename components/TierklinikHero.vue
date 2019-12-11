<template>
    <section class="hero is-fullheight is-transparent">
        <!-- Hero head: will stick at the top -->
        <div class="hero-head">
            <nav class="navbar">
                <div class="container">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="/">
                            <img src="~assets/logo/logo-tierklinik.svg" alt="Logo" />

                            <h1 class="title is-4">
                                Tierklinik
                                <div class="subtitle is-6">Tschabrun</div>
                            </h1>
                        </a>

                        <span class="navbar-burger burger" :class="{ 'is-active': menuOpen }" data-target="navbarMenu" @click="toggleMenu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>
                    <div class="navbar-menu" :class="{ 'is-active': menuOpen }">
                        <div class="navbar-start">
                            <n-link :to="'/team'" class="navbar-item">Team</n-link>
                            <n-link :to="'/fachgebiete'" class="navbar-item">Fachgebiete</n-link>
                        </div>
                        <!-- <div class="navbar-end">
                            <div class="tabs is-right">
                                <ul>
                                    <li class="is-active">
                                        <a>Home</a>
                                    </li>
                                    <li>
                                        <a href>Examples</a>
                                    </li>
                                    <li>
                                        <a href>Features</a>
                                    </li>
                                    <li>
                                        <a href>Team</a>
                                    </li>
                                    <li>
                                        <a href>Help</a>
                                    </li>
                                </ul>
                            </div>
            </div>-->
                    </div>
                </div>
            </nav>
        </div>

        <!-- Hero content: will be in the middle -->
        <div class="hero-body">
            <div class="container">
                <h1 class="title is-1">Tierklinik Tschabrun</h1>
                <h2 class="subtitle">Dr. Sylvia und Dr. Rudolf Tschabrun</h2>
                <h3 class="subtitle is-3">Kleintierklinik in Nüziders</h3>
                <p class="is-5">6714 Nüziders, Elserweg 8</p>
                <!-- </div>
        <div class="container">-->
                <br />
                <br />
                <br />
                <br />
                <br />
                <nav class="level">
                    <div class="level-item has-text-centered">
                        <div>
                            <p class="heading is-5 outline">Telefon:</p>
                            <p class="title is-4 outline4">+43 (0) 5552 / 66755</p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                            <p class="heading">Email</p>
                            <p class="title is-4 outline4">mail@tierklinik-tschabrun.com</p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                            <p class="heading">Followers</p>
                            <p class="title">456K</p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                            <p class="heading">Likes</p>
                            <p class="title">789</p>
                        </div>
                    </div>
                </nav>
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
</template>

<script>
    export default {
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
