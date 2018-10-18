importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.64f4eae83e1f4c9a3506.js",
    "revision": "148589171f0bb0d5ff4c449e971fc6b0"
  },
  {
    "url": "/_nuxt/layouts_default.fde60bb2b192a631ffec.js",
    "revision": "68d4cb6dc6a6739ff0f8960970cb2ccb"
  },
  {
    "url": "/_nuxt/manifest.811f0640a06999cefef3.js",
    "revision": "ebd8595892bd57e44a7e96b6a0881816"
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
    "url": "/_nuxt/pages_category__slug_index.2774a772db3411dc158e.js",
    "revision": "6c909f5a0475b2bd2a421b6f7e9d12fc"
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
    "url": "/_nuxt/pages_index.9df23d4c5a423617af2a.js",
    "revision": "a8378000e5318f9babb365058ce813a9"
  },
  {
    "url": "/_nuxt/pages_social_index.04d95090e70eb5890506.js",
    "revision": "8639c8f433dc6859d0ace40b8c9034ae"
  },
  {
    "url": "/_nuxt/pages_workout-library_index.c17068f34ad7da67955c.js",
    "revision": "4b3bdd13a1f4627fa67249a2652918c1"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day__slug_index.8e67633832e1ee750d46.js",
    "revision": "e5982f72886d17bf7d4d1489968ed38c"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day_index.fdb743e4b7348e9c6f23.js",
    "revision": "77002b4b7e2fc621bd8449b6ccd6363a"
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





