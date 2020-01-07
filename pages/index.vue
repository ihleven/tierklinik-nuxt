<template>
    <div>
        <TierklinikHero></TierklinikHero>

        <!-- <div v-editable="section"> -->
        <component :is="`${section.component.replace(/_/g, '-')}`" v-for="section in story.content.sections" :key="section._uid" :blok="section"></component>
        <!-- </div> -->

        <!-- <section class="section is-medium">
            <div class="container">
                <div class="columns">
                    <div class="intro column is-8 is-offset-2">
                        <h2 class="title">Willkommen in der Tierklinik Dr. Tschabrun</h2>
                        <br />
                        <p class="subtitle">
                            In unserer Tierklinik steht die persönliche Betreuung im Vordergrund. Unser Team besteht aus drei Tierärzten und zwei Ordinationshilfen und wir versuchen, individuell auf
                            ihre Wünsche einzugehen. Wir möchten, dass Sie und Ihr Tier sich in unserer Tierklinik wohl fühlen.
                        </p>
                    </div>
                </div>

            </div>
        </section> -->

        <!-- <section class="section is-medium">
            <div class="container">
                <div class="tile is-ancestor">
                    <div class="tile is-vertical is-8">
                        <div class="tile">
                            <div class="tile is-parent is-vertical">
                                <article class="tile is-child card is-shady">
                                    <div class="card-image">
                                        <figure class="image is-4by3">
                                            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                                        </figure>
                                    </div>
                                    <div class="card-content">
                                        <div class="content">In der Chirurgie sind wir ein erfahrenes Team und wir führen sichere Narkosen durch.</div>
                                    </div>
                                </article>
                            </div>
                            <div class="tile is-parent">
                                <article class="tile is-child card is-shady">
                                    <div class="card-image">
                                        <figure class="image is-4by3">
                                            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                                        </figure>
                                    </div>
                                    <div class="card-content">
                                        <div class="content">

                                            <p>
                                                Modernste Geräte, wie digitales Röntgen, eigene Blutanalysegeräte und Ultraschall beschleunigen die Diagnosen.
                                            </p>
                                            <p>
                                                <a href="#">Learn more</a>
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child card">
                                <div class="card-content">
                                    <p class="title">Happy Visits</p>
                                    <p class="subtitle">Stressfreier Besuch in unserer Tierklinik</p>
                                    <div class="content">
                                        Wir wollen Ihnen und Ihrem Tier den Besuch bei uns so angenehm wie möglich gestalten und bieten ihnen eine "Happy Visit" - einen stressfreien Besuch an. Ihr
                                        Tier kann unsere Tierklinik kennenlernen, ohne dass etwas "passiert". Es gewöhnt sich an die Gerüche und die Umgebung, sitzt auf dem Tisch, wird gestreichelt
                                        ohne Spritze, bekommt ein Leckerli und empfindet dadurch den Tierarztbesuch als angenehm. Dies ist besonders sinnvoll bei Welpen, aber auch ängstliche Tiere
                                        können so ihre Angst abbauen. Falls Sie mit Ihrem Tier eine Happy Visit machen wollen, vereinbaren Sie bitte einen Termin zu einer Zeit, in der es bei uns ruhig
                                        ist. 05552 66755
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child card">
                            <div class="card-content">
                                <p class="title">Sprechzeiten:</p>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                            <td>
                                                <b>Vormittag&nbsp;&nbsp;</b>
                                            </td>
                                            <td>
                                                <b>Abend</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>Mo</b>
                                            </td>
                                            <td>
                                                10h - 11h
                                            </td>

                                            <td>
                                                16:30 - 19h
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>Di</b>
                                            </td>
                                            <td>
                                                10h - 11h
                                            </td>

                                            <td>
                                                16:30 - 19h
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>Mi</b>
                                            </td>
                                            <td>
                                                10h - 11h
                                            </td>

                                            <td>
                                                Telefonische Voranmeldung
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>Do</b>
                                            </td>
                                            <td>
                                                10h - 11h
                                            </td>

                                            <td>
                                                16:30 - 19h
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>Fr.</b>
                                            </td>
                                            <td>
                                                10h - 11h
                                            </td>

                                            <td>
                                                nach tel. Voranmeldung
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>Sa.</b>
                                            </td>
                                            <td>
                                                10h - 11h
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <br />

                                <div class="notification" style="font-size: 1.5rem">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="36"
                                        height="36"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="feather feather-phone"
                                    >
                                        <path
                                            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                                        />
                                    </svg>
                                    Praxis-Nr.
                                    <br />
                                    +43 5552 66755
                                </div>
                                <div class="card-content  notification is-danger">
                                    <p class="title">Notdienst</p>
                                    Außerhalb der Sprechzeiten bieten wir eine Notfallversorgung (Praxis-Nummer, Notdienstgebühr)
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section> -->

        <hr />
        <section class="section container">
            <div class="intro column is-8 is-offset-2">
                <h2 class="title">Und hier die zweite überschrift</h2>
                <br />
                <p class="subtitle">Hier kommt dann ein weiterfuehrender Text, der auf den letzten Inhlatsblock der Startseite hinweist.</p>
            </div>
            <div class="sandbox">
                <div class="tile is-ancestor">
                    <div class="tile is-parent is-shady">
                        <article class="tile is-child notification is-white">
                            <p class="title">Hello World</p>
                            <p class="subtitle">What is up?</p>
                        </article>
                    </div>
                    <div class="tile is-parent is-shady">
                        <article class="tile is-child notification is-white">
                            <p class="title">Foo</p>
                            <p class="subtitle">Bar</p>
                        </article>
                    </div>
                    <div class="tile is-parent is-shady">
                        <article class="tile is-child notification is-white">
                            <p class="title">Third column</p>
                            <p class="subtitle">With some content</p>
                            <div class="content">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio
                                    quis feugiat facilisis.
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
                <div class="tile is-ancestor">
                    <div class="tile is-vertical is-8">
                        <div class="tile">
                            <div class="tile is-parent is-vertical">
                                <article class="tile is-child notification is-white">
                                    <p class="title">Vertical tiles</p>
                                    <p class="subtitle">Top box</p>
                                </article>
                                <article class="tile is-child notification is-white">
                                    <p class="title">Vertical tiles</p>
                                    <p class="subtitle">Bottom box</p>
                                </article>
                            </div>
                            <div class="tile is-parent">
                                <article class="tile is-child notification is-white">
                                    <p class="title">Middle box</p>
                                    <p class="subtitle">With an image</p>
                                    <figure class="image is-4by3">
                                        <img src="https://picsum.photos/640/480/?random" alt="Description" />
                                    </figure>
                                </article>
                            </div>
                        </div>
                        <div class="tile is-parent is-shady">
                            <article class="tile is-child notification is-white">
                                <p class="title">Wide column</p>
                                <p class="subtitle">Aligned with the right column</p>
                                <div class="content">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus
                                        odio quis feugiat facilisis.
                                    </p>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child panel is-white">
                            <p class="panel-heading">
                                Bereiteen Sie sich auf den Besuch bei uns vor.
                            </p>
                            <a class="panel-block">
                                <span class="panel-icon">
                                    <i class="fas fa-book" aria-hidden="true"></i>
                                </span>
                                Wie kann ich mich anmelden?
                            </a>
                        </article>
                    </div>
                </div>
                <div class="tile is-ancestor">
                    <div class="tile is-parent is-shady">
                        <article class="tile is-child notification is-white">
                            <p class="title">Side column</p>
                            <p class="subtitle">With some content</p>
                            <div class="content">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio
                                    quis feugiat facilisis.
                                </p>
                            </div>
                        </article>
                    </div>
                    <div class="tile is-parent is-8 is-shady">
                        <article class="tile is-child notification is-white">
                            <p class="title">Main column</p>
                            <p class="subtitle">With some content</p>
                            <div class="content">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio
                                    quis feugiat facilisis.
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
                <div class="tile is-ancestor">
                    <div class="tile is-parent is-8 is-shady">
                        <article class="tile is-child notification is-white">
                            <p class="title">Murphy's law</p>
                            <p class="subtitle">Anything that can go wrong will go wrong</p>
                            <div class="content">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio
                                    quis feugiat facilisis.
                                </p>
                            </div>
                        </article>
                    </div>
                    <div class="tile is-parent is-shady">
                        <article class="tile is-child notification is-white">
                            <p class="title">Main column</p>
                            <p class="subtitle">With some content</p>
                            <div class="content">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio
                                    quis feugiat facilisis.
                                </p>
                                <img v-for="(item, index) in items" class="preview-img-item" :src="item.src" @click="$photoswipe.open(index, items)" />
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import storyblokLivePreview from '@/mixins/storyblokLivePreview'
    import TierklinikHero from '@/components/TierklinikHero'

    export default {
        layout: 'default',
        components: { TierklinikHero },
        mixins: [storyblokLivePreview],
        asyncData(context) {
            let version = context.query._storyblok || context.isDev ? 'draft' : 'published'
            let endpoint = `cdn/stories/home`

            return context.app.$storyapi
                .get(endpoint, {
                    version: version,
                    cv: context.store.state.cacheVersion,
                })
                .then(res => {
                    return res.data
                })
                .catch(res => {
                    context.error({ statusCode: res.response.status, message: res.response.data })
                })
        },

        data() {
            return {
                project: 'default',
                items: [
                    {
                        src: 'https://i.picsum.photos/id/395/640/480.jpg',
                        w: 1024,
                        h: 768,
                    },
                    {
                        src: 'https://i.picsum.photos/id/237/640/480.jpg',
                        w: 1024,
                        h: 768,
                    },
                ],
            }
        },
        mounted() {
            console.log('homepage:', this.story)
        },
        methods: {
            open() {},
        },
    }
</script>
