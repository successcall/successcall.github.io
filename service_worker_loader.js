// Service Worker Loader - Manual Update Only
// Updates only happen when you manually clear cache or hard refresh

// Register service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Register service worker with normal caching
        navigator.serviceWorker.register('/flutter_service_worker.js', {
            updateViaCache: 'all', // Use browser cache, don't constantly check
            scope: '/'
        })
            .then(registration => {
                console.log('✅ Service Worker registered:', registration.scope);

                // Listen for updates (but don't auto-reload)
                registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;
                    console.log('🔄 New version found, installing...');

                    newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                            // New version available - just log it, no auto-reload
                            console.log('✨ New version installed! Refresh page to update (Ctrl+Shift+R)');
                        }
                    });
                });
            })
            .catch(error => {
                console.error('❌ Service Worker registration failed:', error);
            });
    });
}

// Clean old caches once per session
if (!sessionStorage.getItem('cache_cleaned')) {
    if ('caches' in window) {
        caches.keys().then(cacheNames => {
            const oldCaches = cacheNames.filter(name =>
                name.startsWith('successcall-cache-')
            );
            if (oldCaches.length > 0) {
                console.log('🗑️ Cleaning old caches');
                Promise.all(oldCaches.map(name => caches.delete(name)));
            }
        });
        sessionStorage.setItem('cache_cleaned', 'true');
    }
}