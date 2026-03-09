"use client";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useTranslations } from "next-intl";

const badges = [
  { icon: "🚗", labelKey: "parking" },
  { icon: "📶", labelKey: "wifi" },
  { icon: "🗻", labelKey: "proximity" },
];

export const Hero = () => {
  const t = useTranslations("hero");

  return (
    <section id="home" className="relative min-h-screen flex items-center text-white">
      <Image
        src="/images/FOT_6552.jpg"
        alt={t("imageAlt")}
        fill
        priority
        className="object-cover"
      />

      <div 
        className="absolute inset-0" 
        style={{ backgroundColor: 'rgba(29, 25, 22, 0.65)' }}
      />
      
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[#1D1916]/40 via-transparent to-transparent"
      />

      <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-16 lg:py-24">
        <div className="max-w-3xl space-y-8 text-left">
          <div className="flex flex-wrap gap-3">
            {badges.map((badge) => (
              <span
                key={badge.labelKey}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium backdrop-blur-sm"
                style={{ 
                  backgroundColor: 'rgba(111, 133, 65, 0.25)',
                  border: '1px solid rgba(111, 133, 65, 0.4)'
                }}
              >
                <span>{badge.icon}</span>
                <span>{t(`badges.${badge.labelKey}`)}</span>
              </span>
            ))}
          </div>

          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.4em] text-white/80 font-medium">
              {t("eyebrow")}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-white !text-white">
              {t("title")}
            </h1>
            <p className="text-lg text-white/90 lg:text-xl leading-relaxed">
              {t("description")}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button 
              size="lg" 
              className="h-12 rounded-full px-8 text-base font-semibold shadow-[0_12px_30px_rgba(158,82,31,0.35)] transition-all hover:translate-y-[-1px]"
              style={{ 
                background: 'linear-gradient(135deg, #B87331 0%, #8A4414 100%)',
                color: 'white',
                border: '1px solid rgba(255, 255, 255, 0.25)'
              }}
            >
              {t("primaryCta")}
            </Button>
            <Button
              size="lg"
              className={cn(
                "h-12 rounded-full px-8 text-base font-semibold transition-all",
                "hover:shadow-[0_10px_24px_rgba(0,0,0,0.2)]"
              )}
              style={{
                borderColor: 'rgba(255, 255, 255, 0.65)',
                backgroundColor: '#F6F0E7',
                color: '#1D1916'
              }}
            >
              {t("secondaryCta")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
