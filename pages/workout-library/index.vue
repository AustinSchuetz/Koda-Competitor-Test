<template>
    <div class="workout-library-wrap">
        <h1 class="main-title">Workout Library</h1>
        <div v-show="initialLoading" class="loading"><i class="loader-spin fa fa-spin fa-circle-o-notch"></i> Loading...</div>
        <div v-if="initialLoading === false">
            <div class="search-holder">
                <h1>Search: {{ search }}</h1>
                <div class="search-flex">
                    <input class="fa" placeholder="Search for movement, date, keyword, etc." v-model.lazy="search">
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
                    <div v-for="post in workouts" class="individual-workout">
                        <nuxt-link :to="'/workout-of-the-day/' + post.slug">
                            <div class="post-featured-background" :style="{ 'background-image': 'url(' + post.fi_medium + ')' }">
                                <h1>{{ post.title.rendered }}</h1>
                            </div>
                            <!--<div class="bias-wrap">-->
                                <!--<a v-if="post.acf.all_athletes" @click="setActive('all_athletes')" :class="{ activebias: $store.state.activeBias === 'all_athletes' }" href="javascript:void(0)" class="bias">All Athletes</a>-->
                                <!--<a v-if="post.acf.aerobic_bias" @click="setActive('aerobic_bias')" :class="{ activebias: $store.state.activeBias === 'aerobic_bias' }" href="javascript:void(0)" class="bias">Aerobic Bias</a>-->
                                <!--<a v-if="post.gymnastics_bias" @click="setActive('gymnastics_bias')" :class="{ activebias: $store.state.activeBias === 'gymnastics_bias' }" href="javascript:void(0)" class="bias">Gymnastics Bias</a>-->
                                <!--<a v-if="post.strength_bias" @click="setActive('strength_bias')" :class="{ activebias: $store.state.activeBias === 'strength_bias' }" href="javascript:void(0)" class="bias">Strength Bias</a>-->
                                <!--<a v-if="post.balanced_athlete" @click="setActive('balanced_athlete')" :class="{ activebias: $store.state.activeBias === 'balanced_athlete' }" href="javascript:void(0)" class="bias">Balanced Athlete</a>-->
                            <!--</div>-->
                            <!--<div class="post-text-content">-->
                                <!--<transition name="slide-fade">-->
                                    <!--<div v-if="$store.state.activeBias === 'all_athletes'" id="all-athletes-content" v-html="post.all_athletes"></div>-->
                                <!--</transition>-->
                                <!--<transition name="slide-fade">-->
                                    <!--<div v-if="$store.state.activeBias === 'aerobic_bias'" id="aerobic-bias-content" v-html="post.aerobic_bias"></div>-->
                                <!--</transition>-->
                                <!--<transition name="slide-fade">-->
                                    <!--<div v-if="$store.state.activeBias === 'gymnastics_bias'" id="gymnastics-bias-content" v-html="post.gymnastics_bias"></div>-->
                                <!--</transition>-->
                                <!--<transition name="slide-fade">-->
                                    <!--<div v-if="$store.state.activeBias === 'strength_bias'" id="strength-bias-content" v-html="post.strength_bias"></div>-->
                                <!--</transition>-->
                                <!--<transition name="slide-fade">-->
                                    <!--<div v-if="$store.state.activeBias === 'balanced_athlete'" id="balanced-athlete-content" v-html="post.balanced_athlete"></div>-->
                                <!--</transition>-->
                            <!--</div>-->
                            <!--<strong class="more">View WOD</strong>-->
                        </nuxt-link>
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
        mounted() {
            // method here that checks params in url bar
            let params = new URLSearchParams(document.location.search.substring(1));
            if(params.get("search")) {
                this.search = params.get("search");
            }
            console.log(params.get("tags"));
            return axios.get('https://wod.kodacompetitor.com/wp-json/wp/v2/tags').then(
                    response => this.tags = response.data
                ).catch(error => console.log(error)).then(() => this.initialLoading = false).then(() => this.loading = false);
            this.getWorkouts();
        },
        methods: {
            // getWorkouts() {
            //     axios.get('https://wod.kodacompetitor.com/wp-json/wp/v2/posts?categories=2' + this.buildTagsString() + this.buildSearchString())
            //         .then(res => (this.workouts = res.data));
            //         this.loading = false;
            // },
            getWorkouts() {
                axios.get('https://wod.kodacompetitor.com/wp-json/wp/v2/posts?categories=2' + this.buildTagsString() + this.buildSearchString())
                    .then(res => {
                        this.total = res.headers["x-wp-total"];
                        this.totalPages = res.headers["x-wp-totalpages"];
                        this.workouts = res.data;
                    });
                    this.buildURL();
                    this.loading = false;
            },
            buildURL() {
                this.toURL = this.questionMark + this.buildTagsString() + this.buildSearchString();
                this.$router.push(this.toURL)
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
    margin: 10px;
}
.individual-workout a {
    display: block;
    text-align: center;
    background: #f2f2f2;
    border-radius: 5px;
    text-decoration: none;
    border-top: 3px solid #c60314;
    transition: 0.25s all ease-in-out;
    box-shadow: 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07);
}
.individual-workout a .post-featured-background {
    padding: 50px;
    background-size: cover;
    position: relative;
    border-radius: 3px;
}
.individual-workout a .post-featured-background h1 {
    position: relative;
    z-index: 2;
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

.individual-workout a .post-text-content {
    padding: 10px 20px;
    max-height: 200px;
    overflow-y: hidden;
    position: relative;
}
.individual-workout a .post-text-content::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 20%;
    background: linear-gradient(to bottom, rgba(255,255,255,0.01), #fff);
}
</style>