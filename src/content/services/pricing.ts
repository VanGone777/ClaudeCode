import type { ServiceDetail } from "@/content/types";

export const pricing: ServiceDetail = {
  slug: "pricing",
  title: "Pricing und Umsatzsteuerung",
  seoTitle: "Dynamic Pricing für Apartments in Wien",
  description:
    "Pricing für Apartments in Wien: Preise nach Nachfrage, Saison, Vorlauf und Kosten je Aufenthalt, abgestimmter Kanalmix und verständliches Reporting.",
  eyebrow: "Pricing",
  intro:
    "Der Preis eines Apartments ist keine feste Größe, sondern wird laufend an Nachfrage, Saison und Buchungsvorlauf angepasst. Goldnest steuert Preise, Mindestaufenthalt und Verfügbarkeit mit dem Ziel einer wirtschaftlich sinnvollen Auslastung. Nicht der höchste Preis zählt, sondern das Ergebnis nach Kosten.",
  includes: [
    {
      title: "Preisgestaltung nach Nachfrage",
      text: "Laufende Anpassung an Saison, Wochentag, Veranstaltungen in Wien und das aktuelle Buchungsverhalten.",
    },
    {
      title: "Buchungsvorlauf und Mindestaufenthalt",
      text: "Regeln für kurzfristige Lücken, lange Vorlaufzeiten und sinnvolle Mindestaufenthalte je Zeitraum.",
    },
    {
      title: "Kosten je Aufenthalt im Blick",
      text: "Reinigung, Wäsche und Verbrauchsmaterial fallen je Aufenthalt an und werden bei Preis und Mindestaufenthalt berücksichtigt.",
    },
    {
      title: "Kanalmix Airbnb und Booking.com",
      text: "Abgestimmte Preise und Konditionen je Plattform, passend zur Zielgruppe des Apartments.",
    },
    {
      title: "Kalendersynchronisation",
      text: "Verfügbarkeiten werden über alle Kanäle synchron gehalten, um Doppelbuchungen zu vermeiden.",
    },
    {
      title: "Reporting der Kennzahlen",
      text: "Auslastung, durchschnittlicher Tagespreis und Umsatz je verfügbarer Nacht, in verständlicher Form im Eigentümerreporting.",
    },
  ],
  forWhom: [
    "Eigentümer, die bisher mit festen Preisen arbeiten",
    "Eigentümer, die auf mehreren Plattformen inserieren",
    "Eigentümer, die ihre Kennzahlen verstehen und vergleichen möchten",
    "Eigentümer, die zwischen Auslastung und Aufwand abwägen wollen",
  ],
  body: [
    {
      type: "lead",
      text: "Ein gutes Pricing sucht nicht den höchsten Preis, sondern das beste Verhältnis aus Auslastung, Preis, Aufwand und Kosten. Dafür braucht es laufende Beobachtung, klare Regeln und ein Reporting, das die Ergebnisse nachvollziehbar macht.",
    },
    { type: "h2", text: "Was den Preis eines Apartments bestimmt" },
    {
      type: "p",
      text: "Die Nachfrage nach Apartments in Wien schwankt im Jahresverlauf, zwischen Wochentagen und rund um Veranstaltungen, Messen und Feiertage. Dazu kommt der Buchungsvorlauf: Eine Nacht in sechs Monaten wird anders bepreist als eine Lücke in drei Tagen. Wir beobachten diese Faktoren laufend und passen Preise und Verfügbarkeiten entsprechend an.",
    },
    {
      type: "ul",
      items: [
        "**Saison und Wochentag**: Nachfrage und Preisniveau verändern sich im Jahresverlauf",
        "**Veranstaltungen**: Messen, Kongresse und Großereignisse in Wien beeinflussen die Nachfrage kurzfristig",
        "**Buchungsvorlauf**: Frühbucher, kurzfristige Lücken und Restnächte brauchen unterschiedliche Regeln",
        "**Mindestaufenthalt**: Kurze Aufenthalte erhöhen den Aufwand je Nacht, lange Aufenthalte senken ihn",
        "**Objekt und Ausstattung**: Lage, Größe, Zustand und Bewertungen setzen den Rahmen",
      ],
    },
    { type: "h2", text: "Kosten je Aufenthalt und Mindestaufenthalt" },
    {
      type: "p",
      text: "Jeder Aufenthalt verursacht Kosten, die unabhängig von seiner Länge anfallen: Reinigung, Wäsche, Verbrauchsmaterial, Kommunikation. Eine einzelne Nacht zu einem niedrigen Preis kann nach Abzug dieser Kosten wenig oder nichts übrig lassen. Deshalb gehören Mindestaufenthalt und Reinigungskosten zur Preisgestaltung dazu. In nachfragestarken Zeiten kann ein längerer Mindestaufenthalt sinnvoll sein, in ruhigen Zeiten eher Flexibilität. Wie die Reinigung organisiert wird, lesen Sie unter [Reinigung und Gästebetreuung](/leistungen/reinigung-gaestebetreuung).",
    },
    { type: "h2", text: "Kanalmix und Kalendersynchronisation" },
    {
      type: "p",
      text: "Airbnb und Booking.com erreichen unterschiedliche Gäste und arbeiten mit unterschiedlichen Konditionen und Gebührenmodellen. Wir stimmen Preise, Stornobedingungen und Mindestaufenthalt je Plattform ab, sodass das Apartment auf beiden Kanälen stimmig auftritt. Wird auf mehreren Plattformen inseriert, müssen die Kalender zuverlässig synchron sein. Eine Doppelbuchung ist einer der teuersten Fehler im Betrieb, weil sie Stornokosten, schlechte Bewertungen und Aufwand verursacht. Die Synchronisation der Verfügbarkeiten ist deshalb Teil der Grundeinrichtung.",
    },
    {
      type: "p",
      text: "Auch die Ortstaxe gehört zur Kalkulation. Sie ist vom Unterkunftgeber abzuwickeln und nicht bei jeder Plattform automatisch abgeführt. Mehr dazu im Ratgeber [Ortstaxe in Wien](/ratgeber/ortstaxe-wien).",
    },
    { type: "h2", text: "Kennzahlen verständlich erklärt" },
    {
      type: "p",
      text: "Im Eigentümerreporting arbeiten wir mit wenigen Kennzahlen, die zusammen ein klares Bild ergeben:",
    },
    {
      type: "definitions",
      items: [
        {
          term: "Auslastung",
          text: "Der Anteil der verfügbaren Nächte, die tatsächlich gebucht waren. Hohe Auslastung allein sagt noch nichts über das Ergebnis, wenn die Preise zu niedrig sind.",
        },
        {
          term: "ADR (durchschnittlicher Tagespreis)",
          text: "Der durchschnittlich erzielte Preis je gebuchter Nacht. Ein hoher ADR bei geringer Auslastung kann weniger einbringen als ein mittlerer ADR bei guter Auslastung.",
        },
        {
          term: "RevPAR (Umsatz je verfügbarer Nacht)",
          text: "Umsatz geteilt durch alle verfügbaren Nächte, gebucht oder nicht. Diese Kennzahl verbindet Preis und Auslastung und eignet sich am besten für den Vergleich über Zeiträume hinweg.",
        },
      ],
    },
    { type: "h2", text: "Marktumfeld in Wien" },
    {
      type: "p",
      text: "Zur Einordnung: AirDNA weist für Wien im September 2026 (aktualisiert 6. Oktober 2026) 10.365 aktive Inserate, eine durchschnittliche Auslastung von 66 %, einen durchschnittlichen Tagespreis von 141 USD und einen RevPAR von 92 USD aus. Diese Werte beschreiben den Durchschnitt des Marktes, nicht ein einzelnes Apartment.",
    },
    {
      type: "callout",
      title: "Pflichthinweis",
      text: "Marktdaten sind keine Ertragsprognose für eine einzelne Immobilie. Ergebnisse hängen unter anderem von Lage, Wohnungstyp, Ausstattung, Verfügbarkeit, Bewertungen, Saisonalität und rechtlicher Nutzbarkeit ab.",
      tone: "caution",
    },
    {
      type: "p",
      text: "Was Ihr Apartment in diesem Umfeld leisten kann, besprechen wir im Erstgespräch anhand von Lage, Ausstattung und rechtlicher Ausgangslage. Eine Übersicht über die gesamte Betreuung finden Sie unter [Airbnb-Verwaltung in Wien](/airbnb-verwaltung-wien).",
    },
  ],
  faq: [
    {
      q: "Kann ich bei der Preisgestaltung mitentscheiden?",
      a: "Ja. Wir legen gemeinsam einen Rahmen fest, etwa Mindestpreise, Sperrtermine für Eigennutzung und gewünschte Mindestaufenthalte. Innerhalb dieses Rahmens steuern wir die Preise laufend und berichten über die Ergebnisse.",
    },
    {
      q: "Verwendet Goldnest ein Pricing-Tool?",
      a: "Wir arbeiten mit Marktdaten, Buchungsverhalten und Erfahrungswerten. Welche Werkzeuge im Einzelnen eingesetzt werden, besprechen wir im Erstgespräch.",
    },
    {
      q: "Warum ist nicht immer der höchste Preis das Ziel?",
      a: "Weil ein hoher Preis mit geringer Auslastung, vielen kurzen Aufenthalten oder schlechten Bewertungen nach Kosten weniger übrig lassen kann. Entscheidend ist das Ergebnis je verfügbarer Nacht nach Abzug der Kosten.",
    },
    {
      q: "Wie oft erhalte ich ein Reporting?",
      a: "Sie erhalten eine regelmäßige Eigentümerabrechnung mit Einnahmen, Kosten und Kennzahlen. Den Rhythmus legen wir vor Beginn fest.",
    },
  ],
  image: "pricing",
  related: ["airbnb-verwaltung", "reporting", "inserat-positionierung"],
};
