self.addEventListener("install", event => {
    console.log("Service Worker installato");
    self.skipWaiting();
});

self.addEventListener("fetch", event => {
    console.log("Richiesta intercettata:", event.request.url);
});
