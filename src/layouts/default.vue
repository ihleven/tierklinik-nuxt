<template>
    <div>
        <TopBar />
        <Navigation />
        <nuxt />
    </div>
</template>

<script>
    import TopBar from '@/components/TopBar.vue'
    import Navigation from '@/components/Navigation.vue'
    export default {
        components: { TopBar, Navigation },

        data() {
            return {}
        },
    }
</script>
