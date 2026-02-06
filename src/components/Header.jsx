import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed w-full top-0 z-50 bg-white/60 backdrop-blur-md shadow-sm transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center relative transition-all duration-300">
                {/* Logo */}
                <div className="flex items-center z-20">
                    <Link to="/">
                        <img
                            src="./logo.png"
                            alt="Özdemir Projektberatung"
                            className={`w-auto object-contain transition-all duration-300 ${isScrolled ? 'h-10 md:h-12' : 'h-12 md:h-16'}`}
                        />
                    </Link>
                </div>

                {/* Desktop Nav - Centered */}
                <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Link to="/#hero" className={`text-primary-darkblue hover:text-primary-gold font-extralight transition-all duration-300 ${isScrolled ? 'text-base' : 'text-xl'}`}>Start</Link>
                    <Link to="/#services" className={`text-primary-darkblue hover:text-primary-gold font-extralight transition-all duration-300 ${isScrolled ? 'text-base' : 'text-xl'}`}>Leistungen</Link>
                    <Link to="/#about" className={`text-primary-darkblue hover:text-primary-gold font-extralight transition-all duration-300 ${isScrolled ? 'text-base' : 'text-xl'}`}>Über Mich</Link>
                    <Link to="/#contact" className={`text-primary-darkblue hover:text-primary-gold font-extralight transition-all duration-300 ${isScrolled ? 'text-base' : 'text-xl'}`}>Kontakt</Link>
                </nav>

                {/* Right Side: Button & Mobile Toggle */}
                <div className="flex items-center gap-4 z-20">
                    {/* Desktop Button */}
                    <div className="hidden md:block">
                        <Button variant="primary" onClick={() => window.location.href = '#contact'} className={`transition-all duration-300 ${isScrolled ? 'py-2 px-6 text-sm' : ''} font-medium`}>
                            Kostenlos Termin buchen
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-primary-darkblue"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0">
                    <div className="flex flex-col p-4 space-y-4 shadow-lg">
                        <Link to="/#hero" className="text-primary-darkblue font-extralight" onClick={() => setIsOpen(false)}>Start</Link>
                        <Link to="/#services" className="text-primary-darkblue font-extralight" onClick={() => setIsOpen(false)}>Leistungen</Link>
                        <Link to="/#about" className="text-primary-darkblue font-extralight" onClick={() => setIsOpen(false)}>Über Mich</Link>
                        <Link to="/#contact" className="text-primary-darkblue font-extralight" onClick={() => setIsOpen(false)}>Kontakt</Link>
                        <Button variant="primary" onClick={() => { setIsOpen(false); window.location.href = '#contact'; }} className="w-full text-center font-medium">
                            Kostenlos Termin buchen
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
