import { en } from "./en";
import { de } from "./de";

export const translations = {
  en,
  de
} as const;

export type LanguageCode = keyof typeof translations;
