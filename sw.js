const CACHE_NAME = 'skd-cat-cache-v47';
const urlsToCache = [
  './index.html',
  './style.css',
  './app.js',
  './icon.svg'
];

// Install Event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
  // Force the waiting service worker to become the active service worker.
  self.skipWaiting();
});

// Activate Event (Cleanup old caches for updates)
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  // Claim the clients immediately
  self.clients.claim();
});

// Fetch Event (Stale-While-Revalidate strategy)
self.addEventListener('fetch', event => {
  // Hanya proses GET requests
  if (event.request.method !== 'GET') return;
  // Jangan cache API calls (Supabase/Gemini/dll)
  if (event.request.url.includes('supabase.co') || event.request.url.includes('googleapis.com')) return;

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      const fetchPromise = fetch(event.request).then(networkResponse => {
        // Hanya cache response yang valid dan basic (bukan CORS opaque atau error)
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseToCache);
            });
        }
        return networkResponse;
      }).catch(() => {
        // Fallback for offline (optional)
      });
      
      // Return cached response immediately, or wait for network if not in cache
      return cachedResponse || fetchPromise;
    })
  );
});
