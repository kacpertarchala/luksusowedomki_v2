"use client";

import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { siteConfig, type Locale } from "@/content/site";
import { useLocale, useTranslations } from "next-intl";

export const Amenities = () => {
  const t = useTranslations("amenities");
  const locale = useLocale() as Locale;
  const amenitiesContent = siteConfig.locales[locale].amenities;

  return (
    <section 
      id="amenities" 
      className="py-20"
      style={{ backgroundColor: '#E8D9C7' }}
    >
      <Container>
        <SectionTitle>
          {t("title")}
        </SectionTitle>
        <p 
          className="max-w-3xl mx-auto text-center mb-12 text-lg leading-relaxed"
          style={{ color: '#6B6A66' }}
        >
          {amenitiesContent.description}
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenitiesContent.items.map((amenity, index) => (
            <div
              key={index}
              className="p-6 rounded-xl text-center transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(107, 106, 102, 0.15)',
                boxShadow: '0 2px 8px rgba(29, 25, 22, 0.08)'
              }}
            >
              <div
                className="text-4xl mb-4"
                style={{ color: '#2F5D2E' }}
              >
                ✓
              </div>
              <p 
                className="text-sm leading-relaxed font-medium"
                style={{ color: '#1D1916' }}
              >
                {amenity}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
