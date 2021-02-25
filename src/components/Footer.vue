<template>
    <div>
        <footer class="footer has-background-grey-dark">
            <div class="container">
                <div class="columns is-multiline">
                    <div class="column is-half">
                        <article class="notification has-background-grey-dark has-text-light">
                            <p class="title is-3">Tierärzte Tschabrun</p>
                            <p class="title is-5"></p>
                            <p>Elserweg 8a<br />6714 Nüziders</p>
                            <p>tel: +43 213141234 123</p>
                            <p>fax: +43 213141234 123</p>
                            <p>mail: mail@tierklinik-tschabrun.com</p>
                        </article>
                    </div>
                    <div class="column is-half">
                        <article class="notification has-background-grey-dark has-text-light">
                            <h4 class="title is-size-4">Sitemap</h4>
                            <ul style="list-style: none">
                                <li class="is-size-5"><a href="/">Startseite</a></li>
                                <li class="is-size-5"><a href="/ueber-uns">Über uns</a></li>
                                <li class="is-size-5"><a href="/patienten">Patienten</a></li>
                                <li class="is-size-5"><a href="/leistungen">Unsere Leistungen</a></li>
                                <li class="is-size-5"><a href="/ratgeber">Ratgeber</a></li>
                                <li class="is-size-5"><a href="/aktuelles">Aktuelles</a></li>
                                <li class="is-size-5"><a href="/blog">Blog</a></li>

                                <!-- <li class="is-size-5"><a href="/impressum">Impressum</a></li>
                                <li class="is-size-5"><a href="/datenschutz">Datenschutz</a></li>
                                <li class="is-size-5"><a href="/kontakt">Kontakt</a></li> -->
                            </ul>
                        </article>
                    </div>
                </div>
            </div>
        </footer>
        <!-- https://www.orbitmedia.com/blog/website-footer-design-best-practices/ 
        
        Footer-Beispiel: https://www.ithelps-digital.com/de/impressum
        -->
        <!-- <footer class="footer has-background-black-ter has-text-white">

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
        </footer> -->
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
