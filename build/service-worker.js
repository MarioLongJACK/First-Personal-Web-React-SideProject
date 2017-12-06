"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","0f8f0356eb31cef50b83d605192371e6"],["/static/css/main.a5ce118e.css","1d2d7a9fc60f328e3c540d3ebb9fac79"],["/static/js/main.e4cd9861.js","8eeb563b1862aab8306bdb1eb24dfba6"],["/static/media/C.e022bc63.png","e022bc63fd6c1773212368403019825f"],["/static/media/Earth-and-Moon.78225071.jpg","782250719e2be3e5f7ea6eb86b331cc5"],["/static/media/angular.a622bc6f.png","a622bc6f9ad036d090ccde2f37fa2202"],["/static/media/c++.8c184ef9.png","8c184ef94f456c0a1218a832716465f2"],["/static/media/cibc.1e5edb2a.png","1e5edb2a57a94de4bd06ee5798173ff7"],["/static/media/css.e91bf04a.png","e91bf04a10ea7a7d0d40cfa6dfec1cea"],["/static/media/guitar.e7769ef9.jpg","e7769ef9b0ffc57c10be46916f45e1b7"],["/static/media/heqco.c1f0aa13.jpg","c1f0aa133136c13f51aae47946421c2e"],["/static/media/html.f7c6c46d.png","f7c6c46d9ada84db77d452b3d65fdab5"],["/static/media/ins.c5ddecc6.png","c5ddecc677d10dd4ae1a9216bf75dff7"],["/static/media/japanview.6836e0d9.jpg","6836e0d93203883f3772d8385fc18e3e"],["/static/media/jikaiprofile.5ff43128.jpg","5ff4312842d69cffc0130158488433d7"],["/static/media/js.ab5158ca.png","ab5158ca7af4b271d3589a485bf3cbbb"],["/static/media/mysql.927b788d.png","927b788d9211e87999569cf19605a7b3"],["/static/media/nodejs.fff1215c.png","fff1215c04280b1166d6336a346a28ac"],["/static/media/ps.7a1111d4.png","7a1111d4b2bf7f1234f05e70d4c98344"],["/static/media/python.e9722bca.png","e9722bca8ca3274079790ab108d2a2f2"],["/static/media/react.90552fc5.png","90552fc53de18398a934d32aec962234"],["/static/media/shell.f3c19544.png","f3c195448d8e600d2deaab934fe54168"],["/static/media/silicon.9bb1f46f.png","9bb1f46f3fb3f8cdff95784995c068be"],["/static/media/sql.e3fd6c6a.png","e3fd6c6a6c0afea84eb3b431374faeb7"],["/static/media/sushi.3496f630.jpg","3496f6309a26d8820bce903a9e8c1696"],["/static/media/svn.cbe51aed.png","cbe51aed4a04a7785d0756cf00f1214f"],["/static/media/swift.2ba6c1b1.png","2ba6c1b14d7430c122d021a81fef1e3b"],["/static/media/thacks2.658cfef8.png","658cfef892ca4faf3daf1a45b7588d9e"],["/static/media/toronto.b31e0c3c.jpg","b31e0c3c11b0e825a017a25dfed6fc7a"],["/static/media/uoft.bf1122b3.png","bf1122b3632f29a59ec5807dfb7d55e6"],["/static/media/wow.5ea97b99.png","5ea97b993a9f7013d1bd398d07a8c181"],["/static/media/xian.d6dc4108.jpg","d6dc41088e00a737ffc697eea794ec53"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});