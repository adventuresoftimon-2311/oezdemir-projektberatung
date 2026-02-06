import React, { useState } from 'react';
import Button from '../components/Button';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        privacyAccepted: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.privacyAccepted) {
            alert('Bitte akzeptieren Sie die Datenschutzhinweise.');
            return;
        }

        const subject = `Anfrage über Webseite von ${formData.name}`;
        const body = `Name: ${formData.name}
E-Mail: ${formData.email}
Telefon: ${formData.phone}

Nachricht:
${formData.message}`;

        const mailtoLink = `mailto:info@oezdemir-pb.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;

        // Reset form fields
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
            privacyAccepted: false
        });
    };

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Left Column: Microsoft Booking */}
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden flex flex-col h-[800px] lg:h-auto">
                        <div className="bg-primary-gold p-4 text-center">
                            <h2 className="text-2xl font-light text-white font-display">Termin buchen</h2>
                        </div>
                        <div className="flex-grow">
                            <iframe
                                src="https://outlook.office.com/book/zdemirProjektberatungErstgesprch@oezdemir-pb.de/?ismsaljsauthenabled"
                                style={{ border: 0, width: '100%', height: '100%' }}
                                frameBorder="0"
                                title="Termin buchen"
                            ></iframe>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                        <div className="bg-primary-gold p-4 text-center">
                            <h2 className="text-2xl font-light text-white font-display">Nachricht senden</h2>
                        </div>
                        <div className="p-8 md:p-12">
                            <div className="mb-6">
                                <p className="text-gray-600 font-extralight">
                                    Kein passender Termin dabei? Schreiben Sie mir einfach eine Nachricht über das Kontaktformular.
                                </p>
                            </div>

                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label className="block text-sm font-light text-gray-700 mb-2">Name*</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded border border-gray-300 focus:border-primary-gold focus:ring-2 focus:ring-primary-gold/50 outline-none transition-all font-extralight"
                                        placeholder="Ihr Name"
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-light text-gray-700 mb-2">E-Mail Adresse*</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded border border-gray-300 focus:border-primary-gold focus:ring-2 focus:ring-primary-gold/50 outline-none transition-all font-extralight"
                                            placeholder="ihre@email.de"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-light text-gray-700 mb-2">Telefonnummer</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded border border-gray-300 focus:border-primary-gold focus:ring-2 focus:ring-primary-gold/50 outline-none transition-all font-extralight"
                                            placeholder="+49 ..."
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-light text-gray-700 mb-2">Ihre Nachricht</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded border border-gray-300 focus:border-primary-gold focus:ring-2 focus:ring-primary-gold/50 outline-none transition-all h-32 resize-none font-extralight"
                                        placeholder="Wie kann ich Sie unterstützen?"
                                    ></textarea>
                                </div>

                                <div className="flex items-start">
                                    <input
                                        type="checkbox"
                                        name="privacyAccepted"
                                        checked={formData.privacyAccepted}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 mr-3 rounded border-gray-300 text-primary-gold focus:ring-primary-gold"
                                    />
                                    <span className="text-xs text-gray-500 font-extralight">
                                        Ich stimme zu, dass meine Angaben zur Kontaktaufnahme und Zuordnung für eventuelle Rückfragen dauerhaft gespeichert werden. Hinweis: Diese Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen.
                                    </span>
                                </div>

                                <div className="text-center pt-4">
                                    <Button type="submit" variant="primary" className="w-full md:w-auto px-12 py-4 text-lg font-medium">
                                        Nachricht absenden
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
