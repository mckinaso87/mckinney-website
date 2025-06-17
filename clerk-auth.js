// Clerk Authentication Helper - Simplified Version
// This file provides a consistent authentication approach across pages

// Initialize Clerk with your publishable key
const clerkPublishableKey = 'pk_test_cm9idXN0LWFscGFjYS05OS5jbGVyay5hY2NvdW50cy5kZXYk'; // Will be replaced with production key

/**
 * Initialize Clerk authentication with a simpler approach to prevent redirect loops
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
        // Load Clerk script if not already loaded
        if (!window.Clerk) {
            // Set up Clerk async init
            window.clerkAsyncInit = function() {
                Clerk.load({
                    publishableKey: clerkPublishableKey
                });
            };
            
            // Wait for Clerk to load
            await new Promise((resolve) => {
                const checkClerk = setInterval(() => {
                    if (window.Clerk) {
                        clearInterval(checkClerk);
                        resolve();
                    }
                }, 100);
                
                // Timeout after 5 seconds
                setTimeout(() => {
                    clearInterval(checkClerk);
                    resolve();
                }, 5000);
            });
        }
        
        // Wait for Clerk to be ready
        if (window.Clerk) {
            // Wait a moment for Clerk to initialize
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Check if user is authenticated
            const isAuthenticated = !!window.Clerk.user;
            
            // Remove any query parameters to prevent loops
            if (window.location.search) {
                window.history.replaceState({}, document.title, window.location.pathname);
            }
            
            if (isAuthenticated) {
                // User is authenticated, show content
                if (contentElement) contentElement.style.display = 'block';
                
                // Mount user button if it exists
                const userButtonElement = document.getElementById('user-button');
                if (userButtonElement && window.Clerk.mountUserButton) {
                    window.Clerk.mountUserButton(userButtonElement, {
                        afterSignOutUrl: 'https://accounts.mckinney.es/sign-in'
                    });
                }
            }
            
            // Hide loading indicator
            if (loadingElement) loadingElement.style.display = 'none';
            
            return isAuthenticated;
        } else {
            // Clerk failed to load
            if (loadingElement) loadingElement.style.display = 'none';
            return false;
        }
    } catch (error) {
        console.error('Error initializing Clerk:', error);
        
        // Hide loading indicator
        if (loadingElement) loadingElement.style.display = 'none';
        
        return false;
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
    
    // Use a direct link to sign-in without redirect parameters
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
    
    .loading-auth {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        flex-direction: column;
    }
`;
document.addEventListener('DOMContentLoaded', function() {
    document.head.appendChild(style);
});
