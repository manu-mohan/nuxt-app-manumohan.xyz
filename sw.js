importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/033658a532577c874b62.js",
    "revision": "b171ea105c55de5e7f6f8be580c3a231"
  },
  {
    "url": "/_nuxt/1e336a8c6d2c03fa0491.js",
    "revision": "d2d14c4d5a147fdd2e6691ba14fce7ba"
  },
  {
    "url": "/_nuxt/8411e9cb5d8f04a0ad5f.js",
    "revision": "c44f904be99b8b9895a5aad4ad9d1c52"
  },
  {
    "url": "/_nuxt/8c2a9a59c650610b1b9e.js",
    "revision": "246ad25935649aa16da19ecb5698a838"
  },
  {
    "url": "/_nuxt/d1dbcfdfa2f805bbb35a.js",
    "revision": "6ab0db0c213ff20e83739f089498861b"
  },
  {
    "url": "/_nuxt/dfa6a1aec5eee0ac4ed2.js",
    "revision": "21e730b64de10af22ddf2d85c212b4f7"
  },
  {
    "url": "/_nuxt/f58035cb772d37699c14.js",
    "revision": "dff082886e2ba7df2ce9bc3a7d04b1b2"
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
