/**
 * Owner inquiry (contact form): types, validation and delivery.
 * Dependency-free on purpose – no schema library, no network calls yet.
 */

export const objectTypeOptions = [
  { value: "einzelne-wohnung", label: "Einzelne Wohnung" },
  { value: "mehrere-wohnungen", label: "Mehrere Wohnungen" },
  { value: "zinshaus", label: "Ganzes Zinshaus" },
  { value: "pension", label: "Pension" },
  { value: "hotel", label: "Hotel" },
  { value: "sonstiges", label: "Sonstiges" },
] as const;

export const currentUseOptions = [
  { value: "kurzfristig-vermietet", label: "Bereits kurzfristig vermietet" },
  { value: "langfristig-vermietet", label: "Langfristig vermietet" },
  { value: "leerstehend", label: "Leerstehend" },
  { value: "eigennutzung", label: "Eigennutzung" },
  { value: "kauf-geplant", label: "Kauf geplant" },
  { value: "sonstiges", label: "Sonstiges" },
] as const;

export const interestOptions = [
  { value: "verwaltung", label: "Komplette Verwaltung" },
  { value: "co-hosting", label: "Co-Hosting" },
  { value: "mittelfristig", label: "Mittelfristige Vermietung" },
  { value: "betrieb", label: "Betrieb eines Hauses, einer Pension oder eines Hotels" },
  { value: "einrichtung", label: "Einrichtung" },
  { value: "beratung", label: "Beratung oder Einschätzung" },
] as const;

export type ObjectType = (typeof objectTypeOptions)[number]["value"];
export type CurrentUse = (typeof currentUseOptions)[number]["value"];
export type Interest = (typeof interestOptions)[number]["value"];

export interface InquiryInput {
  name: string;
  email: string;
  phone?: string;
  /** Adresse / Bezirk der Immobilie */
  objectType: ObjectType;
  propertyAddress: string;
  /** Wohn- bzw. Nutzfläche in m², kept as the submitted string (e.g. "72" or "72,5") */
  livingArea: string;
  /** Anzahl Zimmer oder Einheiten */
  rooms: string;
  currentUse: CurrentUse;
  interests: Interest[];
  /** Freitext, max. 2000 Zeichen */
  message?: string;
  /** Must be true */
  privacy: true;
  /** Honeypot – must be empty */
  website: "";
}

export type InquiryErrors = Record<string, string>;

export const MESSAGE_MAX_LENGTH = 2000;

const objectTypeValues: readonly string[] = objectTypeOptions.map((o) => o.value);
const currentUseValues: readonly string[] = currentUseOptions.map((o) => o.value);
const interestValues: readonly string[] = interestOptions.map((o) => o.value);

/** Deliberately permissive: local part, "@", domain with at least one dot. */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
/** Digits, spaces, plus, slashes, dashes, parentheses – international and Austrian formats. */
const PHONE_RE = /^\+?[0-9 ()/.-]{6,30}$/;
/** Number with optional decimal part, comma or dot. */
const DECIMAL_RE = /^\d{1,5}([.,]\d{1,2})?$/;
const INTEGER_RE = /^\d{1,4}$/;

function text(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function isObjectType(value: string): value is ObjectType {
  return objectTypeValues.includes(value);
}

function isCurrentUse(value: string): value is CurrentUse {
  return currentUseValues.includes(value);
}

function isInterest(value: string): value is Interest {
  return interestValues.includes(value);
}

/**
 * Validates the raw FormData of the contact form.
 * Returns the typed input when valid, otherwise a map of field → German error message.
 */
export function validateInquiry(formData: FormData): { data?: InquiryInput; errors: InquiryErrors } {
  const errors: InquiryErrors = {};

  const name = text(formData, "name");
  const email = text(formData, "email");
  const phone = text(formData, "phone");
  const objectType = text(formData, "objectType");
  const propertyAddress = text(formData, "propertyAddress");
  const livingArea = text(formData, "livingArea").replace(/\s|m²|m2/gi, "");
  const rooms = text(formData, "rooms");
  const currentUse = text(formData, "currentUse");
  const message = text(formData, "message");
  const privacy = formData.get("privacy");
  const website = text(formData, "website");
  const interests = formData
    .getAll("interests")
    .filter((v): v is string => typeof v === "string")
    .map((v) => v.trim());

  if (name.length < 2) errors.name = "Bitte geben Sie Ihren Namen an.";
  else if (name.length > 120) errors.name = "Der Name ist zu lang.";

  if (!email) errors.email = "Bitte geben Sie Ihre E-Mail-Adresse an.";
  else if (email.length > 200 || !EMAIL_RE.test(email)) errors.email = "Bitte prüfen Sie die E-Mail-Adresse.";

  if (phone && !PHONE_RE.test(phone)) errors.phone = "Bitte prüfen Sie die Telefonnummer.";

  if (!objectType) errors.objectType = "Bitte wählen Sie die Art der Immobilie aus.";
  else if (!isObjectType(objectType)) errors.objectType = "Bitte wählen Sie eine der angebotenen Optionen.";

  if (propertyAddress.length < 2) errors.propertyAddress = "Bitte nennen Sie Adresse oder Bezirk der Immobilie.";
  else if (propertyAddress.length > 200) errors.propertyAddress = "Die Angabe ist zu lang.";

  if (!livingArea) errors.livingArea = "Bitte geben Sie die Fläche in m² an.";
  else if (!DECIMAL_RE.test(livingArea) || parseFloat(livingArea.replace(",", ".")) <= 0)
    errors.livingArea = "Bitte geben Sie die Fläche als Zahl an, zum Beispiel 65.";

  if (!rooms) errors.rooms = "Bitte geben Sie die Anzahl der Zimmer oder Einheiten an.";
  else if (!INTEGER_RE.test(rooms) || parseInt(rooms, 10) <= 0)
    errors.rooms = "Bitte geben Sie die Anzahl als ganze Zahl an.";

  if (!currentUse) errors.currentUse = "Bitte wählen Sie die aktuelle Nutzung aus.";
  else if (!isCurrentUse(currentUse)) errors.currentUse = "Bitte wählen Sie eine der angebotenen Optionen.";

  const validInterests = interests.filter(isInterest);
  if (interests.length === 0) errors.interests = "Bitte wählen Sie mindestens einen Bereich aus.";
  else if (validInterests.length !== interests.length) errors.interests = "Bitte wählen Sie nur die angebotenen Optionen.";

  if (message.length > MESSAGE_MAX_LENGTH)
    errors.message = `Die Nachricht darf höchstens ${MESSAGE_MAX_LENGTH} Zeichen umfassen.`;

  if (privacy !== "on" && privacy !== "true") errors.privacy = "Bitte bestätigen Sie die Datenschutzhinweise.";

  // Honeypot: real visitors never see this field. Reported as a generic error so bots learn nothing.
  if (website) errors.form = "Die Anfrage konnte nicht verarbeitet werden.";

  if (Object.keys(errors).length > 0) return { errors };

  return {
    errors,
    data: {
      name,
      email,
      phone: phone || undefined,
      objectType: objectType as ObjectType,
      propertyAddress,
      livingArea,
      rooms,
      currentUse: currentUse as CurrentUse,
      interests: Array.from(new Set(validInterests)),
      message: message || undefined,
      privacy: true,
      website: "",
    },
  };
}

function redactEmail(email: string): string {
  const [local, domain] = email.split("@");
  if (!domain) return "***";
  return `${local.slice(0, 1)}***@${domain}`;
}

/**
 * Delivers a validated inquiry to Goldnest.
 * Currently logs a redacted summary (no personal data beyond a masked e-mail) and resolves true.
 *
 * // INTEGRATE: e-mail delivery.
 * // Required env vars (see .env.example):
 * //   INQUIRY_TO      – recipient mailbox at Goldnest (e.g. office@…)
 * //   INQUIRY_FROM    – verified sender address of the sending domain
 * //   RESEND_API_KEY  – API key if Resend is used (alternatively SMTP_* vars for nodemailer)
 * //
 * // Option A – Resend (HTTPS API, no extra dependency needed):
 * //   const res = await fetch("https://api.resend.com/emails", {
 * //     method: "POST",
 * //     headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
 * //     body: JSON.stringify({
 * //       from: process.env.INQUIRY_FROM,
 * //       to: process.env.INQUIRY_TO,
 * //       reply_to: data.email,
 * //       subject: `Eigentümeranfrage: ${data.propertyAddress}`,
 * //       text: formatInquiryText(data),
 * //     }),
 * //   });
 * //   return res.ok;
 * //
 * // Option B – SMTP via nodemailer (npm i nodemailer): createTransport({ host, port, auth }) and
 * //   transporter.sendMail({ from: INQUIRY_FROM, to: INQUIRY_TO, replyTo: data.email, subject, text }).
 * //
 * // In both cases: return false on failure (never throw), and consider a confirmation e-mail to the sender
 * // only after the privacy policy (/datenschutz) describes this processing. // VERIFY: Datenschutzerklärung
 */
export async function deliverInquiry(data: InquiryInput): Promise<boolean> {
  const summary = {
    receivedAt: new Date().toISOString(),
    email: redactEmail(data.email),
    objectType: data.objectType,
    propertyAddress: data.propertyAddress,
    livingArea: data.livingArea,
    rooms: data.rooms,
    currentUse: data.currentUse,
    interests: data.interests,
    hasPhone: Boolean(data.phone),
    messageLength: data.message?.length ?? 0,
  };
  console.info("[inquiry] Neue Eigentümeranfrage (redacted)", summary);
  return true;
}

/** Plain-text body for the notification e-mail. Exported for the integration above. */
export function formatInquiryText(data: InquiryInput): string {
  const use = currentUseOptions.find((o) => o.value === data.currentUse)?.label ?? data.currentUse;
  const interests = data.interests.map((i) => interestOptions.find((o) => o.value === i)?.label ?? i).join(", ");
  return [
    `Name: ${data.name}`,
    `E-Mail: ${data.email}`,
    `Telefon: ${data.phone ?? "–"}`,
    `Immobilie: ${data.propertyAddress}`,
    `Wohnfläche: ${data.livingArea} m²`,
    `Zimmer: ${data.rooms}`,
    `Aktuelle Nutzung: ${use}`,
    `Interesse: ${interests}`,
    "",
    "Nachricht:",
    data.message ?? "–",
  ].join("\n");
}
