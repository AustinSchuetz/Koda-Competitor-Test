importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.05e3d861e1680a6aca89.js",
    "revision": "4b023a6ed39dbadfab74146ba9f9aa4c"
  },
  {
    "url": "/_nuxt/layouts_default.0643f3f884e86995361b.js",
    "revision": "c1decca3e742205f2196e8d4e024f277"
  },
  {
    "url": "/_nuxt/manifest.988a6be8dd8974d51d97.js",
    "revision": "719eb211165d04bec9ef3f3e9cdb760e"
  },
  {
    "url": "/_nuxt/pages__slug_index.50d1e8502b49e4a004ca.js",
    "revision": "3bca74db38ab8f7548879013d6d41c0e"
  },
  {
    "url": "/_nuxt/pages_about_index.fcfca93cf837090624ef.js",
    "revision": "22a34a0788810239d40bc7786b897764"
  },
  {
    "url": "/_nuxt/pages_category__slug_index.85e8a75a8bf6d7a516df.js",
    "revision": "5536894fec291c192f4c3d5281a6cb03"
  },
  {
    "url": "/_nuxt/pages_category_index.d7ded41507481866fe89.js",
    "revision": "3fb7b0cb97228106783f4a66be5ba25c"
  },
  {
    "url": "/_nuxt/pages_index.f85fc33a2448a21e5cd2.js",
    "revision": "f9a2fed25292351cf590ed74e8575b8e"
  },
  {
    "url": "/_nuxt/vendor.829141c1f504b7189942.js",
    "revision": "d80a3fe891770cec0946bdcd71f204a1"
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





