importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.f1992ee8f4d642e5aa12.js",
    "revision": "fbe6792b5e224d3fdf12b934b86b1a96"
  },
  {
    "url": "/_nuxt/layouts_default.eac459a9130aeda2f8bc.js",
    "revision": "5d49908714a8e0bff3c4e20b3cde540b"
  },
  {
    "url": "/_nuxt/manifest.a43d0d59b776c4499aa2.js",
    "revision": "4302e9e812bce84b675aa474f487599a"
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
    "url": "/_nuxt/pages_category__slug_index.0a5a84bda90269ee3184.js",
    "revision": "108724f6557f24dc256883fbbab8b6cd"
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
    "url": "/_nuxt/pages_index.e06c4a962eb5fbf2b1c6.js",
    "revision": "3be97c9fc68d914d45bd0bc769604be5"
  },
  {
    "url": "/_nuxt/pages_sign-up_index.862bd1e109e2c3c95c58.js",
    "revision": "f97c133136c694874c6036e3881d2547"
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
    "url": "/_nuxt/pages_workout-of-the-day__slug_index.029176f0f3c4819b1129.js",
    "revision": "9f26879be5f1d690d682edc8c93ff4a5"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day_index.efb80ef9ee8d349f63c5.js",
    "revision": "5799f8568431fdf17db5865f536bd45e"
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





