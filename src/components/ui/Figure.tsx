import Image from "next/image";
import { images, type ImageAsset, type ImageKey } from "@/content/images";
import { Placeholder } from "@/components/ui/Placeholder";
import { cn } from "@/lib/utils";

export type Aspect = "1/1" | "4/5" | "3/4" | "5/4" | "4/3" | "3/2" | "16/10" | "16/9" | "21/9" | "fill";

const aspectClass: Record<Aspect, string> = {
  "1/1": "aspect-square",
  "4/5": "aspect-[4/5]",
  "3/4": "aspect-[3/4]",
  "5/4": "aspect-[5/4]",
  "4/3": "aspect-[4/3]",
  "3/2": "aspect-[3/2]",
  "16/10": "aspect-[16/10]",
  "16/9": "aspect-video",
  "21/9": "aspect-[21/9]",
  fill: "absolute inset-0",
};

type Props = {
  image: ImageKey;
  aspect?: Aspect;
  className?: string;
  /** Preload (hero only). */
  priority?: boolean;
  sizes?: string;
  /** Subtle zoom on hover (for cards). */
  zoom?: boolean;
  /** Show the photographer brief on placeholders. */
  showMotif?: boolean;
  rounded?: boolean;
};

/**
 * Renders a photo from the image manifest, or the designed placeholder until
 * the real file exists. Always reserves space (no layout shift).
 */
export function Figure({ image, aspect = "4/3", className, priority = false, sizes = "100vw", zoom = false, showMotif = true, rounded = false }: Props) {
  const asset: ImageAsset = images[image];
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-sand",
        aspectClass[aspect],
        rounded && "rounded-sm",
        zoom && "media-zoom",
        className,
      )}
    >
      {asset.src ? (
        <Image
          src={asset.src}
          alt={asset.alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      ) : (
        <Placeholder variant={asset.variant} tone={asset.tone} alt={asset.alt} motif={asset.motif} showMotif={showMotif} />
      )}
    </div>
  );
}
