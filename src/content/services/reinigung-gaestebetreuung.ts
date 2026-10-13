import type { ServiceDetail } from "@/content/types";

export const reinigungGaestebetreuung: ServiceDetail = {
  slug: "reinigung-gaestebetreuung",
  title: "Reinigung und Gästebetreuung",
  seoTitle: "Airbnb Reinigung und Gästebetreuung in Wien",
  description:
    "Reinigung, Gästekommunikation und Check-in für Apartments in Wien: feste Abläufe, Qualitätskontrolle, Smart Locks und nachvollziehbare Kosten durch Goldnest.",
  eyebrow: "Betrieb",
  intro:
    "Der laufende Betrieb entscheidet über Bewertungen, Folgebuchungen und den Zustand Ihres Apartments. Goldnest übernimmt Gästekommunikation, Check-in, Reinigung und Qualitätskontrolle mit festen Abläufen und persönlichen Ansprechpartnern. Sie sehen in der Abrechnung, was der Betrieb kostet.",
  includes: [
    {
      title: "Gästekommunikation",
      text: "Anfragen, Bestätigungen, Informationen zur Anreise, Fragen während des Aufenthalts und Bewertungen nach der Abreise, in Deutsch und Englisch.",
    },
    {
      title: "Check-in und Zutritt",
      text: "Smart Locks, zeitlich begrenzte Codes oder persönliche Schlüsselübergabe, abgestimmt auf Gebäude und Wohnungstür.",
    },
    {
      title: "Gästeverzeichnis",
      text: "Erfassung der Gäste für das verpflichtende Gästeverzeichnis als Teil des Check-in-Ablaufs.",
    },
    {
      title: "Reinigungskoordination",
      text: "Terminierung nach Belegungskalender, Abstimmung mit dem Reinigungsteam und Reaktion auf kurzfristige Änderungen.",
    },
    {
      title: "Qualitätskontrolle",
      text: "Checklisten je Apartment, Dokumentation mit Fotos und Nachkontrolle vor der nächsten Anreise.",
    },
    {
      title: "Wäsche und Verbrauchsmaterial",
      text: "Wäschekreislauf, Nachschub von Verbrauchsmaterial und Bestandskontrolle, damit nichts fehlt, wenn Gäste ankommen.",
    },
    {
      title: "Schäden und Instandhaltung",
      text: "Dokumentation des Zustands, Meldung von Schäden und Begleitung der Abwicklung mit Gästen, Plattformen und Versicherung.",
    },
  ],
  forWhom: [
    "Eigentümer, die keine Zeit für Gäste und Operatives haben",
    "Eigentümer, die nicht in Wien leben",
    "Eigentümer, die bisher selbst reinigen lassen und die Kosten nicht im Griff haben",
    "Eigentümer mit mehreren Apartments, die einheitliche Standards möchten",
  ],
  body: [
    {
      type: "lead",
      text: "Gäste bewerten nicht den Grundriss, sondern den Aufenthalt: Wie einfach war die Anreise, wie sauber war das Apartment, wie schnell wurde geantwortet. Genau diese Punkte sind der Kern unserer Betreuung.",
    },
    { type: "h2", text: "Gästekommunikation vor, während und nach dem Aufenthalt", id: "gaeste" },
    {
      type: "p",
      text: "**Vor dem Aufenthalt** beantworten wir Anfragen, prüfen Buchungen auf Plausibilität und senden rechtzeitig alle Informationen zur Anreise: Adresse, Zutritt, Hausregeln, Hinweise zum Gebäude. Gäste, die gut informiert ankommen, stellen weniger Fragen und halten sich eher an die Regeln des Hauses.",
    },
    {
      type: "p",
      text: "**Während des Aufenthalts** sind wir für Gäste erreichbar, beantworten Fragen und reagieren auf Störungen, etwa bei WLAN, Heizung oder Zutritt. Dringende Fälle werden nach einem festen Ablauf behandelt, sodass Gäste nicht warten und Sie nicht selbst eingreifen müssen.",
    },
    {
      type: "p",
      text: "**Nach dem Aufenthalt** erfolgt die Abreisekontrolle, die Bewertung und, wenn nötig, die Klärung von Schäden oder Beschwerden. Auf Wunsch erhalten Sie Einblick in die Kommunikation, damit Sie jederzeit wissen, wie mit Ihren Gästen gesprochen wird.",
    },
    { type: "h2", text: "Check-in und Zutritt", id: "check-in" },
    {
      type: "p",
      text: "Der Check-in soll für Gäste einfach und für Sie sicher sein. Dafür prüfen wir zuerst die Gegebenheiten im Gebäude: Im Wiener Altbau sind Hauseingang und Wohnungstür getrennt zu betrachten. Ein Smart Lock an der Wohnungstür, z. B. von Nuki, löst nicht die Frage, wie Gäste durch das Haustor kommen. Je nach Gebäude kommen Codes, Transponder oder eine Schlüsselübergabe in Frage.",
    },
    {
      type: "ul",
      items: [
        "Zutrittscodes werden nur zeitlich begrenzt für die Dauer des Aufenthalts vergeben und danach gelöscht",
        "Schlüsselboxen werden nicht ohne Berechtigung an Gemeinschaftsteilen des Gebäudes angebracht",
        "Persönliche Schlüsselübergabe bleibt dort sinnvoll, wo Technik im Gebäude nicht zuverlässig funktioniert",
        "Ersatzlösungen für den Fall, dass ein Smart Lock ausfällt oder Gäste außerhalb der Zeiten ankommen",
      ],
    },
    {
      type: "p",
      text: "Teil des Check-ins ist das **Gästeverzeichnis**. Beherbergungsbetriebe müssen ein Gästeverzeichnis führen; die Anmeldung hat unverzüglich, jedenfalls innerhalb von 24 Stunden nach Ankunft zu erfolgen. Eine elektronische Führung ist zulässig. Wir integrieren die Erfassung in den Anreiseprozess, damit sie nicht vergessen wird. Details und offene Prüfpunkte finden Sie im Ratgeber [Gästeverzeichnis und Meldepflicht](/ratgeber/gaesteverzeichnis-meldepflicht).",
    },
    { type: "h2", text: "Reinigung und Qualitätskontrolle" },
    {
      type: "p",
      text: "Die Reinigung wird nach dem Belegungskalender terminiert und mit dem Reinigungsteam abgestimmt, auch bei kurzfristigen Buchungen oder Verlängerungen. Jedes Apartment hat eine eigene Checkliste, die neben der Reinigung auch Ausstattung, Funktion von Geräten und den Zustand der Einrichtung umfasst. Das Ergebnis wird dokumentiert, bei Bedarf mit Fotos, und vor der nächsten Anreise kontrolliert.",
    },
    {
      type: "ul",
      items: [
        "**Koordination**: Termine, Zugang für das Reinigungsteam, Abstimmung bei Änderungen",
        "**Checklisten**: je Apartment, mit festen Standards für Sauberkeit und Ausstattung",
        "**Dokumentation**: Zustand nach der Reinigung und nach der Abreise, als Grundlage bei Schäden",
        "**Wäsche**: Kreislauf mit ausreichend Wäschesets, damit Reinigung und Wäsche nicht kollidieren",
        "**Verbrauchsmaterial**: Nachschub und Bestandskontrolle für Bad, Küche und Haushalt",
      ],
    },
    {
      type: "p",
      text: "Reinigungskosten sind ein wesentlicher Kostenblock der Kurzzeitvermietung. Deshalb erscheinen sie in der Eigentümerabrechnung nachvollziehbar je Aufenthalt, zusammen mit Wäsche und Verbrauchsmaterial. Wie Reinigungskosten in die Preisgestaltung einfließen, lesen Sie unter [Pricing und Umsatzsteuerung](/leistungen/pricing).",
    },
    { type: "h2", text: "Schäden, Störungen und Instandhaltung" },
    {
      type: "p",
      text: "Trotz guter Abläufe geht gelegentlich etwas kaputt. Wir dokumentieren den Zustand vor und nach jedem Aufenthalt, melden Schäden zeitnah und begleiten die Abwicklung mit Gästen, Plattformen und Versicherung. Kleine Instandhaltungen werden koordiniert, größere Maßnahmen mit Ihnen abgestimmt. Ob und in welchem Umfang Ihre Versicherung die touristische Nutzung deckt, sollten Sie vorab mit Ihrer Versicherung klären; plattformseitige Schutzprogramme sind kein automatischer Ersatz dafür.",
    },
    {
      type: "callout",
      text: "Goldnest ersetzt keine Rechts- oder Steuerberatung. Wir berücksichtigen die wesentlichen operativen Rahmenbedingungen und zeigen auf, welche Punkte vor einer Vermietung geklärt werden sollten.",
      tone: "note",
    },
  ],
  faq: [
    {
      q: "Wer reinigt das Apartment?",
      a: "Die Reinigung erfolgt durch Reinigungsteams, die Goldnest koordiniert und kontrolliert. Standards, Checklisten und Dokumentation werden von uns vorgegeben. Bestehende Reinigungskräfte können im Einzelfall eingebunden werden.",
    },
    {
      q: "Brauche ich ein Smart Lock?",
      a: "Nicht zwingend. Ein Smart Lock erleichtert den Zutritt, löst aber nicht jede Situation, insbesondere beim Haustor im Altbau. Wir prüfen Gebäude und Wohnungstür und schlagen eine Lösung vor, die im Alltag funktioniert.",
    },
    {
      q: "Wie werden Reinigungskosten abgerechnet?",
      a: "Reinigung, Wäsche und Verbrauchsmaterial erscheinen nachvollziehbar in der Eigentümerabrechnung. Welche Positionen an Gäste weiterverrechnet werden, hängt von Plattform und Preisgestaltung ab und wird vorab festgelegt.",
    },
    {
      q: "Was passiert, wenn ein Gast einen Schaden verursacht?",
      a: "Wir dokumentieren den Schaden, melden ihn an Sie und kümmern uns um die Abwicklung mit dem Gast, der Plattform und, soweit relevant, Ihrer Versicherung. Ob ein Schaden gedeckt ist, hängt vom Einzelfall und Ihrer Versicherung ab.",
    },
  ],
  image: "cleaning",
  related: ["airbnb-verwaltung", "co-hosting-wien", "pricing"],
};
