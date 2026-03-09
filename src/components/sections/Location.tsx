
"use client";

import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { siteConfig, type Locale } from "@/content/site";
import { useLocale, useTranslations } from "next-intl";

export const Location = () => {
  const t = useTranslations("location");
  const locale = useLocale() as Locale;
  const locationContent = siteConfig.locales[locale].location;

  return (
    <section 
      id="location" 
      className="py-20"
      style={{ backgroundColor: '#F6F0E7' }}
    >
      <Container>
        <SectionTitle className="mb-10 md:mb-12">
          {t("title")}
        </SectionTitle>

        <div className="max-w-5xl mx-auto">
          <div className="grid gap-10 md:grid-cols-2">
            <div
              className="rounded-[32px] bg-white p-8 shadow-[0_18px_45px_rgba(29,25,22,0.08)] border border-white/60"
              style={{ backgroundImage: "linear-gradient(180deg, rgba(255,255,255,0.95), rgba(244,238,229,0.95))" }}
            >
              <div className="space-y-3 text-[#5B574F]">
                <p className="text-sm uppercase tracking-[0.3em] text-[#9E521F]">{t("subtitle")}</p>
                <h3 className="text-2xl font-semibold text-[#1D1916]">{locationContent.title}</h3>
                <p className="leading-relaxed">{locationContent.intro}</p>
              </div>

              <div className="mt-8 space-y-6">
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-[#1D1916]">{t("distances")}</p>
                  <div className="divide-y divide-[#E3D5C4] rounded-2xl border border-[#E3D5C4] bg-white">
                    {locationContent.distances.map((item) => (
                      <div key={item.place} className="flex items-center justify-between gap-4 px-4 py-3 text-sm">
                        <div className="flex items-center gap-3 text-[#1D1916]">
                          <span className="relative inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F5E8D9] text-xs text-[#9E521F]">
                            •
                          </span>
                          <span>{item.place}</span>
                        </div>
                        <span className="font-semibold text-[#1D1916]">{item.distance}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-[#F5E8D9] px-4 py-3 text-sm font-medium text-[#5B574F]">
                  {locationContent.transferNote}
                </div>
              </div>
            </div>

            <div
              className="rounded-[32px] bg-white/90 p-3 shadow-[0_18px_45px_rgba(29,25,22,0.12)]"
              style={{ border: '1px solid rgba(255,255,255,0.65)' }}
            >
              <div
                className="rounded-2xl overflow-hidden h-64 md:h-full min-h-[300px]"
                style={{
                  border: '1px solid rgba(107, 106, 102, 0.15)',
                  boxShadow: '0 4px 12px rgba(29, 25, 22, 0.12)'
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2596.7890234567!2d19.9748082!3d49.3350829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715f284b7d9fe3d%3A0x7760b61724074ccd!2sLuksusowe%20domki%20u%20Elizy!5e0!3m2!1sen!2spl!4v1234567890123!5m2!1sen!2spl"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokalizacja Domki u Elizy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
