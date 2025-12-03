'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "f397ec7cf0ca177db3c507b08f42812a",
".git/config": "3da85704c7bb9d3e2bcc1b0361f175a2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "affc4c992e11979c3741d363a9ef3a03",
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
".git/index": "2d7f99b8ac064d7495a502bf9f16b8ee",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8c2d4f6c0ca42e59f38b3cb2b5d0380f",
".git/logs/refs/heads/main": "8c2d4f6c0ca42e59f38b3cb2b5d0380f",
".git/logs/refs/remotes/origin/HEAD": "5bf8d566e54ebd55920ea89366aa263d",
".git/logs/refs/remotes/origin/main": "39410da4db23c8702c5804038b5c2266",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/07/9ed83aef997e6d6e94385e4e015eadbec05c7c": "c8afbf1f33c2fae6354fbae00b9b8379",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/0a/22671e3c7f828283c1c66881d1ccb82813c3ae": "8b5aa698e14e780dd79a817326423966",
".git/objects/0a/5568b3eb72786b7d025f317905c26d9b2a59ce": "a014524865f890b626de14198770894c",
".git/objects/0b/207d8001711b333c4d7428956ac86876780c1a": "510eefba828338a22b04710a960bca7b",
".git/objects/19/57f238fd19c709ac0a04811a421f0d9bcad024": "bcc1539d268189d9cf59b4b6a50a4a75",
".git/objects/1a/d29862ebb851a28f5772960eddf405c3073b59": "fbbcff0d2c3543e1defacfad4e824fe9",
".git/objects/1c/e42ac566c14d9f6e72756f5a8757c683fbde9f": "fc012f47a761fa6b2824b7e0a1dfcee8",
".git/objects/1d/214b7642365ff3f48f0470d3145f259ecb4570": "2f21ddb9ee9bac9e38d231c41bdbc9d9",
".git/objects/21/372b26b374bca851dbf00343ab9b37cf84a811": "05c73a30fd3809d97ed161b362b111d8",
".git/objects/25/74df44f69712cdb04dd927a70ecd90cb631523": "a7aa84a1e857efefebecddc1705ae0bb",
".git/objects/26/c845b6add5eaff7261185cec0eeff6ffb7fa1c": "1d2fda60989ec1e6f48d9ff0f2a2a8e6",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/35/fe577a27b7c300f7c95346272e88de6926e07e": "9babd9e592d501c688dd4a87e1117804",
".git/objects/36/182c0f575ad1e780e6ef022f88ece68e8f15e9": "0e10ddb3f2beae78e93a74f2b29df4a7",
".git/objects/36/363052d5b3c066a8c5cada00ccfab87db82a41": "a6fe2bc5b56347c37f420652f523127f",
".git/objects/37/04dbca367862a147cb01747f2d8895078a7731": "46941139a6334d31862e0034d8881067",
".git/objects/38/2675189f46b17612e4957f691a052dab031688": "80ab6a2a8c42b3c81ce9d58e2d148b8b",
".git/objects/38/918bbc369824ed6d17f31b7fdff24a59afd6f2": "ad5c2d4ce09e56a3dbb7ea338fc80335",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3e/ba38e22a2a73addf4fb3fa8df0743aa0d9acac": "fd577de360661c7ed06cbe9ba7f450cd",
".git/objects/3f/96ee1345166da696c46030f28f6154bb8e5989": "5295a4dded476104d5fd5be8038d4746",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/9b029188d10afb36e6fb966dfe20f0a091dd7d": "e6efb60caee74f59994ec3dfa2e67b9f",
".git/objects/4b/583440f7fa004a4343475592291082bc51bcce": "7348b5c3f178205a36b0d1d07c54aec7",
".git/objects/4c/5e3c22d0b357e08c3671c40bf2c19473a637cf": "19839811cd902c418ff9425ae993716c",
".git/objects/4c/87f3d5a0421b67ab2abb31d25dd3331f5e7231": "c766e6b63fb875cdab18bcd0e1f6a1fe",
".git/objects/4f/e9867ece6ab00ba7e9b7a963de814867337876": "cd85801aedd134411afdbaf84b9c9bac",
".git/objects/50/92ff3548ef5457cb79a0d52bbca27fd2e12976": "8ed3a4087b89d8252e6e0346e2bd4bb2",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/53/ea4f6c89022488472bf57f04c4f6570ee51df5": "7dba839ad4d266bcca7bbe4547a605d5",
".git/objects/5b/31478a4721ada6a8736797e0fa40f8c29a3a9a": "646a227a3513a7d2d9acc9e1b3e4855b",
".git/objects/62/27d3a77ed882cbe4aa0a08d3f162150e9835f2": "e56a73591ecd784d7342dded99597331",
".git/objects/64/0798c9306fd512b12c10e902ef583eb226d20d": "cd1860bb038aa632151894b4c9209455",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/74/13c5d67d98830a442b70833c6efbe61ace3964": "fc30a53ce5ee2a0db47b50d576e56f95",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7c/b6c1d161abc8d703368a699ca7a7330469290c": "fbbec7bc638d0dc37c3873a6643f99d8",
".git/objects/7c/f67ca41e29dff551afd9a8d416fd79a5ef6e04": "2e1d5c2401f14c34f0e7fea9b4ba40b0",
".git/objects/82/2c1c20a3f3e0f6a41334f75778d186eb28c68a": "73d3a8480f862309aee7a07ddfba4539",
".git/objects/82/e33c3d7a88af02fc6e1a9911947a3983f60b2d": "4c7d0858bf2ff80ba8d9b4be4c977039",
".git/objects/83/ee0e28498503f0b98882d9f9242d210949d9b8": "172f0556c5ad049a7172a1f7e1dcdb69",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/87/d5a32cd75ef6392cc1de8a66292302cc8075c2": "5305602a574ae71ad1edc81c33e09f05",
".git/objects/8a/bb39bf0ca40052ca12ffba3601cc5c6f1283f1": "31b5a784173b32b1439270ec38f0a833",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/8e/d7cddc204c8e4c8b8906ed2bbab4f1d724ab91": "6345cebac11146b729a060f8f88870ac",
".git/objects/91/8dee606883d4101693513c3090a2660c80c34d": "9276f2f411e5c016fc3a4f79ee17f96a",
".git/objects/93/734f4e870f0dd2b6840226d35a08b7fdf1cc9c": "197c77aa1ebf4cb4b60fd9f93770d131",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/94/8d4bc0caa4fd76eb1cb500ca33615fedbff2aa": "346d20795bf0114a5341e92cf8907112",
".git/objects/9f/ed0073e3c1ebfd235ac9e88ed4bd9081f74e60": "fd1e33043a10b195beba4af78b1e2172",
".git/objects/a2/cd4ac53c95d0f51d8b2f8d504e9f95df32eb67": "2c7bdf4a8b2ceac01f2436328e7f5154",
".git/objects/a3/ae0f40466a84c3daf8a696926eb2af137e6200": "58a6eb7d4dafd84d41d3fb17872b9880",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/aa/f1e8364df5bba2cb84b5713fd490696e747461": "21d858bbdc6bca315eda2cbf2abd97c1",
".git/objects/ac/764ae740557bb7943f18cf7a44e2d19adf9019": "6d9659f74a16cad3e3e91a0012fcae03",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/af/dd48b0c6281304c4c3cb387f518e57e0464a94": "14197b201dcb5eca40fdef808461c37d",
".git/objects/b3/274ac459e1c7f00dce787dda67827fb59627ab": "eb370fe72db237d0260adf27162c06e9",
".git/objects/b3/48a178f6d14cc6cd3649e1479b97f3476c6d4f": "070dfaf3ba3de1d424bb623b56990b1c",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/bc/49006281dfb8304ada04e66189248ee198891d": "8158d2134527320cdbcfb493721a367c",
".git/objects/bf/256730b36d58bcd87aebd7eaf88d21a64221d1": "eff0cb53e61b888e64425bc1d65f7d66",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/dc/0c7cd8a0f00bfb6db508451d61b5429d31afa0": "225ccaea34704233149e2aa525864c84",
".git/objects/de/63617b1cf26caeaf8f6aac3ffdce1a787a1faa": "ec41897b0c0fd2daef9685eb2849788d",
".git/objects/e2/e0ab375efc14b61bb0a0fe3315085d7003006f": "df66254a8cce1f4995698687eb65832c",
".git/objects/e5/3aca66a2a21b047117de841b3fb34129b08e7d": "3cae86bca40dd5f0b67370b6ce4c247a",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e7/90c369a04eac7b582730ed25436ada11f973f5": "0b6495d9520a6928fc0caa9e0b14ea44",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ec/adaf1d0fe39542c849728e8688cf6d2d137372": "aba608a8c0163c1149fe17ec3bea9abb",
".git/objects/ed/de959e520954faa2fae7ff7151411360ebd906": "172098f0c9a7d5567393e04e2ef5a352",
".git/objects/ef/4cd6e420a5cd7ec919c78bdf3134e5136cd543": "1f069c9456b8886042ec0def8bacc5a6",
".git/objects/f1/59ae77e68c4520a0b69d9b9ebd0d8c5f444a01": "eb592e52c556dd6ccae2d2d4491ed6f0",
".git/objects/f3/350a0a8b2ee5bb495ccb5900d75d9d9e6783ab": "667d6415906d4906b55087e5c256a609",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/f4eed4754dfacc5d56721dc50cf43b2bad321f": "700697a624d07af135629a656c822359",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f7/2f5efe055c32dce071f6aba2742f9fe7732eb3": "a88b8e65dfdb414b479411f5a1452349",
".git/objects/f8/05bd606c17989aeb6763663b9b06853e858d8a": "2342249074d8ee7093fe4ebe6933ce51",
".git/objects/fa/f4eadec576ee5cfd4b1bea56e7f3c364620027": "0a35df15f682d3be79e10ed9bfec945f",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/fe/9732f19a50ccabaad9ee35d6eadfdc1d5d588f": "da720610af71b7ff0a722fc0919df62f",
".git/objects/pack/pack-03305b9346471a47c195fabf1a92c8dc228da42d.idx": "940763dde6203afc5e0b9d9f1c929c18",
".git/objects/pack/pack-03305b9346471a47c195fabf1a92c8dc228da42d.pack": "abd12af8f2bb7d81e06e3c55112de39a",
".git/objects/pack/pack-03305b9346471a47c195fabf1a92c8dc228da42d.rev": "ee6b98ca0fba9c982fda1f14f72561f8",
".git/ORIG_HEAD": "e1311faabff445c97425f34d358c9aab",
".git/packed-refs": "409da83ce02f44bfb524da66cf5fcaa4",
".git/refs/heads/main": "e1311faabff445c97425f34d358c9aab",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "e1311faabff445c97425f34d358c9aab",
"assets/AssetManifest.bin": "a610ee419437bd497b4660c90ad7f128",
"assets/AssetManifest.bin.json": "0ef95bb00027dcf7527036467bf72d92",
"assets/assets/icons/asr.svg": "ac5e58f3f9b5f2df554ebcc488c1cd28",
"assets/assets/icons/dhuhr.svg": "88adf654e47b3fcfe6030bb18d590cf5",
"assets/assets/icons/fajr.svg": "5cb514d888fe9252f41cbb1703c2fd1c",
"assets/assets/icons/isha.svg": "b411c985201a6545463fafa0fe950017",
"assets/assets/icons/magrib.svg": "15808cdfdc3819a56296401999551c81",
"assets/assets/icons/sunrise.svg": "37cd7df013550ff1cb0d052fa4ab75cd",
"assets/assets/images/logo.png": "095167745acd2dc3fefe5d9c363dbcc1",
"assets/assets/images/splash_logo.png": "00d43830401974dbb0fb998141bc19b8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "73d8ca8192266c91df69f9b36c006ec3",
"assets/NOTICES": "9bb4aaff6fcb33ebd3dae0f69137d2e7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
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
"favicon.png": "704d4411c55fd6ca1005175e87af6770",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "be9b1602a966e2f024954bab5e7f518c",
"icons/Icon-192.png": "90070ae094a5f7e486aeaee5b6f0c456",
"icons/Icon-512.png": "c70a5b6b15b9c25b6fae572778775ac5",
"icons/Icon-maskable-192.png": "90070ae094a5f7e486aeaee5b6f0c456",
"icons/Icon-maskable-512.png": "c70a5b6b15b9c25b6fae572778775ac5",
"index.html": "6df957d8dd4040eb4fb87151764eac3a",
"/": "6df957d8dd4040eb4fb87151764eac3a",
"main.dart.js": "d244c80591bd3f69e8963cfccce43878",
"manifest.json": "53a0c4ee38b351b0870c858d7db051b4",
"splash/img/dark-1x.png": "891d94a6e8dde25956b950f09f177273",
"splash/img/dark-2x.png": "9ddaab541e94f6e7304f2cfecd1d7fa9",
"splash/img/dark-3x.png": "bc78bfca0e91aff207be7f3fddac423c",
"splash/img/dark-4x.png": "33754078a1ad5a2a434ba9cffcca6361",
"splash/img/light-1x.png": "891d94a6e8dde25956b950f09f177273",
"splash/img/light-2x.png": "9ddaab541e94f6e7304f2cfecd1d7fa9",
"splash/img/light-3x.png": "bc78bfca0e91aff207be7f3fddac423c",
"splash/img/light-4x.png": "33754078a1ad5a2a434ba9cffcca6361",
"version.json": "b716a01ea02c9571002e6ff55125e5d1"};
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
