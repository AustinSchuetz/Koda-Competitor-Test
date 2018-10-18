importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.64f4eae83e1f4c9a3506.js",
    "revision": "148589171f0bb0d5ff4c449e971fc6b0"
  },
  {
    "url": "/_nuxt/layouts_default.3feeb658bcca774cf963.js",
    "revision": "57c7e844cc00aca0f1e786c399533d6f"
  },
  {
    "url": "/_nuxt/manifest.9264d4e87c3d96718f8f.js",
    "revision": "f344dc7fd4878bfc745966a66093d0df"
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
    "url": "/_nuxt/pages_category__slug_index.7c3359153f4d55ef3d5d.js",
    "revision": "dcf488bc299c8eeb52a186ab1a8e826f"
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
    "url": "/_nuxt/pages_index.9bb0c49e3227e46a62bc.js",
    "revision": "9c2e2952ccad865865a3d7014f60a7bc"
  },
  {
    "url": "/_nuxt/pages_social_index.04d95090e70eb5890506.js",
    "revision": "8639c8f433dc6859d0ace40b8c9034ae"
  },
  {
    "url": "/_nuxt/pages_workout-library_index.b4885d1136dad0732ce4.js",
    "revision": "316676fc6f768a3620e96da7f107afce"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day__slug_index.66816d7bfce365a48830.js",
    "revision": "a5405a16063c9e950faa4f80cad28e28"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day_index.3c0c4035322e9a0c3e32.js",
    "revision": "9ca31f75d0af466ab9795a0d68818c72"
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





