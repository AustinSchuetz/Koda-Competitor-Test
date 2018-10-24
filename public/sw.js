importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.d149deb74368ed623171.js",
    "revision": "10bfa19422c6f22c40cfa1dd3d1f9618"
  },
  {
    "url": "/_nuxt/layouts_default.832e238556f2ff5ffcb7.js",
    "revision": "52605e30969c4dc5db0dc6e3ff897f32"
  },
  {
    "url": "/_nuxt/manifest.7716fed8858024626877.js",
    "revision": "55d985f20d7f0b188c828e7249741c41"
  },
  {
    "url": "/_nuxt/pages_about_index.ad11fed0da483696bf3b.js",
    "revision": "c8c7c066dd0413af8242467eac81681c"
  },
  {
    "url": "/_nuxt/pages_athlete-type_index.23dd51d4f9a6c1ffd959.js",
    "revision": "a9fccb427e4cfb96879ce90f2f4ec578"
  },
  {
    "url": "/_nuxt/pages_blog__slug_index.784c9fd5927f33b70d71.js",
    "revision": "fb1d38d0f8722311a47f680aac28c20c"
  },
  {
    "url": "/_nuxt/pages_blog_index.efcae2009c2716fb123a.js",
    "revision": "484db9e3a72dd16e6711600ce0b818de"
  },
  {
    "url": "/_nuxt/pages_category__slug_index.ef1ef401428d4c334805.js",
    "revision": "daba059ecd056d1865373fe5386fe078"
  },
  {
    "url": "/_nuxt/pages_category_index.63b346db52216b5c82db.js",
    "revision": "49884e4dcdaebfffc5d1f3bd6f0ab6e8"
  },
  {
    "url": "/_nuxt/pages_coaches_index.8a3f602cae7c135bf116.js",
    "revision": "e054019ee739d70ff86bb47ff7be4b90"
  },
  {
    "url": "/_nuxt/pages_index.0b6c3e3be814a24e090d.js",
    "revision": "438303d7fc55977d33b0efbb86fd039c"
  },
  {
    "url": "/_nuxt/pages_social_index.04d95090e70eb5890506.js",
    "revision": "8639c8f433dc6859d0ace40b8c9034ae"
  },
  {
    "url": "/_nuxt/pages_workout-library_index.d5ad43f23616ca884c71.js",
    "revision": "fd890d42500ce59d97f4cf9432ff885c"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day__slug_index.3ffd4eb787d02632edac.js",
    "revision": "7b9297d6b1adde94cdfb06acaa1e63e6"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day_index.6faeb37a14bafce67ffb.js",
    "revision": "ca1990bdcb45594a31a7ad3210663844"
  },
  {
    "url": "/_nuxt/vendor.2fdb23a7cde4baf94924.js",
    "revision": "35d53939e2d34b8d5f20850528d07ae1"
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





