import type { Guide } from "@/content/types";

/**
 * Ratgeber: Gästeverzeichnis und Meldepflicht.
 * Fakten ausschließlich aus docs/facts.md, Abschnitte 9 (Gästeverzeichnis), 8 (Pflichten im Vergleich) und 12 (Datenweitergabe durch Plattformen).
 * VERIFY: Aufbewahrungsfrist und technische Anforderungen an Software sind laut facts.md ein offener Prüfpunkt (Meldegesetz);
 * hier bewusst ohne Zahl. Welche Angaben im Gästeverzeichnis zu erfassen sind, wird ebenfalls nicht aufgezählt.
 */
export const gaesteverzeichnis: Guide = {
  slug: "gaesteverzeichnis-meldepflicht",
  title: "Gästeverzeichnis und Meldepflicht",
  seoTitle: "Airbnb Gästeverzeichnis Österreich: Meldepflicht und Frist",
  description:
    "Airbnb Gästeverzeichnis Österreich: Gäste unverzüglich, jedenfalls binnen 24 Stunden nach Ankunft melden. Elektronische Führung, Check-in, Datenschutz.",
  category: "Pflichten",
  readingMinutes: 6,
  published: "2026-10-13",
  updated: "2026-10-13",
  stand: "Oktober 2026",
  // VERIFY: einschlägige Bestimmungen des Meldegesetzes (Gästeverzeichnis, Fristen, Aufbewahrung) bestätigen.
  legalBasis: ["Meldegesetz: Gästeverzeichnis und Meldepflicht für Beherbergungsbetriebe", "Landesrechtliche Meldepflichten für Plattformbetreiber"],
  // VERIFY: Bezeichnung der zuständigen Meldebehörde in Wien bestätigen.
  authority: "Meldebehörde; Information: oesterreich.gv.at",
  reviewed: "Fachliche Prüfung ausstehend",
  intro:
    "Wer Gäste gegen Entgelt beherbergt, führt ein Gästeverzeichnis und meldet Ankünfte innerhalb einer kurzen Frist. Für Vermieter über Airbnb oder Booking.com ist das eine der wenigen Pflichten, die bei jedem einzelnen Aufenthalt anfällt. Dieser Ratgeber erklärt, was verlangt wird, wie ein digitaler Check-in die Meldung sauber abbildet und wo der Datenschutz ansetzt.",
  keyFacts: [
    "Beherbergungsbetriebe müssen ein Gästeverzeichnis führen.",
    "Die Anmeldung der Gäste hat unverzüglich zu erfolgen, jedenfalls innerhalb von 24 Stunden nach der Ankunft.",
    "Das Gästeverzeichnis darf elektronisch geführt werden.",
    "Die konkrete Aufbewahrungsfrist und die technischen Anforderungen an einzelne Software sind anhand des Meldegesetzes zu prüfen.",
    "Das Gästeverzeichnis ist eine eigene Pflicht neben VIETour-Registrierung, Ausnahmebewilligung und einer allfälligen Gewerbeanmeldung.",
  ],
  body: [
    {
      type: "lead",
      text: "Von allen Pflichten der Kurzzeitvermietung ist das Gästeverzeichnis diejenige mit dem kürzesten Takt. Ortstaxe und Statistik werden monatlich erledigt, die Ausnahmebewilligung einmal beantragt. Die Meldung der Gäste hingegen fällt bei jeder Anreise an, oft am Abend oder am Wochenende. Umso wichtiger ist ein Ablauf, der sie zuverlässig abbildet, ohne dass jemand daran denken muss.",
    },
    { type: "h2", text: "Was das Gästeverzeichnis ist" },
    {
      type: "p",
      text: "Beherbergungsbetriebe müssen ein Gästeverzeichnis führen. Darin werden die beherbergten Gäste erfasst; die Grundlage dafür ist das Meldegesetz. Die Pflicht knüpft an die Beherbergung an, nicht an die Größe des Betriebs und nicht an die Plattform, über die ein Gast gebucht hat.",
    },
    {
      type: "p",
      text: "Wer eine Wohnung entgeltlich an wechselnde Gäste vermietet, sollte davon ausgehen, dass ihn diese Pflicht betrifft, und im Zweifel bei der Meldebehörde nachfragen, wie das Verzeichnis im eigenen Fall zu führen ist. Welche Angaben im Einzelnen aufzunehmen sind, ergibt sich aus dem Meldegesetz und wird hier bewusst nicht aus zweiter Hand wiedergegeben.",
    },
    { type: "h2", text: "Fristen: Unverzüglich, jedenfalls innerhalb von 24 Stunden" },
    {
      type: "p",
      text: "Die Anmeldung eines Gastes hat unverzüglich zu erfolgen, jedenfalls innerhalb von 24 Stunden nach der Ankunft. Die Frist läuft ab der Ankunft, unabhängig davon, ob diese an einem Werktag, am Wochenende oder in der Nacht stattfindet. Ein Gast, der am Samstagabend anreist, ist demnach spätestens am Sonntagabend zu erfassen und nicht erst am Montag.",
    },
    {
      type: "table",
      caption: "Gästeverzeichnis: Was feststeht und was zu prüfen ist (Stand Oktober 2026)",
      head: ["Vorgang", "Regel", "Status"],
      rows: [
        ["Anmeldung des Gastes", "Unverzüglich, jedenfalls innerhalb von 24 Stunden nach Ankunft", "belegt (oesterreich.gv.at)"],
        ["Form des Verzeichnisses", "Elektronische Führung zulässig", "belegt (oesterreich.gv.at)"],
        ["Aufbewahrungsfrist", "Nach dem Meldegesetz zu prüfen", "offener Prüfpunkt"],
        ["Anforderungen an Software", "Nach dem Meldegesetz zu prüfen", "offener Prüfpunkt"],
      ],
    },
    {
      type: "callout",
      tone: "caution",
      title: "Keine Frist aus Erfahrungswerten übernehmen",
      text: "Für die Aufbewahrung des Gästeverzeichnisses und für die Anforderungen an eine elektronische Lösung kursieren unterschiedliche Angaben. Dieser Ratgeber nennt bewusst keine Zahl: Beide Punkte sind anhand des Meldegesetzes zu prüfen. Übernehmen Sie keine Frist aus einem Forum oder aus der Voreinstellung einer Software.",
    },
    { type: "h2", text: "Elektronisch führen: Zulässig, aber nicht beliebig" },
    {
      type: "p",
      text: "Das Gästeverzeichnis darf elektronisch geführt werden. Für Vermieter mit digitalem Check-in ist das die naheliegende Form, weil die Daten ohnehin vor der Anreise erfasst werden. Zulässig heißt allerdings nicht, dass jede Software die Anforderungen erfüllt.",
    },
    {
      type: "p",
      text: "Bevor Sie sich für eine Lösung entscheiden, sollten Sie prüfen, ob sie die nach dem Meldegesetz erforderlichen Angaben vollständig erfasst, ob sie die Aufbewahrung über den vorgeschriebenen Zeitraum ermöglicht und ob die Daten im Bedarfsfall in einer Form vorliegen, die der Meldebehörde vorgelegt werden kann. Die Anbieter von Verwaltungssoftware und Check-in-Lösungen machen dazu unterschiedliche Angaben; lassen Sie sich die Erfüllung der österreichischen Anforderungen bestätigen, statt sich auf eine Produktbeschreibung zu verlassen.",
    },
    { type: "h2", text: "Digitaler Check-in: Ein Ablauf, der die Meldung mitdenkt" },
    {
      type: "p",
      text: "Ein gut gebauter Check-in-Prozess erledigt die Gästeerfassung, bevor der Gast vor der Tür steht. Der folgende Ablauf hat sich in der Praxis bewährt; er ist als Muster zu verstehen, das an die jeweilige Software und an die Vorgaben des Meldegesetzes anzupassen ist.",
    },
    {
      type: "steps",
      items: [
        {
          title: "Vor der Anreise informieren",
          text: "Der Gast erfährt nach der Buchung, dass seine Daten für das gesetzlich vorgeschriebene Gästeverzeichnis benötigt werden, und erhält einen gesicherten Link zur Erfassung.",
        },
        {
          title: "Daten gesichert erfassen",
          text: "Die Eingabe erfolgt über ein verschlüsseltes Formular oder die Check-in-Funktion der Verwaltungssoftware, nicht per E-Mail oder Chat-Nachricht.",
        },
        {
          title: "Vollständigkeit prüfen",
          text: "Vor der Anreise wird kontrolliert, ob alle erforderlichen Angaben vorliegen. Fehlt etwas, wird nachgefragt, solange noch Zeit ist.",
        },
        {
          title: "Zutritt erst nach Erfassung",
          text: "Zugangscode oder Schlüsselübergabe werden erst freigegeben, wenn die Erfassung abgeschlossen ist. So entsteht keine Lücke zwischen Ankunft und Meldung.",
        },
        {
          title: "Eintrag innerhalb der Frist",
          text: "Die Anmeldung im Gästeverzeichnis erfolgt unverzüglich, jedenfalls innerhalb von 24 Stunden nach der Ankunft. Bei elektronischer Führung sollte die Software den Zeitpunkt des Eintrags nachvollziehbar festhalten.",
        },
        {
          title: "Aufbewahren und löschen",
          text: "Die Daten werden so lange aufbewahrt, wie es das Meldegesetz verlangt, und danach gelöscht. Die Frist ist vor der Einrichtung des Ablaufs zu klären.",
        },
      ],
    },
    {
      type: "p",
      text: "Wie Check-in und Zutritt bei professionell betreuten Apartments organisiert werden, beschreibt die Leistungsseite [Check-in und Zutritt](/leistungen/reinigung-gaestebetreuung#check-in). Bei Altbauten sind Hauseingang und Wohnungstür dabei getrennt zu betrachten, und Schlüsselboxen dürfen nicht ohne Berechtigung an gemeinschaftlichen Gebäudeteilen angebracht werden.",
    },
    { type: "h2", text: "Datenschutz bei der Gästeerfassung" },
    {
      type: "p",
      text: "Mit dem Gästeverzeichnis verarbeiten Sie personenbezogene Daten Ihrer Gäste. Die Meldepflicht ist der Zweck, der diese Verarbeitung trägt; sie rechtfertigt aber keine beliebige Nutzung der Daten darüber hinaus. Drei Grundsätze sollten den Ablauf prägen.",
    },
    {
      type: "ul",
      items: [
        "**Sichere Erfassung:** Daten werden über verschlüsselte Verbindungen und in einem System erhoben, das für diesen Zweck vorgesehen ist. Angaben, die in Messenger-Chats oder in der E-Mail-Inbox liegen, sind keine geeignete Form.",
        "**Begrenzter Zugriff:** Nur die Personen, die die Meldung tatsächlich bearbeiten, haben Zugriff. Reinigungskräfte, Handwerker oder Co-Hosts ohne Meldeaufgabe benötigen die Daten nicht.",
        "**Befristete Aufbewahrung:** Die Daten werden so lange aufbewahrt, wie es das Meldegesetz verlangt, und danach gelöscht. Welche Frist das ist, muss vor der Einrichtung geklärt sein.",
      ],
    },
    {
      type: "p",
      text: "Welche Informationspflichten Sie gegenüber den Gästen haben und ob Ihr Datenschutzhinweis die Gästeerfassung abdeckt, sollten Sie mit einer fachkundigen Stelle abstimmen. Wenn eine Verwaltung oder ein Co-Host die Erfassung übernimmt, gehört die Verantwortung für diese Daten in die vertragliche Vereinbarung.",
    },
    { type: "h2", text: "Eine Pflicht unter mehreren" },
    {
      type: "p",
      text: "Das Gästeverzeichnis wird gelegentlich mit anderen Meldungen verwechselt. Die Registrierung in VIETour betrifft Ortstaxe und Tourismusstatistik und wird über die Webanwendung der Stadt Wien abgewickelt; wie das funktioniert, zeigt der Ratgeber [VIETour: Registrierung und Meldungen](/ratgeber/vietour). Die Ausnahmebewilligung der MA 37 regelt die baurechtliche Zulässigkeit, die Gewerbeanmeldung die gewerberechtliche Einordnung. Keine dieser Pflichten ersetzt eine andere.",
    },
    {
      type: "p",
      text: "Dazu kommt eine Meldung, die nicht Sie, sondern die Plattform erledigt: Plattformbetreiber müssen aufgrund landesrechtlicher Vorschriften bestimmte Identifikations- und Kontaktdaten von Unterkunftgebern sowie Unterkunftsadressen an die Stadt Wien melden, neu registrierte Anbieter und Änderungen grundsätzlich bis zum 15. des Folgemonats. Die Vorstellung, eine Vermietung über eine Plattform bleibe den Behörden verborgen, ist deshalb nicht belastbar.",
    },
    {
      type: "p",
      text: "Welche Pflichten insgesamt zur touristischen Vermietung in Wien gehören, fasst die Übersicht [Kurzzeitvermietung in Wien](/kurzzeitvermietung-wien) zusammen. Goldnest ersetzt keine Rechts- oder Steuerberatung. Wenn Sie die Gästeerfassung nicht selbst übernehmen möchten, lässt sich im [Erstgespräch](/kontakt) klären, wie ein betreuter Check-in das Gästeverzeichnis zuverlässig abbildet.",
    },
  ],
  faq: [
    {
      q: "Muss ich Airbnb-Gäste in Österreich anmelden?",
      a: "Beherbergungsbetriebe müssen ein Gästeverzeichnis führen und ihre Gäste anmelden. Wer eine Wohnung entgeltlich an wechselnde Gäste vermietet, sollte davon ausgehen, dass ihn diese Pflicht betrifft, und im Zweifel bei der Meldebehörde nachfragen.",
    },
    {
      q: "Wie schnell muss die Anmeldung erfolgen?",
      a: "Unverzüglich, jedenfalls innerhalb von 24 Stunden nach der Ankunft des Gastes. Die Frist läuft ab der Ankunft, auch am Wochenende.",
    },
    {
      q: "Darf ich das Gästeverzeichnis digital führen?",
      a: "Ja, die elektronische Führung ist zulässig. Ob eine bestimmte Software die Anforderungen des Meldegesetzes erfüllt, ist allerdings gesondert zu prüfen.",
    },
    {
      q: "Wie lange muss ich das Gästeverzeichnis aufbewahren?",
      a: "Die konkrete Aufbewahrungsfrist ist anhand des Meldegesetzes zu prüfen. Dieser Ratgeber nennt bewusst keine Zahl, bis dieser Punkt verifiziert ist.",
    },
    {
      q: "Ersetzt die VIETour-Registrierung das Gästeverzeichnis?",
      a: "Nein. VIETour betrifft Ortstaxe und Tourismusstatistik. Das Gästeverzeichnis ist eine eigene Pflicht nach dem Meldegesetz und besteht daneben.",
    },
  ],
  sources: [
    {
      label: "oesterreich.gv.at – Gästeverzeichnis",
      href: "https://www.oesterreich.gv.at/de/lexicon/G/Seite.991691",
      date: "aktualisiert 1. Jänner 2026",
    },
    {
      label: "Stadt Wien – Tourismusdaten melden (Pflichten im Vergleich)",
      href: "https://www.wien.gv.at/statistik/tourismus-daten-melden",
      date: "abgerufen 10. Oktober 2026",
    },
    {
      label: "Stadt Wien – Ortstaxe und Online-Plattformen (Datenmeldung)",
      href: "https://www.wien.gv.at/wirtschaft/ortstaxe-online-plattformen",
      date: "abgerufen 10. Oktober 2026",
    },
  ],
  related: ["vietour", "ortstaxe-wien", "airbnb-gewerbe-oesterreich"],
  image: "guidePractice",
};
