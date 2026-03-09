"use client";

import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";
import { useTranslations } from "next-intl";

export const Contact = () => {
  const t = useTranslations("contact");
  const phoneHref = `tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`;
  const emailHref = `mailto:${siteConfig.contact.email}`;

  return (
    <section 
      id="contact" 
      className="py-20"
      style={{ backgroundColor: '#F6F0E7' }}
    >
      <Container>
        <SectionTitle>
          {t("title")}
        </SectionTitle>

        <p 
          className="text-center mb-12 max-w-2xl mx-auto text-lg leading-relaxed"
          style={{ color: '#6B6A66' }}
        >
          {t("description")}
        </p>

        <div className="max-w-5xl mx-auto space-y-10">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[28px] border border-white/60 bg-white/95 p-6 text-center shadow-[0_20px_45px_rgba(29,25,22,0.08)] flex flex-col h-full">
              <p className="text-xs uppercase tracking-[0.4em] text-[#9E521F]">{t("info.phone")}</p>
              <div className="flex-1 flex items-center justify-center">
                <p className="text-2xl font-semibold text-[#1D1916]">
                  <a href={phoneHref} className="hover:underline">{siteConfig.contact.phone}</a>
                </p>
              </div>
              <Button
                asChild
                className="mt-4 w-full rounded-full h-12 text-sm font-semibold"
                style={{ backgroundColor: '#9E521F', color: 'white' }}
              >
                <a href={phoneHref}>{t("callCta")}</a>
              </Button>
            </div>

            <div className="rounded-[28px] border border-white/60 bg-white/95 p-6 text-center shadow-[0_20px_45px_rgba(29,25,22,0.08)] flex flex-col h-full">
              <p className="text-xs uppercase tracking-[0.4em] text-[#9E521F]">{t("info.email")}</p>
              <div className="flex-1 flex items-center justify-center">
                <p className="text-2xl font-semibold text-[#1D1916]">
                  <a href={emailHref} className="hover:underline">{siteConfig.contact.email}</a>
                </p>
              </div>
              <Button
                asChild
                className="mt-4 w-full rounded-full h-12 text-sm font-semibold"
                style={{ backgroundColor: '#1D1916', color: 'white' }}
              >
                <a href={emailHref}>{t("form.submit")}</a>
              </Button>
            </div>

            <div className="rounded-[28px] border border-white/60 bg-white/95 p-6 text-center shadow-[0_20px_45px_rgba(29,25,22,0.08)] flex flex-col h-full">
              <p className="text-xs uppercase tracking-[0.4em] text-[#9E521F]">{t("info.address")}</p>
              <div className="flex-1 flex items-center justify-center">
                <p className="text-2xl font-semibold text-[#1D1916]">
                  {siteConfig.contact.address}
                </p>
              </div>
              <Button
                asChild
                className="mt-4 w-full rounded-full h-12 text-sm font-semibold"
                style={{ backgroundColor: '#6F8541', color: 'white' }}
              >
                <a href={siteConfig.contact.googleMapsPlaceUrl} target="_blank" rel="noopener noreferrer">
                  Pokaż na mapie
                </a>
              </Button>
            </div>
          </div>

          <div
            className="rounded-[36px] border border-white/60 bg-white/95 p-3 shadow-[0_25px_60px_rgba(29,25,22,0.12)]"
          >
            <div
              className="rounded-3xl overflow-hidden h-72 md:h-96"
              style={{
                border: '1px solid rgba(107, 106, 102, 0.18)',
                boxShadow: '0 6px 18px rgba(29, 25, 22, 0.12)'
              }}
            >
              <iframe
                src={siteConfig.contact.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa dojazdu"
              ></iframe>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
