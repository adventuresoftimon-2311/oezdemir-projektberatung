import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-50 text-primary-darkblue py-12 border-t border-gray-100 relative z-10 transition-all duration-300">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <div className="mb-4">
                            <Link to="/">
                                <img src="./logo.png" alt="Özdemir Projektberatung" className="h-24 w-auto object-contain" />
                            </Link>
                        </div>
                        <p className="text-gray-600 text-sm">
                            Ihr Partner für technischen Support im Trockenbau.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-primary-darkblue">Kontakt</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="mailto:info@oezdemir-pb.de" className="hover:text-primary-gold transition-colors">info@oezdemir-pb.de</a></li>
                            <li><a href="tel:+4915155548698" className="hover:text-primary-gold transition-colors">+49 151 55548698</a></li>
                            <li>Stiller Weg 2<br />28201 Bremen</li>
                        </ul>
                    </div>

                    <div className="flex items-center justify-center">
                        <a href="https://www.linkedin.com/in/faruk-özdemir-5271a7172/" target="_blank" rel="noopener noreferrer">
                            <img src="./linkedin-logo.jpg" alt="LinkedIn Profil" className="h-12 w-auto hover:opacity-80 transition-opacity" />
                        </a>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-primary-darkblue">Rechtliches</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link to="/impressum" className="hover:text-primary-gold transition-colors">Impressum</Link></li>
                            <li><Link to="/datenschutz" className="hover:text-primary-gold transition-colors">Datenschutz</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 text-center text-xs text-gray-500">
                    &copy; {new Date().getFullYear()} Özdemir Projektberatung. Alle Rechte vorbehalten.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
