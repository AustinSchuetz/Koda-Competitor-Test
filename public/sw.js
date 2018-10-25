importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.ffb7a85ed305cac21319.js",
    "revision": "12e0e6ed78394351d26b276085e2e3a7"
  },
  {
    "url": "/_nuxt/layouts_default.b4ae2e935ea2d5d05cf1.js",
    "revision": "802380999ab9143150b56f1bdf884155"
  },
  {
    "url": "/_nuxt/manifest.cfbe1fb1370ba2e74e93.js",
    "revision": "83ecf54ec6863105252c6a160bdb7344"
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
    "url": "/_nuxt/pages_index.aa10363156148aec0da7.js",
    "revision": "9ae45393610946122578a78f0416a873"
  },
  {
    "url": "/_nuxt/pages_social_index.04d95090e70eb5890506.js",
    "revision": "8639c8f433dc6859d0ace40b8c9034ae"
  },
  {
    "url": "/_nuxt/pages_workout-library_index.2692316148a9063d7389.js",
    "revision": "440156183b2d0161f8f3147e14ed553c"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day__slug_index.a5d8a617286032704d9c.js",
    "revision": "ddabe6a13b76be0c9ce2647794658c64"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day_index.139f1e5751916d19139a.js",
    "revision": "46df4ab283a589af61920b783c394666"
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





