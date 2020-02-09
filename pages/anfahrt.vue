<template>
    <div id="map-wrap" style="height: 100vh">
        <no-ssr>
            <l-map :zoom="13" :center="[47.41322, -1.219482]">
                <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
                <l-marker :lat-lng="[47.41322, -1.219482]"></l-marker>
            </l-map>
        </no-ssr>
    </div>
</template>

<script>
    export default {
        name: 'Anfahrt',
        layout: 'default',
        props: ['blok'],
    }
</script>

<style lang="scss"></style>
