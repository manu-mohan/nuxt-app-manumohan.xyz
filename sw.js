importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/16532aa05117d8764bd0.js",
    "revision": "a5c9e2fb15834ba8aae43f8fcf1a3630"
  },
  {
    "url": "/_nuxt/1974c821737e00632ba9.js",
    "revision": "2fed46f1b731ca65cab73dcfa23455e1"
  },
  {
    "url": "/_nuxt/70bf8aa54d78067562ff.js",
    "revision": "e623de97deb7e1bc8462fe2d9f16e465"
  },
  {
    "url": "/_nuxt/7d024ee146710fc93ecc.js",
    "revision": "c891fe6f64e28ab4422cae89928655e7"
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
    "url": "/_nuxt/9f5517e11003f171fe48.js",
    "revision": "7b43f60238edcff7732df80981383396"
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
