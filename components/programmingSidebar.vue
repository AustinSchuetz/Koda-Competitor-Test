<template>
    <div>
        <div class="logo-programming-select-holder" :class="{ scrolled: this.$store.state.scrollPosition > 0, hideLeaderboard: this.$store.state.hideLeaderboardGlobal }">
            <div class="leaderboard-button" title="Expand/Collaspe Leaderboard" @click="switchLeaderboard" :class="{ hideLeaderboardBtn: this.$store.state.hideLeaderboardGlobal }"><font-awesome-icon icon="chevron-left" /></div>
            <div class="leaderboard-wrap">
                <Leaderboard></Leaderboard>
            </div>
            <div class="social">
                <a href="https://www.instagram.com/kodacompetitor/" class="fa fa-instagram" target="_blank"></a>
                <a href="https://www.facebook.com/KodaCrossFit/" class="fa fa-facebook" target="_blank"></a>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import Leaderboard from '../components/Leaderboard.vue'
    import { library } from '@fortawesome/fontawesome-svg-core'
    import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    library.add(faChevronLeft);

    export default {
        components: {Leaderboard, library, faChevronLeft, FontAwesomeIcon},
        name: "programming-sidebar",
        data() {
            return {
                scrollPosition: null,
                windowWidth: 0
            }
        },
        // props: {
        //     leaderboardPost: {
        //         type: Array,
        //         required: true
        //     }
        // },
        methods: {
            switchLeaderboard() {
                this.$store.commit('leaderboardStatus');
            },
            closeLeaderboard() {
                this.$store.commit('leaderboardClose');
            },
            openLeaderboard() {
                this.$store.commit('leaderboardOpen');
            },
            getWindowWidth(event) {
                this.windowWidth = document.documentElement.clientWidth;
                if (this.windowWidth < 700) {
                    return this.closeLeaderboard();
                } if (this.windowWidth > 699) {
                    return this.openLeaderboard();
                }
            }
        },
        created() {
            return  axios.get('https://wod.kodacompetitor.com/wp-json/wp/v2/posts?categories=5&posts_per_page=1')
                .then(res => (this.$store.state.leaderboardPost = res.data))
        },
        mounted() {
            this.$nextTick(function() {
                // window.addEventListener('resize', this.getWindowWidth);
                this.windowWidth = document.documentElement.clientWidth;
                if (this.windowWidth < 700) {
                    return this.closeLeaderboard();
                } if (this.windowWidth > 699) {
                    return this.openLeaderboard();
                }
            });
        }
    }
</script>

<style lang="scss" scoped>
.logo-programming-select-holder {
    position: fixed;
    z-index: 2;
    left: 0;
    background: #fff;
    box-shadow: 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07);
    height: 100vh;
    width: 260px;
    bottom: 0;
    top: 0;
    overflow: hidden;
    padding: 0 0 10px;
    transition: 0.25s left ease-in-out;
}
.scrolled {
    box-shadow: 0 35px 35px rgba(50,50,93,.1), 0 25px 15px rgba(0,0,0,.07);
}
.social {
    margin: 0 auto;
    text-align: center;
    padding: 15px;
    position: absolute;
    bottom: 0;
    left: 10px;
    width: 240px;
    border-top: 1px solid rgba(0,0,0,0.1);
    z-index: 5;
    background: #fff;
}
.leaderboard-wrap {
    padding: 15px 0;
    position: absolute;
    top: 90px;
    left: 5px;
    width: 250px;
    border-top: 1px solid rgba(0,0,0,0.1);
}
.scrolled .leaderboard-wrap {
    top: 20px;
}
.fa {
    color:#C60314;
    font-weight: bold;
    text-decoration:none;
    display: inline-block;
    transition: 0.2s ease-in-out;
    font-size: 28px;
    padding: 0;
    margin: 0 10px 10px;
    border: none;
    text-align: center;
}
.fa:hover {
    color: #1d1d1d;
    border: none;
}
.logo-programming-select-holder.scrolled {
    height: calc(100vh - 70px);
    top: 70px;
    z-index: 10;
}
@media only screen and (max-width:790px) {
    .logo-programming-select-holder.scrolled {
        height: calc(100vh - 60px);
        top: 60px;
        z-index: 10;
    }
    .scrolled .leaderboard-wrap {
         top: 30px;
    }
}
.logo-programming-select-holder.hideLeaderboard {
    left: -220px;
    overflow: hidden;
}
.leaderboard-button {
    height: 30px;
    width: 30px;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    left: 220px;
    position: fixed;
    z-index: 13;
    top: 110px;
    border-radius: 100%;
    background: #fff;
    color: rgba(0,0,0,0.25);
    border: 3px solid rgba(0,0,0,0.25);
    padding: 2px 3px 2px 2px;
    transition: 0.25s all ease-in-out;
}
.leaderboard-button:hover {
    color: #c60314;
    border-color: #c60314;
}
.hideLeaderboardBtn {
    left: 5px;
    padding: 2px 2px 2px 4px;
}
.hideLeaderboardBtn svg {
    transform: rotate(180deg);
}
</style>
