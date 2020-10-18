<template>
    <section :id="blok.config[0].nav_item" v-editable="blok" class="section">
        <div class="container intro">
            <h2 class="title is-spaced">{{ blok.headline }}</h2>
            <h4 class="subtitle">
                {{ blok.text }}
            </h4>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'ChapterIntro',
        props: ['blok'],
        computed: {
            classes() {
                const classes = []

                if (this.config.spacing_top) {
                    classes.push(`u-spacing-top-${this.config.spacing_top}`)
                }

                if (this.config.container) {
                    classes.push(`o-container o-container--${this.config.container}`)
                }

                return classes
            },
        },
    }
</script>

<style lang="scss" scoped>
    .intro {
        padding: 3rem 15% 0rem;
        text-align: center;
    }
</style>
