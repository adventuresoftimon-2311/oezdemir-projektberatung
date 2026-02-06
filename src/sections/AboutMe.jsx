import React from 'react';
import Button from '../components/Button';
import aboutMeImage from '../assets/aboutme.png';

const AboutMe = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Image Column */}
                    <div className="w-full md:w-1/2">
                        <div className="relative">
                            <div className="absolute top-4 left-4 w-full h-full border-2 border-primary-gold rounded-3xl -z-10 bg-transparent"></div>
                            <div className="rounded-3xl overflow-hidden shadow-xl w-full h-[600px]">
                                <img
                                    src={aboutMeImage}
                                    alt="Faruk Özdemir"
                                    className="w-full h-full object-cover object-top scale-105"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-thin text-primary-darkblue font-display mb-6">
                            Über Mich – Erfahrung, die Entlastung schafft.
                        </h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed text-lg font-extralight">
                            <h3 className="font-light text-xl text-primary-gold mb-4">Faruk Özdemir</h3>
                            <p>
                                Auf der Baustelle habe ich immer wieder erlebt, wie kleine Unklarheiten große Auswirkungen haben können. Diese Erfahrungen haben mich dazu bewogen, meine Arbeit so auszurichten, dass Projekte von der Planung bis zur Ausführung Klarheit, Sicherheit und Struktur gewinnen.
                            </p>
                            <p>
                                Mit über 25 Jahren Erfahrung im Trocken- und Innenausbau unterstütze ich Planer, Architekten, Generalunternehmer sowie Projektsteuerer in allen relevanten Leistungsphasen. Im Laufe meines Berufslebens habe ich zahlreiche Großprojekte begleitet und verantwortet.
                            </p>
                            <p>
                                Mein Fokus liegt auf dem frühzeitigen Erkennen von Risiken sowie der Entwicklung technisch fundierter, wirtschaftlich sinnvoller und praxisnah umsetzbarer Lösungen. Neben dem klassischen Trockenbau begleite ich auch Großprojekte der Kostengruppe 300 sowie private Bauherren im Ein- und Mehrfamilienhausbereich bei energetischen Sanierungen von der Planung bis zur Abwicklung.
                            </p>
                            <p>
                                Meine Wurzeln liegen im Handwerk. Dieses Fundament prägt meine Arbeit bis heute, lösungsorientiert, praxisnah und mit einem klaren Blick für Qualität, Wirtschaftlichkeit und erfolgreiche Projektabläufe. Entscheidungen basieren dabei nicht nur auf Theorie oder Zeichnungen, sondern auf einem tiefen Verständnis der tatsächlichen Abläufe auf der Baustelle.
                            </p>

                            <div className="pt-6">
                                <Button variant="outline" className="font-medium">
                                    Kontakt aufnehmen
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
