importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.a5b415b24390fccb2e27.js",
    "revision": "cdc78da2211dfa1577c71230290c9a93"
  },
  {
    "url": "/_nuxt/layouts_default.d598cb4e89ed43c4d755.js",
    "revision": "d7f57e2b2d596e283250422a302a0f90"
  },
  {
    "url": "/_nuxt/manifest.7590806986d206d4031e.js",
    "revision": "0d6baa771d554a3cfddc54462a5668e6"
  },
  {
    "url": "/_nuxt/pages_about_index.f515d9cb86fdc06cc051.js",
    "revision": "e7c00c34fbe3ad8298d8b54b6ccdb846"
  },
  {
    "url": "/_nuxt/pages_athlete-type_index.d1fb29e08adf0b6d0526.js",
    "revision": "eccdf7ccf3bdd882789b6982a2fa70a1"
  },
  {
    "url": "/_nuxt/pages_blog__slug_index.475cd419c67dc28eafc7.js",
    "revision": "a8b780902a290353500d580b3ec9ffe3"
  },
  {
    "url": "/_nuxt/pages_blog_index.7878af5dbdc15c0b5df3.js",
    "revision": "1000b88a0a13da046e4c8b1baa91a7ff"
  },
  {
    "url": "/_nuxt/pages_category__slug_index.90e2d56349dbe7228b6f.js",
    "revision": "d95c3d6e09f500db160c4bad3e1d1dd2"
  },
  {
    "url": "/_nuxt/pages_category_index.adb7ce82a05707832344.js",
    "revision": "0db14f346ba9304785df345ef2b80c18"
  },
  {
    "url": "/_nuxt/pages_coaches_index.03c754b2f0d2aab81686.js",
    "revision": "f9164ce993ed6cf3d14ab5a0e48b28ab"
  },
  {
    "url": "/_nuxt/pages_index.3dbeb2860624a3c7c81d.js",
    "revision": "19afe31ea6ff76918cbbbb52426d0b6f"
  },
  {
    "url": "/_nuxt/pages_social_index.5483387e5bc2f9b6dc0e.js",
    "revision": "66e0880da3c1bf6c2a6afa1ad3bf4855"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day__slug_index.b608468ac12635bf388e.js",
    "revision": "4e80f60625aeab73c02be83bdbfac468"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day_index.f602dcff98900d129c74.js",
    "revision": "6531a723c23e2c0cac1fb9bf382b4f58"
  },
  {
    "url": "/_nuxt/vendor.ff927f7e0661c2f9acee.js",
    "revision": "e50e493416b43db86bea9ab9120bcbf2"
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





