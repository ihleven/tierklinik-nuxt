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
                    <li><n-link to="/ueber-uns">Über uns</n-link></li>
                    <li><n-link to="/leistungen">Leistungen</n-link></li>
                    <li><n-link to="/ratgeber">Ratgeber</n-link></li>
                    <li><n-link to="/aktuelles">Aktuelles</n-link></li>
                    <li><n-link to="/blog">Blog</n-link></li>
                </ul>
            </nav>
        </header>

        <nav>
            <PageHero style="height:100%" :heading="story.content.hero_headline" :image="story.content.hero_image | transformImage('0x1000/smart')"></PageHero>
        </nav>

        <main>
            <!-- <SectionIntro :blok="story.content.sections[0]"></SectionIntro> -->
            <div class="intro">
                {{ intro }}
            </div>

            <article v-for="post in posts" :key="post.content._uid" class="media">
                <figure class="media-left">
                    <img :src="post.content.image | transformImage('120x120/smart')" :alt="post.content.title" class="postimg" />
                </figure>
                <div class="media-content">
                    <h4 class="posttitle">{{ post.content.title }}</h4>
                    <div class="postsubtitle">
                        <small
                            >am <time datetime="2016-1-1">{{ post.created_at | formatDate }}</time></small
                        >
                        <small>von {{ post.author.name }}</small>
                    </div>
                    {{ post.content.teaser }}

                    <nuxt-link :to="post.full_slug">_Lesen_</nuxt-link>

                    <!-- <a :href="post.full_slug" class="postlink">_Beitrag lesen_</a> -->
                </div>
                <div class="media-right">
                    <figure class="image is-1-by-1">
                        <img :src="post.author.avatar | transformImage('64x64/smart')" :alt="post.author.name" class="is-rounded" />
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
    import TopBar from '@/components/TopBar'
    import Navigation from '@/components/Navigation.vue'
    import SectionIntro from '@/components/storyblok/SectionIntro.vue'
    export default {
        layout: 'start',
        components: { PageHero, TopBar, Navigation, SectionIntro },
        filters: {
            formatDate: date => Intl.DateTimeFormat('de-AT').format(new Date(date)),
        },
        // asyncData(context) {
        //     let version = context.query._storyblok || context.isDev ? 'draft' : 'published'

        //     return context.app.$storyapi
        //         .get('cdn/stories', {
        //             version: version,
        //             starts_with: `blog`,
        //             is_startpage: false,
        //             cv: context.store.state.cacheVersion,
        //         })
        //         .then(res => {
        //             return res
        //         })
        //         .catch(res => {
        //             context.error({ statusCode: res.response.status, message: res.response.data })
        //         })
        // },
        async asyncData(context) {
            let version = context.query._storyblok || context.isDev ? 'draft' : 'published'
            let index = await context.app.$storyapi.get('cdn/stories/blog', {
                is_startpage: false,
                version: version,
                cv: context.store.state.cacheVersion,
            })
            let stories = await context.app.$storyapi.get('cdn/stories', {
                version: version,
                starts_with: `blog`,
                is_startpage: false,
                cv: context.store.state.cacheVersion,
            })

            stories.data.stories.forEach(a => {
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
    }
</script>

<style lang="scss" scoped>
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
    .intro {
        padding: 4rem 4rem 2rem 4rem;
        color: #4a4a4a;
        font-size: 1.25rem;
        font-weight: 400;
        line-height: 1.25;
        text-align: left;
        word-break: break-word;
    }
    .red {
        padding: 2rem;
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
