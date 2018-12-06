<template>
    <div class="post-holder">
        <nuxt-link  :to="item.slug + '/'" class="post" v-for="(item, index) in blogs" :key="index" v-if="blogs && blogs.length > 0 && index >= firstPost && index <= lastPost">
            <div v-if="item.fi_medium" class="post-featured-background fi_medium" :style="{ 'background-image': 'url(' + item.fi_medium + ')' }">
                <h1 v-html="item.title.rendered"></h1>
                <div class="divider"></div>
                <div v-if="item.acf.author" class="author">
                    <img class="author-pic" :src="item.acf.author[0].author_pic">
                    <div>
                        <h3 class="author-name">by {{ item.acf.author[0].author_name }}</h3>
                    </div>
                </div>
            </div>
            <div class="excerpt">
                <div class="lower-divider"></div>
                <div v-html="item.excerpt.rendered"> </div>
            </div>
        </nuxt-link>
        <div class="pagination-holder" :class="{ flexStart: currentPage == totalPages, flexEnd: currentPage === 1}">
            <button class="pagination-btn" @click="pageDownClick" v-if="currentPage > 1">Previous Page</button>
            <button class="pagination-btn" @click="pageUpClick" v-if="currentPage < totalPages" >Next Page</button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "index",
        data() {
            return {
                blogs: null,
                currentPage: 1
            }
        },
        computed: {
            nextPage() {
                return this.nextPage = this.currentPage + 1;
            },
            previousPage() {
                return this.previousPage = this.currentPage - 1;
            },
            firstPost() {
                return this.firstPost = (this.currentPage - 1) * 9;
            },
            lastPost() {
                return this.lastPost = (this.currentPage * 9) - 1;
            }
        },
        methods: {
            pageUpClick() {
                return this.currentPage = this.currentPage + 1;
            },
            pageDownClick() {
                return this.currentPage = this.currentPage - 1;
            }
        },
        mounted() {
            return  axios.get('https://wod.kodacompetitor.com/wp-json/wp/v2/posts?categories=6')
                .then(res => (this.blogs = res.data))
        }
    }
</script>

<style scoped>
    .pagination-holder {
        margin: 50px auto 0;
        width: 750px;
        max-width: 90%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .pagination-holder .pagination-btn {
        background: #fff;
        outline: none;
        border: 3px solid #c60314;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
        color: #c60314;
        font-weight: bold;
        width: 135px;
        transition: 0.25s all ease-in-out;
        text-decoration: none;
        text-align: center;
    }
    .pagination-holder .pagination-btn:hover {
        color: #fff;
        background: #c60314;
    }
    .pagination-holder.flexStart {
        justify-content: flex-start;
    }
    .pagination-holder.flexEnd {
        justify-content: flex-end;
    }
    .post-holder {
        width: 100%;
    }
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
    line-height: 1.4;
    padding-bottom: 20px;
    color: #fff;
    text-align: center;
    width: 550px;
    max-width: 100%;
    margin: 0 auto;
    position: relative;
    z-index: 2;
}
    a {
        margin: 0 auto 50px;
        color: #1d1d1d;
        width: 750px;
        max-width: 95%;
        border-radius: 5px;
        box-shadow: 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07);
        background: #fff;
        text-decoration: none;
        display: block;
        border-bottom: 3px solid transparent;
        transition: all 0.25s ease-in-out;
    }
    a:hover {
        text-decoration: none;
        background: #fff;
        border-bottom: 3px solid #c60314;
    }
    a:hover .post-featured-background::after {
        background: linear-gradient(45deg, rgba(198, 3, 20, .55) 55%,rgba(0,0,0,0.55));
        background-blend-mode: multiply;
    }
    .excerpt {
        padding: 15px;
    }
    .divider {
        margin: 15px 0;
        height: 3px;
        width: 75px;
        background: #c60314;
    }

    .author {
        display: block;
        text-align: center;
        position: relative;
        margin: 0 auto;
        z-index: 2;
    }
    .author-pic {
        width: 50px;
        height: 50px;
        border-radius: 100%;
        border: 3px solid #c60314;
    }
    .author-name {
        color: #f2f2f2;
    }
    .divider {
        margin: 0 auto 15px;
        height: 3px;
        width: 75px;
        background: #fff;
        position: relative;
        z-index: 2;
    }
    .lower-divider {
        margin: 15px 0;
        height: 3px;
        width: 75px;
        background: #c60314;
    }
</style>