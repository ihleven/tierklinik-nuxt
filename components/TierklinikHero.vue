<template>
    <section class="hero is-fullheight is-transparent">
        <!-- Hero head: will stick at the top -->
        <div class="hero-head">
            <Navigation />
        </div>

        <!-- Hero content: will be in the middle -->
        <div class="hero-body">
            <div class="container">
                <h1 class="title is-2">Kleintierklinik Nüziders</h1>
                <h2 class="subtitle is-4">
                    Dr. Rudolf und Dr. Sylvia Tschabrun, <br />
                    Mag. Susanne Rath
                </h2>

                <!-- <h3 class="title is-3 klinik"></h3> -->
                <!-- <p class="address is-5">6714 Nüziders, Elserweg 8</p> -->
            </div>
        </div>

        <div class="hero-foot">
            <nav class="level">
                <div class="level-item has-text-centered">
                    <div class="notification">
                        <p class="heading is-5">Telefon:</p>
                        <p class="title is-6">+43 (0) 5552 / 66755</p>
                    </div>
                </div>
                <div class="level-item has-text-centered">
                    <div class="notification">
                        <p class="heading">Email</p>
                        <p class="title is-6">mail@tierklinik-tschabrun.com</p>
                    </div>
                </div>
                <div class="level-item has-text-centered">
                    <div class="notification">
                        <p class="heading">Adresse:</p>
                        <p class="title is-6">6714 Nüziders, Elserweg 8</p>
                    </div>
                </div>
            </nav>

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
    import Navigation from '@/components/Navigation.vue'

    export default {
        components: { Navigation },
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
    .outline {
        color: black !important;
        text-shadow: 1px 1px 0px white, 1px -1px 0px white, -1px 1px 0px white, -1px -1px 0px white;
    }
    .outline4 {
        color: white !important;
        text-shadow: 1px 1px 0px black, 1px -1px 0px black, -1px 1px 0px black, -1px -1px 0px black;
    }
    .hero {
        background-size: cover;
        background-position: 50% 50%;
        background-image: url('http://a.storyblok.com/f/72564/2404x1745/acf542d718/stock-2404x1745-teaser-katze-hintergrund-grau.jpg');

        .hero-body {
            .title {
                color: hsl(192, 17%, 99%) !important;
                // color: rgb(61, 59, 59) !important;
                text-shadow: 1px 1px 5px rgb(109, 107, 107);
            }
            .subtitle {
                color: hsl(180, 3%, 23%) !important;

                // padding-top: 2rem;
                // line-height: 1.5;
                text-shadow: 3px 3px 5px rgba(197, 191, 191, 0.452), 3px -3px 5px rgb(197, 191, 191);
            }
            .klinik {
                padding-top: 2rem;
                color: black !important;
                text-shadow: 3px 3px 5px rgba(197, 191, 191, 0.452), 3px -3px 5px rgba(197, 191, 191, 0.452), -3px 3px 5px rgba(197, 191, 191, 0.452), -3px -3px 5px rgba(197, 191, 191, 0.452);
            }
        }
    }
</style>
