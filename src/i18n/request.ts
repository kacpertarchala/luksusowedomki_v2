import { getRequestConfig } from "next-intl/server";

const locales = ["pl", "en"] as const;
const defaultLocale = "pl" satisfies (typeof locales)[number];

type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
  const resolvedLocale: Locale = locales.includes(locale as Locale)
    ? (locale as Locale)
    : defaultLocale;

  return {
    locale: resolvedLocale,
    messages: (await import(`../../messages/${resolvedLocale}.json`)).default,
  };
});
