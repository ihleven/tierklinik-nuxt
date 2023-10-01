<template>
    <section id="besuch" v-editable="blok" class="section">
        <div class="container has-text-centered">
            <div class="tile is-ancestor">
                <div class="tile is-vertical is-8">
                    <div class="tile">
                        <div class="tile is-parent is-vertical">
                            <article class="tile is-child box notification is-info" style="align-items: center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-phone">
                                    <path
                                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                                    </path>
                                </svg>

                                <p class="title is-3">Praxisnummer</p>
                                <p class="subtitle is-3">+43 5552 66755</p>
                                <!-- <p class="subtitle"> -->
                                <!-- <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none"  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> -->
                                <!-- +43 5552 66755 -->
                                <!-- </p> -->
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child box" v-html="text1"></article>
                        </div>
                    </div>

                    <div class="tile is-parent">
                        <article class="tile is-child box">
                            <h4 class="title">Öffnungszeiten</h4>
                            <table class="table is-striped is-hoverable is-fullwidth">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Vormittag</th>
                                        <th>Nachmittag</th>
                                    </tr>
                                </thead>
                                <!-- <tfoot>
                                    <tr>
                                        <th></th>
                                        <th>Vormittag</th>
                                        <th>Nachmittag</th>
                                    </tr>
                                </tfoot> -->
                                <tbody>
                                    <tr>
                                        <th>Montag</th>
                                        <td>9h - 11h</td>
                                        <td>16h - 19h</td>
                                    </tr>
                                    <!-- <tr>
                                        <th>Dienstag</th>
                                        <td>9h - 11h</td>
                                        <td>16h - 19h</td>
                                    </tr> -->
                                    <!-- <tr>
                                        <th>Mittwoch</th>
                                        <td>9h - 11h</td>
                                        <td></td>
                                    </tr> -->
                                    <tr>
                                        <th>Donnerstag</th>
                                        <td>9h - 11h</td>
                                        <td>16h - 19h</td>
                                    </tr>
                                    <!-- <tr>
                                        <th>Freitag</th>
                                        <td>Nur mit Termin</td>
                                        <td></td>
                                    </tr> -->
                                    <tr>
                                        <th>Samstag</th>
                                        <td>9h - 11h</td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </article>
                    </div>
                </div>

                <div class="tile is-parent is-vertical">
                    <article class="tile is-child">
                        <div class="card is-shady notdienst">
                            <div class="card-image notification is-danger has-text-centered"
                                style="border-bottom-left-radius: 0; border-bottom-right-radius: 0">
                                <p class="title">Notdienst</p>
                            </div>
                            <div class="card-content content" v-html="notdienst"></div>
                        </div>
                    </article>

                    <article class="tile is-child box info" v-html="info"></article>
                </div>
            </div>

            <div class="tile is-ancestor">
                <div class="tile is-vertical is-parent">
                    <div v-for="a in announcements" :key="a.id"
                        class="tile is-child box notification is-warning has-text-centered" v-html="a"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'SectionTermine',
    props: ['blok'],
    computed: {
        announcements() {
            return this.$store.state.announcements
        },
        text1() {
            return this.$storyapi.richTextResolver.render(this.blok.text1)
        },
        notdienst() {
            return this.$storyapi.richTextResolver.render(this.blok.notdienst)
        },
        info() {
            return this.$storyapi.richTextResolver.render(this.blok.info)
        },
    },
}
</script>

<style lang="scss">
.notdienst {
    margin-bottom: 0;
}

.info {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
