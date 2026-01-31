<template>
    <nav class="topbar">
        <span class="tel">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-phone">
                <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <b>+43 5552 66755</b> &nbsp; &nbsp;Praxis
            <!-- &amp; Notdienst -->
        </span>
        <ul>
            <!-- <li><n-link to="/sprechstunden">sprechstunden</n-link></li> -->
            <!-- <li><n-link to="/anfahrt">anfahrt</n-link></li>
            <li><n-link to="/kontakt">kontakt</n-link></li> -->
            <!-- <li><n-link to="/impressum">impressum</n-link></li> -->
            <!-- <li><n-link to="/datenschutz">datenschutz</n-link></li> -->
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'TopBar',
    data() {
        return {}
    },
}
</script>

<style lang="scss" scoped>
.topbar {
    background-color: hsl(0, 0%, 14%);
    border-bottom: 1px solid black;
    display: flex;
    justify-content: space-between;
    align-items: stretch;

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
