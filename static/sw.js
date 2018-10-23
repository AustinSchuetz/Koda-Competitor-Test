importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.f994911f4224429126d8.js",
    "revision": "3cff0b4a64dd688427af032ae23b047c"
  },
  {
    "url": "/_nuxt/layouts_default.88ad3d91dd2f4391540e.js",
    "revision": "e8dc2172b208ba8c8ca8ee22c312612e"
  },
  {
    "url": "/_nuxt/manifest.26371f7b696e42604db2.js",
    "revision": "8d4040b2da3e181e540c2970ff5244c3"
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
    "url": "/_nuxt/pages_index.ecc6075dbb8dd1f9104b.js",
    "revision": "abbe46fb2b689a4e1f5c973514844274"
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
    "url": "/_nuxt/pages_workout-of-the-day__slug_index.32683bb571f35f4c3823.js",
    "revision": "eeee7fda1f54ef3350ca2d14cabf6467"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day_index.93315b8527b10e2ce011.js",
    "revision": "31d6675acb6cbbc7870cec02a8e2ba0b"
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





