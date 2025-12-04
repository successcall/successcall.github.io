// Service Worker Loader with Auto-Update
// This script manages service worker registration and automatic updates

const CACHE_VERSION = 'v' + Date.now();
const CACHE_NAME = 'successcall-cache-' + CACHE_VERSION;

// Register service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Force service worker update on page load
        navigator.serviceWorker.register('/flutter_service_worker.js?v=' + Date.now(), {
            updateViaCache: 'none', // Always check for updates
            scope: '/'
        })
            .then(registration => {
                console.log('✅ Service Worker registered:', registration.scope);

                // Force immediate update check
                registration.update();

                // Periodic update check every 30 seconds
                setInterval(() => {
                    registration.update().catch(err => {
                        console.log('Update check failed:', err);
                    });
                }, 30000);

                // Listen for updates
                registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;
                    console.log('🔄 New version found, installing...');

                    newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'installed') {
                            if (navigator.serviceWorker.controller) {
                                // New service worker installed, reload to activate
                                console.log('✨ New version ready! Reloading page...');

                                // Clear all old caches before reload
                                caches.keys().then(cacheNames => {
                                    return Promise.all(
                                        cacheNames.map(cacheName => {
                                            if (cacheName !== CACHE_NAME) {
                                                console.log('🗑️ Deleting old cache:', cacheName);
                                                return caches.delete(cacheName);
                                            }
                                        })
                                    );
                                }).then(() => {
                                    // Wait a moment then reload
                                    setTimeout(() => {
                                        window.location.reload();
                                    }, 500);
                                });
                            } else {
                                // First installation
                                console.log('✅ Service Worker installed for the first time');
                            }
                        }
                    });
                });
            })
            .catch(error => {
                console.error('❌ Service Worker registration failed:', error);
            });

        // Handle controller change
        navigator.serviceWorker.addEventListener('controllerchange', () => {
            console.log('🔄 Service Worker controller changed');
        });
    });
}

// Clear old application cache on startup
window.addEventListener('load', () => {
    if ('caches' in window) {
        caches.keys().then(cacheNames => {
            cacheNames.forEach(cacheName => {
                // Keep only the current cache version
                if (cacheName.startsWith('successcall-cache-') && cacheName !== CACHE_NAME) {
                    console.log('🗑️ Removing old cache:', cacheName);
                    caches.delete(cacheName);
                }
            });
        });
    }
});

// Force refresh if coming from cache
window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        console.log('📄 Page loaded from bfcache, checking for updates...');
        window.location.reload();
    }
});

// Detect online/offline status
window.addEventListener('online', () => {
    console.log('🌐 Online: Checking for updates...');
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(registration => {
            registration.update();
        });
    }
});

window.addEventListener('offline', () => {
    console.log('📴 Offline mode');
});
