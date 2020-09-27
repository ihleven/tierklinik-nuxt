<template>
    <div>
        <footer class="footer">
            <div class="container">
                <div class="columns is-multiline">
                    <div class="column is-one-third">
                        <article class="notification">
                            <p class="title is-3">Kontakt</p>
                            <p class="title is-5">Tierklinik Tschabrun</p>
                            <p>Elserweg 8a<br />6714 Nüziders</p>
                            <p>tel: +43 213141234 123</p>
                            <p>fax: +43 213141234 123</p>
                            <p>mail: mail@tierklinik-tschabrun.com</p>
                        </article>
                    </div>
                    <div class="column is-one-third">
                        <article class="notification has-background-white media">
                            <figure class="media-left">
                                <span class="icon has-text-info">
                                    <i class="fab fa-lg fa-wpforms"></i>
                                </span>
                            </figure>
                            <div class="media-content">
                                <div class="content">
                                    <h1 class="title is-size-4">Form</h1>
                                    <p class="is-size-5 subtitle">The indispensable <strong>form controls</strong>, designed for maximum clarity</p>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div class="column is-one-third">
                        <article class="notification has-background-white media">
                            <figure class="media-left">
                                <span class="icon has-text-danger">
                                    <i class="fas fa-lg fa-cubes"></i>
                                </span>
                            </figure>
                            <div class="media-content">
                                <div class="content">
                                    <h1 class="title is-size-4">Components</h1>
                                    <p class="is-size-5 subtitle">
                                        Impressum
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div class="column is-one-third">
                        <article class="notification has-background-white media">
                            <figure class="media-left">
                                <span class="icon has-text-grey">
                                    <i class="fas fa-lg fa-cogs"></i>
                                </span>
                            </figure>
                            <div class="media-content">
                                <div class="content">
                                    <h1 class="title is-size-4">Modifiers</h1>
                                    <p class="is-size-5 subtitle">An <strong>easy-to-read</strong> naming system designed for humans</p>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div class="column is-one-third">
                        <article class="notification has-background-white media">
                            <figure class="media-left">
                                <span class="icon has-text-primary">
                                    <i class="fas fa-lg fa-warehouse"></i>
                                </span>
                            </figure>
                            <div class="media-content">
                                <div class="content">
                                    <h1 class="title is-size-4">Layout</h1>
                                    <p class="is-size-5 subtitle">Design the <strong>structure</strong> of your webpage with these CSS classes</p>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div class="column is-one-third">
                        <article class="notification has-background-white media">
                            <figure class="media-left">
                                <span class="icon has-text-danger">
                                    <i class="fas fa-lg fa-cube"></i>
                                </span>
                            </figure>
                            <div class="media-content">
                                <div class="content">
                                    <h1 class="title is-size-4">Elements</h1>
                                    <p class="is-size-5 subtitle">Essential interface elements that only require a <strong>single CSS class</strong></p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </footer>
        <footer class="footer has-background-black-ter has-text-white">
            <!-- https://www.orbitmedia.com/blog/website-footer-design-best-practices/ 
        
        Footer-Beispiel: https://www.ithelps-digital.com/de/impressum
        -->

            <div class="container">
                <div class="columns">
                    <div class="column content">
                        <p class="title is-3">Kontakt</p>
                        <p class="title is-5">Tierklinik Tschabrun</p>
                        <p>Elserweg 8a<br />6714 Nüziders</p>
                        <p>tel: +43 213141234 123</p>
                        <p>fax: +43 213141234 123</p>
                        <p>mail: mail@tierklinik-tschabrun.com</p>
                    </div>
                    <div class="column">
                        Awards and Certifications
                    </div>
                    <div class="column">
                        Association Memberships
                    </div>
                    <div class="column">
                        Testimonials
                    </div>
                    <div class="column">
                        Social media links
                    </div>
                </div>

                <h5 class="title">Navigation / Sitemap</h5>
                <ul class="links">
                    <li><n-link to="/sprechzeiten">Sprechzeiten</n-link></li>
                    <li><n-link to="/kontakt">kontakt</n-link></li>
                    <li><n-link to="/anfahrt">anfahrt</n-link></li>
                    <li><n-link to="/impressum">impressum</n-link></li>
                    <li><n-link class="button is-text" to="/datenschutz">datenschutz</n-link></li>
                </ul>

                <div class="columns">
                    <ul class="column content">
                        <p class="title is-4">Leistungen</p>
                        <li><n-link to="/">Startseite</n-link></li>
                        <li><n-link to="/ueber-uns">Über uns</n-link></li>
                        <li><n-link to="/">Startseite</n-link></li>
                        <li><n-link to="/">Startseite</n-link></li>
                        <li><n-link to="/">Startseite</n-link></li>
                        <li><n-link to="/">Startseite</n-link></li>
                    </ul>
                    <div class="column">
                        <p class="title is-4">Leistungen</p>

                        <ul class="column content">
                            <li><n-link to="/">FAchgebiete</n-link></li>
                            <li><n-link to="/ueber-uns">Therapiemöglichkeiten</n-link></li>
                            <li><n-link to="/">Startseite</n-link></li>
                            <li><n-link to="/">Startseite</n-link></li>
                            <li><n-link to="/">Startseite</n-link></li>
                            <li><n-link to="/">Startseite</n-link></li>
                        </ul>
                    </div>
                    <div class="column">
                        <p class="title is-4">Ratgeber</p>
                        <ul class="column content">
                            <li><n-link to="/">FAchgebiete</n-link></li>
                            <li><n-link to="/ueber-uns">Therapiemöglichkeiten</n-link></li>
                            <li><n-link to="/">Startseite</n-link></li>
                            <li><n-link to="/">Startseite</n-link></li>
                            <li><n-link to="/">Startseite</n-link></li>
                            <li><n-link to="/">Startseite</n-link></li>
                        </ul>
                    </div>
                    <div class="column">
                        <p class="title is-4">Artikel</p>
                        <ul class="column content">
                            <li><n-link to="/">FAchgebiete</n-link></li>
                            <li><n-link to="/ueber-uns">Therapiemöglichkeiten</n-link></li>
                            <li><n-link to="/">Startseite</n-link></li>
                            <li><n-link to="/">Startseite</n-link></li>
                            <li><n-link to="/">Startseite</n-link></li>
                            <li><n-link to="/">Startseite</n-link></li>
                        </ul>
                    </div>
                </div>
                <hr />
                c 2020 Copyright
            </div>
        </footer>
    </div>
</template>

<style lang="scss" scoped>
    .footer {
        // margin-top: 5rem;
        // padding: 10rem;

        ul.links {
            padding: 3rem;
            list-style: none;
            font: 1em/1.25 Helvetica;
            display: flex;
            justify-content: center;
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
