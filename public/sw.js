importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.c6b87c51f349583b23e9.js",
    "revision": "2a1d57cd9323b9d67ec8455517831512"
  },
  {
    "url": "/_nuxt/layouts_default.05e0ad7028d0efd89b42.js",
    "revision": "92982d2746f685623ca3100b59a70b20"
  },
  {
    "url": "/_nuxt/manifest.7bc038e94aabe67f08c4.js",
    "revision": "73724cdc26a9b1907ca050807f2a1639"
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
    "url": "/_nuxt/pages_index.9d5ee87b252e30196ea9.js",
    "revision": "b7df4dd011363e74933d41d216c8b4df"
  },
  {
    "url": "/_nuxt/pages_social_index.54459e5cf84830786ae0.js",
    "revision": "ece5e03fd7e98c27d682dd620b85e368"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day__slug_index.253defeda521ab47e58d.js",
    "revision": "9514abf15970cf2d2a1f2221174b1472"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day_index.5138217c3363e17c0281.js",
    "revision": "9e2221ce20fd2a6f5656ddd911095d65"
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





