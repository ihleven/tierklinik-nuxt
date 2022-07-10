<template>
    <!-- <section class="util__container">
        <PageHero :image="story.content.image" :heading="story.content.title" :subheading="story.content.subtitle"></PageHero>
        <Breadcrumbs page="Blog" pagehref="/blog" />
        <div v-editable="story.content" class="blog">
            <h1>{{ story.content.name }}</h1>
            <div class="blog__body" v-html="body"></div>
            <div class="content" v-html="content"></div>
        </div>
    </section> -->
    <div class="wrapper">
        <header>
            <nav class="topbar">
                <n-link class="logo" to="/">
                    <img src="~assets/logo/logo-tierklinik-white.svg" alt="Logo" />

                    <div>
                        <b> Tierärzte </b>
                        Tschabrun
                        <!-- <small>.com</small> -->
                    </div>
                </n-link>
                <ul>
                    <!-- <li><n-link to="/ueber-uns">Über uns</n-link></li>
                    <li><n-link to="/leistungen">Leistungen</n-link></li>
                    <li><n-link to="/ratgeber">Ratgeber</n-link></li> 
                    <li><n-link to="/aktuelles">Aktuelles</n-link></li>-->
                    <li><n-link to="/blog">Blog</n-link></li>
                </ul>
            </nav>
        </header>

        <nav>
            <PageHero
                style="height: 100%"
                :image="story.content.image"
                :heading="story.content.title"
                :subheading="story.content.subtitle"
            ></PageHero>

            <!-- <PageHero style="height:100%" :heading="story.content.hero_headline" :image="story.content.hero_image | transformImage('0x1000/smart')"></PageHero> -->
        </nav>

        <main class="section">
            <n-link class="backlink" to="/blog"
                ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-chevron-left"
                >
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
                zurück zum Blog</n-link
            >
            <div class="media">
                <div class="media-left">
                    <figure class="image is-96x96">
                        <img
                            :src="author.avatar | transformImage('96x96/smart')"
                            :alt="author.name"
                            class="is-rounded"
                        />
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-5">von {{ author.name }}</p>
                    <div class="subtitle is-5">
                        am <time datetime="2016-1-1">{{ story.content.datum || story.created_at | formatDate }}</time>
                    </div>
                </div>
            </div>
            <br />
            <div v-editable="story.content" class="content">
                <blockquote v-if="story.content.teaser">{{ story.content.teaser }}</blockquote>
                <div class="subtitle" v-html="body"></div>
                <div class="content" v-html="content"></div>
            </div>
        </main>

        <aside>
            <!-- Sidebar / Ads -->
        </aside>

        <!-- <Footer></Footer> -->
    </div>
</template>

<script>
import marked from 'marked'
import storyblokLivePreview from '@/mixins/storyblokLivePreview'
import PageHero from '@/components/PageHero'
import Breadcrumbs from '@/components/Breadcrumbs'
import Footer from '@/components/Footer'

export default {
    components: { PageHero, Breadcrumbs, Footer },
    filters: {
        formatDate: (date) =>
            typeof date === 'string' ? Intl.DateTimeFormat('de-AT').format(new Date(date.substring(0, 10))) : '',
    },
    mixins: [storyblokLivePreview],
    layout: 'start',
    asyncData(context) {
        const version = context.query._storyblok || context.isDev ? 'draft' : 'published'
        const endpoint = `cdn/stories/blog/${context.params.slug}`

        return context.app.$storyapi
            .get(endpoint, {
                version,
                cv: context.store.state.cacheVersion,
            })
            .then((res) => {
                return res.data
            })
            .catch((res) => {
                context.error({ statusCode: res.response.status, message: res.response.data })
            })
    },
    data() {
        return { story: { content: { body: '' } } }
    },
    computed: {
        author() {
            return this.$store.state.authors[this.story.content.author] || {}
        },
        body() {
            return this.story.content.body ? marked(this.story.content.body) : ''
        },
        content() {
            return this.story.content.content ? this.$storyapi.richTextResolver.render(this.story.content.content) : ''
        },
    },
    head: {
        title: 'Blog',
    },
}
</script>

<style lang="scss" scoped>
.wrapper {
    display: grid;

    grid-template-areas:
        'header header header'
        'nav content side'
        'footer footer footer';

    grid-template-columns: 40% 1fr 10px;
    grid-template-rows: auto 1fr auto;
    grid-gap: 0;

    height: 100vh;
}
header {
    grid-area: header;
}

nav {
    grid-area: nav;
}

main {
    grid-area: content;
    overflow-y: scroll;
    width: 100%;
    background: #f9f5f0;
    background: rgba(250, 250, 250, 0.3);
}

.section {
    padding-top: 3rem;
}
.backlink {
    display: flex;
    align-items: center;
    margin-bottom: 3rem;
}
aside {
    grid-area: side;
}

footer {
    background: #321313;
    grid-area: footer;
    color: var(--primary);
}

@media (max-width: 768px) {
    .wrapper {
        grid-template-areas:
            'header'
            'nav'
            'content'
            'side'
            'footer';
        grid-template-columns: 1fr;
        grid-template-rows: auto minmax(75px, auto) 1fr minmax(75px, auto) auto;

        height: unset;
    }
    nav,
    aside {
        margin: 0;
        overflow-y: unset;
    }
}

.red {
    padding: 2rem;
}
article {
    margin: 1rem;
    .postimg {
        border-radius: 1rem;
    }
    .posttitle {
        color: #363636;
        font-size: 2rem;
        font-weight: 600;
        line-height: 0.7;
    }
    .postsubtitle {
        color: #363636;
        font-size: 1rem;
        font-weight: 300;
        line-height: 1;
        margin: 0.5rem 0 1rem 0;
        text-align: right;
        display: flex;
        justify-content: space-between;
    }
    .postlink {
        display: block;
        padding: 0.5rem 0;
    }
}
.blue {
    background-color: blue;
}
.yellow {
    background-color: yellow;
}
.blog__overview {
    padding: 0 20px;
    max-width: 600px;
    margin: 40px auto 60px;

    p {
        line-height: 1.6;
    }
}

.blog__detail-link {
    color: #000;
}

.topbar {
    background-color: hsl(0, 0%, 14%);
    border-bottom: 1px solid black;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    .logo {
        color: white;
        display: flex;
        align-items: center;
        img {
            padding: 0.125rem;
            height: 2rem;
            stroke-width: 3px;
        }
        b {
            font-weight: bold;
        }
    }
    .tel {
        font: 400 1rem/1.25 Helvetica;
        display: flex;
        align-items: center;
        color: white;
        margin: 0.25rem 1rem;
        svg {
            margin: 0.25rem;
            width: 1.25rem;
            height: 1.25rem;
        }
    }
    ul {
        font: 0.875rem/1.25 Helvetica;
        display: flex;
        align-items: center;
        li {
            padding: 0.25rem 0.5rem;

            a {
                color: rgb(150, 146, 146);
                &:hover {
                    color: rgb(243, 237, 237);
                    // background-color: hsl(0, 0%, 24%);
                    border-bottom: 1px solid white;
                }
            }
        }
    }
}
</style>
