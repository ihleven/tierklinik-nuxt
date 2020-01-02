export default {
    modules: [
        //'@nuxtjs/axios',
        '@nuxtjs/proxy',
        '@nuxtjs/pwa',
    ],
    css: [
        // Load a Node.js module directly (here it's a Sass file)
        'bulma',
        //'~/assets/scss/main.scss'
    ],
    proxy: {
        '/api': {
            target: 'http://tierklinik.webfactional.com',
            pathRewrite: {
                '^/api': '/api',
            },
        },
    },
    // plugins: ['@/plugins/gmaps'],
}
