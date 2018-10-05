<template>
  <div>
    <section class="header">
      <categories :categories="categories"></categories>
    </section>
    <section class="programming-sidebar">
      <programming-sidebar></programming-sidebar>
    </section>
    <section class="container">
      <div class="inside-container">
        <h1 class="home-title">Title Line</h1>
        <div class="content">
          <post-list v-if="posts" :posts="posts" title="Recent Posts"></post-list>
        </div>
      </div>
    </section>
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
  data() {
    return {
      title: 'default'
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

.header {
  background: none !important;
  text-align: center;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top:60px;
}
.inside-container {
    width: 100%;
}

.content {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  margin: 0 0 0 260px;
  line-height: 150%;
  padding: 30px;
  width: calc(100% - 260px);
}
.home-title {
  font-size: 3em;
  margin: 50px auto 0;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  /* 1 */
  display: block;
  font-weight: bold;
  font-size: 100px;
  color: #fff;
  letter-spacing: 1px;
  font-size: 52px;
  padding:50px 5px 0px 5px;
  text-align:center;
}

.subtitle {
  font-weight: 300;
  font-size: 28px;
  color: #fff;
  padding-bottom: 15px;
  padding-left:5px;
  text-align:center;
}

.links {
  padding-top: 15px;
}

/* Smartphones (portrait and landscape) ----------- */
@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 480px) {

  .title {
    font-size: 26px;
    line-height:36px;
    padding:40px 10px 0px;
  }
  .subtitle {
    font-size: 22px;
    line-height:26px;
    padding:5px 10px 15px;
  }
  h3 {
    font-size: 1.5em;
    font-weight: 700;
    line-height: 44px;
  }

}
</style>
