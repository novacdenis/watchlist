"use server";

import { OMDB_POSTER_API_URL } from "@/config";

export async function getMediaPoster(formData: FormData) {
  const query = formData.get("query");

  const response = await fetch(`${OMDB_POSTER_API_URL}&s=${query}`);
  // the response type is ReadableStream
  const data = await response.arrayBuffer();

  return data;
}
