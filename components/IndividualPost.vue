<template>
    <div class="post">
        <!--<div v-if="item.fi_medium" class="post-featured-background fi_medium" :style="{ 'background-image': 'url(' + item.fi_medium + ')' }">-->
        <!--</div>-->
        <div class="bias-wrap">
            <!--- maybe make a new component for each item so then I can set the activeItem easily --->
            {{ index }}
            <a v-if="item.aerobic_bias" @click="setActive('aerobic')" :class="item.activeItem" href="javascript:void(0)" class="bias activebias">Aerobic Bias</a>
            <a v-if="item.gymnastics_bias" @click="setActive('gymnastics')" :class="item.activeItem" href="javascript:void(0)" class="bias">Gymnastics Bias</a>
            <a v-if="item.strength_bias" @click="setActive('strength')" :class="item.activeItem" href="javascript:void(0)" class="bias">Strength Bias</a>
            <a v-if="item.balanced_athlete" @click="setActive('balanced')" :class="item.activeItem" href="javascript:void(0)" class="bias">Balanced Athlete</a>
        </div>
        <nuxt-link :to="slugToUrl(item.slug)" class="post-content">
            <div class="post-content-date">
                <h2>{{ item.title }}</h2>
            </div>
            <div class="post-text-content">
                <div v-if="item.activeItem === 'aerobic'" id="aerobic-bias-content" v-html="item.aerobic_bias"></div>
                <div v-if="item.activeItem === 'gymnastics'" id="gymnastics-bias-content" v-html="item.gymnastics_bias"></div>
                <div v-if="item.activeItem === 'strength'" id="strength-bias-content" v-html="item.strength_bias"></div>
                <div v-if="item.activeItem === 'balanced'" id="balanced-athlete-content" v-html="item.balanced_athlete"></div>
                <strong class="more">View WOD</strong>
            </div>
        </nuxt-link>
    </div>
</template>

<script>
export default {
  name: "individual-post",
  data: data.map(item => ({
    id: item.id,
    title: item.title.rendered,
    content: item.content.rendered,
    excerpt: item.excerpt.rendered,
    aerobic_bias: item.acf.aerobic_bias,
    gymnastics_bias: item.acf.gymnastics_bias,
    strength_bias: item.acf.strength_bias,
    balanced_athlete: item.acf.balanced_athlete,
    slug: item.slug,
    fi_medium: item.fi_medium,
    activeItem: 'aerobic'
  }))
}
</script>

<style scoped>
    a {
        text-decoration: none;
        color: #1d1d1d;
        opacity: 1;
        transition: 0.15s all ease-in-out;
        position: relative;
        z-index: 1;
    }
    .post-content:hover  {
        background: rgba(198, 3, 20, 0.05);
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
        margin: 15px 0;
        padding: 5px 10px 7px;
        display: inline-block;
    }
    .more:hover {
        color: #c60314;
    }
</style>
