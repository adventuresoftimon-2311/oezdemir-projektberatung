import React, { useState } from 'react';
import Button from '../components/Button';
import service1 from '../assets/service1.png';
import service2 from '../assets/service2.png';
import service3 from '../assets/service3.png';
import service4 from '../assets/service4.png';

const ServiceItem = ({ title, subtitle, description, detailsText, detailsList, image, isReversed }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-stretch bg-white/60 backdrop-blur-md rounded-3xl overflow-hidden shadow-xl mb-12`}>

            {/* Image Section */}
            <div className="w-full md:w-2/5 relative min-h-[300px]">
                <img
                    src={image}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Overlay for better text contrast if needed, slightly darkens image */}
                <div className="absolute inset-0 bg-black/10"></div>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center text-primary-darkblue">
                <h3 className="text-2xl md:text-3xl font-thin font-display mb-2 uppercase tracking-wide">
                    {title}
                </h3>
                {subtitle && (
                    <h4 className="text-lg font-light mb-4 text-gray-800">
                        {subtitle}
                    </h4>
                )}

                <p className="font-extralight text-lg leading-relaxed mb-6">
                    {description}
                </p>

                {/* Expandable Details */}
                <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mb-8' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                        <div className="border-l-4 border-primary-darkblue pl-4">
                            {detailsText && (
                                <p className="text-gray-700 leading-relaxed italic mb-4 font-extralight">
                                    {detailsText}
                                </p>
                            )}
                            {detailsList && detailsList.length > 0 && (
                                <ul className="space-y-2">
                                    {detailsList.map((item, idx) => (
                                        <li key={idx} className="flex items-start text-gray-700 font-extralight">
                                            <span className="font-light mr-2 mt-1.5 text-xs">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>

                <div className="mt-auto">
                    <Button
                        variant="dark"
                        className="px-6 py-2 text-sm font-medium"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? 'Weniger anzeigen' : 'Mehr erfahren'}
                    </Button>
                </div>
            </div>
        </div>
    );
};

const Services = () => {
    const services = [
        {
            title: "Planung & Ausschreibung",
            subtitle: "Technische Prüfung, Weiterentwicklung und Absicherung der Planung im Trockenbau",
            description: "In der Planungs- und Ausschreibungsphase erfolgt eine unabhängige technische Prüfung, fachliche Unterstützung und aktive Weiterbearbeitung der Ausschreibung im Trockenbau.",
            detailsText: "Ziel ist es, bestehende Planungen frühzeitig auf Plausibilität, Vollständigkeit und Umsetzbarkeit zu überprüfen und eine belastbare Planungssicherheit herzustellen. Nach einer gemeinsamen Durchsicht und fachlichen Bewertung der vorhandenen Planungsunterlagen und Leistungsverzeichnisse wird die Ausschreibung eigenständig zur weiteren Ausarbeitung übernommen. Technische Unklarheiten werden bereinigt, Leistungen eindeutig formuliert, fehlende Inhalte ergänzt sowie wirtschaftlich sinnvolle, system- und produktneutrale Lösungsansätze integriert. So entstehen technisch saubere, praxisgerechte und belastbare Ausschreibungen als Grundlage für wirtschaftlich stabile und möglichst nachtragsarme Projekte.",
            detailsList: [
                "Technische Unterstützung und Plausibilitätsprüfung der vorliegenden Planung von Planungsbüros und Projektsteuerern",
                "Gemeinsame Analyse und fachliche Bewertung bestehender Ausschreibungsunterlagen",
                "Eigenständige Überarbeitung und Ausformulierung der Leistungsverzeichnisse nach Abstimmung",
                "Ergänzung fehlender Leistungen sowie Integration technischer und wirtschaftlicher Alternativen",
                "Fachliche Unterstützung der Planungsteams bei trockenbauspezifischen Fragestellungen",
                "Prüfung und Optimierung der Leistungsverzeichnisse auf Vollständigkeit, technische Richtigkeit und praktische Umsetzbarkeit",
                "Abgleich der ausgeschriebenen Positionen mit den Planunterlagen zur Sicherstellung konsistenter Texte, Mengen und Details",
                "Identifikation unpassender, widersprüchlicher oder ungeprüft übernommener Positionen",
                "Strukturierte Klärung technischer Schnittstellen, insbesondere zu Brandschutz, Schallschutz und TGA",
                "Wirtschaftliche Absicherung der Ausschreibung zur Reduzierung von Ausführungsrisiken und Nachträgen"
            ],
            image: service1
        },
        {
            title: "Bauphase / Großprojekte",
            subtitle: "Technische Unterstützung in Großprojekten",
            description: "Bei Großprojekten kann während der Bauphase eine technische Unterstützung innerhalb der Kostengruppe 300 in Anspruch genommen werden. Der Einsatz erfolgt situationsabhängig und bedarfsgerecht in den jeweiligen Projektphasen.",
            detailsText: "",
            detailsList: [
                "Technische Begleitung und Unterstützung während der Bauausführung",
                "Prüfung, Bewertung und Plausibilisierung von Nachträgen",
                "Analyse technischer und wirtschaftlicher Hintergründe bei Abweichungen",
                "Entwicklung wirtschaftlicher, system- und fabrikatsneutraler Alternativen",
                "Unterstützung bei Änderungen durch Bauherrn oder TGA",
                "Kommunikation und Abstimmung zwischen Bauleitung, Planung und Ausführung",
                "Stabilisierung der Bauabwicklung in kritischen, intensiven oder terminlich sensiblen Projektphasen"
            ],
            image: service2
        },
        {
            title: "Private Bauherren",
            subtitle: "Energetische Sanierungen im Ein- und Mehrfamilienhaus",
            description: "Viele private Bauherren stehen heute vor der Frage, wie ihr Gebäude zukunftsfähig saniert werden kann. Förderungen, technische Möglichkeiten und bauliche Voraussetzungen sind oft unübersichtlich, und nicht jedes Gebäude ist unmittelbar für erneuerbare Energien geeignet.",
            detailsText: "Energetische Sanierungen werden ganzheitlich begleitet – von der Planung bis zur Abwicklung. Ziel ist es, gemeinsam mit den Bauherren ein verständliches und realisierbares Sanierungskonzept zu entwickeln und eine tragfähige bauliche sowie energetische Basis für den sinnvollen Einsatz erneuerbarer Energien zu schaffen.",
            detailsList: [
                "Analyse des baulichen und energetischen Ist-Zustands",
                "Entwicklung eines individuellen Sanierungsplans",
                "Technische und wirtschaftliche Begleitung bis zum Projektabschluss",
                "Zugriff auf ein bewährtes Netzwerk qualifizierter Fachunternehmen und Baustoffhändler",
                "Koordination von Handwerkern und Abstimmung der einzelnen Gewerke",
                "Einsatz erprobter Baustoffe und wirtschaftlicher Lösungen",
                "Schaffung einer zukunftssicheren Basis für erneuerbare Energien"
            ],
            image: service3
        },
        {
            title: "Mehrwert",
            subtitle: "Ihr Mehrwert – Planungssicherheit, Projektstabilität und nachhaltige Entlastung",
            description: "Der Mehrwert wirkt über das einzelne Projekt hinaus. Eine fachlich klare Begleitung in Planung und Bauphase schafft Sicherheit, reduziert Reibungsverluste und stabilisiert Projekte dauerhaft – technisch, wirtschaftlich und organisatorisch.",
            detailsText: "Mehrwert für Projektbeteiligte und Bauherren:",
            detailsList: [
                "Planungs- und Projektsicherheit durch klare technische und wirtschaftliche Entscheidungsgrundlagen",
                "Spürbare Entlastung von Projektsteuerung, Bauleitung und Projektteams bei komplexen Projektanforderungen",
                "Nachhaltiger Wissenstransfer und fachliche Stärkung der beteiligten Teams",
                "Mehr Ruhe und Struktur in der Projektabwicklung, auch unter Zeit- und Kostendruck",
                "Mehrwert für private Bauherren durch eine solide bauliche und energetische Grundlage des Gebäudes"
            ],
            image: service4
        }
    ];

    return (
        <section id="services" className="py-20 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80')] bg-cover bg-center bg-fixed relative">
            <div className="absolute inset-0 bg-white/90"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-thin text-primary-darkblue font-display mb-4 uppercase tracking-widest">
                        Mein Leistungsangebot
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-600 uppercase tracking-widest text-sm">
                        Kompetenz · Erfahrung · Lösung
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    {services.map((service, index) => (
                        <ServiceItem
                            key={index}
                            title={service.title}
                            subtitle={service.subtitle}
                            description={service.description}
                            detailsText={service.detailsText}
                            detailsList={service.detailsList}
                            image={service.image}
                            isReversed={index % 2 !== 0}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

