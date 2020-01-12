export default {
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
        //'@nuxtjs/axios',
        '@nuxtjs/proxy',
        '@nuxtjs/pwa',
        ['storyblok-nuxt', { accessToken: 'srr3G6rQFYrg7JXUzHfFNwtt', cacheProvider: 'memory' }],
    ],
    css: [
        // Load a Node.js module directly (here it's a Sass file)
        //'bulma',
        'typeface-clear-sans',
        '~/assets/styles/main.scss',
    ],
    // proxy: {
    //     '/api': {
    //         target: 'http://tierklinik.webfactional.com',
    //         pathRewrite: {
    //             '^/api': '/api',
    //         },
    //     },
    // },
    // package.json: "@nuxtjs/proxy": "^1.3.3",
    plugins: ['~plugins/filters.js', '~/plugins/components', { src: '~/plugins/photoswipe', ssr: false }],
    // plugins: ['@/plugins/gmaps'],
    router: {
        middleware: 'languageDetection',
    },
}
