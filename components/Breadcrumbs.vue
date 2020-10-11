<template>
    <nav class="navbar is-transparent" style="min-height:2rem">
        <div class="navbar-item">
            <nav class="breadcrumb" aria-label="breadcrumbs">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li>
                        <a :href="pagehref">{{ page }}</a>
                    </li>

                    <li v-if="self" class="is-active">
                        <a href aria-current="page">{{ self }}</a>
                    </li>
                </ul>
            </nav>
        </div>
    </nav>
</template>

<script>
    export default {
        props: {
            page: { type: String, required: true },
            pagehref: { type: String, required: true },
            self: { type: String, required: true },
        },
    }
</script>

<style lang="scss" scoped></style>
