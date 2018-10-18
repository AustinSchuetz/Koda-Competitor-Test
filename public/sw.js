importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.64f4eae83e1f4c9a3506.js",
    "revision": "148589171f0bb0d5ff4c449e971fc6b0"
  },
  {
    "url": "/_nuxt/layouts_default.42e157d10bd47611aa91.js",
    "revision": "86456725782f774e74daffca3f8ba696"
  },
  {
    "url": "/_nuxt/manifest.8950a872e9dfa0cde9f6.js",
    "revision": "fdc7ab7dd118900a394c853555c76fce"
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
    "url": "/_nuxt/pages_category__slug_index.cd3677fd5c6694289d3b.js",
    "revision": "9dd57627ad7f278b30612f4ac3738ad2"
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
    "url": "/_nuxt/pages_index.a4cce14f7f3f9b583256.js",
    "revision": "85392cbf0e5b32a4e4f90e8f52570d68"
  },
  {
    "url": "/_nuxt/pages_social_index.04d95090e70eb5890506.js",
    "revision": "8639c8f433dc6859d0ace40b8c9034ae"
  },
  {
    "url": "/_nuxt/pages_workout-library_index.f9249aaf70052c5122fb.js",
    "revision": "624b327d277da6d18d38c27d2dc50e7f"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day__slug_index.658ed51ce4229878eb7b.js",
    "revision": "d85f7c84df6b7046a01f30f6bbc37038"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day_index.2f8c06cd2866acbaa525.js",
    "revision": "93a508dddd65434458bffd37ef8ed9aa"
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





