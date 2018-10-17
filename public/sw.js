importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.3630ce2336b6a4bcc916.js",
    "revision": "3a025dac5a4ab81f7d53e879fbdb3089"
  },
  {
    "url": "/_nuxt/layouts_default.054ff70236f9b3005eed.js",
    "revision": "98225544a48c13f9d8f73a160540dc43"
  },
  {
    "url": "/_nuxt/manifest.a2c51c2061344d935a3c.js",
    "revision": "c63394b32b960bd2e39a9209e639c769"
  },
  {
    "url": "/_nuxt/pages_about_index.f515d9cb86fdc06cc051.js",
    "revision": "e7c00c34fbe3ad8298d8b54b6ccdb846"
  },
  {
    "url": "/_nuxt/pages_athlete-type_index.d1fb29e08adf0b6d0526.js",
    "revision": "eccdf7ccf3bdd882789b6982a2fa70a1"
  },
  {
    "url": "/_nuxt/pages_blog__slug_index.784c9fd5927f33b70d71.js",
    "revision": "fb1d38d0f8722311a47f680aac28c20c"
  },
  {
    "url": "/_nuxt/pages_blog_index.82ab2a4c993c1d0ed920.js",
    "revision": "fcbe52b41205100b8aca911f8c6dec64"
  },
  {
    "url": "/_nuxt/pages_category__slug_index.36d0c378af2446452cf6.js",
    "revision": "b8081dd1c5028d0df309023aeac9ff5c"
  },
  {
    "url": "/_nuxt/pages_category_index.f02beec099874ab0dad9.js",
    "revision": "abd4641ff04d5c3953dda62b60fa6a34"
  },
  {
    "url": "/_nuxt/pages_coaches_index.8a3f602cae7c135bf116.js",
    "revision": "e054019ee739d70ff86bb47ff7be4b90"
  },
  {
    "url": "/_nuxt/pages_index.1ac2752549b3c3838182.js",
    "revision": "07eb330f35848c30378badb0b7872158"
  },
  {
    "url": "/_nuxt/pages_social_index.5967d176e8ba244b0bf8.js",
    "revision": "6e67db66873f3d2584ab960a5575a8e6"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day__slug_index.3be8621f2cc5cac7cd22.js",
    "revision": "51188386ed4dbc3ce6d64151fac7496d"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day_index.a01487d058bc5cee17b7.js",
    "revision": "9a7c79095e7a164d23a92b50bd5915ed"
  },
  {
    "url": "/_nuxt/vendor.ff927f7e0661c2f9acee.js",
    "revision": "e50e493416b43db86bea9ab9120bcbf2"
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





