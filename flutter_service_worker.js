'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0be6711872aee7de492f9022d0f1646c",
"assets/AssetManifest.bin.json": "e4f4bb916e8a48251cefb4fface408c9",
"assets/assets/icons/asr.svg": "ac5e58f3f9b5f2df554ebcc488c1cd28",
"assets/assets/icons/dhuhr.svg": "88adf654e47b3fcfe6030bb18d590cf5",
"assets/assets/icons/fajr.svg": "5cb514d888fe9252f41cbb1703c2fd1c",
"assets/assets/icons/isha.svg": "b411c985201a6545463fafa0fe950017",
"assets/assets/icons/magrib.svg": "15808cdfdc3819a56296401999551c81",
"assets/assets/icons/sunrise.svg": "37cd7df013550ff1cb0d052fa4ab75cd",
"assets/assets/images/android-chrome-192x192.png": "89fbdce5a4f7f363b02e0b4cb2a2f1ac",
"assets/assets/images/android-chrome-512x512.png": "779454857457b19db21f43b2ee5286c5",
"assets/assets/images/apple-touch-icon.png": "8d9dc18d17a5ddd0dc59b4fb11b5b09f",
"assets/assets/images/favicon-16x16.png": "59059352706da0ee96652b8b09c49a5c",
"assets/assets/images/favicon-32x32.png": "9e91b71c20fc6c38a60a9711de3a58c7",
"assets/assets/images/favicon.ico": "a8fb903738c32695c4d5b96514ee5518",
"assets/assets/images/logo-transparent.png": "328597033665b75814287805d5f64588",
"assets/assets/images/logo.png": "095167745acd2dc3fefe5d9c363dbcc1",
"assets/assets/images/old-social_preview_1200x630.png": "cdcc7f1d11081a4fbba7cc684bdeeb4d",
"assets/assets/images/site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"assets/assets/images/social_preview_1200x630.png": "8d76b7dc71a6007e00c202bf005b3cbb",
"assets/assets/images/splash_logo.png": "00d43830401974dbb0fb998141bc19b8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "8cd5b82a95066c4f6bb5b96de7ba4ca2",
"assets/NOTICES": "f24af96d6056e76616ac9b72584e216d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.ico": "a8fb903738c32695c4d5b96514ee5518",
"favicon.png": "704d4411c55fd6ca1005175e87af6770",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "dfbc53c4bbb44db61c787bdfd7bef1cb",
"icons/Icon-192.png": "90070ae094a5f7e486aeaee5b6f0c456",
"icons/Icon-512.png": "c70a5b6b15b9c25b6fae572778775ac5",
"icons/Icon-maskable-192.png": "90070ae094a5f7e486aeaee5b6f0c456",
"icons/Icon-maskable-512.png": "c70a5b6b15b9c25b6fae572778775ac5",
"index.html": "627ba9ceebfd3ce15a6b486c87155c1e",
"/": "627ba9ceebfd3ce15a6b486c87155c1e",
"main.dart.js": "d2929fbf24c27626ae5e23efa377e9c7",
"manifest.json": "40e812c3c895d6faf3d1e1bbdf2abd2f",
"service_worker_loader.js": "1e24a88d6c02aa2f4a4a6d5730c639ac",
"social_preview_1200x630.png": "8d76b7dc71a6007e00c202bf005b3cbb",
"splash/img/dark-1x.png": "891d94a6e8dde25956b950f09f177273",
"splash/img/dark-2x.png": "9ddaab541e94f6e7304f2cfecd1d7fa9",
"splash/img/dark-3x.png": "bc78bfca0e91aff207be7f3fddac423c",
"splash/img/dark-4x.png": "33754078a1ad5a2a434ba9cffcca6361",
"splash/img/light-1x.png": "891d94a6e8dde25956b950f09f177273",
"splash/img/light-2x.png": "9ddaab541e94f6e7304f2cfecd1d7fa9",
"splash/img/light-3x.png": "bc78bfca0e91aff207be7f3fddac423c",
"splash/img/light-4x.png": "33754078a1ad5a2a434ba9cffcca6361",
"test_cache.html": "ae948e017532512e61ebc37fadd2d4b9",
"version.json": "16c0d60eafee204721ebd631cb4925d9",
"_headers": "7628b4241e03694ef74cec9d85a3058b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
