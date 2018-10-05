<template>
  <div class="categories-menu">
   <nuxt-link to="/" class="logo">
        <img src="~assets/KODACompLightRedLogo.svg">
        <h2>Koda<span>Competitor</span></h2>
   </nuxt-link>
    <div class="main-menu">
      <nuxt-link to="/workout-of-the-day/" class="sign-up">WOD</nuxt-link>
      <nuxt-link to="/athlete-type/">Pick a Track</nuxt-link>
      <nuxt-link to="/blog/">Blog</nuxt-link>
      <nuxt-link to="/coaches/">Coaches</nuxt-link>
      <nuxt-link to="/community/">Community</nuxt-link>
  </div>
  </div>
</template>
<script>
export default {
  props: ['categories'],
  methods: {
    slugToUrl(slug) {
      return `/category/${slug}`
    }
  },
  head () {
    return {
      meta: [
          {name: 'google-site-verification', content: 'U8s6_hyMSS_5u6wJRQjjEc0TOiht43u-VPbj4wD57jc'}
      ],
      link: [
        {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.categories-menu {
    /*border-top: 5px solid #C60314;*/
    width:100%;
    background: transparent;
    display: flex;
    justify-content:space-between;
    background: transparent;
    position: fixed;
    z-index: 10;
    padding: 0 20px 0 0;
    .category-item {
        width: inherit;
    }
    a {
        color:#C60314;
        font-weight: bold;
        text-decoration:none;
        padding:25px 20px;
        border-bottom: 3px solid transparent;
        display: inline-block;
        transition: 0.2s ease-in-out;
    }
    a:hover {
        border-bottom: 3px solid rgba(198, 3, 20, 1);
    }
    a.nuxt-link-exact-active {
    }
    .sign-up {
        padding: 10px;
        margin: 15px 10px;
        border: 1px solid;
        border-radius: 5px;
    }
    .sign-up:hover {
        background: #C60314;
        color: #fff;
        border: 1px solid #C60314;
    }
    .logo img {
        height: 55px;
        filter: drop-shadow( 4px 4px 5px rgba(0, 0, 0,0.15) );
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
    .logo:hover img {
        filter: drop-shadow( 4px 4px 5px rgba(0, 0, 0,0.3) );
    }
    .logo {
        display: flex;
        border-bottom: 0;
        flex-direction: row;
        text-decoration: none !important;
        opacity: 1 !important;
        padding: 0;
        margin: 10px;
        h2 {
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            font-weight: 800;
            font-size: 2em;
            line-height: 1.1;
            width: 120px;
            text-decoration: none !important;
        }
        h2 span {
            display: block;
            font-size: 0.5em;
            letter-spacing: 0.1px;
            margin-top: 0;
        }
    }
    .logo:hover img, .logo:hover h2 {
        /*transform: scale(1.05);*/
        /*transition: 0.4s ease-in-out;*/
    }
    .logo:hover {
        border-bottom: 0;
    }
}

</style>
