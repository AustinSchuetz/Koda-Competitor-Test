importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.a95c635945bead1ef368.js",
    "revision": "7043b9f25ddb7dcecfdb25fc0013c2d1"
  },
  {
    "url": "/_nuxt/layouts_default.aef0216667111acc7632.js",
    "revision": "1eb01bc149a817b6ef60781ada3eed07"
  },
  {
    "url": "/_nuxt/manifest.0c8237f6fc8d4d1811d7.js",
    "revision": "d213f44b3e19f9629e9b584ded54a7c5"
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
    "url": "/_nuxt/pages_category__slug_index.8b1050e2a93fb4252b77.js",
    "revision": "1a1ffd906a5c1a8ac5b2c8256dce976b"
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
    "url": "/_nuxt/pages_index.f8209185da4c2e7a5242.js",
    "revision": "d1384b80812991784a99ca990392bbb7"
  },
  {
    "url": "/_nuxt/pages_social_index.83eeaf6c78ef6713fd63.js",
    "revision": "0f10117f8b2d797e0e5d435627de6ad0"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day__slug_index.4a3af228c71301533b33.js",
    "revision": "7e0caf8cf8215d59db50a8d335930ccb"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day_index.29d75bab5c6e78e8569b.js",
    "revision": "b799120eaf5a8b7810b99ab084990d78"
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





