import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyBMf0vF0fh4iIzAavTh5NfF-AeIcAgfF7I',
        libraries: 'places', // necessary for places input
    },
})
