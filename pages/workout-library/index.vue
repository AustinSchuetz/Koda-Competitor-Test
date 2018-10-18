<template>
    <div class="workout-library-wrap">
        <h1 class="main-title">Workout Library</h1>
        <div v-show="initialLoading" class="loading"><i class="loader-spin fa fa-spin fa-circle-o-notch"></i> Loading...</div>
        <div v-if="initialLoading === false">
            <div class="search-holder">
                <h1>Search: {{ search }}</h1>
                <div class="search-flex">
                    <input class="fa" placeholder="Search for movement, date, keyword, etc." :value.lazy="search" v-model.lazy="search">
                    <div class="pseudo-search-btn">Search</div>
                </div>
            </div>
            <div class="tag-holder">
                <h1 class="tag-title">By Movement</h1>
                    <div v-for="tag in tags" class="individual-tag" v-if="tag.count > 0">
                        <input type="checkbox" v-model="checkedTags" :id="tag.name" :value="tag.id">
                        <label class="tag-label-inline-p" :for="tag.name">
                            <p v-html="tag.name"></p>
                        </label>
                    </div>
            </div>
            <div v-show="loading" class="loading"><i class="loader-spin fa fa-spin fa-circle-o-notch"></i> Loading...</div>
            <div v-if="loading === false">
                <div>
                    <div class="results-pages-holder">
                        <h1>Results: {{ this.total }}</h1>
                        <h5 v-if="this.totalPages > 0">Page 1 of {{ this.totalPages }}</h5>
                    </div>
                    <div v-if="this.total == 0">
                        <h1 class="no-workouts">No workouts match your filter</h1>
                    </div>
                    <div v-else-if="this.currentPage > this.totalPages">
                        <h1 class="no-workouts">No workouts match your filter</h1>
                    </div>
                    <div v-for="(post, index) in workouts" class="individual-workout" :mounted="loadPostBias(post.acf)" :key="index" v-if="index >= firstPost && index <= lastPost">
                        <nuxt-link :to="'/workout-of-the-day/' + post.slug" class="post">
                            <div class="post-featured-background" :style="{ 'background-image': 'url(' + post.fi_medium + ')' }">
                                <h1>{{ post.title.rendered }}</h1>
                            </div>
                        </nuxt-link>
                            <div class="bias-wrap">
                                <a v-if="post.acf.all_athletes" @click="setActive('all_athletes')" :class="{ activebias: $store.state.activeBias === 'all_athletes' }" href="javascript:void(0)" class="bias">All Athletes</a>
                                <a v-if="post.acf.aerobic_bias" @click="setActive('aerobic_bias')" :class="{ activebias: $store.state.activeBias === 'aerobic_bias' }" href="javascript:void(0)" class="bias">Aerobic Bias</a>
                                <a v-if="post.acf.gymnastics_bias" @click="setActive('gymnastics_bias')" :class="{ activebias: $store.state.activeBias === 'gymnastics_bias' }" href="javascript:void(0)" class="bias">Gymnastics Bias</a>
                                <a v-if="post.acf.strength_bias" @click="setActive('strength_bias')" :class="{ activebias: $store.state.activeBias === 'strength_bias' }" href="javascript:void(0)" class="bias">Strength Bias</a>
                                <a v-if="post.acf.balanced_athlete" @click="setActive('balanced_athlete')" :class="{ activebias: $store.state.activeBias === 'balanced_athlete' }" href="javascript:void(0)" class="bias">Balanced Athlete</a>
                            </div>
                        <nuxt-link :to="'/workout-of-the-day/' + post.slug">
                            <div class="post-text-content">
                                <transition name="slide-fade">
                                    <div v-if="$store.state.activeBias === 'all_athletes'" id="all-athletes-content" v-html="post.acf.all_athletes"></div>
                                </transition>
                                <transition name="slide-fade">
                                    <div v-if="$store.state.activeBias === 'aerobic_bias'" id="aerobic-bias-content" v-html="post.acf.aerobic_bias"></div>
                                </transition>
                                <transition name="slide-fade">
                                    <div v-if="$store.state.activeBias === 'gymnastics_bias'" id="gymnastics-bias-content" v-html="post.acf.gymnastics_bias"></div>
                                </transition>
                                <transition name="slide-fade">
                                    <div v-if="$store.state.activeBias === 'strength_bias'" id="strength-bias-content" v-html="post.acf.strength_bias"></div>
                                </transition>
                                <transition name="slide-fade">
                                    <div v-if="$store.state.activeBias === 'balanced_athlete'" id="balanced-athlete-content" v-html="post.acf.balanced_athlete"></div>
                                </transition>
                            </div>
                            <strong class="more">View Workout</strong>
                        </nuxt-link>
                    </div>
                    <div class="pagination-holder" :class="{ flexStart: currentPage == totalPages, flexEnd: currentPage === 1}">
                        <button class="pagination-btn" @click="pageDownClick" v-if="currentPage > 1">Previous Page</button>
                        <button class="pagination-btn" @click="pageUpClick" v-if="currentPage < totalPages" >Next Page</button>
                    </div>
                </div>

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
                workouts: null,
                search: '',
                initialLoading: true,
                loading: true,
                tags: [],
                total: null,
                totalPages: null,
                checkedTags: [],
                currentPage: 1,
                toURL: null,
                questionMark: ''
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
        mounted() {
            let params = new URLSearchParams(document.location.search.substring(1));
            if(params.get("search")) {
                this.search = params.get("search");
            }
            if(params.get("tags")) {
                this.checkedTags = params.get("tags").split(',');
            }
            if(params.get("page")) {
                this.currentPage = params.get("page");
            }
            this.getWorkouts();
            return axios.get('https://wod.kodacompetitor.com/wp-json/wp/v2/tags').then(
                    response => this.tags = response.data
                ).catch(error => console.log(error)).then(() => this.initialLoading = false).then(() => this.loading = false);
        },
        methods: {
            getWorkouts() {
                axios.get('https://wod.kodacompetitor.com/wp-json/wp/v2/posts?categories=2' + this.buildTagsString() + this.buildSearchString() + this.buildPagination())
                    .then(res => {
                        this.total = res.headers["x-wp-total"];
                        this.totalPages = res.headers["x-wp-totalpages"];
                        this.workouts = res.data;
                    });
                    this.buildURL();
                    this.loading = false;
            },
            routeChanged(routeto) {
                if(routeto.query.search) {
                    this.search = routeto.query.search;
                }
                if (!routeto.query.search) {
                    this.search = "";
                }
                if(routeto.query.tags) {
                    this.checkedTags = routeto.query.tags.split(',');
                }
                if (!routeto.query.tags) {
                    this.checkedTags = [];
                }
                if(!routeto.query.page) {
                    this.currentPage = 1;
                }
                if (!routeto.query.search && !routeto.query.tags && !routeto.query.page) {
                    Object.assign(this.$data,this.$options.data.call(this));
                    this.tagRemount();
                    this.loading = false;
                }
            },
            tagRemount() {
                return axios.get('https://wod.kodacompetitor.com/wp-json/wp/v2/tags').then(
                    response => this.tags = response.data
                ).catch(error => console.log(error)).then(() => this.initialLoading = false).then(() => this.loading = false);
            },
            buildURL() {
                this.buildSearchString();
                this.buildTagsString();
                this.toURL = this.questionMark + this.buildTagsString() + this.buildSearchString() + this.buildPagination();
                this.$router.push(this.toURL);
            },
            // define search function that appends to the wp api url
            buildSearchString() {
                if (this.search !== '') {
                    this.questionMark = '?';
                    return '&search=' + this.search;
                } else {
                    return '';
                }
            },
            // define tags function that appends to the wp api url
            buildTagsString() {
                if (this.checkedTags.length !== 0) {
                    this.questionMark = '?';
                    return '&tags=' + this.checkedTags.join(",");
                } else {
                    return '';
                }
            },
            buildPagination() {
                if (this.currentPage > 1) {
                    this.questionMark = '?';
                    return '&page=' + this.currentPage;
                } else {
                    return '';
                }
            },
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
            },
            pageUpClick() {
                return this.currentPage = this.currentPage + 1;
                if (this.currentPage > 1) {
                    this.buildPagination();
                }
                // add &page=currentPage to url if it is not the 1st page
            },
            pageDownClick() {
                return this.currentPage = this.currentPage - 1;
            }
        },
        watch: {
            checkedTags() {
                this.loading = true;
                this.buildTagsString();
                this.getWorkouts();
            },
            search() {
                this.loading = true;
                this.buildSearchString();
                this.getWorkouts();
            },
            currentPage() {
                this.loading = true;
                this.buildPagination();
                this.getWorkouts();
            },
            $route(routeto) {
                this.loading = true;
                this.routeChanged(routeto);
                this.loading = false;
            }
        },
        head() {
            return {
                title: 'Koda Competitor | Workout Library',
                meta: [
                    {
                        name: 'description',
                        content: 'View all archived workouts, sort and filter by CrossFit movements or workout type.'
                    }
                ]
            }
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


a:visited {
    text-decoration: none;
    color: inherit;
}
.post-text-content h4, a h4 {
}
.individual-workout .post-text-content p, a:visited p {
    color: #1d1d1d;
}
.workout-library-wrap {
    max-width: 95%;
}
.main-title {
    text-align: center;
    width: 100%;
}
.loading {
    color: #979797;
    font-size: 32px;
    padding: 100px 0;
    width: 100%;
}
.tag-title {
    margin: 15px 0 5px 15px;
}
.search-holder {
    margin: 15px 5px 5px;
    max-width: 95%;
}
.search-holder .search-flex {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 10px 0;
}
.results-pages-holder {
    margin: 0 15px;
}
.search-holder h1 {
    margin: 0 10px 5px;
}
.search-holder input {
    background: rgb(240,240,240);
    border-radius: 5px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    width: 330px;
    display: inline-block;
    position: relative;
    padding: 15px;
    font-weight: 500;
    font-family: FontAwesome, 'Roboto', sans-serif;
    outline: none;
    border: 0px solid rgba(0,0,0,0.1);
}
.no-workouts {
    margin: 15px 0;
    color: #979797;
    text-align: center;
}
.pseudo-search-btn {
    display: inline-block;
    padding: 10px 15px;
    vertical-align: top;
    color: #fff;
    background: #c60314;
    cursor: pointer;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}
.tag-holder {
    width: 100%;
    margin: 0 0 20px;
    padding-bottom: 20px;
    border-bottom: 3px solid rgba(0,0,0,0.1);
}
.individual-tag {
    display: inline-block;
    margin: 4px;
    font-size: 0.85em;
    font-weight: bold;
}
input[type="checkbox"] {
    display: none;
}
input[type="checkbox"] + label {
    display:inline-block; /* or block */
    line-height:normal;
    cursor:pointer;
    padding: 3px 5px;
    text-align: center;
    border: 2px solid #c60314;
    border-radius: 5px;
    color: #c60314;
    background: #fff;
}
input[type="checkbox"] + label:hover {
    background: #c60314;
    color: #fff;
}
input[type="checkbox"]:checked + label {
    background: #c60314;
    color: #fff;
}


/*** workout ***/

.individual-workout {
    display: inline-block;
    width: 300px;
    max-width: 95%;
    margin: 10px;
    box-shadow: 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07);
    border-radius: 5px;
    border-top: 3px solid #c60314;
    background: #fff;
    text-decoration: none;
}
.individual-workout a {
    text-decoration: none;
}
.individual-workout .post {
    display: block;
    text-decoration: none;
    transition: 0.25s all ease-in-out;
}
.individual-workout .post .post-featured-background {
    padding: 50px;
    background-size: cover;
    position: relative;
    border-radius: 3px;
}
.individual-workout .post .post-featured-background h1 {
    position: relative;
    z-index: 2;
    text-align: center;
}
.individual-workout a .post-featured-background::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 3px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    background: rgba(0,0,0,0.55);
}
.individual-workout a:hover .post-featured-background::after {
    background: linear-gradient(135deg, rgba(198, 3, 20, .55) 55%,rgba(0,0,0,0.55));
    background-blend-mode: multiply;
}
.individual-workout a .post-featured-background h1 {
    color: #fff;
}
.bias-wrap {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.individual-workout .post-text-content {
    padding: 10px 20px;
    height: 200px;
    overflow-y: hidden;
    position: relative;
    text-decoration: none;
    color: #1d1d1d;
}
.individual-workout .post-text-content div h4 {
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #c60314;
    font-weight: 800;
    padding: 10px;
    margin-bottom: 10px;
    border-bottom: 2px solid #c60314;
}
.individual-workout .post-text-content::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 20%;
    background: linear-gradient(to bottom, rgba(255,255,255,0.01), #fff);
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
.bias-wrap {
    flex-direction: row;
    align-items: stretch;
    width: 100%;
    background: rgba(0, 0, 0, .03);
    border-bottom: 1px solid rgba(0, 0, 0, .1);
}
.bias-wrap .bias {
    background: none;
    border: none;
    justify-content: center;
    display: flex;
    flex-direction: column;
    border-bottom: 3px solid transparent;
    border-left: 1px solid rgba(0,0,0,0.1);
    max-width: 25%;
    text-align: center;
    font-size: 12px;
    line-height: 1.3;
    text-decoration: none;
    transition: 0.15s all ease-in-out;
    padding: 3px;
    font-weight: bold;
    color: #646464;
    background: rgba(0,0,0,0.03);
}
.bias-wrap .bias:first-child {
    border-left: 0;
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
.slide-fade-enter-active {
    transition: all .25s ease;
}
.slide-fade-leave-active {
    transition: all .25s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
}
</style>