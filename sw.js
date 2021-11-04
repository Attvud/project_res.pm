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
    "url": "webpack-runtime-76939e96599a60c978c9.js"
  },
  {
    "url": "styles.a20b3b6425d402330fc4.css"
  },
  {
    "url": "framework-f152c8c6d28cfe60f026.js"
  },
  {
    "url": "app-571d1885efc39386b6bf.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "091b7a05c47164f48098cff82bcaa46e"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-0742cb082bd1dffd3b66.js"
  },
  {
    "url": "polyfill-d8f6d5a81406db09062f.js"
  },
  {
    "url": "82ed133c92f08e8b7200ac8eb8188a716f5df6a6-c1dbed0dbc678d4a3c48.js"
  },
  {
    "url": "component---src-components-project-res-pm-pages-resume-js-1cb82ca662c6de2ab8b6.js"
  },
  {
    "url": "page-data/resume/page-data.json",
    "revision": "4e44a6feab4f11dc37272c885e9525ff"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "ce23085e7994ae85c8cd0b2dde23be9f"
  },
  {
    "url": "component---src-components-project-res-pm-pages-portfolio-js-d5ee258a8b90b935cd0a.js"
  },
  {
    "url": "page-data/portfolio/page-data.json",
    "revision": "bf370ad00fb9d35f777ddfb071807383"
  },
  {
    "url": "page-data/sq/d/970290989.json",
    "revision": "33198e9372b42145a2c56680f9dd291d"
  },
  {
    "url": "component---src-components-project-res-pm-pages-contacts-js-1263e76cc015e6242654.js"
  },
  {
    "url": "page-data/contacts/page-data.json",
    "revision": "ee130a17ac81458ed165f534929b1208"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "e5f73018a3f1bd7c3395638c7be82cb9"
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
  if (!resources || !(await caches.match(`/app-571d1885efc39386b6bf.js`))) {
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
