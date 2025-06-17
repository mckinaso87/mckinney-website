// Clerk Authentication Helper
// This file provides a consistent authentication approach across pages

// Initialize Clerk with your publishable key
const clerkPublishableKey = 'pk_test_cm9idXN0LWFscGFjYS05OS5jbGVyay5hY2NvdW50cy5kZXYk'; // Will be replaced with production key

/**
 * Initialize Clerk authentication with proper hydration handling to prevent redirect loops
 * @param {string} contentElementId - ID of the content element to show after authentication
 * @param {string} loadingElementId - ID of the loading indicator element
 * @returns {Promise<boolean>} - Whether the user is authenticated
 */
async function initializeClerk(contentElementId, loadingElementId) {
    // Hide content until authentication is confirmed
    const contentElement = document.getElementById(contentElementId);
    if (contentElement) contentElement.style.display = 'none';
    
    // Show loading indicator
    const loadingElement = document.getElementById(loadingElementId);
    if (loadingElement) loadingElement.style.display = 'flex';
    
    try {
        // Initialize Clerk without any automatic redirects
        window.Clerk = window.Clerk || {};
        window.clerkAsyncInit = function() {
            Clerk.load({
                publishableKey: clerkPublishableKey,
                // CRITICAL: No redirects configured here to prevent loops
                allowedRedirectOrigins: ['https://mckinney.es', 'http://localhost:8000', 'https://accounts.mckinney.es']
            });
        };
        
        // Wait for Clerk to be fully loaded and hydrated
        await waitForClerkHydration();
        
        // Now check authentication state only after full hydration
        return checkAuthState(contentElementId, loadingElementId);
    } catch (error) {
        console.error('Error initializing Clerk:', error);
        // Hide loading indicator
        if (loadingElement) loadingElement.style.display = 'none';
        return false;
    }
}

/**
 * Wait for Clerk to be fully loaded and hydrated
 * This is critical to prevent redirect loops caused by checking auth state too early
 */
async function waitForClerkHydration() {
    return new Promise((resolve) => {
        // If already loaded and ready, resolve immediately
        if (window.Clerk && window.Clerk.isReady()) {
            resolve();
            return;
        }
        
        // Set a timeout to prevent infinite waiting
        const timeout = setTimeout(() => {
            console.warn('Clerk hydration timeout - continuing anyway');
            resolve();
        }, 5000);
        
        // Check periodically for Clerk to be ready
        const interval = setInterval(() => {
            if (window.Clerk && window.Clerk.isReady()) {
                clearInterval(interval);
                clearTimeout(timeout);
                resolve();
            }
        }, 100);
    });
}

/**
 * Check authentication state after Clerk is fully hydrated
 * Only proceeds if Clerk is fully loaded to prevent premature auth checks
 */
function checkAuthState(contentElementId, loadingElementId) {
    const contentElement = document.getElementById(contentElementId);
    const loadingElement = document.getElementById(loadingElementId);
    
    // Only proceed if Clerk is fully loaded
    if (!window.Clerk || !window.Clerk.isReady()) {
        if (loadingElement) loadingElement.style.display = 'none';
        return false;
    }
    
    // Check if user is authenticated
    if (Clerk.user) {
        // User is authenticated, show content
        if (contentElement) contentElement.style.display = 'block';
        if (loadingElement) loadingElement.style.display = 'none';
        
        // Mount user button if it exists
        mountUserButton();
        return true;
    } else {
        // User is not authenticated
        if (loadingElement) loadingElement.style.display = 'none';
        return false;
    }
}

/**
 * Mount user button with proper styling
 * Only called after authentication is confirmed
 */
function mountUserButton() {
    const userButton = document.getElementById('user-button');
    if (userButton && window.Clerk && window.Clerk.isReady()) {
        userButton.innerHTML = '';
        Clerk.mountUserButton(userButton, {
            afterSignOutUrl: 'https://accounts.mckinney.es/sign-in',
            appearance: {
                elements: {
                    rootBox: {
                        width: '110px',
                        height: '40px'
                    },
                    avatarBox: {
                        width: '32px',
                        height: '32px'
                    }
                }
            }
        });
    }
}

/**
 * Show authentication UI with manual sign-in prompt
 * This replaces automatic redirects to prevent loops
 */
function showAuthUI(message, container) {
    // Create auth prompt
    const authDiv = document.createElement('div');
    authDiv.className = 'auth-prompt';
    authDiv.style.textAlign = 'center';
    authDiv.style.padding = '2rem';
    authDiv.style.backgroundColor = '#fff';
    authDiv.style.borderRadius = '8px';
    authDiv.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    authDiv.style.margin = '100px auto';
    authDiv.style.maxWidth = '500px';
    
    authDiv.innerHTML = `
        <h2>Authentication Required</h2>
        <p>${message || 'You need to be signed in to access this content.'}</p>
        <a href="https://accounts.mckinney.es/sign-in" class="auth-button" style="margin-top: 1rem; display: inline-block; text-decoration: none; padding: 0.5rem 1rem; background-color: #007bff; color: white; border-radius: 4px;">Sign In</a>
    `;
    
    // Insert before container or append to body
    if (container) {
        document.body.insertBefore(authDiv, container);
    } else {
        document.body.appendChild(authDiv);
    }
}

// Add CSS for spinner and auth UI
const style = document.createElement('style');
style.textContent = `
    .spinner {
        border: 4px solid rgba(0, 0, 0, 0.1);
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border-left-color: #007bff;
        animation: spin 1s linear infinite;
        margin-right: 10px;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    .auth-button {
        margin-top: 1rem;
        display: inline-block;
        text-decoration: none;
        padding: 0.5rem 1rem;
        background-color: #007bff;
        color: white;
        border-radius: 4px;
    }
    
    .auth-prompt {
        text-align: center;
        padding: 2rem;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        margin: 100px auto;
        max-width: 500px;
    }
`;
document.addEventListener('DOMContentLoaded', function() {
    document.head.appendChild(style);
});
