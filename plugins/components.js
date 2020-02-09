import Vue from 'vue'
import Feature from '~/components/storyblok/Feature.vue'
import Box from '~/components/storyblok/Box.vue'
import Card from '~/components/storyblok/Card.vue'
import Columns from '~/components/storyblok/Columns.vue'
import Column from '~/components/storyblok/Column.vue'
import Page from '~/components/storyblok/Page.vue'
import Media from '~/components/storyblok/Media.vue'
// import Slide from '~/components/storyblok/Slide.vue'
import Teaser from '~/components/storyblok/Teaser.vue'
import SectionIntro from '~/components/storyblok/SectionIntro.vue'
import SectionTermine from '~/components/storyblok/SectionTermine.vue'
import SectionBesuch from '~/components/storyblok/SectionBesuch.vue'
import SectionTiles from '~/components/storyblok/SectionTiles.vue'
import Section from '~/components/storyblok/Section.vue'
import Tile from '~/components/storyblok/Tile.vue'
import Title from '~/components/storyblok/Title.vue'
import Subtitle from '~/components/storyblok/Subtitle.vue'
import ElementContent from '~/components/storyblok/ElementContent.vue'
// import Leistung from '~/components/storyblok/Leistung.vue'
import Paragraph from '~/components/storyblok/Paragraph.vue'

Vue.component('feature', Feature)
Vue.component('box', Box)
Vue.component('card', Card)
Vue.component('flex-card', Card)
Vue.component('columns', Columns)
Vue.component('column', Column)
Vue.component('page', Page)
Vue.component('media', Media)
// Vue.component('slide', Slide)
Vue.component('teaser', Teaser)
Vue.component('section-termine', SectionTermine)
Vue.component('section-besuch', SectionBesuch)
Vue.component('chapter-intro', SectionIntro)
Vue.component('section-tiles', SectionTiles)
Vue.component('page-section', Section)
Vue.component('Tile', Tile)
Vue.component('main-title', Title)
Vue.component('subtitle', Subtitle)
Vue.component('element-content', ElementContent)
// Vue.component('Leistung', Leistung)
Vue.component('Paragraph', Paragraph)
