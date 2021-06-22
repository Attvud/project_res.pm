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
    "url": "webpack-runtime-b12e82b7fb5bf0fdb11a.js"
  },
  {
    "url": "styles.1edddd2e1d4682db92c2.css"
  },
  {
    "url": "framework-151d16a262f39a1b5ad0.js"
  },
  {
    "url": "app-c189193df2443c33d27b.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "33496f2674c7906b414c13ce19dae852"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-5d8f6f101d3a7b3822f3.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "0282e2b86db56eb397d1111699dffeba"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "6c50881c45eb88f18a4324353114181e"
  },
  {
    "url": "polyfill-81fc0e0cace1acae621b.js"
  },
  {
    "url": "82ed133c92f08e8b7200ac8eb8188a716f5df6a6-7d01ab2a7f04d629cde3.js"
  },
  {
    "url": "component---src-components-project-res-pm-pages-resume-js-bf9d30f41e5c823a4244.js"
  },
  {
    "url": "page-data/resume/page-data.json",
    "revision": "211c6ce2853542910a8907a004c134b9"
  },
  {
    "url": "component---src-components-project-res-pm-pages-portfolio-js-9f474e068ada7ca68d0b.js"
  },
  {
    "url": "page-data/portfolio/page-data.json",
    "revision": "f7954f6018640630aa708740c0fa3ca2"
  },
  {
    "url": "page-data/sq/d/970290989.json",
    "revision": "ff4c9013d1fc2a3d0a3501a943783b97"
  },
  {
    "url": "component---src-components-project-res-pm-pages-contacts-js-4b144e1ae5ab3bf82186.js"
  },
  {
    "url": "page-data/contacts/page-data.json",
    "revision": "4af1e2ec6c3598f784c4d55594ba5e5a"
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
  if (!resources || !(await caches.match(`/app-c189193df2443c33d27b.js`))) {
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
