importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.d29f2e06361deb0fd93a.js",
    "revision": "70f116d22792a36d43ebc73b0d1822eb"
  },
  {
    "url": "/_nuxt/layouts_default.8c58e35cb411a6dfede8.js",
    "revision": "dded5688d922da55c65e6576d1ca7b05"
  },
  {
    "url": "/_nuxt/manifest.b19cb1731bf64b099b5b.js",
    "revision": "01d1172031cccfa5baf5341a1427e00c"
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
    "url": "/_nuxt/pages_category__slug_index.ed54aa6db73a7691a825.js",
    "revision": "dbd3df1b0183368e4098aac7cfa9f59d"
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
    "url": "/_nuxt/pages_index.0a3e10b2a5ae862dbf42.js",
    "revision": "b7cf996eb48647d4e29f06d37709fd1e"
  },
  {
    "url": "/_nuxt/pages_social_index.54459e5cf84830786ae0.js",
    "revision": "ece5e03fd7e98c27d682dd620b85e368"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day__slug_index.25bfe56eb19ba8571d48.js",
    "revision": "548e05c04e0a09dbe241d0291bd5732d"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day_index.9d1e3478d4aebb160c0c.js",
    "revision": "221bec5d88995e8a0910cc06ccb3dbf7"
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





