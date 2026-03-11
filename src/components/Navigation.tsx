"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname, Link } from "@/navigation";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

export const Navigation = () => {
  const t = useTranslations("navigation");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 120; // accommodates fixed navigation height
      const top = element.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToNavigationItem = (href: string) => {
    const normalizedId = href.startsWith("#") ? href.slice(1) : href;
    scrollToSection(normalizedId);
  };

  const handleLocaleChange = (nextLocale: "pl" | "en") => {
    if (nextLocale === locale) return;
    router.replace(pathname, { locale: nextLocale });
    router.refresh();
  };

  const languageOptions: { code: "pl" | "en"; label: string }[] = [
    { code: "pl", label: "PL" },
    { code: "en", label: "EN" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md shadow-sm"
      style={{ backgroundColor: 'rgba(246, 240, 231, 0.95)' }}
    >
      <Container>
        <div className="relative">
        <div className="flex h-18 items-center gap-6">
          <Link
            href="/"
            className="group flex h-full items-center shrink-0 -ml-3"
            aria-label="Go to homepage"
          >
            <span className="relative block h-full w-45">
              <Image
                src="/images/luksusowedomki_logo.png"
                alt={siteConfig.brand.name}
                fill
                sizes="320px"
                className="object-contain"
                priority
              />
            </span>
          </Link>

          <div className="hidden flex-1 items-center [@media(min-width:1000px)]:flex">
            <div className="flex flex-1 flex-nowrap items-center justify-center gap-4 text-sm font-semibold">
              {siteConfig.navigation
                .filter((item) => item.name !== "booking" && item.name !== "home")
                .map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToNavigationItem(item.href)}
                    className="transition-opacity hover:opacity-70 whitespace-nowrap"
                    style={{ color: '#1D1916' }}
                  >
                    {t(item.name)}
                  </button>
                ))}
            </div>

            <div className="ml-6 flex shrink-0 items-center gap-2">
              <button
                onClick={() => handleLocaleChange("pl")}
                className={cn(
                  "px-2.5 py-1.5 rounded-md text-sm font-medium transition-all",
                  locale === "pl"
                    ? ""
                    : "hover:opacity-70"
                )}
                style={locale === "pl" 
                  ? { backgroundColor: '#1D1916', color: 'white' }
                  : { color: '#6B6A66' }
                }
              >
                PL
              </button>
              <button
                onClick={() => handleLocaleChange("en")}
                className={cn(
                  "px-2.5 py-1.5 rounded-md text-sm font-medium transition-all",
                  locale === "en"
                    ? ""
                    : "hover:opacity-70"
                )}
                style={locale === "en" 
                  ? { backgroundColor: '#1D1916', color: 'white' }
                  : { color: '#6B6A66' }
                }
              >
                EN
              </button>
            </div>

            <Button
              onClick={() => scrollToSection("booking")}
              className="ml-1 h-10 whitespace-nowrap rounded-full px-5 text-sm font-medium transition-all hover:shadow-lg"
              style={{ backgroundColor: '#9E521F', color: 'white' }}
            >
              {t("booking")}
            </Button>
          </div>

          <div className="ml-auto [@media(min-width:1000px)]:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md"
              style={{ color: '#1D1916' }}
            >
              <div className="w-6 h-0.5 bg-current mb-1.5"></div>
              <div className="w-6 h-0.5 bg-current mb-1.5"></div>
              <div className="w-6 h-0.5 bg-current"></div>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div 
            className="absolute right-0 top-full mt-3 [@media(min-width:1000px)]:hidden"
          >
            <div 
              className="w-[72vw] max-w-[260px] rounded-2xl px-4 py-4 shadow-[0_15px_40px_rgba(0,0,0,0.18)]"
              style={{ 
                backgroundColor: '#F6F0E7',
                border: '1px solid rgba(107, 106, 102, 0.2)'
              }}
            >
              <div className="flex flex-col space-y-2">
                {siteConfig.navigation
                  .filter((item) => item.name !== "booking" && item.name !== "home")
                  .map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToNavigationItem(item.href)}
                      className="w-full rounded-xl py-2.5 text-center text-base font-medium transition-all hover:opacity-80"
                      style={{ color: '#1D1916', minHeight: '48px' }}
                    >
                      {t(item.name)}
                    </button>
                  ))}
              </div>

              <div className="mt-4 mb-3 flex justify-center">
                <div className="inline-flex items-center gap-1 rounded-full border border-[#C8C1B4] bg-white/70 px-1 py-1">
                  {languageOptions.map((option) => (
                    <button
                      key={option.code}
                      onClick={() => handleLocaleChange(option.code)}
                      className="rounded-full px-3 py-1 text-xs font-semibold transition-all"
                      style={option.code === locale 
                        ? { backgroundColor: '#1D1916', color: 'white' }
                        : { color: '#6B6A66' }
                      }
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              <Button 
                onClick={() => scrollToSection("booking")} 
                className="mt-2 w-full rounded-xl h-12 text-sm font-semibold"
                style={{ backgroundColor: '#9E521F', color: 'white' }}
              >
                {t("booking")}
              </Button>
            </div>
          </div>
        )}
        </div>
      </Container>
    </nav>
  );
};
