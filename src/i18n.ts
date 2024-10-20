import { notFound } from "next/navigation";
import { locales } from "./config";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as "fr" | "en")) notFound();

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
