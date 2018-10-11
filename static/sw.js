importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.d29f2e06361deb0fd93a.js",
    "revision": "70f116d22792a36d43ebc73b0d1822eb"
  },
  {
    "url": "/_nuxt/layouts_default.ca3ddbae28c08af0abd0.js",
    "revision": "d09ef172b5e08fa79c9b47121abd5921"
  },
  {
    "url": "/_nuxt/manifest.2ba8e2602bd520c3e89a.js",
    "revision": "41c6a04d0574cb6707d6b7705e7e8c32"
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
    "url": "/_nuxt/pages_blog__slug_index.46e78bd47c466272f785.js",
    "revision": "942577abd63d41653ae72e79f90cddde"
  },
  {
    "url": "/_nuxt/pages_blog_index.c5f530aeec5a453aeac1.js",
    "revision": "e951ca84ba0925f5d30c9783fa1b6d78"
  },
  {
    "url": "/_nuxt/pages_category__slug_index.207f363bfe5767f9baad.js",
    "revision": "60f7d5e201bc9b6ebadde9606380fc12"
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
    "url": "/_nuxt/pages_index.7c5f8e8363c89ff2c4be.js",
    "revision": "bd93ea1e2992532d54b673e4c738a6a5"
  },
  {
    "url": "/_nuxt/pages_social_index.54459e5cf84830786ae0.js",
    "revision": "ece5e03fd7e98c27d682dd620b85e368"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day__slug_index.b9006bdffdc23389c591.js",
    "revision": "e6ad886fec280544d402603ea12f8634"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day_index.2e8931c4386cb692be73.js",
    "revision": "bbf0b55f952e245ccdda1d455176076f"
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





