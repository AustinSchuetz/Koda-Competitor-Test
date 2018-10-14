importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.a95c635945bead1ef368.js",
    "revision": "7043b9f25ddb7dcecfdb25fc0013c2d1"
  },
  {
    "url": "/_nuxt/layouts_default.dd4d588ee201187f43e4.js",
    "revision": "f14585d4a0b739257d68de731b7561c0"
  },
  {
    "url": "/_nuxt/manifest.e1b9ef1646328d328756.js",
    "revision": "b855ab7530231906e27e454ce9859b19"
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
    "url": "/_nuxt/pages_blog__slug_index.475cd419c67dc28eafc7.js",
    "revision": "a8b780902a290353500d580b3ec9ffe3"
  },
  {
    "url": "/_nuxt/pages_blog_index.ce00fec8a0da41b94bdc.js",
    "revision": "ad5f51e8b70a217efcf5298d74cf3b55"
  },
  {
    "url": "/_nuxt/pages_category__slug_index.08e67f4190d043cf00dc.js",
    "revision": "dfeacb953302fa4fc6e690b4a0e817b6"
  },
  {
    "url": "/_nuxt/pages_category_index.adb7ce82a05707832344.js",
    "revision": "0db14f346ba9304785df345ef2b80c18"
  },
  {
    "url": "/_nuxt/pages_coaches_index.71655daba0b5adff1487.js",
    "revision": "5cebc710a47877857dcab9aad2d62d97"
  },
  {
    "url": "/_nuxt/pages_index.ccdccb97c8b1309e71e5.js",
    "revision": "641db08846868be8c6a09ab18fa9d560"
  },
  {
    "url": "/_nuxt/pages_social_index.83eeaf6c78ef6713fd63.js",
    "revision": "0f10117f8b2d797e0e5d435627de6ad0"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day__slug_index.d8a709f71ffc30837f9c.js",
    "revision": "98ba75651176577a5a9a347717d20c3f"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day_index.669b2cc0251847560aac.js",
    "revision": "7aa1371f80a08f1727487059810a558c"
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





