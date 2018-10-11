importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.c6b87c51f349583b23e9.js",
    "revision": "2a1d57cd9323b9d67ec8455517831512"
  },
  {
    "url": "/_nuxt/layouts_default.7a2b70c9e1297a3638c6.js",
    "revision": "19068d146c29a53b0e45934ad83a9718"
  },
  {
    "url": "/_nuxt/manifest.76b327f9f3b98f097b4f.js",
    "revision": "6478a0715734fce1ebdf85460a652c34"
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
    "url": "/_nuxt/pages_category__slug_index.d39d958c39271eca6e84.js",
    "revision": "60816cf41930ffe94df817a9a9d2aa16"
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
    "url": "/_nuxt/pages_index.e203147c9f1233d40f2a.js",
    "revision": "2897631113a1a47e01d230128c9896e0"
  },
  {
    "url": "/_nuxt/pages_social_index.54459e5cf84830786ae0.js",
    "revision": "ece5e03fd7e98c27d682dd620b85e368"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day__slug_index.96720194d97c2c8efc7d.js",
    "revision": "723bc405cd0bf7d5a65e25e8497f9125"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day_index.dbfef8e98cde746a592f.js",
    "revision": "05b9db48e89f012da50d7b1ef52aedce"
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





