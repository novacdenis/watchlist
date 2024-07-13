import type { ImageLoaderProps } from "next/image";
import { OMDB_POSTER_API_URL } from "@/config";

function imageLoader({ src, width, quality = 75 }: ImageLoaderProps) {
  const height = Math.floor((width * 3) / 2);
  console.log({
    src,
    width,
    height,
  });
  return `${OMDB_POSTER_API_URL}&i=${src}&h=${Math.floor((height * quality) / 100)}&q=${quality || 75}`;
}

export { imageLoader };
