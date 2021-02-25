/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-bce80b210f8007bce790.js"
  },
  {
    "url": "framework-b17a64ad725e0b3c1338.js"
  },
  {
    "url": "styles.f3077a9b12768a92c96a.css"
  },
  {
    "url": "styles-f2c1808a00cfb3adf39e.js"
  },
  {
    "url": "aceecd74-b95e382f6d3583550ff4.js"
  },
  {
    "url": "app-98d494e6c78482ea5601.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "bf29948d2f139fb558c10738a58c5c39"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-241020a1cf7d0f317bbe.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f6081b83111aea4128c98944b7fafccc"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "29af5f557bbcc03bb677c89b87231174"
  },
  {
    "url": "polyfill-6c74939eb57bbd57b6a0.js"
  },
  {
    "url": "d99a64e8ab5703df30f0e0f475283d4270bcd548-29d022cd01e36d275cb1.js"
  },
  {
    "url": "8f06df63790ccae6715eac2fe158efb9ccdbe7dd-d25e7c08aa5af20512a0.js"
  },
  {
    "url": "component---src-projects-res-pm-components-pages-404-js-0ac72a19436b159ffff1.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "3f9abae71810781a5f7333574119a529"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "042780b256a947c37dfdf5cd33f562d5"
  },
  {
    "url": "component---src-projects-res-pm-components-pages-contacts-js-af290dcf7555d44df865.js"
  },
  {
    "url": "page-data/contacts/page-data.json",
    "revision": "4fed99336d688dedbc03b5b1031e297e"
  },
  {
    "url": "component---src-projects-res-pm-components-pages-index-js-c6d28049f9569242c3d7.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "57f02aac4c387d09bfaa3be550e13ad5"
  },
  {
    "url": "component---src-projects-res-pm-components-pages-portfolio-js-c49ca037b8d4cf728241.js"
  },
  {
    "url": "page-data/portfolio/page-data.json",
    "revision": "c8f840bbd2a5dfdc74460b4a6ad44f26"
  },
  {
    "url": "page-data/sq/d/1419746806.json",
    "revision": "102edc593d4b8146e3e2f80b119b1182"
  },
  {
    "url": "component---src-projects-res-pm-components-pages-resume-js-34e7747a4820321f4b48.js"
  },
  {
    "url": "page-data/resume/page-data.json",
    "revision": "c82077d9d804cb0a11cbba9bfd5d6f3a"
  },
  {
    "url": "component---src-projects-res-pm-components-templates-shop-product-js-57ffaeafc57e25784780.js"
  },
  {
    "url": "page-data/shop/test/page-data.json",
    "revision": "0838d403426e0e4b7b72c6cc739767d0"
  },
  {
    "url": "component---src-projects-res-pm-components-templates-portfolio-single-js-4a204fce5e3506dd6980.js"
  },
  {
    "url": "page-data/portfolio/1614111332517/page-data.json",
    "revision": "44e2de94312bbba63fe9e71337cc87bb"
  },
  {
    "url": "page-data/portfolio/1614111730556/page-data.json",
    "revision": "a6567512faf2f3822634f89fa6e031bd"
  },
  {
    "url": "page-data/portfolio/1614111751798/page-data.json",
    "revision": "1813516b7b6a6c26a313d2aaab345f09"
  },
  {
    "url": "page-data/portfolio/1614111758772/page-data.json",
    "revision": "42cbb0eff04d78bcad4d233aef140c30"
  },
  {
    "url": "page-data/portfolio/1614111765148/page-data.json",
    "revision": "5fa845b805ba9f6aeeaeedde15b9d55b"
  },
  {
    "url": "page-data/portfolio/1614111771762/page-data.json",
    "revision": "0a695877de80de68c9ae527cbe29f9cc"
  },
  {
    "url": "page-data/portfolio/1614111777145/page-data.json",
    "revision": "15881fa516bc196dfe75e9786a5e9cbc"
  },
  {
    "url": "page-data/portfolio/1614111782995/page-data.json",
    "revision": "2337285b5afc69eed6754d9427ddc402"
  },
  {
    "url": "page-data/portfolio/1614111790238/page-data.json",
    "revision": "a6296d65b87fee6acd81190387c24972"
  },
  {
    "url": "page-data/portfolio/1614111961930/page-data.json",
    "revision": "ac8cea9dde0cf6936215eec9a2433325"
  },
  {
    "url": "page-data/portfolio/test/page-data.json",
    "revision": "b345d8ad43ea24707ecf06673bf3f8b7"
  },
  {
    "url": "component---src-projects-res-pm-components-templates-blog-post-js-ec5785b9f3459dc3e7c9.js"
  },
  {
    "url": "page-data/blog/1606729577627/page-data.json",
    "revision": "008f62b3abaee24f1f55e05a47029782"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "16c09ac6d09765a5986d41fe26cbd874"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|avif|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-98d494e6c78482ea5601.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
