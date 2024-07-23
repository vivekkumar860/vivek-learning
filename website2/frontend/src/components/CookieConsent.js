import React, { useState } from 'react';

function CookieConsent() {
    const [consent, setConsent] = useState(false);

    const handleAccept = () => {
        setConsent(true);
        // Implement cookie consent functionality
    };

    if (consent) return null;

    return (
        <div className="cookie-consent">
            <p>This website uses cookies to enhance the user experience.</p>
            <button onClick={handleAccept}>Accept</button>
        </div>
    );
}

export default CookieConsent;
