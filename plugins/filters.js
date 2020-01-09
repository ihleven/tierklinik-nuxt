import Vue from 'vue'

// In your main.js you can register a custom filter
// https://vuejs.org/v2/guide/filters.html
Vue.filter('transformImage', function(image, option) {
    if (!image) return ''
    if (!option) return ''

    let imageService = '//img2.storyblok.com/'
    let path = image.replace('//a.storyblok.com', '')
    return imageService + option + path
})

// Useage:
// {{ image | transformImage('0x108') }}
