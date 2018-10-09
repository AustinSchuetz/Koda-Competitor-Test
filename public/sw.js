importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.22dc82f11519391410ba.js",
    "revision": "4839f2ef17875049464d65fe328ba6f4"
  },
  {
    "url": "/_nuxt/layouts_default.e64128013067ce42c4e4.js",
    "revision": "992104244bc324b0325aa558ab4ab20f"
  },
  {
    "url": "/_nuxt/manifest.dff888a8d8adf54a3066.js",
    "revision": "964922d3fb75910fe46ca8c19ac06d26"
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
    "url": "/_nuxt/pages_index.d3f1d905d572010dbe99.js",
    "revision": "a10bc40a767f5319462f866eac2dfccb"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day__slug_index.523b303f7aa578935ec1.js",
    "revision": "752caef5e11b03a15684cbd5d8547daf"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day_index.b2f5f7f8280276306465.js",
    "revision": "303467c33f5d1385556f038c0b9336ef"
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





