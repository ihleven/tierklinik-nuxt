<template>
    <section class="section">
        <div class="container">
            <h4 class="title">Alle Artikel in der Kategorie {{ category.name }}</h4>

            <nav class="panel">
                <p class="panel-heading"></p>
                <n-link v-for="a in articles" :key="a.uuid" :to="'/ratgeber/' + category.slug + '/' + a.slug" class="panel-block">
                    <article class="media">
                        <figure class="media-left">
                            <p class="image is-64x64">
                                <img :src="a.content.image | transformImage('64x64')" />
                            </p>
                        </figure>
                        <div class="media-content">
                            <div class="content">
                                <h5>{{ a.content.title }}</h5>
                                <!-- <p></p> -->
                            </div>
                        </div>
                        <div class="media-left">></div>
                    </article>
                </n-link>
            </nav>
        </div>
    </section>
</template>

<script>
    import storyblokLivePreview from '@/mixins/storyblokLivePreview'

    export default {
        mixins: [storyblokLivePreview],
        props: ['articles', 'category'],
    }
</script>

<style lang="scss" scoped>
    .panel-block {
        cursor: pointer;
        background-color: white;
        &:hover {
            background-color: aliceblue;
        }
    }
</style>
