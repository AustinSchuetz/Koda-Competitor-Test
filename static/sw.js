importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.19afa9a675586a46178d.js",
    "revision": "e1f16f168c0e1d8c540c15071e1fc18a"
  },
  {
    "url": "/_nuxt/layouts_default.68bd0bae4039d8ad57d1.js",
    "revision": "11ce3bf65eead4978338fa47db36535b"
  },
  {
    "url": "/_nuxt/manifest.a29b1842159f886b60a0.js",
    "revision": "5d8b852b53a747ca15c0dd2a94e851b8"
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
    "url": "/_nuxt/pages_category__slug_index.01d34def743113656d1a.js",
    "revision": "04bcb03c187d8480285cef985e9f51c1"
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
    "url": "/_nuxt/pages_index.6f63ae975468592d316e.js",
    "revision": "be02a0d914877dafb22677481bdb76e2"
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
    "url": "/_nuxt/pages_workout-of-the-day_index.2bfb50db7f3c4e84713d.js",
    "revision": "6221585ccdaa0456b9f7705a5cf72297"
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





