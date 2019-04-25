importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/2e94d7aae67b9c823655.js",
    "revision": "b501bf04004ce07f8ae541bb9ba1d5dd"
  },
  {
    "url": "/_nuxt/35ffcfd35e3dd3d35909.js",
    "revision": "92d3f50f968aacf59de05612c7c6c1c9"
  },
  {
    "url": "/_nuxt/a25792017d48e3c3a437.js",
    "revision": "7e2bff232d23d9df32173263d872047c"
  },
  {
    "url": "/_nuxt/b95663f2f3c9949b66e8.js",
    "revision": "b0fb0a6d569503bb7c13f636860a51fb"
  },
  {
    "url": "/_nuxt/ce68e1394d4ad278ed93.js",
    "revision": "64298174f9f561e8388db325c37c7743"
  },
  {
    "url": "/_nuxt/fbd6980956f37ce3b508.js",
    "revision": "cd50bd07c1a9bd62a6ba955cc80c9224"
  },
  {
    "url": "/_nuxt/fccaae60e8110d00eb1b.js",
    "revision": "eb989d91e4cad64d589a27f289903c85"
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
