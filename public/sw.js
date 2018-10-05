importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.5d5fc7f897c957c0ab44.js",
    "revision": "6c62826bcdf603fa45e738ab7617f364"
  },
  {
    "url": "/_nuxt/layouts_default.d8a1a0dd86c927fadfad.js",
    "revision": "490c1c7a5f6cb0f1c7a4d8d2d2965934"
  },
  {
    "url": "/_nuxt/manifest.a0ef7fa6d6d0e0dcc139.js",
    "revision": "f9090697ea1e7c8a0920f329c7f7e5f1"
  },
  {
    "url": "/_nuxt/pages_about_index.38b613257bffa877db3f.js",
    "revision": "554539ef2666d1ed106f09bdf080b2cd"
  },
  {
    "url": "/_nuxt/pages_athlete-type_index.8e637956a82d0f4b1764.js",
    "revision": "b2844f387b519e76aeeaa072a52f3cc6"
  },
  {
    "url": "/_nuxt/pages_blog_index.12d9bc673204350fc8af.js",
    "revision": "3ad594336c837eee1c8e6205a8f65e9f"
  },
  {
    "url": "/_nuxt/pages_category__slug_index.537096eb9674db686f20.js",
    "revision": "55f38654ea9e86ad0c79fcc3cd757eb5"
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
    "url": "/_nuxt/pages_index.e01254f4649b3312b750.js",
    "revision": "5be7aabf84d22e9a02806e27711e1322"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day__slug_index.8ab65f1ebf438378a63d.js",
    "revision": "e18b5e2bc9e1890960398f64c975abc5"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day_index.b93d358b9403c16b931b.js",
    "revision": "4eecf7005198499c4112f8ce4b45dfd1"
  },
  {
    "url": "/_nuxt/vendor.00a9ee2f9e5a6d638b53.js",
    "revision": "65ba72a6170bdadbc07d37c912a8f7bf"
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





