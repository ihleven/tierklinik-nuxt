<template>
    <section v-editable="blok" class="section">
        <div class="container intro">
            <h2 class="title is-3 is-spaced">{{ blok.headline }}</h2>
            <p class="subtitle is-5">
                {{ blok.paragraph }}
            </p>
        </div>
        <div class="container">
            <div class="columns is-multiline">
                <div v-for="lf in lost" :key="lf.content._uid" class="column is-4">
                    <article class="card is-shady">
                        <div v-if="lf.content.image" class="card-image">
                            <figure class="image is-4by3">
                                <img
                                    :src="lf.content.image | transformImage('400x300')"
                                    :alt="lf.content.headline"
                                    @click="pswp()"
                                />
                            </figure>
                        </div>

                        <div class="card-content">
                            <h5 class="title is-4">{{ lf.content.headline }}</h5>
                            <h6 class="subtitle is-5">vom {{ lf.content.lost | formatDate }}</h6>
                            <div
                                v-html="lf.content.content ? $storyapi.richTextResolver.render(lf.content.content) : ''"
                            ></div>
                        </div>
                        <div v-if="lf.content.found && lf.content.message" class="notification is-success">
                            <div class="date">Update vom {{ lf.content.found | formatDate }}</div>
                            {{ lf.content.message }}
                        </div>
                    </article>
                </div>

                <div v-for="f in found" :key="f.content._uid" class="column is-4">
                    <article class="card is-shady">
                        <div v-if="f.content.image" class="card-image">
                            <figure class="image is-4by3">
                                <img
                                    :src="f.content.image | transformImage('400x300')"
                                    :alt="f.content.headline"
                                    @click="pswp()"
                                />
                            </figure>
                        </div>

                        <div class="card-content">
                            <h5 class="title is-4">{{ f.content.headline }}</h5>
                            <h6 class="subtitle is-5">vom {{ f.content.lost | formatDate }}</h6>
                            <div
                                v-html="f.content.content ? $storyapi.richTextResolver.render(f.content.content) : ''"
                            ></div>
                        </div>
                        <div class="notification is-success">
                            <div class="date">Update vom {{ f.content.found | formatDate }}</div>
                            {{ f.content.message }}
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'SectionLostAndFound',
    filters: {
        formatDate: (date) =>
            typeof date === 'string' ? Intl.DateTimeFormat('de-AT').format(new Date(date.substring(0, 10))) : '',
    },
    props: ['blok'],
    computed: {
        lost() {
            return this.$store.state.lostAndFound
                .filter((i) => !i.content.found || !i.content.message)
                .sort((a, b) => (a.content.lost > b.content.lost ? -1 : 1))
                .slice(0, 3)
        },
        found() {
            return this.$store.state.lostAndFound
                .filter((i) => i.content.found && i.content.message)
                .sort((a, b) => (a.content.found > b.content.found ? -1 : 1))
                .slice(0, 3)
        },
    },
}
</script>

<style lang="scss" scoped>
.intro {
    padding: 3rem 15%;
    text-align: center;
}
.card {
    .title {
        margin-bottom: 0;
    }
    .subtitle {
        padding: 1.5rem 0;
        margin-bottom: 0;
    }
    .notification {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        .date {
            margin-bottom: 0.5rem;
        }
        margin-top: auto;
    }
}
.card {
    height: 100%;
    margin-bottom: 0;
    display: flex;
    flex-flow: column;
    // justify-content: space-between;
}
</style>
