const STATIC_CACHE = "static-cache-v1"
const static_assets = [
    "/",
    "/index.html",
    "/script.js",
    "/images/icon-24.jpg",
    "/images/icon-32.jpg",
    "/images/icon-48.jpg",
    "/images/icon-64.jpg",
    "/images/icon-72.jpg",
    "/images/icon-96.jpg",
    "/images/icon-128.jpg",
    "/images/icon-256.jpg",
]

// storing static assets in cache on service worker install
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(STATIC_CACHE).then(cache => {
            cache.addAll(static_assets)
        })
    )
})

// returning static assets from cache
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    )
});
