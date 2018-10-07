<template>
    <div>
        <h2>Leaderboard</h2>
        <h2>{{ this.leaderboard.date | moment("MMM Do YYYY") }}</h2>
        <h3 class="workout-title">{{ this.leaderboard.workoutTitle }}</h3>
        <div class="test" v-for="(item, index) in leaderboard.tests">
            <h4>{{ item.title }}</h4>
            <p v-if="item.testInstructions">{{ item.testInstructions }}</p>
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
    h2 {
        text-align: center;
        margin: 0 auto;
        padding: 0;
        line-height: 1.2;
    }
    h3.workout-title {
        margin: 15px 0;
    }
    .test {
        margin: 15px 0;
    }
</style>