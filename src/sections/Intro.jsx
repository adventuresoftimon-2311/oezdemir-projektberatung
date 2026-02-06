import React from 'react';

const Intro = () => {
    return (
        <section className="py-16 bg-white border-b border-gray-100">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-extralight">
                        Im Trockenbau unterstütze ich <span className="font-light text-primary-darkblue">Planungsbüros, Architekten, Projektsteuerer, die öffentliche Hand und Generalunternehmer</span> gezielt in der Planungs- und Ausschreibungsphase.
                    </p>
                    <p className="mt-6 text-lg text-gray-600 leading-relaxed font-extralight">
                        Mit über 25 Jahren Erfahrung analysiere ich bestehende Planungen und Leistungsverzeichnisse, entwickle sie fachlich weiter und arbeite sie anschließend aktiv aus – von der technischen Prüfung bis zur belastbaren Ausschreibung.
                    </p>
                    <p className="mt-6 text-lg text-gray-600 leading-relaxed font-extralight">
                        Bei Großprojekten biete ich darüber hinaus eine technische Unterstützung während der Bauphase an. Der Fokus liegt hierbei auf der <span className="font-light">Kostengruppe 300</span>, insbesondere zur Entlastung der Projektteams.
                    </p>
                    <p className="mt-6 text-lg text-gray-600 leading-relaxed font-extralight">
                        Ergänzend begleite ich energetische Sanierungen im Ein- und Mehrfamilienhaus ganzheitlich, von der Planung bis zur Abwicklung, mit dem Ziel, die baulichen und energetischen Voraussetzungen des Gebäudes für den Einsatz erneuerbarer Energien herzustellen.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Intro;
