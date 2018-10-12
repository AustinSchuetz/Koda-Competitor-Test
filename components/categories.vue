<template>
<div class="categories-menu" :class="{ scrolled: this.$store.state.scrollPosition > 0 }">
    <nuxt-link to="/" class="logo">
        <img src="~assets/KODACompLightRedLogo.svg">
        <h2>Koda<span>Competitor</span></h2>
    </nuxt-link>
    <div class="main-menu">
        <nuxt-link to="/workout-of-the-day/" class="sign-up">WOD</nuxt-link>
        <nuxt-link to="/athlete-type/">Pick a Track</nuxt-link>
        <nuxt-link to="/blog/">Blog</nuxt-link>
        <nuxt-link to="/coaches/">Coaches</nuxt-link>
        <nuxt-link to="/social/">Social</nuxt-link>
    </div>
    <div class="mobile-menu mobile-menu-btn-holder">
        <div id="nav-icon" @click="navMenu" :class="{ open: this.navMenuOpen }">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            navMenuOpen: false
        }
    },
    methods: {
        updateScroll() {
            this.$store.commit('scrollStatus');
        },
        navMenu() {
            this.navMenuOpen = !this.navMenuOpen;
        }
    },
    mounted() {
        window.addEventListener('scroll', this.updateScroll);
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
.mobile-menu {
    display: none;
}
@media only screen and (max-width:790px) {
    .mobile-menu {
        display: block;
    }
    .categories-menu {
        background: #fff;
        height: 60px;
        justify-content: space-between;
    }
    .categories-menu.scrolled {
        box-shadow: 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07);
    }
    .categories-menu .logo {
        z-index: 12;
        width: 220px;
    }
    .categories-menu .logo img {
        height: 40px;
    }
    .main-menu {
        display: none;
    }

    .mobile-menu-btn-holder {
        display: block;
        position: absolute;
        right: 15px;
        top: 8px;
    }
    #nav-icon {
        width: 40px;
        height: 30px;
        position: relative;
        margin: 5px auto;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: .5s ease-in-out;
        -moz-transition: .5s ease-in-out;
        -o-transition: .5s ease-in-out;
        transition: .5s ease-in-out;
        cursor: pointer;
    }
    #nav-icon span {
        display: block;
        position: absolute;
        height: 6px;
        width: 100%;
        background: #c60314;
        border-radius: 9px;
        opacity: 1;
        left: 0;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: .25s ease-in-out;
        -moz-transition: .25s ease-in-out;
        -o-transition: .25s ease-in-out;
        transition: .25s ease-in-out;
    }
    #nav-icon span:nth-child(1) {
        top: 0px;
        -webkit-transform-origin: left center;
        -moz-transform-origin: left center;
        -o-transform-origin: left center;
        transform-origin: left center;
    }

    #nav-icon span:nth-child(2) {
        top: 12px;
        -webkit-transform-origin: left center;
        -moz-transform-origin: left center;
        -o-transform-origin: left center;
        transform-origin: left center;
    }

    #nav-icon span:nth-child(3) {
        top: 24px;
        -webkit-transform-origin: left center;
        -moz-transform-origin: left center;
        -o-transform-origin: left center;
        transform-origin: left center;
    }

    #nav-icon.open span:nth-child(1) {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
        top: -1px;
        left: 6px;
    }

    #nav-icon.open span:nth-child(2) {
        width: 0%;
        opacity: 0;
    }

    #nav-icon.open span:nth-child(3) {
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
        top: 27px;
        left: 6px;
    }
}



</style>
