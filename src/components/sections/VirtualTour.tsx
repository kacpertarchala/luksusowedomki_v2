"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { siteConfig, type Locale } from "@/content/site";

export const VirtualTour = () => {
  const t = useTranslations("virtualTour");
  const locale = useLocale() as Locale;
  const tourContent = siteConfig.locales[locale].virtualTour;

  return (
    <section
      id="virtual-tour"
      className="relative overflow-hidden py-24"
      style={{ backgroundColor: "#F4EBDC" }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-[#F8D3B3] blur-[140px]" />
        <div className="absolute bottom-[-4rem] left-0 h-80 w-80 rounded-full bg-[#B7C39D] blur-[160px]" />
      </div>

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative z-10 space-y-8">
            <SectionTitle centered={false} subtitle={tourContent.description}>
              {tourContent.heading || t("title")}
            </SectionTitle>

            <p className="text-base leading-relaxed text-[#5B574F]">
              {t("subtitle")}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="rounded-full px-8 py-3"
                style={{ backgroundColor: "#9E521F", color: "#fff" }}
              >
                <a
                  href={tourContent.tourUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  {tourContent.ctaLabel || t("cta")}
                  <span aria-hidden>↗</span>
                </a>
              </Button>
            </div>
          </div>

          <div className="relative z-10">
            <div className="relative overflow-hidden rounded-[3rem] border border-white/60 bg-white/30 p-2 shadow-[0_30px_65px_rgba(29,25,22,0.25)]">
              <div className="relative h-[420px] w-full overflow-hidden rounded-[2.5rem]">
                <Image
                  src={tourContent.backgroundImage}
                  alt={tourContent.heading}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 60vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D1916]/70 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-8 pb-8 text-white">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-white/80">360° View</p>
                    <p className="text-2xl font-semibold">{tourContent.heading}</p>
                  </div>
                  <a
                    href={tourContent.tourUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-white/15 px-5 py-2 text-sm font-medium backdrop-blur"
                  >
                    {t("cta")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
