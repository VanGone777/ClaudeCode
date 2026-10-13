import { site } from "@/content/site";

const items = ["Wien", "Persönliche Betreuung", "Professionelle Gästekommunikation", "Transparente Abrechnung", "Kurzzeit- und mittelfristige Vermietung"];

export function TrustBar() {
  // VERIFY: the portfolio figure is only shown once site.portfolioClaim.verified is true.
  const portfolio = site.portfolioClaim.verified ? site.portfolioClaim.label : site.portfolioClaim.neutralLabel;
  return (
    <div className="border-y border-line bg-ivory">
      <ul className="container-x flex flex-wrap items-center gap-x-9 gap-y-3 py-5 font-sans text-[0.75rem] font-medium tracking-[0.08em] text-stone uppercase">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-3 before:size-1 before:rounded-full before:bg-bronze">
            {item}
          </li>
        ))}
        <li className="flex items-center gap-3 before:size-1 before:rounded-full before:bg-bronze">{portfolio}</li>
      </ul>
    </div>
  );
}
