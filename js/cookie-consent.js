class CookieConsent {
    constructor() {
        this.consentKey = 'cookie-consent-set';
        this.createBanner();
        this.checkConsent();
    }

    createBanner() {
        const banner = document.createElement('div');
        banner.id = 'cookie-consent-banner';
        banner.innerHTML = `
            <div class="cookie-content">
                <p>This website uses cookies to enhance your experience and analyze site traffic. 
                   By clicking "Accept", you consent to our use of cookies.</p>
                <div class="cookie-buttons">
                    <button id="accept-cookies">Accept</button>
                    <button id="reject-cookies">Reject</button>
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
            document.getElementById('cookie-consent-banner').style.display = 'block';
        }
    }

    setConsent(accepted) {
        localStorage.setItem(this.consentKey, accepted);
        document.getElementById('cookie-consent-banner').style.display = 'none';
        
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
