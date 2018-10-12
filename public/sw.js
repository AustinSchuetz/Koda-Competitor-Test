importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.d29f2e06361deb0fd93a.js",
    "revision": "70f116d22792a36d43ebc73b0d1822eb"
  },
  {
    "url": "/_nuxt/layouts_default.7b3d51206a52de0ee6db.js",
    "revision": "2b570b4f921e20c16aaf88cb0f261eac"
  },
  {
    "url": "/_nuxt/manifest.9a7087358f838343c31b.js",
    "revision": "2fb5b84340062fbbd978612f3131e964"
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
    "url": "/_nuxt/pages_blog__slug_index.0a772d1f7911dec7718d.js",
    "revision": "91563ea3cbcf90f17b09811508b97577"
  },
  {
    "url": "/_nuxt/pages_blog_index.2cd88452442a384ddfe8.js",
    "revision": "bdb26da0d561a80629e606552b998ab4"
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
    "url": "/_nuxt/pages_index.e978d800aa5da7a7c6bb.js",
    "revision": "2b67a60fec952fd35f5c73071b95796d"
  },
  {
    "url": "/_nuxt/pages_social_index.54459e5cf84830786ae0.js",
    "revision": "ece5e03fd7e98c27d682dd620b85e368"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day__slug_index.ceeff682dea4dc8bcaae.js",
    "revision": "b6cbedaef9b05b56ddc8d71cd4d1e6a1"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day_index.41611747c0d43d28be05.js",
    "revision": "89bd438b1d5407d8aabc96e3e95fd6d0"
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





