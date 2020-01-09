<template>
    <nav class="navbar is-transparent" style="min-height:2rem">
        <div class="navbar-item">
            <nav class="breadcrumb" aria-label="breadcrumbs">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/artikel">Artikel</a></li>

                    <li class="is-active"><a href aria-current="page">Über uns</a></li>
                </ul>
            </nav>
        </div>
    </nav>
</template>

<script>
    export default {
        props: ['img', 'heading', 'subheading'],
    }
</script>

<style lang="scss" scoped></style>
