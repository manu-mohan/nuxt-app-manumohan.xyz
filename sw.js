importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0a6172e.js",
    "revision": "8c6406865c05878e2bbeb64e681ff7eb"
  },
  {
    "url": "/_nuxt/1cb669a.js",
    "revision": "a365c9dd42db7e69e83f0473f7b9a82e"
  },
  {
    "url": "/_nuxt/7a616d5.js",
    "revision": "b0420167e5e7bf2a752be6f96e354f52"
  },
  {
    "url": "/_nuxt/a919497.js",
    "revision": "3f97594488480eed7f616214f9dcef3e"
  },
  {
    "url": "/_nuxt/c55ff97.js",
    "revision": "633baee71e9cff14375ec4166725270d"
  },
  {
    "url": "/_nuxt/dbc22ef.js",
    "revision": "74c1206e5b18a5f5f2e6b4ad27327abc"
  },
  {
    "url": "/_nuxt/de4783c.js",
    "revision": "b8144714f10e67a48e1013ac26aaf99a"
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
