// Service Worker Loader with Auto-Update
// This script manages service worker registration and automatic updates

// Track if we've already reloaded to prevent loops
const RELOAD_KEY = 'sw_reloaded';
const LAST_VERSION_KEY = 'sw_last_version';

// Register service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Register service worker without version query to avoid constant updates
        navigator.serviceWorker.register('/flutter_service_worker.js', {
            updateViaCache: 'none',
            scope: '/'
        })
            .then(registration => {
                console.log('✅ Service Worker registered:', registration.scope);

                // Only check for updates when the service worker itself detects changes
                // No periodic checking - updates happen automatically when you deploy new files

                // Listen for updates
                registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;
                    console.log('🔄 New version found, installing...');

                    newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                            // Check if we just reloaded to avoid loop
                            const justReloaded = sessionStorage.getItem(RELOAD_KEY);

                            if (justReloaded) {
                                console.log('✅ Already reloaded, skipping auto-reload');
                                sessionStorage.removeItem(RELOAD_KEY);
                                return;
                            }

                            // New service worker installed, reload to activate
                            console.log('✨ New version ready! Reloading page...');

                            // Mark that we're about to reload
                            sessionStorage.setItem(RELOAD_KEY, 'true');

                            // Reload after a short delay
                            setTimeout(() => {
                                window.location.reload();
                            }, 1000);
                        } else if (newWorker.state === 'activated') {
                            console.log('✅ Service Worker activated');
                        }
                    });
                });
            })
            .catch(error => {
                console.error('❌ Service Worker registration failed:', error);
            });
    });
}

// Clear old application cache on startup (once per session)
if (!sessionStorage.getItem('cache_cleaned')) {
    if ('caches' in window) {
        caches.keys().then(cacheNames => {
            // Clean up old versioned caches
            const oldCaches = cacheNames.filter(name =>
                name.startsWith('successcall-cache-') && name !== 'successcall-cache-current'
            );

            if (oldCaches.length > 0) {
                console.log('🗑️ Cleaning', oldCaches.length, 'old cache(s)');
                Promise.all(oldCaches.map(name => caches.delete(name)));
            }
        });
        sessionStorage.setItem('cache_cleaned', 'true');
    }
}

// Remove aggressive pageshow reload - it causes infinite loops
// Detect online/offline status for logging only
window.addEventListener('online', () => {
    console.log('🌐 Back online');
});

window.addEventListener('offline', () => {
    console.log('📴 Offline mode');
});