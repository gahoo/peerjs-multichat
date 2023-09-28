var staticCacheName = "peerChat";

self.addEventListener("install", function (e) {
e.waitUntil(
	caches.open(staticCacheName).then(function (cache) {
	return cache.addAll([
        "/",
        "index.html",
        "favicon.ico",
        "assets/dompurify/3.0.5/purify.min.js",
        "assets/dompurify/3.0.5/purify.min.js.map",
        "assets/font/material-icons.css",
        "assets/font/material-icons.woff2",
        "assets/font/redhat-latin-ext.woff",
        "assets/font/redhat-latin.woff",
        "assets/font/redhat.css",
        "assets/icon/android-chrome-192x192.png",
        "assets/icon/android-chrome-512x512.png",
        "assets/marked/7.0.5/marked.min.js",
        "assets/materialize/1.0.0/css/materialize.min.css",
        "assets/materialize/1.0.0/js/materialize.min.js",
        "assets/peerjs/1.4.7/peerjs.min.js",
        "assets/peerjs/1.4.7/peerjs.min.js.map",
        "assets/sound/bubble.wav",
        "assets/sound/enter.mp3",
        "assets/sound/leave.mp3",
        "assets/sound/pop.mp3",
        "assets/sound/ringtone.mp3",
        "assets/vue/2.7.14/vue.min.js"
    ]);
	})
);
});

self.addEventListener("fetch", function (event) {
console.log(event.request.url);

event.respondWith(
	caches.match(event.request).then(function (response) {
    	return response || fetch(event.request);
	})
);
});
