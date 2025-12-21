'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "0460ec0d421087fd182c9d0071d96591",
".git/config": "3da85704c7bb9d3e2bcc1b0361f175a2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "1cf04a8563b26396302c480f2e86d3f3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8c4b706e552216fc64fe56002ddbc1ed",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9dbffbefcba620c8d9a34c019fec02e2",
".git/logs/refs/heads/main": "9dbffbefcba620c8d9a34c019fec02e2",
".git/logs/refs/remotes/origin/HEAD": "5bf8d566e54ebd55920ea89366aa263d",
".git/logs/refs/remotes/origin/main": "617b4cf5e5d399f124327136086fad9a",
".git/objects/04/33705c007772dcf0c44460e53add2266f12e72": "7a36a8e5df5624453cb11048856ce99d",
".git/objects/0a/5568b3eb72786b7d025f317905c26d9b2a59ce": "a014524865f890b626de14198770894c",
".git/objects/23/50b9d57d9f069f4785724715d473bee5a8f4ca": "0b099c1515b1ba02b93a6fa816c19b61",
".git/objects/31/6b4795b0bb21ea74aaddadf38054ddc20a7a02": "92974eae2c8b8b727b85118d125dbb26",
".git/objects/34/4d884309e1bc4948557baea6f7e47a6c119610": "a302a877a74e03caca0b35c4ad8e324a",
".git/objects/36/a588ac5afc221813e559227ec3df72159aff14": "3c5fe509b60f724ba0ea2c1dc63cc52d",
".git/objects/3c/d3cac24ef5975bb4f603e8c8e96f2290ddbe1b": "c6294c35ed9fcd87f448a65057852de4",
".git/objects/52/68346478bc94846e29332acf12936e78450e56": "a67946e1abb8e0248e764bb1519353ab",
".git/objects/57/cc7bd1278a82ef0aa26745e1f2fa3ffbc316fa": "a17be52b2e06789e17ac8ea602cc3fb1",
".git/objects/67/c4b0ded2faa1df1034ff0b3ab63ae66c276227": "85020474aad678c9fd1270b781c0fc38",
".git/objects/67/c75cca8bb4ef929225ee5d98071f39911aea39": "f32775b5bb55ea376e1121b5dd4eb448",
".git/objects/68/d2717ddc32949587c2c96b349ed784289b0809": "8ecdf81c4e67a9fb067ce02165a6780c",
".git/objects/78/2836a92d067c76ad161cc96d3bd5979b150a31": "7fe9ba80ac46a0a7ee44a6ba8c3b1427",
".git/objects/90/440971fc760da360b35a70ba3d78ff4a9012c0": "564d0511fd519f4ea3c8b60f308dae1c",
".git/objects/a2/cd4ac53c95d0f51d8b2f8d504e9f95df32eb67": "2c7bdf4a8b2ceac01f2436328e7f5154",
".git/objects/a7/5efd070311082591f61e23b17b8627c39d24cc": "4a69ba282e5f12b098b1c8ddf95ac698",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/bd/a6217b2b73f4d742afc4d532eb2229ed4179e1": "98d7abda1453d55a8efa67ae52436c83",
".git/objects/c7/5894d393c5c0520bb5047f561b7d52a3cf22f7": "497c708fbd63f418f6c6e0a8d7a64681",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/dc/f60c5270ca5ff61ba47224dc9b2d2db293e199": "0c80ae288c47e844919c149ca7e7c7b0",
".git/objects/de/4351603dd57a92cb147b3709b92f044677d097": "8e660c25844caa4f706b47f72650bdd9",
".git/objects/e0/9ff8bd89f830517487f556fef84a4f3a270157": "467f5897b8227126f3c53198dd8baf48",
".git/objects/e4/e86892b6d556d5cbee05f940b23278349e5063": "52441f8ee55f983f07284861d85f6b5e",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e8/7db8d568d3122f0a1a3037b4fffd48f18ca6a0": "36bfb35cb9fb333d1807529d6ed7fb38",
".git/objects/eb/555e3e54661385fb53505c4068d3ef8bbf0d44": "4c7397c07a76e98d259e862f90e901ff",
".git/objects/f8/15f31c73c8d6b8a580940c77bd4ec6b230afdc": "35bad9432004947c7b38f8941fac02e9",
".git/objects/ff/1b461d25160901107b09d43e34db983ff8e3e6": "a32bbd50d7220abde50c50583f4b8583",
".git/objects/ff/da5d1c2f00cfd46f6bad95c020a671c824a523": "7aab0eddf02ee2d5b25ca89afc704dec",
".git/objects/pack/pack-03305b9346471a47c195fabf1a92c8dc228da42d.idx": "940763dde6203afc5e0b9d9f1c929c18",
".git/objects/pack/pack-03305b9346471a47c195fabf1a92c8dc228da42d.pack": "abd12af8f2bb7d81e06e3c55112de39a",
".git/objects/pack/pack-03305b9346471a47c195fabf1a92c8dc228da42d.rev": "ee6b98ca0fba9c982fda1f14f72561f8",
".git/objects/pack/pack-3c331e01bd2c5a7b3d4d39ca6e7926cc953435ba.idx": "743ff9b4f988ccb9bf6fffcde1353ba5",
".git/objects/pack/pack-3c331e01bd2c5a7b3d4d39ca6e7926cc953435ba.pack": "4195253a64c60b1c8b3620647e153f63",
".git/objects/pack/pack-3c331e01bd2c5a7b3d4d39ca6e7926cc953435ba.rev": "0b15eef640cb07de5970112f71b1d8b8",
".git/ORIG_HEAD": "ed3e588324c9b38b04de32cc98e28b40",
".git/packed-refs": "409da83ce02f44bfb524da66cf5fcaa4",
".git/refs/heads/main": "ed3e588324c9b38b04de32cc98e28b40",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "ed3e588324c9b38b04de32cc98e28b40",
"assets/AssetManifest.bin": "0be6711872aee7de492f9022d0f1646c",
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
"assets/fonts/MaterialIcons-Regular.otf": "764f511073349c4fdbf716bfad9720e6",
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
"flutter_bootstrap.js": "614488be8e8da99d0342a1829014866f",
"icons/Icon-192.png": "90070ae094a5f7e486aeaee5b6f0c456",
"icons/Icon-512.png": "c70a5b6b15b9c25b6fae572778775ac5",
"icons/Icon-maskable-192.png": "90070ae094a5f7e486aeaee5b6f0c456",
"icons/Icon-maskable-512.png": "c70a5b6b15b9c25b6fae572778775ac5",
"index.html": "627ba9ceebfd3ce15a6b486c87155c1e",
"/": "627ba9ceebfd3ce15a6b486c87155c1e",
"main.dart.js": "181c8a9326392f3d43a2bea4482c569f",
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
