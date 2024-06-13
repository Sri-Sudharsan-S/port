'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "496bdf6faed13c1207363e50fabd586d",
"assets/AssetManifest.bin.json": "7eb0a8c82cd83bef6122bd62d8d965ad",
"assets/AssetManifest.json": "81f4eb92dc2ac228c4e51f1a7a6ea558",
"assets/assets/andro.png": "9e9baddd5233fbc2b9a6d1cd1e36ab42",
"assets/assets/c++.png": "7dbb19906a91403a8e1e02648e635015",
"assets/assets/c.png": "623f8181c81323e831a831bd69b76d95",
"assets/assets/codinglotie.json": "fd62d15833831f7797329e554b59da7d",
"assets/assets/css.png": "b40bc00f9942b432528f2c29971777ed",
"assets/assets/dart.png": "a675cb93b75d5f1656c920dceecdcb38",
"assets/assets/flutter.png": "44efaf9569e25fe92202d62d049246b1",
"assets/assets/hoppy.jpg": "f71a8432d9ab457b761c4cb8e8d7194e",
"assets/assets/html.json": "2db39d86d7cc09acf8ddee76ab70d619",
"assets/assets/html.png": "cdd6f8ab5c3de400d47d9feaa09005c0",
"assets/assets/image.png": "b33aac9519e8df21c63985bcd421a7a3",
"assets/assets/image2.png": "e3f1dfaf923b6690ac6b68e0d3bc00bb",
"assets/assets/java.png": "ee486b5ef2a5123cec87654ab1cfdc00",
"assets/assets/js.png": "0cded3a3276425911d55a2552bf361bf",
"assets/assets/mob.jpg": "f16ba34851d12a4227d1f8238b12b324",
"assets/assets/namevideo.mp4.lottie.json": "cbfecb4718dd260de6d291caea56f30c",
"assets/assets/photo.png": "f753bd0b65dd15844f3c536b54e7501e",
"assets/assets/php.png": "ddbf90387456729b81d6b1dc6a84c508",
"assets/assets/projects/hoppyorder/10o.png": "d6e5689dc567c1e243faf0291fc0902a",
"assets/assets/projects/hoppyorder/1o.png": "d863b6f4a2339625cd7bce34ddb66f99",
"assets/assets/projects/hoppyorder/2o.png": "bf7491ce3137567572a77f00e4af0757",
"assets/assets/projects/hoppyorder/3o.png": "c479062192bcf54cc17625863d9fc87d",
"assets/assets/projects/hoppyorder/4o.png": "9c5e07f07290f6cf461db677ea95e640",
"assets/assets/projects/hoppyorder/5o.png": "67d606dbd9ea1bd503a7c357afafd41e",
"assets/assets/projects/hoppyorder/6o.png": "f4458f2d37db72f787f5243c464a4d61",
"assets/assets/projects/hoppyorder/7o.png": "c46c33f30c9aba8dd0f77b1a9be3a994",
"assets/assets/projects/hoppyorder/8o.png": "6a6c13b7c3560efdaa762a1e7b81314f",
"assets/assets/projects/hoppyorder/9o.png": "f529d85ddcbe5e71642c687894134d2f",
"assets/assets/projects/hoppyrider/1r.png": "7e898810fbd0e252d8af6851105cd368",
"assets/assets/projects/hoppyrider/2r.png": "9db509549c9f382e5cb439759b69312a",
"assets/assets/projects/hoppyrider/3r.png": "db9ddc17781ef8ae5648ef2885468dbd",
"assets/assets/projects/hoppyrider/4r.png": "22faf0e87fc41b38cc5f1bcc9e0709b7",
"assets/assets/projects/hoppyrider/5r.png": "a59fbb7a02d085927a4a3e70c7ea2f62",
"assets/assets/projects/hoppyrider/6r.png": "ed07e58de6f6fbe2ce88ff17a0bd689e",
"assets/assets/projects/hoppyrider/7r.png": "7a55a9ff9b5fe95f94dd0bd979343890",
"assets/assets/projects/hoppyweb/1.png": "434c9cb4758c798a645f1d3eb026d5be",
"assets/assets/projects/hoppyweb/10.png": "96423b9d6aa327a992a8d59d37226e40",
"assets/assets/projects/hoppyweb/11.png": "726354b0e24e10eb1437ef03b87b257b",
"assets/assets/projects/hoppyweb/12.png": "9ffbd3e8469dd3ae935596a3c7815027",
"assets/assets/projects/hoppyweb/13.png": "89bf9f8cde34d0143490866f3d6409f7",
"assets/assets/projects/hoppyweb/14.png": "d7e438e77556e56d9982836c790b5227",
"assets/assets/projects/hoppyweb/15.png": "bdfb28d505d18ba405196d657d563d20",
"assets/assets/projects/hoppyweb/16.png": "afab3165448ec6d28ef3c9a4d8e6d35a",
"assets/assets/projects/hoppyweb/17.png": "e40d192b18611bb59af3186f8696b2a3",
"assets/assets/projects/hoppyweb/2.png": "7ddf2aa31bd5cf813add479470efe5ae",
"assets/assets/projects/hoppyweb/3.png": "e9b1794e25aae7e12420a52be1dce736",
"assets/assets/projects/hoppyweb/4.png": "0ab2715d5aa95d6494cf759e6b9be286",
"assets/assets/projects/hoppyweb/5.png": "693a92ba9bf0f2a71b3facea6f5849e1",
"assets/assets/projects/hoppyweb/6.png": "42719fdcbc3ce065bf178946b8778abf",
"assets/assets/projects/hoppyweb/7.png": "c126a1b9aeef263b40c9ad81cc5f4329",
"assets/assets/projects/hoppyweb/8.png": "5f37a701ed6d6f3cc5bc92e5fad8da25",
"assets/assets/projects/hoppyweb/9.png": "a9e3ea78132b5fb62b0d1f7b54787af5",
"assets/assets/python.png": "c1f1b35767b964c3a462ce352263a844",
"assets/assets/resume.pdf": "d8936595ba16ac76a099ec1b2e5f83b3",
"assets/assets/saalcomp.jpg": "5146382ae4b81bf82acb09b0e554a704",
"assets/assets/sql.png": "acece89dc125a9da880138538fc21d82",
"assets/assets/web.jpg": "d1449b73c48d8187ffab55eab72bc586",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "240311cfec9d6ecc3e01de2ea7776ff1",
"assets/NOTICES": "654a446972f028d32f3b70ab9f6dc441",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "e87086e52bb2d63243121cb75e8c1b7c",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "48e58d4113393130454f2c878ef23d42",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bfd6a47880749e2a9fcfc4bd002dc18c",
"/": "bfd6a47880749e2a9fcfc4bd002dc18c",
"main.dart.js": "d69db458ac4fd9c22333b9af8f5e5174",
"manifest.json": "f2b0a87695cb8105fe606efdad91886f",
"version.json": "332f02ea2cdec1b72b81e5b10c0e8882"};
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
