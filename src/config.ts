import {LocalePrefix, Pathnames } from "next-intl/dist/types/src/routing/types";

export const locales = ["en", "fr"] as const;
export type Locales = typeof locales;
export const pathnames: Pathnames<Locales> = {
    "/": "/",
    "/pathnames": "/pathnames",
};

export const localePrefix: LocalePrefix<Locales> = "always";