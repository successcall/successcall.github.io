// Service Worker Loader - Minimal, no auto-reload
// This prevents continuous reloading issues

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Simple registration, no update checking
        navigator.serviceWorker.register('/flutter_service_worker.js')
            .then(registration => {
                console.log('✅ Service Worker registered');
                // No update checking, no reload logic
            })
            .catch(error => {
                console.error('❌ Service Worker registration failed:', error);
            });
    });
}

// Optional: Clean old caches once
if (!sessionStorage.getItem('cache_cleaned')) {
    if ('caches' in window) {
        caches.keys().then(cacheNames => {
            const oldCaches = cacheNames.filter(name => name.startsWith('successcall-cache-'));
            if (oldCaches.length > 0) {
                Promise.all(oldCaches.map(name => caches.delete(name)));
            }
        });
        sessionStorage.setItem('cache_cleaned', 'true');
    }
}