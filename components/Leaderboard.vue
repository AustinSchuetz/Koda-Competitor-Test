<template>
    <div class="leaderboard">
        <h2>Leaderboard</h2>
        <h2>{{ this.leaderboard.date | moment("MMM Do YYYY") }}</h2>
        <div v-for="postID in leaderboardPost" ref="workoutIDdiv" id="workoutIDdiv" :load="loadLeaderboard(postID.acf.workout_id)"></div>
        <div class="divider"></div>
        <h3 class="workout-title">{{ this.leaderboard.workoutTitle }}</h3>
            <div v-if="leaderboard.tests.length === 1" class="test" v-for="item in leaderboard.tests">
                <h4>{{ item.title }}</h4>
                <p v-if="item.testInstructions">{{ item.testInstructions }}</p>

                <div class="scrollable-leaderboard">
                    <div class="leader" v-for="result in leaderboard.results">
                        <div class="score-wrap">
                            <p>{{ result.rank }}</p>
                            <img :src="result.profileImg">
                            <div class="score">
                                <p>{{ result.userFirstName }} {{ result.userLastName }}</p>
                                <h5>({{ result.userTests[0].value }})</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- display test titles in multiple columns then post the athlete's scores in that order. Order athletes by ascending avgRank-->
            <div v-if="leaderboard.tests.length > 1" class="test" v-for="item in leaderboard.tests">
                <h4>{{ item.title }}</h4>
                <p v-if="item.testInstructions">{{ item.testInstructions }}</p>
                <div class="scrollable-leaderboard">
                    <div class="leader" v-for="result in leaderboard.results">
                        <p>round this up? {{ result.avgRank }} - <img :src="result.profileImg"> {{ result.userFirstName }} {{ result.userLastName }} ({{ result.tests }})</p>
                    </div>
                </div>
            </div>

        <!--in script https://wod.kodacompetitor.com/wp-json/wp/v2/posts?categories=5 and acf.workout_id-->



    </div>
</template>

<script>

    import axios from 'axios'
    export default {
        name: "Leaderboard",
        props: ['leaderboardPost'],
        data() {
            return {
                leaderboard: []
            }
        },
        // mounted() {
        //     return  axios.get('https://apis.trainheroic.com/public/leaderboard/4863904')
        //         .then(res => (this.leaderboard = res.data));
        // },
        methods: {
            loadLeaderboard(workoutID) {
                return  axios.get('https://apis.trainheroic.com/public/leaderboard/' + workoutID)
                    .then(res => (this.leaderboard = res.data));
            }
        }
    }
</script>

<style scoped>
    .leaderboard {
        width: 100%;
    }
    .scrollable-leaderboard {
        overflow-y: auto;
        max-height: calc(100vh - 288px);
        padding: 0 10px;
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
        padding: 8px 0;
        align-items: center;
    }
    .leader .score-wrap {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        color: #717171;
    }

    .leader .score-wrap h5 {
        color: #1d1d1d;
    }
    .leader img {
        height: 35px;
        width: 35px;
        display: inline-block;
        border-radius: 100%;
        margin: 0 8px;
    }
    h2 {
        text-align: center;
        margin: 0 auto;
        padding: 0;
        line-height: 1.2;
    }
    .test {
        margin: 0 0 15px;
    }
    .test h4 {
        text-align: center;
    }
    .workout-title {
        text-align: center;
    }
    .divider {
        background: #000;
        height: 3px;
        width: 75px;
        margin: 10px auto;
    }
</style>