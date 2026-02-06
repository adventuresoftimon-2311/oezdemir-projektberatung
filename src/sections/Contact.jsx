import React from 'react';
import Button from '../components/Button';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4">

                <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="bg-primary-gold p-6 text-center">
                        <h2 className="text-3xl font-thin text-white font-display">Kontakt</h2>
                    </div>

                    <div className="p-8 md:p-12">
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-light text-gray-700 mb-2">Name*</label>
                                <input type="text" className="w-full px-4 py-3 rounded border border-gray-300 focus:border-primary-gold focus:ring-2 focus:ring-primary-gold/50 outline-none transition-all font-extralight" placeholder="Ihr Name" />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-light text-gray-700 mb-2">E-Mail Adresse*</label>
                                    <input type="email" className="w-full px-4 py-3 rounded border border-gray-300 focus:border-primary-gold focus:ring-2 focus:ring-primary-gold/50 outline-none transition-all font-extralight" placeholder="ihre@email.de" />
                                </div>
                                <div>
                                    <label className="block text-sm font-light text-gray-700 mb-2">Telefonnummer</label>
                                    <input type="tel" className="w-full px-4 py-3 rounded border border-gray-300 focus:border-primary-gold focus:ring-2 focus:ring-primary-gold/50 outline-none transition-all font-extralight" placeholder="+49 ..." />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-light text-gray-700 mb-2">Ihre Nachricht</label>
                                <textarea className="w-full px-4 py-3 rounded border border-gray-300 focus:border-primary-gold focus:ring-2 focus:ring-primary-gold/50 outline-none transition-all h-32 resize-none font-extralight" placeholder="Wie kann ich Sie unterstützen?"></textarea>
                            </div>

                            <div className="flex items-start">
                                <input type="checkbox" className="mt-1 mr-3 rounded border-gray-300 text-primary-gold focus:ring-primary-gold" />
                                <span className="text-xs text-gray-500 font-extralight">
                                    Ich stimme zu, dass meine Angaben zur Kontaktaufnahme und Zuordnung für eventuelle Rückfragen dauerhaft gespeichert werden. Hinweis: Diese Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen.
                                </span>
                            </div>

                            <div className="text-center pt-4">
                                <Button variant="primary" className="w-full md:w-auto px-12 py-4 text-lg font-medium">
                                    Nachricht absenden
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;
