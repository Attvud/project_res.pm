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
    "url": "webpack-runtime-9a6e08597485ac896a26.js"
  },
  {
    "url": "framework-151d16a262f39a1b5ad0.js"
  },
  {
    "url": "styles.e7384b45f4e0e5a9c548.css"
  },
  {
    "url": "aceecd74-66c5c5b17addd9d6c69e.js"
  },
  {
    "url": "app-92295e1180d26a99d40a.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "bdabfef07826c5705a5042930b541d2b"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-a5364d144488098a841a.js"
  },
  {
    "url": "polyfill-bc5cdb70d7c30dd67aee.js"
  },
  {
    "url": "1062c633c8eb78627ed848ebaec126d2668cfd58-7e815ec15fd8ba67910a.js"
  },
  {
    "url": "0c8bf86de0b17df29d6c53e7e2a7ad4088330369-d49e3f883fc7aa3a4e7a.js"
  },
  {
    "url": "component---src-projects-res-pm-components-pages-resume-js-8b3704bddef2a69b6757.js"
  },
  {
    "url": "page-data/resume/page-data.json",
    "revision": "c82077d9d804cb0a11cbba9bfd5d6f3a"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "6a8f7b939c577221065c669a456d7f2f"
  },
  {
    "url": "component---src-projects-res-pm-components-pages-portfolio-js-c876784ec870af0a46a7.js"
  },
  {
    "url": "page-data/portfolio/page-data.json",
    "revision": "c260cba582d5c6fed7d075181a30cbf1"
  },
  {
    "url": "page-data/sq/d/1440594108.json",
    "revision": "c20c5719a2069526b9722bdceb295a7a"
  },
  {
    "url": "component---src-projects-res-pm-components-pages-contacts-js-d9457fce44be401821bc.js"
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
  if (!resources || !(await caches.match(`/app-92295e1180d26a99d40a.js`))) {
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
