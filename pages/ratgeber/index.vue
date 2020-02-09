<template>
    <div>
        <!-- <component :is="`${block.component.replace(/_/g, '-')}`" v-for="block in blocks" :key="block._uid" :blok="block"></component> -->

        <section class="section">
            <div class="container intro">
                <h3 class="title is-spaced">{{ heading }}</h3>
            </div>
            <div class="container">
                <div class="columns is-multiline category">
                    <n-link v-for="c in categories" :key="c.uuid" class="column is-half" :to="'/ratgeber/' + c.slug">
                        <article class="card is-horizontal is-shady">
                            <div class="card-image">
                                <figure class="image">
                                    <img :src="c.content.image | transformImage('200x150')" :alt="c.Name" />
                                </figure>
                            </div>
                            <div class="card-content">
                                <p class="subtitle is-6">Ratgeber</p>
                                <p class="title is-4">{{ c.name }}</p>
                            </div>
                        </article>
                    </n-link>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import storyblokLivePreview from '@/mixins/storyblokLivePreview'

    export default {
        mixins: [storyblokLivePreview],
        props: ['categories', 'heading'],
    }
</script>

<style lang="scss" scoped>
    .intro {
        padding: 2rem 15% 4rem;
        text-align: center;
    }
</style>
