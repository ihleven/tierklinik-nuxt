<template>
    <section v-editable="blok" class="p-4">
        <!-- <div class="container intro">
            <h2 class="title is-3 is-spaced">{{ blok.title }}</h2>
            <p class="subtitle is-5">
                {{ blok.title }}
            </p>
        </div> -->

        <!-- component -->
        <div class="w-full sm:flex rounded overflow-hidden shadow">
            <img :src="resizedImage" :alt="blok.image.alt" class="object-cover w-full sm:w-3/5" />
            <!-- <div
                class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                style="background-image: url('https://tailwindcss.com/img/card-left.jpg');"
                title="Woman holding a mug"
            ></div> -->
            <div class="sm:w-2/5 bg-white p-4 flex flex-col justify-center leading-normal">
                <div class="">
                    <!-- <p class="text-sm text-grey-dark flex items-center">
                        <svg class="text-grey w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                        </svg>
                        Members only
                    </p> -->
                    <div class="text-black font-bold text-xl mb-2">
                        {{ blok.name }} <small v-if="age">({{ age }} Jahre)</small>
                    </div>
                    <p class="text-grey-darker text-base">{{ blok.description }}</p>
                </div>
                <!-- <div class="flex items-center">
                    <img class="w-10 h-10 rounded-full mr-4" src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg" alt="Avatar of Jonathan Reinink" />
                    <div class="text-sm">
                        <p class="text-black leading-none">Jonathan Reinink</p>
                        <p class="text-grey-dark">Aug 18</p>
                    </div>
                </div> -->
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        // name: 'SectionPets',
        props: ['blok'],
        computed: {
            age() {
                if (this.blok.birthdate) {
                    const years = new Date(new Date() - new Date(this.blok.birthdate)).getFullYear() - 1970

                    return years
                }
                return this.blok.age
            },
            resizedImage() {
                let imageService = '//img2.storyblok.com/',
                    option = '1000x/smart'
                return this.blok.image.filename.replace('//a.storyblok.com', imageService + option)
            },
        },
        mounted() {
            console.log('section-pets:', this.blok._uid, this.blok.tiles)
        },
    }
</script>

<style lang="scss" scoped></style>
