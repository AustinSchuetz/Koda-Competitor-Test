<template>
    <div>
        <div class="post" v-for="(blog, index) in blog" :key="index">
            <div v-if="blog.fi_medium" class="post-featured-background fi_medium" :style="{ 'background-image': 'url(' + blog.fi_medium + ')' }">
                <h1 v-html="blog.title.rendered"></h1>
            </div>
            <div v-html="blog.content.rendered">
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "index",
        data() {
            return {
                blog: []
            }
        },
        mounted() {
            return  axios.get('https://wod.kodacompetitor.com/wp-json/wp/v2/posts?slug=' + this.$route.params.slug)
                .then(res => (this.blog = res.data))
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