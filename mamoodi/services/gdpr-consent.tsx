// components/GDPRConsent.tsx
import React from 'react';
import CookieConsent from 'react-cookie-consent';

const GDPRConsent: React.FC = () => {
    return (
        <CookieConsent
            location="bottom"
            buttonText="I understand"
            cookieName="gdprConsent"
            style={{ background: "#2B373B" }}
            buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
            expires={150}
        >
            This website uses cookies to enhance the user experience.{" "}
            <span style={{ fontSize: "10px" }}>This is required to comply with GDPR.</span>
        </CookieConsent>
    );
}

export default GDPRConsent;
