import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full bg-primary-darkblue text-white p-4 z-50 shadow-2xl border-t border-primary-gold">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-sm font-light text-center md:text-left">
                    <p>
                        Diese Website verwendet Cookies, um Ihnen die bestmögliche Nutzung unserer Website zu ermöglichen.
                        Weitere Informationen finden Sie in unserer <Link to="/datenschutz" className="underline hover:text-primary-gold text-white transition-colors">Datenschutzerklärung</Link>.
                    </p>
                </div>
                <div className="flex-shrink-0">
                    <Button variant="primary" onClick={handleAccept} className="px-6 py-2 text-sm shadow-none hover:shadow-primary-gold/50">
                        Akzeptieren
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;
