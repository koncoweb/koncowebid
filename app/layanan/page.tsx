import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Layanan",
  description:
    "Layanan KoncoWeb: pembuatan aplikasi & web, integrasi AI, pelatihan AI tanpa koding, dan konsultasi implementasi untuk instansi & corporate.",
  keywords: [
    "layanan koncoweb",
    "pembuatan aplikasi",
    "pelatihan AI tanpa koding",
    "implementasi AI",
    "konsultan AI",
    "RSUD",
    "instansi pemerintah",
  ],
};

export default function Page() {
  return (
    <>
      <Nav />
      <main className="container-edge py-10">
        <h1 className="text-3xl font-semibold">Layanan KoncoWeb</h1>
        <p className="mt-2 text-kw-muted max-w-3xl">
          Terinspirasi dari referensi Anda, kami menyediakan layanan lengkap untuk pelatihan AI praktis, pembuatan aplikasi
          tanpa koding maupun dengan stack modern, serta pendampingan implementasi AI di lingkungan instansi pemerintah dan
          corporate. Konten ini dioptimalkan untuk pencarian seputar pelatihan AI, pembuatan aplikasi berbasis AI, dan
          konsultasi AI.
        </p>

        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          {[
            { t: "Pembuatan Aplikasi & Web", d: "Bangun solusi dari MVP hingga produksi. Next.js/SvelteKit, SSR, edge, dan integrasi AI (LLM, RAG, agen)." },
            { t: "Pelatihan AI Tanpa Koding", d: "Program 1 hari yang hands-on: membuat aplikasi memakai AI tools tanpa koding, publikasi, dan best practice." },
            { t: "Konsultan & Implementasi AI", d: "Assessment, roadmap, keamanan, PoC cepat, integrasi ke proses kerja instansi/corporate." },
            { t: "Pendampingan Publikasi & Operasi", d: "Penyimpanan data, observability, reliability, serta tata kelola dan pelaporan." },
          ].map((x, i) => (
            <div key={i} className="card p-5">
              <h2 className="font-semibold">{x.t}</h2>
              <p className="mt-2 text-kw-muted text-sm">{x.d}</p>
            </div>
          ))}
        </div>

        <section className="mt-8 grid sm:grid-cols-2 gap-4">
          <div className="card p-5">
            <h3 className="font-semibold">Materi Pelatihan Utama</h3>
            <ul className="mt-3 list-disc pl-5 text-sm text-kw-muted space-y-2">
              <li>Pengenalan AI untuk produktivitas dan otomasi pekerjaan.</li>
              <li>AI untuk membuat aplikasi: konsep, limitasi, dan desain fitur.</li>
              <li>Praktik memakai AI Tools (mis. DYAD atau setara) untuk membangun aplikasi.</li>
              <li>Penyimpanan data, koneksi ke basis data, dan publikasi aplikasi.</li>
              <li>Workflow kolaborasi dan cara mengajari rekan kerja.</li>
            </ul>
          </div>
          <div className="card p-5">
            <h3 className="font-semibold">Manfaat untuk Organisasi</h3>
            <ul className="mt-3 list-disc pl-5 text-sm text-kw-muted space-y-2">
              <li>Peningkatan produktivitas dan digitalisasi proses manual.</li>
              <li>Terbentuknya kemampuan internal membuat tool AI praktis.</li>
              <li>Percepatan adopsi AI yang sejalan dengan visi transformasi digital.</li>
              <li>Standar keamanan dan kepatuhan dalam implementasi AI.</li>
            </ul>
          </div>
        </section>

        <section className="mt-8 card p-5">
          <h3 className="font-semibold">Metodologi Pelatihan</h3>
          <ol className="mt-3 list-decimal pl-5 text-sm text-kw-muted space-y-2">
            <li>Diskusi kebutuhan dan identifikasi proses yang bisa diotomasi.</li>
            <li>Praktik persiapan alat dan kontrol AI untuk membangun fitur.</li>
            <li>Panduan troubleshooting dan publikasi aplikasi.</li>
          </ol>
        </section>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="/kontak" className="btn-primary">Minta Proposal Pelatihan</a>
          <a href="https://wa.me/6285150731986" target="_blank" rel="noopener noreferrer" className="btn-outline">Konsultasi Implementasi AI</a>
        </div>

        <div className="mt-4">
          <a
            href="https://koncowebportal.vercel.app/landing/MembershipKoncoweb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto text-center rounded-xl bg-kw-neon text-black px-6 py-4 font-semibold text-base sm:text-lg hover:opacity-90"
          >
            Pelatihan AI bagi Perorangan
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}


