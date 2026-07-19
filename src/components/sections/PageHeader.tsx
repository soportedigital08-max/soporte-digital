import Reveal from "@/components/ui/Reveal";

// Encabezado de página interior — cohesión dark con el Hero (azul profundo + grilla tech).
export default function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-primary-900">
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-primary-600/30 blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="container relative py-24 text-center max-w-3xl mx-auto">
        <Reveal>
          <h1 className="text-h1 text-white font-extrabold leading-[1.05]">
            {title}
          </h1>
          {subtitle && (
            <p className="text-body-lg text-primary-100 mt-6">{subtitle}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
