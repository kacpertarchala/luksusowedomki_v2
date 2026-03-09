"use client";

import { BookingWidget } from "@/components/BookingWidget";
import { Container } from "@/components/ui/Container";
import { useTranslations } from "next-intl";

export const Booking = () => {
  const t = useTranslations("booking");

  return (
    <section
      id="booking"
      className="relative py-24"
      style={{
        backgroundImage:
          "radial-gradient(circle at top, rgba(255,255,255,0.65), transparent 55%), linear-gradient(135deg, #F6ECDC 0%, #E1CFBA 100%)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-60 overflow-hidden">
        <div className="absolute -top-20 right-8 h-64 w-64 rounded-full bg-[#F5D7BA] blur-[160px]" />
        <div className="absolute bottom-[-6rem] left-0 h-80 w-80 rounded-full bg-[#BBD0A4] blur-[180px]" />
      </div>

      <Container>
        <div className="relative z-10 space-y-8">
          <p className="text-base uppercase tracking-[0.35em] text-[#9E521F]">
            {t("description")}
          </p>

          <div className="relative mx-auto" style={{ width: "70vw", maxWidth: "1024px" }}>
            <div className="absolute -inset-6 rounded-[40px] bg-white/40 blur-2xl" aria-hidden />
            <div className="relative rounded-[36px] border border-white/50 bg-white/80 p-4 shadow-[0_35px_80px_rgba(29,25,22,0.15)]">
              <BookingWidget />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
