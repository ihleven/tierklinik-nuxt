<template>
    <section v-editable="blok" class="section">
        <div class="container intro">
            <h2 class="title is-3 is-spaced">{{ blok.headline }}</h2>
            <p class="subtitle is-5">
                {{ blok.paragraph }}
            </p>
        </div>
        <div class="container">
            <div class="columns">
                <div v-for="lf in lostAndFound" :key="lf.content._uid" class="column is-4">
                    <article class="card is-shady">
                        <div v-if="lf.content.image" class="card-image">
                            <figure class="image is-4by3">
                                <img :src="lf.content.image | transformImage('200x150')" :alt="lf.content.headline" @click="pswp()" />
                            </figure>
                        </div>

                        <div class="card-content">
                            <h5 class="title is-4">{{ lf.content.headline }}</h5>
                            <h6 class="subtitle is-5">vom {{ lf.content.lost | formatDate }}</h6>
                            <div v-html="lf.content.content ? $storyapi.richTextResolver.render(lf.content.content) : ''"></div>
                        </div>
                        <div v-if="lf.content.found && lf.content.message" class="notification is-success">
                            <div class="date">Update vom {{ lf.content.found | formatDate }}</div>
                            {{ lf.content.message }}
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
            formatDate: date => Intl.DateTimeFormat('de-AT').format(new Date(date)),
        },
        props: ['blok'],
        computed: {
            lostAndFound() {
                return this.$store.state.lostAndFound.slice(0, 3)
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
        }
    }
</style>
