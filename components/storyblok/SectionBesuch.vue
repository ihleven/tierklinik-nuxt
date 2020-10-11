<template>
    <section v-editable="blok" class="section">
        <div class="container has-text-centered">
            <h2 class="title is-spaced">Bereiten Sie sich auf Ihren Besuch bei uns vor</h2>
            <h4 class="subtitle">
                Hier beantworten wir Ihnen die häufigsten Fragen und weisen Sie auf unsere Services hin.
            </h4>
            <br />
            <br />
            <br />

            <div class="tile is-ancestor">
                <div class="tile is-parent is-vertical">
                    <article class="tile is-child box">
                        <p class="title is-5">Happy Visits</p>
                        <h6 class="subtitle is-6">Stressfreier Besuch in unserer Tierklinik</h6>
                        <div class="content">
                            <p>
                                <n-link to="/leistungen">mehr erfahren</n-link>
                            </p>
                        </div>
                    </article>
                    <article class="tile is-child box">
                        <p class="title is-5">Tipps für Katzen</p>
                        <h6 class="subtitle is-6">Stressfrei zum Tierarzt</h6>

                        <div class="content">
                            <p>
                                <n-link to="/leistungen">mehr erfahren</n-link>
                            </p>
                        </div>
                    </article>
                </div>
                <div class="tile is-parent is-8">
                    <article class="tile is-child panel">
                        <p class="panel-heading">
                            Häufige Fragen
                        </p>

                        <template v-for="(faq, index) in faqs">
                            <a :key="faq._uid" class="panel-block question" @click="toggle(index)">
                                <!-- <span class="panel-icon">  -->
                                <Icon class="state-icon" :name="faq.open ? 'minus-square' : 'plus-square'" />
                                <!-- </span> -->
                                <span>{{ faq.question }}</span>
                            </a>
                            <div v-show="faq.open" :key="faq._uid" class="panel-block answer content">
                                <span v-html="faq.answer"></span>
                            </div>
                        </template>
                    </article>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Icon from '@/components/Icon'
    export default {
        name: 'SectionBesuch',
        components: { Icon },
        props: ['blok'],
        data() {
            return {
                faqs: this.blok.faqs.map(faq => ({
                    question: faq.question,
                    answer: this.$storyapi.richTextResolver.render(faq.answer),
                    open: false,
                })),
            }
        },
        mounted() {
            // console.log('faq:', this.blok)
        },
        methods: {
            toggle(index) {
                this.faqs.forEach((element, i) => {
                    let state = i == index ? !element.open : false
                    element.open = state
                })
            },
        },
    }
</script>

<style lang="scss" scoped>
    .panel-block {
        .state-icon {
            margin-right: 1rem;
        }
        &.question {
            // font: 600 1rem/1.5rem Helvetica;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            line-height: 2rem;
            background-color: white;
            padding: 1rem;
            font-weight: 600;
        }
        &.answer {
            text-align: left;
            background-color: white;
            padding: 1rem 1rem 1rem 3rem;
            margin-bottom: 0;
        }
    }
</style>
