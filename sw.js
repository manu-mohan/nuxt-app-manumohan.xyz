importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1974c821737e00632ba9.js",
    "revision": "2fed46f1b731ca65cab73dcfa23455e1"
  },
  {
    "url": "/_nuxt/70bf8aa54d78067562ff.js",
    "revision": "e623de97deb7e1bc8462fe2d9f16e465"
  },
  {
    "url": "/_nuxt/7b8b243b60f4b8c788a8.js",
    "revision": "6eaebacf79272e8b9e1697d28e5bf742"
  },
  {
    "url": "/_nuxt/8afba96cafa24d35d25f.js",
    "revision": "4ac013e27c411df1175925a4650704ed"
  },
  {
    "url": "/_nuxt/90e0801e03d4a243fa9a.js",
    "revision": "810109388657f2a21855cd3aa416ffe6"
  },
  {
    "url": "/_nuxt/92e4d53e23b6c4525f3f.js",
    "revision": "6832a75c9251a93cd35d1d7a023e37e1"
  },
  {
    "url": "/_nuxt/faf6896ddc1f2e651ff8.js",
    "revision": "bcf4af4614563cad5c71ea2b93caeb68"
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
