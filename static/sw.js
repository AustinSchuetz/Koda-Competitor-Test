importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.3d069e0a69b0a7937c11.js",
    "revision": "bfbc20fcef195ddea25140285bb92d6f"
  },
  {
    "url": "/_nuxt/layouts_default.8a03a5b759e99484cffe.js",
    "revision": "ae9644666d6b83a2fc99fc2fd1dd8113"
  },
  {
    "url": "/_nuxt/manifest.ac92540f5e2ddc5574f4.js",
    "revision": "f6d2722986516393ae3882ae08784b6d"
  },
  {
    "url": "/_nuxt/pages_about_index.a98a32ea15152374c0c5.js",
    "revision": "29d7b30a79aac49fcb8301e199ae0ce6"
  },
  {
    "url": "/_nuxt/pages_athlete-type_index.dd0d7852d269073ef191.js",
    "revision": "9fae526f3a95665051b634fb59b32325"
  },
  {
    "url": "/_nuxt/pages_blog_index.32599c2a47896af29f3d.js",
    "revision": "efb17b699fdf621d3923b83049fb67d3"
  },
  {
    "url": "/_nuxt/pages_category__slug_index.6111ba7939bad4ba3ed1.js",
    "revision": "6c8f9d805c5985df620ca7f325ee66f4"
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
    "url": "/_nuxt/pages_index.3fb82fa6e32c231e8359.js",
    "revision": "a678e75e3001c0becc3d732b9b867d43"
  },
  {
    "url": "/_nuxt/pages_social_index.54459e5cf84830786ae0.js",
    "revision": "ece5e03fd7e98c27d682dd620b85e368"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day__slug_index.359df5c42b04dde50ddb.js",
    "revision": "0b97e69f1edce408e36ab4d6c78c87a3"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day_index.7fa39762813be521ee8a.js",
    "revision": "5e45cd7dc9f9fd74d2a097cca3fbcb5d"
  },
  {
    "url": "/_nuxt/vendor.611b91de01506180ae5f.js",
    "revision": "af531b9897c88ddd7d6745c82f02ee42"
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





