class CookieConsent {
    constructor() {
        this.consentKey = 'cookie-consent-set';
        this.createBanner();
        // Small delay to ensure smooth animation
        setTimeout(() => this.checkConsent(), 1000);
    }

    createBanner() {
        const banner = document.createElement('div');
        banner.id = 'cookie-consent-banner';
        banner.style.opacity = '0';
        banner.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        banner.innerHTML = `
            <div class="cookie-content">
                <p>We use cookies to enhance your browsing experience and analyze site traffic. 
                   Your privacy is important to us.</p>
                <div class="cookie-buttons">
                    <button id="accept-cookies">Accept All</button>
                    <button id="reject-cookies">Reject All</button>
                    <a href="/privacy/cookie-consent.html">Cookie Settings</a>
                </div>
            </div>
        `;
        document.body.appendChild(banner);

        // Add event listeners
        document.getElementById('accept-cookies').addEventListener('click', () => this.setConsent(true));
        document.getElementById('reject-cookies').addEventListener('click', () => this.setConsent(false));
    }

    checkConsent() {
        if (!localStorage.getItem(this.consentKey)) {
            const banner = document.getElementById('cookie-consent-banner');
            banner.style.display = 'block';
            // Force reflow
            banner.offsetHeight;
            banner.style.opacity = '1';
        }
    }

    setConsent(accepted) {
        localStorage.setItem(this.consentKey, accepted);
        const banner = document.getElementById('cookie-consent-banner');
        banner.style.opacity = '0';
        banner.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            banner.style.display = 'none';
        }, 300);
        
        // If accepted, initialize Google Analytics
        if (accepted && typeof gtag === 'function') {
            gtag('consent', 'update', {
                'analytics_storage': 'granted'
            });
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new CookieConsent();
});
