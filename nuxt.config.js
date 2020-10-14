export default {
    srcDir: 'src/',
    head: {
        link: [
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Zilla+Slab:400,700',
                // href: 'https://fonts.googleapis.com/css?family=Raleway&display=swap',
            },
        ],
    },
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

    router: {
        middleware: 'languageDetection',
        linkActiveClass: 'is-active',
    },
}
