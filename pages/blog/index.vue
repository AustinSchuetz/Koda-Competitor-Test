<template>
    <div>
        <div class="post-holder">
            <nuxt-link  :to="item.slug" class="post" v-for="(item, index) in blogs" :key="index" v-if="blogs && blogs.length > 0 && index <= 10">
                <div v-if="item.fi_medium" class="post-featured-background fi_medium" :style="{ 'background-image': 'url(' + item.fi_medium + ')' }">
                    <h1 v-html="item.title.rendered"></h1>
                </div>
                <div v-html="item.excerpt.rendered">
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
    padding: 150px 0;
    width: 100%;
    margin: 0 auto;
}
</style>