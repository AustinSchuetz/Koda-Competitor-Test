<template>
  <div>
      <section class="header">
          <categories></categories>
        </section>
      <section class="programming-sidebar" :class="{ scrolled: scrollPosition > 0 }">
          <programming-sidebar></programming-sidebar>
      </section>
      <section class="container">
          <div class="inside-container">
              <div :class="{ leaderboardHidden: this.$store.state.hideLeaderboardGlobal }" class="content">
                  <nuxt/>
              </div>
          </div>
      </section>
  </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import api from "../api/index";
    import postList from '~/components/postList.vue'
    import recentPosts from '~/components/recentPosts.vue'
    import categories from '~/components/categories.vue'
    import programmingSidebar from '~/components/programmingSidebar.vue'

    export default {
        components: {postList, categories, recentPosts, programmingSidebar},
        methods: {
            updateScroll() {
                this.scrollPosition = window.scrollY
            }
        },
        mounted() {
            window.addEventListener('scroll', this.updateScroll);
            this.scrollPosition = window.scrollY;
        }
    }
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
html {
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
.post h4, .post-content h4 {
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #c60314;
  font-weight: 800;
  padding: 10px;
  margin-bottom: 10px;
  border-bottom: 2px solid #c60314;
}
body {
  background: url(~assets/KODACompLightBackgroundLogo.svg) 50% 50% no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
}
.header {
    background: none !important;
    text-align: center;
}
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top:60px;
}
.inside-container {
    width: 100%;
}
.content {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
    margin: 0 0 0 260px;
    line-height: 150%;
    padding: 30px 30px 50px;
    width: calc(100% - 260px);
    transition: 0.25s all ease-in-out;
}
.leaderboardHidden.content {
    width: 1200px;
    max-width: 100%;
    margin: 0 auto;
}
    .clean-page-content {
        width: 850px;
        margin: 0 auto;
        max-width: 95%;
        border-radius: 5px;
        border-top: 5px solid #c60314;
        box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07);
        background: #fff;
        padding: 20px 15px;
    }
.clean-page-content p {
    margin: 10px 0;
}
.clean-page-content h1.clean-title {
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    width: 95%;
    margin: 0 auto 20px;
    text-align: center;
}
.programming-sidebar {
    width: 275px;
    height: 100vh;
    position: absolute;
}
.programming-sidebar.scrolled {
    height: calc(100vh - 70px);
    top: 70px;
    z-index: 10;
}
</style>
