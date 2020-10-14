<template>
    <span class="icon">
        <i class="fas fa-home"></i>
        <svg
            v-if="name == 'minus-square'"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-minus-square"
        >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="8" y1="12" x2="16" y2="12"></line>
        </svg>
        <svg
            v-else-if="name == 'plus-square'"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-plus-square"
        >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="12" y1="8" x2="12" y2="16"></line>
            <line x1="8" y1="12" x2="16" y2="12"></line>
        </svg>
    </span>
</template>

<script>
    export default {
        props: ['name', 'heading', 'subheading'],
        computed: {},
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
