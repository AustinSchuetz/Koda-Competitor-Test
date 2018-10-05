importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.3fdac15d2aa065a8e388.js",
    "revision": "1e3aca2814f187a07ba56b0ba8774311"
  },
  {
    "url": "/_nuxt/layouts_default.cc13fc1454dbb18583de.js",
    "revision": "900b4d3612ed61411f26a86bcbfee2fd"
  },
  {
    "url": "/_nuxt/manifest.7185a119d349f51be885.js",
    "revision": "14aa948d56bb0d81fb4107da8c5f9f7f"
  },
  {
    "url": "/_nuxt/pages_about_index.1b7ef8d348ff2d6d0ab3.js",
    "revision": "e8bd60d4bce6eafbf8c3d89b48ca8a51"
  },
  {
    "url": "/_nuxt/pages_athlete-type_index.772837fbef232cfba607.js",
    "revision": "ad1fbb329fa8d0b34e64399292e52805"
  },
  {
    "url": "/_nuxt/pages_category__slug_index.3b05c3cb1e035bab0d8c.js",
    "revision": "dbb48add046a8e1e6c387760f9be7dcd"
  },
  {
    "url": "/_nuxt/pages_category_index.f4ef1c7a737e88f14a82.js",
    "revision": "6f0d300c0a96793c2900f562cec98c28"
  },
  {
    "url": "/_nuxt/pages_community_index.54bec7accda7c5cf1de6.js",
    "revision": "beb27e46cc2dd7b5c14209bd1e1abcf2"
  },
  {
    "url": "/_nuxt/pages_index.bd036507e0f248af7501.js",
    "revision": "907b3435770dd0454ba5c4c8152bddd0"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day__slug_index.6421cf3e114f10e93472.js",
    "revision": "6299c5799b1c920a7130e19b1963883e"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day_index.b93d358b9403c16b931b.js",
    "revision": "4eecf7005198499c4112f8ce4b45dfd1"
  },
  {
    "url": "/_nuxt/vendor.4473e200fa9dcafa4852.js",
    "revision": "99636c7a99363a6d211674909a637828"
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





