const SW_VERSION = 0.01;

const registerServiceWorker = async () => {
    try {
    const registration = await navigator.serviceWorker.register("/sw.js", {
        scope: "/",
    });
    if (registration.installing) {
        console.log("[SW] Service worker installing");
    } else if (registration.waiting) {
        console.log("[SW] Service worker installed");
    } else if (registration.active) {
        console.log("[SW] Service worker active");
    }
    } catch (error) {
        console.error(`[SW] Registration failed with ${error}`);
    }
};
  
  // …
  
  registerServiceWorker();

if ('serviceWorker' in navigator) {
    registerServiceWorker();
}