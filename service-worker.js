if(!self.define){let e,s={};const n=(n,t)=>(n=new URL(n+".js",t).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(t,i)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const o=e=>n(e,a),r={module:{uri:a},exports:c,require:o};s[a]=Promise.all(t.map((e=>r[e]||o(e)))).then((e=>(i(...e),c)))}}define(["./workbox-75794ccf"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/001.jpg",revision:"be91d8aa4bbd48e7cd9580e8dc123600"},{url:"/Artem_Attvud_CV.pdf",revision:"f45e55c8e569ce6e1161c21ec8bb4170"},{url:"/_next/static/chunks/147-64ceb3c7e13d7763.js",revision:"jzLTwtK-Xh6ZayI6XlvJl"},{url:"/_next/static/chunks/294-d9c59e3596ecf40d.js",revision:"jzLTwtK-Xh6ZayI6XlvJl"},{url:"/_next/static/chunks/framework-01395af778c6fb71.js",revision:"jzLTwtK-Xh6ZayI6XlvJl"},{url:"/_next/static/chunks/main-9104a9341e636288.js",revision:"jzLTwtK-Xh6ZayI6XlvJl"},{url:"/_next/static/chunks/pages/404-1102d6a62dff53db.js",revision:"jzLTwtK-Xh6ZayI6XlvJl"},{url:"/_next/static/chunks/pages/_app-49069e09532c80f9.js",revision:"jzLTwtK-Xh6ZayI6XlvJl"},{url:"/_next/static/chunks/pages/_error-d742f979193aeae4.js",revision:"jzLTwtK-Xh6ZayI6XlvJl"},{url:"/_next/static/chunks/pages/authentication-92656a825fcda393.js",revision:"jzLTwtK-Xh6ZayI6XlvJl"},{url:"/_next/static/chunks/pages/blog/%5Bid%5D-d6274aef39957b70.js",revision:"jzLTwtK-Xh6ZayI6XlvJl"},{url:"/_next/static/chunks/pages/contacts-6901fd2bb134cfd2.js",revision:"jzLTwtK-Xh6ZayI6XlvJl"},{url:"/_next/static/chunks/pages/docs-fabaefea4c2eb866.js",revision:"jzLTwtK-Xh6ZayI6XlvJl"},{url:"/_next/static/chunks/pages/docs/front-end/components/backdrop-eef628af8c98b312.js",revision:"jzLTwtK-Xh6ZayI6XlvJl"},{url:"/_next/static/chunks/pages/docs/front-end/components/button-0ed62b778ebffa96.js",revision:"jzLTwtK-Xh6ZayI6XlvJl"},{url:"/_next/static/chunks/pages/docs/front-end/components/dialog-bc238f060d7356d2.js",revision:"jzLTwtK-Xh6ZayI6XlvJl"},{url:"/_next/static/chunks/pages/docs/front-end/components/form-40bdbb72d1724118.js",revision:"jzLTwtK-Xh6ZayI6XlvJl"},{url:"/_next/static/chunks/pages/docs/front-end/components/form-control-b768bc6d1f2329c2.js",revision:"jzLTwtK-Xh6ZayI6XlvJl"},{url:"/_next/static/chunks/pages/docs/front-end/components/theme-0e3c93f05c2cccc7.js",revision:"jzLTwtK-Xh6ZayI6XlvJl"},{url:"/_next/static/chunks/pages/food-order-b5a9815e232136d3.js",revision:"jzLTwtK-Xh6ZayI6XlvJl"},{url:"/_next/static/chunks/pages/index-60749c327e97bc79.js",revision:"jzLTwtK-Xh6ZayI6XlvJl"},{url:"/_next/static/chunks/pages/test-af22fd2edd0ae1ba.js",revision:"jzLTwtK-Xh6ZayI6XlvJl"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"jzLTwtK-Xh6ZayI6XlvJl"},{url:"/_next/static/chunks/webpack-7ee66019f7f6d30f.js",revision:"jzLTwtK-Xh6ZayI6XlvJl"},{url:"/_next/static/css/265672193881da07.css",revision:"jzLTwtK-Xh6ZayI6XlvJl"},{url:"/_next/static/css/485123870b0541da.css",revision:"jzLTwtK-Xh6ZayI6XlvJl"},{url:"/_next/static/jzLTwtK-Xh6ZayI6XlvJl/_buildManifest.js",revision:"jzLTwtK-Xh6ZayI6XlvJl"},{url:"/_next/static/jzLTwtK-Xh6ZayI6XlvJl/_middlewareManifest.js",revision:"jzLTwtK-Xh6ZayI6XlvJl"},{url:"/_next/static/jzLTwtK-Xh6ZayI6XlvJl/_ssgManifest.js",revision:"jzLTwtK-Xh6ZayI6XlvJl"},{url:"/_next/static/media/001.e0361c7b.jpg",revision:"jzLTwtK-Xh6ZayI6XlvJl"},{url:"/icons/favicon-16x16.png",revision:"39925ffcf07ae0d097e0be4b4e15b655"},{url:"/icons/favicon-32x32.png",revision:"606548316bb6ce8cffc9beeb25f6ca21"},{url:"/icons/favicon.ico",revision:"302924e909f6b03baf1332257b9bd3e1"},{url:"/icons/favicon.svg",revision:"2499f7e57178f11495bf061f14d98bf9"},{url:"/icons/icon-128x128.png",revision:"12fc76d73b61ed1203a38c6a2fc3b06e"},{url:"/icons/icon-144x144.png",revision:"d0518679c841a4d1915e8af820ae7ec1"},{url:"/icons/icon-152x152.png",revision:"6fa56f6b933480179a817109ad7cebef"},{url:"/icons/icon-192x192.png",revision:"55b260d328dff698ebf0dfade01b9065"},{url:"/icons/icon-384x384.png",revision:"bd14d521bc57ab735d795cbf1a1a87f5"},{url:"/icons/icon-512x512.png",revision:"71a291d5538c207d6b0b8ff859770705"},{url:"/icons/icon-72x72.png",revision:"e29119641ef559c67df5f9fb4ab7659f"},{url:"/icons/icon-96x96.png",revision:"9c887b739e1c414a2fb0cec31a0e9448"},{url:"/manifest.json",revision:"5edf4a5570397523e54627903586ad96"},{url:"/open-graph.jpg",revision:"f23b3634e476f630015b314988b5b382"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
