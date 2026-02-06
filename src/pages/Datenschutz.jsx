import React, { useEffect } from 'react';

const Datenschutz = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="pt-32 pb-20 bg-white text-primary-darkblue">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-thin font-display mb-12 uppercase tracking-widest text-primary-darkblue">Datenschutz</h1>

                <div className="space-y-8 font-extralight text-lg leading-relaxed text-gray-700">

                    {/* 1. General Info */}
                    <div>
                        <h2 className="text-2xl font-medium mb-4 text-primary-darkblue">1. Allgemeine Informationen über die Verarbeitung von personenbezogenen Daten</h2>
                        <p className="mb-4">
                            (1) Der Schutz Ihrer personenbezogenen Daten ist für uns von besonderer Bedeutung. Nachfolgend möchten wir Sie daher ausführlich darüber informieren, welche personenbezogenen Daten bei der Nutzung unserer Webseiten und Angebote verarbeitet werden.
                        </p>
                        <p className="mb-4">
                            (2) Verantwortlicher gemäß Art. 4 Nr. 7 Datenschutz-Grundverordnung („DSGVO“) ist:
                        </p>
                        <p className="mb-4 font-medium">
                            Özdemir Projektberatung<br />
                            Stiller Weg 2<br />
                            28201 Bremen
                        </p>
                        <p className="mb-4">
                            Telefon: +49 151 55548698<br />
                            E-Mail: info@oezdemir-pb.de
                        </p>
                        <p className="mb-4">
                            Weiterführende Angaben finden Sie in unserem Impressum.
                        </p>
                        <p className="mb-4">
                            (3) Einen Datenschutzbeauftragten hat unser Unternehmen nicht bestellt, da hierfür keine gesetzliche Verpflichtung besteht.
                            Bei Fragen zum Datenschutz können Sie sich jedoch jederzeit per E-Mail an info@oezdemir-pb.de wenden.
                        </p>
                        <p>
                            (4) Wir verarbeiten personenbezogene Daten nur unter Einhaltung der einschlägigen Datenschutzbestimmungen und zwar auf Grundlage der nachfolgend genannten Rechtsgrundlagen.
                        </p>
                    </div>

                    {/* 2. Webseitenbesuch */}
                    <div>
                        <h2 className="text-2xl font-medium mb-4 text-primary-darkblue">2. Datenverarbeitung beim Besuch unserer Webseiten</h2>
                        <p className="mb-4">
                            (1) Bei der rein informatorischen Nutzung unserer Webseiten, also wenn Sie keine Anfrage stellen oder uns anderweitig personenbezogene Informationen übermitteln, verarbeiten wir die Daten, die Ihr Browser an unseren Server übermittelt und die technisch erforderlich sind, um Ihnen unsere Webseiten anzuzeigen und die Stabilität und Sicherheit zu gewährleisten:
                        </p>
                        <ul className="list-disc pl-6 space-y-1 mb-4">
                            <li>IP-Adresse</li>
                            <li>Datum und Uhrzeit der Anfrage</li>
                            <li>Dauer des Webseitenbesuchs</li>
                            <li>Zeitzonendifferenz zur Greenwich Mean Time (GMT)</li>
                            <li>Inhalt der Anforderung (konkrete Seite)</li>
                            <li>Zugriffsstatus/HTTP-Statuscode</li>
                            <li>jeweils übertragene Datenmenge</li>
                            <li>Webseite, von der die Anforderung kommt</li>
                            <li>Webseiten, die Sie bei uns besuchen</li>
                            <li>Internet-Service-Provider</li>
                            <li>Browsertyp</li>
                            <li>Server Log Files</li>
                            <li>Betriebssystem und dessen Oberfläche</li>
                            <li>Sprache und Version der Browsersoftware</li>
                        </ul>
                        <p>
                            (2) Rechtsgrundlage: Art. 6 Abs. 1 S. 1 lit. f DSGVO – unser berechtigtes Interesse an der Darstellung der aufgerufenen Webseiten sowie der Aufrechterhaltung der IT-Sicherheit.
                        </p>
                    </div>

                    {/* 3. Cookies */}
                    <div>
                        <h2 className="text-2xl font-medium mb-4 text-primary-darkblue">3. Datenverarbeitung durch den Einsatz von Cookies</h2>
                        <p className="mb-4">
                            (1) Zusätzlich zu den zuvor genannten Daten werden bei Ihrer Nutzung unserer Webseiten Cookies auf Ihrem Endgerät gespeichert. Cookies sind kleine Textdateien, die auf Ihrer Festplatte gespeichert und Ihrem Browser zugeordnet werden. Sie dienen dazu, unser Webangebot nutzerfreundlicher und effektiver zu machen.<br />
                            Rechtsgrundlage: Art. 6 Abs. 1 S. 1 lit. f DSGVO – unser berechtigtes Interesse an der Verbesserung der Nutzerfreundlichkeit und zur Analyse des Nutzerverhaltens.
                        </p>
                        <p className="mb-4">
                            (2) Sie können Ihre Browser-Einstellungen entsprechend Ihren Wünschen konfigurieren und z. B. die Annahme von Cookies ablehnen. Wir weisen Sie darauf hin, dass Sie in diesem Fall eventuell nicht alle Funktionen unserer Webseiten nutzen können.
                        </p>

                        <h3 className="text-xl font-medium mb-2 mt-6">3.1 Google Analytics</h3>
                        <p className="mb-4">
                            (1) Wir verwenden auf dieser Website Google Analytics, einen Webanalysedienst der Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA („Google“). Google Analytics verwendet Cookies, die eine Analyse der Benutzung der Website ermöglichen.
                        </p>
                        <p className="mb-4">
                            (2) Diese Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.
                            Im Falle der Aktivierung der IP-Anonymisierung wird Ihre IP-Adresse jedoch innerhalb der Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt.
                            Wir haben auf dieser Website die IP-Anonymisierung aktiviert.
                        </p>
                        <p className="mb-4">
                            (3) Im Auftrag des Betreibers dieser Website wird Google diese Informationen verwenden, um die Nutzung der Website auszuwerten, Reports über die Websiteaktivitäten zusammenzustellen und weitere Dienstleistungen im Zusammenhang mit der Websitenutzung zu erbringen.
                        </p>
                        <p className="mb-4">
                            (4) Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nach Angaben von Google nicht mit anderen Daten von Google zusammengeführt.
                            Weitere Informationen finden Sie in der Datenschutzerklärung von Google.
                        </p>
                        <p className="mb-4">
                            (5) Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern. Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem Sie das unter folgendem Link verfügbare Browser-Plugin herunterladen und installieren:<br />
                            <a href="https://tools.google.com/dlpage/gaoptout?hl=de" className="text-primary-darkblue underline hover:text-primary-gold" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout?hl=de</a>
                        </p>
                    </div>

                    {/* 4. Contact */}
                    <div>
                        <h2 className="text-2xl font-medium mb-4 text-primary-darkblue">4. Datenverarbeitung bei der Kontaktaufnahme</h2>
                        <p>
                            Bei Ihrer Kontaktaufnahme mit uns per E-Mail, Telefon oder über ein Kontaktformular werden die von Ihnen mitgeteilten Daten (z. B. Name, E-Mail-Adresse, Telefonnummer, Nachricht) verarbeitet, um Ihre Anfrage zu beantworten.<br />
                            Rechtsgrundlage: Art. 6 Abs. 1 lit. a) und b) DSGVO – Ihre Einwilligung oder die Durchführung vorvertraglicher Maßnahmen.
                        </p>
                    </div>

                    {/* 5. Contract */}
                    <div>
                        <h2 className="text-2xl font-medium mb-4 text-primary-darkblue">5. Datenverarbeitung zur Vertragsabwicklung</h2>
                        <p className="mb-4">
                            (1) Wenn Sie Kunde bei uns sind oder werden, verarbeiten wir Ihre Kontakt-, Vertrags-, Zahlungs- und Kommunikationsdaten zur Erbringung und Abrechnung unserer Leistungen.
                        </p>
                        <p>
                            (2) Diese Daten können zur Vertragserfüllung an Dienstleister (z. B. IT- oder Kommunikationsanbieter) weitergegeben werden, die an unsere Weisungen gebunden sind.<br />
                            Rechtsgrundlage: Art. 6 Abs. 1 S. 1 lit. b DSGVO.
                        </p>
                    </div>

                    {/* 6. User Rights */}
                    <div>
                        <h2 className="text-2xl font-medium mb-4 text-primary-darkblue">6. Ihre Rechte</h2>
                        <p className="mb-4">
                            (1) Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:
                        </p>
                        <ul className="list-disc pl-6 space-y-1 mb-4">
                            <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                            <li>Recht auf Berichtigung und Löschung (Art. 16, 17 DSGVO)</li>
                            <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                            <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
                            <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                        </ul>
                        <p className="mb-4">
                            (2) Sie haben zudem das Recht, sich bei der zuständigen Datenschutzaufsichtsbehörde zu beschweren.<br />
                            Zuständige Aufsichtsbehörde:<br />
                            Die Landesbeauftragte für Datenschutz und Informationsfreiheit der Freien Hansestadt Bremen<br />
                            Arndtstraße 1, 27570 Bremerhaven<br />
                            E-Mail: office@datenschutz.bremen.de
                        </p>
                        <p className="mb-4">
                            (3) Eine erteilte Einwilligung zur Verarbeitung personenbezogener Daten können Sie jederzeit mit Wirkung für die Zukunft widerrufen. Dazu genügt eine E-Mail an info@oezdemir-pb.de.
                        </p>
                        <p>
                            (4) Wenn wir Ihre Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO verarbeiten, können Sie aus Gründen, die sich aus Ihrer besonderen Situation ergeben, Widerspruch gegen die Verarbeitung einlegen.
                        </p>
                    </div>

                    {/* 7. Third Parties */}
                    <div>
                        <h2 className="text-2xl font-medium mb-4 text-primary-darkblue">7. Weitergabe von Daten an Dritte</h2>
                        <p className="mb-4">
                            (1) Eine Weitergabe Ihrer personenbezogenen Daten an Dritte erfolgt nur, wenn dies zur Vertragserfüllung erforderlich ist oder auf gesetzlicher Grundlage beruht.
                        </p>
                        <p>
                            (2) Bei der Zusammenarbeit mit externen Dienstleistern stellen wir sicher, dass geeignete technische und organisatorische Maßnahmen zum Schutz Ihrer Daten getroffen werden.
                        </p>
                    </div>

                    {/* 8. Deletion */}
                    <div>
                        <h2 className="text-2xl font-medium mb-4 text-primary-darkblue">8. Datenlöschung</h2>
                        <p className="mb-4">
                            (1) Ihre personenbezogenen Daten werden gelöscht, sobald sie für ihre Zweckbestimmung nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten bestehen.
                        </p>
                        <p className="mb-4">
                            (2) Gesetzliche Aufbewahrungsfristen betragen in der Regel:
                        </p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>6 Jahre gemäß § 257 HGB (z. B. Handelsbriefe)</li>
                            <li>10 Jahre gemäß § 147 AO (z. B. Buchungsbelege, steuerrelevante Unterlagen)</li>
                        </ul>
                    </div>

                    {/* 9. Final Provisions */}
                    <div>
                        <h2 className="text-2xl font-medium mb-4 text-primary-darkblue">9. Schlussbestimmungen</h2>
                        <p className="mb-4">
                            (1) Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten gegen Manipulation, Verlust oder unbefugten Zugriff zu schützen. Diese Maßnahmen werden regelmäßig überprüft und an den Stand der Technik angepasst.
                        </p>
                        <p>
                            (2) Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf zu aktualisieren. Die jeweils aktuelle Fassung finden Sie auf unserer Website unter www.oezdemir-pb.de/datenschutz.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Datenschutz;
