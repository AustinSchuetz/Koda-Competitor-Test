importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.a95c635945bead1ef368.js",
    "revision": "7043b9f25ddb7dcecfdb25fc0013c2d1"
  },
  {
    "url": "/_nuxt/layouts_default.109d7d79217ebba10e16.js",
    "revision": "ad26fcafe0115db20a1c141af308c9f3"
  },
  {
    "url": "/_nuxt/manifest.4b58b010af0262f33e2d.js",
    "revision": "e674c35dd73b0555b2a1c44ebc7bd5a1"
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
    "url": "/_nuxt/pages_category__slug_index.3963a95fbc12804b679b.js",
    "revision": "16bc615c75b280356f1fc3e8d09289ef"
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
    "url": "/_nuxt/pages_index.a7646303db93aa1acf36.js",
    "revision": "24724aabf8e9598db22bb0e0da5eb47c"
  },
  {
    "url": "/_nuxt/pages_social_index.54459e5cf84830786ae0.js",
    "revision": "ece5e03fd7e98c27d682dd620b85e368"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day__slug_index.7b623bc636b193b6c9ff.js",
    "revision": "b08cb23c73d63d6895d8d292d6925443"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day_index.88e50c2dccd18f7ca8d7.js",
    "revision": "30e00783882b25c55aa239dc50ad9540"
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





