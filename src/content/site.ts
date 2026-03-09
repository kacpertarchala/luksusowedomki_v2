export const locales = ["pl", "en"] as const;
export type Locale = (typeof locales)[number];

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  googleMapsEmbedUrl: string;
  googleMapsPlaceUrl: string;
  bookingWidgetSrc: string;
  bookingWidgetFallbackUrl: string;
}

export interface LegalLinks {
  regulations: string;
  privacyPolicy: string;
  cookiesPolicy: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface SocialLinks {
  facebook: string;
  instagram: string;
}

export interface LocationContent {
  title: string;
  intro: string;
  perks: string[];
  distances: { place: string; distance: string }[];
  transferNote: string;
}

export interface CottageContent {
  name: string;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  description: string;
  livingAreaHighlights: string[];
  kitchenEquipment: string[];
  amenities: string[];
  spaNote?: string;
}

export interface ActivityDetail {
  title: string;
  description: string;
}

export interface ActivitiesContent {
  winter: ActivityDetail[];
  summer: ActivityDetail[];
  yearRound?: ActivityDetail[];
}

export interface VirtualTourContent {
  heading: string;
  description: string;
  ctaLabel: string;
  tourUrl: string;
  backgroundImage: string;
}

export interface AmenitiesContent {
  heading: string;
  description: string;
  items: string[];
}

export interface LocaleSections {
  location: LocationContent;
  cottages: {
    heading: string;
    description: string;
    items: CottageContent[];
  };
  activities: {
    heading: string;
    description: string;
    details: ActivitiesContent;
  };
  virtualTour: VirtualTourContent;
  amenities: AmenitiesContent;
}

export interface SiteContent {
  brand: {
    name: string;
    description: string;
  };
  contact: ContactInfo;
  legal: LegalLinks;
  gallery: GalleryImage[];
  social: SocialLinks;
  navigation: { name: string; href: string }[];
  locales: Record<Locale, LocaleSections>;
}

export const siteContent: SiteContent = {
  brand: {
    name: "Domki u Elizy",
    description: "Ekskluzywne domki wypoczynkowe w sercu Podhala",
  },
  contact: {
    phone: "+48 662 586 666",
    email: "79bula@wp.pl",
    address: "Suche 119F, 34-520 Suche",
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2596.7890234567!2d19.9748082!3d49.3350829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715f284b7d9fe3d%3A0x7760b61724074ccd!2sLuksusowe%20domki%20u%20Elizy!5e0!3m2!1sen!2spl!4v1234567890123!5m2!1sen!2spl",
    googleMapsPlaceUrl:
      "https://www.google.com/maps/place//data=!4m2!3m1!1s0x4715f284b7d9fe3d:0x7760b61724074ccd?sa=X&ved=1t:8290&ictx=111",
    bookingWidgetSrc:
      "https://roomadmin.pl/widget/reservation-v2/start?fh=185e7525e8d32b382e8edd092915f21674933576&style=%7B%22color_accent%22%3A%22%239E521F%22%2C%22color_bg%22%3A%22transparent%22%7D",
    bookingWidgetFallbackUrl: "https://www.booking.com/hotel/pl/domki-u-elizy.pl.html",
  },
  legal: {
    regulations: "/regulamin",
    privacyPolicy: "/polityka-prywatnosci",
    cookiesPolicy: "/polityka-cookies",
  },
  gallery: [
    { src: "/images/6be93c2b50356b2c4a30c59652bccceb.jpeg", alt: "Panorama domków w zimowej scenerii" },
    { src: "/images/681e1088-376d-457c-a467-d6da633a788d.jpg", alt: "Taras wypoczynkowy z widokiem na góry" },
    { src: "/images/951bf56e-6fb8-4cc5-9710-d709e713676c.jpg", alt: "Przytulna sypialnia w domku" },
    { src: "/images/983b9c78-23bd-4174-a89d-d726ca9661ae.jpg", alt: "Salon z kominkiem elektrycznym" },
    { src: "/images/84088963-1287-46b5-ab77-155d9f3de28e.jpg", alt: "Relaks w ogrodzie z jacuzzi" },
    { src: "/images/e1f6be67-e2b1-495d-9e91-26c41a55f7a0.jpg", alt: "Wieczorna atmosfera wokół domków" },
    { src: "/images/FOT_6555.jpg", alt: "Domki u Elizy zimą" },
    { src: "/images/FOT_6564.jpg", alt: "Wnętrze domku z dużymi oknami" },
    { src: "/images/FOT_6573.jpg", alt: "Salon z wygodną sofą" },
    { src: "/images/received_370337470704993.jpeg", alt: "Kulig w okolicy" },
    { src: "/images/received_409910270010698.jpeg", alt: "Widok na okoliczne szczyty" },
    { src: "/images/received_430784974983740.jpeg", alt: "Letnia strefa relaksu" },
    { src: "/images/received_834058434073649.jpeg", alt: "Wieczorne oświetlenie ogrodu" },
    { src: "/images/received_840453676691857.jpeg", alt: "Poranna kawa na tarasie" },
    { src: "/images/received_945007966027656.jpeg", alt: "Komfortowa łazienka" },
    { src: "/images/received_974210813069648.jpeg", alt: "Rodzinne chwile przy kominku" },
    { src: "/images/received_1236862776668762.jpeg", alt: "Przytulny kącik do czytania" },
    { src: "/images/received_1244692975906172.jpeg", alt: "Widok na góry z balkonu" },
    { src: "/images/received_1259465107768092.jpeg", alt: "Letni wypoczynek w ogrodzie" },
    { src: "/images/received_1656492251219220.jpeg", alt: "Zachód słońca nad Tatrami" },
  ],
  social: {
    facebook: "https://www.facebook.com/luksusowedomki",
    instagram: "https://www.instagram.com/domkiuelizy",
  },
  navigation: [
    { name: "home", href: "#home" },
    { name: "cottages", href: "#cottages" },
    { name: "amenities", href: "#amenities" },
    { name: "location", href: "#location" },
    { name: "activities", href: "#activities" },
    { name: "virtualTour", href: "#virtual-tour" },
    { name: "gallery", href: "#gallery" },
    { name: "booking", href: "#booking" },
    { name: "contact", href: "#contact" },
  ],
  locales: {
    pl: {
      location: {
        title: "Lokalizacja w Suchem",
        intro:
          "Domki znajdują się w spokojnej miejscowości Suche – między Zakopanem a Poroninem – zapewniając ciszę, ogród z widokiem na Tatry oraz prywatny balkon idealny na poranną kawę.",
        perks: ["Widok na ogród", "Przestronny balkon", "Prywatny parking"],
        distances: [
          { place: "Zakopane", distance: "6 km" },
          { place: "Białka Tatrzańska", distance: "21 km" },
          { place: "Bukowina Tatrzańska", distance: "14 km" },
          { place: "Lotnisko Kraków-Balice", distance: "108 km" },
        ],
        transferNote: "Oferujemy transfer z lotniska za dodatkową opłatą – skontaktuj się z nami, aby ustalić szczegóły.",
      },
      cottages: {
        heading: "Nasze domki",
        description:
          "W naszej ofercie do wyboru mają państwo dwa domki. Każdy domek składa się z salonu z elektrycznym kominkiem, kuchni, dwóch łazienek i określonej liczby sypialni.",
        items: [
          {
            name: "Domek u Elizy",
            guests: 6,
            bedrooms: 2,
            bathrooms: 2,
            description: "Domek 6-osobowy z dwiema sypialniami, idealny dla rodziny lub grupy przyjaciół.",
            livingAreaHighlights: [
              "Salon z elektrycznym kominkiem",
              "Szybki internet bezprzewodowy",
              "Płaskie telewizory z kanałami satelitarnymi",
            ],
            kitchenEquipment: [
              "Zmywarka do naczyń",
              "Lodówka",
              "Płyta indukcyjna",
              "Kuchenka mikrofalowa",
              "Pełna zastawa",
            ],
            amenities: [
              "Komfortowe łóżka małżeńskie",
              "Dwie łazienki",
              "Aneks kuchenny na parterze",
            ],
            spaNote: "W planach strefa SPA z jacuzzi i sauną",
          },
          {
            name: "Domek u Nikoli",
            guests: 7,
            bedrooms: 3,
            bathrooms: 2,
            description: "Domek 7-osobowy z trzema sypialniami, zapewniający więcej przestrzeni dla większych grup.",
            livingAreaHighlights: [
              "Salon z elektrycznym kominkiem",
              "Szybki internet bezprzewodowy",
              "Płaskie telewizory z kanałami satelitarnymi",
            ],
            kitchenEquipment: [
              "Zmywarka do naczyń",
              "Lodówka",
              "Płyta indukcyjna",
              "Kuchenka mikrofalowa",
              "Pełna zastawa",
            ],
            amenities: [
              "Komfortowe łóżka małżeńskie",
              "Dwie łazienki",
              "Aneks kuchenny na parterze",
            ],
            spaNote: "W planach strefa SPA z jacuzzi i sauną",
          },
        ],
      },
      activities: {
        heading: "Atrakcje",
        description: "Podhale kusi aktywnościami przez cały rok – współpracujemy z lokalnymi przewodnikami, aby zaplanować idealny pobyt.",
        details: {
          winter: [
            {
              title: "Kuligi z ogniskiem",
              description: "Tradycyjny przejazd saniami przez lasy Suchego, zakończony rozgrzewającym ogniskiem i regionalnymi przekąskami.",
            },
            {
              title: "Wycieczki skuterami śnieżnymi",
              description: "Wyprawy z lokalnym przewodnikiem po górskich trasach – widoki Zakopanego i Tatry w pełnej krasie.",
            },
            {
              title: "Przejażdżki UTV",
              description: "Całoroczne wyprawy terenowe UTV po leśnych ścieżkach Podhala dla miłośników adrenaliny.",
            },
          ],
          summer: [
            {
              title: "Wspólne grillowanie",
              description: "Wieczory w ogrodzie przy drewnianej altanie, z lokalnymi produktami i światłami ogrodu.",
            },
          ],
        },
      },
      virtualTour: {
        heading: "Spacer 360°",
        description: "Przejdź się po domkach jeszcze przed przyjazdem – zobacz salon, sypialnie i ogród w interaktywnym spacerze VR.",
        ctaLabel: "Otwórz spacer 360°",
        tourUrl: "https://panorama.nocowanie.pl/28/230628/230628.html",
        backgroundImage: "/images/FOT_6555.jpg",
      },
      amenities: {
        heading: "Wyposażenie",
        description: "Każdy domek oferuje udogodnienia, które pozwalają odpocząć w standardzie butikowego hotelu – od szybkiego Wi‑Fi po planowaną strefę SPA.",
        items: [
          "Szybki internet Wi‑Fi",
          "Telewizory z kanałami satelitarnymi",
          "Elektryczny kominek w salonie",
          "W pełni wyposażona kuchnia",
          "Dwie łazienki w każdym domku",
          "Prywatny balkon lub taras",
          "Prywatny parking",
          "Planowana strefa SPA (jacuzzi + sauna)",
        ],
      },
    },
    en: {
      location: {
        title: "Location – Suche",
        intro:
          "Our cottages sit in the quiet village of Suche, between Zakopane and Poronin. You wake up to a private garden view, step out onto a sunlit balcony, and keep your car safe on-site.",
        perks: ["Garden outlook", "Private balcony", "Dedicated parking"],
        distances: [
          { place: "Zakopane", distance: "6 km" },
          { place: "Białka Tatrzańska", distance: "21 km" },
          { place: "Bukowina Tatrzańska", distance: "14 km" },
          { place: "Kraków-Balice Airport", distance: "108 km" },
        ],
        transferNote: "Airport transfers can be arranged on request for an additional fee.",
      },
      cottages: {
        heading: "Our cottages",
        description:
          "Two standalone homes tailored for families and close friends. Each offers a living room with an electric fireplace, a fully stocked kitchen, and two elegant bathrooms.",
        items: [
          {
            name: "Domek Elizy",
            guests: 6,
            bedrooms: 2,
            bathrooms: 2,
            description: "Soft, airy interiors that open directly onto a private terrace.",
            livingAreaHighlights: [
              "Living room with electric fireplace",
              "Lounge corner for relaxed evenings",
              "High-speed Wi-Fi",
            ],
            kitchenEquipment: [
              "Dishwasher",
              "Refrigerator",
              "Induction cooktop",
              "Microwave",
              "Complete tableware set",
            ],
            amenities: [
              "Premium double beds",
              "Flat-screen TVs with satellite channels",
              "Two bathrooms with walk-in showers",
            ],
            spaNote: "Planned wellness zone: jacuzzi & sauna (coming soon).",
          },
          {
            name: "Domek Nikoli",
            guests: 7,
            bedrooms: 3,
            bathrooms: 2,
            description: "Spacious split-level layout with panoramic windows and an upper-floor balcony.",
            livingAreaHighlights: [
              "Living room with electric fireplace",
              "Generous dining table",
              "High-speed Wi-Fi",
            ],
            kitchenEquipment: [
              "Dishwasher",
              "Refrigerator",
              "Induction cooktop",
              "Microwave",
              "Complete tableware set",
            ],
            amenities: [
              "Comfortable double beds",
              "Flat TVs with satellite channels",
              "Two bathrooms with stylish showers",
            ],
            spaNote: "Planned wellness zone: jacuzzi & sauna (coming soon).",
          },
        ],
      },
      activities: {
        heading: "Activities",
        description: "Design your stay around alpine adventures or slow evenings by the fire – we partner with trusted local teams for every season.",
        details: {
          winter: [
            {
              title: "Sleigh rides with bonfires",
              description: "Horse-drawn routes through snowy forests ending with mulled wine, fire, and highland snacks.",
            },
            {
              title: "Snowmobile expeditions",
              description: "Guided trips across Tatra foothills – perfect for thrill seekers chasing panoramic views.",
            },
            {
              title: "UTV rides",
              description: "All-season UTV adventures tackling Podhale backroads on mud, gravel, or snow.",
            },
          ],
          summer: [
            {
              title: "Shared grilling evenings",
              description: "Open-air BBQ sessions under string lights with produce sourced from nearby farms.",
            },
          ],
        },
      },
      virtualTour: {
        heading: "360° Walkthrough",
        description: "Step inside our cottages virtually – wander through living rooms, bedrooms, and the garden before you even arrive.",
        ctaLabel: "Launch the 360° tour",
        tourUrl: "https://panorama.nocowanie.pl/28/230628/230628.html",
        backgroundImage: "/images/FOT_6564.jpg",
      },
      amenities: {
        heading: "Amenities",
        description: "Every cottage is designed like a boutique suite – generous Wi-Fi, designer fittings, and a wellness zone that’s on the way.",
        items: [
          "High-speed Wi-Fi",
          "Flat TVs with satellite channels",
          "Electric fireplace in the lounge",
          "Fully equipped kitchen",
          "Two bathrooms in each cottage",
          "Private balcony or terrace",
          "Secure on-site parking",
          "Planned wellness zone (jacuzzi + sauna)",
        ],
      },
    },
  },
};

export type SiteContentType = typeof siteContent;
export const siteConfig = siteContent;
export type SiteConfig = typeof siteConfig;
