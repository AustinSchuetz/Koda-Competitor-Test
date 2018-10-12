importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.d29f2e06361deb0fd93a.js",
    "revision": "70f116d22792a36d43ebc73b0d1822eb"
  },
  {
    "url": "/_nuxt/layouts_default.879a38f78a557e8b81fc.js",
    "revision": "9e3e977e46b07fcb7ec3a67be7fd3ea5"
  },
  {
    "url": "/_nuxt/manifest.02b553198a042d2432bb.js",
    "revision": "7bd83d39a9514b3775554cb65573d312"
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
    "url": "/_nuxt/pages_category__slug_index.eaacf4fd68b8fc46e77f.js",
    "revision": "ddb67cf97af195de09a162c4119493e7"
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
    "url": "/_nuxt/pages_index.dac72bfadef92705fd6f.js",
    "revision": "fef45ecca53e464de7ca747c8fb2f3dd"
  },
  {
    "url": "/_nuxt/pages_social_index.54459e5cf84830786ae0.js",
    "revision": "ece5e03fd7e98c27d682dd620b85e368"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day__slug_index.2655cbc21bb144d35a95.js",
    "revision": "2475759226d2e71fd24fc836a076b733"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day_index.3e7b494d4e358fea6373.js",
    "revision": "fa721e182df8d6956b88031d3eff6854"
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





