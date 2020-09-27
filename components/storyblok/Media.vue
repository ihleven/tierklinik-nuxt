<template>
    <div class="box is-shady">
        <article v-editable="blok" class="media">
            <figure class="media-left">
                <p class="image is-64x64" :class="blok.image">
                    <img :src="blok.image" />
                </p>
            </figure>
            <div class="media-content">
                {{ blok.text }}
                <component :is="e.component" v-for="e in blok.body" :key="e._uid" :blok="e"></component>
            </div>
        </article>
    </div>
</template>

<script>
    export default {
        name: 'Media',
        props: ['blok'],
        mounted() {
            // console.log('media', this.blok)
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
    .box {
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
        margin-bottom: 2rem;
    }

    .is-shady {
        animation: flyintoright 0.4s backwards;
        background: #fff;
        box-shadow: rgba(0, 0, 0, 0.1) 0 1px 0;
        border-radius: 4px;
        display: inline-block;
        margin: 10px;
        position: relative;
        transition: all 0.2s ease-in-out;
    }
    .is-shady:hover {
        box-shadow: 0 10px 16px rgba(0, 0, 0, 0.13), 0 6px 6px rgba(0, 0, 0, 0.19);
    }
</style>
