<template>
    <article class="card is-shady">
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
</template>

<script>
    export default {
        name: 'Sprechzeiten',
        props: ['blok'],
    }
</script>

<style lang="scss"></style>
