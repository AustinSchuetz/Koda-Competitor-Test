<template>
<div class="categories-menu" :class="{ scrolled: scrollPosition > 0 }">
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
    },
    head () {
        return {
          meta: [
              {name: 'google-site-verification', content: 'U8s6_hyMSS_5u6wJRQjjEc0TOiht43u-VPbj4wD57jc'},
              {name: 'robots', content: 'noindex,nofollow'}
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
    border-top: 3px solid #C60314;
    width:100%;
    background: transparent;
    display: flex;
    justify-content:space-between;
    background: transparent;
    position: fixed;
    z-index: 10;
    padding: 0 20px 0 0;
    height: 70px;
    transition: 0.2s background-color ease-in-out;
    .category-item {
        width: inherit;
    }
    a {
        color:#C60314;
        font-weight: bold;
        text-decoration:none;
        padding: 20px;
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
        height: inherit;
    }
    .sign-up:hover {
        background: #C60314;
        color: #fff;
        border: 1px solid #C60314;
    }
    .logo img {
        height: 55px;
        filter: drop-shadow( 0px 0px 2px rgba(0, 0, 0,0.15) );
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        margin: 7px auto;
    }
    .logo:hover img {
        filter: drop-shadow( 0px 0px 4px rgba(0, 0, 0,0.3) );
    }
    .logo {
        display: flex;
        border-bottom: 0;
        flex-direction: row;
        text-decoration: none !important;
        opacity: 1 !important;
        padding: 0;
        margin: 0;
        width: 260px;
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
.categories-menu.scrolled {
    background: #fff;
    box-shadow: 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07);
}

</style>
