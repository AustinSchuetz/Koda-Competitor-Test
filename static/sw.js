importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.ce9fb204778c3c244c8a.js",
    "revision": "e759b8e442edb8aef1580ee8dccfd53c"
  },
  {
    "url": "/_nuxt/layouts_default.491588aa59536880ab74.js",
    "revision": "2ced0dd986431df62fcaea02a55c8d2d"
  },
  {
    "url": "/_nuxt/layouts_protected.ccfbf99bff96fb9963fe.js",
    "revision": "fdf2810792cdb15e0c22e3853c527d66"
  },
  {
    "url": "/_nuxt/manifest.b2ea37c205366e9785f9.js",
    "revision": "f8e15693f750a73663679f5677e61070"
  },
  {
    "url": "/_nuxt/pages_about_index.f9350afc0b15e8635dd2.js",
    "revision": "edc55b03ebdf1620b29fd91fdab309a5"
  },
  {
    "url": "/_nuxt/pages_athlete-type_index.598801813fdc6f5a2c4a.js",
    "revision": "2603656aa5f7488ae96d691c3726cf98"
  },
  {
    "url": "/_nuxt/pages_blog__slug_index.09a58c059d19170a5c78.js",
    "revision": "a00e28928d414a6051ca71b545fd2a50"
  },
  {
    "url": "/_nuxt/pages_blog_index.98d2a9fa7a972e3ea20d.js",
    "revision": "96629737080bcb3d63266dfb9eb96afd"
  },
  {
    "url": "/_nuxt/pages_category__slug_index.6f0da73b1709507748f1.js",
    "revision": "89ce32911b4ce7a799a0467bfd3e3f98"
  },
  {
    "url": "/_nuxt/pages_category_index.650494002cf40fd14f8a.js",
    "revision": "6880db6588e32914956ecaccdffc3c18"
  },
  {
    "url": "/_nuxt/pages_coaches_index.9d0d9be12ae5e78a852c.js",
    "revision": "73da7c771fa3fdb8654057f218e13a8c"
  },
  {
    "url": "/_nuxt/pages_contact-us_index.ef4f13c87c4899a9c937.js",
    "revision": "fa9c20672e38401f273f45a43de64b83"
  },
  {
    "url": "/_nuxt/pages_crossfit-gym-programming_index.211400bdf4be1f4552a0.js",
    "revision": "734382e53eb8d85d6b0c3edbe895edb0"
  },
  {
    "url": "/_nuxt/pages_index.2b8d924720c4f60b99d5.js",
    "revision": "d7577e2e57226c51f55d8e1e1cbfe678"
  },
  {
    "url": "/_nuxt/pages_individual-crossfit-programming_index.eaaec2f95831a26dabf3.js",
    "revision": "645459d04f7560eefcf4c8f5bbe4ab11"
  },
  {
    "url": "/_nuxt/pages_login_index.687a3bfa1649dcf3b88c.js",
    "revision": "7f7e206094c89c894f83a4664d678484"
  },
  {
    "url": "/_nuxt/pages_profile__uid_index.61e0d31f591be80ff99e.js",
    "revision": "5b39b330917cbf13f07d12a925c674fc"
  },
  {
    "url": "/_nuxt/pages_profile_index.9625d15bf787cc3baac3.js",
    "revision": "845f92931c177693a5f703ba057e6856"
  },
  {
    "url": "/_nuxt/pages_protected_index.0ec3cdfb94e2ea4b5201.js",
    "revision": "480a7b772f2f22d9ed5961add67118ca"
  },
  {
    "url": "/_nuxt/pages_sign-up_index.722ffe260bcb85c40810.js",
    "revision": "f3b9e10e0e8069b41dd8d7d0cbb40493"
  },
  {
    "url": "/_nuxt/pages_social_index.027dc298a5c60f55ea5b.js",
    "revision": "4d824456b5a389ae9928270ab48c62aa"
  },
  {
    "url": "/_nuxt/pages_workout-library_index.7af80f1ef6b9cd024b6a.js",
    "revision": "4bf1cb5c4550cc8f09175f66939bf07a"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day__slug_index.022bca0b22606f1d9089.js",
    "revision": "1259c81cef72aabe32d193e040c73097"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day_index.99b7ef8b91f49a4b0543.js",
    "revision": "64ddd486e2c4edc658c5095bcfc0674c"
  },
  {
    "url": "/_nuxt/vendor.51d7acee166b648e5751.js",
    "revision": "0d2c17b4a0db08e232a92d021e7ec695"
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





