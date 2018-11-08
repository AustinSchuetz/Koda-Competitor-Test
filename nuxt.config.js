const bodyParser = require('body-parser');
const session = require('express-session');
module.exports = {
  /*
  ** Extend nuxt using nuxt modules system (Alpha)
  ** Learn more: https://github.com/nuxt/nuxt-modules
  */
  modules: [
      { src: '@nuxtjs/pwa', options: { icon: { sizes: [512, 192, 380 ] } } },
      'nuxt-stripe-module',
      '@nuxtjs/axios'
  ],
  stripe: {
    version: 'v3',
    publishableKey: 'pk_test_q18g70gNaRpri7661jkdHXfP'
  },
  plugins: [
      '~/plugins/vue-tabs-component',
      '~/plugins/firebase',
      '~/plugins/moment.js',
      '~/plugins/vue-js-modal.js',
      '~/plugins/auth.js'
  ],
  router: {
    middleware: 'check-auth'
  },
  serverMiddleware: [
    bodyParser.json(),
    session({
        secret: 'amdskfmdlkfdklfndfmdfndsmfndfnejnjheheuewytwgssa',
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: 60000, secure: false }
    }),
    '~/auth'
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: "Koda Competitor",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Koda Competitor CrossFit Programming" },
        { hid: "og:description", name: "og:description", content: "Koda Competitor CrossFit Programming" },
        { hid: "og:title", name: "og:title", content: "Koda Competitor CrossFit Programming" },
        { hid: "author", name: "author", content: "Austin Schuetz" },
        { hid: "og:site_name", name: "og:site_name", content: "Koda Competitor" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
      color: "#C60314",
      height: '5px'
  },
  generate: {
    dir: 'public',
    fallback: true
  },
  /*
  ** Customize manifest.json
  */
  manifest: {
    name: "Nuxt.js",
    theme_color: "#C60314"
  },
  axios: {
    debug: true
  },
  /*
  ** Build configuration
  */
  build: {
      extend (config, { isDev, isClient }) {
          if (isDev) {
              config.resolve.alias['config'] = '~/config/development'
          } else {
              config.resolve.alias['config'] = '~/config/production'
          }
      }
    /*
    ** Run ESLINT on save
    */
    // extend(config, ctx) {
    //   if (ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: "pre",
    //       test: /\.(js|vue)$/,
    //       loader: "eslint-loader",
    //       exclude: /(node_modules)/
    //     });
    //   }
    // }
  }
};
