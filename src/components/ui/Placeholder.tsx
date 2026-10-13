import { useId } from "react";
import type { PlaceholderTone, PlaceholderVariant } from "@/content/images";
import { cn } from "@/lib/utils";

type Props = {
  variant: PlaceholderVariant;
  tone: PlaceholderTone;
  alt: string;
  motif?: string;
  showMotif?: boolean;
  className?: string;
};

const toneStyles: Record<PlaceholderTone, { bg: string; stroke: string; caption: string }> = {
  light: { bg: "bg-ivory-deep", stroke: "text-stone", caption: "text-stone" },
  sand: { bg: "bg-sand", stroke: "text-bronze", caption: "text-bronze" },
  deep: { bg: "bg-moss", stroke: "text-bronze-light", caption: "text-bronze-light" },
};

/**
 * Designed image placeholder: restrained architectural line drawing on a tonal surface.
 * Replaced automatically by <Figure> once a real `src` exists in content/images.ts.
 */
export function Placeholder({ variant, tone, alt, motif, showMotif = true, className }: Props) {
  const id = useId().replace(/:/g, "");
  const styles = toneStyles[tone];
  return (
    <div
      role="img"
      aria-label={alt}
      data-placeholder={variant}
      className={cn("media-surface absolute inset-0 overflow-hidden", styles.bg, className)}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            tone === "deep"
              ? "radial-gradient(120% 90% at 20% 0%, rgba(255,255,255,0.06), transparent 60%)"
              : "radial-gradient(120% 90% at 20% 0%, rgba(255,255,255,0.55), transparent 60%)",
        }}
      />
      <svg
        aria-hidden="true"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
        className={cn("absolute inset-0 h-full w-full", styles.stroke)}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {variant === "parquet" && (
          <>
            <defs>
              <pattern id={`hb-${id}`} width="96" height="48" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
                <rect x="0.5" y="0.5" width="47" height="23" />
                <rect x="48.5" y="24.5" width="47" height="23" />
              </pattern>
            </defs>
            <rect width="800" height="600" fill={`url(#hb-${id})`} stroke="none" opacity="0.5" />
          </>
        )}
        {variant === "door" && (
          <g opacity="0.55">
            <path d="M0 600H800" />
            <rect x="246" y="92" width="308" height="508" />
            <rect x="260" y="106" width="280" height="68" />
            <path d="M400 174V106M330 174l70-68M470 174l-70-68M290 174l110-68M510 174l-110-68" />
            <rect x="260" y="188" width="134" height="412" />
            <rect x="406" y="188" width="134" height="412" />
            <rect x="282" y="210" width="90" height="140" />
            <rect x="282" y="372" width="90" height="206" />
            <rect x="428" y="210" width="90" height="140" />
            <rect x="428" y="372" width="90" height="206" />
            <circle cx="384" cy="410" r="4" />
            <circle cx="416" cy="410" r="4" />
            <path d="M120 600V60M680 600V60M120 60h560" opacity="0.5" />
          </g>
        )}
        {variant === "window" && (
          <g opacity="0.55">
            <rect x="214" y="70" width="372" height="470" />
            <rect x="232" y="88" width="336" height="434" />
            <path d="M400 88v434M232 232h336M232 376h336" />
            <path d="M190 540h420M190 556h420" />
            <path d="M232 560v40M568 560v40" opacity="0.5" />
            <path d="M160 40h480" opacity="0.4" />
          </g>
        )}
        {variant === "plan" && (
          <g opacity="0.55">
            <rect x="140" y="90" width="520" height="420" />
            <path d="M140 300h220M360 90v220M360 300v210M520 300h140M520 300v210" />
            <path d="M250 300a40 40 0 0 1 40-40" />
            <path d="M360 190a40 40 0 0 1 40 40" />
            <path d="M520 400a40 40 0 0 0-40 40" />
            <path d="M440 510a40 40 0 0 1 40-40" />
            <path d="M180 90v-20M180 70h440M620 70v20" opacity="0.5" />
            <path d="M700 140v300M690 140h20M690 440h20" opacity="0.5" />
          </g>
        )}
        {variant === "facade" && (
          <g opacity="0.55">
            <path d="M0 120h800M0 136h800M0 300h800M0 464h800M0 600h800" />
            {[90, 270, 450, 630].map((x) => (
              <g key={x}>
                <rect x={x} y="166" width="80" height="110" />
                <path d={`M${x + 40} 166v110M${x} 222h80`} />
                <rect x={x} y="330" width="80" height="110" />
                <path d={`M${x + 40} 330v110M${x} 386h80`} />
                <rect x={x} y="494" width="80" height="86" />
                <path d={`M${x + 40} 494v86`} />
                <path d={`M${x - 10} 276h100M${x - 10} 440h100`} opacity="0.6" />
              </g>
            ))}
          </g>
        )}
        {variant === "arch" && (
          <g opacity="0.55">
            <path d="M150 600V330a250 250 0 0 1 500 0v270" />
            <path d="M190 600V340a210 210 0 0 1 420 0v260" />
            <path d="M378 86h44l-6 40h-32z" />
            <path d="M0 600h800" />
            <path d="M80 600V260M720 600V260" opacity="0.5" />
          </g>
        )}
        {variant === "material" && (
          <g opacity="0.5">
            <path d="M0 150h800M0 300h800M0 450h800" />
            <path d="M0 60c120 20 240-30 360 0s240 40 440 0" />
            <path d="M0 220c160 24 280-36 420-8s220 36 380-4" />
            <path d="M0 380c100 10 220-26 340-2s260 30 460-6" />
            <path d="M0 530c140 18 260-26 400 0s240 24 400-8" />
            <path d="M120 150v150M520 300v150M300 450v150" opacity="0.6" />
          </g>
        )}
        {variant === "stairs" && (
          <g opacity="0.55">
            <path d="M80 600V520h90v-80h90v-80h90v-80h90v-80h90v-80h90V40" />
            <path d="M80 520h90M170 440h90M260 360h90M350 280h90M440 200h90M530 120h90" opacity="0.5" />
            <path d="M120 480L660 60" />
            <path d="M120 480v-60M300 350v-60M480 212v-60M660 60v-60" opacity="0.7" />
            <path d="M0 600h800" />
          </g>
        )}
      </svg>
      {showMotif && motif && (
        <span
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute bottom-3 left-3 max-w-[85%] font-sans text-[0.6875rem] leading-snug tracking-[0.04em] opacity-70",
            styles.caption,
          )}
        >
          Foto folgt · {motif}
        </span>
      )}
    </div>
  );
}
