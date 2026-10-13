"use client";

import { useId, useMemo, useState } from "react";
import { disclaimer } from "@/content/site";
import { formatNumber } from "@/lib/utils";

/**
 * Scenario calculator. All inputs are supplied by the visitor; the component
 * contains no market assumptions and no Goldnest fee. It deliberately shows a
 * range-free "Orientierung" with an explicit non-guarantee notice.
 */
type Field = {
  key: keyof Inputs;
  label: string;
  unit: string;
  min: number;
  max: number;
  step: number;
  hint?: string;
};

type Inputs = {
  dailyRate: number;
  occupancy: number;
  stayLength: number;
  cleaningPerStay: number;
  platformFee: number;
  managementFee: number;
  maintenanceMonthly: number;
  otherMonthly: number;
};

const fields: Field[] = [
  { key: "dailyRate", label: "Möglicher Tagespreis", unit: "€ / Nacht", min: 0, max: 1000, step: 5 },
  { key: "occupancy", label: "Erwartete Auslastung", unit: "%", min: 0, max: 100, step: 1 },
  { key: "stayLength", label: "Durchschnittliche Aufenthaltsdauer", unit: "Nächte", min: 1, max: 90, step: 0.5 },
  { key: "cleaningPerStay", label: "Reinigung je Aufenthalt", unit: "€", min: 0, max: 500, step: 5 },
  { key: "platformFee", label: "Plattformgebühren", unit: "% vom Umsatz", min: 0, max: 30, step: 0.5 },
  { key: "managementFee", label: "Verwaltungsvergütung", unit: "% vom Umsatz", min: 0, max: 50, step: 0.5, hint: "laut Angebot" },
  { key: "maintenanceMonthly", label: "Instandhaltung", unit: "€ / Monat", min: 0, max: 5000, step: 10 },
  { key: "otherMonthly", label: "Sonstige operative Kosten", unit: "€ / Monat", min: 0, max: 5000, step: 10, hint: "Betriebskosten, Strom, Internet, Verbrauchsmaterial" },
];

// Example values only. They are editable and are not a forecast.
const initial: Inputs = {
  dailyRate: 120,
  occupancy: 60,
  stayLength: 3,
  cleaningPerStay: 60,
  platformFee: 15,
  managementFee: 0,
  maintenanceMonthly: 50,
  otherMonthly: 250,
};

function euro(value: number): string {
  return `${formatNumber(Math.round(value))} €`;
}

export function ScenarioCalculator() {
  const [values, setValues] = useState<Inputs>(initial);
  const baseId = useId();

  const result = useMemo(() => {
    const nights = 365 * (values.occupancy / 100);
    const stays = values.stayLength > 0 ? nights / values.stayLength : 0;
    const revenue = nights * values.dailyRate;
    const cleaning = stays * values.cleaningPerStay;
    const platform = revenue * (values.platformFee / 100);
    const management = revenue * (values.managementFee / 100);
    const fixed = (values.maintenanceMonthly + values.otherMonthly) * 12;
    const costs = cleaning + platform + management + fixed;
    return { nights, stays, revenue, cleaning, platform, management, fixed, costs, surplus: revenue - costs };
  }, [values]);

  function update(key: keyof Inputs, raw: string) {
    const parsed = Number(raw.replace(",", "."));
    setValues((prev) => ({ ...prev, [key]: Number.isFinite(parsed) ? parsed : 0 }));
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
      <form className="grid gap-x-8 gap-y-6 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()} aria-describedby={`${baseId}-note`}>
        {fields.map((field) => {
          const id = `${baseId}-${field.key}`;
          return (
            <div key={field.key} className="border-b border-line pb-4">
              <label htmlFor={id} className="block font-sans text-caption font-semibold tracking-[0.04em] text-stone uppercase">
                {field.label}
              </label>
              <div className="mt-2 flex items-baseline gap-3">
                <input
                  id={id}
                  type="number"
                  inputMode="decimal"
                  min={field.min}
                  max={field.max}
                  step={field.step}
                  value={values[field.key]}
                  onChange={(e) => update(field.key, e.target.value)}
                  className="w-full bg-transparent font-serif text-title text-ink outline-none placeholder:text-taupe focus-visible:text-bronze"
                />
                <span className="shrink-0 font-sans text-caption text-stone">{field.unit}</span>
              </div>
              {field.hint && <p className="mt-1 font-sans text-caption text-stone">{field.hint}</p>}
            </div>
          );
        })}
        <p id={`${baseId}-note`} className="font-sans text-caption text-stone sm:col-span-2">
          Beispielwerte. Bitte durch Ihre eigenen Annahmen ersetzen. Die Verwaltungsvergütung ist bewusst leer und wird im Angebot festgelegt.
        </p>
      </form>

      <div className="bg-ivory p-7 shadow-soft md:p-9" aria-live="polite">
        <p className="font-sans text-eyebrow font-semibold uppercase text-bronze">Unverbindliches Vermietungsszenario</p>
        <p className="mt-5 font-serif text-display leading-none text-ink">{euro(result.surplus)}</p>
        <p className="mt-2 font-sans text-small text-ink-soft">Überschuss pro Jahr vor Ortstaxe, Umsatz- und Einkommensteuer</p>

        <dl className="mt-8 divide-y divide-line border-y border-line font-sans text-small">
          <div className="flex justify-between gap-4 py-2.5">
            <dt className="text-ink-soft">Übernachtungen pro Jahr</dt>
            <dd className="text-ink">{formatNumber(Math.round(result.nights))}</dd>
          </div>
          <div className="flex justify-between gap-4 py-2.5">
            <dt className="text-ink-soft">Aufenthalte pro Jahr</dt>
            <dd className="text-ink">{formatNumber(Math.round(result.stays))}</dd>
          </div>
          <div className="flex justify-between gap-4 py-2.5">
            <dt className="text-ink-soft">Umsatz pro Jahr</dt>
            <dd className="text-ink">{euro(result.revenue)}</dd>
          </div>
          <div className="flex justify-between gap-4 py-2.5">
            <dt className="text-ink-soft">Reinigung</dt>
            <dd className="text-ink">− {euro(result.cleaning)}</dd>
          </div>
          <div className="flex justify-between gap-4 py-2.5">
            <dt className="text-ink-soft">Plattformgebühren</dt>
            <dd className="text-ink">− {euro(result.platform)}</dd>
          </div>
          <div className="flex justify-between gap-4 py-2.5">
            <dt className="text-ink-soft">Verwaltung</dt>
            <dd className="text-ink">− {euro(result.management)}</dd>
          </div>
          <div className="flex justify-between gap-4 py-2.5">
            <dt className="text-ink-soft">Instandhaltung und Sonstiges</dt>
            <dd className="text-ink">− {euro(result.fixed)}</dd>
          </div>
        </dl>

        <p className="mt-6 border-l border-bronze/60 pl-4 font-sans text-caption text-stone">{disclaimer.calculator}</p>
      </div>
    </div>
  );
}
