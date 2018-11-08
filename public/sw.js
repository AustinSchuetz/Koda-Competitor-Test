importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.4c0932d7e666959cd68d.js",
    "revision": "c39908483078624304e16aace22134a0"
  },
  {
    "url": "/_nuxt/layouts_default.1c5377a9d05adc43d1d9.js",
    "revision": "268346bfccad4a07c75e2a83c2f0c437"
  },
  {
    "url": "/_nuxt/layouts_protected.602899ba4935f283118d.js",
    "revision": "ccac08d9ef8e0c4922bc4dbd80cc07f4"
  },
  {
    "url": "/_nuxt/manifest.fa8d6f588c2f16da3030.js",
    "revision": "fac332c3134921b9466ba94fd981439e"
  },
  {
    "url": "/_nuxt/pages_about_index.60aec8e0d5740962424a.js",
    "revision": "182867a119a25d078080a22a8d64bb75"
  },
  {
    "url": "/_nuxt/pages_athlete-type_index.41f0b0b64eb9c598f038.js",
    "revision": "44573e17254db9ded58b1ac0aa01676e"
  },
  {
    "url": "/_nuxt/pages_blog__slug_index.5fb2ac264e296a2c6b13.js",
    "revision": "f2b97d635fe79bdf6691364cb7535481"
  },
  {
    "url": "/_nuxt/pages_blog_index.6c1afac67561aaeedf34.js",
    "revision": "37ec8c3e7a1eeccdafc82ff3db4c1276"
  },
  {
    "url": "/_nuxt/pages_category__slug_index.97d4fe872676f3ae8717.js",
    "revision": "33a2ac34e5c4e3f81f5d74dcfaf04ffe"
  },
  {
    "url": "/_nuxt/pages_category_index.75a5a9cb110a7c81ff0e.js",
    "revision": "82f78df72076025500abbea54b44edee"
  },
  {
    "url": "/_nuxt/pages_coaches_index.f4c5744a9b0b1d0277c2.js",
    "revision": "733351738ea2fa270058e0c6d8ebc715"
  },
  {
    "url": "/_nuxt/pages_index.431e4697532609761cf0.js",
    "revision": "8d0bb41d85e28c6afe82250a1857534f"
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
    "url": "/_nuxt/pages_sign-up_index.0c5d958b400752a9ceb3.js",
    "revision": "d682da6677735838c00fa7f0e7150f47"
  },
  {
    "url": "/_nuxt/pages_social_index.db518a19fee16bb90558.js",
    "revision": "6e492b4990be82eed7714223f2909624"
  },
  {
    "url": "/_nuxt/pages_workout-library_index.f1d89c13ddba3607bff4.js",
    "revision": "8820ca50980f315e122519d524ab144c"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day__slug_index.2ea35020e03cb43aad13.js",
    "revision": "4a3de93b4a923a67c3d5f3f79f67d773"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day_index.f995afd57f0db97090e8.js",
    "revision": "32e9816abe8a2fc21f5640584d68efbc"
  },
  {
    "url": "/_nuxt/vendor.f247eb9b3bd0e4265b7a.js",
    "revision": "bb9b75777313d267ee071c83d8455045"
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





