import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Problemas from "@/components/sections/Problemas";
import Confianza from "@/components/sections/Confianza";
import Stats from "@/components/sections/Stats";
import Servicios from "@/components/sections/Servicios";
import DesarrolloMedida from "@/components/sections/DesarrolloMedida";
import CTA from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Problemas />
        <Confianza />
        <Stats />
        <Servicios />
        <DesarrolloMedida />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
