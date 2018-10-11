importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.c6b87c51f349583b23e9.js",
    "revision": "2a1d57cd9323b9d67ec8455517831512"
  },
  {
    "url": "/_nuxt/layouts_default.2c05ab08c806feb76881.js",
    "revision": "f78d5f7626783298fc852a40cceeb223"
  },
  {
    "url": "/_nuxt/manifest.320a8fd1e1fbb3cc2b50.js",
    "revision": "20a605846ef261abe30b5674232bfef3"
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
    "url": "/_nuxt/pages_category__slug_index.ef31e125f512b5703082.js",
    "revision": "156f7ea50e318d3ee5a8fc02a034d975"
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
    "url": "/_nuxt/pages_index.c444d550c609b045e1f3.js",
    "revision": "94883416d57e7ff3443679238d85a654"
  },
  {
    "url": "/_nuxt/pages_social_index.54459e5cf84830786ae0.js",
    "revision": "ece5e03fd7e98c27d682dd620b85e368"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day__slug_index.9398a264b9b57fca2a5c.js",
    "revision": "00e48a551cc98141a4523dde414170d6"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day_index.0404571f67eb00f3e714.js",
    "revision": "40345b98fe3ee848e2998a31825b261a"
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





