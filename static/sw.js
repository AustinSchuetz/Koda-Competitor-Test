importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.ec1b53d22b004e107136.js",
    "revision": "d0de46bf5bf299fc85e0fb4096aa764e"
  },
  {
    "url": "/_nuxt/layouts_default.0643f3f884e86995361b.js",
    "revision": "c1decca3e742205f2196e8d4e024f277"
  },
  {
    "url": "/_nuxt/manifest.4a4c0f44b780ceec30d9.js",
    "revision": "fa3bf1a1a0b7c8106cf47f42ddee852f"
  },
  {
    "url": "/_nuxt/pages__slug_index.f1474c9e26f4ac5bf207.js",
    "revision": "bfa80b147b063f4ac82fead3f04ecf4d"
  },
  {
    "url": "/_nuxt/pages_about_index.bc3374fe2b8f7adfc5a0.js",
    "revision": "21a236d85015f4f799b3c7e3e4ed08ed"
  },
  {
    "url": "/_nuxt/pages_category__slug_index.86aef599a3d89d6d60fd.js",
    "revision": "d3c0083e3fe6c7647163acd7b4046844"
  },
  {
    "url": "/_nuxt/pages_category_index.8193e70b85a4f731fe55.js",
    "revision": "358a96966bc6b7b0fac37580b58faaec"
  },
  {
    "url": "/_nuxt/pages_community_index.9f707734eb977ed18493.js",
    "revision": "ae5d98e0d4e0f62fa1b49dace8ffe1dc"
  },
  {
    "url": "/_nuxt/pages_index.669dd192cd6835e74a0a.js",
    "revision": "9371a472667642de683c2a0d396693bc"
  },
  {
    "url": "/_nuxt/vendor.109d0fbac002b749f5db.js",
    "revision": "fb04da1cc23ebba01ed9b4916a6141a1"
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





