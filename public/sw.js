importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.f3722ee6e8ae2b430c18.js",
    "revision": "0fb412c4677d0d3af18367a423a3e060"
  },
  {
    "url": "/_nuxt/layouts_default.45653ad5c259973f990c.js",
    "revision": "d1b4bd5aec63b4f3fbcca510879a89bf"
  },
  {
    "url": "/_nuxt/manifest.f34ffe748fa41a85177c.js",
    "revision": "19de99238b292ac740b6a078c6e9df38"
  },
  {
    "url": "/_nuxt/pages__slug_index.f4e68f67e9a723502d59.js",
    "revision": "d020b69dc71c2e10bf53058e84f49206"
  },
  {
    "url": "/_nuxt/pages_about_index.bbd7ef43627d319581e0.js",
    "revision": "6f385a6b0e8f48866a802b2f34db3543"
  },
  {
    "url": "/_nuxt/pages_athlete-type_index.1bce83a316bac2f17845.js",
    "revision": "e6e0b85049ff6037936b2a89443b6ed9"
  },
  {
    "url": "/_nuxt/pages_category__slug_index.46ea6ffa0e2c35657137.js",
    "revision": "ab1edf6bc611c74574e821cb05a62988"
  },
  {
    "url": "/_nuxt/pages_category_index.8193e70b85a4f731fe55.js",
    "revision": "358a96966bc6b7b0fac37580b58faaec"
  },
  {
    "url": "/_nuxt/pages_community_index.a55c06b2c6b82f17f7b6.js",
    "revision": "39117fe9273d3c9af2dcef5a06035a72"
  },
  {
    "url": "/_nuxt/pages_index.956c8dbffaf0d9dc5787.js",
    "revision": "7a6ba9c48ff033b5e4be239a38b1efb8"
  },
  {
    "url": "/_nuxt/vendor.6c3109bd27315ad4df9b.js",
    "revision": "67a1e1f7deb1ea2d89b6c72463a46823"
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





