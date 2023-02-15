// Check if the browser supports Service Workers
if ('serviceWorker' in navigator) {
    // Register the Service Worker file
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('Service Worker registered successfully with scope: ', registration.scope);
      })
      .catch(error => {
        console.log('Service Worker registration failed: ', error);
      });
}