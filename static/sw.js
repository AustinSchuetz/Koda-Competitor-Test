importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.858b5de1ca2112c9d6b7.js",
    "revision": "182a35768cf4cbf11276699fb4c19dee"
  },
  {
    "url": "/_nuxt/layouts_default.d5a189644d0e0c754c79.js",
    "revision": "65db2961aceff994105501e9dfbf0f88"
  },
  {
    "url": "/_nuxt/manifest.2de2ff9357abd572335c.js",
    "revision": "22db6b34d33633c4ea57fc34bd722106"
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
    "url": "/_nuxt/pages_category__slug_index.d5c0001a8528428d4a2c.js",
    "revision": "8a1f4072a9292c4dbeac6126726faf10"
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
    "url": "/_nuxt/pages_index.781ddaf057bcb69c47b9.js",
    "revision": "5ad1a4addccf4f0afa923d1a0b8852c7"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day__slug_index.4ce8fb2d9d2ccd5a5049.js",
    "revision": "627fd8603a937c5e54d8085699e89bff"
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





