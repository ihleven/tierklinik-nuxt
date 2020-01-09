export const state = () => ({
    // func to avoid unwanted shared state on the server side
    cacheVersion: '',
    language: 'en',
    settings: {
        main_navi: [],
    },
    authors: {},
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
}

export const actions = {
    async nuxtServerInit({ commit, dispatch }, { req }) {
        // if (false) {
        //     commit('date', new Date())
        // }
        await dispatch('loadAuthors')
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
}
