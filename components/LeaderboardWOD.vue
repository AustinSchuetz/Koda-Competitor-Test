<template>
    <div class="leaderboard">
        <h2>Leaderboard for {{ this.slugWorkoutDate | moment("MMM Do YYYY")  }}</h2>
        <div class="divider"></div>
        <h3>{{ this.slugWorkoutTitle }}</h3>
        <div v-if="loadLeaderboardPost" class="scrollable-leaderboard" :load="loadLeaderboard">
            <div class="bias-wrap">
                <a v-if="leaderboard.data.menrx" @click="setActive('menrx')" :class="{ activebias: $store.state.activeLeaderboard === 'menrx' }" href="javascript:void(0)" class="bias">Men</br>RX</a>
                <a v-if="leaderboard.data.womenrx" @click="setActive('womenrx')" :class="{ activebias: $store.state.activeLeaderboard === 'womenrx' }" href="javascript:void(0)" class="bias">Women RX</a>
                <a v-if="leaderboard.data.menscaled" @click="setActive('menscaled')" :class="{ activebias: $store.state.activeLeaderboard === 'menscaled' }" href="javascript:void(0)" class="bias">Men Scaled</a>
                <a v-if="leaderboard.data.womenscaled" @click="setActive('womenscaled')" :class="{ activebias: $store.state.activeLeaderboard === 'womenscaled' }" href="javascript:void(0)" class="bias">Women Scaled</a>

            </div>
            <transition name="slide-fade">
                <div v-if="$store.state.activeLeaderboard === 'menrx'">
                    <div class="leader" v-for="(result, index) in leaderboard.data.menrx">
                        <div class="score-wrap">
                            <p>{{ (index + 1) }}</p>
                            <div v-if="result.athleteProfileURL" class="profile-pic" :style="{ 'background-image': 'url(' + result.athleteProfileURL + ')' }"></div>
                            <div v-else class="no-profile-pic-bg">
                                <img src="~/assets/KODAXLogo.svg">
                            </div>
                            <div class="score">
                                <p>{{ result.athleteName }}</p>
                                <h5>({{ result.result }})</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
            <transition name="slide-fade">
                <div v-if="$store.state.activeLeaderboard === 'womenrx'">
                    <div class="leader" v-for="(result, index) in leaderboard.data.womenrx">
                        <div class="score-wrap">
                            <p>{{ (index + 1) }}</p>
                            <div v-if="result.athleteProfileURL" class="profile-pic" :style="{ 'background-image': 'url(' + result.athleteProfileURL + ')' }"></div>
                            <div v-else class="no-profile-pic-bg">
                                <img src="~/assets/KODAXLogo.svg">
                            </div>
                            <div class="score">
                                <p>{{ result.athleteName }}</p>
                                <h5>({{ result.result }})</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
            <transition name="slide-fade">
                <div v-if="$store.state.activeLeaderboard === 'menscaled'">
                    <div class="leader" v-for="(result, index) in leaderboard.data.menscaled">
                        <div class="score-wrap">
                            <p>{{ (index + 1) }}</p>
                            <div v-if="result.athleteProfileURL" class="profile-pic" :style="{ 'background-image': 'url(' + result.athleteProfileURL + ')' }"></div>
                            <div v-else class="no-profile-pic-bg">
                                <img src="~/assets/KODAXLogo.svg">
                            </div>
                            <div class="score">
                                <p>{{ result.athleteName }}</p>
                                <h5>({{ result.result }})</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
            <transition name="slide-fade">
                <div v-if="$store.state.activeLeaderboard === 'womenscaled'">
                    <div class="leader" v-for="(result, index) in leaderboard.data.womenscaled">
                        <div class="score-wrap">
                            <p>{{ (index + 1) }}</p>
                            <div v-if="result.athleteProfileURL" class="profile-pic" :style="{ 'background-image': 'url(' + result.athleteProfileURL + ')' }"></div>
                            <div v-else class="no-profile-pic-bg">
                                <img src="~/assets/KODAXLogo.svg">
                            </div>
                            <div class="score">
                                <p>{{ result.athleteName }}</p>
                                <h5>({{ result.result }})</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>

    import axios from 'axios'
    export default {
        name: "LeaderboardWOD",
        props: ['slugWorkoutID', 'slugWorkoutTitle', 'slugWorkoutDate'],
        data() {
            return {
                leaderboard: [],
                loadLeaderboardPost: false
            }
        },
        methods: {
            setActive: function (menuItem) {
                this.$store.commit('setActiveLeaderboard', menuItem);
            },
            loadLeaderboard() {
                return  axios.get('https://app.sugarwod.com/public/api/v1/affiliates/73VzW8aW2l/workouts/' + this.slugWorkoutID + '/results?gender=both&resultType=0&grouped=true&sort=score')
                    .then(res => (this.leaderboard = res.data));
            }
        },
        watch: {
            leaderboard() {
                this.loadLeaderboardPost = true;
            }
        },
        mounted() {
            this.loadLeaderboard();
        }
    }
</script>

<style scoped>
    .leaderboard {
        width: 260px;
        max-width: 100%;
        border-top: 3px solid #c60314;
        padding: 20px;
        border-radius: 5px;
        background: #fff;
        box-shadow: 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07);
        margin: 0 auto;
    }
    .scrollable-leaderboard {
        overflow-y: auto;
        height: inherit;
        padding: 0 10px;
    }
    .logo-programming-select-holder.hideLeaderboard .scrollable-leaderboard {
        overflow: hidden;
    }
    .scrollable-leaderboard::-webkit-scrollbar {
        width: 5px;
    }
    .scrollable-leaderboard::-webkit-scrollbar-track {
        border-radius: 10px;
    }
    .scrollable-leaderboard::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: rgba(0,0,0,0.15);
    }
    .leader {
        align-items: center;
    }
    .leader .score-wrap {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        color: #717171;
        padding: 10px 0 0;
    }

    .leader .score-wrap h5 {
        color: #1d1d1d;
    }
    .leader img {
        width: 35px;
        display: inline-block;
        border-radius: 100%;
        margin: 0 8px;
    }
    .profile-pic {
        margin: 0 8px;
        width: 35px;
        height: 35px;
        background-size: contain;
        border-radius: 100%;
        background-repeat: no-repeat;
        background-position: 50% 50%;
    }
    .leader .no-profile-pic-bg {
        border-radius: 100%;
        background: #c60314;
        padding: 5px;
        width: 35px;
        height: 35px;
        text-align: center;
        margin: 0 8px;
    }
    .leader .no-profile-pic-bg img {
        border-radius: 0;
        margin: 5px auto;
        text-align: center;
        display: block;
        width: 25px;
    }
    h2 {
        margin: 0 0 0 15px;
        padding: 0;
        line-height: 1.15;
    }
    h3 {
        margin: 0 0 0 15px;
    }
    .divider {
        background: #000;
        height: 2px;
        width: 75px;
        margin: 5px 0 5px 15px;
    }
    .bias-wrap {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: stretch;
        width: 100%;
        margin: 10px auto 0;
        border: 1px solid rgba(0, 0, 0, .1);
        border-top-right-radius: 3px;
        border-top-left-radius: 3px;
    }
    .bias-wrap .bias {
        font-weight: bold;
        background: #f5f5f5;
        border: none;
        justify-content: center;
        display: flex;
        flex-direction: column;
        border-bottom: 3px solid transparent;
        width: 25%;
        text-align: center;
        font-size: 11px;
        line-height: 1.3;
        padding: 3px;
        color: #646464;
        text-decoration: none;
        box-shadow: 1px 0px 5px rgba(0,0,0,0.12);
    }
    .bias-wrap .bias:last-child {
        border-top-right-radius: 3px;
    }
    .bias-wrap .bias:first-child {
        border-top-left-radius: 3px;
    }
    .bias-wrap .bias:hover {
        border-left-color: rgba(0,0,0,0.1);
        border-bottom: 3px solid #c60314;
        color: #1d1d1d;
        background: #fff;
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
    .score p {
        line-height: 1;
    }
    @media only screen and (max-width:790px) {
        .leaderboard {
            margin: 20px auto;
            width: 100%;
            max-width: 100%;
        }
    }
</style>