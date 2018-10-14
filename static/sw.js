importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.a95c635945bead1ef368.js",
    "revision": "7043b9f25ddb7dcecfdb25fc0013c2d1"
  },
  {
    "url": "/_nuxt/layouts_default.ed383eb23de2e3bbfc8e.js",
    "revision": "f27c837fd4210f0d14b19cc352ea077b"
  },
  {
    "url": "/_nuxt/manifest.d1ce8ef2a1447c4084f3.js",
    "revision": "ef089e74bde7e19d46bb502353d90bf5"
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
    "url": "/_nuxt/pages_blog_index.ce00fec8a0da41b94bdc.js",
    "revision": "ad5f51e8b70a217efcf5298d74cf3b55"
  },
  {
    "url": "/_nuxt/pages_category__slug_index.4c68ffbc603382688a69.js",
    "revision": "bffd2f0f3a6fb59b24d1653e21f63594"
  },
  {
    "url": "/_nuxt/pages_category_index.adb7ce82a05707832344.js",
    "revision": "0db14f346ba9304785df345ef2b80c18"
  },
  {
    "url": "/_nuxt/pages_coaches_index.71655daba0b5adff1487.js",
    "revision": "5cebc710a47877857dcab9aad2d62d97"
  },
  {
    "url": "/_nuxt/pages_index.52e7a6bba46789b31a08.js",
    "revision": "2bb3391e407b564a601844ca9b4da988"
  },
  {
    "url": "/_nuxt/pages_social_index.83eeaf6c78ef6713fd63.js",
    "revision": "0f10117f8b2d797e0e5d435627de6ad0"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day__slug_index.7b623bc636b193b6c9ff.js",
    "revision": "b08cb23c73d63d6895d8d292d6925443"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day_index.319c6f183a01dbbe7f50.js",
    "revision": "484e793b21b7c6bb81b0043d195ff3f7"
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





