importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.5d5fc7f897c957c0ab44.js",
    "revision": "6c62826bcdf603fa45e738ab7617f364"
  },
  {
    "url": "/_nuxt/layouts_default.f43223c8515421ab47d4.js",
    "revision": "9d56b856cb71a8c9d815345606712331"
  },
  {
    "url": "/_nuxt/manifest.919daa4865819c73b01b.js",
    "revision": "0a195c4715bc77fe80aacacd34331422"
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
    "url": "/_nuxt/pages_category__slug_index.d5c0001a8528428d4a2c.js",
    "revision": "8a1f4072a9292c4dbeac6126726faf10"
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
    "url": "/_nuxt/pages_index.5652078381b2f17fb01e.js",
    "revision": "8122d986819020864167fc8df73fdd15"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day__slug_index.9edcadd7f903c5141ec9.js",
    "revision": "cef53b3ee5551d5e856a7b6e78f25885"
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





