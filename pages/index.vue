<template>
    <div>
        <h1 class="home-title">Title Line</h1>
        <post-list v-if="posts" :posts="posts" title="Recent Posts"></post-list>
    </div>
</template>

<script>

import { mapGetters } from 'vuex'
import api from "../api/index";
import postList from '../components/postList.vue'
import recentPosts from '../components/recentPosts.vue'
import categories from '../components/categories.vue'
import programmingSidebar from '../components/programmingSidebar.vue'

export default {
  components: { postList, categories, recentPosts, programmingSidebar },
  async asyncData({ params }) {
    // We can use async/await ES6 feature
    let { data } = await api.getPosts()

    return {
      posts: data
    }
  },
  head() {
    return {
      title: `Koda Competitor | Home`,
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
.home-title {
  font-size: 3em;
  margin: 50px auto 0;
  text-align: center;
}
/* Smartphones (portrait and landscape) ----------- */
@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 480px) {
  h3 {
    font-size: 1.5em;
    font-weight: 700;
    line-height: 44px;
  }

}
</style>
