importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.22dc82f11519391410ba.js",
    "revision": "4839f2ef17875049464d65fe328ba6f4"
  },
  {
    "url": "/_nuxt/layouts_default.551ba438e0e45cfa06d6.js",
    "revision": "190efedd4502891164f516889f95a894"
  },
  {
    "url": "/_nuxt/manifest.845292af6529b579e5c9.js",
    "revision": "8fe14fd28a1af3edc786ac82f6c0e45b"
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
    "url": "/_nuxt/pages_category__slug_index.108f79074fa4af66d083.js",
    "revision": "5957c32e186fbfd6affda69a3524f04c"
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
    "url": "/_nuxt/pages_index.70182ca888df76f07082.js",
    "revision": "78bb3067a6df8a0725d5a41aef5edf4e"
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





