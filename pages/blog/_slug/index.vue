<template>
    <div>
        <div class="post" v-for="(blog, index) in blog" :key="index">
            <div v-if="blog.fi_medium" class="post-featured-background fi_medium" :style="{ 'background-image': 'url(' + blog.fi_medium + ')' }">
                <h1 v-html="blog.title.rendered"></h1>
            </div>
            <div class="blog-content" v-html="blog.content.rendered">
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
        asyncData ({ params }) {
            return axios.get(`https://wod.kodacompetitor.com/wp-json/wp/v2/posts?slug=${params.slug}`)
                .then((res) => {
                    return {
                        blog: res.data
                    }
                }).catch((err) => {
                    console.log(err)
                })
        },
        head() {
            var blogExcerptPlain = this.blog[0].excerpt.rendered;
            var blogExcerpt = blogExcerptPlain.replace(/(<([^>]+)>)/ig,"");
            return {
                title: 'Koda Competitor | ' + this.blog[0].title.rendered,
                meta: [
                    {
                        name: 'description',
                        content: blogExcerpt
                    },
                    {
                        name: 'title',
                        content: 'Koda Competitor | ' + this.blog[0].title.rendered
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .post {
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
    .blog-content {
        padding: 30px 10px;
        max-width: 95%;
        margin: 0 auto;
    }
    .blog-content p {
        margin: 10px 0;
    }
    .post-featured-background {
        padding: 150px 0;
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
</style>