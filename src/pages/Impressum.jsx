import React, { useEffect } from 'react';

const Impressum = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="pt-32 pb-20 bg-white text-primary-darkblue">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-thin font-display mb-12 uppercase tracking-widest text-primary-darkblue">Impressum</h1>

                <div className="space-y-8 font-extralight text-lg leading-relaxed text-gray-700">
                    <div>
                        <h2 className="text-xl font-medium mb-2 text-primary-darkblue">Angaben gemäß § 5 TMG</h2>
                        <p>
                            Özdemir Projektberatung<br />
                            Stiller Weg 2<br />
                            28201 Bremen
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-medium mb-2 text-primary-darkblue">Kontakt</h2>
                        <p>
                            Telefon: +49 151 55548698<br />
                            E-Mail: info@oezdemir-pb.de
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-medium mb-2 text-primary-darkblue">Vertreten durch</h2>
                        <p>
                            Inhaber: Faruk Özdemir<br />
                            Einzelunternehmen
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-medium mb-2 text-primary-darkblue">Umsatzsteuer-ID / Steuernummer</h2>
                        <p>
                            Steuer-Nr.: 60 171 06366<br />
                            Finanzamt Bremen
                        </p>
                    </div>

                    <div className="pt-8 border-t border-gray-100">
                        <h2 className="text-2xl font-thin font-display mb-4 text-primary-darkblue">Haftungsausschluss (Disclaimer)</h2>

                        <h3 className="text-lg font-medium mb-2 mt-6 text-primary-darkblue">Haftung für Inhalte</h3>
                        <p>
                            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                            Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
                            Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
                            Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                        </p>

                        <h3 className="text-lg font-medium mb-2 mt-6 text-primary-darkblue">Urheberrecht</h3>
                        <p>
                            Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                            Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                            Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet.
                            Insbesondere werden Inhalte Dritter als solche gekennzeichnet.
                            Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis.
                            Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Impressum;
