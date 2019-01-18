importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.ce9fb204778c3c244c8a.js",
    "revision": "e759b8e442edb8aef1580ee8dccfd53c"
  },
  {
    "url": "/_nuxt/layouts_default.aa98e520b2a2c9c9a6d0.js",
    "revision": "bd0c34206a9dc547edd679a23d83e379"
  },
  {
    "url": "/_nuxt/layouts_protected.b32104aadf78f108f745.js",
    "revision": "8d29573e25e20d36d8158e866a2bbdf6"
  },
  {
    "url": "/_nuxt/manifest.333ebc7022bd8ac5e2f4.js",
    "revision": "8e9d2008a2df7adab3d068977c220105"
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
    "url": "/_nuxt/pages_blog__slug_index.effcef41522311bc1b48.js",
    "revision": "7b6b0ca4c331ce254dc5a23f7b5016c3"
  },
  {
    "url": "/_nuxt/pages_blog_index.2574236cd1164c4082ad.js",
    "revision": "d6fcb78866aeb43525e30cdc6a3c32aa"
  },
  {
    "url": "/_nuxt/pages_category__slug_index.e8e0b07b5b4b3335c8bd.js",
    "revision": "2ed2e736c2b3b8e450ae04deace9c72d"
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
    "url": "/_nuxt/pages_index.c00fccfe1417648737d6.js",
    "revision": "3ecb935966386c7b5d1ab33cfc280ca6"
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
    "url": "/_nuxt/pages_workout-of-the-day__slug_index.ecf0c9ea5837c4ccd32c.js",
    "revision": "21cb2f3c9da51912f21cbde00625dc54"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day_index.7e5af15ca9e3fcf2e040.js",
    "revision": "3681b5ee8cb08e9201248934307f897c"
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





