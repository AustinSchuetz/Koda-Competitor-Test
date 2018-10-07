<template>
    <div class="leaderboard">
        <h2>Leaderboard</h2>
        <h2>{{ this.leaderboard.date | moment("MMM Do YYYY") }}</h2>
        <div class="divider"></div>
        <h3 class="workout-title">{{ this.leaderboard.workoutTitle }}</h3>
        <div v-if="leaderboard.tests.length === 1" class="test" v-for="item in leaderboard.tests">
            <h4>{{ item.title }}</h4>
            <p v-if="item.testInstructions">{{ item.testInstructions }}</p>
            <p>test length = 1</p>
            <div class="leaders" v-for="result in leaderboard.results">
                <p>{{ result.rank }} - <img :src="result.profileImg"> {{ result.userFirstName }} {{ result.userLastName }} ({{ result.tests }})</p>
            </div>
        </div>
        <!-- display test titles in multiple columns then post the athlete's scores in that order. Order athletes by ascending avgRank-->
        <div v-if="leaderboard.tests.length > 1" class="test" v-for="item in leaderboard.tests">
            <h4>{{ item.title }}</h4>
            <p v-if="item.testInstructions">{{ item.testInstructions }}</p>
            <p>test length > 1</p>
            <div class="leaders" v-for="result in leaderboard.results">
                <p>{{ result.rank }} - <img :src="result.profileImg"> {{ result.userFirstName }} {{ result.userLastName }} ({{ result.tests }})</p>
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
        mounted() {
            return  axios.get('https://apis.trainheroic.com/public/leaderboard/4863904')
                .then(res => (this.leaderboard = res.data))}
    }
</script>

<style scoped>
    /*.leaderboard {*/
        /*overflow-y: scroll;*/
    /*}*/
    .leaders img {
        height: 40px;
        width: 40px;
        display: inline-block;
        border-radius: 100%;
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