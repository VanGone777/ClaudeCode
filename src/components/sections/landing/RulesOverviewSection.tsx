import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DataTable } from "@/components/sections/landing/DataTable";
import { site } from "@/content/site";

/** Ortstaxe rates – docs/facts.md §7. */
const ortstaxeRows: string[][] = [
  ["Bis 30. Juni 2026", "3,2 % nach bisheriger Bemessungsregel"],
  ["1. Juli 2026 bis 30. Juni 2027", "5 %"],
  ["Ab 1. Juli 2027", "8 %"],
];

type TopicProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  link: { label: string; href: string };
};

function Topic({ id, eyebrow, title, children, link }: TopicProps) {
  return (
    <Reveal as="article" className="grid grid-cols-[minmax(0,1fr)] gap-8 border-b border-line py-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-20">
      <div>
        <SectionHeader eyebrow={eyebrow} title={title} size="title" />
        <div className="mt-8">
          <ButtonLink href={link.href} variant="link" arrow>
            {link.label}
          </ButtonLink>
        </div>
      </div>
      <div id={id} className="scroll-mt-28 max-w-2xl space-y-5 text-body text-ink-soft">
        {children}
      </div>
    </Reveal>
  );
}

/** 90-Tage-Regel, Ortstaxe, Brandschutz – cautious summaries with links to the deep dives. */
export function RulesOverviewSection() {
  return (
    <section id="regeln" className="section-y bg-ivory">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Die wichtigsten Regeln"
            title="Drei Themen, die jeder Eigentümer in Wien kennen sollte."
            lead="Kurz zusammengefasst, mit Stand der Informationen und Verweis auf den jeweiligen Ratgeber."
          />
        </Reveal>

        <div className="mt-10 border-t border-line lg:mt-14">
          <Topic id="90-tage-regel" eyebrow="Bauordnung" title="Die 90-Tage-Regel" link={{ label: "90-Tage-Regel verständlich erklärt", href: "/ratgeber/90-tage-regel-wien" }}>
            <p>
              Seit 1. Juli 2024 gelten in Wien strengere Voraussetzungen für die touristische Kurzzeitvermietung von Wohnungen. Gelegentliches Home
              Sharing ist dabei nicht dasselbe wie die dauerhafte touristische Nutzung einer Investmentwohnung.
            </p>
            <p>
              Die Stadt Wien beschreibt die Ausnahme für eine vorübergehende kurzfristige Vermietung von höchstens 90 Tagen pro Kalenderjahr ausdrücklich
              im Zusammenhang mit der Beibehaltung des eigenen Wohnsitzes. Juristische Personen können sich nicht darauf berufen, da sie keinen
              Wohnsitz haben. Der Satz, jede Wohnung dürfe 90 Tage vermietet werden, ist in dieser Form nicht zutreffend.
            </p>
            <p>
              Für eine darüber hinausgehende Nutzung ist grundsätzlich eine Ausnahmebewilligung nach § 129 Abs. 1a Wiener Bauordnung erforderlich. Sie
              wird von der Baupolizei (MA 37) für maximal fünf Jahre erteilt, ist an Voraussetzungen gebunden, etwa die Lage außerhalb einer Wohnzone
              und die Zustimmung sämtlicher Miteigentümer, und ist nicht automatisch erhältlich.
            </p>
          </Topic>

          <Topic id="ortstaxe" eyebrow="Abgaben" title="Die Ortstaxe" link={{ label: "Ortstaxe in Wien im Detail", href: "/ratgeber/ortstaxe-wien" }}>
            <DataTable head={["Zeitraum", "Ortstaxe"]} rows={ortstaxeRows} caption="Wiener Ortstaxe für entgeltliche Aufenthalte, Stand der Informationen: Oktober 2026" />
            <p>
              Die Prozentwerte beziehen sich auf die gesetzliche Bemessungsgrundlage und dürfen nicht einfach mit dem gesamten Buchungsbetrag
              multipliziert werden. Die Stadt Wien stellt dafür einen Ortstaxerechner bereit. Die Berechnung und Zahlung erfolgt monatlich bis zum 15.
              des Folgemonats, zusätzlich ist eine Jahressteuererklärung einzureichen.
            </p>
            <p>
              Unterkunftgeber sind für die Abwicklung verantwortlich. Die Stadt Wien veröffentlicht eine Liste von Plattformen mit Vereinbarungen zur
              Einhebung der Ortstaxe; Airbnb und Booking.com erscheinen dort derzeit nicht als Vertragspartner. Gehen Sie also nicht davon aus, dass
              eine Plattform die Ortstaxe automatisch abführt, sondern prüfen Sie die Abwicklung je Plattform.
            </p>
          </Topic>

          <Topic id="brandschutz" eyebrow="Gebäude" title="Der Brandschutz" link={{ label: "Brandschutz bei Kurzzeitvermietung", href: "/ratgeber/brandschutz-kurzzeitvermietung-wien" }}>
            <p>
              Laut Merkblatt der Wiener Baupolizei ist bei bis zu zehn touristisch genutzten Betten im Gebäude eine Erklärung über die Installation
              unvernetzter Rauchwarnmelder vorzulegen; bei mehr als zehn Betten im Gebäude können weitergehende brandschutztechnische Anforderungen
              nach OIB-Richtlinie 2 erforderlich sein.
            </p>
            <p>
              Entscheidend kann also die Gesamtzahl der touristischen Betten im Gebäude sein, nicht nur in der eigenen Wohnung; ob darüber hinaus
              bauliche Anpassungen nötig sind, bleibt eine Frage des Einzelfalls.
            </p>
          </Topic>
        </div>

        <p className="mt-8 font-sans text-caption text-stone">Stand der Informationen: {site.contentStand}</p>
      </Container>
    </section>
  );
}
