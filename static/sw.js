importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "wp-vue-ssr",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.e64265892b08697ebcdc.js",
    "revision": "22d679f5f84a4d4433ec41b55536ca00"
  },
  {
    "url": "/_nuxt/layouts_default.28e86daa1e3403d03a11.js",
    "revision": "264c4c07bb91c825ed9b91ee592704d7"
  },
  {
    "url": "/_nuxt/manifest.0b4b0662150a59a3eda6.js",
    "revision": "9c80e0a103095dd200ae304f9e26a78a"
  },
  {
    "url": "/_nuxt/pages__slug_index.8c8b0cb4d29108d44f61.js",
    "revision": "01a113e3e4bdbecacd0708eb0b22b0fc"
  },
  {
    "url": "/_nuxt/pages_about_index.5f3db67653cf9ce15c22.js",
    "revision": "1b2236d8b2a0d0fe5dad1d75c58953ce"
  },
  {
    "url": "/_nuxt/pages_category__slug_index.6ef2190dd15ee24be4c6.js",
    "revision": "55b0b85ce9b3e9822bcd765f3ee10fe2"
  },
  {
    "url": "/_nuxt/pages_category_index.8bfb965dd4cb8098fe23.js",
    "revision": "70f755e499ed33986dbde1aec15956fc"
  },
  {
    "url": "/_nuxt/pages_index.1e783564a49ab467ad17.js",
    "revision": "54dcbf0ed85ecd6af607f09df5b9f7b4"
  },
  {
    "url": "/_nuxt/vendor.cd02535a33d68f968a0b.js",
    "revision": "eea82a30f7314ad6c301769946f4d032"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

