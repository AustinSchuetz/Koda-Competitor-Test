importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.f994911f4224429126d8.js",
    "revision": "3cff0b4a64dd688427af032ae23b047c"
  },
  {
    "url": "/_nuxt/layouts_default.c0b2f9c4eab55a0f2fcf.js",
    "revision": "bf5bd147621c23accf058bcbba8e8dac"
  },
  {
    "url": "/_nuxt/manifest.b053e1644d3fde02a6fc.js",
    "revision": "40a10918bbbff75a0ccab5a8ae7ba138"
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
    "url": "/_nuxt/pages_index.9d9c574dea030793737c.js",
    "revision": "53d9a6f227b8f10e89bffa6b2bf7abf7"
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
    "url": "/_nuxt/pages_workout-of-the-day__slug_index.ad3f421926dd7c6adb7b.js",
    "revision": "b509e41da8996af501e0f0e660ef1a33"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day_index.d7ad7b87487ee0d29bce.js",
    "revision": "169309307a6384313310b97ff6ba0af0"
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





