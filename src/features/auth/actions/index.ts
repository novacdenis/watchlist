"use server";

import type { Theme } from "@/types";

import { cookies } from "next/headers";

async function getUserTheme() {
  return (cookies().get("user_theme")?.value ?? "auto") as Theme;
}

async function setUserTheme(theme: Theme) {
  cookies().set("user_theme", theme, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    httpOnly: true,
  });
}

export { getUserTheme, setUserTheme };
