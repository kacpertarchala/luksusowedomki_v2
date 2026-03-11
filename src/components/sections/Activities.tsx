"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { siteConfig, type Locale } from "@/content/site";
import { useLocale, useTranslations } from "next-intl";

export const Activities = () => {
  const t = useTranslations("activities");
  const locale = useLocale() as Locale;
  const activitiesContent = siteConfig.locales[locale].activities;

  const allActivities = [
    ...(activitiesContent.details.winter || []),
    ...(activitiesContent.details.summer || []),
    ...(activitiesContent.details.yearRound || []),
  ];

  const activityImages = [
    {
      src: "/images/kulig-zakopane-niesamowita-atrakcja.jpg",
      alt: "Kuligi w Zakopanem",
      width: 1600,
      height: 900,
    },
    {
      src: "/images/FOT_6485.jpg",
      alt: "Atrakcje w okolicy",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/7a728534-1f86-4c8a-9463-847c27becb40-scaled.webp",
      alt: "Wieża widokowa SkyWalk Poronin",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/spływ-dunajcem-z-widokiem-na-trzy-korony.jpg",
      alt: "Spływ Dunajcem",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/84088963-1287-46b5-ab77-155d9f3de28e.jpg",
      alt: "Aktywności zimowe",
      width: 1080,
      height: 712,
    },
    {
      src: "/images/received_253406212892940.jpeg",
      alt: "Wypoczynek w Tatrach",
      width: 2016,
      height: 1512,
    },
  ];

  return (
    <section
      id="activities"
      className="relative overflow-hidden py-24"
      style={{ backgroundColor: "#E9DED1" }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -left-10 top-0 h-64 w-64 rounded-full bg-[#6F8541]/20 blur-[120px]" />
        <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-[#F3B690]/20 blur-[130px]" />
      </div>

      <Container>
        <SectionTitle>
          {t("title")}
        </SectionTitle>

        <p className="mx-auto mb-16 max-w-3xl text-center text-lg leading-relaxed text-[#5B574F]">
          {activitiesContent.description}
        </p>

        <div className="relative grid gap-12 lg:grid-cols-[minmax(0,0.55fr)_1fr] lg:items-stretch">
          <div className="grid h-full grid-rows-6 gap-4">
            {allActivities.map((activity) => (
              <div
                key={activity.title}
                className="flex flex-col justify-between gap-3 rounded-[2rem] border border-[#D8CCBC] bg-white px-7 py-6 text-left shadow-[0_12px_30px_rgba(29,25,22,0.08)]"
              >
                <div>
                  <p className="text-base font-semibold text-[#1D1916]">{activity.title}</p>
                  <p className="text-sm leading-relaxed text-[#6B645C]">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {activityImages.map((image) => (
              <div
                key={image.src}
                className="relative overflow-hidden rounded-[2rem] border border-[#D8CCBC]/80 bg-white/40 p-2 shadow-[0_18px_45px_rgba(29,25,22,0.15)] transition-transform duration-500 hover:-translate-y-1"
              >
                <div className="h-full w-full rounded-[1.5rem] bg-[#F6F1EB]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="h-full w-full rounded-[1.5rem] object-cover"
                    sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 32vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
