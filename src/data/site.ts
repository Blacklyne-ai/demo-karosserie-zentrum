export const site = {
  name: "KRZ Karosserie Reparatur Zentrum",
  short: "KRZ",
  legal: "KRZ Karosserie Reparatur Zentrum UG (haftungsbeschränkt)",
  trade: "Karosserie-Fachbetrieb Hamburg-Stellingen",
  ceo: "Madjid Firozi",
  hrb: "Hamburg HRB 174519",
  ust: "DE 352 561 721",
  address: {
    street: "Bornmoor 1",
    zip: "22525",
    city: "Hamburg-Stellingen",
    full: "Bornmoor 1, 22525 Hamburg-Stellingen",
  },
  phone: {
    main: "040-181287720",
    mainTel: "tel:040181287720",
    mobile: "0176-84526413",
    mobileTel: "tel:017684526413",
  },
  email: "info@karosserie-zentrum.de",
  emailHref: "mailto:info@karosserie-zentrum.de",
  whatsapp: "https://wa.me/4917684526413",
  social: {
    facebook:
      "https://facebook.com/people/KRZ-Karosserie-Reparatur-Zentrum/100083560213382/",
    instagram: "https://instagram.com/karosseriezentrum1/",
  },
  hours: [
    { day: "Montag - Freitag", time: "09:00 - 18:00 Uhr" },
    { day: "Samstag", time: "09:00 - 14:00 Uhr" },
    { day: "Sonntag", time: "geschlossen" },
  ],
  hoursShort: "Mo - Fr 9 - 18 · Sa 9 - 14",
  partner: {
    name: "Autohof Stellingen",
    url: "https://autohof-stellingen.de",
  },
  // Place-ID konnte nicht via WebSearch aufgelöst werden - Adress-Geocoding als Fallback.
  // Operator-TODO: Echte Place-ID aus Maps URL einsetzen.
  mapsEmbed:
    "https://www.google.com/maps?q=Bornmoor+1,+22525+Hamburg-Stellingen&output=embed",
  mapsLink: "https://goo.gl/maps/FBegbyx6nwcxLsju5",
};

export type Service = {
  slug: string;
  title: string;
  nav: string;
  icon: string;
  blurb: string;
  hero: string;
  intro: string;
  image: string;
  bullets: string[];
  process: { title: string; body: string }[];
  stats?: { value: string; label: string }[];
};

export const services: Service[] = [
  {
    slug: "karosseriearbeiten",
    title: "Karosseriearbeiten",
    nav: "Karosseriearbeiten",
    icon: "Hammer",
    blurb: "Fachgerechte Karosserie-Instandsetzung nach Unfall - sichtbar wie unsichtbar.",
    hero: "Karosserie-Instandsetzung in Hamburg-Stellingen.",
    intro:
      "Nach einem Unfall ist in den meisten Fällen die Instandsetzung der Karosserie notwendig. Wir analysieren den Schaden gemeinsam mit Ihnen, dokumentieren ihn nachvollziehbar für Ihre Versicherung und richten Ihre Karosserie zurück in den Originalzustand.",
    image: "/images/services/karosseriearbeiten.jpg",
    bullets: [
      "Welche Instandsetzungsarbeiten sind notwendig?",
      "Was soll tatsächlich hergerichtet werden?",
      "Wie setzen sich die voraussichtlichen Kosten zusammen?",
      "Wie lange wird die Reparatur dauern?",
    ],
    process: [
      {
        title: "Schaden ansehen",
        body: "Sie kommen vorbei oder schicken Bilder per WhatsApp. Wir machen eine erste Einschätzung und ein verbindliches Angebot.",
      },
      {
        title: "Reparatur planen",
        body: "Wir klären den Umfang mit Ihrer Versicherung, planen Smart-Repair oder Teiletausch und bestellen Material.",
      },
      {
        title: "Karosserie richten",
        body: "Ausbeulen, Ausrichten, Spachteln, Schleifen, Lackieren - alles in einem Haus. Sie holen das fertige Auto ab.",
      },
    ],
    stats: [
      { value: "120+", label: "Karosserie-Reparaturen pro Jahr" },
      { value: "1 Haus", label: "Smart-Repair bis Komplett-Instandsetzung" },
      { value: "Hamburg", label: "Stellingen seit Jahren" },
    ],
  },
  {
    slug: "lackierarbeiten",
    title: "Lackierarbeiten",
    nav: "Lackierarbeiten",
    icon: "Paintbrush2",
    blurb: "Professionelle Lackierung in höchster Qualität - vom Tupfer bis zur Komplett-Lackierung.",
    hero: "Lackierung in höchster Qualität.",
    intro:
      "Wir sind die Spezialisten in Sachen Lackierungen. Hochglänzend, seidenmatt, Hammerschlag, Strukturen, Lasuren, Antik-Farben oder RAL-Tönen - wir lackieren PKW, Oldtimer, LKW, Motorräder, Maschinen und weitere Objekte auf Anfrage.",
    image: "/images/services/lackierung.jpg",
    bullets: [
      "Oberflächenanalyse und Vorbehandlung",
      "Abbeizen, Polieren, Sandstrahlen, Grundieren",
      "Computergesteuertes Farbtonmeß-System",
      "Rezeptur-Speicherung für spätere Ausbesserungen",
      "Lackierkabinen mit Schutz gegen Hitze, Staub, Nässe und Kälte",
    ],
    process: [
      {
        title: "Farbton bestimmen",
        body: "Wir messen Ihren Originallack mit einem computergesteuerten Farbtonmeß-System und speichern die Rezeptur.",
      },
      {
        title: "Vorbereitung",
        body: "Abbeizen, Schleifen, Grundieren, Spachteln - je nach Untergrund das richtige Verfahren.",
      },
      {
        title: "Lackieren",
        body: "Auftrag in der Lackierkabine mit Hitze-, Staub- und Feuchteschutz. Trocknen, polieren, Abnahme.",
      },
    ],
    stats: [
      { value: "1.000+", label: "RAL- und Sonderfarbtöne" },
      { value: "Auto", label: "Bis Motorrad, LKW, Maschine" },
      { value: "Rezept", label: "Bleibt für spätere Ausbesserungen" },
    ],
  },
  {
    slug: "smart-repair",
    title: "Smart-Repair",
    nav: "Smart-Repair",
    icon: "Sparkles",
    blurb: "Lackschäden, Dellen, Brandlöcher - kleine Schäden ohne aufwendige Reparatur.",
    hero: "Smart-Repair für kleine Schäden.",
    intro:
      "Lackschäden, Kratzer in der Armatur, Brandlöcher oder Dellen - geringe Schäden an Ihrem Fahrzeug setzen wir auch ohne aufwendige Reparatur instand. Geringer Materialaufwand, kurze Werkstattzeiten.",
    image: "/images/services/smart-repair.jpg",
    bullets: [
      "Dellen nach Hagel- oder Parkschäden ohne Neulackierung",
      "Spot-Repair an Stoßstange, Tür und Rückspiegel",
      "Lackschadenfreie Ausbeultechnik",
      "Brandlöcher und Schäden an Sitzbezügen, Teppichen und Textilien",
      "Kostenreduktion durch geringen Materialaufwand",
    ],
    process: [
      {
        title: "Schaden bewerten",
        body: "Wir prüfen, ob Smart-Repair ausreicht oder eine klassische Karosserie-Instandsetzung sinnvoller ist.",
      },
      {
        title: "Smart-Repair anwenden",
        body: "Ausbeulen ohne Lackierung, Spot-Repair, Innenraum-Reparatur - je nach Schaden das passende Verfahren.",
      },
      {
        title: "Übergabe",
        body: "Die Reparatur ist meist am gleichen Tag fertig. Sie holen Ihr Auto direkt wieder ab.",
      },
    ],
    stats: [
      { value: "1 Tag", label: "Viele Smart-Repairs sind same-day" },
      { value: "0 €", label: "Neuteile bei vielen Dellen" },
      { value: "Hagel", label: "Lackschadenfrei ausbeulen" },
    ],
  },
  {
    slug: "richtbankarbeiten",
    title: "Richtbankarbeiten",
    nav: "Richtbankarbeiten",
    icon: "Wrench",
    blurb: "Millimetergenaue Wiederherstellung des Fahrwerks nach schweren Unfällen.",
    hero: "Richtbank für die schweren Fälle.",
    intro:
      "Wir arbeiten mit modernen Richtsystemen auf der Basis der Reparaturvorschriften des jeweiligen Herstellers. So lässt sich das sichere Fahrverhalten jedes Fahrzeugtyps millimetergenau wiederherstellen.",
    image: "/images/services/richtbankarbeiten.jpg",
    bullets: [
      "Moderne Richtsysteme nach Herstellervorgabe",
      "Millimetergenaue Wiederherstellung",
      "Fahrzeugtyp-spezifische Reparatur-Datenblätter",
      "Abschließende Kontrolle der Fahreigenschaften",
    ],
    process: [
      {
        title: "Karosserie aufnehmen",
        body: "Das Fahrzeug wird auf der Richtbank fixiert und vermessen. Wir vergleichen mit den Herstellerdaten.",
      },
      {
        title: "Karosserie richten",
        body: "Verzogene Bereiche werden hydraulisch zurückgezogen, beschädigte Strukturteile getauscht oder geschweißt.",
      },
      {
        title: "Kontrolle",
        body: "Nach dem Richten messen wir erneut. Erst wenn alle Werte im Toleranzbereich sind, geht das Auto weiter zur Lackierung.",
      },
    ],
    stats: [
      { value: "mm", label: "Genauigkeit nach Herstellerdaten" },
      { value: "Alle", label: "PKW-Marken und -Typen" },
      { value: "Schweißen", label: "Strukturteile fachgerecht ersetzen" },
    ],
  },
  {
    slug: "oldtimer-restaurierung",
    title: "Oldtimer-Restaurierung",
    nav: "Oldtimer-Restaurierung",
    icon: "Award",
    blurb: "Karosserie-Restauration für Klassiker - vom Rostfleck bis zur Komplett-Restaurierung.",
    hero: "Oldtimer-Restauration in Hamburg-Stellingen.",
    intro:
      "Durch langjährige Erfahrung als Karosseriebau-Fachbetrieb machen wir aus Ihrem Oldtimer wieder ein Schmuckstück. Mit Fingerspitzengefühl, Einfühlungsvermögen und dem entsprechenden Know-how sind wir in der Lage, komplexe Blechteile zu fertigen und zu restaurieren.",
    image: "/images/services/oldtimer-restaurierung.jpg",
    bullets: [
      "Komplexe Blechteile fertigen und restaurieren",
      "Rost-Sanierung nach Originalzustand",
      "Lackierung in Originalfarbe nach RAL- oder historischer Rezeptur",
      "Geduldige Arbeit ohne Zeitdruck",
      "Beratung zum Erhalt der Originalsubstanz",
    ],
    process: [
      {
        title: "Substanz bewerten",
        body: "Wir prüfen mit Ihnen gemeinsam, was original erhalten werden kann und was ersetzt werden muss.",
      },
      {
        title: "Restaurieren",
        body: "Bleche fertigen, schweißen, schleifen, grundieren, lackieren - alles im Haus, ohne Lieferanten-Lotterie.",
      },
      {
        title: "Übergabe",
        body: "Sie bekommen ein Schmuckstück zurück - mit Dokumentation aller Arbeiten für Wert-Erhalt und Versicherung.",
      },
    ],
    stats: [
      { value: "Geduld", label: "Statt Stoppuhr - so lange es dauert" },
      { value: "Blech", label: "Komplexe Teile selbst fertigen" },
      { value: "Doku", label: "Jeder Arbeitsschritt protokolliert" },
    ],
  },
  {
    slug: "folierung",
    title: "Folierung",
    nav: "Folierung",
    icon: "PaintBucket",
    blurb: "Fahrzeugfolierung - Werbeflächen oder Komplett-Wrap, vom Layout bis zur Montage.",
    hero: "Fahrzeugfolierung in Hamburg-Stellingen.",
    intro:
      "Werbefläche. Wir begleiten Sie vom Layout bis zur Montage. So bleibt Ihre Werbung rund um die Uhr sichtbar und unterwegs in der ganzen Stadt. Sie wollen Ihre Fahrzeugflotte bekleben lassen? Wir helfen gerne weiter - dank jahrelanger Erfahrung sind wir der richtige Ansprechpartner für Flottenkunden.",
    image: "/images/services/folierung.jpg",
    bullets: [
      "Layout-Beratung und Druckabwicklung",
      "Komplett-Wrap oder Werbe-Folierung",
      "Flotten-Folierung für Gewerbekunden",
      "Hochwertige Folien renommierter Hersteller",
      "Saubere Demontage am Ende der Werbe-Saison",
    ],
    process: [
      {
        title: "Layout abstimmen",
        body: "Sie schicken uns Ihr Design oder wir beraten Sie zum Aufbau. Wir prüfen Druckbarkeit und Wirkung.",
      },
      {
        title: "Folien drucken",
        body: "Hochauflösender UV-stabiler Druck auf Premium-Folie. Schutzlack auf Wunsch für längere Haltbarkeit.",
      },
      {
        title: "Folien aufbringen",
        body: "Saubere Montage in Werkstatt-Umgebung ohne Staub und Blasen. Übergabe gleichen Tag oder am Folgetag.",
      },
    ],
    stats: [
      { value: "Flotte", label: "Spezialisiert auf Gewerbekunden" },
      { value: "Premium", label: "Folien mit Hersteller-Garantie" },
      { value: "Layout", label: "Beratung von Anfang an" },
    ],
  },
  {
    slug: "achsvermessung",
    title: "Achsvermessung",
    nav: "Achsvermessung",
    icon: "Target",
    blurb: "Perfekter Geradeauslauf mittels moderner Achsvermessung nach Herstellervorgabe.",
    hero: "Achsvermessung für Geradeauslauf und Kraftstoff-Effizienz.",
    intro:
      "Eine ungenaue Einstellung Ihres Fahrwerks führt zu erhöhtem Kraftstoffverbrauch und ungleichmäßiger Reifenabnutzung. Mittels moderner Technik vermessen wir die Achsgeometrie Ihres Fahrzeugs und vergleichen die Daten mit den Vorgaben des Automobilherstellers.",
    image: "/images/services/achsvermessung.jpg",
    bullets: [
      "Moderne Messtechnik mit Herstellervorgabe-Vergleich",
      "Senkt Kraftstoff- und Bereifungskosten",
      "Verhindert ungleichmäßige Reifenabnutzung",
      "Erhöht Fahrkomfort und Kurvensicherheit",
    ],
    process: [
      {
        title: "Vermessen",
        body: "Sensoren werden montiert, das Fahrzeug auf der Messebene ausgerichtet. Vollautomatische Erfassung aller Werte.",
      },
      {
        title: "Vergleich mit Werks-Daten",
        body: "Die Werte werden mit den Herstellervorgaben verglichen. Abweichungen werden für Sie verständlich dokumentiert.",
      },
      {
        title: "Einstellen",
        body: "Wir justieren Spur, Sturz und Nachlauf nach Vorgabe. Abschlussmessung sichert das Ergebnis.",
      },
    ],
    stats: [
      { value: "3D", label: "Modernes Mess-System" },
      { value: "Werk", label: "Vergleich mit Hersteller-Daten" },
      { value: "30 Min", label: "Typische Messdauer" },
    ],
  },
  {
    slug: "beleuchtung",
    title: "Beleuchtung",
    nav: "Beleuchtung",
    icon: "Lightbulb",
    blurb: "Scheinwerfer, Rückleuchten, Instrumente - Beleuchtung ist Verkehrssicherheit.",
    hero: "Beleuchtung ist Verkehrssicherheit.",
    intro:
      "Der Beleuchtung kommt für die Verkehrssicherheit Ihres Fahrzeugs eine ganz besondere Rolle zu. Wir überprüfen und reparieren für Sie alles von Fahrscheinwerfern bis hin zur Instrumentenbeleuchtung, messen Abstrahlwinkel und Leuchtmittel-Verschleiß. Für LED und Xenonlicht ist der Werkstattbesuch unbedingt erforderlich.",
    image: "/images/services/beleuchtung.jpg",
    bullets: [
      "Fahrscheinwerfer-Reparatur und -Einstellung",
      "Abstrahlwinkel exakt messen",
      "Leuchtmittel-Verschleiß prüfen",
      "Instrumentenbeleuchtung im Innenraum",
      "Spezialwissen für LED- und Xenon-Systeme",
    ],
    process: [
      {
        title: "Diagnose",
        body: "Wir prüfen Scheinwerfer-Lage, Streuung und Helligkeit - mit Mess-Tafel und Diagnosegerät.",
      },
      {
        title: "Reparieren",
        body: "Leuchtmittel-Tausch, Steckkontakte säubern, Reflektor erneuern, Schalter und Vorschaltgerät prüfen.",
      },
      {
        title: "Einstellen",
        body: "Abstrahlwinkel nach Hersteller-Vorgabe justieren. Abnahme mit Messprotokoll.",
      },
    ],
    stats: [
      { value: "LED", label: "Spezialisiert auf moderne Systeme" },
      { value: "Xenon", label: "Vorschaltgerät und Brenner" },
      { value: "Sicht", label: "Sicherheit beginnt mit Licht" },
    ],
  },
  {
    slug: "unfallservice",
    title: "Unfallservice",
    nav: "Unfallservice",
    icon: "AlertTriangle",
    blurb: "Vom Abschleppen bis zur Übergabe - wir kümmern uns um den gesamten Schaden.",
    hero: "Unfall? Wir schauen drauf.",
    intro:
      "Bereits direkt nach einem Unfall können Sie sich auf unsere Leistungen verlassen: Wir schleppen Ihr Fahrzeug vom Unfallort ab und transportieren es in unsere Werkstatt. Nach ausführlicher Schadensanalyse besprechen wir gemeinsam mit Ihnen die folgenden Instandsetzungsarbeiten und stimmen diese mit Ihren Bedürfnissen ab.",
    image: "/images/services/unfallservice.jpg",
    bullets: [
      "Abschleppen vom Unfallort",
      "Ausführliche Schadensanalyse",
      "Detaillierte Dokumentation für die Versicherung",
      "Ersatzfahrzeug während der Reparatur",
      "Nicht immer Teiletausch - oft reicht professionelle Instandsetzung",
    ],
    process: [
      {
        title: "Sofort melden",
        body: "Rufen Sie uns nach dem Unfall an. Wir organisieren das Abschleppen und planen die nächsten Schritte.",
      },
      {
        title: "Schaden analysieren",
        body: "Wir prüfen den Wagen, dokumentieren den Schaden und stimmen mit Ihrer Versicherung ab.",
      },
      {
        title: "Reparieren und übergeben",
        body: "Karosserie richten, lackieren, Achsen vermessen - alles in einem Haus. Sie bleiben mit Ersatzwagen mobil.",
      },
    ],
    stats: [
      { value: "24/7", label: "Notfall-Erreichbarkeit per Mobil" },
      { value: "Ersatzwagen", label: "Damit Sie mobil bleiben" },
      { value: "1 Haus", label: "Komplette Abwicklung ohne Lauferei" },
    ],
  },
  {
    slug: "schadenmanagement",
    title: "Schadenmanagement",
    nav: "Schadenmanagement",
    icon: "FileCheck",
    blurb: "Gutachten, Versicherungs-Abwicklung, Anwalt - wir vermitteln das Netzwerk.",
    hero: "Versicherung. Gutachten. Anwalt. Wir koordinieren.",
    intro:
      "Ist Ihr Fahrzeug bei einem Verkehrsunfall beschädigt worden, hilft Ihnen unser Büro mit einem Kfz-Gutachten, Ihren Schadenersatzanspruch zu begründen. Wir vermitteln das gesamte Netzwerk: Gutachter, Abschlepp-Service, Ersatzfahrzeug, Vertrauensanwalt und Restwert-Angebote.",
    image: "/images/services/schadenmanagement.jpg",
    bullets: [
      "Kfz-Gutachten zur Schadensbegründung",
      "Schadenfeststellung durch externe Gutachter",
      "Abschlepp- und Werkstatt-Vermittlung",
      "Vermittlung Ersatzfahrzeug",
      "Vermittlung Restwert-Angebot",
      "Vermittlung Vertrauensanwalt",
    ],
    process: [
      {
        title: "Unfall melden",
        body: "Sie rufen uns an. Wir nehmen den Schaden auf und besprechen die nächsten Schritte.",
      },
      {
        title: "Netzwerk aktivieren",
        body: "Wir koordinieren Gutachter, Anwalt, Ersatzfahrzeug und Werkstatt - alles aus einer Hand.",
      },
      {
        title: "Abwicklung",
        body: "Sie bekommen Ihr Auto repariert zurück. Die Kommunikation mit der Versicherung läuft über uns.",
      },
    ],
    stats: [
      { value: "Netzwerk", label: "Gutachter, Anwalt, Ersatzwagen" },
      { value: "Hilfe", label: "Bei Versicherungs-Kommunikation" },
      { value: "1 Anruf", label: "Reicht für die Aktivierung" },
    ],
  },
];

export const navServices = services.map((s) => ({
  href: `/leistungen/${s.slug}/`,
  label: s.nav,
}));
