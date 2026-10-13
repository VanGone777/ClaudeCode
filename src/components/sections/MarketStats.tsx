import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Stat } from "@/components/ui/Stat";
import { ArrowUpRight } from "@/components/ui/Icons";
import { Disclaimer } from "@/components/sections/Disclaimer";
import { marketAirdna, marketVienna2025 } from "@/content/home";

function SourceLink({ source }: { source: { label: string; href: string; date?: string } }) {
  return (
    <p className="font-sans text-caption text-ivory/70">
      Quelle:{" "}
      <a href={source.href} target="_blank" rel="noopener noreferrer" className="link-underline inline-flex items-center gap-1 hover:text-ivory">
        {source.label}
        <ArrowUpRight className="size-3" />
      </a>
      {source.date && <>, {source.date}</>}
    </p>
  );
}

export function MarketStats() {
  return (
    <section id="markt" className="section-y bg-warm-black text-ivory">
      <Container>
        <Reveal>
          <SectionHeader
            tone="dark"
            eyebrow="Wien in Zahlen"
            title="Ein starker Markt, der genau hinsieht."
            lead="Wien hat 2025 ein Rekordjahr verzeichnet. Gleichzeitig ist die Zahl der aktiven Inserate auf Buchungsplattformen gesunken. Beides spricht für eine sorgfältige, professionelle Bewirtschaftung."
          />
        </Reveal>

        <div className="mt-14 grid gap-14 lg:mt-20 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <Reveal>
            <p className="font-sans text-eyebrow font-semibold uppercase text-ivory/65">Wien 2025</p>
            <div className="mt-5 grid gap-x-8 sm:grid-cols-3 lg:grid-cols-1">
              {marketVienna2025.stats.map((s) => (
                <Stat key={s.label} value={s.value} label={s.label} note={s.note} tone="dark" />
              ))}
            </div>
            <p className="mt-5 font-sans text-caption text-ivory/70">{marketVienna2025.caveat}</p>
            <div className="mt-3">
              <SourceLink source={marketVienna2025.source} />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="font-sans text-eyebrow font-semibold uppercase text-ivory/65">Kurzzeitvermietung Wien, September 2026</p>
            <div className="mt-5 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
              {marketAirdna.stats.map((s) => (
                <Stat key={s.label} value={s.value} label={s.label} tone="dark" size="sm" />
              ))}
            </div>
            <div className="mt-5">
              <SourceLink source={marketAirdna.source} />
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-16 max-w-3xl">
          <Disclaimer variant="market" tone="dark" />
        </Reveal>
      </Container>
    </section>
  );
}
