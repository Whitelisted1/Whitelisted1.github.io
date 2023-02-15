console.log("[SW] Loading Service Worker ...");

OFFLINE_URL = "/offline/offline.html";
OFFLINE_CACHE = "offline-cache";

async function cacheAll(cacheName, resources) {
    const cache = await caches.open(cacheName);
    await cache.addAll(resources);
}

self.addEventListener("install", (event) => {
    console.log("[SW] Install event triggered");
    event.waitUntil(
        cacheAll(
            OFFLINE_CACHE,
        [
            "/offline/offline.html",
            "/offline/offline.css",
            "/offline/offline.js",
            "/themes/constants.css",
            "/themes/dark.css",
            "/favicon.ico",
            'fonts/Gameplay.ttf'
      ])
    );
  });

self.addEventListener('activate', event => {
    console.log("[SW] Activate event triggered");
    // Delete old caches that are no longer needed
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys.filter(key => key !== 'offline-cache').map(key => caches.delete(key)));
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        (async () => {
        try {
            // First, try to use the navigation preload response if it's
            // supported.
            const preloadResponse = await event.preloadResponse;
            if (preloadResponse) 
                return preloadResponse;

            // Always try the network first.
            const networkResponse = await fetch(event.request);
            // console.log(event.request, networkResponse);
            return networkResponse;
        } catch (error) {
            console.log("Client is offline; Attempting to return offline data");

            // https://stackoverflow.com/questions/71355430/is-it-possible-to-get-the-value-of-window-location-pathname-from-within-a-servic
            const requestUrl = new URL(event.request.url);
            const requestPathname = requestUrl.pathname;

            // console.log(requestPathname, requestUrl);

            const cache = await caches.open(OFFLINE_CACHE);
            var cachedResponse = await cache.match(requestPathname);
            if (cachedResponse == undefined) // If the requested URL is not cached, then assume it's the offline.html page
                var cachedResponse = await cache.match(OFFLINE_URL);
            
            return cachedResponse;
        }
        })()
    );
  });
  

// // Fetch resources from cache or server
// self.addEventListener('fetch', event => {
//     event.respondWith(
//         // Try to fetch the requested resource from the cache
//         caches.match(event.request).then(response => {
//         // If it's in the cache, return it
//         return response || fetch(event.request).then(fetchResponse => {
//             // If it's not in the cache, fetch it from the server
//             // and add it to the cache for future requests
//             return caches.open('offline-cache').then(cache => {
//             cache.put(event.request, fetchResponse.clone());
//             return fetchResponse;
//             });
//         });
//         })
//     );
// });