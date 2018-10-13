<template>
    <div>
        <div class="post-holder">
            <nuxt-link  :to="item.slug + '/'" class="post" v-for="(item, index) in blogs" :key="index" v-if="blogs && blogs.length > 0 && index <= 10">
                <div v-if="item.fi_medium" class="post-featured-background fi_medium" :style="{ 'background-image': 'url(' + item.fi_medium + ')' }">
                    <h1 v-html="item.title.rendered"></h1>
                </div>
                <div class="excerpt" v-html="item.excerpt.rendered">
                </div>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "index",
        data() {
            return {
                blogs: null
            }
        },
        mounted() {
            return  axios.get('https://wod.kodacompetitor.com/wp-json/wp/v2/posts?categories=6')
                .then(res => (this.blogs = res.data))
        }
    }
</script>

<style scoped>
.post-featured-background {
    padding: 125px 0;
    width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-top: 3px solid #c60314;
    position: relative;
    z-index: 1;
    background-position: 50% 20%;
    background-repeat: no-repeat;
    background-size: cover;
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
.post-featured-background h1 {
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
    a {
        margin: 0 auto 50px;
        color: #1d1d1d;
        width: 750px;
        max-width: 100%;
        border-radius: 5px;
        box-shadow: 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07);
        background: #fff;
        text-decoration: none;
        display: block;
    }
    a:hover {
        text-decoration: none;
        background: #fff;
    }
    a:hover .post-featured-background::after {
        background: rgba(198,3,20,0.35);
    }
    .excerpt {
        padding: 15px;
    }
</style>