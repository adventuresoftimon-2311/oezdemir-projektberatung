import React from 'react';
import { CircleDollarSign, Timer, Handshake } from 'lucide-react';

const ValueProposition = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-thin font-display mb-6 text-primary-darkblue">
                    Ihr Mehrwert – <span className="text-primary-gold font-light">Nachhaltigkeit</span> und <span className="text-primary-gold font-light">wirtschaftlicher Nutzen</span>.
                </h2>
                <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed mb-8 font-extralight">
                    Durch frühzeitige technische Optimierung und fachgerechte Begleitung lassen sich oftmals fünf- bis sechsstellige Beträge einsparen,
                    die sonst durch Nachträge, Bauverzögerungen oder Mängelbeseitigung entstehen würden.
                </p>
                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
                    <div className="p-6 bg-white rounded-lg border border-gray-100 flex flex-col items-center shadow-sm">
                        <CircleDollarSign className="w-12 h-12 text-primary-gold mb-4" strokeWidth={1} />
                        <h3 className="font-extralight text-xl mb-2 text-primary-darkblue">Kosteneinsparung</h3>
                        <p className="text-sm text-gray-600 font-extralight">Vermeidung teurer Nachträge und Baufehler.</p>
                    </div>
                    <div className="p-6 bg-white rounded-lg border border-gray-100 flex flex-col items-center shadow-sm">
                        <Timer className="w-12 h-12 text-primary-gold mb-4" strokeWidth={1} />
                        <h3 className="font-extralight text-xl mb-2 text-primary-darkblue">Terminsicherheit</h3>
                        <p className="text-sm text-gray-600 font-extralight">Reibungslose Bauabläufe ohne Stillstand.</p>
                    </div>
                    <div className="p-6 bg-white rounded-lg border border-gray-100 flex flex-col items-center shadow-sm">
                        <Handshake className="w-12 h-12 text-primary-gold mb-4" strokeWidth={1} />
                        <h3 className="font-extralight text-xl mb-2 text-primary-darkblue">Entlastung</h3>
                        <p className="text-sm text-gray-600 font-extralight">Rückenfreiheit für Ihr Kernteam.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValueProposition;
