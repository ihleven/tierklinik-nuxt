<template>
    <article v-editable="blok" class="card is-shady">
        <div v-if="blok.image" class="card-image">
            <figure class="image is-4by3">
                <img :src="imageURL" :alt="blok.headline" @click="pswp()" />
            </figure>
        </div>

        <div class="card-content">
            <div class="content">
                <h5 class="title is-4">{{ blok.headline }}</h5>
                <h6 class="subtitle is-6">{{ blok.subline }}</h6>
                <p class="body">{{ blok.text }}</p>
            </div>

            <p v-if="blok.link && blok.link.url">
                <a href="#">Learn more</a>
            </p>
        </div>
    </article>
</template>

<script>
    export default {
        name: 'Card',
        props: ['blok'],
        computed: {
            bodyElements() {
                return this.blok.body || []
            },
            imageURL() {
                let imageService = '//img2.storyblok.com/',
                    option = this.blok.image_options || '440x330',
                    path = this.blok.image.replace('//a.storyblok.com', '')
                return imageService + option + path
            },
        },
        mounted() {
            // console.log(this.blok)
        },
        methods: {
            pswp() {
                // console.log(this.blok.image)
                // console.log(this.blok.image.split('/')[4], 4) // space id
                // console.log(this.blok.image.split('/')[5], 5) // dimension string
                // console.log(this.blok.image.split('/')[5].split('x')) // width and height as array

                let dimensions = {
                    width: this.blok.image.split('/')[5].split('x')[0],
                    height: this.blok.image.split('/')[5].split('x')[1],
                }
                let format = dimensions.width / dimensions.height
                let maxdim = dimensions.width > dimensions.height ? dimensions.width : dimensions.height
                let maxscreen = window.innerWidth > window.innerHeight ? window.innerWidth : window.innerHeight
                let width = dimensions.width
                let height = dimensions.height
                if (maxdim > maxscreen) {
                    width = parseInt((width * maxscreen) / maxdim)
                    height = parseInt((height * maxscreen) / maxdim)
                }

                let items = [
                    {
                        src: this.$options.filters.transformImage(this.blok.image, `${width}x${height}`),
                        w: width,
                        h: height,
                    },
                ]
                this.$photoswipe.open(0, items)
            },
        },
    }
</script>

<style lang="scss">
    .card-image > .fa {
        font-size: 8rem;
        padding-top: 2rem;
        padding-bottom: 2rem;
        color: #209cee;
    }
    .card-image {
        img {
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
        }
    }
    .card-content .content {
        font-size: 14px;
        margin: 1rem 1rem;
    }
    .card-content .content h4 {
        font-size: 16px;
        font-weight: 700;
    }
    .card {
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
        margin-bottom: 2rem;
    }

    .is-shady {
        animation: flyintoright 0.4s backwards;
        background: #fff;
        box-shadow: rgba(0, 0, 0, 0.1) 0 1px 0;
        border-radius: 4px;
        display: inline-block;
        // margin: 10px;
        position: relative;
        transition: all 0.2s ease-in-out;
    }
    .is-shady:hover {
        box-shadow: 0 10px 16px rgba(0, 0, 0, 0.13), 0 6px 6px rgba(0, 0, 0, 0.19);
    }
</style>
