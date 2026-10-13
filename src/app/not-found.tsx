import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "Seite nicht gefunden",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="section-y bg-ivory">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow className="mb-6">Fehler 404</Eyebrow>
          <h1 className="text-display text-ink">Diese Seite gibt es nicht mehr oder noch nicht.</h1>
          <p className="mt-7 text-lead text-ink-soft">
            Vielleicht hilft Ihnen der Ratgeber zur Kurzzeitvermietung in Wien weiter, oder Sie beschreiben uns direkt Ihre Immobilie.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/" variant="primary" arrow>
              Zur Startseite
            </ButtonLink>
            <ButtonLink href="/kurzzeitvermietung-wien" variant="secondary">
              Kurzzeitvermietung in Wien verstehen
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
