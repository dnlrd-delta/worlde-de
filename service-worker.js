self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("wordle-cache").then(cache =>
            cache.addAll([
                "index.html",
                "manifest.json",
                "woerter.txt"
            ])
        )
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(r => r || fetch(e.request))
    );
});
