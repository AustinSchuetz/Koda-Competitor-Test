<template>
  <div class="post-holder">
    <div class="post" v-for="(item, index) in posts" :key="index" v-if="posts && posts.length > 0 && index == 0">
        <h2 class="mobile-title">{{ item.title }}</h2>
        <div v-if="item.fi_medium" class="post-featured-background fi_medium" :style="{ 'background-image': 'url(' + item.fi_medium + ')' }">
        </div>
        <div class="bias-wrap">
            <a v-if="item.aerobic_bias" href="javascript:void(0)" class="bias">Aerobic Bias</a>
            <a v-if="item.gymnastics_bias" href="javascript:void(0)" class="bias">Gymnastics Bias</a>
            <a v-if="item.strength_bias" href="javascript:void(0)" class="bias">Strength Bias</a>
            <a v-if="item.balanced_athlete" href="javascript:void(0)" class="bias">Balanced Athlete</a>
        </div>
        <nuxt-link :to="'workout-of-the-day' + slugToUrl(item.slug)" class="post-content">
            <div class="post-content-date">
                <h2>{{ item.title }}</h2>
            </div>
            <div class="post-text-content">
                <div v-if="activeItem === 'aerobic'" id="aerobic-bias-content" v-html="item.aerobic_bias"></div>
                <div v-if="activeItem === 'gymnastics'" id="gymnastics-bias-content" v-html="item.gymnastics_bias"></div>
                <div v-if="activeItem === 'strength'" id="strength-bias-content" v-html="item.strength_bias"></div>
                <div v-if="activeItem === 'balanced'" id="balanced-athlete-content" v-html="item.balanced_athlete"></div>
            </div>
            <strong class="more">View WOD</strong>
        </nuxt-link>
    </div>
  </div>
</template>

<script>
    import Leaderboard from '../components/Leaderboard.vue'

export default {
  components: {Leaderboard},
  props: ['posts', 'title', 'content'],
  data: () => ({
      activeItem: 'aerobic'
  }),
  methods: {
    slugToUrl(slug) {
      return `/${slug}`
    },
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
    .mobile-title {
        display: none;
        padding: 0 10px 0 15px;
        border-bottom: 1px solid rgba(0, 0, 0, .1);
    }
    a {
        text-decoration: none;
        color: #1d1d1d;
        opacity: 1;
        transition: 0.15s all ease-in-out;
        position: relative;
        z-index: 1;
    }
    .post-container .post-content:hover  {
        background: none;
    }
    .fi_medium {
        position: relative;
        z-index: 1;
    }
    a:hover .fi_medium::after {
        content: '';
        height: 100%;
        width: 100%;
        position: absolute;
        z-index: 2;
        background: rgba(198, 3, 20, 0.35);
    }
    .post-holder {
        width: 100%;
        margin: 0;
    }
    .post {
        margin: 30px auto;
        padding: 0;
        border-radius: 5px;
        background: rgba(255,255,255, 0.5);
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        height: 300px;
        width: 1000px;
        max-width: 95%;
        border-left: 3px solid #c60314;
        background: #fff;
        box-shadow: 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07);
    }
    .post:first-child {
        border-left: 5px solid #c60314;
        width: 100%;
        height: 400px;
        margin: 0 auto;
    }

.bias-wrap {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
.bias-wrap .bias {
    padding: 10px;
    background: rgba(0,0,0,0.03);
    border-left: 3px solid transparent;
    font-weight: bold;
    color: #646464;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    transition: 0.15s all ease-in-out;
}
.bias-wrap .bias:hover {
    border-left-color: #c60314;
    color: #1d1d1d;
    background: rgba(0,0,0,0.02);
}
.bias-wrap .activebias {
    border-left-color: #c60314;
    color: #1d1d1d !important;
    background: #fff !important;
}
.post-content-date {
    padding: 0 10px 0 15px;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
}
.post-text-content {
    padding: 0  15px 15px;
    max-height: 295px;
    overflow-y: hidden;
    position: relative;
}
.post-text-content::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent 85%, #fff);
}
.post .post-content {
    padding: 0;
    flex-grow: 2;
}
.post .post-featured-background {
    width: 350px;
    max-width: 35%;
    height: 100%;
    display: inline-block;
    vertical-align: top;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    box-shadow: 15px 0px 30px -20px rgba(0,0,0,0.45);
}
.post:first-child .post-featured-background {
    width: 400px;
}
h2 {
    font-size:1.75em;
    font-weight:bolder;
    line-height: 41px;
    width: 100%;
    text-align: left;
}
p {
  font-size:16px;
  line-height: 140%;
}
.more {
    color: #1d1d1d;
    line-height: 1.5;
    border: 1px solid;
    border-radius: 5px;
    margin: 15px;
    padding: 5px 10px 7px;
    display: inline-block;
}
.more:hover {
    color: #c60314;
}
@media only screen and (max-width:1100px) {
    .post, .post:first-child {
        flex-direction: column;
        justify-content: center;
        height: inherit;
        border: none;
        border-top: 3px solid #c60314;
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
    }
    .bias-wrap .bias:last-child {
        border-right: 1px solid rgba(0,0,0,0.1);
    }
    .bias-wrap .bias:hover {
        border-left-color: rgba(0,0,0,0.1);
        border-bottom: 3px solid #c60314;
    }
    .post .post-featured-background, .post:first-child .post-featured-background {
        width: 100%;
        max-width: 100%;
        display: block;
        height: 250px;
        background-position: 50% 20%;
    }
    .mobile-title {
        display: block;
    }
    .post-content-date {
        display: none;
    }
}
@media only screen and (max-width:790px) {
    .bias-wrap .bias {
        padding: 5px;
    }
}
</style>
