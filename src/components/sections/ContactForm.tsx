"use client";

import Link from "next/link";
import { useActionState, useEffect, useId, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { submitInquiry, type InquiryState } from "@/app/kontakt/actions";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArrowRight } from "@/components/ui/Icons";
import { currentUseOptions, interestOptions, MESSAGE_MAX_LENGTH } from "@/lib/inquiry";
import { cn } from "@/lib/utils";

const initialState: InquiryState = { status: "idle" };

/** Field order – used to focus the first invalid field after a failed submit. */
const FIELD_ORDER = ["name", "email", "phone", "propertyAddress", "livingArea", "rooms", "currentUse", "interests", "message", "privacy"] as const;

type Values = {
  name: string;
  email: string;
  phone: string;
  propertyAddress: string;
  livingArea: string;
  rooms: string;
  currentUse: string;
  interests: string[];
  message: string;
  privacy: boolean;
};

const emptyValues: Values = {
  name: "",
  email: "",
  phone: "",
  propertyAddress: "",
  livingArea: "",
  rooms: "",
  currentUse: "",
  interests: [],
  message: "",
  privacy: false,
};

const labelClass = "block font-sans text-eyebrow font-semibold uppercase text-stone";
const inputClass =
  "block w-full rounded-none border-0 border-b border-line bg-transparent px-0 py-3 font-serif text-subtitle text-ink placeholder:text-taupe focus:border-ink focus:outline-none focus-visible:outline-none transition-colors duration-300";
const inputInvalidClass = "border-error";
const errorClass = "mt-2 block font-sans text-caption text-error";
const choiceClass =
  "flex min-h-12 cursor-pointer items-center gap-4 py-3 font-sans text-body text-ink has-[:focus-visible]:text-bronze";
const controlClass =
  "size-5 shrink-0 cursor-pointer appearance-none border border-line-strong bg-transparent transition-colors duration-200 checked:border-ink checked:bg-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" variant="primary" size="lg" arrow={!pending} disabled={pending} aria-disabled={pending} className="w-full sm:w-auto">
      {pending ? "Wird gesendet …" : "Immobilie prüfen lassen"}
    </Button>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <span id={id} className={errorClass} role="alert">
      {message}
    </span>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitInquiry, initialState);
  const [values, setValues] = useState<Values>(emptyValues);
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);
  const uid = useId();
  const id = (field: string) => `${uid}-${field}`;
  const errors = state.status === "error" ? (state.errors ?? {}) : {};

  // Focus management: success heading, or the first invalid field.
  useEffect(() => {
    if (state.status === "success") {
      successRef.current?.focus();
      return;
    }
    if (state.status === "error") {
      const first = FIELD_ORDER.find((field) => errors[field]);
      const form = formRef.current;
      if (!form) return;
      if (first) {
        const target = form.querySelector<HTMLElement>(`[data-field="${first}"] input, [data-field="${first}"] textarea`);
        target?.focus();
      } else {
        form.querySelector<HTMLElement>("[data-form-message]")?.focus();
      }
    }
    // Only react to a changed action result.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const set = (field: keyof Values) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues((prev) => ({ ...prev, [field]: event.target.value }));

  const toggleInterest = (value: string) => (event: React.ChangeEvent<HTMLInputElement>) =>
    setValues((prev) => ({
      ...prev,
      interests: event.target.checked ? [...prev.interests, value] : prev.interests.filter((v) => v !== value),
    }));

  if (state.status === "success") {
    return (
      <div className="border-t border-line pt-10" aria-live="polite">
        <Eyebrow className="mb-6">Vielen Dank</Eyebrow>
        <h2 ref={successRef} tabIndex={-1} className="text-headline text-ink focus:outline-none">
          Wir haben Ihre Anfrage erhalten.
        </h2>
        <p className="mt-6 max-w-xl text-lead text-ink-soft">
          Wir sehen uns die Angaben zu Ihrer Immobilie in Ruhe an und melden uns innerhalb weniger Werktage bei Ihnen. Sollten wir
          vorab Rückfragen haben, erreichen wir Sie über die angegebene E-Mail-Adresse.
        </p>
        <ul className="mt-10 divide-y divide-line border-y border-line">
          <li>
            <Link href="/" className="group flex min-h-14 items-center justify-between gap-4 py-4 font-serif text-subtitle text-ink hover:text-bronze">
              Zurück zur Startseite
              <ArrowRight className="size-5 text-bronze transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </li>
          <li>
            <Link href="/ratgeber" className="group flex min-h-14 items-center justify-between gap-4 py-4 font-serif text-subtitle text-ink hover:text-bronze">
              Ratgeber zur Kurzzeitvermietung in Wien lesen
              <ArrowRight className="size-5 text-bronze transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </li>
        </ul>
      </div>
    );
  }

  const describedBy = (field: string, hint?: boolean) =>
    [errors[field] ? id(`${field}-error`) : null, hint ? id(`${field}-hint`) : null].filter(Boolean).join(" ") || undefined;

  return (
    <form ref={formRef} action={formAction} noValidate className="relative grid gap-10" aria-describedby={state.status === "error" ? id("form-message") : undefined}>
      {state.status === "error" && state.message && (
        <p
          id={id("form-message")}
          data-form-message
          tabIndex={-1}
          role="alert"
          className="border-l border-error pl-4 font-sans text-small text-error focus:outline-none"
        >
          {state.message}
        </p>
      )}

      {/* Kontakt */}
      <fieldset className="grid gap-8 border-0 p-0 sm:grid-cols-2 sm:gap-x-10">
        <legend className="mb-8 w-full border-b border-line pb-3 font-serif text-title text-ink">Ihre Kontaktdaten</legend>

        <div data-field="name">
          <label htmlFor={id("name")} className={labelClass}>
            Name
          </label>
          <input
            id={id("name")}
            name="name"
            type="text"
            autoComplete="name"
            aria-required="true"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={describedBy("name")}
            value={values.name}
            onChange={set("name")}
            className={cn(inputClass, errors.name && inputInvalidClass)}
          />
          <FieldError id={id("name-error")} message={errors.name} />
        </div>

        <div data-field="email">
          <label htmlFor={id("email")} className={labelClass}>
            E-Mail
          </label>
          <input
            id={id("email")}
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            aria-required="true"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={describedBy("email")}
            value={values.email}
            onChange={set("email")}
            className={cn(inputClass, errors.email && inputInvalidClass)}
          />
          <FieldError id={id("email-error")} message={errors.email} />
        </div>

        <div data-field="phone" className="sm:col-span-2 sm:max-w-sm">
          <label htmlFor={id("phone")} className={labelClass}>
            Telefon <span className="font-normal normal-case tracking-normal text-taupe">(optional)</span>
          </label>
          <input
            id={id("phone")}
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            aria-invalid={errors.phone ? true : undefined}
            aria-describedby={describedBy("phone")}
            value={values.phone}
            onChange={set("phone")}
            className={cn(inputClass, errors.phone && inputInvalidClass)}
          />
          <FieldError id={id("phone-error")} message={errors.phone} />
        </div>
      </fieldset>

      {/* Immobilie */}
      <fieldset className="grid gap-8 border-0 p-0 sm:grid-cols-2 sm:gap-x-10">
        <legend className="mb-8 w-full border-b border-line pb-3 font-serif text-title text-ink">Ihre Immobilie</legend>

        <div data-field="propertyAddress" className="sm:col-span-2">
          <label htmlFor={id("propertyAddress")} className={labelClass}>
            Adresse / Bezirk der Immobilie
          </label>
          <input
            id={id("propertyAddress")}
            name="propertyAddress"
            type="text"
            autoComplete="off"
            placeholder="z. B. 1070 Wien, Neubau"
            aria-required="true"
            aria-invalid={errors.propertyAddress ? true : undefined}
            aria-describedby={describedBy("propertyAddress")}
            value={values.propertyAddress}
            onChange={set("propertyAddress")}
            className={cn(inputClass, errors.propertyAddress && inputInvalidClass)}
          />
          <FieldError id={id("propertyAddress-error")} message={errors.propertyAddress} />
        </div>

        <div data-field="livingArea">
          <label htmlFor={id("livingArea")} className={labelClass}>
            Wohnfläche (m²)
          </label>
          <input
            id={id("livingArea")}
            name="livingArea"
            type="text"
            inputMode="decimal"
            autoComplete="off"
            aria-required="true"
            aria-invalid={errors.livingArea ? true : undefined}
            aria-describedby={describedBy("livingArea")}
            value={values.livingArea}
            onChange={set("livingArea")}
            className={cn(inputClass, errors.livingArea && inputInvalidClass)}
          />
          <FieldError id={id("livingArea-error")} message={errors.livingArea} />
        </div>

        <div data-field="rooms">
          <label htmlFor={id("rooms")} className={labelClass}>
            Anzahl Zimmer
          </label>
          <input
            id={id("rooms")}
            name="rooms"
            type="text"
            inputMode="numeric"
            autoComplete="off"
            aria-required="true"
            aria-invalid={errors.rooms ? true : undefined}
            aria-describedby={describedBy("rooms")}
            value={values.rooms}
            onChange={set("rooms")}
            className={cn(inputClass, errors.rooms && inputInvalidClass)}
          />
          <FieldError id={id("rooms-error")} message={errors.rooms} />
        </div>
      </fieldset>

      {/* Aktuelle Nutzung */}
      <fieldset data-field="currentUse" role="radiogroup" aria-required="true" className="border-0 p-0" aria-describedby={describedBy("currentUse")} aria-invalid={errors.currentUse ? true : undefined}>
        <legend className={cn(labelClass, "mb-2")}>Aktuelle Nutzung</legend>
        <div className="divide-y divide-line border-y border-line">
          {currentUseOptions.map((option) => (
            <label key={option.value} htmlFor={id(`currentUse-${option.value}`)} className={choiceClass}>
              <input
                id={id(`currentUse-${option.value}`)}
                type="radio"
                name="currentUse"
                value={option.value}
                checked={values.currentUse === option.value}
                onChange={set("currentUse")}
                className={cn(controlClass, "rounded-full")}
              />
              {option.label}
            </label>
          ))}
        </div>
        <FieldError id={id("currentUse-error")} message={errors.currentUse} />
      </fieldset>

      {/* Interesse */}
      <fieldset data-field="interests" className="border-0 p-0" aria-describedby={describedBy("interests", true)}>
        <legend className={cn(labelClass, "mb-2")}>Interesse</legend>
        <p id={id("interests-hint")} className="mb-2 font-sans text-caption text-stone">
          Mehrfachauswahl möglich.
        </p>
        <div className="divide-y divide-line border-y border-line">
          {interestOptions.map((option) => (
            <label key={option.value} htmlFor={id(`interests-${option.value}`)} className={choiceClass}>
              <input
                id={id(`interests-${option.value}`)}
                type="checkbox"
                name="interests"
                value={option.value}
                checked={values.interests.includes(option.value)}
                onChange={toggleInterest(option.value)}
                className={cn(controlClass, "rounded-xs")}
              />
              {option.label}
            </label>
          ))}
        </div>
        <FieldError id={id("interests-error")} message={errors.interests} />
      </fieldset>

      {/* Freitext */}
      <div data-field="message">
        <label htmlFor={id("message")} className={labelClass}>
          Was sollten wir über Ihre Immobilie wissen?{" "}
          <span className="font-normal normal-case tracking-normal text-taupe">(optional)</span>
        </label>
        <textarea
          id={id("message")}
          name="message"
          rows={5}
          maxLength={MESSAGE_MAX_LENGTH}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={describedBy("message", true)}
          value={values.message}
          onChange={set("message")}
          className={cn(inputClass, "resize-y font-serif text-body leading-relaxed", errors.message && inputInvalidClass)}
        />
        <span id={id("message-hint")} className="mt-2 block font-sans text-caption text-stone">
          Zum Beispiel Lage, Ausstattung, Stockwerk, Eigentumssituation oder bisherige Erfahrungen mit der Vermietung.
        </span>
        <FieldError id={id("message-error")} message={errors.message} />
      </div>

      {/* Datenschutz */}
      <div data-field="privacy">
        <label htmlFor={id("privacy")} className={cn(choiceClass, "items-start text-small text-ink-soft")}>
          <input
            id={id("privacy")}
            type="checkbox"
            name="privacy"
            checked={values.privacy}
            onChange={(event) => setValues((prev) => ({ ...prev, privacy: event.target.checked }))}
            aria-required="true"
            aria-invalid={errors.privacy ? true : undefined}
            aria-describedby={describedBy("privacy")}
            className={cn(controlClass, "mt-1 rounded-xs")}
          />
          <span>
            Ich habe die{" "}
            <Link href="/datenschutz" className="link-underline text-ink hover:text-bronze">
              Datenschutzhinweise
            </Link>{" "}
            gelesen und bin damit einverstanden, dass Goldnest meine Angaben zur Bearbeitung dieser Anfrage verarbeitet.
          </span>
        </label>
        <FieldError id={id("privacy-error")} message={errors.privacy} />
      </div>

      {/* Honeypot – not for humans */}
      <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor={id("website")}>Website</label>
        <input id={id("website")} name="website" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
      </div>

      <div className="flex flex-col gap-5 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
        <SubmitButton />
        <p className="font-sans text-caption text-stone">Unverbindlich. Sie gehen keine Verpflichtung ein.</p>
      </div>
    </form>
  );
}
