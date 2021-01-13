<template>
    <nav class="navbar">
        <div class="container">
            <div class="navbar-brand">
                <a class="navbar-item" href="/">
                    <img src="~assets/logo/logo-tierklinik.svg" alt="Logo" />

                    <h1 class="title is-4">
                        Tierklinik
                        <div class="subtitle is-6">
                            Tschabrun
                            <small style="color: #aaa">.com</small>
                        </div>
                    </h1>
                </a>

                <span
                    class="navbar-burger burger"
                    :class="{ 'is-active': menuOpen }"
                    data-target="navbarMenu"
                    @click="toggleMenu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </div>
            <div class="navbar-menu" :class="{ 'is-active': menuOpen }">
                <div class="navbar-start">
                    <n-link :to="'/ueber-uns'" class="navbar-item">Über uns</n-link>
                    <!-- <n-link :to="'/patienten'" class="navbar-item">Patienten</n-link> -->
                    <n-link :to="'/leistungen'" class="navbar-item">Leistungen</n-link>
                    <n-link :to="'/ratgeber'" class="navbar-item">Ratgeber</n-link>
                    <n-link :to="'/aktuelles'" class="navbar-item">Aktuelles</n-link>
                    <n-link :to="'/patienten'" class="navbar-item">Patienten</n-link>
                    <n-link :to="'/blog'" class="navbar-item">Blog</n-link>
                </div>
                <!-- <div class="navbar-end">
                    <div class="tabs is-right">
                        <ul>
                            <li class="is-active">
                                <a>Kontakt</a>
                            </li>
                            <li>
                                <a href>Impressum</a>
                            </li>
                            <li>
                                <a href>Anfahrt</a>
                            </li>
                        </ul>
                    </div>
                </div> -->
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            menuOpen: false,
        }
    },
    methods: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen
        },
    },
}
</script>

<style lang="scss" scoped>
.navbar {
    .navbar-brand {
        padding: 1rem;
        .navbar-item {
            margin: -1rem;
            padding: 0 1rem;
        }
    }
    background: rgba(250, 250, 250, 0.3);
    .navbar-item {
        img {
            max-height: unset;
            width: 5rem;
            height: 5rem;
            padding-left: 1rem;
        }
        h1 {
            padding-left: 1rem;
        }
        &.logo {
            // padding: 1rem 1rem 1rem 5rem;
            // padding: 0 1rem 0 5rem;
            // background: url(~assets/tierklinik/logo-tierklinik.svg) no-repeat center center;
            // background-size: contain;
            // background-position: 0% 50%;
        }
        a {
            border-bottom: 1px solid transparent;
            &:hover a {
                border-bottom: 1px solid currentColor;
            }
        }
    }
}
</style>
