importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.1ad49ac01ac488b4f0dd.js",
    "revision": "74591e97d7018bf8efb29272fa3cd5ea"
  },
  {
    "url": "/_nuxt/layouts_default.23b2413aa0c7844cd54c.js",
    "revision": "3f592f148a7f8cbd365e7ce4c5f89b23"
  },
  {
    "url": "/_nuxt/layouts_protected.6efea4799fac83107501.js",
    "revision": "fb730af9e34fd962f114de08ed5c4b57"
  },
  {
    "url": "/_nuxt/manifest.83cdaa1b3c09d81a9260.js",
    "revision": "a859e9a4ce62047ce0814fd288ce75bb"
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
    "url": "/_nuxt/pages_category__slug_index.269c0cca063295d3608f.js",
    "revision": "8f5c1b51c322674db3ad2bdbcabdf81a"
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
    "url": "/_nuxt/pages_index.6ce41f0bebf25f757a14.js",
    "revision": "65babc644db06675ae2afce6843ea966"
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
    "url": "/_nuxt/pages_social_index.8f75228539903c8f163b.js",
    "revision": "4d824456b5a389ae9928270ab48c62aa"
  },
  {
    "url": "/_nuxt/pages_workout-library_index.bc0bf113bbd0a0d3b697.js",
    "revision": "9a0887ae7a5dc24d5779ecb332f09d66"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day__slug_index.b222b9a827e26514fbde.js",
    "revision": "153dcce535c885630772dd2c421a8e52"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day_index.a33eab3fd9c33dd1075a.js",
    "revision": "1d4cf19549561e9691865e438144e3d5"
  },
  {
    "url": "/_nuxt/vendor.b024d7971e89bf3875c2.js",
    "revision": "c9f19d7561f9451c2a730f4d10168d36"
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





