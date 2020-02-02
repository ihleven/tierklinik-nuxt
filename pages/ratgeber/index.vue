<template>
    <section class="section">
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
</template>

<script>
    import storyblokLivePreview from '@/mixins/storyblokLivePreview'

    export default {
        mixins: [storyblokLivePreview],
        props: ['categories'],
    }
</script>
