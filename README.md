# Goldnest Website

Website der Goldnest GmbH, Wien: professionelle Verwaltung von Apartments, ganzen Zinshäusern, Pensionen und Hotels.
Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4. Keine weiteren UI-Abhängigkeiten.

## Entwicklung

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # Produktionsbuild, alle Seiten statisch vorgerendert
npm run lint
```

## Struktur

| Pfad | Inhalt |
|---|---|
| `src/app` | Routen: Startseite, Landingpage, Hub, Leistungen, Ratgeber, Kontakt, Über uns, FAQ, Impressum, Datenschutz, `/en` |
| `src/components/ui` | Basiskomponenten (Button, Accordion, Figure, Reveal, Blocks …) |
| `src/components/sections` | Seitenabschnitte (Hero, Leistungen, Rechtliche Orientierung, Marktzahlen, Rechner, FAQ …) |
| `src/content` | Alle Texte getrennt von der Darstellung: `site.ts`, `faq.ts`, `home.ts`, `guides/*`, `services/*`, `images.ts` |
| `src/lib` | SEO-Metadaten, JSON-LD (Organization, Service, Breadcrumb, FAQ, Article), Validierung des Kontaktformulars |

Designsystem: Farben, Typografie (Fraunces und Manrope, selbst gehostet über `next/font`) und Abstände stehen als Tokens in `src/app/globals.css`.

## SEO

Canonical, OpenGraph, Twitter Cards, Sitemap (`/sitemap.xml`), `robots.txt`, FAQ-, Breadcrumb-, Article-, Service- und Organization-Schema.
Die Produktionsdomain steht in `src/content/site.ts` (`site.url`) und muss vor dem Go-live bestätigt werden.

## Vor dem Go-live zu verifizieren

Alle offenen Punkte sind im Code mit `VERIFY` markiert (`grep -rn VERIFY src`). Die wichtigsten:

1. **Unternehmensdaten** in `src/content/site.ts`: Domain, Anschrift, Telefon, Firmenbuchnummer, UID, Geschäftsführung, Social-Profile. Impressum und Datenschutz verwenden diese Werte.
2. **Portfolio-Angabe** „50+ betreute Apartments“: erst nach interner Bestätigung `site.portfolioClaim.verified = true` setzen. Bis dahin erscheint eine neutrale Formulierung.
3. **Fotografie**: Alle Bilder sind gestaltete Platzhalter mit Motivbeschreibung. Echte Fotos in `public/images` ablegen und `src` in `src/content/images.ts` setzen.
4. **Fallstudien und Eigentümerstimmen** (`src/content/home.ts`): bewusst Platzhalter, keine erfundenen Ergebnisse. Nur mit verifizierten Daten und schriftlicher Zustimmung befüllen.
5. **Rechtsinhalte**: Jeder Ratgeber zeigt „Fachliche Prüfung ausstehend“. Nach Prüfung durch Rechts- und Steuerberatung das Feld `reviewed` pflegen. Quellenlinks und Stand vor Veröffentlichung erneut prüfen. Offen laut Recherche: Frist der Ortstaxe-Jahreserklärung, Aufbewahrungsfrist des Gästeverzeichnisses, österreichische Umsetzung der EU-Verordnung 2024/1028, Bearbeitungsdauer der Ausnahmebewilligung (bewusst nicht genannt).
6. **Kontaktformular**: Die Server Action validiert und protokolliert nur. Versand über E-Mail-Dienst in `src/lib/inquiry.ts` anbinden (`INQUIRY_TO`, `INQUIRY_FROM`, `RESEND_API_KEY`, siehe `.env.example`).
7. **Datenschutzerklärung**: Hosting-Anbieter, Speicherdauer, E-Mail-Dienst ergänzen. Aussage „keine Analyse- oder Marketing-Cookies“ aktualisieren, falls Tracking ergänzt wird.
8. **Zinshäuser, Pensionen, Hotels** (`src/content/objects/index.ts`): Goldnest muss bestätigen, welche Leistungen es für diese Objektarten tatsächlich anbietet (einzelne Bereiche, Betriebsführung, Management-Vertrag) und welche Gewerbeberechtigung dafür vorliegt oder über Partner bereitgestellt wird. Die Seiten nennen keine Referenzen, Preise oder Ergebnisse. Aussagen zu Gewerbe und Brandschutz bei Pensionen und Hotels sind allgemein gehalten und fachlich zu prüfen.
9. **Keine Preise, Provisionen oder Garantien** von Goldnest sind hinterlegt. Der Rechner nutzt ausschließlich Eingaben der Besucher und Beispielwerte.

## Faktenbasis

Marktzahlen (Eurostat, WienTourismus, AirDNA) und Rechtsaussagen stammen aus der Marktanalyse vom 10. Oktober 2026 und sind als Orientierung gekennzeichnet. Marktdaten sind keine Ertragsprognose für eine einzelne Immobilie.
