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
    "url": "/_nuxt/manifest.e19d41ad319f14c43a78.js",
    "revision": "4fddc21f03c9ec1541e07e34eece0638"
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
    "url": "/_nuxt/pages_blog__slug_index.7d8eab81884425bae03b.js",
    "revision": "8445df014df8cbca77dcdb9b347b820f"
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
    "url": "/_nuxt/pages_workout-of-the-day__slug_index.431f99d667a61d378879.js",
    "revision": "b0d1229db869ff1c5c6f1340d31ea6ad"
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





