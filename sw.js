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
    "url": "webpack-runtime-c9d43c14de79c615d8e7.js"
  },
  {
    "url": "styles.6303ad1453bb5b51d1c1.css"
  },
  {
    "url": "framework-151d16a262f39a1b5ad0.js"
  },
  {
    "url": "app-7e7856e388501ceace23.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "6e516f1bc243f498b7d9db139050bc09"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-a5364d144488098a841a.js"
  },
  {
    "url": "polyfill-99e9ad8cdcf1afd59be0.js"
  },
  {
    "url": "82ed133c92f08e8b7200ac8eb8188a716f5df6a6-5bbbcd88f87569f91182.js"
  },
  {
    "url": "component---src-components-project-res-pm-pages-resume-js-7a4bc5f399a120c4d502.js"
  },
  {
    "url": "page-data/resume/page-data.json",
    "revision": "98bbd7538c1e17cff4773b82af9189be"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "06bb6277e4bc856ee05100e730913999"
  },
  {
    "url": "component---src-components-project-res-pm-pages-portfolio-js-62cf5c88f7ea2417014a.js"
  },
  {
    "url": "page-data/portfolio/page-data.json",
    "revision": "9e7c559f2a73bc8d6fb8949f5c18d440"
  },
  {
    "url": "page-data/sq/d/970290989.json",
    "revision": "ff4c9013d1fc2a3d0a3501a943783b97"
  },
  {
    "url": "component---src-components-project-res-pm-pages-contacts-js-346dfd0622dd86e3a610.js"
  },
  {
    "url": "page-data/contacts/page-data.json",
    "revision": "d30952e5a9a2570b6ef04ccc4039c1ad"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "dbf95ab762e532839f260c9783bf06f8"
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
  if (!resources || !(await caches.match(`/app-7e7856e388501ceace23.js`))) {
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
