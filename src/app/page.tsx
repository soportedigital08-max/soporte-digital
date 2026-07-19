import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Problemas from "@/components/sections/Problemas";
import Confianza from "@/components/sections/Confianza";
import Stats from "@/components/sections/Stats";
import Stack from "@/components/sections/Stack";
import Servicios from "@/components/sections/Servicios";
import DesarrolloMedida from "@/components/sections/DesarrolloMedida";
import CTA from "@/components/sections/CTA";
import Reveal from "@/components/ui/Reveal";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Reveal>
          <Problemas />
        </Reveal>
        <Reveal>
          <Confianza />
        </Reveal>
        <Reveal>
          <Stats />
        </Reveal>
        <Reveal>
          <Stack />
        </Reveal>
        <Reveal>
          <Servicios />
        </Reveal>
        <Reveal>
          <DesarrolloMedida />
        </Reveal>
        <Reveal>
          <CTA />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
