importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.788464c7bef26237a8fd.js",
    "revision": "b32c8257a1f56253d55dbd6b70a2da09"
  },
  {
    "url": "/_nuxt/layouts_default.063a307f903f3668c479.js",
    "revision": "287863c5550ce89a76aa94d5680be0dd"
  },
  {
    "url": "/_nuxt/manifest.8f8f3ad699ebaa28a22a.js",
    "revision": "ff9560707ac9cec51b757d5522a81ed1"
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
    "url": "/_nuxt/pages_category__slug_index.7ec7d142a9e161324a00.js",
    "revision": "9306a0915fe14ab65dac9000338399a6"
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
    "url": "/_nuxt/pages_index.b58a46c1b739b3d10a3c.js",
    "revision": "14b58a6b5cd1d5bec4eb61b206675142"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day__slug_index.9971633c333870bfe0b8.js",
    "revision": "ac6b02614b0c4fe375a07a989a4eec3d"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day_index.ef7b3ec9568bf77ef423.js",
    "revision": "caf6c13a55273ef9d7a3d11092b2bc3f"
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





