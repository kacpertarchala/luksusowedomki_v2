
"use client";

import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/content/site";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

export const Footer = () => {
  const t = useTranslations("footer");

  return (
    <footer 
      className="py-12"
      style={{ backgroundColor: '#1D1916', color: '#F6F0E7' }}
    >
      <Container>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">{siteConfig.brand.name}</h3>
            <p 
              className="text-sm leading-relaxed"
              style={{ color: '#E8D9C7' }}
            >
              {siteConfig.brand.description}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Kontakt</h4>
            <div 
              className="space-y-2 text-sm"
              style={{ color: '#E8D9C7' }}
            >
              <p>{siteConfig.contact.phone}</p>
              <p>{siteConfig.contact.email}</p>
              <p>{siteConfig.contact.address}</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Linki</h4>
            <div className="space-y-2 text-sm flex flex-col">
              <Link
                href={siteConfig.legal.regulations}
                className="transition-opacity hover:opacity-70"
                style={{ color: '#E8D9C7' }}
              >
                {t("terms")}
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Social media</h4>
            <div className="flex space-x-4">
              <a
                href={siteConfig.social.facebook}
                className="transition-opacity hover:opacity-70"
                style={{ color: '#E8D9C7' }}
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div 
          className="mt-8 pt-8 text-center text-sm"
          style={{ 
            borderTop: '1px solid rgba(232, 217, 199, 0.2)',
            color: '#E8D9C7'
          }}
        >
          <p>{t("copyright")}</p>
        </div>
      </Container>
    </footer>
  );
};
