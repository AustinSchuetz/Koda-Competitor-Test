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
    "url": "/_nuxt/manifest.988956e0e1ec90802c33.js",
    "revision": "c169ae9cfaa017eef3c8b3765a9e05f8"
  },
  {
    "url": "/_nuxt/pages__slug_index.9f19ee3731e0a56c3c13.js",
    "revision": "b4d91359837d983bd930077a3875d774"
  },
  {
    "url": "/_nuxt/pages_about_index.fcfca93cf837090624ef.js",
    "revision": "22a34a0788810239d40bc7786b897764"
  },
  {
    "url": "/_nuxt/pages_category__slug_index.1fbf3e0b197487ab9d85.js",
    "revision": "5c33988b8a54ca7042dcef22d88bf6e2"
  },
  {
    "url": "/_nuxt/pages_category_index.d7ded41507481866fe89.js",
    "revision": "3fb7b0cb97228106783f4a66be5ba25c"
  },
  {
    "url": "/_nuxt/pages_index.0f3fefd7f4934e483405.js",
    "revision": "17ecb7907658f9b20d8dc10ac074cf7c"
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





