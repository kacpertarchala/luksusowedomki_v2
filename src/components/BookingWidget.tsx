"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { useTranslations } from "next-intl";

export const BookingWidget = () => {
  const t = useTranslations("booking");
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [hasError, setHasError] = useState(false);
  const baseHeight = 420;
  const [iframeHeight, setIframeHeight] = useState(baseHeight);
  const [hasDynamicHeight, setHasDynamicHeight] = useState(false);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) {
      return;
    }

    let isMounted = true;
    let setupInterval: ReturnType<typeof setInterval> | null = null;
    let failTimeout: ReturnType<typeof setTimeout> | null = null;

    const handleMessage = (event: MessageEvent) => {
      if (!isMounted || !iframe) return;
      const data = event.data;
      if (!data || data.sender !== "reservation-form") return;

      if (typeof data.height === "number") {
        setIframeHeight(Math.max(data.height + 10, 120));
        if (!hasDynamicHeight) {
          setHasDynamicHeight(true);
        }
      }

      if (data.event?.name === "widget.scrollup.requested") {
        try {
          iframe.scrollIntoView({ behavior: "smooth", block: "start" });
        } catch (error) {
          console.error(error);
        }
      }
    };

    window.addEventListener("message", handleMessage);

    const setup = () => {
      try {
        iframe.contentWindow?.postMessage(
          { location: window.location.toString(), setup: { autoHeight: true } },
          "*"
        );
      } catch (error) {
        // no-op
      }
    };

    const handleLoad = () => {
      if (!isMounted) return;
      if (failTimeout) {
        clearTimeout(failTimeout);
        failTimeout = null;
      }
      setHasError(false);
      setup();
    };

    iframe.addEventListener("load", handleLoad);

    setupInterval = setInterval(setup, 1000);

    failTimeout = setTimeout(() => {
      if (isMounted) {
        setHasError(true);
      }
    }, 5000);

    return () => {
      isMounted = false;
      window.removeEventListener("message", handleMessage);
      iframe.removeEventListener("load", handleLoad);
      if (setupInterval) {
        clearInterval(setupInterval);
      }
      if (failTimeout) {
        clearTimeout(failTimeout);
      }
    };
  }, [hasDynamicHeight]);

  const handleFallback = () => {
    window.open(siteConfig.contact.bookingWidgetFallbackUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="space-y-6">
      <iframe
        ref={iframeRef}
        id="ra-reservation-form-v2"
        title="Booking widget"
        src={siteConfig.contact.bookingWidgetSrc}
        style={{
          width: "100%",
          border: "none",
          padding: 0,
          display: "block",
          background: "transparent",
          borderRadius: "12px",
          minHeight: hasDynamicHeight ? undefined : baseHeight,
          height: iframeHeight,
          transition: "height 200ms ease",
        }}
        loading="lazy"
        onError={() => setHasError(true)}
      />

      {hasError && (
        <div className="space-y-4 rounded-2xl border border-[#F5C7B0] bg-[#FFF6F1] p-4 md:p-6 text-center">
          <p className="text-sm leading-relaxed text-[#6B6A66]">{t("fallbackNotice")}</p>

          <Button
            type="button"
            size="lg"
            className="transition-all hover:shadow-lg"
            style={{ backgroundColor: "#9E521F", color: "white" }}
            onClick={handleFallback}
          >
            {t("fallbackCta")}
          </Button>
        </div>
      )}
    </div>
  );
};
