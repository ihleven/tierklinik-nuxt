export const state = () => ({
    cacheVersion: '',
    language: 'en',
    settings: {
        main_navi: [],
    },
    authors: {},
    categories: [],
    categoryByName: {},
    categoryByUuid: {},
    lostAndFound: [],
    // announcements: [],
})

export const mutations = {
    setAuthors(state, authors) {
        authors.forEach(a => (state.authors[a.uuid] = a.content))
    },
    setCategories(state, stories) {
        state.categories = stories
        stories.forEach(category => {
            state.categoryByName[category.slug] = category
            state.categoryByUuid[category.uuid] = category
        })
    },
    setLostAndFound(state, stories) {
        state.lostAndFound = stories
    },

    setSettings(state, settings) {
        state.settings = settings
    },
    setLanguage(state, language) {
        state.language = language
    },
    // setAnnouncement(state, announcements) {
    //     state.announcements = announcements.map(a => this.$storyapi.richTextResolver.render(a.content.text))
    // },
    setCacheVersion(state, version) {
        state.cacheVersion = version
    },
}

export const actions = {
    async nuxtServerInit({ dispatch }, { req }) {
        await dispatch('loadAuthors')
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
    loadLostAndFound({ commit, state }, context) {
        return this.$storyapi
            .get(`cdn/stories`, {
                // version: context.version,
                cv: state.cacheVersion,
                starts_with: 'lostandfound',
                // sort_by: 'position',
                sort_by: 'content.Lost',
            })
            .then(res => {
                commit('setLostAndFound', res.data.stories)
            })
    },
    loadSettings({ commit }, context) {
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
