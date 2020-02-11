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

                        <div class="card-content content">
                            <h5 class="title is-4">{{ lf.content.headline }}</h5>
                            <div v-html="lf.content.content ? $storyapi.richTextResolver.render(lf.content.content) : ''"></div>

                            <p>
                                <a href="#">Learn more</a>
                            </p>
                            <time datetime="2016-1-1">{{ lf.content.lost }}</time>
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
        props: ['blok'],
        computed: {
            lostAndFound() {
                return this.$store.state.lostAndFound
            },
        },
        mounted() {
            console.log('lostAndFound', this.lostAndFound)
        },
        // methods: {
        //     imageURL() {
        //         let imageService = '//img2.storyblok.com/',
        //             option = '200x150',
        //             path = this.blok.image.replace('//a.storyblok.com', '')
        //         return imageService + option + path
        //     },
        // }
    }
</script>

<style lang="scss" scoped>
    .intro {
        padding: 3rem 15%;
        text-align: center;
    }
</style>
