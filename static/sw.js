importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.ffb7a85ed305cac21319.js",
    "revision": "12e0e6ed78394351d26b276085e2e3a7"
  },
  {
    "url": "/_nuxt/layouts_default.eb8c6ab3d8569e9b0d70.js",
    "revision": "905f03e319a577aeaea8b72a7c0072ba"
  },
  {
    "url": "/_nuxt/manifest.724131c5ef0b548b71cd.js",
    "revision": "453ecdd5dbaa1cfa2f04b558f4ad17f1"
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
    "url": "/_nuxt/pages_index.f8e9c1b29e9ab11874df.js",
    "revision": "3b1bc1600df0853f48142f1fa5764f61"
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
    "url": "/_nuxt/pages_workout-of-the-day__slug_index.cacd30efe9b0eb1a2dfd.js",
    "revision": "6d083d39f2dd97b849f6b9729cd82bbe"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day_index.d04a74ce059729ad662f.js",
    "revision": "84d4386fc7f5dfbfa60bf5f96d19e63a"
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





