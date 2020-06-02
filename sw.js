importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/062b7e338dd838b62b02.js",
    "revision": "c5a8661c41b22e9e4024960a706935b7"
  },
  {
    "url": "/_nuxt/43c8ae08c7c9a6ee427d.js",
    "revision": "f6eb9460d2e0aea5fd06fad5d42d27f0"
  },
  {
    "url": "/_nuxt/8447855ff97c551c0479.js",
    "revision": "5acf191bc372bace2a74cfcca91f875d"
  },
  {
    "url": "/_nuxt/946cb7d7fc8581f0af2f.js",
    "revision": "6e0c647cbb4575a3045598fbc53bb2bb"
  },
  {
    "url": "/_nuxt/95a15e293ee0c14febcd.js",
    "revision": "20995420e2d8e50c0c6bde4941fa65cb"
  },
  {
    "url": "/_nuxt/ba0ee588edb5aa90da9e.js",
    "revision": "539c0875942e86418ac72d72517e7890"
  },
  {
    "url": "/_nuxt/f60121de1c0715912542.js",
    "revision": "4cda754809137c05682ddd5ae855b37c"
  }
], {
  "cacheId": "manumohan.online",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
