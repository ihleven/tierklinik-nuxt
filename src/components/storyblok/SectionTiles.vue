<template>
    <section v-editable="blok" class="section">
        <div class="container">
            <div class="tile is-ancestor">
                <!-- All other tile elements -->
                <Tile v-for="tile in blok.tiles" :key="tile._uid" :blok="tile"></Tile>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'SectionTiles',
        props: ['blok'],
        mounted() {
            // console.log('section-tiles:', this.blok._uid, this.blok.tiles)
        },
    }
</script>

<style lang="scss" scoped></style>
