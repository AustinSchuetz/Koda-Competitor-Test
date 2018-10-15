importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.65d59bd56258ee174698.js",
    "revision": "cdc78da2211dfa1577c71230290c9a93"
  },
  {
    "url": "/_nuxt/layouts_default.ceadab06c668681d4e2d.js",
    "revision": "213c47fee1018f25a2c1ba24307acac8"
  },
  {
    "url": "/_nuxt/manifest.e54f0e92af12a1e4915a.js",
    "revision": "135fdf02586be474b24239fb8a4c6c6a"
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
    "url": "/_nuxt/pages_category__slug_index.b2254c957c2534b86aac.js",
    "revision": "8cba7c949b5ca195864b52d185926378"
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
    "url": "/_nuxt/pages_index.5e99581bc2f0b5f35b84.js",
    "revision": "e9603dedcd083683d2b90defcca28dee"
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
    "url": "/_nuxt/pages_workout-of-the-day_index.765efa50efdc28b6ebc1.js",
    "revision": "6a4c14ca5339a1952817646e119645bc"
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





