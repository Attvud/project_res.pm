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
    "url": "webpack-runtime-05a0465b21268b7e6add.js"
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
    "url": "app-d16aca2ca8cd3b2db351.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "b1d5b4d36e34058cd31fa92dda63a57a"
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
    "revision": "654134d54d980b0894af05f114d8e6be"
  },
  {
    "url": "polyfill-6c74939eb57bbd57b6a0.js"
  },
  {
    "url": "9192bbbc77e6c275c83b085d90f294293eb6db01-59f92b83359594179f0f.js"
  },
  {
    "url": "df2a2113b8c73a939a4b37e719e440c40b2988f7-d89052f4d890bcc99633.js"
  },
  {
    "url": "component---src-projects-res-pm-components-pages-resume-js-b0a8f295ccde00369139.js"
  },
  {
    "url": "page-data/resume/page-data.json",
    "revision": "c82077d9d804cb0a11cbba9bfd5d6f3a"
  },
  {
    "url": "component---src-projects-res-pm-components-pages-portfolio-js-a634edf56a4eea279fdb.js"
  },
  {
    "url": "page-data/portfolio/page-data.json",
    "revision": "c260cba582d5c6fed7d075181a30cbf1"
  },
  {
    "url": "page-data/sq/d/1440594108.json",
    "revision": "894ff0a89f3444daed37736e0d9f2758"
  },
  {
    "url": "component---src-projects-res-pm-components-pages-contacts-js-293aa2ec9d61fd2518f2.js"
  },
  {
    "url": "page-data/contacts/page-data.json",
    "revision": "4fed99336d688dedbc03b5b1031e297e"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "a4de467cb1c977491239d365cbf4c5f6"
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
  if (!resources || !(await caches.match(`/app-d16aca2ca8cd3b2db351.js`))) {
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
