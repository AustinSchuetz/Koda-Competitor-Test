module.exports = {
  /*
  ** Extend nuxt using nuxt modules system (Alpha)
  ** Learn more: https://github.com/nuxt/nuxt-modules
  */
  modules: [{ src: '@nuxtjs/pwa', options: { icon: { sizes: [512, 192, 380 ] } } }],
  plugins: [
      '~/plugins/vue-tabs-component',
      '~/plugins/firebase',
      '~/plugins/moment.js',
      '~/plugins/vue-js-modal.js'
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: "Koda Competitor",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Koda Competitor CrossFit Programming" }
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
    dir: 'public'
  },
  /*
  ** Customize manifest.json
  */
  manifest: {
    name: "Nuxt.js",
    theme_color: "#C60314"
  },
  /*
  ** Build configuration
  */
  build: {
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
