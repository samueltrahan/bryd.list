const CACHE_NAME = "version-1";
const urlsToCache = ['index.html', 'offline.html'];

const self = this;

//Install Service Worker

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then((cache) => {
        console.log('opened cache')
        return cache.addAll(urlsToCache);
    })
  )
});

//Listen to requests
self.addEventListener('fetch', (event) => {

});

//Activate teh Service Worker
self.addEventListener('activate', (event) => {

});