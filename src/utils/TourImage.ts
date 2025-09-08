import type { ImageMetadata } from "astro";

export const tourImages: Record<string, ImageMetadata> = import.meta.glob(
  "/src/assets/img-tours/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" },
);
