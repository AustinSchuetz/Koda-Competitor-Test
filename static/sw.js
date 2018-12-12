importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.ce9fb204778c3c244c8a.js",
    "revision": "e759b8e442edb8aef1580ee8dccfd53c"
  },
  {
    "url": "/_nuxt/layouts_default.baf6d8e6a6ba6c3bd766.js",
    "revision": "bfd4d35c7c570d05f70eeaf5636da130"
  },
  {
    "url": "/_nuxt/layouts_protected.8c5717939b9f3829dbbe.js",
    "revision": "6b924192e9fee59d0af662e651d03da8"
  },
  {
    "url": "/_nuxt/manifest.38e81a4d3c355f47e19e.js",
    "revision": "91f71ef6f53aa3778a2e57ed4e3f0b48"
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
    "url": "/_nuxt/pages_index.fbcbc637ca32c7a926ca.js",
    "revision": "853ffff8146fed0272694df3da9ab0f0"
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
    "url": "/_nuxt/pages_workout-of-the-day__slug_index.0dded68013693824c618.js",
    "revision": "a091208311ae027d530c8734621e559d"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day_index.b524b1a5230aa216cbc2.js",
    "revision": "b8824692efa44da782fca9b6ac857b04"
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





