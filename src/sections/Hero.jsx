import React from 'react';
import Button from '../components/Button';
import { Check } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex items-center justify-center min-h-[80vh] overflow-hidden bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center bg-fixed">
            {/* White Overlay */}
            <div className="absolute inset-0 bg-white/40 md:bg-white/90 z-0"></div>

            <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
                <div className="w-fit mx-auto flex flex-col items-start text-left max-w-5xl">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-normal md:font-thin font-display leading-tight mb-8 text-primary-darkblue text-left">
                        Projektunterstützung in Planung und <br className="hidden md:block" />
                        Ausschreibung, bei energetischen <br className="hidden md:block" />
                        Sanierungen sowie in Großprojekten
                    </h1>

                    <div className="flex flex-col gap-4 mb-12 w-full items-start">
                        <div className="flex items-start gap-4">
                            <Check className="text-primary-gold w-5 h-5 md:w-6 md:h-6 flex-shrink-0 mt-1.5 md:mt-2" />
                            <h2 className="text-lg md:text-2xl font-extralight text-gray-700 text-left leading-snug">
                                Trockenbaukompetenz in Planung und Ausschreibung
                            </h2>
                        </div>
                        <div className="flex items-start gap-4">
                            <Check className="text-primary-gold w-5 h-5 md:w-6 md:h-6 flex-shrink-0 mt-1.5 md:mt-2" />
                            <h2 className="text-lg md:text-2xl font-extralight text-gray-700 text-left leading-snug">
                                Energetische Sanierungen im Ein- und Mehrfamilienhaus
                            </h2>
                        </div>
                        <div className="flex items-start gap-4">
                            <Check className="text-primary-gold w-5 h-5 md:w-6 md:h-6 flex-shrink-0 mt-1.5 md:mt-2" />
                            <h2 className="text-lg md:text-2xl font-extralight text-gray-700 text-left leading-snug">
                                Projektbegleitende Unterstützung bei Großprojekten der Kostengruppe 300
                            </h2>
                        </div>
                    </div>



                    <div className="flex flex-col sm:flex-row gap-6 w-full justify-start">
                        <Button variant="primary" onClick={() => window.location.href = '#contact'} className="text-lg md:text-xl px-10 py-5 shadow-lg hover:shadow-primary-gold/50 transition-all font-medium">
                            Kostenlos Erstgespräch vereinbaren
                        </Button>
                        <Button variant="outline" onClick={() => window.location.href = '#services'} className="text-lg md:text-xl px-10 py-5 border-2 border-primary-darkblue text-primary-darkblue hover:bg-primary-darkblue hover:text-white transition-all font-medium">
                            Mehr erfahren
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
