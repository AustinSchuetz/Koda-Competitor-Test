importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.9fefb78f1f9c4f08eb79.js",
    "revision": "389ed94ee12af281eb5ce7b6bacf6007"
  },
  {
    "url": "/_nuxt/layouts_default.0771ba9cc35d70295ebf.js",
    "revision": "582b4d36047be49d3da38a853024d246"
  },
  {
    "url": "/_nuxt/manifest.0e6c0460799fee0812c7.js",
    "revision": "d7fb72ac26578628d5c0b2b956b2f827"
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
    "url": "/_nuxt/pages_category__slug_index.0b068e31280e78f9faa5.js",
    "revision": "da2195eb2549dc6102095ed6d50045dc"
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
    "url": "/_nuxt/pages_index.1bc8a24d9f72eba983c5.js",
    "revision": "d6a1f444d8056f5709e7d646c90302c4"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day__slug_index.708b22b55f371c95dfac.js",
    "revision": "ff19c554a873e7030ad41dc9ce520991"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day_index.3d3353f88ac2a1a4c875.js",
    "revision": "6b34dc1c89209b3616df74f888202bb4"
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





