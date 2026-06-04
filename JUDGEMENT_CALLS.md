# JUDGEMENT_CALLS.md - KRZ Karosserie Reparatur Zentrum

## Mission
Editorial Heritage Craft Redesign im Stil von Aston Service Hamburg + AMF Freigang.
80% Light cream/white Mood, Dark-Akzent nur in CtaBand und Footer.
Sachlich-norddeutsch, anti-cringe, Sie-Form verbindlich.

---

## Phase 0 - Recherche-Ergebnisse

### Benchmark-Sites
- Aston Service Hamburg und AMF Freigang lieferten 403 (Origin-Block) und auch via r.jina.ai-Proxy 401.
- Briefing definiert Mood-Baseline bereits präzise: 80% Light cream/white, lakonische Headlines, "Drei Dinge die uns unterscheiden", echte Customer-Quotes, Heritage-Marquee, focused restraint.
- Diese Baseline ist verbindlich.

### Kunden-Site (karosserie-zentrum.de) - Brand-DNA
- **Trading Name:** KRZ Karosserie Reparatur Zentrum
- **Legal:** KRZ Karosserie Reparatur Zentrum UG (haftungsbeschränkt)
- **Geschäftsführer:** Madjid Firozi
- **HRB:** Hamburg HRB 174519
- **USt-IdNr:** DE 352 561 721
- **Adresse:** Bornmoor 1, 22525 Hamburg-Stellingen
- **Telefon:** 040-181287720 (Festnetz), 0176-84526413 (Mobil/WhatsApp)
- **Email:** info@karosserie-zentrum.de
- **Öffnungszeiten:** Mo-Fr 9-18, Sa 9-14, So geschlossen
- **Standort-Kontext:** Auf dem Autohof Stellingen (Bornmoor 1) - laut Branchenbuch Deutschlands größter Autogewerbehof mit 7.000 m².
- **Original-Site:** TYPO3 CMS, Standard-System-Fonts, sehr minimalistisch, alte Optik.

### Verbatim Voice-Beispiele aus alter Site
- "Ihr Karosserie-Fachbetrieb in Hamburg-Stellingen"
- "Fachgerechte Herrichtung Ihrer Karosserie"
- "Mit Fingerspitzengefühl, Einfühlungsvermögen und dem entsprechenden Know-how"
- "Perfekter Geradeauslauf mittels moderner Achsvermessung"
- "Wir schleppen Ihr Fahrzeug vom Unfallort ab"
- Tonalität: Sie-Form durchgehend, sachlich-norddeutsch, kein Pathos.

### Place-ID
- goo.gl/maps/FBegbyx6nwcxLsju5 wird in alter Site verlinkt
- Place-ID im Format 0xXXXXX:0xYYYYY konnte nicht via WebSearch aufgelöst werden
- Operator-TODO: Echte Place-ID aus Maps URL extrahieren und in site.ts setzen
- Aktuell: Standard-Embed mit Adress-Geocoding verwendet (q=Bornmoor+1+Hamburg)

### Assets
- Logo: karosserie-zentrum-karosseriearbeiten-hamburg-logo.jpg (300x157 JPEG, 25KB) - downloaded zu public/logo.jpg
- Service-Bilder: Alle 9 Service-Subpages der alten TYPO3-Site enthalten KEINE eigenen Service-Bilder - nur das Logo
- Fallback: 12 kuratierte Unsplash-Bilder zu Karosserie/Werkstatt/Auto-Themen heruntergeladen
- Bildqualität: 1600px, q=85, durchschnittlich 200-400KB

---

## Brand-Farben (Sub-Industry Fallback)
Logo zeigt schwarz-weiße Werkstatt-Identität ohne dominante Farbsignatur.
Sub-Industry Karosserie-Fachbetrieb Hamburg → warmer Anthrazit + handwerklich-rot:

- **Background Light:** `#F8F5F0` warm cream (Aston-style baseline)
- **Background Surface:** `#F0EDE7` layered warm
- **Background Surface Soft:** `#FBF9F5`
- **Accent Red:** `#B91C1C` Hamburg-Handwerk-Rot
- **Accent Red Hover:** `#991B1B`
- **Primary Text:** `#1A1A1A` near-black
- **Muted Text:** `#6B6B6B`
- **Border:** `#E5E0D8` warm border
- **Dark Section:** `#1F1F1F` (CtaBand, Footer)
- **Dark Section Text Muted:** `#9CA3AF`

## Typografie
- **Headlines:** @fontsource/work-sans (700 weight) - humanist sans matching TYPO3-Default
- **Body:** @fontsource/work-sans (300/400/500)
- **Display Tracking:** -0.02em letter-spacing auf H1/H2

## Card-Mandate
- Alle Service-Listen als Card-Grid (NICHT Bullets)
- Lucide-Icons in Brand-Rot
- Hover: -4px lift, top-border 3px rot, border-color shift warm→rot
- Grid-Symmetrie: 10 Services als 5x2 oder 2x5 (NICHT 3-3-4)

## Mood-Verteilung
- 80% Light Sections (cream + white)
- 20% Dark (CtaBand am Pageende, Footer, ein Hero-Overlay optional subtle)
- Logo-Authority gilt NUR für Farben, NICHT für Mood

## Voice-Strategie
- **Sie-Form** verbindlich (verbatim aus alter Site)
- **Lakonisch:** "Wir machen Karosserie. Keine Inspektionen, kein TÜV-Service."
- **Sachlich:** "Klassiker brauchen Zeit. Wir nehmen sie uns."
- **Anti-Cringe:** kein "Blech zu Kunst", kein "Werkstatt-Pastor", kein "Premium-Excellence"
- **Inhaber-Quote:** Madjid Firozi ist Geschäftsführer (im Impressum) - eine einzelne sachliche Quote ist erlaubt, KEIN Pathos

## Pages-Plan
1. Homepage (10 Sections wie Briefing)
2. 10 Service-Subpages
3. Autovermietung
4. Kontakt
5. Impressum
6. Datenschutz

## Operator-TODOs
1. Echte Google Place-ID aus Maps URL extrahieren und in src/data/site.ts ersetzen
2. Optional: Echte Google-Reviews (Place Details API) statt Testimonial-Placeholder verlinken
3. Inhaber-Foto Madjid Firozi falls vorhanden in About-Section integrieren
4. Echte Service-Fotos aus dem Betrieb statt Stock-Bilder (langfristig)
