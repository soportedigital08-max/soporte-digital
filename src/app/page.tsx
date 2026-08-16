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
import SectionDivider from "@/components/ui/SectionDivider";
import Reveal from "@/components/ui/Reveal";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SectionDivider />
        <Reveal>
          <Problemas />
        </Reveal>
        <SectionDivider />
        <Reveal>
          <Confianza />
        </Reveal>
        <SectionDivider />
        <Reveal>
          <Stats />
        </Reveal>
        <SectionDivider />
        <Reveal>
          <Stack />
        </Reveal>
        <SectionDivider />
        <Reveal>
          <Servicios />
        </Reveal>
        <SectionDivider />
        <Reveal>
          <DesarrolloMedida />
        </Reveal>
        <SectionDivider />
        <Reveal>
          <CTA />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
