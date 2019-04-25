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
    "url": "/_nuxt/4c5c77a36058ecfb427c.js",
    "revision": "47bb540331ffb184d6577c411cdb5694"
  },
  {
    "url": "/_nuxt/4d70f059770a010a4057.js",
    "revision": "6e3904ce12c207a76c3dfecbc0f8ea1b"
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
