importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.788464c7bef26237a8fd.js",
    "revision": "b32c8257a1f56253d55dbd6b70a2da09"
  },
  {
    "url": "/_nuxt/layouts_default.4ec8d5e01f30d9345e51.js",
    "revision": "93ff3e41bfa1da9992a3ba3666ff0a4c"
  },
  {
    "url": "/_nuxt/manifest.28682aec1c4e15be4e29.js",
    "revision": "3b397621c444c24def9b78fdc0184039"
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
    "url": "/_nuxt/pages_category__slug_index.e90bab614f3e2eae0ac8.js",
    "revision": "79312f626cab7f092dee96bea1a60e72"
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
    "url": "/_nuxt/pages_index.6e9e78ba4eb7ab82c523.js",
    "revision": "da4482f907101d16314170355e21bf28"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day__slug_index.9971633c333870bfe0b8.js",
    "revision": "ac6b02614b0c4fe375a07a989a4eec3d"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day_index.4385a66ff22e56e9e4d7.js",
    "revision": "7f1f0f7b0d5453083cd8f7f2c6584303"
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





