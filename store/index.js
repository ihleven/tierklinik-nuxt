export const state = () => ({
    // func to avoid unwanted shared state on the server side
    cacheVersion: '',
    language: 'en',
    settings: {
        main_navi: [],
    },
    authors: {},
    categories: [],
    categoryByName: {},
    categoryByUuid: {},
    ratgeberCategories: ['hunde', 'katzen'],
    lostAndFound: [],
})

export const mutations = {
    setSettings(state, settings) {
        state.settings = settings
    },
    setLanguage(state, language) {
        state.language = language
    },
    setCacheVersion(state, version) {
        state.cacheVersion = version
    },

    setAuthors(state, authors) {
        authors.forEach(a => (state.authors[a.uuid] = a.content))
        // let authorMap = {}
        // authors.forEach(a => (authorMap[a.content._uid] = a.content))
        // state.authors = authorMap
    },
    setCategories(state, stories) {
        state.categories = stories
        stories.forEach(category => (state.categoryByName[category.slug] = category))
        stories.forEach(category => (state.categoryByUuid[category.uuid] = category))
    },
    setLostAndFound(state, stories) {
        state.lostAndFound = stories
    },
}

export const actions = {
    async nuxtServerInit({ dispatch }, { req }) {
        console.log('nuxtServerINIT loading..................', req)
        // await dispatch('loadAuthors')
        await dispatch('loadCategories')
        await dispatch('loadLostAndFound')
    },
    loadAuthors({ commit }) {
        return this.$storyapi
            .get(`cdn/stories`, {
                // version: context.version,
                starts_with: 'authors',
            })
            .then(res => {
                commit('setAuthors', res.data.stories)
            })
    },
    loadCategories({ commit }) {
        return this.$storyapi
            .get(`cdn/stories`, {
                // version: context.version,
                starts_with: 'categories',
            })
            .then(res => {
                commit('setCategories', res.data.stories)
            })
    },
    loadSettings({ commit }, context) {
        // console.log('loadSettings')
        return (
            this.$storyapi
                //.get(`cdn/stories/${context.language}/settings`, {
                .get(`cdn/stories/settings`, {
                    version: context.version,
                })
                .then(res => {
                    commit('setSettings', res.data.story.content)
                })
        )
    },
    loadLostAndFound({ commit, state }, context) {
        return this.$storyapi
            .get(`cdn/stories`, {
                // version: context.version,
                cv: state.cacheVersion,
                starts_with: 'lostandfound',
            })
            .then(res => {
                commit('setLostAndFound', res.data.stories)
            })
    },
}
