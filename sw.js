importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0a9122e01fc56f03ee82.js",
    "revision": "5a49e5a72677dea5797e4de86b7fb139"
  },
  {
    "url": "/_nuxt/231cf2ca52497e953f79.js",
    "revision": "73e2b366dc40faac6233bdd8fe2ff14c"
  },
  {
    "url": "/_nuxt/61b220a61f9895b60878.js",
    "revision": "e4c48284912b817a730981e070533f6f"
  },
  {
    "url": "/_nuxt/7660912e5d4ddaea5049.js",
    "revision": "5a5eecec30b2151e7b5b6b9ca0460ec1"
  },
  {
    "url": "/_nuxt/a588d837ea862e6f1756.js",
    "revision": "601d9ea8e78b858d4328824597d0bd5f"
  },
  {
    "url": "/_nuxt/dc659867accbb68f4883.js",
    "revision": "f28b5a7a5eb57c6a40050277a9468408"
  },
  {
    "url": "/_nuxt/f001d946a5884fe12677.js",
    "revision": "a0a0ea8084ceb49f5c43e906dd7b1ee5"
  }
], {
  "cacheId": "manumohan.xyz",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
