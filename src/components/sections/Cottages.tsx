"use client";

import Image from "next/image";
import { useCallback } from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { siteConfig, type Locale } from "@/content/site";
import { useLocale, useTranslations } from "next-intl";

export const Cottages = () => {
  const t = useTranslations("cottages");
  const locale = useLocale() as Locale;
  const cottagesContent = siteConfig.locales[locale].cottages;

  const scrollToBooking = useCallback(() => {
    const section = document.getElementById("booking");
    if (!section) return;
    const navOffset = 120;
    const top = section.getBoundingClientRect().top + window.scrollY - navOffset;
    window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
  }, []);

  return (
    <section 
      id="cottages" 
      className="py-20"
      style={{ backgroundColor: '#F6F0E7' }}
    >
      <Container>
        <SectionTitle>
          {t("title")}
        </SectionTitle>

        <p 
          className="max-w-3xl mx-auto text-center mb-8 text-lg leading-relaxed"
          style={{ color: '#6B6A66' }}
        >
          {cottagesContent.description}
        </p>

        <div 
          className="relative w-full max-w-5xl mx-auto mb-12 rounded-2xl overflow-hidden"
          style={{
            border: '1px solid rgba(107, 106, 102, 0.15)',
            boxShadow: '0 4px 16px rgba(29, 25, 22, 0.12)'
          }}
        >
          <div className="relative aspect-[16/9]">
            <Image
              src="/images/FOT_6542.jpg"
              alt="Domki u Elizy - widok obu domków"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cottagesContent.items.map((cottage) => (
            <div
              key={cottage.name}
              className="rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(107, 106, 102, 0.15)',
                boxShadow: '0 2px 8px rgba(29, 25, 22, 0.08)'
              }}
            >
              <div className="p-6 flex h-full flex-col">
                <div className="flex-1 space-y-6">
                  <div className="space-y-4">
                    <h3 
                      className="text-xl font-semibold"
                      style={{ color: '#1D1916' }}
                    >
                      {cottage.name}
                    </h3>
                
                    <p 
                      className="text-sm leading-relaxed"
                      style={{ color: '#6B6A66' }}
                    >
                      {cottage.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div 
                      className="text-sm space-y-1"
                      style={{ color: '#6B6A66' }}
                    >
                      <p>
                        {t("features.capacity")}: {cottage.guests} osób
                      </p>
                      <p>
                        {t("features.bedrooms")}: {cottage.bedrooms}
                      </p>
                      <p>
                        {t("features.bathroom")}: {cottage.bathrooms}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {cottage.livingAreaHighlights.map((highlight, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-xs rounded-full font-medium"
                          style={{
                            backgroundColor: 'rgba(111, 133, 65, 0.12)',
                            color: '#6F8541'
                          }}
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-3">
                      <div className="text-sm">
                        <p 
                          className="font-semibold mb-1"
                          style={{ color: '#1D1916' }}
                        >
                          {t("kitchen")}
                        </p>
                        <ul 
                          className="list-disc list-inside text-xs space-y-1"
                          style={{ color: '#6B6A66' }}
                        >
                          {cottage.kitchenEquipment.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="text-sm">
                        <p 
                          className="font-semibold mb-1"
                          style={{ color: '#1D1916' }}
                        >
                          {t("amenities")}
                        </p>
                        <ul 
                          className="list-disc list-inside text-xs space-y-1"
                          style={{ color: '#6B6A66' }}
                        >
                          {cottage.amenities.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      {cottage.spaNote && (
                        <p 
                          className="text-xs font-semibold"
                          style={{ color: '#6F8541' }}
                        >
                          {cottage.spaNote}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <Button
                  type="button"
                  className="mt-8 w-full rounded-full py-3 text-base font-semibold transition-all hover:shadow-lg"
                  style={{ backgroundColor: "#9E521F", color: "white" }}
                  onClick={scrollToBooking}
                >
                  {t("bookCta")}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
