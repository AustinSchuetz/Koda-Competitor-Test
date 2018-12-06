importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.e15fbd99267ff7edcfd1.js",
    "revision": "6a25f9e3740e266f31a21f53297795ba"
  },
  {
    "url": "/_nuxt/layouts_default.307916738cc6832e91b3.js",
    "revision": "f3f46de4299c4c94e3f6f4c226933d4f"
  },
  {
    "url": "/_nuxt/layouts_protected.ed70ac2f0648166fb93f.js",
    "revision": "1ff3d240fe06a9a33de96d766d4d57f2"
  },
  {
    "url": "/_nuxt/manifest.81753d8463055a4e0a13.js",
    "revision": "42833755a5203d55a39780b5e72d38f2"
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
    "url": "/_nuxt/pages_blog__slug_index.10bbfb0c551da8427e49.js",
    "revision": "cd8350527bb1e0ca7897baa908f1a892"
  },
  {
    "url": "/_nuxt/pages_blog_index.98d2a9fa7a972e3ea20d.js",
    "revision": "96629737080bcb3d63266dfb9eb96afd"
  },
  {
    "url": "/_nuxt/pages_category__slug_index.4983919a070df43e9a29.js",
    "revision": "d60cf2fde9e08001ed493fc0c491f991"
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
    "url": "/_nuxt/pages_contact-us_index.9fb5e93fcd97d70cac67.js",
    "revision": "45e96a411ddb9e00eb0e9ab3322a9297"
  },
  {
    "url": "/_nuxt/pages_crossfit-gym-programming_index.211400bdf4be1f4552a0.js",
    "revision": "734382e53eb8d85d6b0c3edbe895edb0"
  },
  {
    "url": "/_nuxt/pages_index.eed7a54cb3808809fd86.js",
    "revision": "aa147e871b435bc470166c33664272a8"
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
    "url": "/_nuxt/pages_sign-up_index.1d9d466c0201cd4aa9ff.js",
    "revision": "27d4e691f9df8ec8961351f66a868b7f"
  },
  {
    "url": "/_nuxt/pages_social_index.db518a19fee16bb90558.js",
    "revision": "6e492b4990be82eed7714223f2909624"
  },
  {
    "url": "/_nuxt/pages_workout-library_index.7af80f1ef6b9cd024b6a.js",
    "revision": "4bf1cb5c4550cc8f09175f66939bf07a"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day__slug_index.ac0ffa3ad1454b8c8578.js",
    "revision": "e132184a6b51dfd16234bc2680685600"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day_index.0a88849b68b516651320.js",
    "revision": "618a391dbdd6be9907bac8de9ea59395"
  },
  {
    "url": "/_nuxt/vendor.80c1badebb3778417935.js",
    "revision": "6aaaf7679fe225c39c0ade287615378c"
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





