<template>
  <div class="logo-programming-select-holder">
      <div class="find-programming">
          <h2>Filtering of WODS</h2>
          <h2>Or maybe most recent leaderboard?????</h2>
      </div>
  </div>
</template>

<script>
    export default {
      name: "programming-sidebar"
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
    padding: 100px 20px 20px;
}
.social {
    margin: 0 auto;
    text-align: center;
    padding: 15px;
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
</style>
