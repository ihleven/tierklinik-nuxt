<template>
    <div class="flex justify-center w-full py-4">
        <nav class="relative z-0 inline-flex shadow-sm -space-x-px" aria-label="Pagination">
            <a
                class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                @click="prev"
            >
                <span class="sr-only">Previous</span>
                <!-- Heroicon name: chevron-left -->
                <svg
                    class="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fill-rule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                    />
                </svg>
            </a>
            <a
                v-for="page in total"
                :key="page"
                class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium hover:bg-gray-50"
                :class="
                    current === page ? 'bg-blue-500 text-white hover:bg-blue-400 hover:text-white' : 'text-gray-700 '
                "
                @click="toPage(page)"
            >
                {{ page }}
            </a>

            <a
                class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                @click="next"
            >
                <span class="sr-only">Next</span>
                <!-- Heroicon name: chevron-right -->
                <svg
                    class="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                    />
                </svg>
            </a>
        </nav>
    </div>
</template>

<script>
export default {
    props: {
        current: Number,
        total: Number,
    },
    computed: {
        prevenabled() {
            return this.current > 1
        },
        nextenabled() {
            return this.current < this.total
        },
    },
    mounted() {
        console.log('pagination:', this.current, this.total)
    },
    methods: {
        toPage(page) {
            this.$emit('page', page)
        },
        prev() {
            if (this.prevenabled) {
                this.$emit('page', this.current - 1)
            }
        },
        next() {
            if (this.nextenabled) {
                this.$emit('page', this.current + 1)
            }
        },
    },
}
</script>
