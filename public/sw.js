importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.858b5de1ca2112c9d6b7.js",
    "revision": "182a35768cf4cbf11276699fb4c19dee"
  },
  {
    "url": "/_nuxt/layouts_default.0075fddf2c960924ea3c.js",
    "revision": "d74b9b9127ba9366c1186a470bf071f2"
  },
  {
    "url": "/_nuxt/manifest.a0565ebde1e9199b79b4.js",
    "revision": "cfff87bfbcd34907e8a904b8f6065deb"
  },
  {
    "url": "/_nuxt/pages_about_index.a98a32ea15152374c0c5.js",
    "revision": "29d7b30a79aac49fcb8301e199ae0ce6"
  },
  {
    "url": "/_nuxt/pages_athlete-type_index.dd0d7852d269073ef191.js",
    "revision": "9fae526f3a95665051b634fb59b32325"
  },
  {
    "url": "/_nuxt/pages_blog_index.32599c2a47896af29f3d.js",
    "revision": "efb17b699fdf621d3923b83049fb67d3"
  },
  {
    "url": "/_nuxt/pages_category__slug_index.4c83e54b4b5e650738b2.js",
    "revision": "fa4d13ec185175afe4c802808f41f31e"
  },
  {
    "url": "/_nuxt/pages_category_index.adb7ce82a05707832344.js",
    "revision": "0db14f346ba9304785df345ef2b80c18"
  },
  {
    "url": "/_nuxt/pages_coaches_index.14c83f568b115e5a1449.js",
    "revision": "c8ddcf0f29e33df268ea798baa3ed251"
  },
  {
    "url": "/_nuxt/pages_community_index.54bec7accda7c5cf1de6.js",
    "revision": "beb27e46cc2dd7b5c14209bd1e1abcf2"
  },
  {
    "url": "/_nuxt/pages_index.a4bd70345f7cab1f6825.js",
    "revision": "525753986eeac3d976c39fbde7474096"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day__slug_index.aba3ac28854ad3dcc7d8.js",
    "revision": "4b53f39997b87fa0f2e52eb46e5b8036"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day_index.b93d358b9403c16b931b.js",
    "revision": "4eecf7005198499c4112f8ce4b45dfd1"
  },
  {
    "url": "/_nuxt/vendor.4df75a20b7c614a91af7.js",
    "revision": "3475a113ef684b745062dea2aef7d5bc"
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





