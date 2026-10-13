"use server";

import { deliverInquiry, validateInquiry } from "@/lib/inquiry";

export type InquiryState = {
  status: "idle" | "success" | "error";
  errors?: Record<string, string>;
  message?: string;
};

const GENERIC_ERROR =
  "Die Anfrage konnte gerade nicht übermittelt werden. Bitte versuchen Sie es später noch einmal oder schreiben Sie uns direkt per E-Mail.";

/** Server action for the owner inquiry form. Validates, delivers and returns the new state – never throws. */
export async function submitInquiry(_prevState: InquiryState, formData: FormData): Promise<InquiryState> {
  try {
    const { data, errors } = validateInquiry(formData);
    if (!data) {
      return {
        status: "error",
        errors,
        message: errors.form ?? "Bitte prüfen Sie die markierten Felder.",
      };
    }
    const delivered = await deliverInquiry(data);
    if (!delivered) return { status: "error", message: GENERIC_ERROR };
    return { status: "success" };
  } catch (error) {
    console.error("[inquiry] submitInquiry failed", error);
    return { status: "error", message: GENERIC_ERROR };
  }
}
