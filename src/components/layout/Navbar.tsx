import { cta, primaryNav } from "@/content/site";
import { NavClient } from "@/components/layout/NavClient";

export function Navbar() {
  return <NavClient items={primaryNav} cta={cta.primary} />;
}
