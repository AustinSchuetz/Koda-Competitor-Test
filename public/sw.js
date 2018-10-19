importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.64f4eae83e1f4c9a3506.js",
    "revision": "148589171f0bb0d5ff4c449e971fc6b0"
  },
  {
    "url": "/_nuxt/layouts_default.fe540c8ca22c6e8bd864.js",
    "revision": "bbafcaa5a19a7e95fabd32a39512eb85"
  },
  {
    "url": "/_nuxt/manifest.03f8b6a37fce1dd1a1fd.js",
    "revision": "2c685a739d6a6316c4301b45a247a56c"
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
    "url": "/_nuxt/pages_category__slug_index.94e0ffa54c2656094fbd.js",
    "revision": "a80573f818ccc740731d3d465167bddd"
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
    "url": "/_nuxt/pages_index.6654a8320454214e0a64.js",
    "revision": "b59e482cbc276d569f4660e733ffcdff"
  },
  {
    "url": "/_nuxt/pages_social_index.04d95090e70eb5890506.js",
    "revision": "8639c8f433dc6859d0ace40b8c9034ae"
  },
  {
    "url": "/_nuxt/pages_workout-library_index.ef8c571e2cae9d1ad1eb.js",
    "revision": "7cd67039b2ef2de3ca6a2136ad0c9a50"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day__slug_index.bd90500b73a5b3c4ec32.js",
    "revision": "53fb46dbc023a04841e8415905c037fe"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day_index.bc7fab1a33e0306f109a.js",
    "revision": "ef6df8709ac6b8bf0f6821b29f5581bb"
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





