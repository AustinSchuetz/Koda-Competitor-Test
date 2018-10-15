<template>
    <div class="leaderboard">
        <h2>Leaderboard</h2>
        <h2>{{ this.leaderboard.date | moment("MMM Do YYYY") }}</h2>
        <div v-for="postID in leaderboardPostID" ref="workoutIDdiv" id="workoutIDdiv" :load="loadLeaderboard(postID.acf.workout_id)"></div>
        <div class="divider"></div>
        <h3 class="workout-title">{{ this.leaderboard.workoutTitle }}</h3>
        <div v-if="leaderboard.tests.length === 1" class="test" v-for="item in leaderboard.tests">
            <h4>{{ item.title }}</h4>
            <p v-if="item.testInstructions">{{ item.testInstructions }}</p>
            <div class="divider lower-divider"></div>

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

        <div class="scrollable-leaderboard">
            <div v-if="leaderboard.tests.length > 1" class="test" v-for="(item, index) in leaderboard.tests">
                <h4>{{ item.title }}</h4>
                <p v-if="item.testInstructions">{{ item.testInstructions }}</p>
                <div class="leader" v-for="result in leaderboard.results">
                    <div class="score-wrap" v-if="result.userTests[index].value">
                        <p>{{ result.ranks[index] }}</p>
                        <img :src="result.profileImg">
                        <div class="score">
                            <p>{{ result.userFirstName }} {{ result.userLastName }}</p>
                            <h5>({{ result.userTests[index].value }}<span v-if="item.unit == 'lbs'"> lbs</span>)</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import axios from 'axios'
    export default {
        name: "Leaderboard",
        data() {
            return {
                leaderboard: []
            }
        },
        computed: {
            leaderboardPostID() {
                return this.$store.state.leaderboardPost
            }
        },
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
        padding: 8px 0;
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
        margin: 0 0 0 15px;
        padding: 0;
        line-height: 1.15;
    }
    h3 {
        margin: 0 0 0 15px;
    }
    .test {
        margin: 0 0 5px 15px;
    }
    .test h4 {
        margin: 0;
    }
    .divider {
        background: #000;
        height: 2px;
        width: 75px;
        margin: 5px 0 5px 15px;
    }
    .lower-divider {
        margin-left: 0;
        margin-top: 8px;
    }
</style>