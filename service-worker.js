if(!self.define){let e,s={};const n=(n,t)=>(n=new URL(n+".js",t).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(t,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let a={};const o=e=>n(e,i),r={module:{uri:i},exports:a,require:o};s[i]=Promise.all(t.map((e=>r[e]||o(e)))).then((e=>(c(...e),a)))}}define(["./workbox-75794ccf"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/001.jpg",revision:"be91d8aa4bbd48e7cd9580e8dc123600"},{url:"/_next/static/RWyGKqt2Vfx5InEAqukSc/_buildManifest.js",revision:"RWyGKqt2Vfx5InEAqukSc"},{url:"/_next/static/RWyGKqt2Vfx5InEAqukSc/_middlewareManifest.js",revision:"RWyGKqt2Vfx5InEAqukSc"},{url:"/_next/static/RWyGKqt2Vfx5InEAqukSc/_ssgManifest.js",revision:"RWyGKqt2Vfx5InEAqukSc"},{url:"/_next/static/chunks/232-1691ab7de9fa6e93.js",revision:"RWyGKqt2Vfx5InEAqukSc"},{url:"/_next/static/chunks/294-d9c59e3596ecf40d.js",revision:"RWyGKqt2Vfx5InEAqukSc"},{url:"/_next/static/chunks/framework-01395af778c6fb71.js",revision:"RWyGKqt2Vfx5InEAqukSc"},{url:"/_next/static/chunks/main-9104a9341e636288.js",revision:"RWyGKqt2Vfx5InEAqukSc"},{url:"/_next/static/chunks/pages/404-1102d6a62dff53db.js",revision:"RWyGKqt2Vfx5InEAqukSc"},{url:"/_next/static/chunks/pages/_app-2b1c2cde9fa5d14b.js",revision:"RWyGKqt2Vfx5InEAqukSc"},{url:"/_next/static/chunks/pages/_error-d742f979193aeae4.js",revision:"RWyGKqt2Vfx5InEAqukSc"},{url:"/_next/static/chunks/pages/authentication-92656a825fcda393.js",revision:"RWyGKqt2Vfx5InEAqukSc"},{url:"/_next/static/chunks/pages/blog/%5Bid%5D-d6274aef39957b70.js",revision:"RWyGKqt2Vfx5InEAqukSc"},{url:"/_next/static/chunks/pages/docs-fabaefea4c2eb866.js",revision:"RWyGKqt2Vfx5InEAqukSc"},{url:"/_next/static/chunks/pages/docs/front-end/components/backdrop-c83cfb9d2a8df7c8.js",revision:"RWyGKqt2Vfx5InEAqukSc"},{url:"/_next/static/chunks/pages/docs/front-end/components/button-b7f349c0f1c72c33.js",revision:"RWyGKqt2Vfx5InEAqukSc"},{url:"/_next/static/chunks/pages/docs/front-end/components/dialog-4773805c9bf64d0b.js",revision:"RWyGKqt2Vfx5InEAqukSc"},{url:"/_next/static/chunks/pages/docs/front-end/components/form-control-6d06cef480f3404c.js",revision:"RWyGKqt2Vfx5InEAqukSc"},{url:"/_next/static/chunks/pages/docs/front-end/components/form-da3bfec0865e9fc3.js",revision:"RWyGKqt2Vfx5InEAqukSc"},{url:"/_next/static/chunks/pages/docs/front-end/components/theme-d197ecedab166ba2.js",revision:"RWyGKqt2Vfx5InEAqukSc"},{url:"/_next/static/chunks/pages/food-order-6960afd96894b559.js",revision:"RWyGKqt2Vfx5InEAqukSc"},{url:"/_next/static/chunks/pages/index-3dbd87edbc42f903.js",revision:"RWyGKqt2Vfx5InEAqukSc"},{url:"/_next/static/chunks/pages/res.pm-9a7e04a181c972ee.js",revision:"RWyGKqt2Vfx5InEAqukSc"},{url:"/_next/static/chunks/pages/test-66c61626cecc97b6.js",revision:"RWyGKqt2Vfx5InEAqukSc"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"RWyGKqt2Vfx5InEAqukSc"},{url:"/_next/static/chunks/webpack-7125e2bd0b3f790f.js",revision:"RWyGKqt2Vfx5InEAqukSc"},{url:"/_next/static/css/04a1f9db8033c1f3.css",revision:"RWyGKqt2Vfx5InEAqukSc"},{url:"/_next/static/css/0d7b77712a391835.css",revision:"RWyGKqt2Vfx5InEAqukSc"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icons/icon-128x128.png",revision:"d626cfe7c65e6e5403bcbb9d13aa5053"},{url:"/icons/icon-144x144.png",revision:"e53a506b62999dc7a4f8b7222f8c5add"},{url:"/icons/icon-152x152.png",revision:"18b3958440703a9ecd3c246a0f3f7c72"},{url:"/icons/icon-16x16.png",revision:"83703514f19796ee15151e450984416d"},{url:"/icons/icon-192x192.png",revision:"27dc12f66697a47b6a8b3ee25ba96257"},{url:"/icons/icon-32x32.png",revision:"25e2c6ee34840568012b32e4314278df"},{url:"/icons/icon-384x384.png",revision:"a40324a3fde2b0b26eeffd4f08bf8be8"},{url:"/icons/icon-512x512.png",revision:"93d6e8e15cfa78dfee55446f607d9a28"},{url:"/icons/icon-72x72.png",revision:"f2ffc41b3482888f3ae614e0dd2f6980"},{url:"/icons/icon-96x96.png",revision:"fba02a40f7ba6fc65be8a2f245480f6d"},{url:"/manifest.json",revision:"a6260597a771ab55d0c12653d7b8d55b"},{url:"https://res.pm/_next/static/media/001.e0361c7b.jpg",revision:"RWyGKqt2Vfx5InEAqukSc"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
