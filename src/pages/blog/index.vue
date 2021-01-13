<template>
    <div class="wrapper">
        <header>
            <nav class="topbar">
                <a class="logo" href="/">
                    <img src="~assets/logo/logo-tierklinik-white.svg" alt="Logo" />

                    <div>
                        <b> Tierklinik </b>
                        Tschabrun
                        <!-- <small>.com</small> -->
                    </div>
                </a>
                <ul>
                    <!-- <li><n-link to="/ueber-uns">Über uns</n-link></li>
                    <li><n-link to="/leistungen">Leistungen</n-link></li>
                    <li><n-link to="/ratgeber">Ratgeber</n-link></li>
                    <li><n-link to="/aktuelles">Aktuelles</n-link></li>
                    <li><n-link to="/patienten">Patienten</n-link></li>
                    <li><n-link to="/blog">Blog</n-link></li> -->
                </ul>
            </nav>
        </header>

        <nav>
            <PageHero
                style="height: 100%"
                :heading="story.content.hero_headline"
                :image="story.content.hero_image | transformImage('0x1000/smart')"
            ></PageHero>
        </nav>

        <main>
            <!-- <SectionIntro :blok="story.content.sections[0]"></SectionIntro> -->
            <div class="intro">
                {{ intro }}
            </div>

            <article v-for="post in posts" :key="post.content._uid" class="media">
                <figure class="media-left">
                    <img
                        :src="post.content.image | transformImage('320x320/smart')"
                        :alt="post.content.title"
                        class="postimg"
                    />
                </figure>
                <div class="media-content">
                    <h4 class="posttitle">{{ post.content.title }}</h4>
                    <div class="postsubtitle">
                        <small
                            >am
                            <time datetime="2016-1-1">{{
                                post.content.datum || post.created_at | formatDate
                            }}</time></small
                        >
                        <small>von {{ post.author.name }}</small>
                    </div>
                    {{ post.content.teaser }}

                    <nuxt-link :to="'/blog/' + post.slug" class="detaillink">_Lesen_</nuxt-link>

                    <!-- <a :href="post.full_slug" class="postlink">_Beitrag lesen_</a> -->
                </div>
                <div class="media-right">
                    <figure class="image is-1-by-1">
                        <img
                            :src="post.author.avatar | transformImage('64x64/smart')"
                            :alt="post.author.name"
                            class="is-rounded"
                        />
                    </figure>
                </div>
            </article>
        </main>

        <aside>
            <!-- Sidebar / Ads -->
        </aside>

        <footer>
            <!-- Footer content -->
        </footer>
    </div>
</template>

<script>
import PageHero from '@/components/PageHero'

export default {
    components: { PageHero },
    filters: {
        formatDate: (date) => Intl.DateTimeFormat('de-AT').format(new Date(date)),
    },
    layout: 'start',
    async asyncData(context) {
        const version = context.query._storyblok || context.isDev ? 'draft' : 'published'
        const index = await context.app.$storyapi.get('cdn/stories/blog', {
            is_startpage: false,
            version,
            cv: context.store.state.cacheVersion,
        })
        const stories = await context.app.$storyapi.get('cdn/stories', {
            version,
            starts_with: `blog`,
            is_startpage: false,
            cv: context.store.state.cacheVersion,
            sort_by: 'content.datum:desc',
        })

        stories.data.stories.forEach((a) => {
            a.author = context.store.state.authors[a.content.author] || {}
        })

        return {
            story: index.data.story,
            posts: stories.data.stories,
        }
    },
    data() {
        return { total: 0, data: { stories: [] } }
    },
    computed: {
        intro() {
            return this.story.content.sections.length ? this.story.content.sections[0].text : ''
        },
    },
    head: {
        title: 'Blog',
    },
}
</script>

<style lang="scss" scoped>
@import 'bulma/bulma.sass';

.wrapper {
    display: grid;

    grid-template-areas:
        'header header header'
        'nav content side'
        'footer footer footer';

    grid-template-columns: 30% 1fr 0px;
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

aside {
    grid-area: side;
}

footer {
    grid-area: footer;
    background: #321313;
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

    article.media {
        display: block;
        margin: 3rem 2rem;

        .media-left {
            margin-right: 0;
            margin-bottom: 1rem;
        }
        .postimg {
            width: 100%;
        }
        .media-right {
            display: none;
        }
    }
}
.intro {
    padding: 4rem 4rem 2rem 4rem;
    color: #4a4a4a;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.25;
    text-align: left;
    word-break: break-word;
    @include until($tablet) {
        padding: 3rem 2rem 1rem 2rem;
    }
}
.detaillink {
    display: block;
    margin-top: 1rem;
}

article {
    border-top: none !important;
    margin: 3rem;
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
