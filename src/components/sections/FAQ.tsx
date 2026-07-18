interface Faq {
  pregunta: string;
  respuesta: string;
}

// Sección FAQ — Arquitectura §10 (página de servicio: FAQ)
export default function FAQ({ faqs }: { faqs: Faq[] }) {
  if (!faqs?.length) return null;
  return (
    <section className="py-24 bg-surface">
      <div className="container max-w-3xl">
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
    </section>
  );
}
