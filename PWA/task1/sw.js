const staticCache = "static-cache-v1";
const dynamicCache = "dynamic-cache-v1";

const ASSETS = ["/", "/index.html", "/offline.html", "/src/pages/notFound.tsx"];

self.addEventListener("install", async (event) => {
  console.log("install");
  const cache = await caches.open(staticCache);
  await cache.addAll(ASSETS);
});

// activate
self.addEventListener("activate", async (event) => {
  const cachesKeyArr = await caches.keys();
  await Promise.all(cachesKeyArr.filter((key) => key !== staticCache && key !== dynamicCache).map((key) => caches.delete(key)));
});

// activate
self.addEventListener("fetch", async (event) => {
  event.respondWith(cacheFirst(event.request));
});

async function cacheFirst(req) {
  const cached = await caches.match(req);

  try {
    return cached ?? (await networkFirst(req));
  } catch (error) {
    return await networkFirst(req);
  }
}

async function networkFirst(req) {
  const cache = await caches.open(dynamicCache);

  try {
    const response = await fetch(req);
    await cache.put(req, response.clone());
    // console.log("---------Запрос", response);
    return response;
  } catch (error) {
    const cached = await cache.match(req);
    console.log("---------Кэш", cached ?? (await caches.match("/offline.html")));
    return cached ?? (await caches.match("/offline.html"));
  }
}
