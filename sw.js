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
    "url": "webpack-runtime-c5e6794b957340bc5424.js"
  },
  {
    "url": "framework-151d16a262f39a1b5ad0.js"
  },
  {
    "url": "styles.59b58907afe0a4590fb3.css"
  },
  {
    "url": "aceecd74-3a144fb9339de6f965b0.js"
  },
  {
    "url": "app-e6b821462416538c10db.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "af11a12e805e0f97b35d0bfc32515ee3"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-a5364d144488098a841a.js"
  },
  {
    "url": "polyfill-d11fce74a104841521bf.js"
  },
  {
    "url": "b84ed7e41dc01b88e6459bb98ae462c5df355fc6-2fec1409c9e800921550.js"
  },
  {
    "url": "39f65ee59cfde5b1253e04e6aae3dbad88f56144-2470c473a894e7c75e7c.js"
  },
  {
    "url": "component---src-components-project-res-pm-pages-resume-js-1dd98f9352729d3febf6.js"
  },
  {
    "url": "page-data/resume/page-data.json",
    "revision": "98bbd7538c1e17cff4773b82af9189be"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "fea5dadc90f8b9a0d369f134390d9be6"
  },
  {
    "url": "component---src-components-project-res-pm-pages-portfolio-js-d7efaf325aeefcb1a10a.js"
  },
  {
    "url": "page-data/portfolio/page-data.json",
    "revision": "9e7c559f2a73bc8d6fb8949f5c18d440"
  },
  {
    "url": "page-data/sq/d/970290989.json",
    "revision": "487387d54be4a0bec1b39b3e3abfe35e"
  },
  {
    "url": "component---src-components-project-res-pm-pages-contacts-js-78db1d958abcd981a7aa.js"
  },
  {
    "url": "page-data/contacts/page-data.json",
    "revision": "d30952e5a9a2570b6ef04ccc4039c1ad"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "90f8f9fba37c296d2a8275b83b24ff74"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|[^:]static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
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
  if (!resources || !(await caches.match(`/app-e6b821462416538c10db.js`))) {
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
