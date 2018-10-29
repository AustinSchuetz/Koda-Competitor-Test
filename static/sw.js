importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.f1992ee8f4d642e5aa12.js",
    "revision": "fbe6792b5e224d3fdf12b934b86b1a96"
  },
  {
    "url": "/_nuxt/layouts_default.9847b70a069787cb49b8.js",
    "revision": "1bfe8aeb81528cec986ee1f08d2bd643"
  },
  {
    "url": "/_nuxt/manifest.1bececd4281eb617047c.js",
    "revision": "e2120be44748e17901a6085f3523fc05"
  },
  {
    "url": "/_nuxt/pages_about_index.e01020f16107b60f602c.js",
    "revision": "f480d8bcfddc9828413a7523212db090"
  },
  {
    "url": "/_nuxt/pages_athlete-type_index.d7837d603a60df19e79f.js",
    "revision": "965b72eb5f31bb33cf511265a50542c6"
  },
  {
    "url": "/_nuxt/pages_blog__slug_index.9bbeb5f0646d79b28a47.js",
    "revision": "c1d8eb11bf93f69b314e602d9e1c975a"
  },
  {
    "url": "/_nuxt/pages_blog_index.bb0e1a69d9fe3cdd36b9.js",
    "revision": "973ff8168aec5b4b8575f11c70ab84d4"
  },
  {
    "url": "/_nuxt/pages_category__slug_index.e2f4219b6ab4ede265ed.js",
    "revision": "41ec1722a3e02c80892be7111f506f62"
  },
  {
    "url": "/_nuxt/pages_category_index.d9d331ff61d4e72359da.js",
    "revision": "40b1ca6915c117f36b76072a13d2690b"
  },
  {
    "url": "/_nuxt/pages_coaches_index.8a3f602cae7c135bf116.js",
    "revision": "e054019ee739d70ff86bb47ff7be4b90"
  },
  {
    "url": "/_nuxt/pages_index.ada84eab9aea0434f38b.js",
    "revision": "06176cea080e4ad75cf58f57518df768"
  },
  {
    "url": "/_nuxt/pages_sign-up_index.bda0fe39f3cf9e5e3d7f.js",
    "revision": "9696ceb36260f1c373d358faf1431d9a"
  },
  {
    "url": "/_nuxt/pages_social_index.04d95090e70eb5890506.js",
    "revision": "8639c8f433dc6859d0ace40b8c9034ae"
  },
  {
    "url": "/_nuxt/pages_workout-library_index.5a42a28252fe223e928c.js",
    "revision": "911a03e2f52c693eefd82257832be806"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day__slug_index.0ccb981213c96e0bf7e2.js",
    "revision": "b2a2f2106ecc99fe50b609904e5799f5"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day_index.40eb3c4e2ca20450d628.js",
    "revision": "2a363b48a739172a1f4571623906ce58"
  },
  {
    "url": "/_nuxt/vendor.71d6b0b0c8bc3bad7caa.js",
    "revision": "268cbe32d895b986bcb18030f372a23e"
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





