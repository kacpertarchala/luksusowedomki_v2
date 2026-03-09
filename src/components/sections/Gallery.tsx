"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { siteConfig } from "@/content/site";
import { useTranslations } from "next-intl";

export const Gallery = () => {
  const t = useTranslations("gallery");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const totalImages = siteConfig.gallery.length;
  const scrollRef = useRef<HTMLDivElement>(null);

  const rows = useMemo(() => {
    const base: Array<Array<{ index: number; image: (typeof siteConfig.gallery)[number] }>> = [[], []];
    siteConfig.gallery.forEach((image, index) => {
      base[index % 2].push({ index, image });
    });
    return base;
  }, []);

  const cycleImage = useCallback((direction: 1 | -1) => {
    setActiveIndex((current) => {
      if (current === null) return current;
      const nextIndex = (current + direction + totalImages) % totalImages;
      return nextIndex;
    });
  }, [totalImages]);

  useEffect(() => {
    if (activeIndex === null) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      } else if (event.key === "ArrowRight") {
        cycleImage(1);
      } else if (event.key === "ArrowLeft") {
        cycleImage(-1);
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [activeIndex, cycleImage]);

  const activeImage = activeIndex !== null ? siteConfig.gallery[activeIndex] : null;

  return (
    <section 
      id="gallery" 
      className="py-16"
      style={{ backgroundColor: '#F6F0E7' }}
    >
      <Container>
        <SectionTitle className="mb-10 md:mb-14">
          {t("title")}
        </SectionTitle>

        <div className="relative -mx-4">
          <div ref={scrollRef} className="overflow-x-auto pb-4 px-4">
            <div className="space-y-4 min-w-max">
              {rows.map((row, rowIndex) => (
                <div key={rowIndex} className="flex gap-4">
                  {row.map(({ image, index }) => (
                    <button
                      type="button"
                      key={image.src}
                      onClick={() => setActiveIndex(index)}
                      className="relative rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9E521F]"
                      style={{
                        border: '1px solid rgba(107, 106, 102, 0.15)',
                        boxShadow: '0 4px 12px rgba(29, 25, 22, 0.12)'
                      }}
                    >
                      <div className="w-40 h-32 md:w-52 md:h-40">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover"
                          sizes="210px"
                          priority={index < 4}
                        />
                      </div>
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <button
            type="button"
            aria-label="Przewiń galerię w lewo"
            className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 p-2 text-xl text-[#1D1916] shadow hover:bg-white"
            onClick={() => scrollRef.current?.scrollBy({ left: -320, behavior: "smooth" })}
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Przewiń galerię w prawo"
            className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 p-2 text-xl text-[#1D1916] shadow hover:bg-white"
            onClick={() => scrollRef.current?.scrollBy({ left: 320, behavior: "smooth" })}
          >
            ›
          </button>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#F6F0E7] via-[#F6F0E7] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#F6F0E7] via-[#F6F0E7] to-transparent" />
        </div>

        {activeImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
          >
            <div
              className="absolute inset-0 bg-black/70"
              onClick={() => setActiveIndex(null)}
            ></div>
            <div className="relative z-10 w-full max-w-5xl bg-white rounded-2xl shadow-2xl p-6 grid md:grid-cols-[3fr_1.2fr] gap-6">
              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                className="absolute top-4 right-4 text-[#1D1916] hover:text-[#9E521F]"
                aria-label="Zamknij galerię"
              >
                ✕
              </button>
              <div className="relative w-full h-[50vh] rounded-xl overflow-hidden">
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 60vw"
                />
                <button
                  type="button"
                  aria-label="Poprzednie zdjęcie"
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-xl text-[#1D1916] shadow hover:bg-white"
                  onClick={() => cycleImage(-1)}
                >
                  ‹
                </button>
                <button
                  type="button"
                  aria-label="Następne zdjęcie"
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-xl text-[#1D1916] shadow hover:bg-white"
                  onClick={() => cycleImage(1)}
                >
                  ›
                </button>
              </div>
              <div className="space-y-3 overflow-auto max-h-[50vh] pr-1">
                {siteConfig.gallery.map((image, index) => (
                  <button
                    type="button"
                    key={image.src}
                    onClick={() => setActiveIndex(index)}
                    className="group relative w-full min-h-[90px] rounded-xl overflow-hidden border-2 transition focus-visible:ring-2 focus-visible:ring-[#9E521F]"
                    style={{
                      borderColor: index === activeIndex ? '#9E521F' : 'rgba(255,255,255,0.4)',
                      boxShadow: index === activeIndex ? '0 0 0 1px #9E521F' : '0 1px 4px rgba(29, 25, 22, 0.12)'
                    }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="180px"
                    />
                    <div className={`absolute inset-0 bg-black/30 transition-opacity ${index === activeIndex ? 'opacity-0' : 'opacity-10 group-hover:opacity-0'}`}></div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};
