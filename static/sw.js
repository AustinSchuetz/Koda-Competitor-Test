importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.3630ce2336b6a4bcc916.js",
    "revision": "3a025dac5a4ab81f7d53e879fbdb3089"
  },
  {
    "url": "/_nuxt/layouts_default.c31bf2ec648ed583e4f2.js",
    "revision": "73c642b80784b6449f416d414e94f16f"
  },
  {
    "url": "/_nuxt/manifest.77df01fae70d3c2d7eb0.js",
    "revision": "464437417bc2d4c843b4521ec5605aa5"
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
    "url": "/_nuxt/pages_blog__slug_index.784c9fd5927f33b70d71.js",
    "revision": "fb1d38d0f8722311a47f680aac28c20c"
  },
  {
    "url": "/_nuxt/pages_blog_index.82ab2a4c993c1d0ed920.js",
    "revision": "fcbe52b41205100b8aca911f8c6dec64"
  },
  {
    "url": "/_nuxt/pages_category__slug_index.36d0c378af2446452cf6.js",
    "revision": "b8081dd1c5028d0df309023aeac9ff5c"
  },
  {
    "url": "/_nuxt/pages_category_index.f02beec099874ab0dad9.js",
    "revision": "abd4641ff04d5c3953dda62b60fa6a34"
  },
  {
    "url": "/_nuxt/pages_coaches_index.9e1af4a38e10f0a76b07.js",
    "revision": "f349647b9df96585dbce3e64ec81514c"
  },
  {
    "url": "/_nuxt/pages_index.bc5cf2a6d2447adb75b3.js",
    "revision": "a819d0a215d6d58834b1337736e37f0f"
  },
  {
    "url": "/_nuxt/pages_social_index.5967d176e8ba244b0bf8.js",
    "revision": "6e67db66873f3d2584ab960a5575a8e6"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day__slug_index.fb6970c4fa4dd6814802.js",
    "revision": "4c9dc5fdbdde9ff5f15a555c78249ab2"
  },
  {
    "url": "/_nuxt/pages_workout-of-the-day_index.c59186b7a0acd352be6d.js",
    "revision": "a929f8b89ed987727e80a5a31af0e324"
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





