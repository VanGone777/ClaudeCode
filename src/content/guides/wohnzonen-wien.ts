import type { Guide } from "@/content/types";

/**
 * Ratgeber: Kurzzeitvermietung in Wiener Wohnzonen.
 * Fakten ausschließlich aus docs/facts.md (§5, §8, §11, §12), Stand Oktober 2026.
 * VERIFY: fachliche Prüfung durch Rechtsberatung ausstehend (siehe `reviewed`).
 * VERIFY: Die allgemeine Beschreibung der Wohnzone (Instrument des Flächenwidmungs- und
 * Bebauungsplans) ist bewusst knapp gehalten; keine Bezirke, keine Anteile, kein Link zum
 * Planwerkzeug, da in facts.md keine Quelle dafür genannt ist.
 */
export const wohnzonenWien: Guide = {
  slug: "wohnzonen-wien",
  title: "Kurzzeitvermietung in Wiener Wohnzonen",
  seoTitle: "Wohnzone Wien: Kurzzeitvermietung erlaubt oder nicht?",
  description:
    "Wohnzone Wien und Kurzzeitvermietung: Dort wird keine Ausnahmebewilligung erteilt. Wie Sie die Lage Ihrer Wohnung prüfen und welche Alternativen bleiben.",
  category: "Recht",
  readingMinutes: 7,
  published: "2026-10-13",
  updated: "2026-10-13",
  stand: "Oktober 2026",
  legalBasis: ["§ 129 Abs. 1a Wiener Bauordnung", "Flächenwidmungs- und Bebauungsplan der Stadt Wien"],
  authority: "Baupolizei der Stadt Wien (MA 37)",
  reviewed: "Fachliche Prüfung ausstehend",
  intro:
    "Ob eine Wiener Wohnung dauerhaft touristisch genutzt werden kann, entscheidet sich häufig an einer einzigen Frage: Liegt sie in einer Wohnzone? Dort wird keine Ausnahmebewilligung für die gewerbliche kurzfristige Beherbergung erteilt. Dieser Ratgeber erklärt, was eine Wohnzone ist, wie Sie die Lage Ihrer Wohnung prüfen und welche Möglichkeiten bleiben.",
  keyFacts: [
    "In Wohnzonen wird keine Ausnahmebewilligung für die gewerbliche kurzfristige Beherbergung erteilt.",
    "Wohnzonen werden im Flächenwidmungs- und Bebauungsplan der Stadt Wien festgelegt; ob eine Adresse betroffen ist, muss im Plan geprüft werden.",
    "Die von der Stadt Wien beschriebene Ausnahme für höchstens 90 Tage pro Kalenderjahr knüpft an die Beibehaltung des eigenen Wohnsitzes an; ob sie in einer Wohnzone greift, ist im Einzelfall zu prüfen.",
    "Außerhalb von Wohnzonen ist eine Ausnahmebewilligung nach § 129 Abs. 1a Wiener Bauordnung möglich, aber an weitere Voraussetzungen gebunden und nicht automatisch erhältlich.",
  ],
  body: [
    { type: "h2", text: "Was eine Wohnzone ist" },
    {
      type: "p",
      text: "Wohnzonen sind Gebiete, die im Flächenwidmungs- und Bebauungsplan der Stadt Wien als solche festgelegt sind. Der Plan ist das Instrument, mit dem die Stadt bestimmt, wie Flächen genutzt und bebaut werden dürfen. Die Festlegung als Wohnzone sichert die Wohnnutzung in einem Gebiet. Für die Kurzzeitvermietung ist weniger die planungsrechtliche Einordnung wichtig als ihre praktische Folge.",
    },
    {
      type: "definitions",
      items: [
        {
          term: "Wohnzone",
          text: "Gebiet, das im Flächenwidmungs- und Bebauungsplan der Stadt Wien als Wohnzone festgelegt ist. Dort wird keine Ausnahmebewilligung für die gewerbliche kurzfristige Beherbergung erteilt.",
        },
        {
          term: "Flächenwidmungs- und Bebauungsplan",
          text: "Planwerk der Stadt Wien, das für jede Liegenschaft festlegt, wie sie genutzt und bebaut werden darf. Maßgeblich für die Frage, ob eine Wohnzone vorliegt.",
        },
        {
          term: "Ausnahmebewilligung",
          text: "Bewilligung der Baupolizei der Stadt Wien (MA 37) nach § 129 Abs. 1a Wiener Bauordnung für eine touristische Nutzung über die Home-Sharing-Ausnahme hinaus; befristet auf höchstens fünf Jahre und nicht automatisch erhältlich.",
        },
      ],
    },
    {
      type: "p",
      text: "Nach den Voraussetzungen der Stadt Wien ist die erste Bedingung für eine Ausnahmebewilligung nach § 129 Abs. 1a Wiener Bauordnung, dass die Wohnung nicht in einer Wohnzone liegt. Liegt sie dort, wird keine Ausnahmebewilligung für die gewerbliche kurzfristige Beherbergung erteilt. Die dauerhafte touristische Nutzung einer Wohnung, für die eine solche Bewilligung erforderlich wäre, scheidet in einer Wohnzone baurechtlich aus.",
    },
    {
      type: "callout",
      tone: "caution",
      title: "Nicht pauschal nach Bezirk urteilen",
      text: "Ob eine Wohnung in einer Wohnzone liegt, lässt sich nicht aus dem Bezirk, der Postleitzahl oder dem Baujahr ableiten. Maßgeblich ist ausschließlich der Flächenwidmungs- und Bebauungsplan für die konkrete Liegenschaft. Aussagen wie „in diesem Bezirk ist alles Wohnzone“ oder „dieses Haus kann keine Wohnzone sein“ sollten Sie nicht übernehmen, ohne den Plan geprüft zu haben.",
    },

    { type: "h2", text: "Wie Sie die Lage Ihrer Wohnung prüfen" },
    {
      type: "p",
      text: "Die Prüfung ist der erste Schritt jeder Überlegung zur Kurzzeitvermietung, weil sie darüber entscheidet, ob die dauerhafte touristische Nutzung baurechtlich überhaupt in Betracht kommt. Erst danach lohnt sich der Blick auf Einrichtung, Pricing oder Plattformen.",
    },
    {
      type: "steps",
      items: [
        {
          title: "Flächenwidmungs- und Bebauungsplan einsehen",
          text: "Suchen Sie die konkrete Liegenschaft im Flächenwidmungs- und Bebauungsplan der Stadt Wien und prüfen Sie, ob für sie eine Wohnzone festgelegt ist.",
        },
        {
          title: "Ergebnis dokumentieren",
          text: "Halten Sie das Ergebnis mit Datum fest. Pläne können geändert werden; für eine spätere Antragstellung ist der jeweils gültige Plan maßgeblich.",
        },
        {
          title: "Bei Unklarheit nachfragen",
          text: "Ist die Darstellung nicht eindeutig, klären Sie die Festlegung mit der zuständigen Stelle der Stadt Wien oder mit rechtlicher Beratung, bevor Sie weitere Schritte setzen.",
        },
        {
          title: "Weitere Voraussetzungen prüfen",
          text: "Liegt die Wohnung nicht in einer Wohnzone, sind die übrigen Voraussetzungen der Stadt Wien zu prüfen: keine geschützte Kleingartenwidmung, keine Wohnbaufördermittel für die Errichtung, Mehrheit der Wohnungen im Gebäude bleibt Wohnzwecken gewidmet, höchstens 50 % der Nutzungseinheiten für die gewerbliche kurzfristige Beherbergung. Den Antrag beschreibt der Ratgeber zur [Ausnahmebewilligung für Kurzzeitvermietung in Wien](/ratgeber/ausnahmebewilligung-kurzzeitvermietung-wien).",
        },
      ],
    },

    { type: "h2", text: "Wohnzone und Home Sharing" },
    {
      type: "p",
      text: "Die Stadt Wien beschreibt neben der Ausnahmebewilligung eine Ausnahme für eine vorübergehende kurzfristige Vermietung von höchstens 90 Tagen pro Kalenderjahr im Zusammenhang mit der Beibehaltung des eigenen Wohnsitzes. Für diese Ausnahme ist keine Bewilligung vorgesehen. Ob und in welchem Umfang sie in einer Wohnzone greift, lässt sich nicht pauschal beantworten und ist im Einzelfall zu prüfen.",
    },
    {
      type: "p",
      text: "Klar ist hingegen, was in Wohnzonen nicht möglich ist: die dauerhafte touristische Nutzung einer Wohnung, für die eine Ausnahmebewilligung erforderlich wäre. Eine Investmentwohnung, die ganzjährig an Gäste vermietet werden soll, scheidet in einer Wohnzone baurechtlich aus. Juristische Personen können sich zudem nicht auf die Home-Sharing-Ausnahme berufen, da sie keinen Wohnsitz haben. Die Abgrenzung erläutert der Ratgeber zur [90-Tage-Regel in Wien](/ratgeber/90-tage-regel-wien).",
    },

    { type: "h2", text: "Was Eigentümer in einer Wohnzone prüfen sollten" },
    {
      type: "p",
      text: "Steht fest, dass die Wohnung in einer Wohnzone liegt, lohnt es sich, die Situation nüchtern zu ordnen. Die folgenden Punkte helfen dabei:",
    },
    {
      type: "ul",
      items: [
        "**Tatsächliche Nutzung.** Wohnen Sie selbst in der Wohnung und möchten sie nur zeitweise überlassen, oder soll sie dauerhaft Gästen dienen? Nur im ersten Fall kommt die von der Stadt beschriebene Ausnahme überhaupt in Betracht, und auch dann ist der Einzelfall zu prüfen.",
        "**Eigentumsrechtliche Lage.** Unabhängig vom Baurecht sind die wohnungseigentumsrechtliche Widmung, der Wohnungseigentumsvertrag und die Rechte der anderen Wohnungseigentümer zu beachten. Siehe [Airbnb in der Eigentumswohnung in Wien](/ratgeber/airbnb-eigentumswohnung-wien).",
        "**Bestehende Inserate.** Wird die Wohnung bereits über eine Plattform angeboten, sollten Sie wissen, dass Plattformbetreiber aufgrund landesrechtlicher Vorschriften bestimmte Daten von Unterkunftgebern und Unterkunftsadressen an die Stadt melden müssen. Die Annahme, die Stadt erfahre nichts davon, ist nicht belastbar.",
        "**Laufende Pflichten.** Für entgeltliche Aufenthalte gelten Ortstaxe, VIETour-Registrierung und Gästeverzeichnis unabhängig von der Wohnzone. Eine VIETour-Registrierung macht eine baurechtlich unzulässige Kurzzeitvermietung allerdings nicht legal.",
      ],
    },

    { type: "h2", text: "Alternativen zur touristischen Kurzzeitvermietung" },
    {
      type: "p",
      text: "Dass eine dauerhafte touristische Nutzung in einer Wohnzone ausscheidet, bedeutet nicht, dass die Wohnung nicht professionell vermietet werden kann. Für viele Eigentümer ist die mittelfristige Vermietung, also die möblierte Vermietung für mehrere Wochen oder Monate, eine Überlegung wert. Sie ist nicht automatisch von allen Fragen befreit: Mietrecht, Wohnungseigentumsrecht, Meldepflichten und die steuerliche Einordnung sind auch hier im Einzelfall zu prüfen. Welche Rahmenbedingungen für dieses Modell gelten und wie Goldnest es betreut, beschreibt die Seite [mittelfristige Vermietung](/leistungen/mittelfristige-vermietung).",
    },
    {
      type: "table",
      caption: "Vereinfachte Gegenüberstellung; die rechtliche Beurteilung bleibt dem Einzelfall vorbehalten.",
      head: ["Modell", "Ausgangslage in der Wohnzone", "Zu prüfen"],
      rows: [
        [
          "Dauerhafte touristische Kurzzeitvermietung",
          "Keine Ausnahmebewilligung für die gewerbliche kurzfristige Beherbergung; scheidet baurechtlich aus",
          "Entfällt als Modell",
        ],
        [
          "Vorübergehendes Home Sharing bei eigenem Wohnsitz, bis 90 Tage pro Kalenderjahr",
          "Von der Stadt Wien als Ausnahme beschrieben; Anwendung in der Wohnzone im Einzelfall zu prüfen",
          "Wohnsitz, Zustimmungen, Ortstaxe, VIETour, Gästeverzeichnis",
        ],
        [
          "Mittelfristige, möblierte Vermietung für Wochen oder Monate",
          "Rechtliche Einordnung gesondert zu prüfen",
          "Mietrecht, Wohnungseigentumsrecht, Meldepflichten, Steuern",
        ],
        [
          "Langfristige Vermietung zu Wohnzwecken",
          "Wohnnutzung, keine touristische Beherbergung",
          "Mietrecht, insbesondere Anwendbarkeit des Mietrechtsgesetzes",
        ],
      ],
    },

    { type: "h2", text: "Einordnung" },
    {
      type: "p",
      text: "Die Wohnzone ist für die Kurzzeitvermietung in Wien die Weiche, die vor allen anderen Fragen gestellt wird. Wer sie vor der Einrichtung, vor dem Inserat und vor der Kalkulation klärt, erspart sich Entscheidungen, die später nicht haltbar sind. Goldnest ersetzt keine Rechts- oder Steuerberatung. Wir berücksichtigen die wesentlichen operativen Rahmenbedingungen und zeigen auf, welche Punkte vor einer Vermietung geklärt werden sollten.",
    },
    {
      type: "p",
      text: "Einen Überblick über alle Themen bietet die Seite [Kurzzeitvermietung in Wien](/kurzzeitvermietung-wien). Wenn Sie klären möchten, welches Modell für Ihre Wohnung in Betracht kommt, können Sie [Ihre Immobilie prüfen lassen](/kontakt).",
    },
  ],
  faq: [
    {
      q: "Was ist eine Wohnzone in Wien?",
      a: "Ein Gebiet, das im Flächenwidmungs- und Bebauungsplan der Stadt Wien als Wohnzone festgelegt ist. Für die Kurzzeitvermietung ist entscheidend, dass dort keine Ausnahmebewilligung für die gewerbliche kurzfristige Beherbergung erteilt wird.",
    },
    {
      q: "Wie finde ich heraus, ob meine Wohnung in einer Wohnzone liegt?",
      a: "Nur über den Flächenwidmungs- und Bebauungsplan der Stadt Wien für die konkrete Liegenschaft. Bezirk, Postleitzahl oder Baujahr lassen keinen verlässlichen Schluss zu.",
    },
    {
      q: "Darf ich in einer Wohnzone gar nicht kurzfristig vermieten?",
      a: "Eine dauerhafte touristische Nutzung, die eine Ausnahmebewilligung erfordern würde, scheidet in einer Wohnzone baurechtlich aus. Ob die von der Stadt Wien beschriebene Ausnahme für vorübergehendes Home Sharing bei eigenem Wohnsitz greift, ist im Einzelfall zu prüfen.",
    },
    {
      q: "Kann ich in einer Wohnzone trotzdem eine Ausnahmebewilligung beantragen?",
      a: "Die erste Voraussetzung der Stadt Wien lautet, dass die Wohnung nicht in einer Wohnzone liegt. Für Wohnungen in Wohnzonen wird daher keine Ausnahmebewilligung für die gewerbliche kurzfristige Beherbergung erteilt.",
    },
    {
      q: "Welche Alternative habe ich in einer Wohnzone?",
      a: "Viele Eigentümer prüfen die mittelfristige, möblierte Vermietung für mehrere Wochen oder Monate oder die langfristige Vermietung. Beide Modelle sind rechtlich gesondert zu beurteilen, insbesondere nach Mietrecht und Wohnungseigentumsrecht.",
    },
  ],
  sources: [
    {
      label: "Stadt Wien: Ausnahmebewilligung für Kurzzeitvermietung",
      href: "https://www.wien.gv.at/wohnen/ausnahmebewilligung-kurzzeitvermietung",
      date: "abgerufen 10. Oktober 2026",
    },
    {
      label: "Stadt Wien: Tourismusdaten melden (VIETour)",
      href: "https://www.wien.gv.at/statistik/tourismus-daten-melden",
      date: "abgerufen 10. Oktober 2026",
    },
    {
      label: "Stadt Wien: Ortstaxe und Online-Plattformen",
      href: "https://www.wien.gv.at/wirtschaft/ortstaxe-online-plattformen",
      date: "abgerufen 10. Oktober 2026",
    },
  ],
  related: ["ausnahmebewilligung-kurzzeitvermietung-wien", "90-tage-regel-wien", "airbnb-eigentumswohnung-wien"],
  image: "aboutVienna",
};
