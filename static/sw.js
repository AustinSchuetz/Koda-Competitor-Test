importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.858b5de1ca2112c9d6b7.js",
    "revision": "182a35768cf4cbf11276699fb4c19dee"
  },
  {
    "url": "/_nuxt/layouts_default.0f1a967585ef38fbb828.js",
    "revision": "84c0602986bf1139ca98f94dd739a169"
  },
  {
    "url": "/_nuxt/manifest.d2917f7cc4c2640e65af.js",
    "revision": "ca9f5a238df695a143da8432f00a6dd4"
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
    "url": "/_nuxt/pages_category__slug_index.ae7ba2be6f3c652d4b18.js",
    "revision": "35550b7b669f800af828a5f54be360fd"
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
    "url": "/_nuxt/pages_index.2cf80b1687809c9a42ae.js",
    "revision": "0ffd3e08d7e59c0df13a6953ae16eab8"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day__slug_index.0534170729145e292233.js",
    "revision": "6aaf21dd4d84e5a0fd316138c591f95d"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day_index.b93d358b9403c16b931b.js",
    "revision": "4eecf7005198499c4112f8ce4b45dfd1"
  },
  {
    "url": "/_nuxt/vendor.4df75a20b7c614a91af7.js",
    "revision": "3475a113ef684b745062dea2aef7d5bc"
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





