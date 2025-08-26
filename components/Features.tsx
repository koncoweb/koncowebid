const items = [
  {
    title: "Pembuatan Aplikasi & Web",
    desc: "Bangun MVP sampai skala produksi. Integrasi AI (LLM, RAG, agen, vector DB).",
  },
  {
    title: "Pelatihan AI Terapan",
    desc: "Bootcamp dan in-house training: membuat aplikasi pakai AI, prompt engineering, RAG, automations.",
  },
  {
    title: "Konsultan AI untuk Corporate",
    desc: "Roadmap AI, keamanan & kepatuhan, PoC cepat, integrasi stack eksisting.",
  },
  {
    title: "Arsitektur Modern",
    desc: "SSR/SSG, edge, serverless, observability, biaya efisien, performa tinggi.",
  },
];

export default function Features() {
  return (
    <section className="container-edge py-10 sm:py-14">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((it, i) => (
          <div key={i} className="card p-5">
            <h3 className="font-semibold">{it.title}</h3>
            <p className="mt-2 text-kw-muted text-sm">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


