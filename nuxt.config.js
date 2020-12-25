export default {
    srcDir: 'src/',
    target: 'static',
    head: {
        title: '',
        titleTemplate: '%s | Tierklinik Tschabrun',

        link: [
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Zilla+Slab:400,700',
                // href: 'https://fonts.googleapis.com/css?family=Raleway&display=swap',
            },
        ],
    },
    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        // '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
    ],
    modules: [
        //
        '@nuxtjs/pwa',
        ['storyblok-nuxt', { accessToken: 'srr3G6rQFYrg7JXUzHfFNwtt', cacheProvider: 'memory' }],
    ],
    css: [
        // 'typeface-clear-sans',
        '~/assets/styles/main.scss',
    ],

    plugins: ['~plugins/filters.js', '~/plugins/components', { src: '~/plugins/photoswipe', ssr: false }],

    // components: true,

    router: {
        middleware: 'languageDetection',
        linkActiveClass: 'is-active',
    },
}
