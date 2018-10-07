importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.e9f1fdeb1977fbbf9cd1.js",
    "revision": "8fa3d8397a5b090c88cd742de91703a6"
  },
  {
    "url": "/_nuxt/layouts_default.568840904b6991cc89d8.js",
    "revision": "bb228598cc482b0c0ff136142da9e8dd"
  },
  {
    "url": "/_nuxt/manifest.555589c6b6164c47c377.js",
    "revision": "86b71dca2c62cbc54242a644e7781521"
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
    "url": "/_nuxt/pages_category__slug_index.c9f2f8f3f7b8e45d8579.js",
    "revision": "f5dcdca650faffb581028b35b7ca825f"
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
    "url": "/_nuxt/pages_index.0b5120abb8fec366fe63.js",
    "revision": "eea34f0e5fe6fde1b41b362ffa7220ee"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day__slug_index.32be55d953193d4ba968.js",
    "revision": "8f6e7d1070f9d75f1aa5e3ab34fd2de0"
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





