<template>
  <div class="logo-programming-select-holder" :class="{ scrolled: scrollPosition > 0 }">
      <div class="social">
        <a href="https://www.instagram.com/kodacompetitor/" class="fa fa-instagram" target="_blank"></a>
        <a href="https://www.facebook.com/KodaCrossFit/" class="fa fa-facebook" target="_blank"></a>
      </div>
      <div class="leaderboard-wrap">
          <h2>Leaderboard</h2>
      </div>
  </div>
</template>

<script>
    export default {
      name: "programming-sidebar",
        data() {
            return {
                scrollPosition: null
            }
        },
        methods: {
            updateScroll() {
                this.scrollPosition = window.scrollY
            }
        },
        mounted() {
            window.addEventListener('scroll', this.updateScroll);
            this.scrollPosition = window.scrollY
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
    padding: 0 20px 20px;
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
    width: 220px;
    border-top: 1px solid rgba(0,0,0,0.1);
}
.leaderboard-wrap {
    padding: 15px;
    position: absolute;
    top: 90px;
    width: 220px;
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
    h2 {
        text-align: center;
    }

.logo-programming-select-holder.scrolled {
    height: calc(100vh - 70px);
    top: 70px;
    z-index: 10;
}
</style>
