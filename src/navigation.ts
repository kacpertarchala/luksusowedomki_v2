import { createNavigation } from "next-intl/navigation";

export const locales = ["pl", "en"] as const;
export const defaultLocale = "pl" as const;
export const localePrefix = "as-needed" as const;

export const { Link, useRouter, usePathname } = createNavigation({
  locales,
  defaultLocale,
  localePrefix,
});
