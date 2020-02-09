<template>
    <div v-editable="blok" class="tile" :class="classes">
        <template v-for="tile in blok.tiles">
            <Tile v-if="tile.component == 'tile'" :key="tile._uid" :blok="tile"></Tile>
            <component :is="tile.component" v-else :key="tile._uid" class="tile is-child" :blok="tile"></component>
        </template>
    </div>
</template>

<script>
    export default {
        name: 'Tile',
        props: ['blok'],
        computed: {
            classes() {
                let parent = this.blok.is_parent ? 'is-parent ' : '',
                    vertical = this.blok.is_vertical ? 'is-vertical ' : '',
                    size = this.blok.size ? `is-${this.blok.size}` : ''
                return parent + vertical + size
            },
        },
        // mounted() {
        //     console.log('tile:', this.blok.is_parent, this.blok.is_vertical, this.blok.size, this.blok.tiles)
        // },
    }
</script>

<style lang="scss" scoped></style>
