<template>
<div class="post-container">
    <div class="post" v-for="(post, index) in post" :key="index" :mounted="loadPostBias(post.acf)">
        <div class="post-content">
            <div v-if="post.fi_medium" class="post-featured-background fi_medium" :style="{ 'background-image': 'url(' + post.fi_medium + ')' }">
                <h3>{{post.title.rendered}}</h3>
            </div>
            <div v-html="post.content.rendered"></div>
            <div class="bias-wrap">
              <a v-if="post.acf.all_athletes" @click="setActive('all_athletes')" :class="{ activebias: $store.state.activeBias === 'all_athletes' }" href="javascript:void(0)" class="bias">All Athletes</a>
              <a v-if="post.acf.aerobic_bias" @click="setActive('aerobic_bias')" :class="{ activebias: $store.state.activeBias === 'aerobic_bias' }" href="javascript:void(0)" class="bias">Aerobic Bias</a>
              <a v-if="post.acf.gymnastics_bias" @click="setActive('gymnastics_bias')" :class="{ activebias: $store.state.activeBias === 'gymnastics_bias' }" href="javascript:void(0)" class="bias">Gymnastics Bias</a>
              <a v-if="post.acf.strength_bias" @click="setActive('strength_bias')" :class="{ activebias: $store.state.activeBias === 'strength_bias' }" href="javascript:void(0)" class="bias">Strength Bias</a>
              <a v-if="post.acf.balanced_athlete" @click="setActive('balanced_athlete')" :class="{ activebias: $store.state.activeBias === 'balanced_athlete' }" href="javascript:void(0)" class="bias">Balanced Athlete</a>
            </div>
            <div class="post-text-content">
              <div v-if="$store.state.activeBias === 'all_athletes'" id="all-athletes-content" v-html="post.acf.all_athletes"></div>
              <div v-if="$store.state.activeBias === 'aerobic_bias'" id="aerobic-bias-content" v-html="post.acf.aerobic_bias"></div>
              <div v-if="$store.state.activeBias === 'gymnastics_bias'" id="gymnastics-bias-content" v-html="post.acf.gymnastics_bias"></div>
              <div v-if="$store.state.activeBias === 'strength_bias'" id="strength-bias-content" v-html="post.acf.strength_bias"></div>
              <div v-if="$store.state.activeBias === 'balanced_athlete'" id="balanced-athlete-content" v-html="post.acf.balanced_athlete"></div>
            </div>
        </div>
        <div v-if="post.acf.workout_id">Is leaderboard post - need to style a leaderboard with the specific workout id here: {{ post.acf.workout_id }}</div>
    </div>
</div>
</template>
<script>
import axios from 'axios'
import recentPosts from '../../../components/recentPosts.vue'
import categories from '../../../components/categories.vue'
import programmingSidebar from '../../../components/programmingSidebar.vue'

export default {
  components: { recentPosts, categories, programmingSidebar },
    asyncData ({ params }) {
        return axios.get(`https://wod.kodacompetitor.com/wp-json/wp/v2/posts?slug=${params.slug}`)
            .then((res) => {
                return {
                    post: res.data

                    // this.loadPostBias(res.data.acf);
                }
            }).catch((err) => {
                console.log(err)
            })
    },
  head() {
      return {
          title: 'Koda Competitor | ' + this.post[0].title.rendered,
          meta: [
              {
                  name: 'description',
                  content: 'Daily CrossFit Workout information for ' + this.post[0].title.rendered
              },
              {
                  name: 'title',
                  content: 'Koda Competitor | ' + this.post[0].title.rendered
              }
          ]
      }
  },
  data() {
    return {
      post: []
    }
  },
  methods: {
    setActive: function (menuItem) {
        this.$store.commit('setActiveStore', menuItem);
    },
    loadPostBias(bias) {
        if (this.$store.state.activeBias === null) {
            if (bias.all_athletes) {
                return this.setActive('all_athletes');
            } else if (bias.aerobic_bias) {
                return this.setActive('aerobic_bias');
            } else if (bias.gymnastics_bias) {
                return this.setActive('gymnastics_bias');
            } else if (bias.strength_bias) {
                return this.setActive('strength_bias');
            } else if (bias.balanced_athlete) {
                return this.setActive('balanced_athlete');
            }
        }
    }
  }
}
</script>

<style scoped>
.post-container {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  margin: 0px auto;
  line-height: 150%;
  width: 1050px;
  max-width: 95%;
}
.post-container .post {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.post-featured-background {
    padding: 100px 0;
    width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-top: 3px solid #c60314;
    position: relative;
    z-index: 1;
    background-position: 50% 20%;
}
.post-featured-background::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.35);
}
.post-featured-background h3 {
    font-size:2em;
    font-weight:bold;
    line-height: 64px;
    color: #fff;
    text-align: center;
    width: 550px;
    max-width: 100%;
    margin: 0 auto;
    position: relative;
    z-index: 2;
    text-shadow:  0 0 5px #000;
}
.bias-wrap {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 1000px;
    max-width: 100%;
}
.bias-wrap .bias {
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #f2f2f2;
    border-bottom: 3px solid transparent;
    text-decoration: none;
    font-weight: bold;
    color: #646464;
    width: 25%;
    text-align: center;
    transition: 0.15s all ease-in-out;
}
.bias-wrap .bias:hover {
  border-bottom-color: #c60314;
  color: #1d1d1d;
  background: #fff;
}
.bias-wrap .activebias {
  border-bottom-color: #c60314;
  color: #1d1d1d !important;
  background: #fff !important;
}
.post-text-content {
  padding: 20px 10px;
  background: linear-gradient(to bottom, #fff, rgba(255,255,255,0.01));
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
  width: calc(100% - 300px);
}

.post-content img {
  max-width: 100%;
  height: auto;
  margin: 10px 0px;
}


p {
  margin-bottom: 10px;
}

h3 a {
  text-decoration: none;
  color:#444;
}
p {
  font-size:16px;
  line-height: 140%;
}
@media only screen and (max-width:790px) {
    .post-container {
        flex-direction: column;
    }
    .post-container .post {
        flex-direction: column;
    }
    .post-content {
        width: 100%;
    }

    .bias-wrap {
        flex-direction: row;
        align-items: center;
        width: 100%;
        background: rgba(0, 0, 0, .03);
        border-bottom: 1px solid rgba(0, 0, 0, .1);
    }
    .bias-wrap .bias {
        background: none;
        border: none;
        border-bottom: 3px solid transparent;
        border-left: 1px solid rgba(0,0,0,0.1);
        max-width: 25%;
        text-align: center;
        font-size: 12px;
        line-height: 1.3;
        padding: 5px;
    }
    .bias-wrap .bias:last-child {
        border-right: 1px solid rgba(0,0,0,0.1);
    }
    .bias-wrap .bias:hover {
        border-left-color: rgba(0,0,0,0.1);
        border-bottom: 3px solid #c60314;
    }
    .bias-wrap .activebias {
        border-bottom-color: #c60314;
        color: #1d1d1d !important;
        background: #fff !important;
    }
}
</style>
