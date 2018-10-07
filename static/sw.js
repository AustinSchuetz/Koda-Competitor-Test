importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.ac906308bb96c0e32e6e.js",
    "revision": "2f52585bce657b1b073dc1b288890080"
  },
  {
    "url": "/_nuxt/layouts_default.8b2ad1f6ddb99b9a9a33.js",
    "revision": "a1064954fa54f71358257aa4ad8b5ab2"
  },
  {
    "url": "/_nuxt/manifest.cac0b26077b2be4fc841.js",
    "revision": "480eb5a0854529111e39f9c60697871c"
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
    "url": "/_nuxt/pages_category__slug_index.4c83e54b4b5e650738b2.js",
    "revision": "fa4d13ec185175afe4c802808f41f31e"
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
    "url": "/_nuxt/pages_index.1a282b7efd9635919e51.js",
    "revision": "d2e3407197003ee46968db01b81001aa"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day__slug_index.da7544f35a14e0e4901c.js",
    "revision": "0c50d263f196726beae7638bc171db27"
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





