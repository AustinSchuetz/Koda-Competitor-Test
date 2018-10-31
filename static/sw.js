importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.b25a8b9176f2f38ee17f.js",
    "revision": "37ff07c1fabf1ab1eabfe0cf3fadd190"
  },
  {
    "url": "/_nuxt/layouts_default.d0cf0bf1884bb71d99dc.js",
    "revision": "149f5fba6cbf4172c1bc6f4b6b3c86eb"
  },
  {
    "url": "/_nuxt/manifest.21565b9c7f962fe6d52c.js",
    "revision": "82a536c97b2c3ddd7cd06e5b7802d930"
  },
  {
    "url": "/_nuxt/pages_about_index.05871aa43694dc218c98.js",
    "revision": "807168d7eb7ea02485014aef337bc3cf"
  },
  {
    "url": "/_nuxt/pages_athlete-type_index.9308343bdf33870732d0.js",
    "revision": "02ffaefaa92c8fa7eeb71502214336ef"
  },
  {
    "url": "/_nuxt/pages_blog__slug_index.9bbeb5f0646d79b28a47.js",
    "revision": "c1d8eb11bf93f69b314e602d9e1c975a"
  },
  {
    "url": "/_nuxt/pages_blog_index.a26bf46902842924cd5d.js",
    "revision": "d099e1abff7f4a15f00543ac89a72d1d"
  },
  {
    "url": "/_nuxt/pages_category__slug_index.11d11a3387ea0d5fdc52.js",
    "revision": "07858592f2d68f1a568cb8f7a662f435"
  },
  {
    "url": "/_nuxt/pages_category_index.2e9a99d379ce30b653bd.js",
    "revision": "a20b0fad603e49180b2286bf630c46eb"
  },
  {
    "url": "/_nuxt/pages_coaches_index.8a3f602cae7c135bf116.js",
    "revision": "e054019ee739d70ff86bb47ff7be4b90"
  },
  {
    "url": "/_nuxt/pages_index.5ca1386cc7162f9f4bab.js",
    "revision": "4a104f5c8ec0e1de7bd6cd9f85e5bc16"
  },
  {
    "url": "/_nuxt/pages_login_index.2e9d8ddb4d5a62f31916.js",
    "revision": "854a39fafa4c91c1d315f84612e0f43e"
  },
  {
    "url": "/_nuxt/pages_sign-up_index.b9fdadde29fa98b1fba2.js",
    "revision": "a82e4b984828a78484e33b40aadc7e94"
  },
  {
    "url": "/_nuxt/pages_social_index.027dc298a5c60f55ea5b.js",
    "revision": "4d824456b5a389ae9928270ab48c62aa"
  },
  {
    "url": "/_nuxt/pages_workout-library_index.bc27138ba3e359c9c714.js",
    "revision": "b74b8a99f1cf14c4aae49da9da2fbe3b"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day__slug_index.dd6653327300d844dc5b.js",
    "revision": "97a7dcada7f1069a21f35eb5752a5a81"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day_index.e7d6df24c8eb210e640c.js",
    "revision": "efd9a9ffe56a3661d45734682f670075"
  },
  {
    "url": "/_nuxt/vendor.f3689436eba87cf90610.js",
    "revision": "c8011ff3688eb04788333c8650b909a3"
  }
], {
  "cacheId": "wp-vue-ssr",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





