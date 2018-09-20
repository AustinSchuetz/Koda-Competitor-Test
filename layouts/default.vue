<template>
  <div>
    <nuxt/>
  </div>
</template>

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
</style>
