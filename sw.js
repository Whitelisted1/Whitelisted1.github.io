// Install and activate the Service Worker
self.addEventListener('install', event => {
    // Open the cache and add the offline fallback page
    event.waitUntil(
        caches.open('offline-cache').then(cache => {
            // Add URLs of JS and CSS files to cache
            return cache.addAll([
                '/offline/offline.html',
                '/offline/offline.css',
                '/offline/offline.js'
            ]);
        })
    );
});

self.addEventListener('activate', event => {
    // Delete old caches that are no longer needed
    event.waitUntil(
        caches.keys().then(keys => {
        return Promise.all(keys.filter(key => key !== 'offline-cache').map(key => caches.delete(key)));
        })
    );
});

// Fetch resources from cache or server
self.addEventListener('fetch', event => {
    event.respondWith(
        // Try to fetch the requested resource from the cache
        caches.match(event.request).then(response => {
        // If it's in the cache, return it
        return response || fetch(event.request).then(fetchResponse => {
            // If it's not in the cache, fetch it from the server
            // and add it to the cache for future requests
            return caches.open('offline-cache').then(cache => {
            cache.put(event.request, fetchResponse.clone());
            return fetchResponse;
            });
        });
        })
    );
});