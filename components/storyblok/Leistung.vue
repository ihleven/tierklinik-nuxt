<template>
    
            <article class="media">
                <figure class="media-left">
                    <p class="image is-96x96">
                        <img src="https://bulma.io/images/placeholders/128x128.png" />
                    </p>
                </figure>
                <div class="media-content">
                    <div class="content">
                        <p>
                            <h3 class="title">{{ blok.headline }}</h3>
                            <br />
                            <div v-html="richtext"></div>
                        </p>
                    </div>
                    <nav class="level is-mobile">
                        <div class="level-left">
                            <a class="level-item">
                                <span class="icon is-small"><i class="fas fa-reply"></i></span>
                            </a>
                            <a class="level-item">
                                <span class="icon is-small"><i class="fas fa-retweet"></i></span>
                            </a>
                            <a class="level-item">
                                <span class="icon is-small"><i class="fas fa-heart"></i></span>
                            </a>
                        </div>
                    </nav>
                </div>
                <div class="media-right">
                    <button class="delete"></button>
                </div>
            </article>

            
            
        
</template>

<script>
    export default {
        props: ['blok'],
        computed: {
            richtext() {
                return this.blok.text ? this.$storyapi.richTextResolver.render(this.blok.text) : ''
            },
        },
    }
</script>
