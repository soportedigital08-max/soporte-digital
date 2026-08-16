interface Faq {
  pregunta: string;
  respuesta: string;
}

// Sección FAQ — Arquitectura §10 (página de servicio: FAQ)
export default function FAQ({ faqs }: { faqs: Faq[] }) {
  if (!faqs?.length) return null;
  return (
    <section className="relative py-24">
      <div className="container max-w-3xl">
        <div className="relative rounded-[2rem] bg-surface ring-1 ring-white/10 shadow-premium px-6 py-14 sm:px-12">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent rounded-t-[2rem]" />
          <h2 className="text-h2 text-gray-900 text-center">Preguntas frecuentes</h2>
          <div className="mt-12 flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="bg-background border border-gray-200 rounded-card p-6"
              >
                <summary className="text-h4 text-gray-900 cursor-pointer">
                  {faq.pregunta}
                </summary>
                <p className="text-body text-gray-600 mt-3">{faq.respuesta}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
