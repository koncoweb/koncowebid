import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Pelatihan AI",
  description:
    "Pelatihan AI KoncoWeb: buat aplikasi tanpa koding, tingkatkan produktivitas kerja, dan adopsi AI secara aman untuk instansi & bisnis.",
  keywords: [
    "pelatihan AI",
    "kursus AI tanpa koding",
    "pembuatan aplikasi dengan AI",
    "adopsi AI untuk instansi",
    "transformasi digital",
  ],
};

const tracks = [
  {
    title: "AI untuk Developer",
    items: [
      "Dasar LLM & Prompting",
      "Membuat App dengan Next.js + LLM",
      "RAG & Vector DB",
      "Agent & Workflow Orchestration",
    ],
  },
  {
    title: "AI untuk Corporate/Instansi",
    items: [
      "Strategi & Roadmap AI",
      "Keamanan & Kepatuhan",
      "Automasi Proses",
      "Metrik & ROI",
    ],
  },
];

export default function Page() {
  return (
    <>
      <Nav />
      <main className="container-edge py-10">
        <h1 className="text-3xl font-semibold">Pelatihan AI Tanpa Koding</h1>
        <p className="mt-2 text-kw-muted max-w-3xl">
          Berdasarkan referensi layanan KoncoWeb, pelatihan ini berfokus pada praktik membuat aplikasi dengan AI Tools
          tanpa koding serta pemahaman manfaat strategis AI untuk produktivitas kerja dan pengembangan bisnis. Tanpa
          menyebut pihak tertentu maupun harga, konten difokuskan pada kompetensi yang relevan bagi tim Anda.
        </p>
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          {tracks.map((t, i) => (
            <div key={i} className="card p-5">
              <h2 className="font-semibold">{t.title}</h2>
              <ul className="mt-3 space-y-2 text-sm text-kw-muted list-disc pl-5">
                {t.items.map((x, j) => (
                  <li key={j}>{x}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-6 card p-5">
          <h3 className="font-semibold">Format & Jadwal</h3>
          <p className="mt-2 text-kw-muted text-sm">Online/offline, 1–3 hari. Kustom kurikulum untuk tim.</p>
        </div>

        <section className="mt-6 grid sm:grid-cols-2 gap-4">
          <div className="card p-5">
            <h3 className="font-semibold">Manfaat untuk Dunia Kerja</h3>
            <ul className="mt-3 list-disc pl-5 text-sm text-kw-muted space-y-2">
              <li>Otomasi proses administrasi dan pelaporan berulang.</li>
              <li>Pembuatan tool internal cepat untuk membantu operasional harian.</li>
              <li>Peningkatan kolaborasi tim melalui workflow yang terdokumentasi.</li>
              <li>Pemahaman keamanan dan tata kelola saat menggunakan model AI.</li>
            </ul>
          </div>
          <div className="card p-5">
            <h3 className="font-semibold">Manfaat untuk Bisnis</h3>
            <ul className="mt-3 list-disc pl-5 text-sm text-kw-muted space-y-2">
              <li>Waktu ke pasar lebih cepat dengan prototyping aplikasi berbasis AI.</li>
              <li>Efisiensi biaya pengembangan melalui pendekatan low-code/no-code.</li>
              <li>Eksperimen aman: PoC cepat sebelum inisiatif skala besar.</li>
              <li>Integrasi proses dan data untuk insight operasional yang lebih baik.</li>
            </ul>
          </div>
        </section>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="/layanan" className="btn-outline">Lihat Layanan Implementasi AI</a>
          <a href="/kontak" className="btn-primary">Diskusikan Kebutuhan Tim Anda</a>
        </div>
      </main>
      <Footer />
    </>
  );
}


