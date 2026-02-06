import React from 'react';



const Trust = () => {
    const reasons = [
        "Wirtschaftlichkeit",
        "Machbarkeit",
        "Termintreue",
        "Planbarkeit",
        "Kostensicherheit",
        "Stressfreie Projekte",
        "Entlastung der Projektteams",
        "Mehrwert",
        "Nachhaltiger Nutzen",
        "Praxisnähe",
        "Sichere Entscheidungsgrundlagen",
        "Zufriedene Mitarbeitende",
        "Mitgenommene Teams",
        "Zukunftssichere Gebäudebasis",
        "Vorbereitung für erneuerbare Energien",
        "Energieeffiziente Sanierung",
        "Wissenstransfer",
        "Zeitersparnis",
        "Mentor & Sparringspartner",
        "Zufriedene Bauherren"
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-thin text-primary-darkblue font-display mb-4 uppercase tracking-widest">
                        Warum Özdemir Projektberatung?
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto font-extralight">
                        Warum sich eine Zusammenarbeit mit mir lohnt.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-4">
                        {reasons.map((reason, index) => (
                            <div
                                key={index}
                                className="bg-white px-6 py-3 rounded shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.2] border border-gray-100 flex items-center cursor-default"
                            >
                                <span className="text-primary-gold font-normal mr-2 text-xs">•</span>
                                <span className="text-primary-darkblue font-extralight">{reason}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Trust;
