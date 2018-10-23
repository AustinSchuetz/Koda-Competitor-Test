<template>
    <div class="home-holder">
        <post-list v-if="posts" :posts="posts" :total="total" :totalPages="totalPages"></post-list>
    </div>
</template>

<script>

    import { mapGetters } from 'vuex'
    import api from "~/api/index";
    import postList from '~/components/postList.vue'
    import recentPosts from '~/components/recentPosts.vue'
    import categories from '~/components/categories.vue'
    import programmingSidebar from '~/components/programmingSidebar.vue'

    export default {
        components: { postList, categories, recentPosts, programmingSidebar },
        async asyncData({ params }) {
            // We can use async/await ES6 feature
            let { data, total, totalPages } = await api.getPosts()

            return {
                posts: data,
                total: total,
                totalPages: totalPages
            }
        },
        head() {
            return {
                title: `Koda Competitor`,
                meta: [
                    {
                        name: 'description',
                        content: 'Follow Koda Competitor CrossFit Programming for any body type and athletic goals.'
                    }
                ]
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.$nuxt.$loading.start()

                setTimeout(() => this.$nuxt.$loading.finish(), 400)
            })
            if (this.categories.length === 0) {
                this.$store.dispatch('getCategories')
            }
        },
        computed: {
            ...mapGetters([
                'categories'
            ])
        }
    }
</script>

<style>
    .home-holder {
        width: 100%;
        margin: 0 auto;
        padding: 30px 10px;
    }
    .home-title {
        font-size: 3em;
        margin: 50px auto 0;
        text-align: center;
    }
    @media only screen and (max-width:790px) {
        .home-holder {
            padding: 0;
        }
    }
    /* Smartphones (portrait and landscape) ----------- */
    @media only screen
    and (min-device-width : 320px)
    and (max-device-width : 480px) {
    }
</style>