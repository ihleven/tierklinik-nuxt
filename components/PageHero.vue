<template>
    <section class="hero is-medium is-transparent" :style="{ 'background-image': 'url(' + resizedImage + ')' }">
        <div class="hero-head">
            <!-- <Navigation /> -->
        </div>
        <!-- Hero content: will be in the middle -->
        <div class="hero-body">
            <div class="container">
                <h1 class="title is-1">
                    <span>{{ heading }}</span>
                    <br />
                    <span v-if="subheading">{{ subheading }}</span>
                </h1>
                <!-- <h2 class="subtitle">
                    <span>{{ subheading }}</span>
                </h2> -->
                <!-- <h3 class="subtitle is-3">Kleintierklinik in Nüziders</h3> -->
            </div>
        </div>

        <div class="hero-foot">
            <!-- <div class="box cta">
                <p class="has-text-centered">
                    <span class="tag is-primary">New</span>
                    {{ news || '' }} Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div> -->
        </div>
    </section>
</template>

<script>
    // import TopBar from '@/components/TopBar.vue'
    // import Navigation from '@/components/Navigation.vue'

    export default {
        // components: { Navigation },
        props: {
            image: { type: String, default: 'http://a.storyblok.com/f/72564/2404x1745/acf542d718/stock-2404x1745-teaser-katze-hintergrund-grau.jpg' },
            heading: String,
            subheading: String,
        },
        computed: {
            resizedImage() {
                let imageService = '//img2.storyblok.com/',
                    option = '1600x600/smart'
                return this.image.replace('//a.storyblok.com', imageService + option)
            },
        },
    }
</script>

<style lang="scss" scoped>
    .hero-body .title span,
    .hero-body .subtitle span {
        font-family: 'Zilla Slab', Helvetica, sans-serif;
        color: hsl(192, 17%, 99%) !important;
        color: #fff;
        background-color: rgba(10, 10, 10, 0.7);
        text-shadow: 1px 1px 0 #043e42, 0 0 0.5rem rgba(10, 10, 10, 0.5);
        padding: 0 1rem;
    }
    .hero-body .subtitle {
        color: hsl(192, 17%, 99%) !important;
        padding-top: 2rem;
        line-height: 1.5;
    }

    .hero {
        background-size: cover;
        background-position: 50% 50%;
        background-image: url('http://a.storyblok.com/f/72564/2404x1745/acf542d718/stock-2404x1745-teaser-katze-hintergrund-grau.jpg');

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
