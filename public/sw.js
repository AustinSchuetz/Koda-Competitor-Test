importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.3630ce2336b6a4bcc916.js",
    "revision": "3a025dac5a4ab81f7d53e879fbdb3089"
  },
  {
    "url": "/_nuxt/layouts_default.c9ef91d904d54a73448a.js",
    "revision": "05030411481ffdf2861456c5891d41b1"
  },
  {
    "url": "/_nuxt/manifest.e5e713959d8afdc06d90.js",
    "revision": "1a9994e8cfa88606e650e6bef1f6547b"
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
    "url": "/_nuxt/pages_blog__slug_index.0c846f7e1ce93900b485.js",
    "revision": "fc928f125db9d70c3d5d94f8d5e970ac"
  },
  {
    "url": "/_nuxt/pages_blog_index.82ab2a4c993c1d0ed920.js",
    "revision": "fcbe52b41205100b8aca911f8c6dec64"
  },
  {
    "url": "/_nuxt/pages_category__slug_index.36d0c378af2446452cf6.js",
    "revision": "b8081dd1c5028d0df309023aeac9ff5c"
  },
  {
    "url": "/_nuxt/pages_category_index.f02beec099874ab0dad9.js",
    "revision": "abd4641ff04d5c3953dda62b60fa6a34"
  },
  {
    "url": "/_nuxt/pages_coaches_index.03c754b2f0d2aab81686.js",
    "revision": "f9164ce993ed6cf3d14ab5a0e48b28ab"
  },
  {
    "url": "/_nuxt/pages_index.434110c19ddb98bf29a1.js",
    "revision": "74968ca20a364d807ed3a5eae5f2d7f3"
  },
  {
    "url": "/_nuxt/pages_social_index.5967d176e8ba244b0bf8.js",
    "revision": "6e67db66873f3d2584ab960a5575a8e6"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day__slug_index.1f3be0be27677a546c80.js",
    "revision": "bff1c00f50fc2485d2ea427ebd88bfd4"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day_index.e51cab7a7a232888066b.js",
    "revision": "2a639554c725f7e28485dbd3a65ec416"
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





