import { Hero } from "@/components/sections/Hero";
import { Cottages } from "@/components/sections/Cottages";
import { Amenities } from "@/components/sections/Amenities";
import { Location } from "@/components/sections/Location";
import { Activities } from "@/components/sections/Activities";
import { VirtualTour } from "@/components/sections/VirtualTour";
import { Gallery } from "@/components/sections/Gallery";
import { Booking } from "@/components/sections/Booking";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Navigation } from "@/components/Navigation";

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Cottages />
      <Amenities />
      <Location />
      <Activities />
      <VirtualTour />
      <Gallery />
      <Booking />
      <Contact />
      <Footer />
    </main>
  );
}
