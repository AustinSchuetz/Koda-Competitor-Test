importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.64f4eae83e1f4c9a3506.js",
    "revision": "148589171f0bb0d5ff4c449e971fc6b0"
  },
  {
    "url": "/_nuxt/layouts_default.b00ea32261ad55e22fde.js",
    "revision": "4f056db0c7f71e7b05756f0aa9ca575c"
  },
  {
    "url": "/_nuxt/manifest.c8965f8ad05bd435f79a.js",
    "revision": "020df7adee65dd7354b0e5d781f4b020"
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
    "url": "/_nuxt/pages_category__slug_index.c365b23ff78a0e5b83a7.js",
    "revision": "ceeeb421709e68c28f75643d8129cc62"
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
    "url": "/_nuxt/pages_index.d15e42e7a6fed659aebc.js",
    "revision": "02bfa061a0ea8a067d3592e63d10d730"
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
    "url": "/_nuxt/pages_workout-of-the-day__slug_index.955b236a7dd72fdec6dd.js",
    "revision": "091d28e0e23126ee0fbe96657fb412b4"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day_index.9d2b210bc3a36071d163.js",
    "revision": "067419eb0c53610e78d05fef053c5dd2"
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





