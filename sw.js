importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/02a0f09d4b340e97baad.js",
    "revision": "c9c54abadb9089c71058c2d7493b8eb7"
  },
  {
    "url": "/_nuxt/851f96ffc1d1bc2af55a.js",
    "revision": "b107701a9564a764018066d0e6211e2e"
  },
  {
    "url": "/_nuxt/8b8243b6a290cfb291d2.js",
    "revision": "4714050e15f798add0e37be8f5c485d0"
  },
  {
    "url": "/_nuxt/983cb711f555af9c7d46.js",
    "revision": "b902cd3f5e02b0494b67aa2e63fdc5a5"
  },
  {
    "url": "/_nuxt/a5b429a17aaa4ee3c87f.js",
    "revision": "3ded9c6acf7f7116dc7601a7374e80de"
  },
  {
    "url": "/_nuxt/c8c806bc390f3cdbf6d9.js",
    "revision": "4395f3c9231290a862d0106ac9c77a6d"
  },
  {
    "url": "/_nuxt/ea0f0c957db4df35fa8b.js",
    "revision": "c6d8dc6a3ad89f14c75927f4d7ecb492"
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
