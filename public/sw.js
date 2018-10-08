importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.e9f1fdeb1977fbbf9cd1.js",
    "revision": "8fa3d8397a5b090c88cd742de91703a6"
  },
  {
    "url": "/_nuxt/layouts_default.005a19741ce3ec6aebbf.js",
    "revision": "5df70431fa9f83fe34450a0c030d059d"
  },
  {
    "url": "/_nuxt/manifest.9a10b724770b8a65807e.js",
    "revision": "e3ebf1c268fdb933c1619206a0d30367"
  },
  {
    "url": "/_nuxt/pages_about_index.a98a32ea15152374c0c5.js",
    "revision": "29d7b30a79aac49fcb8301e199ae0ce6"
  },
  {
    "url": "/_nuxt/pages_athlete-type_index.dd0d7852d269073ef191.js",
    "revision": "9fae526f3a95665051b634fb59b32325"
  },
  {
    "url": "/_nuxt/pages_blog_index.32599c2a47896af29f3d.js",
    "revision": "efb17b699fdf621d3923b83049fb67d3"
  },
  {
    "url": "/_nuxt/pages_category__slug_index.214114ed82e45345ac40.js",
    "revision": "8ebde3b0f3fce8ea8feefe8afa8a5b44"
  },
  {
    "url": "/_nuxt/pages_category_index.adb7ce82a05707832344.js",
    "revision": "0db14f346ba9304785df345ef2b80c18"
  },
  {
    "url": "/_nuxt/pages_coaches_index.14c83f568b115e5a1449.js",
    "revision": "c8ddcf0f29e33df268ea798baa3ed251"
  },
  {
    "url": "/_nuxt/pages_community_index.54bec7accda7c5cf1de6.js",
    "revision": "beb27e46cc2dd7b5c14209bd1e1abcf2"
  },
  {
    "url": "/_nuxt/pages_index.90ea1d89c4f631c95463.js",
    "revision": "3d67dcf7551d5bb857b8077b1e267527"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day__slug_index.b416789975a05ce43039.js",
    "revision": "886b4ee9244cb830875f3d47f6031e68"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day_index.b93d358b9403c16b931b.js",
    "revision": "4eecf7005198499c4112f8ce4b45dfd1"
  },
  {
    "url": "/_nuxt/vendor.e58f67ae1d62ee2d78b4.js",
    "revision": "74e4ae8eb8fc67776e34677f396c5be0"
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





