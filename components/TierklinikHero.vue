<template>
    <section class="hero is-fullheight is-transparent">
        <!-- Hero head: will stick at the top -->
        <div class="hero-head">
            <TopBar></TopBar>

            <Navigation />
        </div>

        <!-- Hero content: will be in the middle -->
        <div class="hero-body">
            <div class="container">
                <h1 class="title is-2">Tierklinik Nüziders</h1>
                <h2 class="subtitle is-4">
                    Dr. Rudolf &amp; Dr. Sylvia Tschabrun
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
                    <div class="button" @click="scrollTo()">
                        <p class="heading"></p>
                        <p class="title is-6">Öffnungsszeiten</p>
                    </div>
                </div>
                <div class="level-item has-text-centered">
                    <div class="notification">
                        <p class="title is-6">6714 Nüziders, Elserweg 8</p>

                        <n-link to="/anfahrt" class="button">
                            <p class="heading">Anfahrt</p>
                        </n-link>
                    </div>
                </div>
            </nav>

            <div v-for="a in announcements" :key="a.id" class="box cta notification is-warning">
                <p class="has-text-centered" v-html="a">
                    <!-- <span class="tag is-primary">New</span> -->
                </p>
            </div>
        </div>
    </section>
</template>

<script>
    import TopBar from '@/components/TopBar'
    import Navigation from '@/components/Navigation.vue'

    export default {
        components: { TopBar, Navigation },
        data() {
            return {
                menuOpen: false,
            }
        },
        computed: {
            announcements() {
                return this.$store.state.announcements
            },
        },
        methods: {
            scrollTo() {
                let element = document.getElementById(`besuch`)

                element.scrollIntoView({ block: 'start', behavior: 'smooth' })
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
        .hero-foot {
            // margin-bottom: 1rem;
            margin-bottom: 0;
        }
    }
</style>
