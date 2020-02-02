<template>
    <section class="box">
        <figure v-if="image" class="image" :class="blok.image_alignment">
            <img :src="image" />
        </figure>
        <span class="content" v-html="richtext"></span>
        <br v-if="blok.image" style="clear: both;" />
    </section>
</template>

<script>
    import storyblokLivePreview from '@/mixins/storyblokLivePreview'

    export default {
        name: 'Paragraph',
        mixins: [storyblokLivePreview],

        props: ['blok'],
        computed: {
            classes() {
                let size = this.blok.size ? `is-${this.blok.size}` : ''
                return size + this.blok.classes
            },
            richtext() {
                return this.blok.content ? this.$storyapi.richTextResolver.render(this.blok.content) : ''
            },
            image() {
                let imageService = '//img2.storyblok.com/',
                    option = this.blok.image_size || '200x150'
                return this.blok.image.replace('//a.storyblok.com', imageService + option)
            },
        },
        mounted() {
            console.log('Paragraph:', this.blok)
        },
    }
</script>

<style lang="scss" scoped>
    .box {
        // padding-bottom: 0;
    }
    .image {
        width: 25%;
        float: left;
        margin: 0px 1rem 0 0px;
        img {
            border-radius: 5px;
        }
        &.r {
            float: right;
            margin: 0px 0 0 1rem;
        }
        &.l {
            float: left;
        }
    }
    .content {
        font: 1rem/1.25 Helvetica;
        text-align: justify;
    }
</style>
