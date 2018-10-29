importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.19afa9a675586a46178d.js",
    "revision": "e1f16f168c0e1d8c540c15071e1fc18a"
  },
  {
    "url": "/_nuxt/layouts_default.a5d45997830f9fa3e9da.js",
    "revision": "a14fa8150e92d9c40c11a881f713aa50"
  },
  {
    "url": "/_nuxt/manifest.9fb98006b090c803f293.js",
    "revision": "680afce88f964af4ca3b24c2bd6c3ef0"
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
    "url": "/_nuxt/pages_category__slug_index.89679beee1803befe6ec.js",
    "revision": "063c475e27a2bd7a1d8c490f1c8514a9"
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
    "url": "/_nuxt/pages_index.a047edd6c48f242f352a.js",
    "revision": "c2acc9a7c61546bcad7ce548cc5fab3e"
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
    "url": "/_nuxt/pages_workout-of-the-day__slug_index.4e8e27696328070aca91.js",
    "revision": "b01ab2120b015fce5ff43b8c4e8a15c0"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day_index.88ef1147c3c012b2971e.js",
    "revision": "9c7a54e98dc023f16902db71ac9670a9"
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





