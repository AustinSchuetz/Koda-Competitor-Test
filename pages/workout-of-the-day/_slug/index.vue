<template>
<div class="post-container">
    <div class="post-content">
        <h3>{{post.title.rendered}}</h3>
        <div v-html="post.content.rendered"></div>
        <div class="bias-wrap">
          <a v-if="post.acf.aerobic_bias" @click="setActive('aerobic')" :class="{ activebias: isActive('aerobic') }" href="javascript:void(0)" class="bias">Aerobic Bias</a>
          <a v-if="post.acf.gymnastics_bias" @click="setActive('gymnastics')" :class="{ activebias: isActive('gymnastics') }" href="javascript:void(0)" class="bias">Gymnastics Bias</a>
          <a v-if="post.acf.strength_bias" @click="setActive('strength')" :class="{ activebias: isActive('strength') }" href="javascript:void(0)" class="bias">Strength Bias</a>
          <a v-if="post.acf.balanced_athlete" @click="setActive('balanced')" :class="{ activebias: isActive('balanced') }" href="javascript:void(0)" class="bias">Balanced Athlete</a>
        </div>
        <div class="post-text-content">
          <div v-if="activeItem === 'aerobic'" id="aerobic-bias-content" v-html="post.acf.aerobic_bias"></div>
          <div v-if="activeItem === 'gymnastics'" id="gymnastics-bias-content" v-html="post.acf.gymnastics_bias"></div>
          <div v-if="activeItem === 'strength'" id="strength-bias-content" v-html="post.acf.strength_bias"></div>
          <div v-if="activeItem === 'balanced'" id="balanced-athlete-content" v-html="post.acf.balanced_athlete"></div>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
import config from "../../../api/config/index";
import recentPosts from '../../../components/recentPosts.vue'
import categories from '../../../components/categories.vue'
import programmingSidebar from '../../../components/programmingSidebar.vue'

export default {
  components: { recentPosts, categories, programmingSidebar },
  async asyncData({ params }) {
    // We can use async/await ES6 feature
    let { data } = await axios.get(config.baseUrl + `posts?slug=${params.slug}`)
    return {
      post: data[0]
    }
  },
  head() {
    return {
      title: 'Koda Competitor | ' + this.post.title.rendered,
      meta: [
        {
          name: 'description',
          content: 'Koda Competitor | Daily CrossFit Workout information for ' + this.post.title.rendered
        }
      ]
    }
  },
  data() {
    return {
      activeItem: 'aerobic',
      title: 'default',
      recent: [{
        title: 'One',
        href: '#hash'
      },
      {
        title: 'Two'
      },
      {
        title: 'Three'
      }]
    }
  },
  mounted() {
    this.$store.dispatch('getPosts')
    this.$store.dispatch('getCategories')
  },
  computed: {
    ...mapGetters([
      'posts',
      'categories'
    ])
  },
  methods: {
    isActive: function (menuItem) {
      return this.activeItem === menuItem
    },
    setActive: function (menuItem) {
      this.activeItem = menuItem // no need for Vue.set()
    }
  }
}
</script>

<style scoped>
/* layout */
.post-container {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  margin: 0px auto;
  line-height: 150%;
  padding: 0 30px 30px 30px;
  width: 850px;
  max-width: 95%;
}

.bias-wrap {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 1000px;
  max-width: 100%;
}
.bias-wrap .bias {
  padding: 20px;
  background: rgba(0,0,0,0.03);
  border-top: 3px solid transparent;
  text-decoration: none;
  font-weight: bold;
  color: #646464;
  transition: 0.15s all ease-in-out;
}
.bias-wrap .bias:hover {
  border-top-color: #c60314;
  color: #1d1d1d;
  background: rgba(0,0,0,0.02);
}
.bias-wrap .activebias {
  border-top-color: #c60314;
  color: #1d1d1d !important;
  background: #fff !important;
}
.post-text-content {
  padding: 20px 10px;
  background: linear-gradient(to bottom, #fff, transparent);
}
.post-container h4 {
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #c60314;
  font-weight: 800;
  padding: 10px;
  margin-bottom: 10px;
  border-bottom: 2px solid #c60314;
}

.post-content {
  width: 100%;
  padding: 20px 10px;
}

.post-content img {
  max-width: 100%;
  height: auto;
  margin: 10px 0px;
}

.sidebar {
  width: 180px;
  padding: 0px 20px;
}

p {
  margin-bottom: 10px;
}

h3 {
  font-size:2em;
  font-weight:bold;
  line-height: 64px;
}
h3 a {
  text-decoration: none;
  color:#444;
}
p {
  font-size:16px;
  line-height: 140%;
}

/* Smartphones (portrait and landscape) ----------- */
@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 480px) {
  
  .title {
    font-size: 22px;
    line-height:44px;
  }

  .sidebar {
    display: none;
  }

}
</style>
