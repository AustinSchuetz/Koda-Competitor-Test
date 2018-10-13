importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.d09d68d81959033c134c.js",
    "revision": "70235fd9b22cc38e42b58622a2ecd616"
  },
  {
    "url": "/_nuxt/layouts_default.3080dc5a9afc52d6b12b.js",
    "revision": "93e8451ede5750f3250d6d7d4fc04891"
  },
  {
    "url": "/_nuxt/manifest.a5b24a29948598581bb6.js",
    "revision": "58d10523e4c88074d92fb4d5d0fe085a"
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
    "url": "/_nuxt/pages_blog__slug_index.3f65244c5b1e1fc5f211.js",
    "revision": "a675d38f3b6ddcd8b31b70778425d175"
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
    "url": "/_nuxt/pages_index.925fb9c5c56b3789b3a2.js",
    "revision": "b0f45430e95c41ca8d9891d06ce30872"
  },
  {
    "url": "/_nuxt/pages_social_index.54459e5cf84830786ae0.js",
    "revision": "ece5e03fd7e98c27d682dd620b85e368"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day__slug_index.753722bbbc82863c6b0a.js",
    "revision": "bbd46934a484874207aec2b6c3093f9a"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day_index.ef18108f9724eaa4e569.js",
    "revision": "dc3986b02b585ec06090518006760c1e"
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





